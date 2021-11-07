webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/components/homePage/sectionComponents/Dribbble.js":
/*!*****************************************************************!*\
  !*** ./pages/components/homePage/sectionComponents/Dribbble.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CodePen; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _smallComponents_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../smallComponents/Modal */ \"./pages/components/smallComponents/Modal.js\");\nvar _jsxFileName = \"/Users/ashleysaleem-west/Documents/GitHub/next-blog/pages/components/homePage/sectionComponents/Dribbble.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction CodePen() {\n  var _this = this;\n\n  function dribbbleShot(_ref) {\n    var title = _ref.title,\n        url = _ref.url,\n        img_name = _ref.img_name,\n        description = _ref.description,\n        id = _ref.id;\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"div\", {\n      className: \"modal-header\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 6,\n        columnNumber: 5\n      }\n    }, __jsx(\"a\", {\n      href: \"https://dribbble.com/Ashleysw\",\n      className: \"modal-icon-link\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 7,\n        columnNumber: 7\n      }\n    }, __jsx(\"img\", {\n      className: \"modal-icon\",\n      src: \"static/mainpage/dribbble/dribbble_icon.png\",\n      alt: title,\n      defer: true,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 9\n      }\n    }), __jsx(\"span\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 9\n      }\n    }, \"DRIBBBLE\")), __jsx(\"a\", {\n      href: url,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 7\n      }\n    }, __jsx(\"h4\", {\n      className: \"modal-title\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }\n    }, title)), __jsx(\"label\", {\n      htmlFor: id + \"-check\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 7\n      }\n    }, __jsx(\"a\", {\n      className: \"close-modal\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 36\n      }\n    }, \"x\"))), __jsx(\"div\", {\n      className: \"dribbble-main\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 5\n      }\n    }, __jsx(\"img\", {\n      src: 'static/mainpage/dribbble/' + img_name + '.png',\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 7\n      }\n    }), __jsx(\"div\", {\n      className: \"modal-desc\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 7\n      }\n    }, description)));\n  }\n\n  function modalTrigger(_ref2) {\n    var img_name = _ref2.img_name,\n        id = _ref2.id,\n        title = _ref2.title;\n    return __jsx(\"div\", {\n      className: id + \"-card modal-card hover-grow\",\n      title: title,\n      style: {\n        backgroundImage: \"url(static/mainpage/dribbble/\".concat(img_name, \"_thumb.png)\")\n      },\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 58\n      }\n    });\n  }\n\n  var modalList = [{\n    id: \"dribbble1\",\n    title: \"Social dog walking app\",\n    img_name: \"daily_ui_20\",\n    url: \"https://dribbble.com/shots/5376044-Social-dog-walking-app-concept-Daily-UI-020\",\n    description: \"An app concept for tracking your dog's walks, with collar geo location to measure your dog's covered distance and proximity to you. This is a continuation of the concept from Daily UI 19, a leader board UI design that 'Gamifies' dog walking to keep dog owners engaged and incentivised to walk their dogs. \\uD83D\\uDC36 @Daily UI\"\n  }, {\n    id: \"dribbble2\",\n    title: \"ECommerce dashboard\",\n    img_name: \"daily_ui_18\",\n    url: \"https://dribbble.com/shots/5376044-Social-dog-walking-app-concept-Daily-UI-020\",\n    description: \"An eCommerce analytics UI design for @Daily UI 18. Having experience running an eCommerce store, I took this opportunity to design my ideal analytics page. I used horizontal and vertical grids to try and fit in as much information as I could whilst still letting it breath. \\uD83D\\uDE42\"\n  }, {\n    id: \"dribbble3\",\n    title: \"Social app settings page\",\n    img_name: \"daily_ui_07\",\n    url: \"https://dribbble.com/shots/5376044-Social-dog-walking-app-concept-Daily-UI-020\",\n    description: \"Daily UI #007 - design a settings page!\"\n  }, {\n    id: \"dribbble4\",\n    title: \"Home monitoring app dashboard\",\n    img_name: \"daily_ui_21\",\n    url: \"https://dribbble.com/shots/5376044-Social-dog-walking-app-concept-Daily-UI-020\",\n    description: \"An app concept for a home monitoring app's dashboard. I tried to balance visual appeal with usability by presenting information in a clean and minimal as design whilst adding some visual flare to the most important element on the screen. \\u2744\\uFE0F\\uD83D\\uDD25 @Daily UI\"\n  }];\n  return __jsx(\"div\", {\n    id: \"dribbbles\",\n    className: \"center-text\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 10\n    }\n  }, __jsx(\"h3\", {\n    className: \"center works-subtitle\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 5\n    }\n  }, \"Dribbbles\"), __jsx(\"div\", {\n    className: \"flex-gallery row\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 5\n    }\n  }, modalList.map(function (item, index) {\n    return __jsx(\"div\", {\n      key: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }\n    }, __jsx(_smallComponents_Modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      info: item,\n      content: dribbbleShot,\n      trigger: modalTrigger,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 11\n      }\n    }));\n  })), __jsx(\"a\", {\n    className: \"button black-button\",\n    href: \"https://codepen.io/ash_s_west\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 5\n    }\n  }, \"See more on Dribbble\"));\n}\n_c = CodePen;\n\nvar _c;\n\n$RefreshReg$(_c, \"CodePen\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL2hvbWVQYWdlL3NlY3Rpb25Db21wb25lbnRzL0RyaWJiYmxlLmpzP2I2ZWEiXSwibmFtZXMiOlsiQ29kZVBlbiIsImRyaWJiYmxlU2hvdCIsInRpdGxlIiwidXJsIiwiaW1nX25hbWUiLCJkZXNjcmlwdGlvbiIsImlkIiwibW9kYWxUcmlnZ2VyIiwiYmFja2dyb3VuZEltYWdlIiwibW9kYWxMaXN0IiwibWFwIiwiaXRlbSIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsT0FBVCxHQUFtQjtBQUFBOztBQUVoQyxXQUFTQyxZQUFULE9BQWdFO0FBQUEsUUFBeENDLEtBQXdDLFFBQXhDQSxLQUF3QztBQUFBLFFBQWpDQyxHQUFpQyxRQUFqQ0EsR0FBaUM7QUFBQSxRQUE1QkMsUUFBNEIsUUFBNUJBLFFBQTRCO0FBQUEsUUFBbEJDLFdBQWtCLFFBQWxCQSxXQUFrQjtBQUFBLFFBQUxDLEVBQUssUUFBTEEsRUFBSztBQUFFLFdBQU8sbUVBQ3ZFO0FBQUssZUFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUcsVUFBSSxFQUFDLCtCQUFSO0FBQXdDLGVBQVMsRUFBQyxpQkFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssZUFBUyxFQUFDLFlBQWY7QUFBNEIsU0FBRyxFQUFDLDRDQUFoQztBQUE2RSxTQUFHLEVBQUVKLEtBQWxGO0FBQXlGLFdBQUssTUFBOUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRixDQURGLEVBTUU7QUFBRyxVQUFJLEVBQUVDLEdBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUksZUFBUyxFQUFDLGFBQWQ7QUFBQTtB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QVZLLENBQVA7QUFZRDtLQWpEdUJQLE8iLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL2hvbWVQYWdlL3NlY3Rpb25Db21wb25lbnRzL0RyaWJiYmxlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vZGFsIGZyb20gXCIuLi8uLi9zbWFsbENvbXBvbmVudHMvTW9kYWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29kZVBlbigpIHtcblxuICBmdW5jdGlvbiBkcmliYmJsZVNob3QgKHt0aXRsZSwgdXJsLCBpbWdfbmFtZSwgZGVzY3JpcHRpb24sIGlkfSkgeyByZXR1cm4gPD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZHJpYmJibGUuY29tL0FzaGxleXN3XCIgY2xhc3NOYW1lPVwibW9kYWwtaWNvbi1saW5rXCI+XG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibW9kYWwtaWNvblwiIHNyYz0nc3RhdGljL21haW5wYWdlL2RyaWJiYmxlL2RyaWJiYmxlX2ljb24ucG5nJyBhbHQ9e3RpdGxlfSBkZWZlci8+XG4gICAgICAgIDxzcGFuPkRSSUJCQkxFPC9zcGFuPlxuICAgICAgPC9hPlxuXG4gICAgICA8YSBocmVmPXt1cmx9PlxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIj57dGl0bGV9PC9oND5cbiAgICAgIDwvYT5cblxuICAgICAgPGxhYmVsIGh0bWxGb3I9e2lkK1wiLWNoZWNrXCJ9PjxhIGNsYXNzTmFtZT1cImNsb3NlLW1vZGFsXCI+eDwvYT48L2xhYmVsPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJkcmliYmJsZS1tYWluXCI+XG4gICAgICA8aW1nIHNyYz17J3N0YXRpYy9tYWlucGFnZS9kcmliYmJsZS8nK2ltZ19uYW1lKycucG5nJ30vPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kZXNjXCI+e2Rlc2NyaXB0aW9ufTwvZGl2PlxuICAgIDwvZGl2PlxuICA8Lz5cbiAgfVxuXG4gIGZ1bmN0aW9uIG1vZGFsVHJpZ2dlciAoe2ltZ19uYW1lLCBpZCwgdGl0bGV9KSB7IHJldHVybiA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2lkK1wiLWNhcmQgbW9kYWwtY2FyZCBob3Zlci1ncm93XCJ9XG4gICAgICB0aXRsZT17dGl0bGV9XG4gICAgICBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogYHVybChzdGF0aWMvbWFpbnBhZ2UvZHJpYmJibGUvJHtpbWdfbmFtZX1fdGh1bWIucG5nKWB9fVxuICAgID48L2Rpdj5cbiAgfVxuXG4gIGNvbnN0IG1vZGFsTGlzdCA9IFtcbiAgICB7aWQ6XCJkcmliYmJsZTFcIix0aXRsZTpcIlNvY2lhbCBkb2cgd2Fsa2luZyBhcHBcIixpbWdfbmFtZTpcImRhaWx5X3VpXzIwXCIsdXJsOlwiaHR0cHM6Ly9kcmliYmJsZS5jb20vc2hvdHMvNTM3NjA0NC1Tb2NpYWwtZG9nLXdhbGtpbmctYXBwLWNvbmNlcHQtRGFpbHktVUktMDIwXCIsZGVzY3JpcHRpb246YEFuIGFwcCBjb25jZXB0IGZvciB0cmFja2luZyB5b3VyIGRvZydzIHdhbGtzLCB3aXRoIGNvbGxhciBnZW8gbG9jYXRpb24gdG8gbWVhc3VyZSB5b3VyIGRvZydzIGNvdmVyZWQgZGlzdGFuY2UgYW5kIHByb3hpbWl0eSB0byB5b3UuIFRoaXMgaXMgYSBjb250aW51YXRpb24gb2YgdGhlIGNvbmNlcHQgZnJvbSBEYWlseSBVSSAxOSwgYSBsZWFkZXIgYm9hcmQgVUkgZGVzaWduIHRoYXQgJ0dhbWlmaWVzJyBkb2cgd2Fsa2luZyB0byBrZWVwIGRvZyBvd25lcnMgZW5nYWdlZCBhbmQgaW5jZW50aXZpc2VkIHRvIHdhbGsgdGhlaXIgZG9ncy4g8J+QtiBARGFpbHkgVUlgfSxcbiAgICB7aWQ6XCJkcmliYmJsZTJcIix0aXRsZTpcIkVDb21tZXJjZSBkYXNoYm9hcmRcIixpbWdfbmFtZTpcImRhaWx5X3VpXzE4XCIsdXJsOlwiaHR0cHM6Ly9kcmliYmJsZS5jb20vc2hvdHMvNTM3NjA0NC1Tb2NpYWwtZG9nLXdhbGtpbmctYXBwLWNvbmNlcHQtRGFpbHktVUktMDIwXCIsZGVzY3JpcHRpb246YEFuIGVDb21tZXJjZSBhbmFseXRpY3MgVUkgZGVzaWduIGZvciBARGFpbHkgVUkgMTguIEhhdmluZyBleHBlcmllbmNlIHJ1bm5pbmcgYW4gZUNvbW1lcmNlIHN0b3JlLCBJIHRvb2sgdGhpcyBvcHBvcnR1bml0eSB0byBkZXNpZ24gbXkgaWRlYWwgYW5hbHl0aWNzIHBhZ2UuIEkgdXNlZCBob3Jpem9udGFsIGFuZCB2ZXJ0aWNhbCBncmlkcyB0byB0cnkgYW5kIGZpdCBpbiBhcyBtdWNoIGluZm9ybWF0aW9uIGFzIEkgY291bGQgd2hpbHN0IHN0aWxsIGxldHRpbmcgaXQgYnJlYXRoLiDwn5mCYH0sXG4gICAge2lkOlwiZHJpYmJibGUzXCIsdGl0bGU6XCJTb2NpYWwgYXBwIHNldHRpbmdzIHBhZ2VcIixpbWdfbmFtZTpcImRhaWx5X3VpXzA3XCIsdXJsOlwiaHR0cHM6Ly9kcmliYmJsZS5jb20vc2hvdHMvNTM3NjA0NC1Tb2NpYWwtZG9nLXdhbGtpbmctYXBwLWNvbmNlcHQtRGFpbHktVUktMDIwXCIsZGVzY3JpcHRpb246YERhaWx5IFVJICMwMDcgLSBkZXNpZ24gYSBzZXR0aW5ncyBwYWdlIWB9LFxuICAgIHtpZDpcImRyaWJiYmxlNFwiLHRpdGxlOlwiSG9tZSBtb25pdG9yaW5nIGFwcCBkYXNoYm9hcmRcIixpbWdfbmFtZTpcImRhaWx5X3VpXzIxXCIsdXJsOlwiaHR0cHM6Ly9kcmliYmJsZS5jb20vc2hvdHMvNTM3NjA0NC1Tb2NpYWwtZG9nLXdhbGtpbmctYXBwLWNvbmNlcHQtRGFpbHktVUktMDIwXCIsZGVzY3JpcHRpb246YEFuIGFwcCBjb25jZXB0IGZvciBhIGhvbWUgbW9uaXRvcmluZyBhcHAncyBkYXNoYm9hcmQuIEkgdHJpZWQgdG8gYmFsYW5jZSB2aXN1YWwgYXBwZWFsIHdpdGggdXNhYmlsaXR5IGJ5IHByZXNlbnRpbmcgaW5mb3JtYXRpb24gaW4gYSBjbGVhbiBhbmQgbWluaW1hbCBhcyBkZXNpZ24gd2hpbHN0IGFkZGluZyBzb21lIHZpc3VhbCBmbGFyZSB0byB0aGUgbW9zdCBpbXBvcnRhbnQgZWxlbWVudCBvbiB0aGUgc2NyZWVuLiDinYTvuI/wn5SlIEBEYWlseSBVSWB9XG4gIF1cblxuICByZXR1cm4gPGRpdiBpZD1cImRyaWJiYmxlc1wiIGNsYXNzTmFtZT1cImNlbnRlci10ZXh0XCI+XG4gICAgPGgzIGNsYXNzTmFtZT1cImNlbnRlciB3b3Jrcy1zdWJ0aXRsZVwiPkRyaWJiYmxlczwvaDM+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWdhbGxlcnkgcm93XCI+XG4gICAgICB7bW9kYWxMaXN0Lm1hcCgoaXRlbSxpbmRleCkgPT4gXG4gICAgICAgIDxkaXYga2V5PXtpbmRleH0+XG4gICAgICAgICAgPE1vZGFsIGluZm89e2l0ZW19IGNvbnRlbnQ9e2RyaWJiYmxlU2hvdH0gdHJpZ2dlcj17bW9kYWxUcmlnZ2VyfS8+XG4gICAgICAgIDwvZGl2PilcbiAgICAgIH1cbiAgICA8L2Rpdj5cblxuICAgIDxhIGNsYXNzTmFtZT1cImJ1dHRvbiBibGFjay1idXR0b25cIiBocmVmPVwiaHR0cHM6Ly9jb2RlcGVuLmlvL2FzaF9zX3dlc3RcIj5TZWUgbW9yZSBvbiBEcmliYmJsZTwvYT5cbiAgPC9kaXY+XG59ICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/homePage/sectionComponents/Dribbble.js\n");

/***/ })

})