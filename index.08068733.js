!function(){function t(t){return t&&t.__esModule?t.default:t}function e(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function r(t){return function(){var r=this,n=arguments;return new Promise((function(o,a){var i=t.apply(r,n);function c(t){e(i,o,a,c,u,"next",t)}function u(t){e(i,o,a,c,u,"throw",t)}c(void 0)}))}}function n(t,e,r){if(!e.has(t))throw new TypeError("attempted to "+r+" private field on non-instance");return e.get(t)}function o(t,e){return function(t,e){return e.get?e.get.call(t):e.value}(t,n(t,e,"get"))}function a(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function i(t,e,r){a(t,e),e.set(t,r)}function c(t,e,r){return function(t,e,r){if(e.set)e.set.call(t,r);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=r}}(t,n(t,e,"set"),r),r}function u(t,e,r){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return r}function l(t,e){a(t,e),e.add(t)}function s(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function f(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),n.forEach((function(e){f(t,e,r[e])}))}return t}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function d(t){return function(t){if(Array.isArray(t))return p(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return p(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?p(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var v={},y=function(t){var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,a=Object.create(o.prototype),i=new O(n||[]);return a._invoke=function(t,e,r){var n=f;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw a;return M()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=L(i,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=s(t,e,r);if("normal"===u.type){if(n=r.done?d:h,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f="suspendedStart",h="suspendedYield",p="executing",d="completed",v={};function y(){}function g(){}function m(){}var w={};u(w,a,(function(){return this}));var b=Object.getPrototypeOf,x=b&&b(b(j([])));x&&x!==r&&n.call(x,a)&&(w=x);var S=m.prototype=y.prototype=Object.create(w);function k(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(o,a,i,c){var u=s(t[o],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(f).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function L(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,L(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function j(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:M}}function M(){return{value:e,done:!0}}return g.prototype=m,u(S,"constructor",m),u(m,"constructor",g),g.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(S),t},t.awrap=function(t){return{__await:t}},k(E.prototype),u(E.prototype,i,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new E(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},k(S),u(S,c,"Generator"),u(S,a,(function(){return this})),u(S,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=j,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(A),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),A(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;A(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:j(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(v);try{regeneratorRuntime=y}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=y:Function("r","regeneratorRuntime = r")(y)}var g=["#11133c","#f9ead4","#030504","#ffffff","#79fe9d","#f9a86f","#f71e4d","#060fbf","#1d43c6","#eef5f9","#c3d5e1","#f2f2f2","#fcf8f3"],m={body:1,eye:2,nosemouth:2,ear:2},w="/avatar-generator",b="components",x=256;function S(t){var e=0;if(0==(null==t?void 0:t.length))return e;t=t.toLowerCase();for(var r=0;r<t.length;r++){e=(e<<5)-e+t.charCodeAt(r),e&=e}return Math.abs(e)}function k(t){var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e?[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]:null}function E(t,e,r){var n=[t,e,r].map((function(t){return(t/=255)<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}));return.2126*n[0]+.7152*n[1]+.0722*n[2]}function L(t,e){var r=k(t),n=k(e),o=E(r[0],r[1],r[2]),a=E(n[0],n[1],n[2]);return(Math.max(o,a)+.05)/(Math.min(o,a)+.05)}var C,A,O,j,M,R,N,T,P,_=new WeakMap,D=new WeakMap,q=new WeakMap,I=new WeakSet,G=new WeakSet,W=new WeakSet,B=new WeakSet,F=new WeakSet,z=function(){"use strict";function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),l(this,I),l(this,G),l(this,W),l(this,B),l(this,F),i(this,_,{writable:!0,value:void 0}),i(this,D,{writable:!0,value:void 0}),i(this,q,{writable:!0,value:void 0}),c(this,_,e)}var e,r,n;return e=t,(r=[{key:"getBackgroundColor",value:function(){return c(this,D,u(this,I,Y).call(this)),o(this,D)}},{key:"getBodyConfig",value:function(){var e=u(this,I,Y).call(this,3,o(this,D),["#030504"]);return c(this,q,e),{color:e,scale:u(this,W,X).call(this,t.bodyScaleRange,3)}}},{key:"getEyesConfig",value:function(){var e=u(this,I,Y).call(this,5,o(this,q)),r=u(this,G,U).call(this,"eye",5);return{color:e,scale:u(this,W,X).call(this,t.eyesScaleRange,5),distance:u(this,B,H).call(this,t.eyesDistanceRange,5),variant:r}}},{key:"getNosemouthConfig",value:function(){var e=u(this,I,Y).call(this,7,o(this,q)),r=u(this,G,U).call(this,"nosemouth",7);return{color:e,scale:u(this,W,X).call(this,t.nousemouthScaleRange,7),variant:r}}},{key:"getEarsConfig",value:function(){var e=u(this,I,Y).call(this,11,o(this,D),[o(this,q)]),r=u(this,G,U).call(this,"ear",11),n=u(this,W,X).call(this,t.earsScaleRange,11),a=u(this,B,H).call(this,t.earsRotation,11);return{color:e,scale:n,translateDeg:u(this,B,H).call(this,t.earsTranslateDegRange,11),variant:r,rotationDeg:a}}}])&&s(e.prototype,r),n&&s(e,n),t}();function Y(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,n=g;return e&&(n=n.filter((function(t){return L(t,e)>z.minColorContrastRatio}))),r&&(n=n.filter((function(t){return!r.includes(t)}))),n[u(this,F,$).call(this,t)%n.length]}function U(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=u(this,F,$).call(this,e)%m[t];return r}function X(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=100*t[0],n=100*t[1],o=r+u(this,F,$).call(this,e)%(n-r);return o/100}function H(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=t[0],n=t[1],o=r+u(this,F,$).call(this,e)%(n-r);return o}function $(t){return Math.abs(Math.round(o(this,_)/t))}f(z,"minColorContrastRatio",1.2),f(z,"bodyScaleRange",[.9,1.1]),f(z,"eyesScaleRange",[.6,.8]),f(z,"eyesDistanceRange",[48,96]),f(z,"nousemouthScaleRange",[.8,1.2]),f(z,"earsScaleRange",[.6,.8]),f(z,"earsRotation",[15,45]),f(z,"earsTranslateDegRange",[225,250]);var V,J={};function K(){return Q.apply(this,arguments)}function Q(){return(Q=r(t(v).mark((function e(){var r,n,o,a,i,c,u,l,s;return t(v).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=0;case 1:if(!(r<Object.keys(m).length)){t.next=24;break}n=Object.keys(m)[r],o=m[n],a=0;case 5:if(!(a<o)){t.next=21;break}return i="".concat(w,"/").concat(b,"/").concat(n,"_").concat(a,".svg"),t.next=9,fetch(i);case 9:return c=t.sent,t.next=12,c.text();case 12:u=t.sent,l=(new DOMParser).parseFromString(u,"text/xml").firstChild,s="svg-".concat(n,"-").concat(a),l.id=s,A.appendChild(l),J[s]=l;case 18:a++,t.next=5;break;case 21:r++,t.next=1;break;case 24:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function Z(t,e){var r=J["svg-".concat(t,"-").concat(e)];if(!r)throw"Can't find component with name svg-".concat(t,"-").concat(e);var n=r.querySelector("g").cloneNode(!0);return n.id="".concat(t,"-layer"),n}function tt(t){it(t,"scale(-1,1)")}function et(t,e){var r=e.x,n=e.y;it(t,"translate(".concat(r," ").concat(n,")"))}function rt(t,e){var r=t.querySelector("[fill]"),n=r.getBoundingClientRect(),o=function(t,e,r,n){var o=r.createSVGPoint();o.x=t,o.y=e;var a=n.getScreenCTM();return o.matrixTransform(a.inverse())}(n.x+n.width/2,n.y+n.height/2,C,r),a=o.x,i=o.y;it(r,"rotate(".concat(e," ").concat(a," ").concat(i,")"))}function nt(t,e){var r=e.color,n=e.offsetX,o=e.offsetY,a=(e.flipHorizontal,e.scale),i=t.querySelector("[fill]");i.setAttributeNS(null,"fill",r),i.setAttributeNS(null,"stroke",r),t.setAttributeNS(null,"transform-origin","center");var c=t.getBoundingClientRect(),u=c.width,l=c.height;it(t,"scale(".concat(a,")"));var s=t.getBoundingClientRect().width,f=t.getBoundingClientRect().height,h=C.getAttributeNS(null,"width"),p=C.getAttributeNS(null,"height"),d=0,v=0;return"path"===i.tagName?(d=Math.round(h/2-u/2)+(null!=n?n:0),v=Math.round(p/2-l/2)+(null!=o?o:0)):(d=Math.round(h/2)+(null!=n?n:0),v=Math.round(p/2)+(null!=o?o:0)),it(t,"translate(".concat(d,", ").concat(v,")")),{width:s,height:f}}function ot(t,e,r){return at.apply(this,arguments)}function at(){return(at=r(t(v).mark((function e(r,n,o){var a;return t(v).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=r.querySelector("[fill]"),["cx","cy","x","y"].forEach((function(t){a.hasAttributeNS(null,t)&&a.removeAttributeNS(null,t)})),C.appendChild(r);case 4:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function it(t,e){var r,n=null!==(r=t.getAttributeNS(null,"transform"))&&void 0!==r?r:"";Array.isArray(e)||(e=[e]);var o=[n].concat(d(e)).join(" ").trim();t.setAttributeNS(null,"transform",o)}function ct(t){var e=t.getBackgroundColor(),r=C.querySelector("g#background-layer rect");r.setAttributeNS(null,"fill",e),r.setAttributeNS(null,"stroke",e),bt("background")}function ut(t){return lt.apply(this,arguments)}function lt(){return(lt=r(t(v).mark((function e(r){var n,o,a;return t(v).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.getBodyConfig(),o=Z("body",0),t.next=4,ot(o);case 4:return bt("body1"),a=nt(o,{color:n.color,scale:n.scale}),bt("body2"),t.abrupt("return",a);case 8:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function st(t){return ft.apply(this,arguments)}function ft(){return(ft=r(t(v).mark((function e(r){var n,o,a,i;return t(v).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=16,o=r.getNosemouthConfig(),a=Z("nosemouth",o.variant),t.next=5,ot(a);case 5:return bt("noseMouth1"),i=nt(a,{color:o.color,scale:o.scale,offsetY:n}),bt("noseMouth2"),t.abrupt("return",i);case 9:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function ht(t){return pt.apply(this,arguments)}function pt(){return(pt=r(t(v).mark((function e(r){var n,o,a;return t(v).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Z("eye",r.variant),t.next=3,ot(n);case 3:return bt("eye1"),-24,o=Math.round(r.distance/2),a=nt(n,{color:r.color,scale:r.scale,offsetX:o,offsetY:-24}),bt("eye2"),t.abrupt("return",a);case 9:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function dt(t){return vt.apply(this,arguments)}function vt(){return(vt=r(t(v).mark((function e(r){var n,o;return t(v).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.getEyesConfig(),t.next=3,ht(n);case 3:return o=h({},n,{distance:-n.distance}),t.next=6,ht(o);case 6:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function yt(t,e,r){return gt.apply(this,arguments)}function gt(){return(gt=r(t(v).mark((function e(r,n,o){var a,i,c,u,l,s,f,h;return t(v).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=-24,i=Z("ear",r.variant),t.next=4,ot(i);case 4:return bt("ear1"),o&&(tt(i),bt("ear2")),c=nt(i,{color:r.color,scale:r.scale,flipHorizontal:o}),bt("ear3"),u=r.translateDeg,l=Math.PI/180*u,s=(n+c.width/2)/r.scale*Math.cos(l),f=((n+c.height/2)/r.scale+a)*Math.sin(l),o&&(s=-s),et(i,{x:s,y:f}),bt("ear4"),270,h=r.translateDeg-270,o&&(h=-h),rt(i,h),bt("ear5"),t.abrupt("return",c);case 21:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function mt(t,e){return wt.apply(this,arguments)}function wt(){return(wt=r(t(v).mark((function e(r,n){var o,a,i,c;return t(v).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=r.getEarsConfig(),a=Math.round(n.width/2),t.next=4,yt(o,a,!1);case 4:return 270,i=o.translateDeg+2*(270-o.translateDeg),c=h({},o,{translateDeg:i}),t.next=9,yt(c,a,!0);case 9:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function bt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=document.createElement("div");e.classList.add("snapshot");var r=C.cloneNode(!0);e.append(r,t),O.prepend(e)}function xt(){var t=P.toDataURL();R.download="avatar",R.href=t,R.click(),R.href=null}function St(t){V=S(t),T.value=V,Ot()}function kt(){var t=crypto.randomUUID();N.value=t,St(t)}function Et(t){var e,r;St(null!==(r=null==t||null===(e=t.currentTarget)||void 0===e?void 0:e.value)&&void 0!==r?r:"")}function Lt(){var t;document.querySelector("#stageWrapper"),C=document.querySelector("#stageSvg"),A=document.querySelector("#componentContainer"),O=document.querySelector("#snapshotContainer"),j=document.querySelector("#btnDownloadAvatar"),M=document.querySelector("#btnRandomInput"),R=document.querySelector("#downloader"),N=document.querySelector("#inputText"),T=document.querySelector("#hash"),P=document.querySelector("#canvasPreview");var e=null!==(t=window.location.search?window.location.search.substring(1):void 0)&&void 0!==t?t:"29055dff-42b8-41fc-b017-c8f589a6799e";N.value=e,V=S(N.value),T.value=V,P.width=x,P.height=x,j.addEventListener("click",xt),M.addEventListener("click",kt),N.addEventListener("change",Et)}function Ct(){return At.apply(this,arguments)}function At(){return(At=r(t(v).mark((function e(){var r,n,o,a,i,c;return t(v).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=new Image,n=function(t){return r.onload=function(){P.getContext("2d").drawImage(r,0,0,x,x),r.onload=null,t()}},o=new Promise((function(t){return n(t)})),a=(new XMLSerializer).serializeToString(C),i=window.btoa(a),"data:image/svg+xml;base64,",c="data:image/svg+xml;base64,"+i,r.src=c,t.abrupt("return",o);case 9:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function Ot(){return jt.apply(this,arguments)}function jt(){return(jt=r(t(v).mark((function e(){var r,n;return t(v).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return Rt(),ct(r=new z(V)),t.next=5,ut(r);case 5:return n=t.sent,t.next=8,dt(r);case 8:return t.next=10,st(r);case 10:return t.next=12,mt(r,n);case 12:Ct();case 13:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function Mt(){return(Mt=r(t(v).mark((function e(){return t(v).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return Lt(),t.next=3,K();case 3:Ot();case 4:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function Rt(){Array.from(C.children).filter((function(t){return"background-layer"!==t.id})).forEach((function(t){return t.remove()})),Array.from(O.children).forEach((function(t){return t.remove()}))}window.onload=function(){return Mt.apply(this,arguments)}}();
//# sourceMappingURL=index.08068733.js.map