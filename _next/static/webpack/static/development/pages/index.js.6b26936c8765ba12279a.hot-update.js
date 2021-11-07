webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/components/homePage/sectionComponents/CodePen.js":
/*!****************************************************************!*\
  !*** ./pages/components/homePage/sectionComponents/CodePen.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CodePen; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _smallComponents_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../smallComponents/Modal */ \"./pages/components/smallComponents/Modal.js\");\nvar _jsxFileName = \"/Users/ashleysaleem-west/Documents/GitHub/next-blog/pages/components/homePage/sectionComponents/CodePen.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction CodePen() {\n  var _this = this;\n\n  function codePenShot(_ref) {\n    var title = _ref.title,\n        url = _ref.url,\n        id = _ref.id;\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"div\", {\n      className: \"modal-header\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 6,\n        columnNumber: 5\n      }\n    }, __jsx(\"a\", {\n      href: \"https://codepen.io/ash_s_west\",\n      className: \"modal-icon-link\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 7,\n        columnNumber: 7\n      }\n    }, __jsx(\"img\", {\n      className: \"modal-icon\",\n      src: \"/static/mainpage/codepen/codepen_icon.svg\",\n      alt: \"codepen\",\n      defer: true,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 9\n      }\n    }), __jsx(\"span\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 9\n      }\n    }, \"CODEPEN\")), __jsx(\"a\", {\n      href: \"https://codepen.io/ash_s_west/pen/\" + url,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 7\n      }\n    }, __jsx(\"h4\", {\n      className: \"modal-title\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }\n    }, title)), __jsx(\"label\", {\n      htmlFor: id + \"-check\",\n      className: \"close-modal\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 7\n      }\n    }, \"+\")), __jsx(\"iframe\", {\n      style: {\n        width: '70vw',\n        maxWidth: '1000px',\n        minHeight: '70vh'\n      },\n      scrolling: \"no\",\n      title: title,\n      src: \"https://codepen.io/ash_s_west/embed/\" + url + \"?height=265&theme-id=dark&default-tab=css,result\",\n      frameBorder: \"no\",\n      loading: \"lazy\",\n      allowtransparency: \"true\",\n      allowFullScreen: true,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 5\n      }\n    }, \"See the Pen \", __jsx(\"a\", {\n      href: \"https://codepen.io/Saleemw/pen/\" + url,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 19\n      }\n    }, title), \"by Ashley Saleem-West \", __jsx(\"a\", {\n      href: \"https://codepen.io/ash_s_west\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 29\n      }\n    }, \"@ash_s_west\"), \" on \", __jsx(\"a\", {\n      href: \"https://codepen.io\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 88\n      }\n    }, \"CodePen\"), \".\"));\n  }\n\n  function modalTrigger(_ref2) {\n    var img = _ref2.img,\n        id = _ref2.id,\n        title = _ref2.title;\n    return __jsx(\"div\", {\n      className: id + \"-card modal-card hover-grow\",\n      title: title,\n      style: {\n        backgroundImage: \"url(\".concat(img, \")\")\n      },\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 53\n      }\n    });\n  }\n\n  var modalList = [// {id:\"codepen1\",title:\"Dynamically load JS on click\",url:\"poPOMoV\",img:\"static/mainpage/codepen/codepen-1.webp\"},\n  {\n    id: \"codepen2\",\n    title: \"Pure CSS side menus\",\n    url: \"bGrwVWx\",\n    img: \"static/mainpage/codepen/codepen-2.webp\"\n  }, {\n    id: \"codepen3\",\n    title: \"Pure CSS infinate slider\",\n    url: \"ZEJpWoq\",\n    img: \"static/mainpage/codepen/codepen-3.webp\"\n  }, {\n    id: \"codepen4\",\n    title: \"Pure CSS dark mode switch\",\n    url: \"RwRejrb\",\n    img: \"static/mainpage/codepen/codepen-4.webp\"\n  }];\n  return __jsx(\"div\", {\n    id: \"codepens\",\n    className: \"center-text\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 10\n    }\n  }, __jsx(\"h3\", {\n    className: \"center works-subtitle\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 5\n    }\n  }, \"CodePens\"), __jsx(\"div\", {\n    className: \"flex-gallery\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 5\n    }\n  }, modalList.map(function (item, index) {\n    return __jsx(\"div\", {\n      key: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }\n    }, __jsx(_smallComponents_Modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      info: item,\n      content: codePenShot,\n      trigger: modalTrigger,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 11\n      }\n    }));\n  })), __jsx(\"a\", {\n    className: \"button black-button\",\n    href: \"https://codepen.io/ash_s_west\",\n    rel: \"noopener\",\n    title: \"codepen\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 5\n    }\n  }, \"See more on CodePen\"));\n}\n_c = CodePen;\n\nvar _c;\n\n$RefreshReg$(_c, \"CodePen\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL2hvbWVQYWdlL3NlY3Rpb25Db21wb25lbnRzL0NvZGVQZW4uanM/NjRmYyJdLCJuYW1lcyI6WyJDb2RlUGVuIiwiY29kZVBlblNob3QiLCJ0aXRsZSIsInVybCIsImlkIiwid2lkdGgiLCJtYXhXaWR0aCIsIm1pbkhlaWdodCIsIm1vZGFsVHJpZ2dlciIsImltZyIsImJhY2tncm91bmRJbWFnZSIsIm1vZGFsTGlzdCIsIm1hcCIsIml0ZW0iLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLE9BQVQsR0FBbUI7QUFBQTs7QUFFaEMsV0FBU0MsV0FBVCxPQUFzQztBQUFBLFFBQWZDLEtBQWUsUUFBZkEsS0FBZTtBQUFBLFFBQVRDLEdBQVMsUUFBVEEsR0FBUztBQUFBLFFBQUxDLEVBQUssUUFBTEEsRUFBSztBQUFFLFdBQU8sbUVBQzdDO0FBQUssZUFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUcsVUFBSSxFQUFDLCtCQUFSO0FBQXdDLGVBQVMsRUFBQyxpQkFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssZUFBUyxFQUFDLFlBQWY7QUFBNEIsU0FBRyxFQUFDLDJDQUFoQztBQUE0RSxTQUFHLEVBQUMsU0FBaEY7QUFBMEYsV0FBSyxNQUEvRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLENBREYsRUFNRTtBQUFHLFVBQUksRUFBRSx1Q0FBcUNELEdBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFJLGVBQVMsRUFBQyxhQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBNkJELEtBQTdCLENBREYsQ0FORixF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RSxPQUFHLEVBQUMsVUFBNUU7QUFBdUYsU0FBSyxFQUFDLFNBQTdGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBZEssQ0FBUDtBQWtCRDtLQWhFdUJSLE8iLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL2hvbWVQYWdlL3NlY3Rpb25Db21wb25lbnRzL0NvZGVQZW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW9kYWwgZnJvbSBcIi4uLy4uL3NtYWxsQ29tcG9uZW50cy9Nb2RhbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb2RlUGVuKCkge1xuXG4gIGZ1bmN0aW9uIGNvZGVQZW5TaG90ICh7dGl0bGUsdXJsLGlkfSkgeyByZXR1cm4gPD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vY29kZXBlbi5pby9hc2hfc193ZXN0XCIgY2xhc3NOYW1lPVwibW9kYWwtaWNvbi1saW5rXCI+XG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibW9kYWwtaWNvblwiIHNyYz0nL3N0YXRpYy9tYWlucGFnZS9jb2RlcGVuL2NvZGVwZW5faWNvbi5zdmcnIGFsdD0nY29kZXBlbicgZGVmZXIvPlxuICAgICAgICA8c3Bhbj5DT0RFUEVOPC9zcGFuPlxuICAgICAgPC9hPlxuXG4gICAgICA8YSBocmVmPXtcImh0dHBzOi8vY29kZXBlbi5pby9hc2hfc193ZXN0L3Blbi9cIit1cmx9PlxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIj57dGl0bGV9PC9oND5cbiAgICAgIDwvYT5cblxuICAgICAgPGxhYmVsIGh0bWxGb3I9e2lkK1wiLWNoZWNrXCJ9IGNsYXNzTmFtZT1cImNsb3NlLW1vZGFsXCI+KzwvbGFiZWw+XG4gICAgPC9kaXY+XG5cbiAgICB7LyogPGlmcmFtZSBzdHlsZT17e3dpZHRoOiAnNzB2dycsIG1heFdpZHRoOiAnMTAwMHB4JywgbWluSGVpZ2h0OiAnNzB2aCd9fSBzY3JvbGxpbmc9XCJub1wiIHRpdGxlPVwiQnV0dG9uIGNsaWNrIHB1bHNpbmcgZWZmZWN0IC0gUHVyZSBDU1NcIiBcbiAgICAgICAgc3JjPXtcImh0dHBzOi8vY29kZXBlbi5pby9hc2hfc193ZXN0L2VtYmVkL1wiK3VybCtcIj9oZWlnaHQ9MjY1JnRoZW1lLWlkPWRhcmsmZGVmYXVsdC10YWI9Y3NzLHJlc3VsdFwifSBcbiAgICAgICAgbG9hZGluZz1cImxhenlcIiBhbGxvd3RyYW5zcGFyZW5jeT1cInRydWVcIiBhbGxvd0Z1bGxTY3JlZW49e3RydWV9IGhlaWdodD17MjY1fSBmcmFtZUJvcmRlcj1cIm5vXCI+XG4gICAgICAgIFNlZSB0aGUgUGVuICZsdDthIGhyZWY9e1wiaHR0cHM6Ly9jb2RlcGVuLmlvL2FzaF9zX3dlc3QvcGVuL1wiK3VybH0mZ3Q7e3RpdGxlfSZsdDsvYSZndDsgYnkgQXNobGV5IFNhbGVlbS1XZXN0XG4gICAgICAgICgmbHQ7YSBocmVmPSdodHRwczovL2NvZGVwZW4uaW8vYXNoX3Nfd2VzdCcmZ3Q7QGFzaF9zX3dlc3QmbHQ7L2EmZ3Q7KSBvbiAmbHQ7YSBocmVmPSdodHRwczovL2NvZGVwZW4uaW8nJmd0O0NvZGVQZW4mbHQ7L2EmZ3Q7LlxuICAgIDwvaWZyYW1lPiAqL31cblxuICAgIDxpZnJhbWUgc3R5bGU9e3t3aWR0aDogJzcwdncnLCBtYXhXaWR0aDogJzEwMDBweCcsIG1pbkhlaWdodDogJzcwdmgnfX0gc2Nyb2xsaW5nPVwibm9cIiB0aXRsZT17dGl0bGV9IFxuICAgICAgc3JjPXtcImh0dHBzOi8vY29kZXBlbi5pby9hc2hfc193ZXN0L2VtYmVkL1wiK3VybCtcIj9oZWlnaHQ9MjY1JnRoZW1lLWlkPWRhcmsmZGVmYXVsdC10YWI9Y3NzLHJlc3VsdFwifSBcbiAgICAgIGZyYW1lQm9yZGVyPVwibm9cIiBsb2FkaW5nPVwibGF6eVwiIGFsbG93dHJhbnNwYXJlbmN5PVwidHJ1ZVwiIGFsbG93RnVsbFNjcmVlbj17dHJ1ZX0+XG4gICAgICBTZWUgdGhlIFBlbiA8YSBocmVmPXtcImh0dHBzOi8vY29kZXBlbi5pby9TYWxlZW13L3Blbi9cIiArIHVybH0+e3RpdGxlfTwvYT5cbiAgICAgIGJ5IEFzaGxleSBTYWxlZW0tV2VzdCA8YSBocmVmPVwiaHR0cHM6Ly9jb2RlcGVuLmlvL2FzaF9zX3dlc3RcIj5AYXNoX3Nfd2VzdDwvYT4gb24gPGEgaHJlZj1cImh0dHBzOi8vY29kZXBlbi5pb1wiPkNvZGVQZW48L2E+LlxuICAgIDwvaWZyYW1lPlxuICA8Lz5cbn1cblxuICBmdW5jdGlvbiBtb2RhbFRyaWdnZXIgKHtpbWcsIGlkLCB0aXRsZX0pIHsgcmV0dXJuIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17aWQrXCItY2FyZCBtb2RhbC1jYXJkIGhvdmVyLWdyb3dcIn1cbiAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBgdXJsKCR7aW1nfSlgfX1cbiAgICA+PC9kaXY+XG4gIH1cblxuICBjb25zdCBtb2RhbExpc3QgPSBbXG4gICAgLy8ge2lkOlwiY29kZXBlbjFcIix0aXRsZTpcIkR5bmFtaWNhbGx5IGxvYWQgSlMgb24gY2xpY2tcIix1cmw6XCJwb1BPTW9WXCIsaW1nOlwic3RhdGljL21haW5wYWdlL2NvZGVwZW4vY29kZXBlbi0xLndlYnBcIn0sXG4gICAge2lkOlwiY29kZXBlbjJcIix0aXRsZTpcIlB1cmUgQ1NTIHNpZGUgbWVudXNcIix1cmw6XCJiR3J3Vld4XCIsaW1nOlwic3RhdGljL21haW5wYWdlL2NvZGVwZW4vY29kZXBlbi0yLndlYnBcIn0sXG4gICAge2lkOlwiY29kZXBlbjNcIix0aXRsZTpcIlB1cmUgQ1NTIGluZmluYXRlIHNsaWRlclwiLHVybDpcIlpFSnBXb3FcIixpbWc6XCJzdGF0aWMvbWFpbnBhZ2UvY29kZXBlbi9jb2RlcGVuLTMud2VicFwifSxcbiAgICB7aWQ6XCJjb2RlcGVuNFwiLHRpdGxlOlwiUHVyZSBDU1MgZGFyayBtb2RlIHN3aXRjaFwiLHVybDpcIlJ3UmVqcmJcIixpbWc6XCJzdGF0aWMvbWFpbnBhZ2UvY29kZXBlbi9jb2RlcGVuLTQud2VicFwifSxcbiAgXVxuXG4gIHJldHVybiA8ZGl2IGlkPVwiY29kZXBlbnNcIiBjbGFzc05hbWU9XCJjZW50ZXItdGV4dFwiPlxuXG4gICAgPGgzIGNsYXNzTmFtZT1cImNlbnRlciB3b3Jrcy1zdWJ0aXRsZVwiPkNvZGVQZW5zPC9oMz5cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1nYWxsZXJ5XCI+XG5cbiAgICAgIHttb2RhbExpc3QubWFwKChpdGVtLGluZGV4KSA9PiBcbiAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICA8TW9kYWwgaW5mbz17aXRlbX0gY29udGVudD17Y29kZVBlblNob3R9IHRyaWdnZXI9e21vZGFsVHJpZ2dlcn0vPlxuICAgICAgICA8L2Rpdj4pXG4gICAgICB9XG5cbiAgICA8L2Rpdj5cblxuICAgIDxhIGNsYXNzTmFtZT1cImJ1dHRvbiBibGFjay1idXR0b25cIiBocmVmPVwiaHR0cHM6Ly9jb2RlcGVuLmlvL2FzaF9zX3dlc3RcIiByZWw9XCJub29wZW5lclwiIHRpdGxlPVwiY29kZXBlblwiPlNlZSBtb3JlIG9uIENvZGVQZW48L2E+XG4gICAgey8qIDxzY3JpcHQgZGVmZXIgc3JjPVwic3RhdGljL3NjcmlwdHMvbW9kZWxJZnJhbWUuanNcIj48L3NjcmlwdD4gKi99XG5cbiAgPC9kaXY+XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/homePage/sectionComponents/CodePen.js\n");

/***/ })

})