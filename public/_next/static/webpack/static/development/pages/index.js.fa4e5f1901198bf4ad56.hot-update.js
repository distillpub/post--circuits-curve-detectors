webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/dataset/humanLabels/index.js":
/*!********************************************!*\
  !*** ./pages/dataset/humanLabels/index.js ***!
  \********************************************/
/*! exports provided: getInitialProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitialProps", function() { return getInitialProps; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var components_figure__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/figure */ "./components/figure.js");
/* harmony import */ var components_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/ui */ "./components/ui.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var pages_cofab__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! pages/cofab */ "./pages/cofab.js");
/* harmony import */ var victory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! victory */ "./node_modules/victory/es/index.js");









var _temp,
    _jsxFileName = "/Users/nick/code/circuits/curve-detector/pages/dataset/humanLabels/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var getInitialProps = function getInitialProps() {
  return {};
};
/* harmony default export */ __webpack_exports__["default"] = (Object(pages_cofab__WEBPACK_IMPORTED_MODULE_12__["default"])((_temp = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HumanLabels, _React$Component);

  var _super = _createSuper(HumanLabels);

  function HumanLabels() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HumanLabels);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "state", {
      activeGroups: []
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "onToggleGroup", function (group) {
      var activeGroups = _this.state.activeGroups;

      if (activeGroups.length > 0 && activeGroups[0] === group) {
        _this.setState({
          activeGroups: []
        });
      } else {
        _this.setState({
          activeGroups: [group]
        });
      }
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(HumanLabels, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      if (this.props.activeGroups) {
        this.setState({
          activeGroups: this.props.activeGroups
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          _this$props$bins = _this$props.bins,
          bins = _this$props$bins === void 0 ? [] : _this$props$bins,
          _this$props$heights = _this$props.heights,
          heights = _this$props$heights === void 0 ? [] : _this$props$heights,
          _this$props$interpola = _this$props.interpolation,
          interpolation = _this$props$interpola === void 0 ? 'natural' : _this$props$interpola,
          _this$props$title = _this$props.title,
          title = _this$props$title === void 0 ? '' : _this$props$title,
          _this$props$stackProp = _this$props.stackProps,
          stackProps = _this$props$stackProp === void 0 ? {} : _this$props$stackProp,
          children = _this$props.children,
          _this$props$yAxisProp = _this$props.yAxisProps,
          yAxisProps = _this$props$yAxisProp === void 0 ? {
        label: ''
      } : _this$props$yAxisProp,
          _this$props$probChart = _this$props.probChart,
          probChart = _this$props$probChart === void 0 ? false : _this$props$probChart;

      if (false) {}

      var width = 1200;
      var activeGroups = this.state.activeGroups;

      var isGroupActive = function isGroupActive(group) {
        return Object(lodash__WEBPACK_IMPORTED_MODULE_11__["includes"])(activeGroups, group);
      };

      var hasActiveGroup = activeGroups.length > 0;

      if (probChart) {
        yAxisProps.tickFormat = function (t) {
          return "".concat(t.toExponential());
        };

        yAxisProps.dy = -10;
        stackProps.domain = {
          y: [0, 0.0000022]
        };
      }

      var colors = ['#00bcd4', '#b2ebf2', '#FFF6D7', '#ff5722'];
      var colorSize = 20;

      var Label = function Label(_ref) {
        var index = _ref.index,
            name = _ref.name,
            count = _ref.count;
        return __jsx(components_ui__WEBPACK_IMPORTED_MODULE_10__["Surface"], {
          cursor: "pointer",
          onClick: function onClick() {
            _this2.onToggleGroup(index);
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 9
          }
        }, function (hovering) {
          var showActive = hovering || isGroupActive(index);
          return __jsx(components_ui__WEBPACK_IMPORTED_MODULE_10__["Surface"], {
            flexFlow: "row",
            alignItems: "center",
            borderRadius: 8,
            transition: "100ms ease-out all",
            background: showActive && 'rgba(0,0,0,0.02)',
            border: "1px solid rgba(0, 0, 0, ".concat(showActive ? 0.2 : 0, ")"),
            padding: 5,
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 15
            }
          }, __jsx(components_ui__WEBPACK_IMPORTED_MODULE_10__["Surface"], {
            marginRight: 12,
            width: colorSize,
            height: colorSize,
            borderRadius: 2,
            background: colors[index],
            opacity: hasActiveGroup ? isGroupActive(index) ? 1 : 0.4 : 1,
            transition: "300ms ease-out all",
            border: "1px solid rgba(0, 0, 0, 0.6)",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 17
            }
          }), __jsx(components_ui__WEBPACK_IMPORTED_MODULE_10__["Surface"], {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 17
            }
          }, __jsx(components_ui__WEBPACK_IMPORTED_MODULE_10__["Text"], {
            fontWeight: 600,
            lineHeight: 1.2,
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 19
            }
          }, name), __jsx(components_ui__WEBPACK_IMPORTED_MODULE_10__["Text"], {
            fontWeight: 400,
            lineHeight: 1.2,
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 19
            }
          }, count, " images")));
        });
      };

      return __jsx(components_figure__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 9
        }
      }, __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 11
        }
      }, __jsx(components_ui__WEBPACK_IMPORTED_MODULE_10__["Surface"], {
        width: width,
        alignSelf: "center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 13
        }
      }, __jsx(components_ui__WEBPACK_IMPORTED_MODULE_10__["Surface"], {
        flexFlow: "row",
        justifyContent: "space-between",
        alignItems: "center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 15
        }
      }, __jsx(components_ui__WEBPACK_IMPORTED_MODULE_10__["Text"], {
        size: 600,
        marginLeft: 60,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 17
        }
      }, title), __jsx(components_ui__WEBPACK_IMPORTED_MODULE_10__["Surface"], {
        flexFlow: "row",
        marginRight: 50,
        justifyContent: "space-between",
        width: 700,
        alignSelf: "flex-end",
        zIndex: 100,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 17
        }
      }, __jsx(Label, {
        index: 3,
        name: "Opposing Curve",
        count: 102,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 19
        }
      }), __jsx(Label, {
        index: 2,
        name: "Unrelated",
        count: 379,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 19
        }
      }), __jsx(Label, {
        index: 1,
        name: "Imperfect Curve",
        count: 170,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 19
        }
      }), __jsx(Label, {
        index: 0,
        name: "Curve",
        count: 206,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 19
        }
      })))), __jsx(components_ui__WEBPACK_IMPORTED_MODULE_10__["Surface"], {
        width: width,
        alignSelf: "center",
        transform: "translateY(-20px)",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 13
        }
      }, __jsx(victory__WEBPACK_IMPORTED_MODULE_13__["VictoryChart"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        width: width,
        height: 400
      }, stackProps, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 15
        }
      }), __jsx(victory__WEBPACK_IMPORTED_MODULE_13__["VictoryStack"], {
        colorScale: colors,
        interpolation: interpolation,
        animate: {
          duration: 800
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 17
        }
      }, heights.map(function (label, index) {
        var isZero = hasActiveGroup && !isGroupActive(index);
        var victoryData = bins.map(function (binValue, bin) {
          var value = Math.abs(binValue) > 800 ? null : {
            x: binValue,
            y: isZero ? 0 : label[bin]
          }; // we multiply times a constant then divide to avoid numerical issues

          if (value && probChart) {
            value.y = value.y / 1000 / 1600;
          }

          return value;
        }).filter(function (i) {
          return i !== null;
        });
        var addInterpolation = interpolation ? {
          interpolation: interpolation
        } : {};
        return __jsx(victory__WEBPACK_IMPORTED_MODULE_13__["VictoryGroup"], {
          data: victoryData,
          key: index,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 182,
            columnNumber: 23
          }
        }, __jsx(victory__WEBPACK_IMPORTED_MODULE_13__["VictoryArea"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, addInterpolation, {
          events: [{
            target: 'data',
            eventHandlers: {
              onClick: function onClick() {
                _this2.onToggleGroup(index);
              }
            }
          }],
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 25
          }
        })));
      })), __jsx(victory__WEBPACK_IMPORTED_MODULE_13__["VictoryAxis"], {
        crossAxis: false,
        tickCount: 17,
        label: "Activations",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 17
        }
      }), __jsx(victory__WEBPACK_IMPORTED_MODULE_13__["VictoryAxis"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        axisLabelComponent: __jsx(victory__WEBPACK_IMPORTED_MODULE_13__["VictoryLabel"], {
          dy: -13,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 207,
            columnNumber: 39
          }
        }),
        tickCount: 5,
        offsetX: 50,
        dependentAxis: true
      }, yAxisProps, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206,
          columnNumber: 17
        }
      })), __jsx(victory__WEBPACK_IMPORTED_MODULE_13__["VictoryLine"], {
        style: {
          data: {
            strokeWidth: 1,
            stroke: 'rgba(0, 0, 0, 0.6)'
          }
        },
        data: [{
          x: 0,
          y: 1
        }, {
          x: 0,
          y: 0
        }],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 17
        }
      }))), __jsx("figcaption", {
        style: {
          width: 703,
          marginTop: -20,
          alignSelf: 'center'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 13
        }
      }, children)));
    }
  }]);

  return HumanLabels;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component), _temp)));

/***/ })

})
//# sourceMappingURL=index.js.fa4e5f1901198bf4ad56.hot-update.js.map