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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/react/dist/esm/container/container.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/react/dist/esm/typography/heading.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/react/dist/esm/typography/text.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/react/dist/esm/box/box.mjs\");\n/* harmony import */ var _components_UrlInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/UrlInput */ \"(app-pages-browser)/./src/app/components/UrlInput.tsx\");\n/* harmony import */ var _components_SubmitButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/SubmitButton */ \"(app-pages-browser)/./src/app/components/SubmitButton.tsx\");\n/* harmony import */ var _components_ResultsContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ResultsContainer */ \"(app-pages-browser)/./src/app/components/ResultsContainer.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst isValidUrl = (url)=>{\n    try {\n        new URL(url);\n        return true;\n    } catch (e) {\n        return false;\n    }\n};\nfunction Home() {\n    _s();\n    const [url, setUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"); // För användarens inmatning\n    const [results, setResults] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null); // För analysresultaten\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // För laddningsindikator\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null); // För felmeddelanden\n    // Funktion för att köra analys\n    const handleAnalyze = async ()=>{\n        // Kontrollera om användaren har angett en URL\n        if (!url.trim()) {\n            setErrorMessage(\"You need to paste a URL!\");\n            return;\n        }\n        // Kontrollera om URL:en är giltig\n        if (!isValidUrl(url)) {\n            setErrorMessage(\"Please enter a valid URL!\");\n            return;\n        }\n        // Återställ tidigare fel och börja ladda\n        setErrorMessage(null);\n        setIsLoading(true);\n        setResults(null);\n        try {\n            const response = await fetch(\"/api/analyze\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    url\n                })\n            });\n            if (!response.ok) {\n                const errorData = await response.json();\n                setErrorMessage(errorData.error || \"An unexpected error occurred\");\n                return;\n            }\n            const data = await response.json();\n            setResults(data); // Uppdatera resultaten\n        } catch (error) {\n            setErrorMessage(\"An unexpected error occurred. Please try again.\");\n        } finally{\n            setIsLoading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Container, {\n        maxW: \"lg\",\n        centerContent: true,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Heading, {\n                as: \"h1\",\n                size: \"xl\",\n                mt: \"20\",\n                mb: \"4\",\n                textAlign: \"center\",\n                children: \"Is Your Website Accessible To Everyone?\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ailin\\\\OneDrive\\\\Dokument\\\\Project-wcag\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Text, {\n                mb: \"4\",\n                textAlign: \"center\",\n                children: \"Enter your URL and receive a detailed report on your site's accessibility based on WCAG standards.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ailin\\\\OneDrive\\\\Dokument\\\\Project-wcag\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Box, {\n                width: \"100%\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UrlInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        value: url,\n                        onChange: (e)=>setUrl(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ailin\\\\OneDrive\\\\Dokument\\\\Project-wcag\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SubmitButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: handleAnalyze,\n                        isLoading: isLoading\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ailin\\\\OneDrive\\\\Dokument\\\\Project-wcag\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ResultsContainer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        results: results,\n                        isLoading: isLoading,\n                        errorMessage: errorMessage\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ailin\\\\OneDrive\\\\Dokument\\\\Project-wcag\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ailin\\\\OneDrive\\\\Dokument\\\\Project-wcag\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ailin\\\\OneDrive\\\\Dokument\\\\Project-wcag\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"BLq61Z96Ot6FtTTsyZusfcdqAx0=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUVpQztBQUNnQztBQUNwQjtBQUNRO0FBQ1E7QUFFN0QsTUFBTVEsYUFBYSxDQUFDQztJQUNsQixJQUFJO1FBQ0YsSUFBSUMsSUFBSUQ7UUFDUixPQUFPO0lBQ1QsRUFBRSxVQUFNO1FBQ04sT0FBTztJQUNUO0FBQ0Y7QUFFZSxTQUFTRTs7SUFDdEIsTUFBTSxDQUFDRixLQUFLRyxPQUFPLEdBQUdaLCtDQUFRQSxDQUFDLEtBQUssNEJBQTRCO0lBQ2hFLE1BQU0sQ0FBQ2EsU0FBU0MsV0FBVyxHQUFHZCwrQ0FBUUEsQ0FBTSxPQUFPLHVCQUF1QjtJQUMxRSxNQUFNLENBQUNlLFdBQVdDLGFBQWEsR0FBR2hCLCtDQUFRQSxDQUFDLFFBQVEseUJBQXlCO0lBQzVFLE1BQU0sQ0FBQ2lCLGNBQWNDLGdCQUFnQixHQUFHbEIsK0NBQVFBLENBQWdCLE9BQU8scUJBQXFCO0lBRTVGLCtCQUErQjtJQUMvQixNQUFNbUIsZ0JBQWdCO1FBQ3BCLDhDQUE4QztRQUM5QyxJQUFJLENBQUNWLElBQUlXLElBQUksSUFBSTtZQUNmRixnQkFBZ0I7WUFDaEI7UUFDRjtRQUVBLGtDQUFrQztRQUNsQyxJQUFJLENBQUNWLFdBQVdDLE1BQU07WUFDcEJTLGdCQUFnQjtZQUNoQjtRQUNGO1FBRUEseUNBQXlDO1FBQ3pDQSxnQkFBZ0I7UUFDaEJGLGFBQWE7UUFDYkYsV0FBVztRQUVYLElBQUk7WUFDRixNQUFNTyxXQUFXLE1BQU1DLE1BQU0sZ0JBQWdCO2dCQUMzQ0MsUUFBUTtnQkFDUkMsU0FBUztvQkFDUCxnQkFBZ0I7Z0JBQ2xCO2dCQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7b0JBQUVsQjtnQkFBSTtZQUM3QjtZQUVBLElBQUksQ0FBQ1ksU0FBU08sRUFBRSxFQUFFO2dCQUNoQixNQUFNQyxZQUFZLE1BQU1SLFNBQVNTLElBQUk7Z0JBQ3JDWixnQkFBZ0JXLFVBQVVFLEtBQUssSUFBSTtnQkFDbkM7WUFDRjtZQUVBLE1BQU1DLE9BQU8sTUFBTVgsU0FBU1MsSUFBSTtZQUNoQ2hCLFdBQVdrQixPQUFPLHVCQUF1QjtRQUMzQyxFQUFFLE9BQU9ELE9BQU87WUFDZGIsZ0JBQWdCO1FBQ2xCLFNBQVU7WUFDUkYsYUFBYTtRQUNmO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ2QsdURBQVNBO1FBQUMrQixNQUFLO1FBQUtDLGFBQWE7OzBCQUVoQyw4REFBQy9CLHFEQUFPQTtnQkFBQ2dDLElBQUc7Z0JBQUtDLE1BQUs7Z0JBQUtDLElBQUc7Z0JBQUtDLElBQUc7Z0JBQUlDLFdBQVU7MEJBQVM7Ozs7OzswQkFHN0QsOERBQUNuQyxrREFBSUE7Z0JBQUNrQyxJQUFHO2dCQUFJQyxXQUFVOzBCQUFTOzs7Ozs7MEJBS2hDLDhEQUFDdEMsaURBQUdBO2dCQUFDdUMsT0FBTTs7a0NBRVQsOERBQUNuQyw0REFBUUE7d0JBQUNvQyxPQUFPaEM7d0JBQUtpQyxVQUFVLENBQUNDLElBQU0vQixPQUFPK0IsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7a0NBRzVELDhEQUFDbkMsZ0VBQVlBO3dCQUFDdUMsU0FBUzFCO3dCQUFlSixXQUFXQTs7Ozs7O2tDQUdqRCw4REFBQ1Isb0VBQWdCQTt3QkFBQ00sU0FBU0E7d0JBQVNFLFdBQVdBO3dCQUFXRSxjQUFjQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWhGO0dBeEV3Qk47S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQm94LCBDb250YWluZXIsIEhlYWRpbmcsIFRleHQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IFVybElucHV0IGZyb20gXCIuL2NvbXBvbmVudHMvVXJsSW5wdXRcIjtcbmltcG9ydCBTdWJtaXRCdXR0b24gZnJvbSBcIi4vY29tcG9uZW50cy9TdWJtaXRCdXR0b25cIjtcbmltcG9ydCBSZXN1bHRzQ29udGFpbmVyIGZyb20gXCIuL2NvbXBvbmVudHMvUmVzdWx0c0NvbnRhaW5lclwiO1xuXG5jb25zdCBpc1ZhbGlkVXJsID0gKHVybDogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gIHRyeSB7XG4gICAgbmV3IFVSTCh1cmwpOyBcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbdXJsLCBzZXRVcmxdID0gdXNlU3RhdGUoXCJcIik7IC8vIEbDtnIgYW52w6RuZGFyZW5zIGlubWF0bmluZ1xuICBjb25zdCBbcmVzdWx0cywgc2V0UmVzdWx0c10gPSB1c2VTdGF0ZTxhbnk+KG51bGwpOyAvLyBGw7ZyIGFuYWx5c3Jlc3VsdGF0ZW5cbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8gRsO2ciBsYWRkbmluZ3NpbmRpa2F0b3JcbiAgY29uc3QgW2Vycm9yTWVzc2FnZSwgc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpOyAvLyBGw7ZyIGZlbG1lZGRlbGFuZGVuXG5cbiAgLy8gRnVua3Rpb24gZsO2ciBhdHQga8O2cmEgYW5hbHlzXG4gIGNvbnN0IGhhbmRsZUFuYWx5emUgPSBhc3luYyAoKSA9PiB7XG4gICAgLy8gS29udHJvbGxlcmEgb20gYW52w6RuZGFyZW4gaGFyIGFuZ2V0dCBlbiBVUkxcbiAgICBpZiAoIXVybC50cmltKCkpIHtcbiAgICAgIHNldEVycm9yTWVzc2FnZShcIllvdSBuZWVkIHRvIHBhc3RlIGEgVVJMIVwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBLb250cm9sbGVyYSBvbSBVUkw6ZW4gw6RyIGdpbHRpZ1xuICAgIGlmICghaXNWYWxpZFVybCh1cmwpKSB7XG4gICAgICBzZXRFcnJvck1lc3NhZ2UoXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBVUkwhXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIMOFdGVyc3TDpGxsIHRpZGlnYXJlIGZlbCBvY2ggYsO2cmphIGxhZGRhXG4gICAgc2V0RXJyb3JNZXNzYWdlKG51bGwpO1xuICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICBzZXRSZXN1bHRzKG51bGwpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL2FuYWx5emVcIiwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdXJsIH0pLFxuICAgICAgfSk7XG5cbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgY29uc3QgZXJyb3JEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBzZXRFcnJvck1lc3NhZ2UoZXJyb3JEYXRhLmVycm9yIHx8IFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZFwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgc2V0UmVzdWx0cyhkYXRhKTsgLy8gVXBwZGF0ZXJhIHJlc3VsdGF0ZW5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgc2V0RXJyb3JNZXNzYWdlKFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZC4gUGxlYXNlIHRyeSBhZ2Fpbi5cIik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBtYXhXPVwibGdcIiBjZW50ZXJDb250ZW50PlxuICAgICAgey8qIFJ1YnJpayBvY2ggaW5zdHJ1a3Rpb25lciAqL31cbiAgICAgIDxIZWFkaW5nIGFzPVwiaDFcIiBzaXplPVwieGxcIiBtdD1cIjIwXCIgbWI9XCI0XCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgIElzIFlvdXIgV2Vic2l0ZSBBY2Nlc3NpYmxlIFRvIEV2ZXJ5b25lP1xuICAgICAgPC9IZWFkaW5nPlxuICAgICAgPFRleHQgbWI9XCI0XCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgIEVudGVyIHlvdXIgVVJMIGFuZCByZWNlaXZlIGEgZGV0YWlsZWQgcmVwb3J0IG9uIHlvdXIgc2l0ZSdzIGFjY2Vzc2liaWxpdHkgYmFzZWQgb24gV0NBRyBzdGFuZGFyZHMuXG4gICAgICA8L1RleHQ+XG5cbiAgICAgIHsvKiBIdXZ1ZGlubmVow6VsbCAqL31cbiAgICAgIDxCb3ggd2lkdGg9XCIxMDAlXCI+XG4gICAgICAgIHsvKiBVUkwtaW5wdXQgZsO2ciBhbnbDpG5kYXJlbiAqL31cbiAgICAgICAgPFVybElucHV0IHZhbHVlPXt1cmx9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXJsKGUudGFyZ2V0LnZhbHVlKX0gLz5cblxuICAgICAgICB7LyogS25hcHBlbiBzb20ga8O2ciBhbmFseXNlbiAqL31cbiAgICAgICAgPFN1Ym1pdEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVBbmFseXplfSBpc0xvYWRpbmc9e2lzTG9hZGluZ30gLz5cblxuICAgICAgICB7LyogUmVzdWx0YXRjb250YWluZXIgbWVkIGZlbCBvY2ggcmVzdWx0YXQgKi99XG4gICAgICAgIDxSZXN1bHRzQ29udGFpbmVyIHJlc3VsdHM9e3Jlc3VsdHN9IGlzTG9hZGluZz17aXNMb2FkaW5nfSBlcnJvck1lc3NhZ2U9e2Vycm9yTWVzc2FnZX0gLz5cbiAgICAgIDwvQm94PlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQm94IiwiQ29udGFpbmVyIiwiSGVhZGluZyIsIlRleHQiLCJVcmxJbnB1dCIsIlN1Ym1pdEJ1dHRvbiIsIlJlc3VsdHNDb250YWluZXIiLCJpc1ZhbGlkVXJsIiwidXJsIiwiVVJMIiwiSG9tZSIsInNldFVybCIsInJlc3VsdHMiLCJzZXRSZXN1bHRzIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiZXJyb3JNZXNzYWdlIiwic2V0RXJyb3JNZXNzYWdlIiwiaGFuZGxlQW5hbHl6ZSIsInRyaW0iLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwib2siLCJlcnJvckRhdGEiLCJqc29uIiwiZXJyb3IiLCJkYXRhIiwibWF4VyIsImNlbnRlckNvbnRlbnQiLCJhcyIsInNpemUiLCJtdCIsIm1iIiwidGV4dEFsaWduIiwid2lkdGgiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});