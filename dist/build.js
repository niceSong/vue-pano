!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("vue-pano",[],e):"object"==typeof exports?exports["vue-pano"]=e():t["vue-pano"]=e()}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist/",n(n.s=20)}([function(t,e,n){var r=n(13);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(18)(r,i);r.locals&&(t.exports=r.locals)},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},function(t,e,n){var r=n(4),i=n(5),o=n(6);t.exports=function(t,e){return r(t)||i(t,e)||o()}},function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},function(t,e){t.exports=function(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var s,a=t[Symbol.iterator]();!(r=(s=a.next()).done)&&(n.push(s.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{r||null==a.return||a.return()}finally{if(i)throw o}}return n}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},function(t,e){t.exports="precision mediump float;\nvarying vec2 vUV;\nuniform sampler2D uSampler;\n\nvoid main() {\n    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\n    gl_FragColor = texture2D(uSampler, vUV);\n}"},function(t,e){t.exports="attribute vec4 aPosition;\nattribute vec2 aUV;\nuniform mat4 modelviewMatrix;\nuniform mat4 projectionMatrix;\nvarying vec2 vUV;\n\nvoid main() {\n    gl_Position = projectionMatrix * modelviewMatrix * aPosition;\n    vUV = aUV;\n}"},function(t,e,n){(function(e,n){
/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.5+7f2b526d
 */
!function(e,n){t.exports=n()}(0,function(){"use strict";function t(t){return"function"==typeof t}var r=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},i=0,o=void 0,s=void 0,a=function(t,e){d[i]=t,d[i+1]=e,2===(i+=2)&&(s?s(M):p())};var u="undefined"!=typeof window?window:void 0,c=u||{},l=c.MutationObserver||c.WebKitMutationObserver,h="undefined"==typeof self&&void 0!==e&&"[object process]"==={}.toString.call(e),f="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function v(){var t=setTimeout;return function(){return t(M,1)}}var d=new Array(1e3);function M(){for(var t=0;t<i;t+=2){(0,d[t])(d[t+1]),d[t]=void 0,d[t+1]=void 0}i=0}var p=void 0;function g(t,e){var n=this,r=new this.constructor(y);void 0===r[m]&&S(r);var i=n._state;if(i){var o=arguments[i-1];a(function(){return L(i,r,o,n._result)})}else Y(n,r,t,e);return r}function z(t){if(t&&"object"==typeof t&&t.constructor===this)return t;var e=new this(y);return E(e,t),e}p=h?function(){return e.nextTick(M)}:l?function(){var t=0,e=new l(M),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}():f?function(){var t=new MessageChannel;return t.port1.onmessage=M,function(){return t.port2.postMessage(0)}}():void 0===u?function(){try{var t=Function("return this")().require("vertx");return void 0!==(o=t.runOnLoop||t.runOnContext)?function(){o(M)}:v()}catch(t){return v()}}():v();var m=Math.random().toString(36).substring(2);function y(){}var b=void 0,j=1,N=2,w={error:null};function x(t){try{return t.then}catch(t){return w.error=t,w}}function T(e,n,r){n.constructor===e.constructor&&r===g&&n.constructor.resolve===z?function(t,e){e._state===j?I(t,e._result):e._state===N?A(t,e._result):Y(e,void 0,function(e){return E(t,e)},function(e){return A(t,e)})}(e,n):r===w?(A(e,w.error),w.error=null):void 0===r?I(e,n):t(r)?function(t,e,n){a(function(t){var r=!1,i=function(t,e,n,r){try{t.call(e,n,r)}catch(t){return t}}(n,e,function(n){r||(r=!0,e!==n?E(t,n):I(t,n))},function(e){r||(r=!0,A(t,e))},t._label);!r&&i&&(r=!0,A(t,i))},t)}(e,n,r):I(e,n)}function E(t,e){t===e?A(t,new TypeError("You cannot resolve a promise with itself")):!function(t){var e=typeof t;return null!==t&&("object"===e||"function"===e)}(e)?I(t,e):T(t,e,x(e))}function _(t){t._onerror&&t._onerror(t._result),D(t)}function I(t,e){t._state===b&&(t._result=e,t._state=j,0!==t._subscribers.length&&a(D,t))}function A(t,e){t._state===b&&(t._state=N,t._result=e,a(_,t))}function Y(t,e,n,r){var i=t._subscribers,o=i.length;t._onerror=null,i[o]=e,i[o+j]=n,i[o+N]=r,0===o&&t._state&&a(D,t)}function D(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,i=void 0,o=t._result,s=0;s<e.length;s+=3)r=e[s],i=e[s+n],r?L(n,r,i,o):i(o);t._subscribers.length=0}}function L(e,n,r,i){var o=t(r),s=void 0,a=void 0,u=void 0,c=void 0;if(o){if((s=function(t,e){try{return t(e)}catch(t){return w.error=t,w}}(r,i))===w?(c=!0,a=s.error,s.error=null):u=!0,n===s)return void A(n,new TypeError("A promises callback cannot return that same promise."))}else s=i,u=!0;n._state!==b||(o&&u?E(n,s):c?A(n,a):e===j?I(n,s):e===N&&A(n,s))}var R=0;function S(t){t[m]=R++,t._state=void 0,t._result=void 0,t._subscribers=[]}var U=function(){function t(t,e){this._instanceConstructor=t,this.promise=new t(y),this.promise[m]||S(this.promise),r(e)?(this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?I(this.promise,this._result):(this.length=this.length||0,this._enumerate(e),0===this._remaining&&I(this.promise,this._result))):A(this.promise,new Error("Array Methods must be provided an Array"))}return t.prototype._enumerate=function(t){for(var e=0;this._state===b&&e<t.length;e++)this._eachEntry(t[e],e)},t.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===z){var i=x(t);if(i===g&&t._state!==b)this._settledAt(t._state,e,t._result);else if("function"!=typeof i)this._remaining--,this._result[e]=t;else if(n===O){var o=new n(y);T(o,t,i),this._willSettleAt(o,e)}else this._willSettleAt(new n(function(e){return e(t)}),e)}else this._willSettleAt(r(t),e)},t.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===b&&(this._remaining--,t===N?A(r,n):this._result[e]=n),0===this._remaining&&I(r,this._result)},t.prototype._willSettleAt=function(t,e){var n=this;Y(t,void 0,function(t){return n._settledAt(j,e,t)},function(t){return n._settledAt(N,e,t)})},t}();var O=function(){function e(t){this[m]=R++,this._result=this._state=void 0,this._subscribers=[],y!==t&&("function"!=typeof t&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof e?function(t,e){try{e(function(e){E(t,e)},function(e){A(t,e)})}catch(e){A(t,e)}}(this,t):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return e.prototype.catch=function(t){return this.then(null,t)},e.prototype.finally=function(e){var n=this.constructor;return t(e)?this.then(function(t){return n.resolve(e()).then(function(){return t})},function(t){return n.resolve(e()).then(function(){throw t})}):this.then(e,e)},e}();return O.prototype.then=g,O.all=function(t){return new U(this,t).promise},O.race=function(t){var e=this;return r(t)?new e(function(n,r){for(var i=t.length,o=0;o<i;o++)e.resolve(t[o]).then(n,r)}):new e(function(t,e){return e(new TypeError("You must pass an array to race."))})},O.resolve=z,O.reject=function(t){var e=new this(y);return A(e,t),e},O._setScheduler=function(t){s=t},O._setAsap=function(t){a=t},O._asap=a,O.polyfill=function(){var t=void 0;if(void 0!==n)t=n;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var r=null;try{r=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===r&&!e.cast)return}t.Promise=O},O.Promise=O,O})}).call(this,n(10),n(11))},function(t,e){var n,r,i=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(t){if(n===setTimeout)return setTimeout(t,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(t){n=o}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(t){r=s}}();var u,c=[],l=!1,h=-1;function f(){l&&u&&(l=!1,u.length?c=u.concat(c):h=-1,c.length&&v())}function v(){if(!l){var t=a(f);l=!0;for(var e=c.length;e;){for(u=c,c=[];++h<e;)u&&u[h].run();h=-1,e=c.length}u=null,l=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function d(t,e){this.fun=t,this.array=e}function M(){}i.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];c.push(new d(t,e)),1!==c.length||l||a(v)},d.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=M,i.addListener=M,i.once=M,i.off=M,i.removeListener=M,i.removeAllListeners=M,i.emit=M,i.prependListener=M,i.prependOnceListener=M,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";var r=n(0);n.n(r).a},function(t,e,n){var r=n(14);(t.exports=n(15)(!1)).push([t.i,"\n.viewport[data-v-54c64010] {\n  font-family: Helvetica, Arial, sans-serif;\n  position: relative;\n\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Safari */\n   -khtml-user-select: none; /* Konqueror HTML */\n     -moz-user-select: none; /* Firefox */\n      -ms-user-select: none; /* Internet Explorer/Edge */\n          user-select: none; /* Non-prefixed version, currently\n                                supported by Chrome and Opera */\n  cursor: -webkit-grab;\n}\n.viewport.dragging[data-v-54c64010] {\n  cursor: -webkit-grabbing;\n}\n.viewport > *[data-v-54c64010] {\n  position: relative;\n}\n.hover[data-v-54c64010] {\n  box-shadow: 0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24);\n}\n.hover[data-v-54c64010]:hover {\n  box-shadow: 0 4px 8px rgba(0, 0, 0, .25), 0 10px 10px rgba(0, 0, 0, .22);\n}\n.title[data-v-54c64010] {\n  color: #fff;\n  font-size: 20px;\n  font-weight: 300;\n  margin: 0;\n  right: 10px;\n  top: 10px;\n}\n.controls[data-v-54c64010] {\n  left: 10px;\n  position: relative;\n  top: 10px;\n}\n.zoom[data-v-54c64010] {\n  width: 26px;\n  margin-left: 12px;\n}\n.handle button[data-v-54c64010] {\n  background: rgba(0, 0, 0, 0.87);\n  border: none;\n  color: #c9c9c9;\n  cursor: pointer;\n  font-family: monospace;\n  font-size: 16px;\n  margin: 0;\n  padding: 4px 8px;\n}\n.handle button[data-v-54c64010]:hover {\n  color: #fff;\n}\n.handle button[data-v-54c64010]:focus {\n  outline: none;\n}\n.zoomin[data-v-54c64010] {\n  border-radius: 2px 2px 0 0;\n}\n.zoomout[data-v-54c64010] {\n  border-radius: 0 0 2px 2px;\n}\n.toggle-fullscreen[data-v-54c64010] {\n  bottom: 10px;\n  right: 10px;\n  font-size: 0;\n}\n.toggle-fullscreen button[data-v-54c64010] {\n  border-radius: 2px;\n  padding: 2px;\n}\n.toggle-fullscreen button[data-v-54c64010]:after {\n  content: url("+r(n(16))+");\n}\n.toggle-fullscreen.on button[data-v-54c64010]:after {\n  content: url("+r(n(17))+");\n}\n.campas[data-v-54c64010] {\n  margin-top: 10px;\n}\n.campas > .direction[data-v-54c64010] {\n  background: rgba(0, 0, 0, 0.48);\n  border-radius: 26px;\n  border: 12px solid #000;\n  cursor: pointer;\n  height: 28px;\n  transform: rotate(0);\n  width: 28px;\n  transition: all 0.2s;\n}\n.campas > .direction > div[data-v-54c64010] {\n  border-style: solid;\n  height: 0;\n  width: 0;\n  transform: translate(8px, -8px);\n}\n.campas .north[data-v-54c64010] {\n  border-color: transparent transparent #ba2226 transparent;\n  border-width: 0 6px 24px 6px;\n}\n.campas .south[data-v-54c64010] {\n  border-color: #c6c6c6 transparent transparent transparent;\n  border-width: 24px 6px 0 6px;\n}\n.error[data-v-54c64010] {\n  background: radial-gradient(ellipse at center, #4c4c4c 0%,#2c2c2c 50%,#131313 100%);\n  bottom: 0;\n  color: #fff;\n  left: 0;\n  right: 0;\n  top: 0;\n}\n.error > span[data-v-54c64010] {\n  color: rgba(255, 255, 255, 0.74);\n  display: block;\n  font-size: 16px;\n  font-weight: 100;\n  left: 0;\n  line-height: 24px;\n  margin-top: -12px;\n  position: absolute;\n  right: 0;\n  text-align: center;\n  text-shadow: 0 0 2px #000;\n  top: 50%;\n}\n.debug[data-v-54c64010] {\n  font-size: 12px;\n  font-family: monospace;\n  background: rgba(0, 0, 0, .3);\n  color: rgba(255, 255, 255, .7);\n  padding: 10px;\n  white-space:nowrap;\n  bottom: 0;\n  left: 0;\n}\ncanvas[data-v-54c64010] {\n  background: #000;\n  left: 0;\n  top: 0;\n  z-index: -1;\n}\n\n",""])},function(t,e){t.exports=function(t){return"string"!=typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(r),o=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(o).concat([i]).join("\n")}return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var s=t[i];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyBjbGFzcz0iaWNvbiIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0yOTguNjY2NjY3IDU5Ny4zMzMzMzMgMjEzLjMzMzMzMyA1OTcuMzMzMzMzIDIxMy4zMzMzMzMgODEwLjY2NjY2NyA0MjYuNjY2NjY3IDgxMC42NjY2NjcgNDI2LjY2NjY2NyA3MjUuMzMzMzMzIDI5OC42NjY2NjcgNzI1LjMzMzMzMyAyOTguNjY2NjY3IDU5Ny4zMzMzMzMgMjk4LjY2NjY2NyA1OTcuMzMzMzMzWk0yMTMuMzMzMzMzIDQyNi42NjY2NjcgMjk4LjY2NjY2NyA0MjYuNjY2NjY3IDI5OC42NjY2NjcgMjk4LjY2NjY2NyA0MjYuNjY2NjY3IDI5OC42NjY2NjcgNDI2LjY2NjY2NyAyMTMuMzMzMzMzIDIxMy4zMzMzMzMgMjEzLjMzMzMzMyAyMTMuMzMzMzMzIDQyNi42NjY2NjcgMjEzLjMzMzMzMyA0MjYuNjY2NjY3Wk03MjUuMzMzMzMzIDcyNS4zMzMzMzMgNTk3LjMzMzMzMyA3MjUuMzMzMzMzIDU5Ny4zMzMzMzMgODEwLjY2NjY2NyA4MTAuNjY2NjY3IDgxMC42NjY2NjcgODEwLjY2NjY2NyA1OTcuMzMzMzMzIDcyNS4zMzMzMzMgNTk3LjMzMzMzMyA3MjUuMzMzMzMzIDcyNS4zMzMzMzMgNzI1LjMzMzMzMyA3MjUuMzMzMzMzWk01OTcuMzMzMzMzIDIxMy4zMzMzMzMgNTk3LjMzMzMzMyAyOTguNjY2NjY3IDcyNS4zMzMzMzMgMjk4LjY2NjY2NyA3MjUuMzMzMzMzIDQyNi42NjY2NjcgODEwLjY2NjY2NyA0MjYuNjY2NjY3IDgxMC42NjY2NjcgMjEzLjMzMzMzMyA1OTcuMzMzMzMzIDIxMy4zMzMzMzMgNTk3LjMzMzMzMyAyMTMuMzMzMzMzWiIgZmlsbD0iI2ZmZmZmZiIgLz48L3N2Zz4="},function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyBjbGFzcz0iaWNvbiIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0yMTMuMzMzMzMzIDY4Mi42NjY2NjcgMzQxLjMzMzMzMyA2ODIuNjY2NjY3IDM0MS4zMzMzMzMgODEwLjY2NjY2NyA0MjYuNjY2NjY3IDgxMC42NjY2NjcgNDI2LjY2NjY2NyA1OTcuMzMzMzMzIDIxMy4zMzMzMzMgNTk3LjMzMzMzMyAyMTMuMzMzMzMzIDY4Mi42NjY2NjcgMjEzLjMzMzMzMyA2ODIuNjY2NjY3Wk0zNDEuMzMzMzMzIDM0MS4zMzMzMzMgMjEzLjMzMzMzMyAzNDEuMzMzMzMzIDIxMy4zMzMzMzMgNDI2LjY2NjY2NyA0MjYuNjY2NjY3IDQyNi42NjY2NjcgNDI2LjY2NjY2NyAyMTMuMzMzMzMzIDM0MS4zMzMzMzMgMjEzLjMzMzMzMyAzNDEuMzMzMzMzIDM0MS4zMzMzMzMgMzQxLjMzMzMzMyAzNDEuMzMzMzMzWk01OTcuMzMzMzMzIDgxMC42NjY2NjcgNjgyLjY2NjY2NyA4MTAuNjY2NjY3IDY4Mi42NjY2NjcgNjgyLjY2NjY2NyA4MTAuNjY2NjY3IDY4Mi42NjY2NjcgODEwLjY2NjY2NyA1OTcuMzMzMzMzIDU5Ny4zMzMzMzMgNTk3LjMzMzMzMyA1OTcuMzMzMzMzIDgxMC42NjY2NjcgNTk3LjMzMzMzMyA4MTAuNjY2NjY3Wk02ODIuNjY2NjY3IDM0MS4zMzMzMzMgNjgyLjY2NjY2NyAyMTMuMzMzMzMzIDU5Ny4zMzMzMzMgMjEzLjMzMzMzMyA1OTcuMzMzMzMzIDQyNi42NjY2NjcgODEwLjY2NjY2NyA0MjYuNjY2NjY3IDgxMC42NjY2NjcgMzQxLjMzMzMzMyA2ODIuNjY2NjY3IDM0MS4zMzMzMzMgNjgyLjY2NjY2NyAzNDEuMzMzMzMzWiIgZmlsbD0iI2ZmZmZmZiIgLz48L3N2Zz4="},function(t,e,n){var r={},i=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),o=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var r=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}}(),s=null,a=0,u=[],c=n(19);function l(t,e){for(var n=0;n<t.length;n++){var i=t[n],o=r[i.id];if(o){o.refs++;for(var s=0;s<o.parts.length;s++)o.parts[s](i.parts[s]);for(;s<i.parts.length;s++)o.parts.push(p(i.parts[s],e))}else{var a=[];for(s=0;s<i.parts.length;s++)a.push(p(i.parts[s],e));r[i.id]={id:i.id,refs:1,parts:a}}}}function h(t,e){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],s=e.base?o[0]+e.base:o[0],a={css:o[1],media:o[2],sourceMap:o[3]};r[s]?r[s].parts.push(a):n.push(r[s]={id:s,parts:[a]})}return n}function f(t,e){var n=o(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),u.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=o(t.insertAt.before,n);n.insertBefore(e,i)}}function v(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=u.indexOf(t);e>=0&&u.splice(e,1)}function d(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var r=function(){0;return n.nc}();r&&(t.attrs.nonce=r)}return M(e,t.attrs),f(t,e),e}function M(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function p(t,e){var n,r,i,o;if(e.transform&&t.css){if(!(o="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=o}if(e.singleton){var u=a++;n=s||(s=d(e)),r=z.bind(null,n,u,!1),i=z.bind(null,n,u,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",M(e,t.attrs),f(t,e),e}(e),r=function(t,e,n){var r=n.css,i=n.sourceMap,o=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||o)&&(r=c(r));i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var s=new Blob([r],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,n,e),i=function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=d(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),i=function(){v(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=i()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=h(t,e);return l(n,e),function(t){for(var i=[],o=0;o<n.length;o++){var s=n[o];(a=r[s.id]).refs--,i.push(a)}t&&l(h(t,e),e);for(o=0;o<i.length;o++){var a;if(0===(a=i[o]).refs){for(var u=0;u<a.parts.length;u++)a.parts[u]();delete r[a.id]}}}};var g=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}();function z(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=g(e,i);else{var o=document.createTextNode(i),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var i,o=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?t:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(t,e,n){"use strict";n.r(e);var r=n(3),i=n.n(r),o=n(1),s=n.n(o),a=n(2),u=n.n(a),c=function(){function t(){s()(this,t),this.values=new Float32Array(16)}return u()(t,[{key:"reset",value:function(){for(var t=0;t<this.values.length;t++)this.values[t]=0}},{key:"setToIdentity",value:function(){this.reset();for(var t=0;t<4;++t)this.values[5*t]=1}},{key:"lookAt",value:function(t,e,n){if(0!=t.sub(e).norm2()){var r=e.sub(t).normalize(),i=n.normalize(),o=r.cross(i).normalize(),s=o.cross(r).normalize();this.values[0]=o.x,this.values[4]=o.y,this.values[8]=o.z,this.values[1]=s.x,this.values[5]=s.y,this.values[9]=s.z,this.values[2]=-r.x,this.values[6]=-r.y,this.values[10]=-r.z,this.values[3]=0,this.values[7]=0,this.values[11]=0,this.values[15]=1,this.values[12]=-o.dot(t),this.values[13]=-s.dot(t),this.values[14]=r.dot(t)}else this.setToIdentity()}},{key:"perspective",value:function(t,e,n,r){this.reset();var i=1/Math.tan(t*Math.PI/360);this.values[0]=i/e,this.values[5]=i,this.values[10]=(r+n)/(n-r),this.values[11]=-1,this.values[14]=2*r*n/(n-r)}},{key:"data",value:function(){return this.values}}]),t}(),l=function(){function t(e,n,r){s()(this,t);var i=[e,n,r];this.x=i[0],this.y=i[1],this.z=i[2]}return u()(t,[{key:"add",value:function(e){return new t(this.x+e.x,this.y+e.y,this.z+e.z)}},{key:"sub",value:function(e){return new t(this.x-e.x,this.y-e.y,this.z-e.z)}},{key:"dot",value:function(t){return this.x*t.x+this.y*t.y+this.z*t.z}},{key:"scale",value:function(e){return new t(this.x*e,this.y*e,this.z*e)}},{key:"cross",value:function(e){return new t(this.y*e.z-this.z*e.y,this.z*e.x-this.x*e.z,this.x*e.y-this.y*e.x)}},{key:"norm2",value:function(){return this.x*this.x+this.y*this.y+this.z*this.z}},{key:"norm",value:function(){return Math.sqrt(this.norm2())}},{key:"normalize",value:function(){var t=this.norm();return t>0?this.scale(1/t):this}},{key:"toString",value:function(){return"(".concat([this.x,this.y,this.z],")")}}]),t}();function h(t,e,n){return Math.max(e,Math.min(n,t))}var f={fragment:n(7),vertex:n(8)},v=window.Promise||n(9).Promise,d={methods:{reset:function(){this.animating=!0,this.target.theta=0,this.target.phi=this.phi-this.phi%360},zoomin:function(t){var e=this.fov-20;this.animating=!0,this.target.fov=h(e,this.minFov,this.maxFov)},zoomout:function(t){var e=this.fov+20;this.animating=!0,this.target.fov=h(e,this.minFov,this.maxFov)},startDrag:function(t){if(t.targetTouches&&t.targetTouches.length>=2){var e=event.targetTouches[0],n=event.targetTouches[1],r=Math.sqrt(Math.pow(n.pageX-e.pageX,2)+Math.pow(n.pageY-e.pageY,2));return this.previous.pinchDistance=r,this.previous.fov=this.fov,void(this.pinching=!0)}t=t.changedTouches?t.changedTouches[0]:t,this.dragging=!0,this.previous={begin:new Date,phi:this.phi,theta:this.theta,mouseX:t.pageX,mouseY:t.pageY,touchPoints:[],pinchDistance:null,fov:this.fov}},prevent:function(t){event.preventDefault()},onDrag:function(t){if(this.pinching){this.animating=!0;var e=event.targetTouches[0],n=event.targetTouches[1],r=Math.sqrt(Math.pow(n.pageX-e.pageX,2)+Math.pow(n.pageY-e.pageY,2)),i=this.fov+(this.previous.pinchDistance-r)/r*(2e3/window.devicePixelRatio);return this.previous.pinchDistance=r,void(this.target.fov=h(i,this.minFov,this.maxFov))}t=t.changedTouches?t.changedTouches[0]:t;var o=.1*window.devicePixelRatio;if(this.dragging){this.animating=!0,this.mouseX=t.pageX,this.mouseY=t.pageY,this.target.phi=this.previous.phi-o*(this.mouseX-this.previous.mouseX);var s=this.previous.theta+o*(this.mouseY-this.previous.mouseY);this.target.theta=h(s,-90,90)}},zoom:function(t){var e=h((t=window.event||t).wheelDelta||-t.detail,-4,4),n=this.fov-10*e;this.animating=!0,this.target.fov=h(n,this.minFov,this.maxFov)},stopDrag:function(){this.dragging=this.pinching=!1},resize:function(){var t=window.devicePixelRatio||1,e=this.$refs,n=e.canvas,r=e.viewport,i=this.width,o=this.height;this.fullscreen.element&&document[this.fullscreen.element]==this.$el?o=i="100%":+i==i&&+o==o&&(i>screen.width||o>o.width?i=o=0:(o+="px",i+="px")),n&&r&&(i?n.style.width=r.style.width=i:(r.style.width="100vw",n.style.width="100%"),o?n.style.height=r.style.height=o:(r.style.height="100vh",n.style.height="100%"),n.width=n.clientWidth*t,n.height=n.clientHeight*t,this.gl.viewport(0,0,n.width,n.height),this.program&&(this.forceUpdate=!0,this.draw()))},initShaders:function(){var t=this.gl;this.program=t.createProgram();var e=this.shaders.vertex=t.createShader(t.VERTEX_SHADER);t.shaderSource(e,f.vertex),t.compileShader(e),t.attachShader(this.program,e);var n=this.shaders.fragment=t.createShader(t.FRAGMENT_SHADER);t.shaderSource(n,f.fragment),t.compileShader(n),t.attachShader(this.program,n),t.linkProgram(this.program),t.useProgram(this.program)},loadTextures:function(){var t=this,e=this.gl,n=["top","bottom","front","left","back","right"].map(function(n){return new v(function(r,i){var o=t.bundle+n+"."+t.format,s=new Image;s.onload=function(){var i=t.textures[n]=e.createTexture();e.bindTexture(e.TEXTURE_2D,i),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,s),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR_MIPMAP_LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.MIRRORED_REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.MIRRORED_REPEAT),e.generateMipmap(e.TEXTURE_2D),e.bindTexture(e.TEXTURE_2D,null),r(o)},s.onerror=i,s.src=o})});v.all(n).then(function(t){}).catch(function(e){t.error="Unable to load all images"})},initModel:function(){var t=new Float32Array([-1,-1,1,1,1,1,-1,1,0,1,1,1,1,0,0,-1,1,1,1,0,-1,-1,-1,0,1,-1,1,-1,0,0,1,1,-1,1,0,1,-1,-1,1,1,-1,1,-1,1,0,-1,1,1,1,1,1,1,1,0,1,1,1,-1,0,0,-1,-1,-1,1,1,1,-1,-1,0,1,1,-1,1,0,0,-1,-1,1,1,0,1,-1,-1,0,1,1,1,-1,0,0,1,1,1,1,0,1,-1,1,1,1,-1,-1,-1,1,1,-1,-1,1,0,1,-1,1,1,0,0,-1,1,-1,1,0]),e=new Uint16Array([0,1,2,2,3,0,4,5,6,6,7,4,8,9,10,10,11,8,12,13,14,14,15,12,16,17,18,18,19,16,20,21,22,22,23,20]),n=this.gl,r=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,r),n.bufferData(n.ARRAY_BUFFER,t,n.STATIC_DRAW);var i=n.createBuffer();n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,i),n.bufferData(n.ELEMENT_ARRAY_BUFFER,e,n.STATIC_DRAW);var o=n.getAttribLocation(this.program,"aPosition"),s=n.getAttribLocation(this.program,"aUV");n.enableVertexAttribArray(o),n.enableVertexAttribArray(s),n.vertexAttribPointer(o,3,n.FLOAT,!1,20,0),n.vertexAttribPointer(s,2,n.FLOAT,!1,20,12)},almostEqual:function(t,e){return Math.abs(t-e)<1e-4},toggleFullscreen:function(){var t=this.fullscreen,e=t.element,n=t.enter,r=t.leave;e&&(document[e]?document[r]():this.$el[n](),this.resize())},draw:function(){var t=this.gl,e=this.phi,n=this.theta,r=this.fov;if(this.almostEqual(e,this.target.phi)&&this.almostEqual(n,this.target.theta)&&this.almostEqual(r,this.target.fov))this.animating=!1;else if(this.animating){e+=(this.target.phi-e)*(1/16),n+=(this.target.theta-n)*(1/16),r+=(this.target.fov-r)*(1/16),this.phi=e,this.theta=n,this.fov=r}if(this.animating||this.forceUpdate){var i=Math.cos(Math.PI*e/180)*Math.cos(Math.PI*n/180),o=Math.sin(Math.PI*n/180),s=Math.sin(Math.PI*e/180)*Math.cos(Math.PI*n/180),a=new l(i,o,s),u=new l(0,0,0),h=new c;h.lookAt(u,u.add(a),new l(0,1,0));var f=new c,v=t.drawingBufferWidth/t.drawingBufferHeight;f.perspective(this.fov,v,.1,2),t.clearColor(1,1,1,1),t.clear(t.COLOR_BUFFER_BIT),t.uniformMatrix4fv(t.getUniformLocation(this.program,"modelviewMatrix"),!1,h.data()),t.uniformMatrix4fv(t.getUniformLocation(this.program,"projectionMatrix"),!1,f.data()),t.uniform1i(t.getUniformLocation(this.program,"uSampler"),0);var d=this.textures;t.bindTexture(t.TEXTURE_2D,d.front),t.drawElements(t.TRIANGLES,6,t.UNSIGNED_SHORT,0),t.bindTexture(t.TEXTURE_2D,d.back),t.drawElements(t.TRIANGLES,6,t.UNSIGNED_SHORT,12),t.bindTexture(t.TEXTURE_2D,d.top),t.drawElements(t.TRIANGLES,6,t.UNSIGNED_SHORT,24),t.bindTexture(t.TEXTURE_2D,d.bottom),t.drawElements(t.TRIANGLES,6,t.UNSIGNED_SHORT,36),t.bindTexture(t.TEXTURE_2D,d.left),t.drawElements(t.TRIANGLES,6,t.UNSIGNED_SHORT,48),t.bindTexture(t.TEXTURE_2D,d.right),t.drawElements(t.TRIANGLES,6,t.UNSIGNED_SHORT,60),this.forceUpdate=!1}requestAnimationFrame(this.draw.bind(this))}},mounted:function(){var t=this.$refs.canvas;if(this.gl=t.getContext("webgl")||t.getContext("experimental-webgl")){this.resize(),this.previous.phi=-this.phi,this.previous.theta=-this.theta,this.previous.fov=-this.fov;var e=this.zoom,n=this.resize,r=this.prevent;this.$el.addEventListener("mousewheel",e,!1),this.$el.addEventListener("DOMMouseScroll",e,!1),addEventListener("resize",n,!1),addEventListener("touchmove",r,!1),document.body.addEventListener("touchstart",r);for(var o=[["requestFullsceen","fullScreenElement","cancelFullScreen"],["webkitRequestFullscreen","webkitFullscreenElement","webkitCancelFullScreen"],["mozRequestFullScreen","mozFullScreenElement","mozCancelFullScreen"],["msRequestFullscreen","msFullscreenElement","msExitFullscreen"]],s=0;s<o.length;s++){var a=o[s],u=i()(a,3),c=u[0],l=u[1],h=u[2];if("function"==typeof this.$el[c]){this.fullscreen={enter:c,element:l,leave:h};break}}this.fullscreen.element||console.warn("Fullscreen API not avaliable on this browser"),this.initShaders(),this.loadTextures(),this.initModel(),this.draw()}else this.error="Your browser does not support WebGL."},beforeDestroy:function(){var t=this.zoom,e=this.resize,n=this.prevent;this.$el.addEventListener("mousewheel",t,!1),this.$el.addEventListener("DOMMouseScroll",t,!1),removeEventListener("resize",e,!1),removeEventListener("touchmove",n,!1),document.body.removeEventListener("touchstart",n)},props:{width:String,height:String,title:String,bundle:String,format:String,debug:String,description:String},data:function(){return{gl:null,dragging:!1,pinching:!1,animating:!0,forceUpdate:!0,error:"",fullscreen:{},phi:90,theta:30,fov:45,mouseX:0,mouseY:0,minFov:20,maxFov:90,previous:{begin:null,phi:180,theta:0,fov:45,mouseX:0,mouseY:0,touchPoints:[]},target:{phi:180,theta:0,fov:45},textures:{top:null,bottom:null,front:null,back:null,left:null,right:null},program:null,shaders:{vertex:null,fragment:null}}}};n(12);var M=function(t,e,n,r,i,o,s,a){var u,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),s?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},c._ssrRegister=u):i&&(u=a?function(){i.call(this,this.$root.$options.shadowRoot)}:i),u)if(c.functional){c._injectStyles=u;var l=c.render;c.render=function(t,e){return u.call(e),l(t,e)}}else{var h=c.beforeCreate;c.beforeCreate=h?[].concat(h,u):[u]}return{exports:t,options:c}}(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"viewport",staticClass:"vue-pano viewport",class:{dragging:t.dragging},on:{mousedown:t.startDrag,touchstart:t.startDrag,mousemove:t.onDrag,touchmove:t.onDrag,mouseup:t.stopDrag,touchend:t.stopDrag,mouseleave:t.stopDrag}},[t.error?n("div",{staticClass:"error"},[n("span",[t._v(t._s(t.error))])]):[n("h3",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.fullscreen.element,expression:"fullscreen.element"}],staticClass:"handle toggle-fullscreen"},[n("button",{on:{click:t.toggleFullscreen}})]),t._v(" "),n("canvas",{ref:"canvas"}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.debug,expression:"debug"}],staticClass:"debug"},[t._v("fov: "+t._s(t.fov)+", theta: "+t._s(t.theta)+", phi: "+t._s(t.phi))])]],2)},[],!1,null,"54c64010",null);M.options.__file="Pano.vue";e.default=M.exports}])});