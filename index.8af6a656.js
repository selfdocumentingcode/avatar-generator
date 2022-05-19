!function(){function t(t){return t&&t.__esModule?t.default:t}function e(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function r(t){return function(){var r=this,n=arguments;return new Promise((function(o,a){var i=t.apply(r,n);function c(t){e(i,o,a,c,u,"next",t)}function u(t){e(i,o,a,c,u,"throw",t)}c(void 0)}))}}function n(t,e,r){if(!e.has(t))throw new TypeError("attempted to "+r+" private field on non-instance");return e.get(t)}function o(t,e){return function(t,e){return e.get?e.get.call(t):e.value}(t,n(t,e,"get"))}function a(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function i(t,e,r){a(t,e),e.set(t,r)}function c(t,e,r){return function(t,e,r){if(e.set)e.set.call(t,r);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=r}}(t,n(t,e,"set"),r),r}function u(t,e,r){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return r}function s(t,e){a(t,e),e.add(t)}function l(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function f(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),n.forEach((function(e){f(t,e,r[e])}))}return t}var p={},v=function(t){var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,a=Object.create(o.prototype),i=new O(n||[]);return a._invoke=function(t,e,r){var n=f;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===v){if("throw"===o)throw a;return j()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=L(i,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?v:h,u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=v,r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f="suspendedStart",h="suspendedYield",p="executing",v="completed",d={};function y(){}function g(){}function w(){}var m={};u(m,a,(function(){return this}));var b=Object.getPrototypeOf,x=b&&b(b(R([])));x&&x!==r&&n.call(x,a)&&(m=x);var S=w.prototype=y.prototype=Object.create(m);function k(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function L(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,L(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function R(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:j}}function j(){return{value:e,done:!0}}return g.prototype=w,u(S,"constructor",w),u(w,"constructor",g),g.displayName=u(w,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,u(t,c,"GeneratorFunction")),t.prototype=Object.create(S),t},t.awrap=function(t){return{__await:t}},k(E.prototype),u(E.prototype,i,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new E(s(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},k(S),u(S,c,"Generator"),u(S,a,(function(){return this})),u(S,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=R,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(C),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;C(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:R(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(p);try{regeneratorRuntime=v}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=v:Function("r","regeneratorRuntime = r")(v)}var d,y,g,w,m,b,x,S,k=["#11133c","#f9ead4","#030504","#ffffff","#79fe9d","#f9a86f","#f71e4d","#060fbf","#1d43c6","#eef5f9","#c3d5e1","#f2f2f2","#fcf8f3"],E={body:1,eye:2,nosemouth:2,ear:2},L="/avatar-generator",N="components",C=256,O=new WeakMap,R=new WeakMap,j=new WeakMap,A=new WeakSet,M=new WeakSet,T=new WeakSet,P=new WeakSet,_=new WeakSet,D=function(){"use strict";function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,A),s(this,M),s(this,T),s(this,P),s(this,_),i(this,O,{writable:!0,value:void 0}),i(this,R,{writable:!0,value:void 0}),i(this,j,{writable:!0,value:void 0}),c(this,O,e)}var e,r,n;return e=t,(r=[{key:"getBackgroundColor",value:function(){return c(this,R,u(this,A,q).call(this)),o(this,R)}},{key:"getBodyConfig",value:function(){var e=u(this,A,q).call(this,3,[o(this,R),"#030504"]);return c(this,j,e),{color:e,scale:u(this,T,W).call(this,t.bodyScaleRange,3)}}},{key:"getEyesConfig",value:function(){var e=u(this,A,q).call(this,5,[o(this,j)]),r=u(this,M,G).call(this,"eye",5);return{color:e,scale:u(this,T,W).call(this,t.eyesScaleRange,5),distance:u(this,P,B).call(this,t.eyesDistanceRange,5),variant:r}}},{key:"getNosemouthConfig",value:function(){var e=u(this,A,q).call(this,7,[o(this,j)]),r=u(this,M,G).call(this,"nosemouth",7);return{color:e,scale:u(this,T,W).call(this,t.nousemouthScaleRange,7),variant:r}}},{key:"getEarsConfig",value:function(){var e=u(this,A,q).call(this,11,[o(this,j),o(this,R)]),r=u(this,M,G).call(this,"ear",11),n=u(this,T,W).call(this,t.earsScaleRange,11),a=u(this,P,B).call(this,t.earsRotation,11);return{color:e,scale:n,translateDeg:u(this,P,B).call(this,t.earsTranslateDegRange,11),variant:r,rotation:a}}}])&&l(e.prototype,r),n&&l(e,n),t}();function q(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1?arguments[1]:void 0,r=e?k.filter((function(t){return!e.includes(t)})):k;return r[u(this,_,I).call(this,t)%r.length]}function G(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=u(this,_,I).call(this,e)%E[t];return r}function W(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=100*t[0],n=100*t[1],o=r+u(this,_,I).call(this,e)%(n-r);return o/100}function B(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=t[0],n=t[1],o=r+u(this,_,I).call(this,e)%(n-r);return o}function I(t){return Math.abs(Math.round(o(this,O)/t))}function F(t){var e=0;if(0==(null==t?void 0:t.length))return e;t=t.toLowerCase();for(var r=0;r<t.length;r++){e=(e<<5)-e+t.charCodeAt(r),e&=e}return Math.abs(e)}f(D,"bodyScaleRange",[.9,1.1]),f(D,"eyesScaleRange",[.6,.8]),f(D,"eyesDistanceRange",[48,96]),f(D,"nousemouthScaleRange",[.8,1.2]),f(D,"earsScaleRange",[.6,.8]),f(D,"earsRotation",[15,45]),f(D,"earsTranslateDegRange",[225,250]);var Y,z={};function U(){return X.apply(this,arguments)}function X(){return(X=r(t(p).mark((function e(){var r,n,o,a,i,c,u,s,l;return t(p).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=0;case 1:if(!(r<Object.keys(E).length)){t.next=24;break}n=Object.keys(E)[r],o=E[n],a=0;case 5:if(!(a<o)){t.next=21;break}return i="".concat(L,"/").concat(N,"/").concat(n,"_").concat(a,".svg"),t.next=9,fetch(i);case 9:return c=t.sent,t.next=12,c.text();case 12:u=t.sent,s=(new DOMParser).parseFromString(u,"text/xml").firstChild,l="svg-".concat(n,"-").concat(a),s.id=l,y.appendChild(s),z[l]=s;case 18:a++,t.next=5;break;case 21:r++,t.next=1;break;case 24:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function V(t,e){var r=z["svg-".concat(t,"-").concat(e)];if(!r)throw"Can't find component with name svg-".concat(t,"-").concat(e);var n=r.querySelector("g").cloneNode(!0);return n.id="".concat(t,"-layer"),n}function H(t){var e=t.getBackgroundColor(),r=d.querySelector("g#background-layer rect");r.setAttributeNS(null,"fill",e),r.setAttributeNS(null,"stroke",e)}function J(t){return K.apply(this,arguments)}function K(){return(K=r(t(p).mark((function e(r){var n,o,a;return t(p).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.getBodyConfig(),o=V("body",0),t.next=4,lt(o);case 4:return a=st(o,{color:n.color,scale:n.scale}),t.abrupt("return",a);case 6:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function Q(t){return Z.apply(this,arguments)}function Z(){return(Z=r(t(p).mark((function e(r){var n,o,a,i;return t(p).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=16,o=r.getNosemouthConfig(),a=V("nosemouth",o.variant),t.next=5,lt(a);case 5:return i=st(a,{color:o.color,scale:o.scale,offsetY:n}),t.abrupt("return",i);case 7:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function $(t){return tt.apply(this,arguments)}function tt(){return(tt=r(t(p).mark((function e(r){var n,o,a;return t(p).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=V("eye",r.variant),t.next=3,lt(n);case 3:return-24,o=Math.round(r.distance/2),a=st(n,{color:r.color,scale:r.scale,offsetX:o,offsetY:-24}),t.abrupt("return",a);case 7:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function et(t){return rt.apply(this,arguments)}function rt(){return(rt=r(t(p).mark((function e(r){var n,o;return t(p).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.getEyesConfig(),t.next=3,$(n);case 3:return o=h({},n,{distance:-n.distance}),t.next=6,$(o);case 6:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function nt(t,e){return ot.apply(this,arguments)}function ot(){return(ot=r(t(p).mark((function e(r,n){var o,a,i,c,u,s,l;return t(p).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=V("ear",r.variant),t.next=3,lt(o);case 3:return a=st(o,{color:r.color,scale:r.scale}),i=r.translateDeg,c=Math.PI/180*i,u=(n+a.width/2)/r.scale*Math.cos(c),s=(n+a.height/2)/r.scale*Math.sin(c),ct(o,{x:u,y:s}),270,l=r.translateDeg-270,ut(o,l),t.abrupt("return",a);case 13:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function at(t,e){return it.apply(this,arguments)}function it(){return(it=r(t(p).mark((function e(r,n){var o,a,i,c,u;return t(p).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=r.getEarsConfig(),a=Math.round(n.width/2),t.next=4,nt(o,a);case 4:return 270,i=o.translateDeg+2*(270-o.translateDeg),c=-o.rotation,u=h({},o,{translateDeg:i,rotation:c}),t.next=10,nt(u,a);case 10:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function ct(t,e){var r,n=e.x,o=e.y,a=null!==(r=t.getAttributeNS(null,"transform"))&&void 0!==r?r:"";a+=" translate(".concat(n," ").concat(o,")"),t.setAttributeNS(null,"transform",a.trim())}function ut(t,e){var r,n=t.querySelector("[fill]"),o=null!==(r=n.getAttributeNS(null,"transform"))&&void 0!==r?r:"",a=n.getBoundingClientRect(),i=function(t,e,r,n){var o=r.createSVGPoint();o.x=t,o.y=e;var a=n.getScreenCTM();return o.matrixTransform(a.inverse())}(a.x+a.width/2,a.y+a.height/2,d,n),c=i.x,u=i.y;o+=" rotate(".concat(e," ").concat(c," ").concat(u,")"),n.setAttributeNS(null,"transform",o.trim())}function st(t,e){var r=e.color,n=e.offsetX,o=e.offsetY,a=e.scale,i=t.querySelector("[fill]");i.setAttributeNS(null,"fill",r),i.setAttributeNS(null,"stroke",r),t.setAttributeNS(null,"transform-origin","center");var c,u=t.getBoundingClientRect(),s=null!==(c=t.getAttributeNS(null,"transform"))&&void 0!==c?c:"";s+=" scale(".concat(a,")");var l=u.width,f=u.height;t.setAttributeNS(null,"transform",s);var h=t.getBoundingClientRect().width,p=t.getBoundingClientRect().height,v=d.getAttributeNS(null,"width"),y=d.getAttributeNS(null,"height"),g=0,w=0;return"path"===i.tagName?(g=Math.round(v/2-l/2)+(null!=n?n:0),w=Math.round(y/2-f/2)+(null!=o?o:0)):(g=Math.round(v/2)+(null!=n?n:0),w=Math.round(y/2)+(null!=o?o:0)),s+=" translate(".concat(g," ").concat(w,")"),t.setAttributeNS(null,"transform",s.trim()),{width:h,height:p}}function lt(t,e,r){return ft.apply(this,arguments)}function ft(){return(ft=r(t(p).mark((function e(r,n,o){var a;return t(p).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=r.querySelector("[fill]"),["cx","cy","x","y"].forEach((function(t){a.hasAttributeNS(null,t)&&a.removeAttributeNS(null,t)})),d.appendChild(r);case 4:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function ht(){Array.from(d.children).filter((function(t){return"background-layer"!==t.id})).forEach((function(t){return t.remove()}))}function pt(){var t=S.toDataURL();m.download="avatar",m.href=t,m.click(),m.href=null}function vt(t){Y=F(t),x.value=Y,bt()}function dt(){var t=crypto.randomUUID();b.value=t,vt(t)}function yt(t){var e,r;vt(null!==(r=null==t||null===(e=t.currentTarget)||void 0===e?void 0:e.value)&&void 0!==r?r:"")}function gt(){var t;document.querySelector("#stageWrapper"),d=document.querySelector("#stageSvg"),y=document.querySelector("#componentContainer"),g=document.querySelector("#btnDownloadAvatar"),w=document.querySelector("#btnRandomInput"),m=document.querySelector("#downloader"),b=document.querySelector("#inputText"),x=document.querySelector("#hash"),S=document.querySelector("#canvasPreview");var e=null!==(t=window.location.search?window.location.search.substring(1):void 0)&&void 0!==t?t:"6b63bc2e-2984-4da2-b7a9-b9fe671ce986";b.value=e,Y=F(b.value),x.value=Y,S.width=C,S.height=C,g.addEventListener("click",pt),w.addEventListener("click",dt),b.addEventListener("change",yt)}function wt(){return mt.apply(this,arguments)}function mt(){return(mt=r(t(p).mark((function e(){var r,n,o,a,i,c;return t(p).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=new Image,n=function(t){return r.onload=function(){S.getContext("2d").drawImage(r,0,0,C,C),r.onload=null,t()}},o=new Promise((function(t){return n(t)})),a=(new XMLSerializer).serializeToString(d),i=window.btoa(a),"data:image/svg+xml;base64,",c="data:image/svg+xml;base64,"+i,r.src=c,t.abrupt("return",o);case 9:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function bt(){return xt.apply(this,arguments)}function xt(){return(xt=r(t(p).mark((function e(){var r,n;return t(p).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return ht(),H(r=new D(Y)),t.next=5,J(r);case 5:return n=t.sent,t.next=8,et(r);case 8:return t.next=10,Q(r);case 10:return t.next=12,at(r,n);case 12:wt();case 13:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function St(){return(St=r(t(p).mark((function e(){return t(p).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return gt(),t.next=3,U();case 3:bt();case 4:case"end":return t.stop()}}),e)})))).apply(this,arguments)}window.onload=function(){return St.apply(this,arguments)}}();
//# sourceMappingURL=index.8af6a656.js.map
