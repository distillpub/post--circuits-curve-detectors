(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"+ugm":function(t,n,i){"use strict";var e=i("6txh"),r=i("2K37"),o=i("SDD1"),u=i("/aQN");n.a=function(){var t=u.a,n=u.b,i=Object(r.a)(!0),s=null,a=o.a,c=null;function h(r){var o,u,h,l=r.length,_=!1;for(null==s&&(c=a(h=Object(e.a)())),o=0;o<=l;++o)!(o<l&&i(u=r[o],o,r))===_&&((_=!_)?c.lineStart():c.lineEnd()),_&&c.point(+t(u,o,r),+n(u,o,r));if(h)return c=null,h+""||null}return h.x=function(n){return arguments.length?(t="function"===typeof n?n:Object(r.a)(+n),h):t},h.y=function(t){return arguments.length?(n="function"===typeof t?t:Object(r.a)(+t),h):n},h.defined=function(t){return arguments.length?(i="function"===typeof t?t:Object(r.a)(!!t),h):i},h.curve=function(t){return arguments.length?(a=t,null!=s&&(c=a(s)),h):a},h.context=function(t){return arguments.length?(null==t?s=c=null:c=a(s=t),h):s},h}},"/aQN":function(t,n,i){"use strict";function e(t){return t[0]}function r(t){return t[1]}i.d(n,"a",(function(){return e})),i.d(n,"b",(function(){return r}))},"2K37":function(t,n,i){"use strict";n.a=function(t){return function(){return t}}},"62Xq":function(t,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/curveFamilies/radialLayer",function(){return i("6g3k")}])},"6g3k":function(t,n,i){"use strict";i.r(n);var e=i("q1tI"),r=i.n(e),o=i("uYk3"),u=i("H/gs"),s=i("Jm8C"),a=i("3Ttg"),c=r.a.createElement;n.default=Object(u.default)((function(t){var n=t.neurons,i=t.activations,e=t.layer;return c(o.a,null,c(a.a,{alignItems:"center",gridColumn:"screen",marginTop:10,marginBottom:40,flexFlow:"row",justifyContent:"center"},c("div",{style:{position:"relative"}},c(s.default,{size:300,neuronSize:60,responsesByNeuron:i,neurons:n,layer:e,neuronPadding:10,fillOpacity:.4,orientationType:"max"})),c(a.a,{flexFlow:"row",width:900,flexWrap:"wrap",paddingX:80},({mixed3a:[137,81,104,92,145,95,163,71,147,189]}[e]||n).map((function(t){return c(a.a,{marginX:18},c(s.default,{responsesByNeuron:i,size:110,neurons:[t],layer:e,neuronSize:30,neuronPadding:10,fillOpacity:.4,orientationType:"max"}))})))))}))},"6txh":function(t,n,i){"use strict";var e=Math.PI,r=2*e,o=r-1e-6;function u(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function s(){return new u}u.prototype=s.prototype={constructor:u,moveTo:function(t,n){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,n){this._+="L"+(this._x1=+t)+","+(this._y1=+n)},quadraticCurveTo:function(t,n,i,e){this._+="Q"+ +t+","+ +n+","+(this._x1=+i)+","+(this._y1=+e)},bezierCurveTo:function(t,n,i,e,r,o){this._+="C"+ +t+","+ +n+","+ +i+","+ +e+","+(this._x1=+r)+","+(this._y1=+o)},arcTo:function(t,n,i,r,o){t=+t,n=+n,i=+i,r=+r,o=+o;var u=this._x1,s=this._y1,a=i-t,c=r-n,h=u-t,l=s-n,_=h*h+l*l;if(o<0)throw new Error("negative radius: "+o);if(null===this._x1)this._+="M"+(this._x1=t)+","+(this._y1=n);else if(_>1e-6)if(Math.abs(l*a-c*h)>1e-6&&o){var f=i-u,d=r-s,x=a*a+c*c,p=f*f+d*d,y=Math.sqrt(x),v=Math.sqrt(_),g=o*Math.tan((e-Math.acos((x+_-p)/(2*y*v)))/2),b=g/v,w=g/y;Math.abs(b-1)>1e-6&&(this._+="L"+(t+b*h)+","+(n+b*l)),this._+="A"+o+","+o+",0,0,"+ +(l*f>h*d)+","+(this._x1=t+w*a)+","+(this._y1=n+w*c)}else this._+="L"+(this._x1=t)+","+(this._y1=n);else;},arc:function(t,n,i,u,s,a){t=+t,n=+n,a=!!a;var c=(i=+i)*Math.cos(u),h=i*Math.sin(u),l=t+c,_=n+h,f=1^a,d=a?u-s:s-u;if(i<0)throw new Error("negative radius: "+i);null===this._x1?this._+="M"+l+","+_:(Math.abs(this._x1-l)>1e-6||Math.abs(this._y1-_)>1e-6)&&(this._+="L"+l+","+_),i&&(d<0&&(d=d%r+r),d>o?this._+="A"+i+","+i+",0,1,"+f+","+(t-c)+","+(n-h)+"A"+i+","+i+",0,1,"+f+","+(this._x1=l)+","+(this._y1=_):d>1e-6&&(this._+="A"+i+","+i+",0,"+ +(d>=e)+","+f+","+(this._x1=t+i*Math.cos(s))+","+(this._y1=n+i*Math.sin(s))))},rect:function(t,n,i,e){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)+"h"+ +i+"v"+ +e+"h"+-i+"Z"},toString:function(){return this._}},n.a=s},JnD7:function(t,n,i){"use strict";i.d(n,"a",(function(){return e})),i.d(n,"b",(function(){return o}));var e=o(i("SDD1").a);function r(t){this._curve=t}function o(t){function n(n){return new r(t(n))}return n._curve=t,n}r.prototype={areaStart:function(){this._curve.areaStart()},areaEnd:function(){this._curve.areaEnd()},lineStart:function(){this._curve.lineStart()},lineEnd:function(){this._curve.lineEnd()},point:function(t,n){this._curve.point(n*Math.sin(t),n*-Math.cos(t))}}},SDD1:function(t,n,i){"use strict";function e(t){this._context=t}e.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:this._context.lineTo(t,n)}}},n.a=function(t){return new e(t)}},TI0E:function(t,n,i){"use strict";i.d(n,"b",(function(){return o}));var e=i("JnD7"),r=i("+ugm");function o(t){var n=t.curve;return t.angle=t.x,delete t.x,t.radius=t.y,delete t.y,t.curve=function(t){return arguments.length?n(Object(e.b)(t)):n()._curve},t}n.a=function(){return o(Object(r.a)().curve(e.a))}},qE0H:function(t,n,i){"use strict";function e(t){this._context=t}function r(t){var n,i,e=t.length-1,r=new Array(e),o=new Array(e),u=new Array(e);for(r[0]=0,o[0]=2,u[0]=t[0]+2*t[1],n=1;n<e-1;++n)r[n]=1,o[n]=4,u[n]=4*t[n]+2*t[n+1];for(r[e-1]=2,o[e-1]=7,u[e-1]=8*t[e-1]+t[e],n=1;n<e;++n)i=r[n]/o[n-1],o[n]-=i,u[n]-=i*u[n-1];for(r[e-1]=u[e-1]/o[e-1],n=e-2;n>=0;--n)r[n]=(u[n]-r[n+1])/o[n];for(o[e-1]=(t[e]+r[e-1])/2,n=0;n<e-1;++n)o[n]=2*t[n+1]-r[n+1];return[r,o]}e.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var t=this._x,n=this._y,i=t.length;if(i)if(this._line?this._context.lineTo(t[0],n[0]):this._context.moveTo(t[0],n[0]),2===i)this._context.lineTo(t[1],n[1]);else for(var e=r(t),o=r(n),u=0,s=1;s<i;++u,++s)this._context.bezierCurveTo(e[0][u],o[0][u],e[1][u],o[1][u],t[s],n[s]);(this._line||0!==this._line&&1===i)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(t,n){this._x.push(+t),this._y.push(+n)}},n.a=function(t){return new e(t)}},uYk3:function(t,n,i){"use strict";var e=i("wx14"),r=i("Ff2n"),o=i("q1tI"),u=i.n(o),s=i("3Ttg"),a=u.a.createElement;n.a=function(t){var n=t.children,i=t.background,o=void 0===i?"rgb(252, 252, 252)":i,u=(t.fullWidth,t.margin,t.banner),c=void 0!==u&&u,h=Object(r.a)(t,["children","background","fullWidth","margin","banner"]);return a(s.a,Object(e.a)({gridColumn:"screen",paddingTop:20,background:o,marginTop:40,marginBottom:c?0:40,paddingBottom:c?0:20,borderTop:"1px solid rgba(0, 0, 0, 0.1)",borderBottom:!c&&"1px solid rgba(0, 0, 0, 0.1)"},h),n)}}},[["62Xq",0,1,2,3,4]]]);