"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/MsgInput.js":
/*!********************************!*\
  !*** ./components/MsgInput.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// MsgList => Create / MsgItem => Update\nconst MsgInput = ({ mutate , id =undefined , text  })=>{\n    const textRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const onSubmit = (e)=>{\n        e.preventDefault();\n        e.stopPropagation();\n        const text = textRef.current.value;\n        textRef.current.value = \"\";\n        mutate(text, id);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"messages_input\",\n        onSubmit: onSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                ref: textRef,\n                placeholder: \"내용을 입력하세요\",\n                defaultValue: text\n            }, void 0, false, {\n                fileName: \"/Users/minjaelee/Desktop/development/toy_project/client/components/MsgInput.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"완료\"\n            }, void 0, false, {\n                fileName: \"/Users/minjaelee/Desktop/development/toy_project/client/components/MsgInput.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/minjaelee/Desktop/development/toy_project/client/components/MsgInput.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MsgInput);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01zZ0lucHV0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBOEI7QUFFOUIsd0NBQXdDO0FBQ3hDLE1BQU1DLFFBQVEsR0FBRyxDQUFDLEVBQUVDLE1BQU0sR0FBRUMsRUFBRSxFQUFHQyxTQUFTLEdBQUVDLElBQUksR0FBRSxHQUFLO0lBQ3JELE1BQU1DLE9BQU8sR0FBR04sNkNBQU0sQ0FBQyxJQUFJLENBQUM7SUFFNUIsTUFBTU8sUUFBUSxHQUFHQyxDQUFBQSxDQUFDLEdBQUk7UUFDcEJBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFO1FBQ2xCRCxDQUFDLENBQUNFLGVBQWUsRUFBRTtRQUNuQixNQUFNTCxJQUFJLEdBQUdDLE9BQU8sQ0FBQ0ssT0FBTyxDQUFDQyxLQUFLO1FBQ2xDTixPQUFPLENBQUNLLE9BQU8sQ0FBQ0MsS0FBSyxHQUFHLEVBQUU7UUFDMUJWLE1BQU0sQ0FBQ0csSUFBSSxFQUFFRixFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVELHFCQUNFLDhEQUFDVSxNQUFJO1FBQUNDLFNBQVMsRUFBQyxnQkFBZ0I7UUFBQ1AsUUFBUSxFQUFFQSxRQUFROzswQkFDakQsOERBQUNRLFVBQVE7Z0JBQUNDLEdBQUcsRUFBRVYsT0FBTztnQkFBRVcsV0FBVyxFQUFDLFdBQVc7Z0JBQUNDLFlBQVksRUFBRWIsSUFBSTs7Ozs7eUJBQUk7MEJBQ3RFLDhEQUFDYyxRQUFNO2dCQUFDQyxJQUFJLEVBQUMsUUFBUTswQkFBQyxJQUFFOzs7Ozt5QkFBUzs7Ozs7O2lCQUM1QixDQUNSO0FBQ0gsQ0FBQztBQUVELGlFQUFlbkIsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29tcG9uZW50cy9Nc2dJbnB1dC5qcz9jYzJjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiXG5cbi8vIE1zZ0xpc3QgPT4gQ3JlYXRlIC8gTXNnSXRlbSA9PiBVcGRhdGVcbmNvbnN0IE1zZ0lucHV0ID0gKHsgbXV0YXRlLCBpZCA9IHVuZGVmaW5lZCwgdGV4dCB9KSA9PiB7XG4gIGNvbnN0IHRleHRSZWYgPSB1c2VSZWYobnVsbClcblxuICBjb25zdCBvblN1Ym1pdCA9IGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBjb25zdCB0ZXh0ID0gdGV4dFJlZi5jdXJyZW50LnZhbHVlXG4gICAgdGV4dFJlZi5jdXJyZW50LnZhbHVlID0gJydcbiAgICBtdXRhdGUodGV4dCwgaWQpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxmb3JtIGNsYXNzTmFtZT1cIm1lc3NhZ2VzX2lucHV0XCIgb25TdWJtaXQ9e29uU3VibWl0fT5cbiAgICAgIDx0ZXh0YXJlYSByZWY9e3RleHRSZWZ9IHBsYWNlaG9sZGVyPVwi64K07Jqp7J2EIOyeheugpe2VmOyEuOyalFwiIGRlZmF1bHRWYWx1ZT17dGV4dH0gLz5cbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPuyZhOujjDwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNc2dJbnB1dDsiXSwibmFtZXMiOlsidXNlUmVmIiwiTXNnSW5wdXQiLCJtdXRhdGUiLCJpZCIsInVuZGVmaW5lZCIsInRleHQiLCJ0ZXh0UmVmIiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJjdXJyZW50IiwidmFsdWUiLCJmb3JtIiwiY2xhc3NOYW1lIiwidGV4dGFyZWEiLCJyZWYiLCJwbGFjZWhvbGRlciIsImRlZmF1bHRWYWx1ZSIsImJ1dHRvbiIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MsgInput.js\n");

/***/ }),

/***/ "./components/MsgItem.js":
/*!*******************************!*\
  !*** ./components/MsgItem.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.js\");\n\n\n// MsgInput => Update\nconst MsgItem = ({ id , userId , timestamp , text , onUpdate , onDelete , isEditing , startEdit  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: \"messages__item\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    userId,\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"sub\", {}, void 0, false, {\n                        fileName: \"/Users/minjaelee/Desktop/development/toy_project/client/components/MsgItem.js\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/minjaelee/Desktop/development/toy_project/client/components/MsgItem.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined),\n            isEditing ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                mutate: onUpdate,\n                id: id,\n                text: text\n            }, void 0, false, {\n                fileName: \"/Users/minjaelee/Desktop/development/toy_project/client/components/MsgItem.js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, undefined) : text,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"messages_buttons\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: startEdit,\n                        children: \"수정\"\n                    }, void 0, false, {\n                        fileName: \"/Users/minjaelee/Desktop/development/toy_project/client/components/MsgItem.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>onDelete(id),\n                        children: \"삭제\"\n                    }, void 0, false, {\n                        fileName: \"/Users/minjaelee/Desktop/development/toy_project/client/components/MsgItem.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/minjaelee/Desktop/development/toy_project/client/components/MsgItem.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/minjaelee/Desktop/development/toy_project/client/components/MsgItem.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MsgItem);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01zZ0l0ZW0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQWlDO0FBRWpDLHFCQUFxQjtBQUNyQixNQUFNQyxPQUFPLEdBQUcsQ0FBQyxFQUNmQyxFQUFFLEdBQ0ZDLE1BQU0sR0FDTkMsU0FBUyxHQUNUQyxJQUFJLEdBQ0pDLFFBQVEsR0FDUkMsUUFBUSxHQUNSQyxTQUFTLEdBQ1RDLFNBQVMsR0FDVixHQUFLO0lBRUoscUJBQ0UsOERBQUNDLElBQUU7UUFBQ0MsU0FBUyxFQUFDLGdCQUFnQjs7MEJBQzVCLDhEQUFDQyxJQUFFOztvQkFDQVQsTUFBTTtvQkFBRSxHQUFHO2tDQUNaLDhEQUFDVSxLQUFHOzs7O2lDQVNFOzs7Ozs7eUJBQ0g7WUFFSEwsU0FBUyxpQkFDTCw4REFBQ1IsaURBQVE7Z0JBQUNjLE1BQU0sRUFBRVIsUUFBUTtnQkFBRUosRUFBRSxFQUFFQSxFQUFFO2dCQUFFRyxJQUFJLEVBQUVBLElBQUk7Ozs7O3lCQUFJLEdBQ2xEQSxJQUFJOzBCQUdWLDhEQUFDVSxLQUFHO2dCQUFDSixTQUFTLEVBQUMsa0JBQWtCOztrQ0FDL0IsOERBQUNLLFFBQU07d0JBQUNDLE9BQU8sRUFBRVIsU0FBUztrQ0FBRSxJQUFFOzs7OztpQ0FBUztrQ0FDdkMsOERBQUNPLFFBQU07d0JBQUNDLE9BQU8sRUFBRSxJQUFNVixRQUFRLENBQUNMLEVBQUUsQ0FBQztrQ0FBRSxJQUFFOzs7OztpQ0FBUzs7Ozs7O3lCQUM1Qzs7Ozs7O2lCQUNILENBQ047QUFDSCxDQUFDO0FBRUQsaUVBQWVELE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL01zZ0l0ZW0uanM/YzMyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTXNnSW5wdXQgZnJvbSBcIi4vTXNnSW5wdXRcIlxuXG4vLyBNc2dJbnB1dCA9PiBVcGRhdGVcbmNvbnN0IE1zZ0l0ZW0gPSAoe1xuICBpZCxcbiAgdXNlcklkLFxuICB0aW1lc3RhbXAsXG4gIHRleHQsXG4gIG9uVXBkYXRlLFxuICBvbkRlbGV0ZSxcbiAgaXNFZGl0aW5nLFxuICBzdGFydEVkaXRcbn0pID0+IHtcblxuICByZXR1cm4gKFxuICAgIDxsaSBjbGFzc05hbWU9XCJtZXNzYWdlc19faXRlbVwiPlxuICAgICAgPGgzPlxuICAgICAgICB7dXNlcklkfXsnICd9XG4gICAgICAgIDxzdWI+XG4gICAgICAgICAgey8qIHtuZXcgRGF0ZSh0aW1lc3RhbXApLnRvTG9jYWxlU3RyaW5nKCdrby1LUicsIHtcbiAgICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcbiAgICAgICAgICAgIG1vbnRoOiAnbnVtZXJpYycsXG4gICAgICAgICAgICBkYXk6ICdudW1lcmljJyxcbiAgICAgICAgICAgIGhvdXI6ICcyLWRpZ2l0JyxcbiAgICAgICAgICAgIG1pbnV0ZTogJzItZGlnaXQnLFxuICAgICAgICAgICAgaG91cjEyOiB0cnVlXG4gICAgICAgICAgfSl9ICovfVxuICAgICAgICA8L3N1Yj5cbiAgICAgIDwvaDM+XG4gICAgICB7XG4gICAgICAgIGlzRWRpdGluZ1xuICAgICAgICAgID8gPE1zZ0lucHV0IG11dGF0ZT17b25VcGRhdGV9IGlkPXtpZH0gdGV4dD17dGV4dH0gLz5cbiAgICAgICAgICA6IHRleHRcbiAgICAgIH1cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlc19idXR0b25zXCI+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17c3RhcnRFZGl0fT7siJjsoJU8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvbkRlbGV0ZShpZCl9PuyCreygnDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9saT5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNc2dJdGVtIl0sIm5hbWVzIjpbIk1zZ0lucHV0IiwiTXNnSXRlbSIsImlkIiwidXNlcklkIiwidGltZXN0YW1wIiwidGV4dCIsIm9uVXBkYXRlIiwib25EZWxldGUiLCJpc0VkaXRpbmciLCJzdGFydEVkaXQiLCJsaSIsImNsYXNzTmFtZSIsImgzIiwic3ViIiwibXV0YXRlIiwiZGl2IiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MsgItem.js\n");

/***/ }),

/***/ "./components/MsgList.js":
/*!*******************************!*\
  !*** ./components/MsgList.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.js\");\n/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MsgItem */ \"./components/MsgItem.js\");\n\n\n\n\nconst userIds = [\n    \"roy\",\n    \"jay\"\n];\nconst getRandomUserId = ()=>userIds[Math.round(Math.random())];\nconst ogMsgs = Array(50).fill().map((_, i)=>({\n        id: i + 1,\n        // userId: getRandomUserId(),\n        userId: \"philip\",\n        // timestamp: 1234567890123 + i * 1000 * 60,\n        timestamp: \"2022-10-4\",\n        text: `${i + 1} mock text`\n    }));\n// MsgInput => Create\nconst MsgList = ()=>{\n    const { 0: msgs , 1: setMsgs  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(ogMsgs);\n    const { 0: editingID , 1: setEditingID  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const onCreate = (text)=>{\n        const newMsg = {\n            id: msgs.length,\n            // userId: getRandomUserId(),\n            userId: \"philip\",\n            // timestamp: Date.now(),\n            timestamp: \"2022-10-4\",\n            text: `${msgs.length} ${text}`\n        };\n        setMsgs((msgs)=>[\n                ...msgs,\n                newMsg\n            ]);\n    };\n    const onUpdate = (text, id)=>{\n        setMsgs((msgs)=>{\n            const targetIndex = msgs.findIndex((msg)=>msg.id === id);\n            if (targetIndex < 0) return msgs;\n            const newMsgs = [\n                ...msgs\n            ];\n            newMsgs.splice(targetIndex, 1, {\n                ...msgs[targetIndex],\n                text\n            });\n            return newMsgs;\n        });\n        doneEditing();\n    };\n    const onDelete = (id)=>{\n        setMsgs((msgs)=>{\n            const targetIndex = msgs.findIndex((msg)=>msg.id === id);\n            if (targetIndex < 0) return msgs;\n            const newMsgs = [\n                ...msgs\n            ];\n            newMsgs.splice(targetIndex, 1);\n            return newMsgs;\n        });\n    };\n    const doneEditing = ()=>setEditingID(null);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                mutate: onCreate\n            }, void 0, false, {\n                fileName: \"/Users/minjaelee/Desktop/development/toy_project/client/components/MsgList.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"messages\",\n                children: msgs.map((x)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        ...x,\n                        onUpdate: onUpdate,\n                        onDelete: onDelete,\n                        // props 전달 시 바로 함수 실행\n                        startEdit: ()=>setEditingID(x.id),\n                        isEditing: editingID === x.id\n                    }, x.id, false, {\n                        fileName: \"/Users/minjaelee/Desktop/development/toy_project/client/components/MsgList.js\",\n                        lineNumber: 65,\n                        columnNumber: 25\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/minjaelee/Desktop/development/toy_project/client/components/MsgList.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MsgList);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NUMscUJBQ0U7OzBCQUNFLDhEQUFDckIsaURBQVE7Z0JBQUNpQyxNQUFNLEVBQUVYLFFBQVE7Ozs7O3lCQUFJOzBCQUM5Qiw4REFBQ1ksSUFBRTtnQkFBQ0MsU0FBUyxFQUFDLFVBQVU7MEJBRXBCakIsSUFBSSxDQUFDUixHQUFHLENBQUMwQixDQUFBQSxDQUFDLGlCQUFJLDhEQUFDbkMsZ0RBQU87d0JBRW5CLEdBQUdtQyxDQUFDO3dCQUNMWCxRQUFRLEVBQUVBLFFBQVE7d0JBQ2xCTyxRQUFRLEVBQUVBLFFBQVE7d0JBQ2xCLHNCQUFzQjt3QkFDdEJLLFNBQVMsRUFBRSxJQUFNaEIsWUFBWSxDQUFDZSxDQUFDLENBQUN2QixFQUFFLENBQUM7d0JBQ25DeUIsU0FBUyxFQUFFbEIsU0FBUyxLQUFLZ0IsQ0FBQyxDQUFDdkIsRUFBRTt1QkFOeEJ1QixDQUFDLENBQUN2QixFQUFFOzs7O2lDQU9ULENBQUM7Ozs7O3lCQUVGOztvQkFDSixDQUNKO0FBQ0gsQ0FBQztBQUVELGlFQUFlSSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29tcG9uZW50cy9Nc2dMaXN0LmpzPzFhZmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IE1zZ0lucHV0IGZyb20gXCIuL01zZ0lucHV0XCJcbmltcG9ydCBNc2dJdGVtIGZyb20gXCIuL01zZ0l0ZW1cIlxuXG5jb25zdCB1c2VySWRzID0gWydyb3knLCAnamF5J11cbmNvbnN0IGdldFJhbmRvbVVzZXJJZCA9ICgpID0+IHVzZXJJZHNbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKV1cblxuY29uc3Qgb2dNc2dzID0gQXJyYXkoNTApLmZpbGwoKS5tYXAoKF8sIGkpID0+ICh7XG4gIGlkOiBpICsgMSxcbiAgLy8gdXNlcklkOiBnZXRSYW5kb21Vc2VySWQoKSxcbiAgdXNlcklkOiAncGhpbGlwJyxcbiAgLy8gdGltZXN0YW1wOiAxMjM0NTY3ODkwMTIzICsgaSAqIDEwMDAgKiA2MCxcbiAgdGltZXN0YW1wOiAnMjAyMi0xMC00JyxcbiAgdGV4dDogYCR7aSArIDF9IG1vY2sgdGV4dGBcbn0pKVxuXG4vLyBNc2dJbnB1dCA9PiBDcmVhdGVcbmNvbnN0IE1zZ0xpc3QgPSAoKSA9PiB7XG4gIGNvbnN0IFttc2dzLCBzZXRNc2dzXSA9IHVzZVN0YXRlKG9nTXNncylcbiAgY29uc3QgW2VkaXRpbmdJRCwgc2V0RWRpdGluZ0lEXSA9IHVzZVN0YXRlKG51bGwpXG5cbiAgY29uc3Qgb25DcmVhdGUgPSB0ZXh0ID0+IHtcbiAgICBjb25zdCBuZXdNc2cgPSB7XG4gICAgICBpZDogbXNncy5sZW5ndGgsXG4gICAgICAvLyB1c2VySWQ6IGdldFJhbmRvbVVzZXJJZCgpLFxuICAgICAgdXNlcklkOiAncGhpbGlwJyxcbiAgICAgIC8vIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcbiAgICAgIHRpbWVzdGFtcDogJzIwMjItMTAtNCcsXG4gICAgICB0ZXh0OiBgJHttc2dzLmxlbmd0aH0gJHt0ZXh0fWBcbiAgICB9XG4gICAgc2V0TXNncyhtc2dzID0+IChbLi4ubXNncywgbmV3TXNnXSkpXG4gIH1cblxuICBjb25zdCBvblVwZGF0ZSA9ICh0ZXh0LCBpZCkgPT4ge1xuICAgIHNldE1zZ3MobXNncyA9PiB7XG4gICAgICBjb25zdCB0YXJnZXRJbmRleCA9IG1zZ3MuZmluZEluZGV4KG1zZyA9PiBtc2cuaWQgPT09IGlkKVxuICAgICAgaWYgKHRhcmdldEluZGV4IDwgMCkgcmV0dXJuIG1zZ3NcbiAgICAgIGNvbnN0IG5ld01zZ3MgPSBbLi4ubXNnc11cbiAgICAgIG5ld01zZ3Muc3BsaWNlKHRhcmdldEluZGV4LCAxLCB7XG4gICAgICAgIC4uLm1zZ3NbdGFyZ2V0SW5kZXhdLFxuICAgICAgICB0ZXh0XG4gICAgICB9KVxuICAgICAgcmV0dXJuIG5ld01zZ3NcbiAgICB9KVxuICAgIGRvbmVFZGl0aW5nKClcbiAgfVxuXG4gIGNvbnN0IG9uRGVsZXRlID0gaWQgPT4ge1xuICAgIHNldE1zZ3MobXNncyA9PiB7XG4gICAgICBjb25zdCB0YXJnZXRJbmRleCA9IG1zZ3MuZmluZEluZGV4KG1zZyA9PiBtc2cuaWQgPT09IGlkKVxuICAgICAgaWYgKHRhcmdldEluZGV4IDwgMCkgcmV0dXJuIG1zZ3NcbiAgICAgIGNvbnN0IG5ld01zZ3MgPSBbLi4ubXNnc11cbiAgICAgIG5ld01zZ3Muc3BsaWNlKHRhcmdldEluZGV4LCAxKVxuICAgICAgcmV0dXJuIG5ld01zZ3NcbiAgICB9KVxuICB9XG5cbiAgY29uc3QgZG9uZUVkaXRpbmcgPSAoKSA9PiBzZXRFZGl0aW5nSUQobnVsbClcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TXNnSW5wdXQgbXV0YXRlPXtvbkNyZWF0ZX0gLz5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJtZXNzYWdlc1wiPlxuICAgICAgICB7XG4gICAgICAgICAgbXNncy5tYXAoeCA9PiA8TXNnSXRlbVxuICAgICAgICAgICAga2V5PXt4LmlkfVxuICAgICAgICAgICAgey4uLnh9XG4gICAgICAgICAgICBvblVwZGF0ZT17b25VcGRhdGV9XG4gICAgICAgICAgICBvbkRlbGV0ZT17b25EZWxldGV9XG4gICAgICAgICAgICAvLyBwcm9wcyDsoITri6wg7IucIOuwlOuhnCDtlajsiJgg7Iuk7ZaJXG4gICAgICAgICAgICBzdGFydEVkaXQ9eygpID0+IHNldEVkaXRpbmdJRCh4LmlkKX1cbiAgICAgICAgICAgIGlzRWRpdGluZz17ZWRpdGluZ0lEID09PSB4LmlkfVxuICAgICAgICAgIC8+KVxuICAgICAgICB9XG4gICAgICA8L3VsPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1zZ0xpc3QiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJNc2dJbnB1dCIsIk1zZ0l0ZW0iLCJ1c2VySWRzIiwiZ2V0UmFuZG9tVXNlcklkIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwib2dNc2dzIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImkiLCJpZCIsInVzZXJJZCIsInRpbWVzdGFtcCIsInRleHQiLCJNc2dMaXN0IiwibXNncyIsInNldE1zZ3MiLCJlZGl0aW5nSUQiLCJzZXRFZGl0aW5nSUQiLCJvbkNyZWF0ZSIsIm5ld01zZyIsImxlbmd0aCIsIm9uVXBkYXRlIiwidGFyZ2V0SW5kZXgiLCJmaW5kSW5kZXgiLCJtc2ciLCJuZXdNc2dzIiwic3BsaWNlIiwiZG9uZUVkaXRpbmciLCJvbkRlbGV0ZSIsIm11dGF0ZSIsInVsIiwiY2xhc3NOYW1lIiwieCIsInN0YXJ0RWRpdCIsImlzRWRpdGluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MsgList.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_MsgList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MsgList */ \"./components/MsgList.js\");\n\n\nconst Home = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MsgList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/minjaelee/Desktop/development/toy_project/client/pages/index.js\",\n            lineNumber: 6,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/minjaelee/Desktop/development/toy_project/client/pages/index.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBMkM7QUFFM0MsTUFBTUMsSUFBSSxHQUFHLElBQU07SUFDakIscUJBQ0UsOERBQUNDLEtBQUc7a0JBQ0YsNEVBQUNGLDJEQUFPOzs7O3FCQUFHOzs7OztpQkFDUCxDQUNQO0FBQ0gsQ0FBQztBQUVELGlFQUFlQyxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTXNnTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9Nc2dMaXN0XCJcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPE1zZ0xpc3QgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lIl0sIm5hbWVzIjpbIk1zZ0xpc3QiLCJIb21lIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();