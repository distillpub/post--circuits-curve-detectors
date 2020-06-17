webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/simplified/curve2/index.js":
/*!******************************************!*\
  !*** ./pages/simplified/curve2/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/ui */ "./components/ui.js");
/* harmony import */ var components_figure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/figure */ "./components/figure.js");
/* harmony import */ var components_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/helpers */ "./components/helpers.js");
/* harmony import */ var pages_cofab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pages/cofab */ "./pages/cofab.js");
/* harmony import */ var components_colab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/colab */ "./components/colab/index.js");
/* harmony import */ var victory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! victory */ "./node_modules/victory/es/index.js");
var _this = undefined,
    _jsxFileName = "/Users/nick/code/circuits/curve-detector/pages/simplified/curve2/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var neurons = [379, 406, 385, 343, 342, 388, 324, 340, 330, 349];
/* harmony default export */ __webpack_exports__["default"] = (Object(pages_cofab__WEBPACK_IMPORTED_MODULE_4__["default"])(function (_ref) {
  var allActivations = _ref.allActivations,
      icons = _ref.icons;
  return __jsx(components_figure__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx(components_ui__WEBPACK_IMPORTED_MODULE_1__["Surface"], {
    alignSelf: "center",
    position: "relative",
    width: 703,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx(components_ui__WEBPACK_IMPORTED_MODULE_1__["Surface"], {
    flexFlow: "row",
    alignItems: "center",
    marginLeft: 5,
    marginBottom: 20,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx(components_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    marginLeft: 5,
    fontSize: 20,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, "Curve Family Activations by Orientation")), __jsx(victory__WEBPACK_IMPORTED_MODULE_6__["VictoryGroup"], {
    margin: 0,
    padding: 0,
    style: {
      data: {
        strokeWidth: 3,
        fillOpacity: 0.4
      }
    },
    width: 703,
    height: 120,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, allActivations.map(function (activations) {
    return __jsx(victory__WEBPACK_IMPORTED_MODULE_6__["VictoryArea"], {
      interpolation: "basis",
      style: {
        data: {
          fill: 'transparent',
          stroke: 'rgba(0, 0, 0, 0.6)',
          strokeWidth: 2
        }
      },
      data: activations.map(function (y, x) {
        return {
          x: x,
          y: y
        };
      }),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 13
      }
    });
  })), __jsx(components_ui__WEBPACK_IMPORTED_MODULE_1__["Surface"], {
    flexFlow: "row",
    paddingTop: 3,
    background: "white",
    paddingBottom: 3,
    borderRadius: 5,
    overflow: "hidden",
    border: "1px solid rgba(0, 0, 0, 0.2)",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, icons.map(function (icon) {
    var size = Math.floor(703 / icons.length);
    return __jsx("img", {
      src: icon,
      width: size,
      height: size,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 20
      }
    });
  })), __jsx("figcaption", {
    style: {
      width: 703,
      marginTop: 5
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, "Activations are normalized by the neuron's maximum activation. We'll examine activations by neuron in more depth when we explore syntheti stimuli."), __jsx(components_ui__WEBPACK_IMPORTED_MODULE_1__["Surface"], {
    alignSelf: "flex-end",
    marginTop: 5,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, __jsx(components_colab__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "https://colab.research.google.com/drive/1lnFJ0MjhPzw3J9u-Xhqvn5hjAF9sZ3aY#scrollTo=iiV2UfNr-us5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }))));
}));

/***/ })

})
//# sourceMappingURL=index.js.3b6ae1ad7a4e62b0448c.hot-update.js.map