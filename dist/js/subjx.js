window.Subjx=function(r){var n={};function o(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return r[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}return o.m=r,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=1)}([function(t,e,r){},function(t,e,r){"use strict";r.r(e);r(0);var L=requestAnimationFrame||mozRequestAnimationFrame||webkitRequestAnimationFrame||msRequestAnimationFrame||function(t){return setTimeout(t,1e3/60)},n=cancelAnimationFrame||mozCancelAnimationFrame||function(t){clearTimeout(t)},o=(Array.prototype.forEach,Array.prototype.slice),a=Array.prototype.map,i=console.warn;function h(t){return null!=t}function S(t){return null==t}function s(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var c=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.observers={}}return function(t,e,r){e&&s(t.prototype,e),r&&s(t,r)}(t,[{key:"subscribe",value:function(t,e){var r=this.observers;S(r[t])&&Object.defineProperty(r,t,{value:[]}),r[t].push(e)}},{key:"unsubscribe",value:function(e){this.observers=this.observers.filter(function(t){return t!==e})}},{key:"notify",value:function(e,r,n){S(this.observers[e])||this.observers[e].forEach(function(t){if(r!==t)switch(e){case"onmove":t.onMove(n);break;case"onrotate":t.onRotate(n);break;case"onresize":t.onResize(n);break;case"onapply":t.onApply(n);break;case"onrefreshstate":t.onRefreshState(n)}})}}]),t}();function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var f=function(){function a(t){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),!t)return this;if("string"==typeof t){var e=document.querySelectorAll(t);this.length=e.length;for(var r=0;r<this.length;r++)this[r]=e[r]}else if(1===t.nodeType||t===document)this[0]=t,this.length=1;else if(t instanceof Subjx||"object"===u(t)){this.length=t.length;for(var n=0;n<this.length;n++)this[n]=t[n]}else if(Array.isArray(t))for(var o=this.length=0;o<this.length;o++)1===t.nodeType&&(this[o]=t[o],this.length++);return this}return function(t,e,r){e&&l(t.prototype,e),r&&l(t,r)}(a,[{key:"css",value:function(t){return function(r){var t={setStyle:function(t){return function(t,e){var r=t.length;for(;r--;)for(var n in e)t[r].style[n]=e[n];return t.style}(this,t)},getStyle:function(){return function(t){var e=t.length;for(;e--;)return t[e].currentStyle?t[e].currentStyle[r]:document.defaultView&&document.defaultView.getComputedStyle?document.defaultView.getComputedStyle(t[e],"")[r]:t[e].style[r]}(this)}};{if("string"==typeof r)return t.getStyle.apply(this,o.call(arguments,1));if("object"===u(r)||!r)return t.setStyle.apply(this,arguments);i("Method ".concat(r," does not exist"))}return!1}.call(this,t)}},{key:"find",value:function(t){return function(t){var e=this.length;for(;e--;)return M(this[e].querySelectorAll(t))}.call(this,t)}},{key:"each",value:function(t){return function(t){for(var e=o.call(this,0),r=e.length-1;0<=r;--r)n=r,t.call(e[n]);var n;return this}.call(this,t)}},{key:"on",value:function(){return function(){var t=this.length;for(;t--;)this[t].events||(this[t].events={},this[t].events[arguments[0]]=[]),2===arguments.length?document.addEventListener?this[t].addEventListener(arguments[0],arguments[1],!1):document.attachEvent?this[t].attachEvent("on".concat(arguments[0]),arguments[1]):this[t]["on".concat(arguments[0])]=arguments[1]:3===arguments.length&&"string"==typeof arguments[1]&&p(this[t],arguments[0],arguments[1],arguments[2],!0);return this}.apply(this,arguments)}},{key:"off",value:function(){return function(){var t=this.length;for(;t--;)this[t].events||(this[t].events={},this[t].events[arguments[0]]=[]),2===arguments.length?document.removeEventListener?this[t].removeEventListener(arguments[0],arguments[1],!1):document.detachEvent?this[t].detachEvent("on".concat(arguments[0]),arguments[1]):this[t]["on".concat(arguments[0])]=null:3===arguments.length&&"string"==typeof arguments[1]&&p(this[t],arguments[0],arguments[1],arguments[2],!1);return this}.apply(this,arguments)}},{key:"is",value:function(t){return function(t){var e=M(t),r=this.length;for(;r--;)if(this[r]===e[r])return!0;return!1}.call(this,t)}}]),a}();function p(t,e,r,n,o){function a(t){for(var e=t.target;e&&e!==this;)e.matches(r)&&n.call(e,t),e=e.parentNode}!0===o?document.addEventListener?t.addEventListener(e,a,!1):document.attachEvent?t.attachEvent("on".concat(e),a):t["on".concat(e)]=a:document.removeEventListener?t.removeEventListener(e,a,!1):document.detachEvent?t.detachEvent("on".concat(e),a):t["on".concat(e)]=null}function M(t){return new f(t)}function j(t){return t.getBoundingClientRect()}function d(t){return t.css("-webkit-transform")||t.css("-moz-transform")||t.css("-ms-transform")||t.css("-o-transform")||t.css("transform")||"none"}function N(t){var e={};for(var r in t=t.match(/(\w+\((\-?\d+\.?\d*e?\-?\d*(?:,|\s)?)+\))+/g)){var n=t[r].match(/[\w\.\-]+/g);e[n.shift()]=n.map(function(t){return Number(t)})}return e}function O(t){var e=d(t).match(/-?\d+\.?\d+|-?\d+/g);return e?e.map(function(t){return parseFloat(t)}):[1,0,0,1,0,0]}function b(e,t){if(t){if(e.classList){if(!(-1<t.indexOf(" ")))return e.classList.add(t);t.split(/\s+/).forEach(function(t){return e.classList.add(t)})}return e}}var y=/px|em|%|ex|ch|rem|vh|vw|vmin|vmax|mm|cm|in|pt|pc|deg/,g=Math.PI/180,ht=180/Math.PI;function Gt(t){var e=t.x,r=t.y,n=t.centerX,o=t.centerY,a=t.angle,i=t.newCenterX,s=t.newCenterY,c=z(n,o,e,r,a,!1,!1),u=z(i,s,e,r,a,!1,!1),l=e-(c.left-u.left),f=r-(c.top-u.top);return{resX:v(l),resY:v(f)}}function X(t,e){if(0===e)return t;var r=Y(t,e);return r-t<e?r:void 0}function Y(t,e){return 0===e?t:e*Math.round(t/e)}function T(t,e,r,n,o,a,i){var s=t+parseFloat(r)/2,c=e+parseFloat(n)/2,u=t-s,l=e-c,f=Math.atan2(l,u)+o,h=Math.sqrt(Math.pow(parseFloat(r)/2,2)+Math.pow(parseFloat(n)/2,2)),p=Math.cos(f),d=Math.sin(f),b=c+h*(d=!0===i?-d:d);return{left:v(s+h*(p=!0===a?-p:p)),top:v(b)}}function z(t,e,r,n,o,a,i){var s=Math.cos(o),c=Math.sin(o),u=(s=!0===a?-s:s)*(n-e)-(c=!0===i?-c:c)*(r-t)+e;return{left:v(s*(r-t)+c*(n-e)+t),top:v(u)}}function P(t,e){return/px/.test(t)?t:/%/.test(t)?"".concat(parseFloat(t)*parseFloat(e)/100,"px"):void 0}function k(t,e,r){return/px/.test(r)?t:/%/.test(r)?"".concat(100*parseFloat(t)/parseFloat(e),"%"):void 0}function C(t){return t.match(y)[0]}function v(t){return Number(t.toFixed(6))}function m(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var w=function(){function r(t,e){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),this.constructor===r)throw new TypeError("Cannot construct Subject instances directly");this.el=t,this.storage=null,this.Ob=e,this._onMouseDown=this._onMouseDown.bind(this),this._onTouchStart=this._onTouchStart.bind(this),this._onMouseMove=this._onMouseMove.bind(this),this._onTouchMove=this._onTouchMove.bind(this),this._onMouseUp=this._onMouseUp.bind(this),this._onTouchEnd=this._onTouchEnd.bind(this)}return function(t,e,r){e&&m(t.prototype,e),r&&m(t,r)}(r,[{key:"enable",value:function(t){S(this.storage)?(this._load(t),this._init(this.el)):warn("Already enabled")}},{key:"disable",value:function(){var t=this.storage,e=this.el;S(t)||(function(e,t){if(t){if(e.classList){if(!(-1<t.indexOf(" ")))return e.classList.remove(t);t.split(/\s+/).forEach(function(t){return e.classList.remove(t)})}}}(e,"dg-drag"),this._destroy(),delete this.storage)}},{key:"_load",value:function(t){(function(e){b(this.el,"dg-drag");var t={x:10,y:10,angle:10*g},r={move:!1,resize:!1,rotate:!1};if(h(e)){if(h(e.snap)){var n=e.snap,o=n.x,a=n.y,i=n.angle;t.x=S(o)?10:o,t.y=S(a)?10:a,t.angle=S(i)?10*g:i*g}if(h(e.each)){var s=e.each,c=s.move,u=s.resize,l=s.rotate;r.move=c||!1,r.resize=u||!1,r.rotate=l||!1}}var f=this.Ob;(r.move||r.resize||r.rotate)&&(f.subscribe("onrefreshstate",this),f.subscribe("onapply",this));r.move&&f.subscribe("onmove",this);r.resize&&f.subscribe("onresize",this);r.rotate&&f.subscribe("onrotate",this);this.storage={drop:e&&function(t){return"function"==typeof t}(e.drop)?function(t){e.drop(t,this.el)}:function(){},snap:t,each:r}}).call(this,t)}},{key:"_draw",value:function(){var C=this;!function t(){var e=C.storage;if(e.frame=L(t),e.doDraw){e.doDraw=!1;var r=e.handle,n=e.handles,o=e.cx,a=e.cy,i=e.ch,s=e.cw,c=e.refang,u=e.pressang,l=e.pageX,f=e.pageY,h=e.center,p=(e.snap,e.parentScale),d=e.doDrag,b=e.doResize,y=e.doRotate,g=p[0],v=p[1],m=e.each,w=m.move,x=(m.resize,m.rotate);if(b){var _,k,A,E,O,M=null,j=null;if(r.is(n.br)||r.is(n.mr))console.log("++++++++++++++++++++++++",l,f,'"""""',o,a),f=(O=z(o,a,l,f,c,!1,!1)).top,l=O.left,console.log("__________________________",l,f),E=(f-a)/v,A=(l-o)/g,console.log("!1112121212121!!!!!!!",A,E),r.is(n.br)&&(j=E+i),M=A+s,k=_=!1;else if(r.is(n.tl)||r.is(n.ml))E=-((f=(O=z(o,a,l,f,c,!1,!1)).top)-a)/v,M=(A=-((l=O.left)-o)/g)+s,r.is(n.tl)&&(j=E+i),k=_=!0;else if(r.is(n.tr)||r.is(n.tc)){var X=r.is(n.tr),Y=r.is(n.tc);E=-((f=(O=z(o,a,l,f,c,X,!1)).top)-a)/v,A=-((l=O.left)-o)/g,X&&(E=-E),j=E+i,X&&(M=A+s),_=Y,k=!0}else if(r.is(n.bl)||r.is(n.bc)){var S=r.is(n.bl);f=(O=z(o,a,l,f,c,!1,S)).top,A=-((l=O.left)-o)/g,j=(E=(f-a)/v)+i,S&&(M=A+s),_=S,k=!1,console.log("bl",_,k)}C._resize(M,j,_,k,A,E)}if(d){var N=(f-a)/v,T=(l-o)/g;C._drag(N,T),w&&C.Ob.notify("onmove",C,{diffTop:N,diffLeft:T})}if(y){var P=Math.atan2(f-h.y,l-h.x)-u;C._rotate(P),x&&C.Ob.notify("onrotate",C,{radians:P})}}}()}},{key:"_start",value:function(t){t.stopImmediatePropagation&&t.stopImmediatePropagation();var e=this.storage,r=this._compute(t);e.pageX=t.pageX,e.pageY=t.pageY,e.cx=t.pageX,e.cy=t.pageY,e.ctrlKey=t.ctrlKey,Object.keys(r).forEach(function(t){e[t]=r[t]});var n=r.onRightEdge,o=r.onBottomEdge,a=r.onTopEdge,i=r.onLeftEdge,s=r.handle,c=r.factor,u=r.revX,l=r.revY,f=n||o||a||i,h=s.is(e.handles.rotator);e.doResize=f,e.doDrag=!h&&!f,e.doRotate=h,this.Ob&&this.Ob.notify("onrefreshstate",this,{factor:c,revX:u,revY:l,onTopEdge:a,onLeftEdge:i,onRightEdge:n,onBottomEdge:o}),this._draw()}},{key:"_moving",value:function(t){t.preventDefault&&t.preventDefault();var e=this.storage;e.pageX=t.pageX,e.pageY=t.pageY,e.doDraw=!0}},{key:"_end",value:function(t){t.stopImmediatePropagation&&t.stopImmediatePropagation();var e=this.storage,r=e.doResize?"resize":e.doDrag?"drag":"rotate";e.doResize=!1,e.doDrag=!1,e.doRotate=!1,e.doDraw=!1,this._apply(r),this.Ob&&this.Ob.notify("onapply",this,r),n(e.frame),e.drop.call(this,t)}},{key:"_onMouseDown",value:function(t){this._start(t),M(document).on("mousemove",this._onMouseMove).on("mouseup",this._onMouseUp)}},{key:"_onTouchStart",value:function(t){this._start(t.touches[0]),M(document).on("touchmove",this._onTouchMove).on("touchend",this._onTouchEnd)}},{key:"_onMouseMove",value:function(t){this._moving(t,this.el)}},{key:"_onTouchMove",value:function(t){this._moving(t.touches[0],this.el)}},{key:"_onMouseUp",value:function(t){this._end(t,this.el),M(document).off("mousemove",this._onMouseMove).off("mouseup",this._onMouseUp)}},{key:"_onTouchEnd",value:function(t){0===t.touches.length&&this._end(t.changedTouches[0],this.el),M(document).off("touchmove",this._onTouchMove).off("touchend",this._onTouchEnd)}},{key:"onMove",value:function(t){this._drag(t.diffTop,t.diffLeft)}},{key:"onRotate",value:function(t){this._rotate(t.radians)}},{key:"onResize",value:function(t){var e=null!==t.width?this.storage.cw+t.x:null,r=null!==t.height?this.storage.ch+t.y:null;this._resize(e,r,t.revX,t.revY)}},{key:"onApply",value:function(t){this._apply(t)}}]),r}();function x(t){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function A(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function _(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function E(t,e){return!e||"object"!==x(e)&&"function"!=typeof e?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}function R(t){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function B(t,e){return(B=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var F=function(){function o(t,e,r){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),(n=E(this,R(o).call(this,t,r))).enable(e),n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&B(t,e)}(o,w),function(t,e,r){e&&_(t.prototype,e),r&&_(t,r)}(o,[{key:"_init",value:function(t,e){(function(t){var e=document.createElement("div");b(e,"dg-wrapper"),t.parentNode.insertBefore(e,t);var r=e,n=M(t),o=n.css("width"),a=n.css("height"),i=n.css("top"),s=n.css("left"),c=M(r.parentNode),u={top:i,left:s,width:P(o,c.css("width")),height:P(a,c.css("height")),transform:d(n)},l=document.createElement("div");l.innerHTML='<div class="dg-hdl dg-rotator"></div>        <div class="dg-hdl dg-hdl-t dg-hdl-l dg-hdl-tl"></div>        <div class="dg-hdl dg-hdl-t dg-hdl-r dg-hdl-tr"></div>        <div class="dg-hdl dg-hdl-b dg-hdl-r dg-hdl-br"></div>        <div class="dg-hdl dg-hdl-b dg-hdl-l dg-hdl-bl"></div>        <div class="dg-hdl dg-hdl-t dg-hdl-c dg-hdl-tc"></div>        <div class="dg-hdl dg-hdl-b dg-hdl-c dg-hdl-bc"></div>        <div class="dg-hdl dg-hdl-m dg-hdl-l dg-hdl-ml"></div>        <div class="dg-hdl dg-hdl-m dg-hdl-r dg-hdl-mr"></div>',b(l,"dg-controls"),r.appendChild(l);var f=M(l);f.css(u);var h=M(r);Object.assign(this.storage,{controls:l,handles:{tl:h.find(".dg-hdl-tl"),tr:h.find(".dg-hdl-tr"),br:h.find(".dg-hdl-br"),bl:h.find(".dg-hdl-bl"),tc:h.find(".dg-hdl-tc"),bc:h.find(".dg-hdl-bc"),ml:h.find(".dg-hdl-ml"),mr:h.find(".dg-hdl-mr"),rotator:h.find(".dg-rotator")},parent:c}),f.on("mousedown",this._onMouseDown).on("touchstart",this._onTouchStart)}).call(this,t,e)}},{key:"_destroy",value:function(t){(function(){var t=this.storage.controls;M(t).off("mousedown",this._onMouseDown).off("touchstart",this._onTouchStart),this.el.parentNode.removeChild(t.parentNode)}).call(this,t)}},{key:"_drag",value:function(){I.call.apply(I,[this].concat(Array.prototype.slice.call(arguments)))}},{key:"_rotate",value:function(){U.call.apply(U,[this].concat(Array.prototype.slice.call(arguments)))}},{key:"_resize",value:function(){q.call.apply(q,[this].concat(Array.prototype.slice.call(arguments)))}},{key:"_compute",value:function(){return D.call.apply(D,[this].concat(Array.prototype.slice.call(arguments)))}},{key:"_apply",value:function(){var t=this.storage,e=M(this.el),r=t.cached,n=t.parent,o=t.dimens,a=t.controls;if(r){var i=A(r),s=i[4],c=i[5];i[4]=0,i[5]=0;var u=V(i),l=n.css("width"),f=n.css("height"),h=parseFloat(P(e.css("left"),l)),p=parseFloat(P(e.css("top"),f));u.left=k(h+s+"px",l,o.left),u.top=k(p+c+"px",f,o.top),e.css(u),M(a).css(u),this.storage.cached=null}}},{key:"onRefreshState",value:function(t){var e=this.storage,r=function(t,e,r){var n=this.storage,o=n.controls,a=n.handles,i=n.parent,s=n.snap,c=j(a.tl[0]),u=j(a.tr[0]),l=Math.atan2(u.top-c.top,u.left-c.left)*t,f=parseFloat(P(o.style.width,i.css("width"))),h=parseFloat(P(o.style.height,i.css("height"))),p=O(M(o)),d=T(p[4],p[5],f,h,l,e,r),b=M(this.el),y=this.el.style;return{transform:p,parentTransform:O(i),left:Y(p[4],s.x),top:Y(p[5],s.y),coordX:d.left,coordY:d.top,refang:l,cw:f,ch:h,dimens:{top:C(y.top||b.css("top")),left:C(y.left||b.css("left")),width:C(y.width||b.css("width")),height:C(y.height||b.css("height"))}}}.call(this,t.factor,t.revX,t.revY);Object.keys(r).forEach(function(t){e[t]=r[t]})}}]),o}();function D(t){var e=this.el,r=this.storage,n=r.handles,o=r.controls,a=r.parent,i=r.snap;console.log("ping2543");var s=M(t.target),c=1,u=s.is(n.tl)||s.is(n.ml)||s.is(n.bl)||s.is(n.tc),l=s.is(n.tl)||s.is(n.tr)||s.is(n.tc)||s.is(n.ml);(s.is(n.tr)||s.is(n.bl))&&(c=-1);var f=j(n.tl[0]),h=j(n.tr[0]),p=Math.atan2(h.top-f.top,h.left-f.left)*c,d=parseFloat(P(o.style.width,a.css("width"))),b=parseFloat(P(o.style.height,a.css("height"))),y=O(M(o));console.log(213,y[4],y[5],d,b,p);var g=T(y[4],y[5],d,b,p,u,l);console.log("&&&&&&&&&&&&&&",g);var v=j(o),m=v.left+d/2,w=v.top+b/2,x=Math.atan2(t.pageY-w,t.pageX-m),_=M(e),k=e.style,A={top:C(k.top||_.css("top")),left:C(k.left||_.css("left")),width:C(k.width||_.css("width")),height:C(k.height||_.css("height"))},E=O(a);return{parentScale:[E[0],E[3]],transform:y,cw:d,ch:b,center:{x:m,y:w},left:Y(y[4],i.x),top:Y(y[5],i.y),coordY:g.top,coordX:g.left,factor:c,pressang:x,refang:p,revX:u,revY:l,handle:s,onTopEdge:s.is(n.tl)||s.is(n.tc)||s.is(n.tr),onLeftEdge:s.is(n.tl)||s.is(n.ml)||s.is(n.bl),onRightEdge:s.is(n.tr)||s.is(n.mr)||s.is(n.br),onBottomEdge:s.is(n.br)||s.is(n.bc)||s.is(n.bl),dimens:A}}function q(t,e,r,n){var o=this.el,a=this.storage,i=a.controls,s=a.snap,c=a.left,u=a.top,l=a.coordX,f=a.coordY,h=a.refang,p=a.dimens,d=a.parent,b=a.transform,y=i.style;null!==t&&(y.width="".concat(X(t,s.x),"px")),null!==e&&(y.height="".concat(X(e,s.y),"px"));var g=T(c,u,y.width,y.height,h,r,n),v=u-(g.top-f),m=c-(g.left-l),w=A(b);w[4]=m,w[5]=v;var x=V(w);M(i).css(x),x.width=k(y.width,d.css("width"),p.width),x.height=k(y.height,d.css("height"),p.height);var _={width:x.width,height:x.height};M(o).css(x),window.parent.postMessage({event:"resize-from-package",size:_},"http://127.0.0.1:3978/#/edit"),a.cached=w}function I(t,e){var r=this.el,n=this.storage,o=n.controls,a=n.transform,i=n.snap,s=A(a);s[4]=X(a[4]+e,i.x),s[5]=X(a[5]+t,i.y);var c=V(s);M(o).css(c),M(r).css(c),n.cached=s}function U(t){var e=this.el,r=this.storage,n=r.controls,o=r.transform,a=r.refang,i=r.snap,s=A(o),c=X(a+t,i.angle);s[0]=v(Math.cos(c)),s[1]=v(Math.sin(c)),s[2]=-v(Math.sin(c)),s[3]=v(Math.cos(c));var u=V(s);M(n).css(u),M(e).css(u),r.cached=s}function V(t){var e="matrix(".concat(t.join(),")");return{transform:e,webkitTranform:e,mozTransform:e,msTransform:e,otransform:e}}function $t(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),n.forEach(function(t){H(e,t,r[t])})}return e}function H(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Jt(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=[],n=!0,o=!1,a=void 0;try{for(var i,s=t[Symbol.iterator]();!(n=(i=s.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(t){o=!0,a=t}finally{try{n||null==s.return||s.return()}finally{if(o)throw a}}return r}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var K=/([achlmqstvz])([^achlmqstvz]*)/gi,Q=/\s*,\s*|\s+/g;function Wt(t){for(var e=K.lastIndex=0,r=[];e=K.exec(t);){var n=e[1],o=n.toUpperCase();r.push({relative:n!==o,key:o,cmd:n,value:e[2].trim().split(Q).map(function(t){if(!isNaN(t))return Number(t)})})}return r}function te(t,e,r,n){return t+e*(Math.abs(t-r)/n)}function ee(t,e,r){return t+e*(t/r)}function re(t){return!0===t?-1:1}function pt(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),n.forEach(function(t){Z(e,t,r[t])})}return e}function Z(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function G(t){return(G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function $(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function J(t,e){return!e||"object"!==G(e)&&"function"!=typeof e?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}function W(t){return(W=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function tt(t,e){return(tt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var et=25,rt=/[+-]?\d+(\.\d+)?/g,nt=/translate\(.*\)(.*)translate\(.*\)|$/,ot=function(){function o(t,e,r){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),(n=J(this,W(o).call(this,t,r))).enable(e),n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&tt(t,e)}(o,w),function(t,e,r){e&&$(t.prototype,e),r&&$(t,r)}(o,[{key:"_init",value:function(t,e){(function(t){var r=ut("g");t.parentNode.appendChild(r);var e=t.getBBox(),n=e.width,o=e.height,a=e.x,i=e.y,s=t.getAttribute("transform")||"translate(0 0)",c=ut("rect");[["width",n],["height",o],["x",a],["y",i],["fill","transparent"],["stroke","#00a8ff"],["stroke-dasharray","3 3"],["transform",s]].forEach(function(t){c.setAttribute(t[0],t[1])});var u=ut("g");u.appendChild(c),r.appendChild(u);var l={tl:[a,i],tr:[a+n,i],br:[a+n,i+o],bl:[a,i+o],tc:[a+n/2,i],bc:[a+n/2,i+o],ml:[a,i+o/2],mr:[a+n,i+o/2],rotator:[a+n/2,i-et]};Object.keys(l).forEach(function(t){var e=l[t];l[t]=function(t,e,r){var n=ut("circle"),o={cx:t,cy:e,r:6,fill:"white",stroke:"#00a8ff",transform:r};return Object.keys(o).map(function(t){n.setAttribute(t,o[t])}),n}(e[0],e[1],s),r.appendChild(ut("g").appendChild(l[t]).parentNode)}),Object.assign(this.storage,{wrapper:r,box:c,handles:l,parent:r.parentNode}),M(r).on("mousedown",this._onMouseDown).on("touchstart",this._onTouchStart)}).call(this,t,e)}},{key:"_destroy",value:function(t){(function(){var t=this.storage.wrapper;M(t).off("mousedown",this._onMouseDown).off("touchstart",this._onTouchStart),this.el.parentNode.removeChild(t)}).call(this,t)}},{key:"_drag",value:function(){st.call.apply(st,[this].concat(Array.prototype.slice.call(arguments)))}},{key:"_rotate",value:function(){ct.call.apply(ct,[this].concat(Array.prototype.slice.call(arguments)))}},{key:"_resize",value:function(){it.call.apply(it,[this].concat(Array.prototype.slice.call(arguments)))}},{key:"_compute",value:function(){return at.call.apply(at,[this].concat(Array.prototype.slice.call(arguments)))}},{key:"_apply",value:function(t){var e=this,r=this.storage,n=r.box,o=r.handles,a=r.refang,i=r.factor,s=r.wrapper,c=r.cached,u=r.transform,l=N(s.getAttribute("transform")||"translate(0 0)").translate,f=n.getBBox(),h=f.x,p=f.y,d=f.width,b=f.height,y=l[0],g=l[1],v=h+y,m=p+g,w=v+d/2,x=m+b/2;if("rotate"!==t&&lt(n,o,{x:v,y:m,width:d,height:b,angle:a*i}),"drag"===t){if(0===y&&0===g)return;s.removeAttribute("transform");var _=[];"g"===this.el.tagName.toLowerCase()?(this.el.childNodes.forEach(function(t){1===t.nodeType&&_.push(t)}),this.el.removeAttribute("transform")):_.push(this.el),_.forEach(function(t){!function(e,t){var r=t.x,n=t.y,o=t.angle,a=t.centerX,i=t.centerY,s=[["transform","rotate(".concat(o," ").concat(a," ").concat(i,")")]];switch(e.tagName.toLowerCase()){case"text":case"rect":var c=Number(e.getAttribute("x"))+r,u=Number(e.getAttribute("y"))+n;s.push(["x",c],["y",u]);break;case"circle":case"ellipse":var l=Number(e.getAttribute("cx"))+r,f=Number(e.getAttribute("cy"))+n;s.push(["cx",l],["cy",f]);break;case"line":var h=Number(e.getAttribute("x1"))+r,p=Number(e.getAttribute("y1"))+n,d=Number(e.getAttribute("x2"))+r,b=Number(e.getAttribute("y2"))+n;s.push(["x1",h],["y1",p],["x2",d],["y2",b]);break;case"polygon":case"polyline":var y=dt(e.getAttribute("points")).map(function(t){return t[0]=Number(t[0])+r,t[1]=Number(t[1])+n,t.join(" ")}).join(" ");s.push(["points",y]);break;case"path":var g=e.getAttribute("d");s.push(["d",function(t){for(var e=t.path,r=t.x,n=t.y,o=Wt(e),a="",i=!0,s=0,c=o.length;s<c;s++){var u=o[s],l=u.value,f=u.key,h=u.relative;switch(f){case"M":if(h&&!i)break;l[0]=l[0]+r,l[1]=l[1]+n;break;case"A":if(h)break;l[5]=l[5]+r,l[6]=l[6]+n;break;case"C":if(h)break;l[0]=l[0]+r,l[1]=l[1]+n,l[2]=l[2]+r,l[3]=l[3]+n,l[4]=l[4]+r,l[5]=l[5]+n;break;case"H":if(h)break;l[0]=l[0]+r;break;case"V":if(h)break;l[0]=l[0]+n;break;case"L":case"T":if(h)break;l[0]=l[0]+r,l[1]=l[1]+n;break;case"Q":case"S":if(h)break;l[0]=l[0]+r,l[1]=l[1]+n,l[2]=l[2]+r,l[3]=l[3]+n;break;case"Z":l[0]=""}a+=u.cmd+u.value.join(",")+" ",i=!1}return a}({path:g,x:r,y:n})])}s.forEach(function(t){e.setAttribute(t[0],t[1])})}(t,{x:y,y:g,angle:a*i*ht,centerX:w,centerY:x})})}if("resize"===t){if(S(c))return;var k=[],A=c.revX,E=c.revY,O=c.scaleX,M=c.scaleY,j=c.diffX,X=c.diffY,Y=!1;"g"===this.el.tagName.toLowerCase()?(this.el.childNodes.forEach(function(t){1===t.nodeType&&k.push(t)}),Y=!0):k.push(this.el),k.forEach(function(t){!function(e,t){var r=t.scaleX,n=t.scaleY,o=t.diffX,a=t.diffY,i=t.revX,s=t.revY,c=t.angle,u=t.centerX,l=t.centerY,f=t.bBox,h=t.store,p=h.onRightEdge,d=h.onLeftEdge,b=h.onTopEdge,y=h.onBottomEdge,g=h.center,v=f.x,m=f.y,w=f.width,x=f.height,_=0,k=0;p&&(_=v);d&&(_=v+w);b&&(k=m+x);y&&(k=m);var A={centerX:g.left,centerY:g.top,newCenterX:u,newCenterY:l,angle:c},E=[["transform","rotate(".concat(c*ht," ").concat(u," ").concat(l,")")]];switch(e.tagName.toLowerCase()){case"text":var O=Number(e.getAttribute("x")),M=Number(e.getAttribute("y")),j=Gt(pt({x:te(O,o,_,w),y:te(M,a,k,x)},A)),X=j.resX,Y=j.resY;E.push(["x",X+(r<0?w:0)],["y",Y+(n<0?x:0)]);break;case"circle":var S=Number(e.getAttribute("r")),N=Number(e.getAttribute("cx")),T=Number(e.getAttribute("cy")),P=S*(Math.abs(r)+Math.abs(n))/2,C=Gt(pt({x:te(N,o,_,w),y:te(T,a,k,x)},A)),L=C.resX,z=C.resY;E.push(["r",P],["cx",L],["cy",z]);break;case"rect":var R=Number(e.getAttribute("width")),B=Number(e.getAttribute("height")),F=Number(e.getAttribute("x")),D=Number(e.getAttribute("y")),q=Gt(pt({x:te(F,o,_,w),y:te(D,a,k,x)},A)),I=q.resX,U=q.resY,V=R*Math.abs(r),H=B*Math.abs(n);E.push(["x",I-(r<0?V:0)],["y",U-(n<0?H:0)],["width",V],["height",H]);break;case"ellipse":var K=Number(e.getAttribute("rx")),Q=Number(e.getAttribute("ry")),Z=Number(e.getAttribute("cx")),G=Number(e.getAttribute("cy")),$=Gt(pt({x:te(Z,o,_,w),y:te(G,a,k,x)},A)),J=$.resX,W=$.resY;E.push(["rx",K*Math.abs(r)],["ry",Q*Math.abs(n)],["cx",J],["cy",W]);break;case"line":var tt=Number(e.getAttribute("x1")),et=Number(e.getAttribute("y1")),rt=Number(e.getAttribute("x2")),nt=Number(e.getAttribute("y2")),ot=Gt(pt({x:te(tt,o,_,w),y:te(et,a,k,x)},A)),at=ot.resX,it=ot.resY,st=Gt(pt({x:te(rt,o,_,w),y:te(nt,a,k,x)},A)),ct=st.resX,ut=st.resY;E.push(["x1",at],["y1",it],["x2",ct],["y2",ut]);break;case"polygon":case"polyline":var lt=dt(e.getAttribute("points")).map(function(t){var e=Gt(pt({x:te(Number(t[0]),o,_,w),y:te(Number(t[1]),a,k,x)},A)),r=e.resX,n=e.resY;return t[0]=r,t[1]=n,t.join(" ")}).join(" ");E.push(["points",lt]);break;case"path":var ft=e.getAttribute("d");E.push(["d",function(t){for(var e=t.bBox,r=t.path,n=t.baseData,o=t.dx,a=t.dy,i=t.revX,s=t.revY,c=t.fixedX,u=t.fixedY,l=Wt(r),f=e.width,h=e.height,p="",d=[],b=!0,y=0,g=l.length;y<g;y++){var v=l[y],m=v.value,w=v.key,x=v.relative;switch(w){case"A":var _=Jt(m,7),k=_[0],A=_[1],E=_[2],O=_[3],M=_[4],j=_[5],X=_[6],Y=re(i),S=re(s),N=[],T=k+o*Y*(k/f),P=A+a*S*(A/h);if(N.push(T,P,E,O,M),x)N.push(ee(j,o*Y,f),ee(X,a*S,h));else{var C=Gt($t({x:te(j,o,c,f),y:te(X,a,u,h)},n)),L=C.resX,z=C.resY;N.push(L,z)}d.push(N);break;case"C":var R=Jt(m,6),B=R[0],F=R[1],D=R[2],q=R[3],I=R[4],U=R[5];if(x){var V=re(i),H=re(s);d.push([ee(B,o*V,f),ee(F,a*H,h),ee(D,o*V,f),ee(q,a*H,h),ee(I,o*V,f),ee(U,a*H,h)])}else{var K=s&&u<F||!s&&F<u?-1:1,Q=i&&c<D||!i&&D<c?-1:1,Z=s&&u<q||!s&&q<u?-1:1,G=Gt($t({x:te(B,o*(i&&c<B||!i&&B<c?-1:1),c,f),y:te(F,a*K,u,h)},n)),$=G.resX,J=G.resY,W=Gt($t({x:te(D,o*Q,c,f),y:te(q,a*Z,u,h)},n)),tt=W.resX,et=W.resY,rt=Gt($t({x:te(I,o,c,f),y:te(U,a,u,h)},n)),nt=rt.resX,ot=rt.resY;d.push([$,J,tt,et,nt,ot])}break;case"H":if(x){var at=re(i);d.push([ee(m[0],o*at,f)])}else{var it=Gt($t({x:te(m[0],o,c,f),y:0},n)).resX;d.push([it])}break;case"V":if(x){var st=re(s);d.push([ee(m[0],a*st,h)])}else{var ct=Gt($t({x:0,y:te(m[0],a,u,h)},n)).resY;d.push([ct])}break;case"T":case"L":if(x){var ut=re(i),lt=re(s);d.push([ee(m[0],o*ut,f),ee(m[1],a*lt,h)])}else{var ft=Gt($t({x:te(m[0],o,c,f),y:te(m[1],a,u,h)},n)),ht=ft.resX,pt=ft.resY;d.push([ht,pt])}break;case"M":var dt=Jt(m,2),bt=dt[0],yt=dt[1];if(x&&!b){var gt=re(i),vt=re(s);d.push([ee(bt,o*gt,f),ee(yt,a*vt,h)])}else{var mt=Gt($t({x:te(bt,o,c,f),y:te(yt,a,u,h)},n)),wt=mt.resX,xt=mt.resY;d.push([wt,xt])}break;case"Q":var _t=Jt(m,4),kt=_t[0],At=_t[1],Et=_t[2],Ot=_t[3];if(x){var Mt=re(i),jt=re(s);d.push([ee(kt,o*Mt,f),ee(At,a*jt,h),ee(Et,o*Mt,f),ee(Ot,a*jt,h)])}else{var Xt=s&&u<At||!s&&At<u?-1:1,Yt=Gt($t({x:te(kt,o*(i&&c<kt||!i&&kt<c?-1:1),c,f),y:te(At,a*Xt,u,h)},n)),St=Yt.resX,Nt=Yt.resY,Tt=Gt($t({x:te(Et,o,c,f),y:te(Ot,a,u,h)},n)),Pt=Tt.resX,Ct=Tt.resY;d.push([St,Nt,Pt,Ct])}break;case"S":var Lt=Jt(m,4),zt=Lt[0],Rt=Lt[1],Bt=Lt[2],Ft=Lt[3];if(x){var Dt=re(i),qt=re(s);d.push([ee(zt,o*Dt,f),ee(Rt,a*qt,h),ee(Bt,o*Dt,f),ee(Ft,a*qt,h)])}else{var It=s&&u<Rt||!s&&Rt<u?-1:1,Ut=Gt($t({x:te(zt,o*(i&&c<zt||!i&&zt<c?-1:1),c,f),y:te(Rt,a*It,u,h)},n)),Vt=Ut.resX,Ht=Ut.resY,Kt=Gt($t({x:te(Bt,o,c,f),y:te(Ft,a,u,h)},n)),Qt=Kt.resX,Zt=Kt.resY;d.push([Vt,Ht,Qt,Zt])}break;case"Z":d.push([""])}p+=v.cmd+d[y].join(",")+" ",b=!1}return p}({bBox:f,path:ft,baseData:A,dx:o,dy:a,revX:i,revY:s,fixedX:_,fixedY:k})])}E.forEach(function(t){e.setAttribute(t[0],t[1])})}(t,{scaleX:O,scaleY:M,diffX:j*re(A),diffY:X*re(E),revX:A,revY:E,angle:a*i,factor:i,centerX:w,centerY:x,bBox:!0===Y?u.bBox:t.getBBox(),store:e.storage})}),this.storage.cached=null}}},{key:"onRefreshState",value:function(e){var r=this.storage,n=function(t){var e=t.factor,r=t.revX,n=t.revY,o=this.storage,a=o.box,i=o.handles,s=o.snap,c=j(i.tl),u=j(i.tr),l=Math.atan2(u.y-c.y,u.x-c.x)*e,f=a.getBBox(),h=f.width,p=f.height,d=f.x,b=f.y,y=T(d,b,h,p,l,r,n),g=j(a);return{transform:{orig:this.el.getAttribute("transform"),value:a.getAttribute("transform"),scaleX:r?h+d:d,scaleY:n?p+b:b,bBox:f},cw:h,ch:p,center:{x:g.left+h/2,y:g.top+p/2,left:d+h/2,top:b+p/2},left:Y(d,s.x),top:Y(b,s.y),coordX:y.left,coordY:y.top,factor:e,refang:l}}.call(this,e);Object.keys(e).forEach(function(t){r[t]=e[t]}),Object.keys(n).forEach(function(t){r[t]=n[t]})}}]),o}();function at(t){var e=this.storage,r=e.box,n=e.handles,o=e.snap,a=e.parent,i=M(t.target),s=1,c=i.is(n.tl)||i.is(n.ml)||i.is(n.bl)||i.is(n.tc),u=i.is(n.tl)||i.is(n.tr)||i.is(n.tc)||i.is(n.ml);(i.is(n.tr)||i.is(n.bl))&&(s=-1);var l=j(n.tl),f=j(n.tr),h=Math.atan2(f.top-l.top,f.left-l.left)*s,p=r.getBBox(),d=p.width,b=p.height,y=p.x,g=p.y,v=T(y,g,d,b,h,c,u),m=j(r),w=m.left+d/2,x=m.top+b/2,_=Math.atan2(t.pageY-x,t.pageX-w),k=i.is(n.tl)||i.is(n.tc)||i.is(n.tr),A=i.is(n.tl)||i.is(n.ml)||i.is(n.bl),E=i.is(n.tr)||i.is(n.mr)||i.is(n.br),O=i.is(n.br)||i.is(n.bc)||i.is(n.bl);return{transform:{orig:this.el.getAttribute("transform"),value:r.getAttribute("transform"),scaleX:c?d+y:y,scaleY:u?b+g:g,bBox:p},parentScale:N(a.getAttribute("transform")||"scale(1 1)").scale,cw:d,ch:b,center:{x:m.left+d/2,y:m.top+b/2,left:y+d/2,top:g+b/2},left:Y(y,o.x),top:Y(g,o.y),coordX:v.left,coordY:v.top,factor:s,pressang:_,refang:h,revX:c,revY:u,handle:i,onTopEdge:k,onLeftEdge:A,onRightEdge:E,onBottomEdge:O}}function it(t,e,r,n){var o=this.storage,a=o.box,i=o.handles,s=o.snap,c=o.left,u=o.top,l=o.coordX,f=o.coordY,h=o.refang,p=o.factor,d=o.cw,b=o.ch,y=o.transform,g=this.el,v=Number(a.getAttribute("width")),m=Number(a.getAttribute("height"));if(null!==t&&(v=X(t,s.x)),null!==e&&(m=X(e,s.y)),!(Math.abs(v)<2||Math.abs(m)<2)){var w=T(c,u,v,m,h,r,n),x=u-(w.top-f);lt(a,i,{x:c-(w.left-l),y:x,width:v,height:m,angle:h*p});var _=v/d,k=m/b;this.storage.cached={scaleX:_,scaleY:k,diffX:v-d,diffY:m-b,revX:r,revY:n};var A=y.scaleX,E=y.scaleY,O="translate(".concat(A," ").concat(E,") scale(").concat(_," ").concat(k,") translate(").concat(-A," ").concat(-E,")");if("g"===g.tagName.toLowerCase())g.childNodes.forEach(function(t){if(1===t.nodeType){var e=t.getAttribute("transform")||"";t.setAttribute("transform",e.replace(nt,O))}});else{var M=g.getAttribute("transform")||"";g.setAttribute("transform",M.replace(nt,O))}}}function st(t,e){var r=this.storage,n=r.snap,o=r.transform,a=r.wrapper,i=o.orig||"",s=X(e,n.x),c=X(t,n.y),u="translate(".concat(s," ").concat(c,")"),l=i.replace(/translate\(.+\)|^/,u);a.setAttribute("transform",u),this.el.setAttribute("transform",l)}function ct(t){var e=this.storage,r=e.refang,n=e.snap,o=e.center,a=e.box,i=e.handles,s=X(r+t,n.angle),c="rotate(".concat(s*ht," ").concat(o.left," ").concat(o.top,")");a.setAttribute("transform",c),Object.keys(i).forEach(function(t){i[t].setAttribute("transform",c)}),"g"===this.el.tagName.toLowerCase()?this.el.childNodes.forEach(function(t){1===t.nodeType&&t.setAttribute("transform",c)}):this.el.setAttribute("transform",c)}function ut(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function lt(e,r,t){var n=t.x,o=t.y,a=t.width,i=t.height,s=t.angle,c=a/2,u=i/2,l="rotate(".concat(s*ht," ").concat(n+c," ").concat(o+u,")"),f={tl:[n,o],ml:[n,o+u],bl:[n,o+i],tc:[n+c,o],tr:[n+a,o],mr:[n+a,o+u],br:[n+a,o+i],bc:[n+c,o+i],rotator:[n+c,o-et+(i<0?i:0)]},h={x:n+=a<0?a:0,y:o+=i<0?i:0,width:Math.abs(a),height:Math.abs(i),transform:l};Object.keys(h).forEach(function(t){e.setAttribute(t,h[t])}),Object.keys(r).forEach(function(t){var e=r[t];e.setAttribute("cx",f[t][0]),e.setAttribute("cy",f[t][1]),e.setAttribute("transform",l)})}function dt(t){return t.match(rt).reduce(function(t,e,r,n){return r%2==0&&t.push(n.slice(r,r+2)),t},[])}function ft(t){return(ft="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function bt(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function yt(t,e){return!e||"object"!==ft(e)&&"function"!=typeof e?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}function gt(t){return(gt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function vt(t,e){return(vt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}
/* @license
 * Move/Rotate/Resize tool
 * Released under the MIT license, 2018-2019
 * nichollascarter@gmail.com
*/var mt=function(){function e(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),yt(this,gt(e).call(this,t))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&vt(t,e)}(e,f),function(t,e,r){e&&bt(t.prototype,e),r&&bt(t,r)}(e,[{key:"drag",value:function(t){return function(e){if(this.length){var r=new c;return a.call(this,function(t){return t instanceof SVGElement?new ot(t,e,r):new F(t,e,r)})}}.call(this,t)}}]),e}();e.default=function(t){return new mt(t)}}]).default;
//# sourceMappingURL=subjx.js.map