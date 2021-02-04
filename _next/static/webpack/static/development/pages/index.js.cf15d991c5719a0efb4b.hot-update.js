webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/components/homePage/sectionComponents/Portfolio.js":
/*!******************************************************************!*\
  !*** ./pages/components/homePage/sectionComponents/Portfolio.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Portfolio; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _smallComponents_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../smallComponents/Modal */ \"./pages/components/smallComponents/Modal.js\");\nvar _jsxFileName = \"/Users/ashleysaleem-west/Documents/GitHub/next-blog/pages/components/homePage/sectionComponents/Portfolio.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction Portfolio() {\n  var _this = this;\n\n  function behanceShot(_ref) {\n    var title = _ref.title,\n        url = _ref.url,\n        img_name = _ref.img_name,\n        description = _ref.description,\n        id = _ref.id;\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"div\", {\n      className: \"modal-header\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 6,\n        columnNumber: 5\n      }\n    }, __jsx(\"a\", {\n      href: \"https://behance.com/Ashleysw\",\n      className: \"modal-icon-link\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 7,\n        columnNumber: 7\n      }\n    }, __jsx(\"img\", {\n      className: \"modal-icon\",\n      src: \"static/mainpage/behance/behance_icon.svg\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 9\n      }\n    }), __jsx(\"span\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 9\n      }\n    }, \"behance\")), __jsx(\"a\", {\n      href: url,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 7\n      }\n    }, __jsx(\"h4\", {\n      className: \"modal-title\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }\n    }, title)), __jsx(\"label\", {\n      htmlFor: id + \"-check\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 7\n      }\n    }, __jsx(\"a\", {\n      className: \"close-modal\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 36\n      }\n    }, \"x\"))), __jsx(\"div\", {\n      className: \"dribbble-main\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 5\n      }\n    }, __jsx(\"img\", {\n      src: 'static/mainpage/behance/' + img_name + '.webp',\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 7\n      }\n    }), __jsx(\"div\", {\n      className: \"modal-desc\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 7\n      }\n    }, description)));\n  }\n\n  function modalTrigger(_ref2) {\n    var img_name = _ref2.img_name,\n        id = _ref2.id,\n        title = _ref2.title;\n    return __jsx(\"div\", {\n      className: id + \"-card modal-card hover-grow\",\n      title: title,\n      style: {\n        backgroundImage: \"url(static/mainpage/behance/\".concat(img_name, \".webp)\")\n      },\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 58\n      }\n    });\n  }\n\n  var modalList = [{\n    id: \"behance1\",\n    title: \"E-Service website design\",\n    img_name: \"behance1\",\n    url: \"https://www.behance.net/gallery/112726487/E-Service-Website-Design\",\n    description: \"<p>A complete website redesign for E-Service (Europe) Ltd. From research to prototyping in Figma and finally building the website with HTML, CSS and minimal pure JavaScript for their Wordpress backend. This redesign was made using careful consideration of user behaviour from Google Analytics.</p>\\n    <p><a>\\u201CSee the full project on Behance\\u201D</a></p>\"\n  }, {\n    id: \"behance2\",\n    title: \"UI Design collection\",\n    img_name: \"behance2\",\n    url: \"https://behance.com/shots/5376044-Social-dog-walking-app-concept-Daily-UI-020\",\n    description: \"An eCommerce analytics UI design for @Daily UI 18. Having experience running an eCommerce store, I took this opportunity to design my ideal analytics page. I used horizontal and vertical grids to try and fit in as much information as I could whilst still letting it breath. \\uD83D\\uDE42\"\n  }, {\n    id: \"behance3\",\n    title: \"Big data collection app design\",\n    img_name: \"behance3\",\n    url: \"https://www.behance.net/gallery/62765593/UXUI-Design-Big-Data-Collection-App\",\n    description: \"Daily UI #007 - design a settings page!\"\n  }, {\n    id: \"behance4\",\n    title: \"Home monitoring app dashboard\",\n    img_name: \"behance4\",\n    url: \"https://behance.com/shots/5376044-Social-dog-walking-app-concept-Daily-UI-020\",\n    description: \"An app concept for a home monitoring app's dashboard. I tried to balance visual appeal with usability by presenting information in a clean and minimal as design whilst adding some visual flare to the most important element on the screen. \\u2744\\uFE0F\\uD83D\\uDD25 @Daily UI\"\n  }];\n  return __jsx(\"div\", {\n    id: \"behances\",\n    className: \"center-text\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 10\n    }\n  }, __jsx(\"div\", {\n    className: \"flex-gallery\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 5\n    }\n  }, modalList.map(function (item, index) {\n    return __jsx(\"div\", {\n      key: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }\n    }, __jsx(_smallComponents_Modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      info: item,\n      content: behanceShot,\n      trigger: modalTrigger,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 11\n      }\n    }));\n  })), __jsx(\"a\", {\n    className: \"button black-button\",\n    href: \"https://www.behance.net/ashsaleemwest\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 5\n    }\n  }, \"See more on Behance\"));\n}\n_c = Portfolio;\n\nvar _c;\n\n$RefreshReg$(_c, \"Portfolio\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL2hvbWVQYWdlL3NlY3Rpb25Db21wb25lbnRzL1BvcnRmb2xpby5qcz81Yzk4Il0sIm5hbWVzIjpbIlBvcnRmb2xpbyIsImJlaGFuY2VTaG90IiwidGl0bGUiLCJ1cmwiLCJpbWdfbmFtZSIsImRlc2NyaXB0aW9uIiwiaWQiLCJtb2RhbFRyaWdnZXIiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJtb2RhbExpc3QiLCJtYXAiLCJpdGVtIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxTQUFULEdBQXFCO0FBQUE7O0FBRWxDLFdBQVNDLFdBQVQsT0FBK0Q7QUFBQSxRQUF4Q0MsS0FBd0MsUUFBeENBLEtBQXdDO0FBQUEsUUFBakNDLEdBQWlDLFFBQWpDQSxHQUFpQztBQUFBLFFBQTVCQyxRQUE0QixRQUE1QkEsUUFBNEI7QUFBQSxRQUFsQkMsV0FBa0IsUUFBbEJBLFdBQWtCO0FBQUEsUUFBTEMsRUFBSyxRQUFMQSxFQUFLO0FBQUUsV0FBTyxtRUFDdEU7QUFBSyxlQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBRyxVQUFJLEVBQUMsOEJBQVI7QUFBdUMsZUFBUyxFQUFDLGlCQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxlQUFTLEVBQUMsWUFBZjtBQUE0QixTQUFHLEVBQUMsMENBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsQ0FERixFQU1FO0FBQUcsVUFBSSxFQUFFSCxHQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFJLGVBQVMsRUFBQyxhQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBNkJELEtBQTdCLENBREYsQ0FORixFQVVFO0FBQU8sYUFBTyxFQUFFSSxFQUFFLEdBQUMsUUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUE2QjtBQUFHLGVBQVMsRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBN0IsQ0FWRixDQURzRSxFQWN0RTtBQUFLLGVBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLFNBQUcsRUFBRSw2QkFBMkJGLFFBQTNCLEdBQW9DLE9BQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQUVFO0FBQUssZUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUE2QkMsV0FBN0IsQ0FGRixDQWRzRSxDQUFQO0FBbUJoRTs7QUFFRCxXQUFTRSxZQUFULFFBQThDO0FBQUEsUUFBdEJILFFBQXNCLFNBQXRCQSxRQUFzQjtBQUFBLFFBQVpFLEVBQVksU0FBWkEsRUFBWTtBQUFBLFFBQVJKLEtBQVEsU0FBUkEsS0FBUTtBQUFFLFdBQU87QUFDbkQsZUFBUyxFQUFFSSxFQUFFLEdBQUMsNkJBRHFDO0FBRW5ELFdBQUssRUFBRUosS0FGNEM7QUFHbkQsV0FBSyxFQUFFO0FBQUNNLHVCQUFlLHdDQUFpQ0osUUFBakM7QUFBaEIsT0FINEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFQO0FBSy9DOztBQUVELE1BQU1LLFNBQVMsR0FBRyxDQUNoQjtBQUFDSCxNQUFFLEVBQUMsVUFBSjtBQUFlSixTQUFLLEVBQUMsMEJBQXJCO0FBQWdERSxZQUFRLEVBQUMsVUFBekQ7QUFBb0VELE9BQUcsRUFBQyxvRUFBeEU7QUFBNklFLGVBQVc7QUFBeEosR0FEZ0IsRUFHaEI7QUFBQ0MsTUFBRSxFQUFDLFVBQUo7QUFBZUosU0FBSyxFQUFDLHNCQUFyQjtBQUE0Q0UsWUFBUSxFQUFDLFVBQXJEO0FBQWdFRCxPQUFHLEVBQUMsK0VBQXBFO0FBQW9KRSxlQUFXO0FBQS9KLEdBSGdCLEVBSWhCO0FBQUNDLE1BQUUsRUFBQyxVQUFKO0FBQWVKLFNBQUssRUFBQyxnQ0FBckI7QUFBc0RFLFlBQVEsRUFBQyxVQUEvRDtBQUEwRUQsT0FBRyxFQUFDLDhFQUE5RTtBQUE2SkUsZUFBVztBQUF4SyxHQUpnQixFQUtoQjtBQUFDQyxNQUFFLEVBQUMsVUFBSjtBQUFlSixTQUFLLEVBQUMsK0JBQXJCO0FBQXFERSxZQUFRLEVBQUMsVUFBOUQ7QUFBeUVELE9BQUcsRUFBQywrRUFBN0U7QUFBNkpFLGVBQVc7QUFBeEssR0FMZ0IsQ0FBbEI7QUFRQSxTQUFPO0FBQUssTUFBRSxFQUFDLFVBQVI7QUFBbUIsYUFBUyxFQUFDLGFBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDTDtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0ksU0FBUyxDQUFDQyxHQUFWLENBQWMsVUFBQ0MsSUFBRCxFQUFNQyxLQUFOO0FBQUEsV0FDYjtBQUFLLFNBQUcsRUFBRUEsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyw4REFBRDtBQUFPLFVBQUksRUFBRUQsSUFBYjtBQUFtQixhQUFPLEVBQUVWLFdBQTVCO0FBQXlDLGFBQU8sRUFBRU0sWUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBRGE7QUFBQSxHQUFkLENBREgsQ0FESyxFQVNMO0FBQUcsYUFBUyxFQUFDLHFCQUFiO0FBQW1DLFFBQUksRUFBQyx1Q0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFUSyxDQUFQO0FBV0Q7S0FqRHVCUCxTIiwiZmlsZSI6Ii4vcGFnZXMvY29tcG9uZW50cy9ob21lUGFnZS9zZWN0aW9uQ29tcG9uZW50cy9Qb3J0Zm9saW8uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW9kYWwgZnJvbSBcIi4uLy4uL3NtYWxsQ29tcG9uZW50cy9Nb2RhbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3J0Zm9saW8oKSB7XG5cbiAgZnVuY3Rpb24gYmVoYW5jZVNob3QgKHt0aXRsZSwgdXJsLCBpbWdfbmFtZSwgZGVzY3JpcHRpb24sIGlkfSkgeyByZXR1cm4gPD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vYmVoYW5jZS5jb20vQXNobGV5c3dcIiBjbGFzc05hbWU9XCJtb2RhbC1pY29uLWxpbmtcIj5cbiAgICAgICAgPGltZyBjbGFzc05hbWU9XCJtb2RhbC1pY29uXCIgc3JjPSdzdGF0aWMvbWFpbnBhZ2UvYmVoYW5jZS9iZWhhbmNlX2ljb24uc3ZnJy8+XG4gICAgICAgIDxzcGFuPmJlaGFuY2U8L3NwYW4+XG4gICAgICA8L2E+XG5cbiAgICAgIDxhIGhyZWY9e3VybH0+XG4gICAgICAgIDxoNCBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiPnt0aXRsZX08L2g0PlxuICAgICAgPC9hPlxuXG4gICAgICA8bGFiZWwgaHRtbEZvcj17aWQrXCItY2hlY2tcIn0+PGEgY2xhc3NOYW1lPVwiY2xvc2UtbW9kYWxcIj54PC9hPjwvbGFiZWw+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImRyaWJiYmxlLW1haW5cIj5cbiAgICAgIDxpbWcgc3JjPXsnc3RhdGljL21haW5wYWdlL2JlaGFuY2UvJytpbWdfbmFtZSsnLndlYnAnfS8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRlc2NcIj57ZGVzY3JpcHRpb259PC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvPlxuICB9XG5cbiAgZnVuY3Rpb24gbW9kYWxUcmlnZ2VyICh7aW1nX25hbWUsIGlkLCB0aXRsZX0pIHsgcmV0dXJuIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17aWQrXCItY2FyZCBtb2RhbC1jYXJkIGhvdmVyLWdyb3dcIn1cbiAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBgdXJsKHN0YXRpYy9tYWlucGFnZS9iZWhhbmNlLyR7aW1nX25hbWV9LndlYnApYH19XG4gICAgPjwvZGl2PlxuICB9XG5cbiAgY29uc3QgbW9kYWxMaXN0ID0gW1xuICAgIHtpZDpcImJlaGFuY2UxXCIsdGl0bGU6XCJFLVNlcnZpY2Ugd2Vic2l0ZSBkZXNpZ25cIixpbWdfbmFtZTpcImJlaGFuY2UxXCIsdXJsOlwiaHR0cHM6Ly93d3cuYmVoYW5jZS5uZXQvZ2FsbGVyeS8xMTI3MjY0ODcvRS1TZXJ2aWNlLVdlYnNpdGUtRGVzaWduXCIsZGVzY3JpcHRpb246YDxwPkEgY29tcGxldGUgd2Vic2l0ZSByZWRlc2lnbiBmb3IgRS1TZXJ2aWNlIChFdXJvcGUpIEx0ZC4gRnJvbSByZXNlYXJjaCB0byBwcm90b3R5cGluZyBpbiBGaWdtYSBhbmQgZmluYWxseSBidWlsZGluZyB0aGUgd2Vic2l0ZSB3aXRoIEhUTUwsIENTUyBhbmQgbWluaW1hbCBwdXJlIEphdmFTY3JpcHQgZm9yIHRoZWlyIFdvcmRwcmVzcyBiYWNrZW5kLiBUaGlzIHJlZGVzaWduIHdhcyBtYWRlIHVzaW5nIGNhcmVmdWwgY29uc2lkZXJhdGlvbiBvZiB1c2VyIGJlaGF2aW91ciBmcm9tIEdvb2dsZSBBbmFseXRpY3MuPC9wPlxuICAgIDxwPjxhPuKAnFNlZSB0aGUgZnVsbCBwcm9qZWN0IG9uIEJlaGFuY2XigJ08L2E+PC9wPmB9LFxuICAgIHtpZDpcImJlaGFuY2UyXCIsdGl0bGU6XCJVSSBEZXNpZ24gY29sbGVjdGlvblwiLGltZ19uYW1lOlwiYmVoYW5jZTJcIix1cmw6XCJodHRwczovL2JlaGFuY2UuY29tL3Nob3RzLzUzNzYwNDQtU29jaWFsLWRvZy13YWxraW5nLWFwcC1jb25jZXB0LURhaWx5LVVJLTAyMFwiLGRlc2NyaXB0aW9uOmBBbiBlQ29tbWVyY2UgYW5hbHl0aWNzIFVJIGRlc2lnbiBmb3IgQERhaWx5IFVJIDE4LiBIYXZpbmcgZXhwZXJpZW5jZSBydW5uaW5nIGFuIGVDb21tZXJjZSBzdG9yZSwgSSB0b29rIHRoaXMgb3Bwb3J0dW5pdHkgdG8gZGVzaWduIG15IGlkZWFsIGFuYWx5dGljcyBwYWdlLiBJIHVzZWQgaG9yaXpvbnRhbCBhbmQgdmVydGljYWwgZ3JpZHMgdG8gdHJ5IGFuZCBmaXQgaW4gYXMgbXVjaCBpbmZvcm1hdGlvbiBhcyBJIGNvdWxkIHdoaWxzdCBzdGlsbCBsZXR0aW5nIGl0IGJyZWF0aC4g8J+ZgmB9LFxuICAgIHtpZDpcImJlaGFuY2UzXCIsdGl0bGU6XCJCaWcgZGF0YSBjb2xsZWN0aW9uIGFwcCBkZXNpZ25cIixpbWdfbmFtZTpcImJlaGFuY2UzXCIsdXJsOlwiaHR0cHM6Ly93d3cuYmVoYW5jZS5uZXQvZ2FsbGVyeS82Mjc2NTU5My9VWFVJLURlc2lnbi1CaWctRGF0YS1Db2xsZWN0aW9uLUFwcFwiLGRlc2NyaXB0aW9uOmBEYWlseSBVSSAjMDA3IC0gZGVzaWduIGEgc2V0dGluZ3MgcGFnZSFgfSxcbiAgICB7aWQ6XCJiZWhhbmNlNFwiLHRpdGxlOlwiSG9tZSBtb25pdG9yaW5nIGFwcCBkYXNoYm9hcmRcIixpbWdfbmFtZTpcImJlaGFuY2U0XCIsdXJsOlwiaHR0cHM6Ly9iZWhhbmNlLmNvbS9zaG90cy81Mzc2MDQ0LVNvY2lhbC1kb2ctd2Fsa2luZy1hcHAtY29uY2VwdC1EYWlseS1VSS0wMjBcIixkZXNjcmlwdGlvbjpgQW4gYXBwIGNvbmNlcHQgZm9yIGEgaG9tZSBtb25pdG9yaW5nIGFwcCdzIGRhc2hib2FyZC4gSSB0cmllZCB0byBiYWxhbmNlIHZpc3VhbCBhcHBlYWwgd2l0aCB1c2FiaWxpdHkgYnkgcHJlc2VudGluZyBpbmZvcm1hdGlvbiBpbiBhIGNsZWFuIGFuZCBtaW5pbWFsIGFzIGRlc2lnbiB3aGlsc3QgYWRkaW5nIHNvbWUgdmlzdWFsIGZsYXJlIHRvIHRoZSBtb3N0IGltcG9ydGFudCBlbGVtZW50IG9uIHRoZSBzY3JlZW4uIOKdhO+4j/CflKUgQERhaWx5IFVJYH1cbiAgXVxuXG4gIHJldHVybiA8ZGl2IGlkPVwiYmVoYW5jZXNcIiBjbGFzc05hbWU9XCJjZW50ZXItdGV4dFwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1nYWxsZXJ5XCI+XG4gICAgICB7bW9kYWxMaXN0Lm1hcCgoaXRlbSxpbmRleCkgPT4gXG4gICAgICAgIDxkaXYga2V5PXtpbmRleH0+XG4gICAgICAgICAgPE1vZGFsIGluZm89e2l0ZW19IGNvbnRlbnQ9e2JlaGFuY2VTaG90fSB0cmlnZ2VyPXttb2RhbFRyaWdnZXJ9Lz5cbiAgICAgICAgPC9kaXY+KVxuICAgICAgfVxuICAgIDwvZGl2PlxuXG4gICAgPGEgY2xhc3NOYW1lPVwiYnV0dG9uIGJsYWNrLWJ1dHRvblwiIGhyZWY9XCJodHRwczovL3d3dy5iZWhhbmNlLm5ldC9hc2hzYWxlZW13ZXN0XCI+U2VlIG1vcmUgb24gQmVoYW5jZTwvYT5cbiAgPC9kaXY+XG59ICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/homePage/sectionComponents/Portfolio.js\n");

/***/ })

})