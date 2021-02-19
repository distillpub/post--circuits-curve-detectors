webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/curveAnalysis/butterfly/index.js":
/*!************************************************!*\
  !*** ./pages/curveAnalysis/butterfly/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/ui */ "./components/ui.js");
/* harmony import */ var components_figure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/figure */ "./components/figure.js");
var _this = undefined,
    _jsxFileName = "/Users/nick/code/post--circuits-curve-detectors/pages/curveAnalysis/butterfly/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Header = function Header(_ref) {
  var children = _ref.children;
  return __jsx(components_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    marginBottom: 10,
    borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
    paddingBottom: 1,
    paddingLeft: 5,
    width: '100%',
    fontSize: 16,
    fontWeight: 600,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 3
    }
  }, children);
};

var size = 264;
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx(components_figure__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 3
    }
  }, __jsx(components_ui__WEBPACK_IMPORTED_MODULE_1__["Surface"], {
    flexFlow: "row",
    alignSelf: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx(components_ui__WEBPACK_IMPORTED_MODULE_1__["Surface"], {
    marginX: 5,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx(Header, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, "Source"), __jsx("img", {
    width: size,
    src: "https://storage.googleapis.com/distill-curve-detectors/three_examples/butterfly_leaf/source.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  })), __jsx(components_ui__WEBPACK_IMPORTED_MODULE_1__["Surface"], {
    marginX: 5,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx(Header, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, "Tracing"), __jsx("video", {
    width: size,
    height: size,
    controls: true,
    poster: "https://storage.googleapis.com/distill-curve-detectors/three_examples/butterfly_leaf/frame_99.png",
    src: "https://storage.googleapis.com/distill-curve-detectors/three_examples/butterfly_leaf/movie_butterfly_leaf.mp4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  })), __jsx(components_ui__WEBPACK_IMPORTED_MODULE_1__["Surface"], {
    marginX: 5,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, __jsx(Header, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, "Tracing NMF Components"), __jsx("video", {
    width: size,
    height: size,
    controls: true,
    poster: "https://storage.googleapis.com/distill-curve-detectors/three_examples/butterfly/frame_99.png",
    src: "https://storage.googleapis.com/distill-curve-detectors/three_examples/butterfly/movie_butterfly.mp4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }))));
});

/***/ }),

/***/ "./pages/curveAnalysis/butterflyQuilt/index.js":
/*!*****************************************************!*\
  !*** ./pages/curveAnalysis/butterflyQuilt/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/ui */ "./components/ui.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_colab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/colab */ "./components/colab/index.js");
var _this = undefined,
    _jsxFileName = "/Users/nick/code/post--circuits-curve-detectors/pages/curveAnalysis/butterflyQuilt/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var rows = 3;
var cols = 5;
var size = 180;
var ourFavorites = [0, 4, 5, 6, 7, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19];
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx(components_ui__WEBPACK_IMPORTED_MODULE_1__["Surface"], {
    marginY: 40,
    gridColumn: "screen",
    alignItems: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 3
    }
  }, __jsx(components_ui__WEBPACK_IMPORTED_MODULE_1__["Surface"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, Object(lodash__WEBPACK_IMPORTED_MODULE_2__["range"])(rows).map(function (row) {
    return __jsx(components_ui__WEBPACK_IMPORTED_MODULE_1__["Surface"], {
      flexFlow: "row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }
    }, Object(lodash__WEBPACK_IMPORTED_MODULE_2__["range"])(cols).map(function (col) {
      var index = ourFavorites[row * cols + col];
      return __jsx("video", {
        style: {
          width: size,
          height: size,
          margin: 0,
          padding: 0,
          objectFit: 'cover'
        },
        width: size,
        height: size,
        muted: true,
        loop: true,
        autoPlay: true,
        src: "https://storage.googleapis.com/distill-curve-detectors/butterfly_quilt_all_v3/10_5000000/".concat(index, "/movie_").concat(index, ".mp4"),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 15
        }
      });
    }));
  })), __jsx(components_ui__WEBPACK_IMPORTED_MODULE_1__["Surface"], {
    flexFlow: "row",
    justifyContent: "space-between",
    width: 880,
    alignSelf: "center",
    marginTop: 5,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx("figcaption", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, "We traced 23 butterfly images and chose our 15 favorites."), __jsx(components_colab__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: "https://colab.research.google.com/drive/1lnFJ0MjhPzw3J9u-Xhqvn5hjAF9sZ3aY#scrollTo=yBQX5TrkWjlP",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  })));
});

/***/ }),

/***/ "./pages/curveAnalysis/tracing/index.js":
/*!**********************************************!*\
  !*** ./pages/curveAnalysis/tracing/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/ui */ "./components/ui.js");
/* harmony import */ var components_figure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/figure */ "./components/figure.js");
/* harmony import */ var components_colab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/colab */ "./components/colab/index.js");
var _this = undefined,
    _jsxFileName = "/Users/nick/code/post--circuits-curve-detectors/pages/curveAnalysis/tracing/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Header = function Header(_ref) {
  var children = _ref.children;
  return __jsx(components_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    marginBottom: 10,
    borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
    paddingBottom: 1,
    paddingLeft: 5,
    width: '100%',
    fontSize: 16,
    fontWeight: 600,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 3
    }
  }, children);
};

var size = 230;

var Row = function Row(_ref2) {
  var name = _ref2.name,
      header = _ref2.header,
      children = _ref2.children;
  return __jsx(components_ui__WEBPACK_IMPORTED_MODULE_1__["Surface"], {
    marginX: 20,
    width: 500,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 3
    }
  }, __jsx(Header, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, header), __jsx(components_ui__WEBPACK_IMPORTED_MODULE_1__["Surface"], {
    flexFlow: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx("img", {
    width: size,
    height: size,
    style: {
      marginRight: 10
    },
    src: "https://storage.cloud.google.com/distill-curve-detectors/three_examples/".concat(name, "/source.png"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }), __jsx("video", {
    width: size,
    height: size,
    controls: true,
    style: {
      marginLeft: 10
    },
    poster: "https://storage.cloud.google.com/distill-curve-detectors/three_examples/".concat(name, "/frame_99.png"),
    src: "https://storage.cloud.google.com/distill-curve-detectors/three_examples/".concat(name, "/movie_").concat(name, ".mp4"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  })), __jsx("figcaption", {
    style: {
      width: 490,
      marginTop: 10,
      paddingLeft: 5,
      paddingRight: 5
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx(components_figure__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 3
    }
  }, __jsx(components_ui__WEBPACK_IMPORTED_MODULE_1__["Surface"], {
    alignSelf: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 5
    }
  }, __jsx(components_ui__WEBPACK_IMPORTED_MODULE_1__["Surface"], {
    flexFlow: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, __jsx(Row, {
    name: "curve",
    header: "Occlusion",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, "Our splines can trace curves even if they have significant occlusion. Furthermore, we can use attribution to construct complex occlusion rules. For instance, we can strongly penalize our spline for overlapping with a particular object or texture, disincentivizing the spline from connecting visual curves that are occluded by these features."), __jsx(Row, {
    name: "subtleS",
    header: "Subtle Curve",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, "Since curve neurons are robust to a wide variety of natural visual features, our curve tracing algorithm can be applied to subtle curves in images.")),  false && false), __jsx(components_ui__WEBPACK_IMPORTED_MODULE_1__["Surface"], {
    marginLeft: 20,
    alignSelf: "center",
    marginTop: 20,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 5
    }
  }, __jsx(Header, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }, "Complex Shapes"), __jsx(components_ui__WEBPACK_IMPORTED_MODULE_1__["Surface"], {
    flexFlow: "row",
    flexWrap: "wrap",
    width: 1043,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, [5, 7, 8, 9].map(function (index) {
    var smallSize = 115;
    return __jsx(components_ui__WEBPACK_IMPORTED_MODULE_1__["Surface"], {
      flexFlow: "row",
      marginX: 10,
      paddingBottom: 10,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 13
      }
    }, __jsx("img", {
      width: smallSize,
      height: smallSize,
      src: "https://storage.googleapis.com/distill-curve-detectors/three_examples/crest".concat(index, "_v3/source.png"),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 15
      }
    }),  false && false, __jsx("video", {
      width: smallSize,
      height: smallSize,
      controls: true,
      autoPlay: true,
      mute: true,
      poster: "https://storage.cloud.google.com/distill-curve-detectors/three_examples/crest".concat(index, "_v3/frame_99.png"),
      src: "https://storage.googleapis.com/distill-curve-detectors/three_examples/crest".concat(index, "_v3/movie_crest").concat(index, "_v3.mp4"),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 15
      }
    }));
  })), __jsx(components_ui__WEBPACK_IMPORTED_MODULE_1__["Surface"], {
    alignSelf: "flex-end",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }
  }, __jsx(components_colab__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: "https://colab.research.google.com/drive/1lnFJ0MjhPzw3J9u-Xhqvn5hjAF9sZ3aY#scrollTo=K5AB2S99PmC5&line=1&uniqifier=1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }
  }))));
});

/***/ }),

/***/ "./pages/dataset/quilt/index.js":
/*!**************************************!*\
  !*** ./pages/dataset/quilt/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DatasetQuilt; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var components_figure__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/figure */ "./components/figure.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! evergreen-ui */ "./node_modules/evergreen-ui/esm/index.js");
/* harmony import */ var components_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/ui */ "./components/ui.js");
/* harmony import */ var components_helpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/helpers */ "./components/helpers.js");
/* harmony import */ var components_colab__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/colab */ "./components/colab/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);







var _jsxFileName = "/Users/nick/code/post--circuits-curve-detectors/pages/dataset/quilt/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









var DatasetQuilt = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(DatasetQuilt, _React$Component);

  var _super = _createSuper(DatasetQuilt);

  function DatasetQuilt() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DatasetQuilt);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      showAttrs: false,
      page: 0
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DatasetQuilt, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      if (this.props.isAttrs) {
        this.setState({
          showAttrs: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props$isAttrs = this.props.isAttrs,
          isAttrs = _this$props$isAttrs === void 0 ? false : _this$props$isAttrs;
      var _this$state = this.state,
          showAttrs = _this$state.showAttrs,
          page = _this$state.page;
      return __jsx(components_figure__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 7
        }
      }, __jsx(components_ui__WEBPACK_IMPORTED_MODULE_10__["Surface"], {
        alignSelf: "center",
        marginTop: 10,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 9
        }
      }, __jsx(components_ui__WEBPACK_IMPORTED_MODULE_10__["Surface"], {
        flexFlow: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingX: 20,
        marginBottom: 10,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }
      }, __jsx(components_ui__WEBPACK_IMPORTED_MODULE_10__["Surface"], {
        flexFlow: "row",
        alignItems: "center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 13
        }
      }, __jsx(components_ui__WEBPACK_IMPORTED_MODULE_10__["Text"], {
        fontSize: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 15
        }
      }, "\u2190"), __jsx(components_ui__WEBPACK_IMPORTED_MODULE_10__["Text"], {
        size: 500,
        marginLeft: 10,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 15
        }
      }, "more ", __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 22
        }
      }, "negative"), " activations")), __jsx(components_ui__WEBPACK_IMPORTED_MODULE_10__["Surface"], {
        flexFlow: "row",
        alignSelf: "center",
        alignItems: "center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 13
        }
      }, __jsx(components_ui__WEBPACK_IMPORTED_MODULE_10__["Surface"], {
        flexFlow: "row",
        alignItems: "center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 15
        }
      }, __jsx(components_ui__WEBPACK_IMPORTED_MODULE_10__["Text"], {
        marginRight: 5,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 17
        }
      }, "Random Dataset Images by "), __jsx("img", {
        src: Object(components_helpers__WEBPACK_IMPORTED_MODULE_11__["featureVis"])('inceptionv1', 'mixed3b', 379),
        width: 30,
        style: {
          borderRadius: 5
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 17
        }
      }), __jsx(components_ui__WEBPACK_IMPORTED_MODULE_10__["Text"], {
        marginLeft: 5,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 17
        }
      }, "3b:379 ", showAttrs ? 'Attribution' : 'Activation')), isAttrs && __jsx(components_ui__WEBPACK_IMPORTED_MODULE_10__["Surface"], {
        cursor: "pointer",
        marginLeft: 10,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 17
        }
      }, function (hovering) {
        return __jsx(components_ui__WEBPACK_IMPORTED_MODULE_10__["Text"], {
          style: {
            borderBottom: '1px solid rgba(0, 0, 0, 0.1)'
          },
          size: 500,
          fontWeight: 500,
          opacity: hovering ? 1 : 0.8,
          onClick: function onClick() {
            if (isAttrs) {
              _this2.setState({
                showAttrs: !showAttrs
              });
            }
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 21
          }
        }, showAttrs ? 'Show images' : 'Show attribution');
      })), __jsx(components_ui__WEBPACK_IMPORTED_MODULE_10__["Surface"], {
        flexFlow: "row",
        alignItems: "center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 13
        }
      }, __jsx(components_ui__WEBPACK_IMPORTED_MODULE_10__["Text"], {
        size: 500,
        marginRight: 10,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 15
        }
      }, "more ", __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 22
        }
      }, "positive"), " activations"), __jsx(components_ui__WEBPACK_IMPORTED_MODULE_10__["Text"], {
        fontSize: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 15
        }
      }, "\u2192"))), __jsx(components_ui__WEBPACK_IMPORTED_MODULE_10__["Surface"], {
        flexFlow: "row",
        position: "relative",
        onMouseDown: function onMouseDown() {},
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }
      }, Object(lodash__WEBPACK_IMPORTED_MODULE_8__["range"])(18).map(function (i) {
        var value = -800 + i * 100;
        var count = 6;
        var size = 60;
        return __jsx(react__WEBPACK_IMPORTED_MODULE_13___default.a.Fragment, {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 17
          }
        }, value === 0 && __jsx(components_ui__WEBPACK_IMPORTED_MODULE_10__["Surface"], {
          marginX: 5,
          width: 1,
          height: count * size + 4 * count,
          background: "rgba(0, 0, 0, 0.2)",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 21
          }
        }), __jsx(components_ui__WEBPACK_IMPORTED_MODULE_10__["Surface"], {
          marginX: 2,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 19
          }
        }, Object(lodash__WEBPACK_IMPORTED_MODULE_8__["range"])(count).map(function (index) {
          var indexWithPage = page * count + index;
          var prefix = "https://storage.googleapis.com/distill-curve-detectors/quilt/".concat(value, "/").concat(indexWithPage);
          return __jsx(components_ui__WEBPACK_IMPORTED_MODULE_10__["Surface"], {
            flexFlow: "row",
            marginY: 2,
            position: "relative",
            width: size,
            height: size,
            overflow: "hidden",
            borderRadius: 3,
            border: "1px solid rgba(0, 0, 0, 0.2)",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 25
            }
          }, __jsx("img", {
            style: {
              position: 'absolute',
              left: 0,
              top: 0,
              opacity: showAttrs ? 0 : 1,
              transition: '300ms all ease-in'
            },
            width: size,
            src: "".concat(prefix, "/img.jpg"),
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 27
            }
          }), __jsx("img", {
            style: {
              position: 'absolute',
              left: 0,
              top: 0,
              opacity: showAttrs ? 1 : 0,
              transition: '300ms all ease-in'
            },
            width: size,
            src: "".concat(prefix, "/attr.jpg"),
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 27
            }
          }));
        }), __jsx(components_ui__WEBPACK_IMPORTED_MODULE_10__["Surface"], {
          borderTop: true,
          marginTop: 4,
          paddingLeft: 3,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 21
          }
        }, __jsx(components_ui__WEBPACK_IMPORTED_MODULE_10__["Text"], {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 23
          }
        }, value === 900 || value === -800 ? "".concat(value, "+") : value))));
      })), __jsx("img", {
        style: {
          transform: 'translateX(3px)',
          marginTop: 5
        },
        width: 1158,
        src: __webpack_require__(/*! ./caption.svg */ "./pages/dataset/quilt/caption.svg"),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 11
        }
      }), __jsx(components_ui__WEBPACK_IMPORTED_MODULE_10__["Surface"], {
        alignSelf: "flex-end",
        flexFlow: "row",
        alignItems: "center",
        marginTop: 30,
        marginRight: 0,
        marginBottom: 10,
        paddingY: 2,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 11
        }
      }, page < 3 && __jsx(components_ui__WEBPACK_IMPORTED_MODULE_10__["Surface"], {
        cursor: "pointer",
        background: "transparent",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 15
        }
      }, function (hovering) {
        return __jsx(components_ui__WEBPACK_IMPORTED_MODULE_10__["Surface"], {
          style: {
            borderBottom: "1px solid rgba(0, 0, 0, ".concat(hovering ? 0.4 : 0.1)
          },
          opacity: hovering ? 1 : 0.7,
          transition: "200ms ease-out all",
          flexFlow: "row",
          alignItems: "center",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 19
          }
        }, __jsx(components_ui__WEBPACK_IMPORTED_MODULE_10__["Text"], {
          fontWeight: 600,
          size: 400,
          onClick: function onClick() {
            _this2.setState({
              page: page + 1
            });
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 21
          }
        }, "Load more examples"));
      }), isAttrs && __jsx(components_colab__WEBPACK_IMPORTED_MODULE_12__["default"], {
        marginLeft: 15,
        href: "https://colab.research.google.com/drive/1lnFJ0MjhPzw3J9u-Xhqvn5hjAF9sZ3aY#scrollTo=yBQX5TrkWjlP",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 15
        }
      }))));
    }
  }]);

  return DatasetQuilt;
}(react__WEBPACK_IMPORTED_MODULE_13___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.9abb7654998cabcdbe30.hot-update.js.map