/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[meetUpId]",{

/***/ "./pages/[meetUpId]/index.js":
/*!***********************************!*\
  !*** ./pages/[meetUpId]/index.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/meetups/MeetupDetail */ \"./components/meetups/MeetupDetail.js\");\n\n\n\nvar _this = undefined;\nvar MeetUpDetail = function(props) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: props.meetupData.title\n                    }, void 0, false, {\n                        fileName: \"E:\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\NextJS\\\\06-onwards-to-a-bigger-project-starting-project\\\\pages\\\\[meetUpId]\\\\index.js\",\n                        lineNumber: 8,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: props.meetupData.description\n                    }, void 0, false, {\n                        fileName: \"E:\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\NextJS\\\\06-onwards-to-a-bigger-project-starting-project\\\\pages\\\\[meetUpId]\\\\index.js\",\n                        lineNumber: 9,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\NextJS\\\\06-onwards-to-a-bigger-project-starting-project\\\\pages\\\\[meetUpId]\\\\index.js\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                src: props.meetupData.image,\n                title: props.meetupData.title,\n                description: props.meetupData.description,\n                address: props.meetupData.address\n            }, void 0, false, {\n                fileName: \"E:\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\NextJS\\\\06-onwards-to-a-bigger-project-starting-project\\\\pages\\\\[meetUpId]\\\\index.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true));\n};\n_c = MeetUpDetail;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeetUpDetail);\nvar _c;\n$RefreshReg$(_c, \"MeetUpDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bbWVldFVwSWRdL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBNEI7QUFFb0M7O0FBQ2hFLEdBQUssQ0FBQ0UsWUFBWSxHQUFHLFFBQVEsQ0FBUEMsS0FBSyxFQUFLLENBQUM7SUFDL0IsTUFBTTs7d0ZBRURILGtEQUFJOztnR0FDRkksQ0FBSztrQ0FBRUQsS0FBSyxDQUFDRSxVQUFVLENBQUNELEtBQUs7Ozs7OztnR0FDN0JFLENBQUk7d0JBQUNDLElBQUksRUFBQyxDQUFhO3dCQUFDQyxPQUFPLEVBQUVMLEtBQUssQ0FBQ0UsVUFBVSxDQUFDSSxXQUFXOzs7Ozs7Ozs7Ozs7d0ZBRS9EUix3RUFBWTtnQkFDWFMsR0FBRyxFQUFFUCxLQUFLLENBQUNFLFVBQVUsQ0FBQ00sS0FBSztnQkFDM0JQLEtBQUssRUFBRUQsS0FBSyxDQUFDRSxVQUFVLENBQUNELEtBQUs7Z0JBQzdCSyxXQUFXLEVBQUVOLEtBQUssQ0FBQ0UsVUFBVSxDQUFDSSxXQUFXO2dCQUN6Q0csT0FBTyxFQUFFVCxLQUFLLENBQUNFLFVBQVUsQ0FBQ08sT0FBTzs7Ozs7Ozs7QUFJekMsQ0FBQztLQWZLVixZQUFZOztBQXVEbEIsK0RBQWVBLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9bbWVldFVwSWRdL2luZGV4LmpzP2ZmMDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyBNb25nb0NsaWVudCwgT2JqZWN0SWQgfSBmcm9tIFwibW9uZ29kYlwiO1xyXG5pbXBvcnQgTWVldHVwRGV0YWlsIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlsXCI7XHJcbmNvbnN0IE1lZXRVcERldGFpbCA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+e3Byb3BzLm1lZXR1cERhdGEudGl0bGV9PC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtwcm9wcy5tZWV0dXBEYXRhLmRlc2NyaXB0aW9ufSAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxNZWV0dXBEZXRhaWxcclxuICAgICAgICBzcmM9e3Byb3BzLm1lZXR1cERhdGEuaW1hZ2V9XHJcbiAgICAgICAgdGl0bGU9e3Byb3BzLm1lZXR1cERhdGEudGl0bGV9XHJcbiAgICAgICAgZGVzY3JpcHRpb249e3Byb3BzLm1lZXR1cERhdGEuZGVzY3JpcHRpb259XHJcbiAgICAgICAgYWRkcmVzcz17cHJvcHMubWVldHVwRGF0YS5hZGRyZXNzfVxyXG4gICAgICAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXHJcbiAgICBcIm1vbmdvZGIrc3J2Oi8vdnRwcXVpOnZ0cHEzMDA5QGNsdXN0ZXIwLmJuZHJnLm1vbmdvZGIubmV0L25leHRKU0NvdXJzZVwiXHJcbiAgKTtcclxuICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xyXG4gIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbihcIm1lZXR1cHNcIik7XHJcbiAgY29uc3QgbWVldHVwcyA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmZpbmQoe30sIHsgX2lkOiAxIH0pLnRvQXJyYXkoKTtcclxuICBjbGllbnQuY2xvc2UoKTtcclxuICByZXR1cm4ge1xyXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gICAgcGF0aHM6IG1lZXR1cHMubWFwKChtZWV0dXApID0+ICh7XHJcbiAgICAgIHBhcmFtczogeyBtZWV0VXBJZDogbWVldHVwLl9pZC50b1N0cmluZygpIH0sXHJcbiAgICB9KSksXHJcbiAgfTtcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IG1lZXRVcElkID0gY29udGV4dC5wYXJhbXMubWVldFVwSWQ7XHJcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcclxuICAgIFwibW9uZ29kYitzcnY6Ly92dHBxdWk6dnRwcTMwMDlAY2x1c3RlcjAuYm5kcmcubW9uZ29kYi5uZXQvbmV4dEpTQ291cnNlXCJcclxuICApO1xyXG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcbiAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKFwibWVldHVwc1wiKTtcclxuICBjb25zdCBzZWxlY3RlZE1lZXRVcCA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmZpbmRPbmUoe1xyXG4gICAgX2lkOiBPYmplY3RJZChtZWV0VXBJZCksXHJcbiAgfSk7XHJcbiAgY29uc29sZS5sb2coc2VsZWN0ZWRNZWV0VXApO1xyXG4gIGNsaWVudC5jbG9zZSgpO1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBtZWV0dXBEYXRhOiB7XHJcbiAgICAgICAgaWQ6IHNlbGVjdGVkTWVldFVwLl9pZC50b1N0cmluZygpLFxyXG4gICAgICAgIHRpdGxlOiBzZWxlY3RlZE1lZXRVcC5kYXRhLnRpdGxlLFxyXG4gICAgICAgIGltYWdlOiBzZWxlY3RlZE1lZXRVcC5kYXRhLmltYWdlLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBzZWxlY3RlZE1lZXRVcC5kYXRhLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIGFkZHJlc3M6IHNlbGVjdGVkTWVldFVwLmRhdGEuYWRkcmVzcyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBNZWV0VXBEZXRhaWw7XHJcbiJdLCJuYW1lcyI6WyJIZWFkIiwiTWVldHVwRGV0YWlsIiwiTWVldFVwRGV0YWlsIiwicHJvcHMiLCJ0aXRsZSIsIm1lZXR1cERhdGEiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJkZXNjcmlwdGlvbiIsInNyYyIsImltYWdlIiwiYWRkcmVzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[meetUpId]/index.js\n");

/***/ }),

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./dist/shared/lib/head */ \"./node_modules/next/dist/shared/lib/head.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9oZWFkLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBLGlIQUFrRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9oZWFkLmpzPzg4NDkiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3Qvc2hhcmVkL2xpYi9oZWFkJylcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/head.js\n");

/***/ })

});