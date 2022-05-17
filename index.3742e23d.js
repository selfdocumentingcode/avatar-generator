function t(t,e,n){if(!e.has(t))throw new TypeError("attempted to "+n+" private field on non-instance");return e.get(t)}function e(e,n){return function(t,e){return e.get?e.get.call(t):e.value}(e,t(e,n,"get"))}function n(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function a(t,e,a){n(t,e),e.set(t,a)}function o(e,n,a){return function(t,e,n){if(e.set)e.set.call(t,n);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=n}}(e,t(e,n,"set"),a),a}function r(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return n}function i(t,e){n(t,e),e.add(t)}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const s=["#11133c","#f9ead4","#030504","#ffffff","#79fe9d","#f9a86f","#f71e4d","#060fbf","#1d43c6","#eef5f9","#c3d5e1","#f2f2f2","#fcf8f3"],c={body:1,eye:2,nosemouth:2,ear:2};var u=new WeakMap,h=new WeakMap,f=new WeakMap,d=new WeakSet,g=new WeakSet,w=new WeakSet,y=new WeakSet,v=new WeakSet;class m{getBackgroundColor(){return o(this,h,r(this,d,S).call(this)),e(this,h)}getBodyConfig(){const t=r(this,d,S).call(this,3,[e(this,h),"#030504"]);o(this,f,t);return{color:t,scale:r(this,w,p).call(this,m.bodyScaleRange,3)}}getEyesConfig(){const t=r(this,d,S).call(this,5,[e(this,f)]),n=r(this,g,b).call(this,"eye",5);return{color:t,scale:r(this,w,p).call(this,m.eyesScaleRange,5),distance:r(this,y,C).call(this,m.eyesDistanceRange,5),variant:n}}getNosemouthConfig(){const t=r(this,d,S).call(this,7,[e(this,f)]),n=r(this,g,b).call(this,"nosemouth",7);return{color:t,scale:r(this,w,p).call(this,m.nousemouthScaleRange,7),variant:n}}getEarsConfig(){const t=r(this,d,S).call(this,11,[e(this,f),e(this,h)]),n=r(this,g,b).call(this,"ear",11),a=r(this,w,p).call(this,m.earsScaleRange,11),o=r(this,y,C).call(this,m.earsRotation,11);return{color:t,scale:a,translateDeg:r(this,y,C).call(this,m.earsTranslateDegRange,11),variant:n,rotation:o}}constructor(t){i(this,d),i(this,g),i(this,w),i(this,y),i(this,v),a(this,u,{writable:!0,value:void 0}),a(this,h,{writable:!0,value:void 0}),a(this,f,{writable:!0,value:void 0}),o(this,u,t)}}function S(t=1,e){const n=e?s.filter((t=>!e.includes(t))):s;return n[r(this,v,N).call(this,t)%n.length]}function b(t,e=1){return r(this,v,N).call(this,e)%c[t]}function p(t,e=1){const n=100*t[0],a=100*t[1];return(n+r(this,v,N).call(this,e)%(a-n))/100}function C(t,e=1){const n=t[0],a=t[1];return n+r(this,v,N).call(this,e)%(a-n)}function N(t){return Math.abs(Math.round(e(this,u)/t))}function k(t){let e=0;if(0==(null==t?void 0:t.length))return e;t=t.toLowerCase();for(let n=0;n<t.length;n++){e=(e<<5)-e+t.charCodeAt(n),e&=e}return Math.abs(e)}let A,R,M,$,q,x,D,E,T;l(m,"bodyScaleRange",[.9,1.1]),l(m,"eyesScaleRange",[.6,.8]),l(m,"eyesDistanceRange",[48,96]),l(m,"nousemouthScaleRange",[.8,1.2]),l(m,"earsScaleRange",[.6,.8]),l(m,"earsRotation",[15,45]),l(m,"earsTranslateDegRange",[225,250]);const W={};function B(t,e){const n=W[`svg-${t}-${e}`];if(!n)throw`Can't find component with name svg-${t}-${e}`;const a=n.querySelector("g").cloneNode(!0);return a.id=`${t}-layer`,a}async function P(t){const e=B("eye",t.variant);await O(e);const n=Math.round(t.distance/2);return j(e,{color:t.color,scale:t.scale,offsetX:n,offsetY:-24})}async function L(t,e){const n=B("ear",t.variant);await O(n);const a=j(n,{color:t.color,scale:t.scale}),o=t.translateDeg,r=Math.PI/180*o;!function(t,e){const{x:n,y:a}=e;var o;let r=null!==(o=t.getAttributeNS(null,"transform"))&&void 0!==o?o:"";r+=` translate(${n} ${a})`,t.setAttributeNS(null,"transform",r.trim())}(n,{x:(e+a.width/2)/t.scale*Math.cos(r),y:(e+a.height/2)/t.scale*Math.sin(r)});return function(t,e){const n=t.querySelector("[fill]");var a;let o=null!==(a=n.getAttributeNS(null,"transform"))&&void 0!==a?a:"";const r=n.getBoundingClientRect(),i=r.x+r.width/2,l=r.y+r.height/2,s=function(t,e,n,a){var o=n.createSVGPoint();o.x=t,o.y=e;var r=a.getScreenCTM();return o.matrixTransform(r.inverse())}(i,l,R,n),c=s.x,u=s.y;o+=` rotate(${e} ${c} ${u})`,n.setAttributeNS(null,"transform",o.trim())}(n,t.translateDeg-270),a}function j(t,e){const{color:n,offsetX:a,offsetY:o}=e,{scale:r}=e,i=t.querySelector("[fill]");i.setAttributeNS(null,"fill",n),i.setAttributeNS(null,"stroke",n),t.setAttributeNS(null,"transform-origin","center");const l=t.getBoundingClientRect();var s;let c=null!==(s=t.getAttributeNS(null,"transform"))&&void 0!==s?s:"";c+=` scale(${r})`;const u=l.width,h=l.height;t.setAttributeNS(null,"transform",c);const f=t.getBoundingClientRect().width,d=t.getBoundingClientRect().height,g=R.getAttributeNS(null,"width"),w=R.getAttributeNS(null,"height");let y=0,v=0;return"path"===i.tagName?(y=Math.round(g/2-u/2)+(null!=a?a:0),v=Math.round(w/2-h/2)+(null!=o?o:0)):(y=Math.round(g/2)+(null!=a?a:0),v=Math.round(w/2)+(null!=o?o:0)),c+=` translate(${y} ${v})`,t.setAttributeNS(null,"transform",c.trim()),{width:f,height:d}}async function O(t,e,n){const a=t.querySelector("[fill]");["cx","cy","x","y"].forEach((t=>{a.hasAttributeNS(null,t)&&a.removeAttributeNS(null,t)})),R.appendChild(t)}let z;function I(){const t=D.src;x.href=t,x.click(),x.href=null}function X(t){z=k(t),T.value=z,G()}function Y(){const t=crypto.randomUUID();E.value=t,X(t)}function U(t){var e,n;X(null!==(n=null==t||null===(e=t.currentTarget)||void 0===e?void 0:e.value)&&void 0!==n?n:"")}function F(){var t;A=document.querySelector("#stageWrapper"),R=document.querySelector("#stageSvg"),M=document.querySelector("#componentContainer"),$=document.querySelector("#btnDownloadAvatar"),q=document.querySelector("#btnRandomInput"),x=document.querySelector("#downloader"),D=document.querySelector("#avatarPreview"),E=document.querySelector("#inputText"),T=document.querySelector("#hash");const e=null!==(t=window.location.search?window.location.search.substring(1):void 0)&&void 0!==t?t:"6b63bc2e-2984-4da2-b7a9-b9fe671ce986";E.value=e,z=k(E.value),T.value=z,$.addEventListener("click",I),q.addEventListener("click",Y),E.addEventListener("change",U)}async function G(){Array.from(R.children).filter((t=>"background-layer"!==t.id)).forEach((t=>t.remove()));const t=new m(z);!function(t){const e=t.getBackgroundColor(),n=R.querySelector("g#background-layer rect");n.setAttributeNS(null,"fill",e),n.setAttributeNS(null,"stroke",e)}(t);const e=await async function(t){const e=t.getBodyConfig(),n=B("body",0);return await O(n),j(n,{color:e.color,scale:e.scale})}(t);await async function(t){const e=t.getEyesConfig();await P(e);const n={...e,distance:-e.distance};await P(n)}(t),await async function(t){const e=t.getNosemouthConfig(),n=B("nosemouth",e.variant);return await O(n),j(n,{color:e.color,scale:e.scale,offsetY:16})}(t),await async function(t,e){const n=t.getEarsConfig(),a=Math.round(e.width/2);await L(n,a);const o=n.translateDeg+2*(270-n.translateDeg),r=-n.rotation,i={...n,translateDeg:o,rotation:r};await L(i,a)}(t,e),async function(){D.src=null;const t=(new XMLSerializer).serializeToString(R),e="data:image/svg+xml;base64,"+btoa(t),n=new Promise((t=>D.onload=t));D.src=e}()}window.onload=async function(){F(),await async function(){for(let n=0;n<Object.keys(c).length;n++){var t=Object.keys(c)[n],e=c[t];for(let n=0;n<e;n++){const e=`/avatar-generator/components/${t}_${n}.svg`,a=await fetch(e),o=await a.text(),r=(new DOMParser).parseFromString(o,"text/xml").firstChild,i=`svg-${t}-${n}`;r.id=i,M.appendChild(r),W[i]=r}}}(),G()};
//# sourceMappingURL=index.3742e23d.js.map
