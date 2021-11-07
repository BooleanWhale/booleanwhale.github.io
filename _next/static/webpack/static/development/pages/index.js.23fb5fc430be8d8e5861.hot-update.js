webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/components/homePage/CertificationsSection.js":
/*!************************************************************!*\
  !*** ./pages/components/homePage/CertificationsSection.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CertificationsSection; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _svg_LinkedInLogo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../svg/LinkedInLogo */ \"./pages/components/svg/LinkedInLogo.jsx\");\n/* harmony import */ var _svg_GoogleLogo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../svg/GoogleLogo */ \"./pages/components/svg/GoogleLogo.jsx\");\n/* harmony import */ var _svg_KlaviyoLogo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../svg/KlaviyoLogo */ \"./pages/components/svg/KlaviyoLogo.jsx\");\nvar _jsxFileName = \"/Users/ashleysaleem-west/Documents/GitHub/next-blog/pages/components/homePage/CertificationsSection.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction CertificationsSection() {\n  var _this = this;\n\n  var certArr = [{\n    name: \"Linked in Assessments\",\n    image: __jsx(_svg_LinkedInLogo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 49\n      }\n    }),\n    link: \"https://www.linkedin.com/in/ashsw\"\n  }, {\n    name: \"Google Tag Manager\",\n    image: __jsx(_svg_GoogleLogo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 46\n      }\n    }),\n    link: \"https://analytics.google.com/analytics/academy/certificate/zG8Y8HsuQkWl1d6v9LYx-g\"\n  }, {\n    name: \"Klaviyo\",\n    image: __jsx(_svg_KlaviyoLogo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 35\n      }\n    }),\n    link: \"https://verify.skilljar.com/c/yjbp5fpohdwv\"\n  }];\n  return __jsx(\"section\", {\n    id: \"certifications\",\n    className: \"color-off-bg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 12\n    }\n  }, __jsx(\"h2\", {\n    className: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  }, \"Certified with\"), __jsx(\"div\", {\n    className: \"container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }\n  }, certArr.map(function (cert, index) {\n    return __jsx(\"a\", {\n      key: index,\n      href: cert.link,\n      title: cert.name,\n      className: \"certification\",\n      target: \"_blank\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 17\n      }\n    }, cert.image);\n  })));\n}\n_c = CertificationsSection;\n\nvar _c;\n\n$RefreshReg$(_c, \"CertificationsSection\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL2hvbWVQYWdlL0NlcnRpZmljYXRpb25zU2VjdGlvbi5qcz9kNmI5Il0sIm5hbWVzIjpbIkNlcnRpZmljYXRpb25zU2VjdGlvbiIsImNlcnRBcnIiLCJuYW1lIiwiaW1hZ2UiLCJsaW5rIiwibWFwIiwiY2VydCIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EscUJBQVQsR0FBaUM7QUFBQTs7QUFFNUMsTUFBTUMsT0FBTyxHQUFHLENBQ1o7QUFBRUMsUUFBSSxFQUFFLHVCQUFSO0FBQWlDQyxTQUFLLEVBQUUsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQXhDO0FBQXlEQyxRQUFJLEVBQUU7QUFBL0QsR0FEWSxFQUVaO0FBQUVGLFFBQUksRUFBRSxvQkFBUjtBQUE4QkMsU0FBSyxFQUFFLE1BQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFyQztBQUFvREMsUUFBSSxFQUFFO0FBQTFELEdBRlksRUFHWjtBQUFFRixRQUFJLEVBQUUsU0FBUjtBQUFtQkMsU0FBSyxFQUFFLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUExQjtBQUEwQ0MsUUFBSSxFQUFFO0FBQWhELEdBSFksQ0FBaEI7QUFNQSxTQUFPO0FBQVMsTUFBRSxFQUFDLGdCQUFaO0FBQTZCLGFBQVMsRUFBQyxjQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0g7QUFBSSxhQUFTLEVBQUMsUUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURHLEVBRUg7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tILE9BQU8sQ0FBQ0ksR0FBUixDQUFhLFVBQUNDLElBQUQsRUFBT0MsS0FBUDtBQUFBLFdBQ1Y7QUFBRyxTQUFHLEVBQUVBLEtBQVI7QUFBZSxVQUFJLEVBQUVELElBQUksQ0FBQ0YsSUFBMUI7QUFBZ0MsV0FBSyxFQUFFRSxJQUFJLENBQUNKLElBQTVDO0FBQWtELGVBQVMsRUFBQyxlQUE1RDtBQUE0RSxZQUFNLEVBQUMsUUFBbkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNLSSxJQUFJLENBQUNILEtBRFYsQ0FEVTtBQUFBLEdBQWIsQ0FETCxDQUZHLENBQVA7QUFVSDtLQWxCdUJILHFCIiwiZmlsZSI6Ii4vcGFnZXMvY29tcG9uZW50cy9ob21lUGFnZS9DZXJ0aWZpY2F0aW9uc1NlY3Rpb24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGlua2VkSW5Mb2dvIGZyb20gJy4uL3N2Zy9MaW5rZWRJbkxvZ28nO1xuaW1wb3J0IEdvb2dsZUxvZ28gZnJvbSAnLi4vc3ZnL0dvb2dsZUxvZ28nO1xuaW1wb3J0IEtsYXZpeW9Mb2dvIGZyb20gJy4uL3N2Zy9LbGF2aXlvTG9nbyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENlcnRpZmljYXRpb25zU2VjdGlvbigpIHtcblxuICAgIGNvbnN0IGNlcnRBcnIgPSBbXG4gICAgICAgIHsgbmFtZTogXCJMaW5rZWQgaW4gQXNzZXNzbWVudHNcIiwgaW1hZ2U6IDxMaW5rZWRJbkxvZ28vPiwgbGluazogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vYXNoc3dcIn0sXG4gICAgICAgIHsgbmFtZTogXCJHb29nbGUgVGFnIE1hbmFnZXJcIiwgaW1hZ2U6IDxHb29nbGVMb2dvLz4sIGxpbms6IFwiaHR0cHM6Ly9hbmFseXRpY3MuZ29vZ2xlLmNvbS9hbmFseXRpY3MvYWNhZGVteS9jZXJ0aWZpY2F0ZS96RzhZOEhzdVFrV2wxZDZ2OUxZeC1nXCJ9LFxuICAgICAgICB7IG5hbWU6IFwiS2xhdml5b1wiLCBpbWFnZTogPEtsYXZpeW9Mb2dvLz4sIGxpbms6IFwiaHR0cHM6Ly92ZXJpZnkuc2tpbGxqYXIuY29tL2MveWpicDVmcG9oZHd2XCJ9XG4gICBdXG5cbiAgICByZXR1cm4gPHNlY3Rpb24gaWQ9XCJjZXJ0aWZpY2F0aW9uc1wiIGNsYXNzTmFtZT1cImNvbG9yLW9mZi1iZ1wiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiY2VudGVyXCI+Q2VydGlmaWVkIHdpdGg8L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAge2NlcnRBcnIubWFwKCAoY2VydCwgaW5kZXgpID0+XG4gICAgICAgICAgICAgICAgPGEga2V5PXtpbmRleH0gaHJlZj17Y2VydC5saW5rfSB0aXRsZT17Y2VydC5uYW1lfSBjbGFzc05hbWU9XCJjZXJ0aWZpY2F0aW9uXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgIHtjZXJ0LmltYWdlfVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/homePage/CertificationsSection.js\n");

/***/ }),

/***/ "./pages/components/svg/KlaviyoLogo.jsx":
/*!**********************************************!*\
  !*** ./pages/components/svg/KlaviyoLogo.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return KlaviyoLogo; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\nvar _jsxFileName = \"/Users/ashleysaleem-west/Documents/GitHub/next-blog/pages/components/svg/KlaviyoLogo.jsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\nvar KlaviyoLogo = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(KlaviyoLogo, _Component);\n\n  var _super = _createSuper(KlaviyoLogo);\n\n  function KlaviyoLogo() {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, KlaviyoLogo);\n\n    return _super.apply(this, arguments);\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(KlaviyoLogo, [{\n    key: \"render\",\n    value: function render() {\n      return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(\"svg\", {\n        version: \"1.1\",\n        id: \"layer\",\n        xmlns: \"http://www.w3.org/2000/svg\",\n        x: \"0px\",\n        y: \"0px\",\n        viewBox: \"0 0 610.3 142.9\",\n        style: \"enable-background:new 0 0 610.3 142.9;\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 6,\n          columnNumber: 1\n        }\n      }, __jsx(\"path\", {\n        d: \"M9,64.5l91.8-60.8c4-2.3,8.9-2.3,12.9,0l91.8,60.8c3.6,1.8,5.2,6.1,3.4,9.8c-0.7,1.5-1.9,2.7-3.4,3.4l-12.3,8.1 c-30.1-47.5-92.9-61.6-140.4-31.6C40.1,62.3,29.3,73,21.2,85.8L8.8,77.7c-3.6-1.9-5-6.3-3.2-9.9C6.4,66.4,7.6,65.2,9,64.5z M107.1,63.8c-26.3,0.1-50.8,13.6-64.8,35.9l21.1,14c14.5-24.1,45.8-31.8,69.8-17.3c7.1,4.3,13,10.2,17.3,17.3l21.1-14 C157.8,77.3,133.4,63.7,107.1,63.8z M107.1,114.6c-9.3,0.1-17.8,5.1-22.4,13.2l14.2,9.3c2.3,2,5.2,3,8.2,3s6-1.1,8.2-3l14.2-9.3 C125,119.6,116.4,114.6,107.1,114.6z\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 8,\n          columnNumber: 1\n        }\n      }), __jsx(\"path\", {\n        d: \"M266.5,70.7l23,33h-16.2l-17.4-25.6v25.6h-13.2V38.3h13.2v26.1l16.5-26.1h15.2L266.5,70.7z M312.2,38.5H299v65.4h33.7V90.7 h-20.8L312.2,38.5L312.2,38.5z M371.7,36.1l27.5,67.7h-14.8l-2.6-7.1h-21.7l-2.6,7.1h-14.9l27.5-67.7L371.7,36.1z M377,84.5 l-5.9-16.9L365,84.5H377z M417.7,74.8l-13.5-36.3h-14.8l27.5,67.7h1.3l27.5-67.7h-14.9L417.7,74.8z M455.8,103.9H469V38.5h-13.2 V103.9z M521.2,38.5l-13.3,22.6l-13.3-22.6h-15.9l22.7,35.9v29.5h13V74.4l22.9-35.9H521.2z M604.8,70c0,18.7-15.2,33.9-33.9,33.9 S537,88.7,537,70s15.2-33.9,33.9-33.9l0,0C589.7,36.2,604.8,51.3,604.8,70z M592.1,70c0-11.7-9.5-21.1-21.1-21.1 c-11.7,0-21.1,9.5-21.1,21.1s9.5,21.1,21.1,21.1l0,0c11.6,0,21.1-9.4,21.1-21C592.1,70.1,592.1,70.1,592.1,70L592.1,70z\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 13,\n          columnNumber: 1\n        }\n      })));\n    }\n  }]);\n\n  return KlaviyoLogo;\n}(react__WEBPACK_IMPORTED_MODULE_5__[\"Component\"]);\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL3N2Zy9LbGF2aXlvTG9nby5qc3g/MDBkNSJdLCJuYW1lcyI6WyJLbGF2aXlvTG9nbyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0lBRXFCQSxXOzs7Ozs7Ozs7Ozs7OzZCQUNWO0FBQ1QsYUFBUSxtRUFDVjtBQUFLLGVBQU8sRUFBQyxLQUFiO0FBQW1CLFVBQUUsRUFBQyxPQUF0QjtBQUE4QixhQUFLLEVBQUMsNEJBQXBDO0FBQWlFLFNBQUMsRUFBQyxLQUFuRTtBQUF5RSxTQUFDLEVBQUMsS0FBM0U7QUFDRSxlQUFPLEVBQUMsaUJBRFY7QUFDNEIsYUFBSyxFQUFDLHdDQURsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRUE7QUFBTSxTQUFDLEVBQUMsc2ZBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZBLEVBT0E7QUFBTSxTQUFDLEVBQUMsMHNCQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFQQSxDQURVLENBQVI7QUFnQkE7Ozs7RUFsQnVDQywrQyIsImZpbGUiOiIuL3BhZ2VzL2NvbXBvbmVudHMvc3ZnL0tsYXZpeW9Mb2dvLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2xhdml5b0xvZ28gZXh0ZW5kcyBDb21wb25lbnQge1xuXHRyZW5kZXIgKCkgeyBcblx0XHRyZXR1cm4gKDw+XG48c3ZnIHZlcnNpb249XCIxLjFcIiBpZD1cImxheWVyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHg9XCIwcHhcIiB5PVwiMHB4XCJcblx0IHZpZXdCb3g9XCIwIDAgNjEwLjMgMTQyLjlcIiBzdHlsZT1cImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjEwLjMgMTQyLjk7XCI+XG48cGF0aCBkPVwiTTksNjQuNWw5MS44LTYwLjhjNC0yLjMsOC45LTIuMywxMi45LDBsOTEuOCw2MC44YzMuNiwxLjgsNS4yLDYuMSwzLjQsOS44Yy0wLjcsMS41LTEuOSwyLjctMy40LDMuNGwtMTIuMyw4LjFcblx0Yy0zMC4xLTQ3LjUtOTIuOS02MS42LTE0MC40LTMxLjZDNDAuMSw2Mi4zLDI5LjMsNzMsMjEuMiw4NS44TDguOCw3Ny43Yy0zLjYtMS45LTUtNi4zLTMuMi05LjlDNi40LDY2LjQsNy42LDY1LjIsOSw2NC41elxuXHQgTTEwNy4xLDYzLjhjLTI2LjMsMC4xLTUwLjgsMTMuNi02NC44LDM1LjlsMjEuMSwxNGMxNC41LTI0LjEsNDUuOC0zMS44LDY5LjgtMTcuM2M3LjEsNC4zLDEzLDEwLjIsMTcuMywxNy4zbDIxLjEtMTRcblx0QzE1Ny44LDc3LjMsMTMzLjQsNjMuNywxMDcuMSw2My44eiBNMTA3LjEsMTE0LjZjLTkuMywwLjEtMTcuOCw1LjEtMjIuNCwxMy4ybDE0LjIsOS4zYzIuMywyLDUuMiwzLDguMiwzczYtMS4xLDguMi0zbDE0LjItOS4zXG5cdEMxMjUsMTE5LjYsMTE2LjQsMTE0LjYsMTA3LjEsMTE0LjZ6XCIvPlxuPHBhdGggZD1cIk0yNjYuNSw3MC43bDIzLDMzaC0xNi4ybC0xNy40LTI1LjZ2MjUuNmgtMTMuMlYzOC4zaDEzLjJ2MjYuMWwxNi41LTI2LjFoMTUuMkwyNjYuNSw3MC43eiBNMzEyLjIsMzguNUgyOTl2NjUuNGgzMy43VjkwLjdcblx0aC0yMC44TDMxMi4yLDM4LjVMMzEyLjIsMzguNXogTTM3MS43LDM2LjFsMjcuNSw2Ny43aC0xNC44bC0yLjYtNy4xaC0yMS43bC0yLjYsNy4xaC0xNC45bDI3LjUtNjcuN0wzNzEuNywzNi4xeiBNMzc3LDg0LjVcblx0bC01LjktMTYuOUwzNjUsODQuNUgzNzd6IE00MTcuNyw3NC44bC0xMy41LTM2LjNoLTE0LjhsMjcuNSw2Ny43aDEuM2wyNy41LTY3LjdoLTE0LjlMNDE3LjcsNzQuOHogTTQ1NS44LDEwMy45SDQ2OVYzOC41aC0xMy4yXG5cdFYxMDMuOXogTTUyMS4yLDM4LjVsLTEzLjMsMjIuNmwtMTMuMy0yMi42aC0xNS45bDIyLjcsMzUuOXYyOS41aDEzVjc0LjRsMjIuOS0zNS45SDUyMS4yeiBNNjA0LjgsNzBjMCwxOC43LTE1LjIsMzMuOS0zMy45LDMzLjlcblx0UzUzNyw4OC43LDUzNyw3MHMxNS4yLTMzLjksMzMuOS0zMy45bDAsMEM1ODkuNywzNi4yLDYwNC44LDUxLjMsNjA0LjgsNzB6IE01OTIuMSw3MGMwLTExLjctOS41LTIxLjEtMjEuMS0yMS4xXG5cdGMtMTEuNywwLTIxLjEsOS41LTIxLjEsMjEuMXM5LjUsMjEuMSwyMS4xLDIxLjFsMCwwYzExLjYsMCwyMS4xLTkuNCwyMS4xLTIxQzU5Mi4xLDcwLjEsNTkyLjEsNzAuMSw1OTIuMSw3MEw1OTIuMSw3MHpcIi8+XG48L3N2Zz5cblx0XHRcdDwvPik7XG5cdH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/svg/KlaviyoLogo.jsx\n");

/***/ })

})