"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/react/dist/esm/container/container.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/react/dist/esm/typography/heading.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/react/dist/esm/typography/text.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/react/dist/esm/box/box.mjs\");\n/* harmony import */ var _components_UrlInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/UrlInput */ \"(app-pages-browser)/./src/app/components/UrlInput.tsx\");\n/* harmony import */ var _components_SubmitButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/SubmitButton */ \"(app-pages-browser)/./src/app/components/SubmitButton.tsx\");\n/* harmony import */ var _components_ResultsContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ResultsContainer */ \"(app-pages-browser)/./src/app/components/ResultsContainer.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst isValidUrl = (url)=>{\n    try {\n        new URL(url);\n        return true;\n    } catch (e) {\n        return false;\n    }\n};\nfunction Home() {\n    _s();\n    const [url, setUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [results, setResults] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleAnalyze = async ()=>{\n        if (!url.trim()) {\n            setErrorMessage(\"You need to paste a URL!\");\n            return;\n        }\n        // Kontrollera om URL:en är giltig\n        if (!isValidUrl(url)) {\n            setErrorMessage(\"Please enter a valid URL!\");\n            return;\n        }\n        // Återställ tidigare fel och börja ladda\n        setErrorMessage(null);\n        setIsLoading(true);\n        setResults(null);\n        try {\n            const response = await fetch(\"/api/analyze\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    url\n                })\n            });\n            if (!response.ok) {\n                const errorData = await response.json();\n                setErrorMessage(errorData.error || \"An unexpected error occurred\");\n                return;\n            }\n            const data = await response.json();\n            setResults(data); // Uppdatera resultaten\n        } catch (error) {\n            setErrorMessage(\"An unexpected error occurred. Please try again.\");\n        } finally{\n            setIsLoading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Container, {\n        maxW: \"lg\",\n        centerContent: true,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Heading, {\n                as: \"h1\",\n                size: \"xl\",\n                mt: \"20\",\n                mb: \"4\",\n                textAlign: \"center\",\n                children: \"Is Your Website Accessible To Everyone?\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ailin\\\\OneDrive\\\\Dokument\\\\Project-wcag\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Text, {\n                mb: \"4\",\n                textAlign: \"center\",\n                children: \"Enter your URL and receive a detailed report on your site's accessibility based on WCAG standards.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ailin\\\\OneDrive\\\\Dokument\\\\Project-wcag\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Box, {\n                width: \"100%\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UrlInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        value: url,\n                        onChange: (e)=>setUrl(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ailin\\\\OneDrive\\\\Dokument\\\\Project-wcag\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SubmitButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: handleAnalyze,\n                        isLoading: isLoading\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ailin\\\\OneDrive\\\\Dokument\\\\Project-wcag\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ResultsContainer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        results: results,\n                        isLoading: isLoading,\n                        errorMessage: errorMessage\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ailin\\\\OneDrive\\\\Dokument\\\\Project-wcag\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ailin\\\\OneDrive\\\\Dokument\\\\Project-wcag\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ailin\\\\OneDrive\\\\Dokument\\\\Project-wcag\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"BLq61Z96Ot6FtTTsyZusfcdqAx0=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUVpQztBQUNnQztBQUNwQjtBQUNRO0FBQ1E7QUFFN0QsTUFBTVEsYUFBYSxDQUFDQztJQUNsQixJQUFJO1FBQ0YsSUFBSUMsSUFBSUQ7UUFDUixPQUFPO0lBQ1QsRUFBRSxVQUFNO1FBQ04sT0FBTztJQUNUO0FBQ0Y7QUFFZSxTQUFTRTs7SUFDdEIsTUFBTSxDQUFDRixLQUFLRyxPQUFPLEdBQUdaLCtDQUFRQSxDQUFDO0lBQy9CLE1BQU0sQ0FBQ2EsU0FBU0MsV0FBVyxHQUFHZCwrQ0FBUUEsQ0FBTTtJQUM1QyxNQUFNLENBQUNlLFdBQVdDLGFBQWEsR0FBR2hCLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ2lCLGNBQWNDLGdCQUFnQixHQUFHbEIsK0NBQVFBLENBQWdCO0lBRWhFLE1BQU1tQixnQkFBZ0I7UUFDcEIsSUFBSSxDQUFDVixJQUFJVyxJQUFJLElBQUk7WUFDZkYsZ0JBQWdCO1lBQ2hCO1FBQ0Y7UUFFQSxrQ0FBa0M7UUFDbEMsSUFBSSxDQUFDVixXQUFXQyxNQUFNO1lBQ3BCUyxnQkFBZ0I7WUFDaEI7UUFDRjtRQUVBLHlDQUF5QztRQUN6Q0EsZ0JBQWdCO1FBQ2hCRixhQUFhO1FBQ2JGLFdBQVc7UUFFWCxJQUFJO1lBQ0YsTUFBTU8sV0FBVyxNQUFNQyxNQUFNLGdCQUFnQjtnQkFDM0NDLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ1AsZ0JBQWdCO2dCQUNsQjtnQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO29CQUFFbEI7Z0JBQUk7WUFDN0I7WUFFQSxJQUFJLENBQUNZLFNBQVNPLEVBQUUsRUFBRTtnQkFDaEIsTUFBTUMsWUFBWSxNQUFNUixTQUFTUyxJQUFJO2dCQUNyQ1osZ0JBQWdCVyxVQUFVRSxLQUFLLElBQUk7Z0JBQ25DO1lBQ0Y7WUFFQSxNQUFNQyxPQUFPLE1BQU1YLFNBQVNTLElBQUk7WUFDaENoQixXQUFXa0IsT0FBTyx1QkFBdUI7UUFDM0MsRUFBRSxPQUFPRCxPQUFPO1lBQ2RiLGdCQUFnQjtRQUNsQixTQUFVO1lBQ1JGLGFBQWE7UUFDZjtJQUNGO0lBRUEscUJBQ0UsOERBQUNkLHVEQUFTQTtRQUFDK0IsTUFBSztRQUFLQyxhQUFhOzswQkFFaEMsOERBQUMvQixxREFBT0E7Z0JBQUNnQyxJQUFHO2dCQUFLQyxNQUFLO2dCQUFLQyxJQUFHO2dCQUFLQyxJQUFHO2dCQUFJQyxXQUFVOzBCQUFTOzs7Ozs7MEJBRzdELDhEQUFDbkMsa0RBQUlBO2dCQUFDa0MsSUFBRztnQkFBSUMsV0FBVTswQkFBUzs7Ozs7OzBCQUtoQyw4REFBQ3RDLGlEQUFHQTtnQkFBQ3VDLE9BQU07O2tDQUVULDhEQUFDbkMsNERBQVFBO3dCQUFDb0MsT0FBT2hDO3dCQUFLaUMsVUFBVSxDQUFDQyxJQUFNL0IsT0FBTytCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7O2tDQUc1RCw4REFBQ25DLGdFQUFZQTt3QkFBQ3VDLFNBQVMxQjt3QkFBZUosV0FBV0E7Ozs7OztrQ0FHakQsOERBQUNSLG9FQUFnQkE7d0JBQUNNLFNBQVNBO3dCQUFTRSxXQUFXQTt3QkFBV0UsY0FBY0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUloRjtHQXRFd0JOO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS50c3g/ZjY4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJveCwgQ29udGFpbmVyLCBIZWFkaW5nLCBUZXh0IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCBVcmxJbnB1dCBmcm9tIFwiLi9jb21wb25lbnRzL1VybElucHV0XCI7XG5pbXBvcnQgU3VibWl0QnV0dG9uIGZyb20gXCIuL2NvbXBvbmVudHMvU3VibWl0QnV0dG9uXCI7XG5pbXBvcnQgUmVzdWx0c0NvbnRhaW5lciBmcm9tIFwiLi9jb21wb25lbnRzL1Jlc3VsdHNDb250YWluZXJcIjtcblxuY29uc3QgaXNWYWxpZFVybCA9ICh1cmw6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuICB0cnkge1xuICAgIG5ldyBVUkwodXJsKTsgXG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3VybCwgc2V0VXJsXSA9IHVzZVN0YXRlKFwiXCIpOyBcbiAgY29uc3QgW3Jlc3VsdHMsIHNldFJlc3VsdHNdID0gdXNlU3RhdGU8YW55PihudWxsKTsgXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7IFxuICBjb25zdCBbZXJyb3JNZXNzYWdlLCBzZXRFcnJvck1lc3NhZ2VdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7IFxuXG4gIGNvbnN0IGhhbmRsZUFuYWx5emUgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKCF1cmwudHJpbSgpKSB7XG4gICAgICBzZXRFcnJvck1lc3NhZ2UoXCJZb3UgbmVlZCB0byBwYXN0ZSBhIFVSTCFcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gS29udHJvbGxlcmEgb20gVVJMOmVuIMOkciBnaWx0aWdcbiAgICBpZiAoIWlzVmFsaWRVcmwodXJsKSkge1xuICAgICAgc2V0RXJyb3JNZXNzYWdlKFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgVVJMIVwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyDDhXRlcnN0w6RsbCB0aWRpZ2FyZSBmZWwgb2NoIGLDtnJqYSBsYWRkYVxuICAgIHNldEVycm9yTWVzc2FnZShudWxsKTtcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gICAgc2V0UmVzdWx0cyhudWxsKTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9hbmFseXplXCIsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHVybCB9KSxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIGNvbnN0IGVycm9yRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgc2V0RXJyb3JNZXNzYWdlKGVycm9yRGF0YS5lcnJvciB8fCBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWRcIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHNldFJlc3VsdHMoZGF0YSk7IC8vIFVwcGRhdGVyYSByZXN1bHRhdGVuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHNldEVycm9yTWVzc2FnZShcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQuIFBsZWFzZSB0cnkgYWdhaW4uXCIpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgbWF4Vz1cImxnXCIgY2VudGVyQ29udGVudD5cbiAgICAgIHsvKiBSdWJyaWsgb2NoIGluc3RydWt0aW9uZXIgKi99XG4gICAgICA8SGVhZGluZyBhcz1cImgxXCIgc2l6ZT1cInhsXCIgbXQ9XCIyMFwiIG1iPVwiNFwiIHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICBJcyBZb3VyIFdlYnNpdGUgQWNjZXNzaWJsZSBUbyBFdmVyeW9uZT9cbiAgICAgIDwvSGVhZGluZz5cbiAgICAgIDxUZXh0IG1iPVwiNFwiIHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICBFbnRlciB5b3VyIFVSTCBhbmQgcmVjZWl2ZSBhIGRldGFpbGVkIHJlcG9ydCBvbiB5b3VyIHNpdGUncyBhY2Nlc3NpYmlsaXR5IGJhc2VkIG9uIFdDQUcgc3RhbmRhcmRzLlxuICAgICAgPC9UZXh0PlxuXG4gICAgICB7LyogSHV2dWRpbm5laMOlbGwgKi99XG4gICAgICA8Qm94IHdpZHRoPVwiMTAwJVwiPlxuICAgICAgICB7LyogVVJMLWlucHV0IGbDtnIgYW52w6RuZGFyZW4gKi99XG4gICAgICAgIDxVcmxJbnB1dCB2YWx1ZT17dXJsfSBvbkNoYW5nZT17KGUpID0+IHNldFVybChlLnRhcmdldC52YWx1ZSl9IC8+XG5cbiAgICAgICAgey8qIEtuYXBwZW4gc29tIGvDtnIgYW5hbHlzZW4gKi99XG4gICAgICAgIDxTdWJtaXRCdXR0b24gb25DbGljaz17aGFuZGxlQW5hbHl6ZX0gaXNMb2FkaW5nPXtpc0xvYWRpbmd9IC8+XG5cbiAgICAgICAgey8qIFJlc3VsdGF0Y29udGFpbmVyIG1lZCBmZWwgb2NoIHJlc3VsdGF0ICovfVxuICAgICAgICA8UmVzdWx0c0NvbnRhaW5lciByZXN1bHRzPXtyZXN1bHRzfSBpc0xvYWRpbmc9e2lzTG9hZGluZ30gZXJyb3JNZXNzYWdlPXtlcnJvck1lc3NhZ2V9IC8+XG4gICAgICA8L0JveD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkJveCIsIkNvbnRhaW5lciIsIkhlYWRpbmciLCJUZXh0IiwiVXJsSW5wdXQiLCJTdWJtaXRCdXR0b24iLCJSZXN1bHRzQ29udGFpbmVyIiwiaXNWYWxpZFVybCIsInVybCIsIlVSTCIsIkhvbWUiLCJzZXRVcmwiLCJyZXN1bHRzIiwic2V0UmVzdWx0cyIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsImhhbmRsZUFuYWx5emUiLCJ0cmltIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwiZXJyb3JEYXRhIiwianNvbiIsImVycm9yIiwiZGF0YSIsIm1heFciLCJjZW50ZXJDb250ZW50IiwiYXMiLCJzaXplIiwibXQiLCJtYiIsInRleHRBbGlnbiIsIndpZHRoIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});