!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=1269)}({1269:function(e,t){!function(){"use strict";Office.initialize=function(){$(document).ready((function(){var e=window.location.origin+"/add-in/login.html",t=function(e){var t=window.location.hash;e=e.replace(/[\[\]]/g,"\\$&");var o=new RegExp("[#&]"+e+"(=([^&#]*)|&|#|$)").exec(t);return o?o[2]?decodeURIComponent(o[2].replace(/\+/g," ")):"":null}("access_token");if(window.location.hash.length>0)t?function(e){var t;t={status:"auth success",token:e},localStorage.setItem("ot",e),Office.context.ui.messageParent(JSON.stringify(t))}(t):(arg={status:"failed",token:void 0},Office.context.ui.messageParent(JSON.stringify(arg)));else{var o="https://ticktick.com/oauth/authorize?client_id=29xVAE6nMzik67IBhN&redirect_uri="+e+"&response_type=token";window.location.replace(o)}}))}}(),function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var o="undefined"!=typeof __webpack_exports__?__webpack_exports__:t;if(o)if("function"!=typeof o){for(var n in o)if(Object.prototype.hasOwnProperty.call(o,n)){var r=void 0;try{r=o[n]}catch(e){continue}e.register(r,n,"/Users/lijiawei/Developer/outlook-ticktick/src/settings/login.js")}}else e.register(o,"module.exports","/Users/lijiawei/Developer/outlook-ticktick/src/settings/login.js")}}()}});
//# sourceMappingURL=login.js.map