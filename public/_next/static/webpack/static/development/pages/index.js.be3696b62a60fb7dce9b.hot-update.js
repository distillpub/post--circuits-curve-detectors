webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/tuning/index.js":
/*!*******************************!*\
  !*** ./pages/tuning/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tuning1; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! evergreen-ui */ "./node_modules/evergreen-ui/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var components_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/ui */ "./components/ui.js");
/* harmony import */ var components_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/helpers */ "./components/helpers.js");





var _jsxFileName = "/Users/nick/code/circuits/curve-detector/pages/tuning/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var Tuning1 = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Tuning1, _React$Component);

  var _super = _createSuper(Tuning1);

  function Tuning1() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Tuning1);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Tuning1, [{
    key: "render",
    value: function render() {
      var _this = this;

      var neurons = [379, 406, 385, 343, 342, 388, 340, 330, 349];
      var colors = ["rgb(183,89,81)", "rgb(193,159,91)", "rgb(170,198,94)", "rgb(131,199,100)", "rgb(123,197,157)", "rgb(90,148,194)", "rgb(32,58,188)", "rgb(129,72,190)", "rgb(175,73,143)"];
      var neuronSize = 67;
      var border = 3;

      var Header = function Header(_ref) {
        var children = _ref.children;
        return __jsx(components_ui__WEBPACK_IMPORTED_MODULE_7__["Surface"], {
          borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
          marginBottom: 20,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 7
          }
        }, __jsx(components_ui__WEBPACK_IMPORTED_MODULE_7__["Text"], {
          size: 600,
          marginBottom: 5,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 9
          }
        }, children));
      };

      return __jsx(components_ui__WEBPACK_IMPORTED_MODULE_7__["Surface"], {
        width: 850,
        marginY: 20,
        alignSelf: "center",
        flexFlow: "row",
        justifyContent: "space-between",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 7
        }
      }, __jsx(components_ui__WEBPACK_IMPORTED_MODULE_7__["Surface"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 9
        }
      }, __jsx(Header, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }
      }, "Neuron Responses to Rotated Dataset Examples"), __jsx(components_ui__WEBPACK_IMPORTED_MODULE_7__["Surface"], {
        flexFlow: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }
      }, __jsx(components_ui__WEBPACK_IMPORTED_MODULE_7__["Surface"], {
        marginTop: 10,
        marginRight: 10,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 13
        }
      }, neurons.map(function (neuron, index) {
        return __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Tooltip"], {
          content: "mixed3b:".concat(neuron),
          position: evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Position"].LEFT,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 17
          }
        }, __jsx(components_ui__WEBPACK_IMPORTED_MODULE_7__["Surface"], {
          overflow: "hidden",
          style: {
            border: "".concat(border, "px solid ").concat(colors[index])
          },
          borderRadius: 5,
          width: neuronSize,
          height: neuronSize,
          marginY: 3,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 19
          }
        }, __jsx(components_ui__WEBPACK_IMPORTED_MODULE_7__["ZoomedImg"], {
          size: neuronSize,
          style: {
            borderRadius: 0
          },
          src: Object(components_helpers__WEBPACK_IMPORTED_MODULE_8__["featureVis"])('inceptionv1', 'mixed3b', neuron),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 21
          }
        })));
      })), __jsx("img", {
        width: 400,
        height: 741,
        src: __webpack_require__(/*! ./tuning-transparent.png */ "./pages/tuning/tuning-transparent.png"),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 13
        }
      }))), __jsx(components_ui__WEBPACK_IMPORTED_MODULE_7__["Surface"], {
        width: 330,
        marginTop: 60,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 9
        }
      }, __jsx(components_ui__WEBPACK_IMPORTED_MODULE_7__["Text"], {
        opacity: 0.9,
        fontSize: 14,
        lineHeight: 1.3,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }
      }, "We collect dataset examples that maximally activate neuron. We rotate them by increments of 1 degree from 0 to 360 degrees and record activations."), __jsx(components_ui__WEBPACK_IMPORTED_MODULE_7__["Text"], {
        marginTop: 20,
        opacity: 0.9,
        fontSize: 14,
        lineHeight: 1.3,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }
      }, "The activations are shifted so that the points where each neuron responds are aligned. The curves are then averaged to create a typical response curve."), __jsx("img", {
        width: 300,
        style: {
          alignSelf: 'center',
          marginTop: 20
        },
        src: __webpack_require__(/*! ./tuning-methodology.png */ "./pages/tuning/tuning-methodology.png"),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }
      })));
    }
  }]);

  return Tuning1;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.be3696b62a60fb7dce9b.hot-update.js.map