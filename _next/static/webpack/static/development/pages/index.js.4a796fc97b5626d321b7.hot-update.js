webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/components/homePage/sectionComponents/Portfolio.js":
/*!******************************************************************!*\
  !*** ./pages/components/homePage/sectionComponents/Portfolio.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Portfolio; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _smallComponents_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../smallComponents/Modal */ \"./pages/components/smallComponents/Modal.js\");\nvar _jsxFileName = \"/Users/ashleysaleem-west/Documents/GitHub/next-blog/pages/components/homePage/sectionComponents/Portfolio.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction Portfolio() {\n  var _this = this;\n\n  function behanceShot(_ref) {\n    var title = _ref.title,\n        url = _ref.url,\n        img_name = _ref.img_name,\n        description = _ref.description,\n        id = _ref.id;\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"div\", {\n      className: \"modal-header\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 6,\n        columnNumber: 5\n      }\n    }, __jsx(\"a\", {\n      href: \"https://behance.com/Ashleysw\",\n      className: \"modal-icon-link\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 7,\n        columnNumber: 7\n      }\n    }, __jsx(\"img\", {\n      className: \"modal-icon\",\n      src: \"static/mainpage/behance/behance_icon.svg\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 9\n      }\n    }), __jsx(\"span\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 9\n      }\n    }, \"behance\")), __jsx(\"a\", {\n      href: url,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 7\n      }\n    }, __jsx(\"h4\", {\n      className: \"modal-title\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }\n    }, title)), __jsx(\"label\", {\n      htmlFor: id + \"-check\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 7\n      }\n    }, __jsx(\"a\", {\n      className: \"close-modal\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 36\n      }\n    }, \"x\"))), __jsx(\"div\", {\n      className: \"dribbble-main\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 5\n      }\n    }, __jsx(\"img\", {\n      src: 'static/mainpage/behance/' + img_name + '.webp',\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 7\n      }\n    }), __jsx(\"div\", {\n      className: \"modal-desc\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 7\n      }\n    }, description, __jsx(\"a\", {\n      title: title,\n      href: url,\n      target: \"_blank\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }\n    }, __jsx(\"br\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 53\n      }\n    }), __jsx(\"p\", {\n      style: {\n        color: \"rgb(238, 96, 40)\"\n      },\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 58\n      }\n    }, \"\\uD83D\\uDD17 \", __jsx(\"u\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 100\n      }\n    }, \"See the full project on Behance\"))))));\n  }\n\n  function modalTrigger(_ref2) {\n    var img_name = _ref2.img_name,\n        id = _ref2.id,\n        title = _ref2.title;\n    return __jsx(\"div\", {\n      className: id + \"-card modal-card hover-grow\",\n      title: title,\n      style: {\n        backgroundImage: \"url(static/mainpage/behance/\".concat(img_name, \".webp)\")\n      },\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 58\n      }\n    });\n  }\n\n  var modalList = [{\n    id: \"behance1\",\n    title: \"E-Service website design\",\n    img_name: \"behance1\",\n    url: \"https://www.behance.net/gallery/112726487/E-Service-Website-Design\",\n    description: \"A complete website redesign for E-Service (Europe) Ltd. From research to prototyping in Figma and finally building the website with HTML, CSS and minimal pure JavaScript for their Wordpress backend. This redesign was made using careful consideration of user behaviour from Google Analytics.\"\n  }, {\n    id: \"behance2\",\n    title: \"UI Design collection\",\n    img_name: \"behance2\",\n    url: \"https://www.behance.net/gallery/70806135/Daily-UI-Challenge\",\n    description: \"A collection of concept UI designs for the Daily UI challange. The collection includes mobile UI deesign and Web IU design.\"\n  }, {\n    id: \"behance3\",\n    title: \"Big data collection app design\",\n    img_name: \"behance3\",\n    url: \"https://www.behance.net/gallery/62765593/UXUI-Design-Big-Data-Collection-App\",\n    description: \"Product design for an in-house web app that would make the collection big data an easier task that could be performed using a simple front-end and reduce the workload of the data management team.\"\n  }, {\n    id: \"behance4\",\n    title: \"Shopify product labels app\",\n    img_name: \"behance4\",\n    url: \"https://www.behance.net/gallery/61874165/Product-Label-Tagger-Shopify-app-UI-design\",\n    description: \"An app concept for a home monitoring app's dashboard. I tried to balance visual appeal with usability by presenting information in a clean and minimal as design whilst adding some visual flare to the most important element on the screen. \\u2744\\uFE0F\\uD83D\\uDD25 @Daily UI\"\n  }];\n  return __jsx(\"div\", {\n    id: \"behances\",\n    className: \"center-text\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 10\n    }\n  }, __jsx(\"div\", {\n    className: \"flex-gallery\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 5\n    }\n  }, modalList.map(function (item, index) {\n    return __jsx(\"div\", {\n      key: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 9\n      }\n    }, __jsx(_smallComponents_Modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      info: item,\n      content: behanceShot,\n      trigger: modalTrigger,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 11\n      }\n    }));\n  })), __jsx(\"a\", {\n    className: \"button black-button\",\n    href: \"https://www.behance.net/ashsaleemwest\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 5\n    }\n  }, \"See more on Behance\"));\n}\n_c = Portfolio;\n\nvar _c;\n\n$RefreshReg$(_c, \"Portfolio\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL2hvbWVQYWdlL3NlY3Rpb25Db21wb25lbnRzL1BvcnRmb2xpby5qcz81Yzk4Il0sIm5hbWVzIjpbIlBvcnRmb2xpbyIsImJlaGFuY2VTaG90IiwidGl0bGUiLCJ1cmwiLCJpbWdfbmFtZSIsImRlc2NyaXB0aW9uIiwiaWQiLCJjb2xvciIsIm1vZGFsVHJpZ2dlciIsImJhY2tncm91bmRJbWFnZSIsIm1vZGFsTGlzdCIsIm1hcCIsIml0ZW0iLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLFNBQVQsR0FBcUI7QUFBQTs7QUFFbEMsV0FBU0MsV0FBVCxPQUErRDtBQUFBLFFBQXhDQyxLQUF3QyxRQUF4Q0EsS0FBd0M7QUFBQSxRQUFqQ0MsR0FBaUMsUUFBakNBLEdBQWlDO0FBQUEsUUFBNUJDLFFBQTRCLFFBQTVCQSxRQUE0QjtBQUFBLFFBQWxCQyxXQUFrQixRQUFsQkEsV0FBa0I7QUFBQSxRQUFMQyxFQUFLLFFBQUxBLEVBQUs7QUFBRSxXQUFPLG1FQUN0RTtBQUFLLGVBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFHLFVBQUksRUFBQyw4QkFBUjtBQUF1QyxlQUFTLEVBQUMsaUJBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLGVBQVMsRUFBQyxZQUFmO0FBQTRCLFNBQUcsRUFBQywwQ0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixDQURGLEVBTUU7QUFBRyxVQUFJLEVBQUVILEdBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUksZUFBUyxFQUFDLGFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUE2QkQsS0FBN0IsQ0FERixDQU5GLEVBVUU7QUFBTyxhQUFPLEVBQUVJLEVBQUUsR0FBQyxRQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQTZCO0FBQUcsZUFBUyxFQUFDLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUE3QixDQVZGLENBRHNFLEVBY3RFO0FBQUssZUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssU0FBRyxFQUFFLDZCQUEyQkYsUUFBM0IsR0FBb0MsT0FBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLEVBRUU7QUFBSyxlQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dDLFdBREgsRUFFRTtBQUFHLFdBQUssRUFBRUgsS0FBVjtBQUFpQixVQUFJLEVBQUVDLEdBQXZCO0FBQTRCLFlBQU0sRUFBQyxRQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQTRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBNUMsRUFBaUQ7QUFBRyxXQUFLLEVBQUU7QUFBQ0ksYUFBSyxFQUFFO0FBQVIsT0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUEwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlDQUExQyxDQUFqRCxDQUZGLENBRkYsQ0Fkc0UsQ0FBUDtBQXNCaEU7O0FBRUQsV0FBU0MsWUFBVCxRQUE4QztBQUFBLFFBQXRCSixRQUFzQixTQUF0QkEsUUFBc0I7QUFBQSxRQUFaRSxFQUFZLFNBQVpBLEVBQVk7QUFBQSxRQUFSSixLQUFRLFNBQVJBLEtBQVE7QUFBRSxXQUFPO0FBQ25ELGVBQVMsRUFBRUksRUFBRSxHQUFDLDZCQURxQztBQUVuRCxXQUFLLEVBQUVKLEtBRjRDO0FBR25ELFdBQUssRUFBRTtBQUFDTyx1QkFBZSx3Q0FBaUNMLFFBQWpDO0FBQWhCLE9BSDRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBUDtBQUsvQzs7QUFFRCxNQUFNTSxTQUFTLEdBQUcsQ0FDaEI7QUFBQ0osTUFBRSxFQUFDLFVBQUo7QUFBZUosU0FBSyxFQUFDLDBCQUFyQjtBQUFnREUsWUFBUSxFQUFDLFVBQXpEO0FBQW9FRCxPQUFHLEVBQUMsb0VBQXhFO0FBQTZJRSxlQUFXO0FBQXhKLEdBRGdCLEVBRWhCO0FBQUNDLE1BQUUsRUFBQyxVQUFKO0FBQWVKLFNBQUssRUFBQyxzQkFBckI7QUFBNENFLFlBQVEsRUFBQyxVQUFyRDtBQUFnRUQsT0FBRyxFQUFDLDZEQUFwRTtBQUFrSUUsZUFBVztBQUE3SSxHQUZnQixFQUdoQjtBQUFDQyxNQUFFLEVBQUMsVUFBSjtBQUFlSixTQUFLLEVBQUMsZ0NBQXJCO0FBQXNERSxZQUFRLEVBQUMsVUFBL0Q7QUFBMEVELE9BQUcsRUFBQyw4RUFBOUU7QUFBNkpFLGVBQVc7QUFBeEssR0FIZ0IsRUFJaEI7QUFBQ0MsTUFBRSxFQUFDLFVBQUo7QUFBZUosU0FBSyxFQUFDLDRCQUFyQjtBQUFrREUsWUFBUSxFQUFDLFVBQTNEO0FBQXNFRCxPQUFHLEVBQUMscUZBQTFFO0FBQWdLRSxlQUFXO0FBQTNLLEdBSmdCLENBQWxCO0FBT0EsU0FBTztBQUFLLE1BQUUsRUFBQyxVQUFSO0FBQW1CLGFBQVMsRUFBQyxhQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0w7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dLLFNBQVMsQ0FBQ0MsR0FBVixDQUFjLFVBQUNDLElBQUQsRUFBTUMsS0FBTjtBQUFBLFdBQ2I7QUFBSyxTQUFHLEVBQUVBLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsOERBQUQ7QUFBTyxVQUFJLEVBQUVELElBQWI7QUFBbUIsYUFBTyxFQUFFWCxXQUE1QjtBQUF5QyxhQUFPLEVBQUVPLFlBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQURhO0FBQUEsR0FBZCxDQURILENBREssRUFTTDtBQUFHLGFBQVMsRUFBQyxxQkFBYjtBQUFtQyxRQUFJLEVBQUMsdUNBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBVEssQ0FBUDtBQVdEO0tBbkR1QlIsUyIsImZpbGUiOiIuL3BhZ2VzL2NvbXBvbmVudHMvaG9tZVBhZ2Uvc2VjdGlvbkNvbXBvbmVudHMvUG9ydGZvbGlvLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vZGFsIGZyb20gXCIuLi8uLi9zbWFsbENvbXBvbmVudHMvTW9kYWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9ydGZvbGlvKCkge1xuXG4gIGZ1bmN0aW9uIGJlaGFuY2VTaG90ICh7dGl0bGUsIHVybCwgaW1nX25hbWUsIGRlc2NyaXB0aW9uLCBpZH0pIHsgcmV0dXJuIDw+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgIDxhIGhyZWY9XCJodHRwczovL2JlaGFuY2UuY29tL0FzaGxleXN3XCIgY2xhc3NOYW1lPVwibW9kYWwtaWNvbi1saW5rXCI+XG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibW9kYWwtaWNvblwiIHNyYz0nc3RhdGljL21haW5wYWdlL2JlaGFuY2UvYmVoYW5jZV9pY29uLnN2ZycvPlxuICAgICAgICA8c3Bhbj5iZWhhbmNlPC9zcGFuPlxuICAgICAgPC9hPlxuXG4gICAgICA8YSBocmVmPXt1cmx9PlxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIj57dGl0bGV9PC9oND5cbiAgICAgIDwvYT5cblxuICAgICAgPGxhYmVsIGh0bWxGb3I9e2lkK1wiLWNoZWNrXCJ9PjxhIGNsYXNzTmFtZT1cImNsb3NlLW1vZGFsXCI+eDwvYT48L2xhYmVsPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJkcmliYmJsZS1tYWluXCI+XG4gICAgICA8aW1nIHNyYz17J3N0YXRpYy9tYWlucGFnZS9iZWhhbmNlLycraW1nX25hbWUrJy53ZWJwJ30vPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kZXNjXCI+XG4gICAgICAgIHtkZXNjcmlwdGlvbn1cbiAgICAgICAgPGEgdGl0bGU9e3RpdGxlfSBocmVmPXt1cmx9IHRhcmdldD1cIl9ibGFua1wiPjxici8+PHAgc3R5bGU9e3tjb2xvcjogXCJyZ2IoMjM4LCA5NiwgNDApXCJ9fT7wn5SXIDx1PlNlZSB0aGUgZnVsbCBwcm9qZWN0IG9uIEJlaGFuY2U8L3U+PC9wPjwvYT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8Lz5cbiAgfVxuXG4gIGZ1bmN0aW9uIG1vZGFsVHJpZ2dlciAoe2ltZ19uYW1lLCBpZCwgdGl0bGV9KSB7IHJldHVybiA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2lkK1wiLWNhcmQgbW9kYWwtY2FyZCBob3Zlci1ncm93XCJ9XG4gICAgICB0aXRsZT17dGl0bGV9XG4gICAgICBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogYHVybChzdGF0aWMvbWFpbnBhZ2UvYmVoYW5jZS8ke2ltZ19uYW1lfS53ZWJwKWB9fVxuICAgID48L2Rpdj5cbiAgfVxuXG4gIGNvbnN0IG1vZGFsTGlzdCA9IFtcbiAgICB7aWQ6XCJiZWhhbmNlMVwiLHRpdGxlOlwiRS1TZXJ2aWNlIHdlYnNpdGUgZGVzaWduXCIsaW1nX25hbWU6XCJiZWhhbmNlMVwiLHVybDpcImh0dHBzOi8vd3d3LmJlaGFuY2UubmV0L2dhbGxlcnkvMTEyNzI2NDg3L0UtU2VydmljZS1XZWJzaXRlLURlc2lnblwiLGRlc2NyaXB0aW9uOmBBIGNvbXBsZXRlIHdlYnNpdGUgcmVkZXNpZ24gZm9yIEUtU2VydmljZSAoRXVyb3BlKSBMdGQuIEZyb20gcmVzZWFyY2ggdG8gcHJvdG90eXBpbmcgaW4gRmlnbWEgYW5kIGZpbmFsbHkgYnVpbGRpbmcgdGhlIHdlYnNpdGUgd2l0aCBIVE1MLCBDU1MgYW5kIG1pbmltYWwgcHVyZSBKYXZhU2NyaXB0IGZvciB0aGVpciBXb3JkcHJlc3MgYmFja2VuZC4gVGhpcyByZWRlc2lnbiB3YXMgbWFkZSB1c2luZyBjYXJlZnVsIGNvbnNpZGVyYXRpb24gb2YgdXNlciBiZWhhdmlvdXIgZnJvbSBHb29nbGUgQW5hbHl0aWNzLmB9LFxuICAgIHtpZDpcImJlaGFuY2UyXCIsdGl0bGU6XCJVSSBEZXNpZ24gY29sbGVjdGlvblwiLGltZ19uYW1lOlwiYmVoYW5jZTJcIix1cmw6XCJodHRwczovL3d3dy5iZWhhbmNlLm5ldC9nYWxsZXJ5LzcwODA2MTM1L0RhaWx5LVVJLUNoYWxsZW5nZVwiLGRlc2NyaXB0aW9uOmBBIGNvbGxlY3Rpb24gb2YgY29uY2VwdCBVSSBkZXNpZ25zIGZvciB0aGUgRGFpbHkgVUkgY2hhbGxhbmdlLiBUaGUgY29sbGVjdGlvbiBpbmNsdWRlcyBtb2JpbGUgVUkgZGVlc2lnbiBhbmQgV2ViIElVIGRlc2lnbi5gfSxcbiAgICB7aWQ6XCJiZWhhbmNlM1wiLHRpdGxlOlwiQmlnIGRhdGEgY29sbGVjdGlvbiBhcHAgZGVzaWduXCIsaW1nX25hbWU6XCJiZWhhbmNlM1wiLHVybDpcImh0dHBzOi8vd3d3LmJlaGFuY2UubmV0L2dhbGxlcnkvNjI3NjU1OTMvVVhVSS1EZXNpZ24tQmlnLURhdGEtQ29sbGVjdGlvbi1BcHBcIixkZXNjcmlwdGlvbjpgUHJvZHVjdCBkZXNpZ24gZm9yIGFuIGluLWhvdXNlIHdlYiBhcHAgdGhhdCB3b3VsZCBtYWtlIHRoZSBjb2xsZWN0aW9uIGJpZyBkYXRhIGFuIGVhc2llciB0YXNrIHRoYXQgY291bGQgYmUgcGVyZm9ybWVkIHVzaW5nIGEgc2ltcGxlIGZyb250LWVuZCBhbmQgcmVkdWNlIHRoZSB3b3JrbG9hZCBvZiB0aGUgZGF0YSBtYW5hZ2VtZW50IHRlYW0uYH0sXG4gICAge2lkOlwiYmVoYW5jZTRcIix0aXRsZTpcIlNob3BpZnkgcHJvZHVjdCBsYWJlbHMgYXBwXCIsaW1nX25hbWU6XCJiZWhhbmNlNFwiLHVybDpcImh0dHBzOi8vd3d3LmJlaGFuY2UubmV0L2dhbGxlcnkvNjE4NzQxNjUvUHJvZHVjdC1MYWJlbC1UYWdnZXItU2hvcGlmeS1hcHAtVUktZGVzaWduXCIsZGVzY3JpcHRpb246YEFuIGFwcCBjb25jZXB0IGZvciBhIGhvbWUgbW9uaXRvcmluZyBhcHAncyBkYXNoYm9hcmQuIEkgdHJpZWQgdG8gYmFsYW5jZSB2aXN1YWwgYXBwZWFsIHdpdGggdXNhYmlsaXR5IGJ5IHByZXNlbnRpbmcgaW5mb3JtYXRpb24gaW4gYSBjbGVhbiBhbmQgbWluaW1hbCBhcyBkZXNpZ24gd2hpbHN0IGFkZGluZyBzb21lIHZpc3VhbCBmbGFyZSB0byB0aGUgbW9zdCBpbXBvcnRhbnQgZWxlbWVudCBvbiB0aGUgc2NyZWVuLiDinYTvuI/wn5SlIEBEYWlseSBVSWB9XG4gIF1cblxuICByZXR1cm4gPGRpdiBpZD1cImJlaGFuY2VzXCIgY2xhc3NOYW1lPVwiY2VudGVyLXRleHRcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtZ2FsbGVyeVwiPlxuICAgICAge21vZGFsTGlzdC5tYXAoKGl0ZW0saW5kZXgpID0+IFxuICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxuICAgICAgICAgIDxNb2RhbCBpbmZvPXtpdGVtfSBjb250ZW50PXtiZWhhbmNlU2hvdH0gdHJpZ2dlcj17bW9kYWxUcmlnZ2VyfS8+XG4gICAgICAgIDwvZGl2PilcbiAgICAgIH1cbiAgICA8L2Rpdj5cblxuICAgIDxhIGNsYXNzTmFtZT1cImJ1dHRvbiBibGFjay1idXR0b25cIiBocmVmPVwiaHR0cHM6Ly93d3cuYmVoYW5jZS5uZXQvYXNoc2FsZWVtd2VzdFwiPlNlZSBtb3JlIG9uIEJlaGFuY2U8L2E+XG4gIDwvZGl2PlxufSAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/homePage/sectionComponents/Portfolio.js\n");

/***/ })

})