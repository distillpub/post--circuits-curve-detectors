webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/dataset/exponential/exponential-pdf2.jpg":
/*!********************************************************!*\
  !*** ./pages/dataset/exponential/exponential-pdf2.jpg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "./_next/static/images/exponential-pdf2-088c43850b29bc9780fe5c751bf169ee.jpg";

/***/ }),

/***/ "./pages/dataset/exponential/index.js":
/*!********************************************!*\
  !*** ./pages/dataset/exponential/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_figure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/figure */ "./components/figure.js");
/* harmony import */ var components_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/ui */ "./components/ui.js");
var _this = undefined,
    _jsxFileName = "/Users/nick/code/post--circuits-curve-detectors/pages/dataset/exponential/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var curves = [379, 406, 385, 343, 342, 388, 324, 340, 330, 349];

var Fig = function Fig(_ref) {
  var title = _ref.title,
      url = _ref.url,
      caption = _ref.caption;
  return __jsx(components_ui__WEBPACK_IMPORTED_MODULE_2__["Surface"], {
    marginX: 20,
    marginY: 20,
    position: "relative",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx(components_ui__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    size: 500,
    position: "absolute",
    left: 60,
    top: 5,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, title), __jsx(components_ui__WEBPACK_IMPORTED_MODULE_2__["Surface"], {
    width: 1000,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: url,
    width: 1000,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }), __jsx("figcaption", {
    style: {
      marginTop: 10,
      paddingLeft: 20,
      paddingRight: 20
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, caption)));
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx(components_ui__WEBPACK_IMPORTED_MODULE_2__["Surface"], {
    marginBottom: 20,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 3
    }
  }, __jsx(components_ui__WEBPACK_IMPORTED_MODULE_2__["Surface"], {
    alignItems: "center",
    gridColumn: "screen",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx("img", {
    style: {
      marginBottom: 10,
      alignSelf: 'center',
      transform: 'translateX(-15px)'
    },
    width: 900,
    src: __webpack_require__(/*! ./exponential-pdf2.jpg */ "./pages/dataset/exponential/exponential-pdf2.jpg"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  })), __jsx("figcaption", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, "By looking at pre-ReLU values for 3b:379 activations, we see that both positive and negative values follow an exponential distribution. Since all negative values will be lifted to zero by the ReLU, 3b:379 activations are sparse, with only 11% of stimuli across the dataset causing activations."));
});

/***/ })

})
//# sourceMappingURL=index.js.64a2b41e8089a06f6b82.hot-update.js.map