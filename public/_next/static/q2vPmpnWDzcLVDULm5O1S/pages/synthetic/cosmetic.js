(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{"1OyB":function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},"3Ttg":function(t,e,n){"use strict";n.d(e,"a",(function(){return w})),n.d(e,"c",(function(){return O})),n.d(e,"b",(function(){return h}));var r=n("wx14"),o=n("Ff2n"),i=n("1OyB"),c=n("vuIU"),a=n("JX7q"),u=n("Ji7U"),f=n("md7G"),s=n("foSv"),l=n("rePB"),d=n("LvDl"),p=n("q1tI"),b=n.n(p),g=b.a.createElement;function y(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function A(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?y(Object(n),!0).forEach((function(e){Object(l.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(s.a)(t);if(e){var o=Object(s.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var w=function(t){Object(u.a)(n,t);var e=m(n);function n(){var t;Object(i.a)(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return t=e.call.apply(e,[this].concat(o)),Object(l.a)(Object(a.a)(t),"state",{isHovering:!1}),t}return Object(c.a)(n,[{key:"render",value:function(){var t=this,e=this.state.isHovering,n=this.props,i=n.children,c=n.id,a=n.onClick,u=n._key,f=Object(o.a)(n,["children","id","onClick","_key"]),s=Object(d.isFunction)(i)?{onMouseEnter:function(e){t.setState({isHovering:!0}),t.props.onMouseEnter&&t.props.onMouseEnter(e)},onMouseLeave:function(e){t.setState({isHovering:!1}),t.props.onMouseLeae&&t.props.onMouseLeave(e)}}:{};f.marginY&&(f.marginTop=f.marginY,f.marginBottom=f.marginY,delete f.marginY),f.paddingY&&(f.paddingTop=f.paddingY,f.paddingBottom=f.paddingY,delete f.paddingY),f.marginX&&(f.marginLeft=f.marginX,f.marginRight=f.marginX,delete f.marginX),f.paddingX&&(f.paddingLeft=f.paddingX,f.paddingRight=f.paddingX,delete f.paddingX);var l={id:c,key:u,onClick:a};return g("div",Object(r.a)({},l,{style:A({display:"flex",flexFlow:"column",boxSizing:"border-box"},f)},s),Object(d.isFunction)(i)?i(e):i)}}]),n}(b.a.Component),O=function(t){var e=t.src,n=t.size,i=t.padding,c=t.style,a=Object(o.a)(t,["src","size","padding","style"]);return i||((e.indexOf("conv2d2")>-1||e.indexOf("conv2d1")>-1||e.indexOf("conv2d0"))&&(i=0),(e.indexOf("mixed3a")>-1||e.indexOf("mixed3b")>-1)&&(i=0),(e.indexOf("mixed4a")>-1||e.indexOf("mixed4b")>-1||e.indexOf("mixed4c")>-1)&&(i=0)),g("div",Object(r.a)({style:Object.assign({},{width:n,height:n,overflow:"hidden",borderRadius:5,position:"relative"},c)},a),g("img",{src:e,width:n+2*i,height:n+2*i,style:{position:"absolute",left:-i,top:-i}}))},h=function(t){var e=t.size,n=t.children,i=Object(o.a)(t,["size","children"]);if(e){i=A({},i,{},{400:{fontSize:14,fontWeight:600},500:{fontSize:16,fontWeight:500},600:{fontSize:20,fontWeight:500}}[e]||{})}return g(w,Object(r.a)({color:"black",display:"inline-block"},i),n)}},"3j/u":function(t,e){t.exports="./_next/static/images/color-7b91c7ed24bb25d3a6bca4f1d71144cc.png"},"8lnk":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAAyCAIAAAD9fhrKAAAAA3NCSVQICAjb4U/gAAAAX3pUWHRSYXcgcHJvZmlsZSB0eXBlIEFQUDEAAAiZ40pPzUstykxWKCjKT8vMSeVSAANjEy4TSxNLo0QDAwMLAwgwNDAwNgSSRkC2OVQo0QAFmJibpQGhuVmymSmIzwUAT7oVaBst2IwAAAJmSURBVHic7dTRjew4EENRsuSOYCN5CWz+SXVxPyS1HzaDAu7BwKClstvQAPSff/51fVyP6uN6XB/5cX1Uz1/r5XrkPfCoHvtR1e9Wteyl+tilWlqPveSlKtdSPa5SPXelVGdXXiq76uYd6o7trBNslVWVG2TfRctOWZbqhJRUjpWTFadPUCqpxPv63vZZVJxU38UdWjufrY4TJ+5Uy31zzm21HLmjsyJHJ7T0y3G1FDlWV7UcK+VWtdV2yl1qO3bffMJ79feX11npUi99z+LeVS/1usNrD2vvfpeyH9mh7m6pl7LUPgNdOySlfah7JRV5j0WldlJS7RPdISrJ2bd7SxU577X03joqqVqWa5/ZWbRPdrWsfdiq+D7oPayo2rpvu09J/f6Ez39Abqnz5sSREne0Z+6AOr5BZzc37/XWHj7XJCfnjuW+Id35jXXUSrdaN+9nk/N3vmE/lVa6Eyk6AzkP7ueUdGsPdCdJoj1zwh3IGfh/bimtnK94d98D6HMA+X31nTwfm/ec9m/1Xyf3e8M36vicpdTR9w0uAcAQFBaAMSgsAGNQWADGoLAAjEFhARiDwgIwBoUFYAwKC8AYFBaAMSgsAGNQWADGoLAAjEFhARiDwgIwBoUFYAwKC8AYFBaAMSgsAGNQWADGoLAAjEFhARiDwgIwBoUFYAwKC8AYFBaAMSgsAGNQWADGoLAAjEFhARiDwgIwBoUFYAwKC8AYFBaAMSgsAGNQWADGoLAAjEFhARiDwgIwBoUFYAwKC8AYFBaAMSgsAGNQWADGoLAAjEFhARiDwgIwBoUFYAwKC8AY/wGpbuP1OXacNwAAAABJRU5ErkJggg=="},Eelo:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/synthetic/cosmetic",function(){return n("wlze")}])},Ff2n:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}n.d(e,"a",(function(){return r}))},JX7q:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return r}))},Ji7U:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,"a",(function(){return o}))},Qetd:function(t,e,n){"use strict";var r=Object.assign.bind(Object);t.exports=r,t.exports.default=t.exports},"W9d+":function(t,e){t.exports="./_next/static/images/fill-add8286fe69f38527c20a705deab1161.png"},YuTi:function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},foSv:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return r}))},ilYS:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),o=n.n(r),i=n("3Ttg"),c=o.a.createElement;e.default=function(){return c(i.a,{flexFlow:"row",marginLeft:10},c(i.b,{marginRight:5,fontWeight:600},"0\u03c3"),c(i.a,{alignItems:"center"},c("img",{style:{borderRadius:5,marginTop:1},width:140,src:n("8lnk")}),c(i.b,{fontSize:14},"Standard Deviations")),c(i.b,{marginLeft:5,fontWeight:600},"25\u03c3"))}},md7G:function(t,e,n){"use strict";function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t){return(o="function"===typeof Symbol&&"symbol"===r(Symbol.iterator)?function(t){return r(t)}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":r(t)})(t)}n.d(e,"a",(function(){return c}));var i=n("JX7q");function c(t,e){return!e||"object"!==o(e)&&"function"!==typeof e?Object(i.a)(t):e}},rePB:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))},vuIU:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return o}))},wlze:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),o=n.n(r),i=n("3Ttg"),c=n("ilYS"),a=o.a.createElement;e.default=function(){return a(i.a,{gridColumn:"screen",alignItems:"center",marginY:20},a(i.a,{flexFlow:"row",transform:"translateX(85px)"},a(i.a,null,a(i.b,{marginLeft:55,size:550},"Curves are invariant to fill.."),a("img",{width:365,src:n("W9d+")})),a(i.a,{marginLeft:0},a(i.b,{marginLeft:55,size:550},"..as well as color"),a("img",{width:365,src:n("3j/u")})),a(i.a,{marginTop:70,marginLeft:3},a(c.default,null))))}},wx14:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,"a",(function(){return r}))},yLpj:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n}},[["Eelo",0,1,2]]]);