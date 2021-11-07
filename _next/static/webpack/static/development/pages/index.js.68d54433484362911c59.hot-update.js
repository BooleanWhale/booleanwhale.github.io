webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/components/homePage/CertificationsSection.js":
/*!************************************************************!*\
  !*** ./pages/components/homePage/CertificationsSection.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CertificationsSection; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _svg_LinkedInLogo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../svg/LinkedInLogo */ \"./pages/components/svg/LinkedInLogo.jsx\");\n/* harmony import */ var _svg_GoogleLogo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../svg/GoogleLogo */ \"./pages/components/svg/GoogleLogo.jsx\");\n/* harmony import */ var _svg_KlaviyoLogo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../svg/KlaviyoLogo */ \"./pages/components/svg/KlaviyoLogo.jsx\");\nvar _jsxFileName = \"/Users/ashleysaleem-west/Documents/GitHub/next-blog/pages/components/homePage/CertificationsSection.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction CertificationsSection() {\n  var _this = this;\n\n  var certArr = [{\n    name: \"Klaviyo Systems Integrator\",\n    image: __jsx(_svg_KlaviyoLogo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 54\n      }\n    }),\n    link: \"https://verify.skilljar.com/c/yjbp5fpohdwv\"\n  }, {\n    name: \"Google Tag Manager\",\n    image: __jsx(_svg_GoogleLogo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 46\n      }\n    }),\n    link: \"https://analytics.google.com/analytics/academy/certificate/zG8Y8HsuQkWl1d6v9LYx-g\"\n  }, {\n    name: \"Linked in Assessments\",\n    image: __jsx(_svg_LinkedInLogo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 49\n      }\n    }),\n    link: \"https://www.linkedin.com/in/ashsw\"\n  }];\n  return __jsx(\"section\", {\n    id: \"certifications\",\n    className: \"color-off-bg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 12\n    }\n  }, __jsx(\"h2\", {\n    className: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  }, \"Certified with\"), __jsx(\"div\", {\n    className: \"container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }\n  }, certArr.map(function (cert, index) {\n    return __jsx(\"a\", {\n      key: index,\n      href: cert.link,\n      title: cert.name,\n      className: \"certification\",\n      target: \"_blank\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 17\n      }\n    }, cert.image);\n  })));\n}\n_c = CertificationsSection;\n\nvar _c;\n\n$RefreshReg$(_c, \"CertificationsSection\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL2hvbWVQYWdlL0NlcnRpZmljYXRpb25zU2VjdGlvbi5qcz9kNmI5Il0sIm5hbWVzIjpbIkNlcnRpZmljYXRpb25zU2VjdGlvbiIsImNlcnRBcnIiLCJuYW1lIiwiaW1hZ2UiLCJsaW5rIiwibWFwIiwiY2VydCIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EscUJBQVQsR0FBaUM7QUFBQTs7QUFFNUMsTUFBTUMsT0FBTyxHQUFHLENBQ1o7QUFBRUMsUUFBSSxFQUFFLDRCQUFSO0FBQXNDQyxTQUFLLEVBQUUsTUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQTdDO0FBQTZEQyxRQUFJLEVBQUU7QUFBbkUsR0FEWSxFQUVaO0FBQUVGLFFBQUksRUFBRSxvQkFBUjtBQUE4QkMsU0FBSyxFQUFFLE1BQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFyQztBQUFvREMsUUFBSSxFQUFFO0FBQTFELEdBRlksRUFHWjtBQUFFRixRQUFJLEVBQUUsdUJBQVI7QUFBaUNDLFNBQUssRUFBRSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBeEM7QUFBeURDLFFBQUksRUFBRTtBQUEvRCxHQUhZLENBQWhCO0FBTUEsU0FBTztBQUFTLE1BQUUsRUFBQyxnQkFBWjtBQUE2QixhQUFTLEVBQUMsY0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNIO0FBQUksYUFBUyxFQUFDLFFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERyxFQUVIO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLSCxPQUFPLENBQUNJLEdBQVIsQ0FBYSxVQUFDQyxJQUFELEVBQU9DLEtBQVA7QUFBQSxXQUNWO0FBQUcsU0FBRyxFQUFFQSxLQUFSO0FBQWUsVUFBSSxFQUFFRCxJQUFJLENBQUNGLElBQTFCO0FBQWdDLFdBQUssRUFBRUUsSUFBSSxDQUFDSixJQUE1QztBQUFrRCxlQUFTLEVBQUMsZUFBNUQ7QUFBNEUsWUFBTSxFQUFDLFFBQW5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDS0ksSUFBSSxDQUFDSCxLQURWLENBRFU7QUFBQSxHQUFiLENBREwsQ0FGRyxDQUFQO0FBVUg7S0FsQnVCSCxxQiIsImZpbGUiOiIuL3BhZ2VzL2NvbXBvbmVudHMvaG9tZVBhZ2UvQ2VydGlmaWNhdGlvbnNTZWN0aW9uLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmtlZEluTG9nbyBmcm9tICcuLi9zdmcvTGlua2VkSW5Mb2dvJztcbmltcG9ydCBHb29nbGVMb2dvIGZyb20gJy4uL3N2Zy9Hb29nbGVMb2dvJztcbmltcG9ydCBLbGF2aXlvTG9nbyBmcm9tICcuLi9zdmcvS2xhdml5b0xvZ28nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDZXJ0aWZpY2F0aW9uc1NlY3Rpb24oKSB7XG5cbiAgICBjb25zdCBjZXJ0QXJyID0gW1xuICAgICAgICB7IG5hbWU6IFwiS2xhdml5byBTeXN0ZW1zIEludGVncmF0b3JcIiwgaW1hZ2U6IDxLbGF2aXlvTG9nby8+LCBsaW5rOiBcImh0dHBzOi8vdmVyaWZ5LnNraWxsamFyLmNvbS9jL3lqYnA1ZnBvaGR3dlwifSxcbiAgICAgICAgeyBuYW1lOiBcIkdvb2dsZSBUYWcgTWFuYWdlclwiLCBpbWFnZTogPEdvb2dsZUxvZ28vPiwgbGluazogXCJodHRwczovL2FuYWx5dGljcy5nb29nbGUuY29tL2FuYWx5dGljcy9hY2FkZW15L2NlcnRpZmljYXRlL3pHOFk4SHN1UWtXbDFkNnY5TFl4LWdcIn0sXG4gICAgICAgIHsgbmFtZTogXCJMaW5rZWQgaW4gQXNzZXNzbWVudHNcIiwgaW1hZ2U6IDxMaW5rZWRJbkxvZ28vPiwgbGluazogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vYXNoc3dcIn1cbiAgIF1cblxuICAgIHJldHVybiA8c2VjdGlvbiBpZD1cImNlcnRpZmljYXRpb25zXCIgY2xhc3NOYW1lPVwiY29sb3Itb2ZmLWJnXCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJjZW50ZXJcIj5DZXJ0aWZpZWQgd2l0aDwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICB7Y2VydEFyci5tYXAoIChjZXJ0LCBpbmRleCkgPT5cbiAgICAgICAgICAgICAgICA8YSBrZXk9e2luZGV4fSBocmVmPXtjZXJ0Lmxpbmt9IHRpdGxlPXtjZXJ0Lm5hbWV9IGNsYXNzTmFtZT1cImNlcnRpZmljYXRpb25cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAge2NlcnQuaW1hZ2V9XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/homePage/CertificationsSection.js\n");

/***/ })

})