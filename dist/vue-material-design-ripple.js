!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("MyLib",[],t):"object"==typeof exports?exports.MyLib=t():e.MyLib=t()}(window,function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),n.d(t,"Ripple",function(){return d});n(1);function i(e,t){e.style.transform=t,e.style.webkitTransform=t}function r(e,t){e.style.opacity=t.toString()}function o(e){return"TouchEvent"===e.constructor.name}var a={show:function(e,t,n){if(void 0===n&&(n={}),t._ripple&&t._ripple.enabled){var a=document.createElement("span"),s=document.createElement("span");a.appendChild(s),a.className="v-ripple__container",n.class&&(a.className+=" "+n.class);var l=function(e,t,n){void 0===n&&(n={});var i=t.getBoundingClientRect(),r=o(e)?e.touches[e.touches.length-1]:e,a=r.clientX-i.left,s=r.clientY-i.top,l=0,c=.3;t._ripple&&t._ripple.circle?(c=.15,l=t.clientWidth/2,l=n.center?l:l+Math.sqrt(Math.pow(a-l,2)+Math.pow(s-l,2))/4):l=Math.sqrt(Math.pow(t.clientWidth,2)+Math.pow(t.clientHeight,2))/2;var p=(t.clientWidth-2*l)/2+"px",u=(t.clientHeight-2*l)/2+"px";return{radius:l,scale:c,x:n.center?p:a-l+"px",y:n.center?u:s-l+"px",centerX:p,centerY:u}}(e,t,n),c=l.radius,p=l.scale,u=l.x,d=l.y,v=l.centerX,f=l.centerY,m=2*c+"px";s.className="v-ripple__animation",s.style.width=m,s.style.height=m,t.appendChild(a);var _=window.getComputedStyle(t);_&&"static"===_.position&&(t.style.position="relative",t.dataset.previousPosition="static"),s.classList.add("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--visible"),i(s,"translate("+u+", "+d+") scale3d("+p+","+p+","+p+")"),r(s,0),s.dataset.activated=String(performance.now()),setTimeout(function(){s.classList.remove("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--in"),i(s,"translate("+v+", "+f+") scale3d(1,1,1)"),r(s,.25)},0)}},hide:function(e){if(e&&e._ripple&&e._ripple.enabled){var t=e.getElementsByClassName("v-ripple__animation");if(0!==t.length){var n=t[t.length-1];if(!n.dataset.isHiding){n.dataset.isHiding="true";var i=performance.now()-Number(n.dataset.activated),o=Math.max(250-i,0);setTimeout(function(){n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),r(n,0),setTimeout(function(){1===e.getElementsByClassName("v-ripple__animation").length&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),n.parentNode&&e.removeChild(n.parentNode)},300)},o)}}}}};function s(e){return void 0===e||!!e}function l(e){var t={},n=e.currentTarget; e.stopPropagation();if(n&&n._ripple&&!n._ripple.touched){if(o(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;t.center=n._ripple.centered,n._ripple.class&&(t.class=n._ripple.class),a.show(e,n,t)}}function c(e){var t=e.currentTarget;t&&(window.setTimeout(function(){t._ripple&&(t._ripple.touched=!1)}),a.hide(t))}function p(e,t,n){var i=s(t.value);i||a.hide(e),e._ripple=e._ripple||{},e._ripple.enabled=i;var r=t.value||{};r.center&&(e._ripple.centered=!0),r.class&&(e._ripple.class=t.value.class),r.circle&&(e._ripple.circle=r.circle),i&&!n?(e.addEventListener("touchstart",l,{passive:!0}),e.addEventListener("touchend",c,{passive:!0}),e.addEventListener("touchcancel",c),e.addEventListener("mousedown",l),e.addEventListener("mouseup",c),e.addEventListener("mouseleave",c),e.addEventListener("dragstart",c,{passive:!0})):!i&&n&&u(e)}function u(e){e.removeEventListener("mousedown",l),e.removeEventListener("touchstart",c),e.removeEventListener("touchend",c),e.removeEventListener("touchcancel",c),e.removeEventListener("mouseup",c),e.removeEventListener("mouseleave",c),e.removeEventListener("dragstart",c)}var d={bind:function(e,t,n){p(e,t,!1)},unbind:function(e){delete e._ripple,u(e)},update:function(e,t){t.value!==t.oldValue&&p(e,t,s(t.oldValue))}};t.default=d},function(e,t,n){}])});
//# sourceMappingURL=vue-material-design-ripple.js.map
