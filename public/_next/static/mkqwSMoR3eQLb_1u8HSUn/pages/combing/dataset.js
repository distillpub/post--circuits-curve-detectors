(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"1OyB":function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},"3Ttg":function(t,e,n){"use strict";n.d(e,"a",(function(){return m})),n.d(e,"c",(function(){return v})),n.d(e,"b",(function(){return j}));var r=n("wx14"),o=n("Ff2n"),i=n("1OyB"),c=n("vuIU"),a=n("JX7q"),u=n("Ji7U"),f=n("md7G"),s=n("foSv"),l=n("rePB"),p=n("LvDl"),d=n("q1tI"),b=n.n(d),y=b.a.createElement;function O(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?O(Object(n),!0).forEach((function(e){Object(l.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function h(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(s.a)(t);if(e){var o=Object(s.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var m=function(t){Object(u.a)(n,t);var e=h(n);function n(){var t;Object(i.a)(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return t=e.call.apply(e,[this].concat(o)),Object(l.a)(Object(a.a)(t),"state",{isHovering:!1}),t}return Object(c.a)(n,[{key:"render",value:function(){var t=this,e=this.state.isHovering,n=this.props,i=n.children,c=n.id,a=n.onClick,u=n._key,f=Object(o.a)(n,["children","id","onClick","_key"]),s=Object(p.isFunction)(i)?{onMouseEnter:function(e){t.setState({isHovering:!0}),t.props.onMouseEnter&&t.props.onMouseEnter(e)},onMouseLeave:function(e){t.setState({isHovering:!1}),t.props.onMouseLeae&&t.props.onMouseLeave(e)}}:{};f.marginY&&(f.marginTop=f.marginY,f.marginBottom=f.marginY,delete f.marginY),f.paddingY&&(f.paddingTop=f.paddingY,f.paddingBottom=f.paddingY,delete f.paddingY),f.marginX&&(f.marginLeft=f.marginX,f.marginRight=f.marginX,delete f.marginX),f.paddingX&&(f.paddingLeft=f.paddingX,f.paddingRight=f.paddingX,delete f.paddingX);var l={id:c,key:u,onClick:a};return y("div",Object(r.a)({},l,{style:g({display:"flex",flexFlow:"column",boxSizing:"border-box"},f)},s),Object(p.isFunction)(i)?i(e):i)}}]),n}(b.a.Component),v=function(t){var e=t.src,n=t.size,i=t.padding,c=t.style,a=Object(o.a)(t,["src","size","padding","style"]);return i||((e.indexOf("conv2d2")>-1||e.indexOf("conv2d1")>-1||e.indexOf("conv2d0"))&&(i=0),(e.indexOf("mixed3a")>-1||e.indexOf("mixed3b")>-1)&&(i=0),(e.indexOf("mixed4a")>-1||e.indexOf("mixed4b")>-1||e.indexOf("mixed4c")>-1)&&(i=0)),y("div",Object(r.a)({style:Object.assign({},{width:n,height:n,overflow:"hidden",borderRadius:5,position:"relative"},c)},a),y("img",{src:e,width:n+2*i,height:n+2*i,style:{position:"absolute",left:-i,top:-i}}))},j=function(t){var e=t.size,n=t.children,i=Object(o.a)(t,["size","children"]);if(e){i=g({},i,{},{400:{fontSize:14,fontWeight:600},500:{fontSize:16,fontWeight:500},600:{fontSize:20,fontWeight:500}}[e]||{})}return y(m,Object(r.a)({color:"black",display:"inline-block"},i),n)}},Ff2n:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}n.d(e,"a",(function(){return r}))},"H/gs":function(t,e,n){"use strict";n.r(e);var r=n("wx14"),o=n("Ff2n"),i=n("o0o1"),c=n.n(i),a=n("1OyB"),u=n("vuIU"),f=n("JX7q"),s=n("Ji7U"),l=n("md7G"),p=n("foSv"),d=n("rePB"),b=n("q1tI"),y=n.n(b),O=y.a.createElement;function g(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(p.a)(t);if(e){var o=Object(p.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}e.default=function(t){return function(e){Object(s.a)(i,e);var n=g(i);function i(){var t;Object(a.a)(this,i);for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return t=n.call.apply(n,[this].concat(r)),Object(d.a)(Object(f.a)(t),"state",{data:null}),Object(d.a)(Object(f.a)(t),"fetchData",(function(){var e,n,r,o;return c.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:i.next=2;break;case 2:return e=window.location.search,n=new URLSearchParams(e),r=n.get("data_url"),i.t0=c.a,i.next=8,c.a.awrap(fetch(r));case 8:return i.t1=i.sent.json(),i.next=11,i.t0.awrap.call(i.t0,i.t1);case 11:o=i.sent,t.setState({data:o});case 13:case"end":return i.stop()}}),null,null,null,Promise)})),t}return Object(u.a)(i,[{key:"componentWillMount",value:function(){var t=this.props;t.cofab;t.data||this.fetchData()}},{key:"render",value:function(){var e=t,n=this.props,i=(n.data,Object(o.a)(n,["data"]));return this.props.data?O(e,Object(r.a)({},this.props.data,i)):this.state.data?O(e,Object(r.a)({},this.state.data,i)):O("div",null,"loading")}}]),i}(y.a.Component)}},JX7q:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return r}))},Ji7U:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,"a",(function(){return o}))},Qetd:function(t,e,n){"use strict";var r=Object.assign.bind(Object);t.exports=r,t.exports.default=t.exports},YuTi:function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},foSv:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return r}))},i400:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),o=n.n(r),i=n("3Ttg"),c=n("H/gs"),a=o.a.createElement;e.default=Object(c.default)((function(t){var e=t.images;return a(i.a,{flexFlow:"row",alignItems:"center",justifyContent:"center",gridColumn:"screen",marginY:20},a(i.a,{alignItems:"center"},a(i.a,{alignItems:"center",flexFlow:"row"},a(i.a,{flexFlow:"row",flexWrap:"wrap",width:450,borderRadius:5,overflow:"hidden"},e.slice(0,28).map((function(t){return a("img",{style:{margin:0,padding:0},src:t})})))),a(i.b,{fontStyle:"italic",marginTop:8},"Perpindicular lines are helpful across many natural features like"," ",a("b",null,"tires"),", ",a("b",null,"clocks"),", and ",a("b",null,"logos"))))}))},md7G:function(t,e,n){"use strict";function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t){return(o="function"===typeof Symbol&&"symbol"===r(Symbol.iterator)?function(t){return r(t)}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":r(t)})(t)}n.d(e,"a",(function(){return c}));var i=n("JX7q");function c(t,e){return!e||"object"!==o(e)&&"function"!==typeof e?Object(i.a)(t):e}},rePB:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))},vuIU:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return o}))},wx14:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,"a",(function(){return r}))},xUMx:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/combing/dataset",function(){return n("i400")}])},yLpj:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n}},[["xUMx",0,1,2,3]]]);