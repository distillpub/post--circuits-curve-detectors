webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/neuron.js":
/*!******************************!*\
  !*** ./components/neuron.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/ui */ "./components/ui.js");
/* harmony import */ var components_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/helpers */ "./components/helpers.js");
var _this = undefined,
    _jsxFileName = "/Users/nick/code/circuits/curve-detector/components/neuron.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var _ref$model = _ref.model,
      model = _ref$model === void 0 ? 'inceptionv1' : _ref$model,
      layer = _ref.layer,
      neuron = _ref.neuron;
  var layerText = layer.replace(/mixed/g, '');
  var url = "https://microscope.openai.com/models/".concat(model, "/").concat(layer, "_0/").concat(neuron);
  return __jsx("a", {
    cursor: "pointer",
    href: url,
    style: {
      borderBottom: 'none',
      height: 21
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("img", {
    style: {
      opacity: 0.7,
      transform: 'translateY(5px)',
      display: 'inline-block',
      borderRadius: 5
    },
    width: 21,
    src: Object(components_helpers__WEBPACK_IMPORTED_MODULE_2__["featureVis"])(model, layer, neuron),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }), __jsx("span", {
    style: {
      marginLeft: 3,
      fontSize: 16,
      lineHeight: '28.8px',
      color: 'rgba(0, 0, 0, 0.8)'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, layerText, ":", neuron));
});

/***/ })

})
//# sourceMappingURL=index.js.fd93e8a9245aaa28d0e3.hot-update.js.map