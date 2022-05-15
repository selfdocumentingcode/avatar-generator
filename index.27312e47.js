function t(t,e,n){if(!e.has(t))throw new TypeError("attempted to "+n+" private field on non-instance");return e.get(t)}function e(e,n){return function(t,e){return e.get?e.get.call(t):e.value}(e,t(e,n,"get"))}function n(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function a(t,e,a){n(t,e),e.set(t,a)}function i(e,n,a){return function(t,e,n){if(e.set)e.set.call(t,n);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=n}}(e,t(e,n,"set"),a),a}function o(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return n}function c(t,e){n(t,e),e.add(t)}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const s=["#11133c","#f9ead4","#030504","#ffffff","#79fe9d","#f9a86f","#f71e4d","#060fbf","#1d43c6","#eef5f9","#c3d5e1","#f2f2f2","#fcf8f3"],l={body:1,eye:2,nosemouth:2,ear:2};var h=new WeakMap,u=new WeakMap,d=new WeakMap,f=new WeakSet,g=new WeakSet,w=new WeakSet,v=new WeakSet,y=new WeakSet;class m{getBackgroundColor(){return i(this,u,o(this,f,S).call(this)),e(this,u)}getBodyConfig(){const t=o(this,f,S).call(this,3,[e(this,u),"#030504"]);i(this,d,t);return{color:t,scale:o(this,w,p).call(this,m.bodyScaleRange,3)}}getEyesConfig(){const t=o(this,f,S).call(this,5,[e(this,d)]),n=o(this,g,b).call(this,"eye",5);return{color:t,scale:o(this,w,p).call(this,m.eyesScaleRange,5),distance:o(this,v,R).call(this,m.eyesDistanceRange,5),variant:n}}getNosemouthConfig(){const t=o(this,f,S).call(this,7,[e(this,d)]),n=o(this,g,b).call(this,"nosemouth",7);return{color:t,scale:o(this,w,p).call(this,m.nousemouthScaleRange,7),variant:n}}getEarsConfig(){const t=o(this,f,S).call(this,11,[e(this,d),e(this,u)]),n=o(this,g,b).call(this,"ear",11),a=o(this,w,p).call(this,m.earsScaleRange,11),i=o(this,v,R).call(this,m.earsRotation,11);return{color:t,scale:a,translateDeg:o(this,v,R).call(this,m.earsTranslateDegRange,11),variant:n,rotation:i}}constructor(t){c(this,f),c(this,g),c(this,w),c(this,v),c(this,y),a(this,h,{writable:!0,value:void 0}),a(this,u,{writable:!0,value:void 0}),a(this,d,{writable:!0,value:void 0}),i(this,h,t)}}function S(t=1,e){const n=e?s.filter((t=>!e.includes(t))):s;return n[o(this,y,C).call(this,t)%n.length]}function b(t,e=1){return o(this,y,C).call(this,e)%l[t]}function p(t,e=1){const n=100*t[0],a=100*t[1];return(n+o(this,y,C).call(this,e)%(a-n))/100}function R(t,e=1){const n=t[0],a=t[1];return n+o(this,y,C).call(this,e)%(a-n)}function C(t){return Math.abs(Math.round(e(this,h)/t))}function k(t){let e=0;if(0==(null==t?void 0:t.length))return e;t=t.toLowerCase();for(let n=0;n<t.length;n++){e=(e<<5)-e+t.charCodeAt(n),e&=e}return Math.abs(e)}let D,q,M,E,$,T,W,N,A,L,x,P;r(m,"bodyScaleRange",[.9,1.1]),r(m,"eyesScaleRange",[.6,.8]),r(m,"eyesDistanceRange",[24,48]),r(m,"nousemouthScaleRange",[.8,1.2]),r(m,"earsScaleRange",[.6,.8]),r(m,"earsRotation",[15,45]),r(m,"earsTranslateDegRange",[225,250]);const j={};function B(){const t=E.toDataURL("image/png");W.href=t,W.click(),W.href=null}function I(t){x=k(t),L.value=x,J()}function O(){const t=crypto.randomUUID();A.value=t,I(t)}function U(t){var e,n;I(null!==(n=null==t||null===(e=t.currentTarget)||void 0===e?void 0:e.value)&&void 0!==n?n:"")}function z(){var t;const e=null!==(t=window.location.search?window.location.search.substring(1):void 0)&&void 0!==t?t:"7e4ef0cc-cce3-4c61-be83-7091185d75d2";A.value=e,x=k(A.value),L.value=x,E.width=256,E.height=256,P=E.getContext("2d"),$.addEventListener("click",B),T.addEventListener("click",O),A.addEventListener("change",U)}async function H(t){_(`eye-${t.variant}`);const e=G({color:t.color,scale:t.scale}),n=E.width/2-e.width/2-t.distance,a=E.height/2-e.height/2-24;await X(n,a)}async function F(t,e){_(`ear-${t.variant}`);const n=t.translateDeg-270,a=G({color:t.color,scale:t.scale,rotation:n}),i=E.width/2-a.width/2,o=E.height/2-a.height/2,c=t.translateDeg,r=Math.PI/180*c,s=i+(e+a.width/2)*Math.cos(r),l=o+(e+a.height/2)*Math.sin(r);await X(s,l)}async function X(t,e){const n=M.children[0],a=(new XMLSerializer).serializeToString(n);await async function(t){q.src=null;var e="data:image/svg+xml;base64,"+btoa(t);const n=new Promise((t=>q.onload=t));return q.src=e,n}(a),P.drawImage(q,t,e),function(){const t=E.toDataURL("image/png");N.src=t}()}function _(t){M.innerHTML="";const e=j[`svg-${t}`].cloneNode(!0);e.id="svg-clone",M.appendChild(e)}function G(t){const e=t.color,n=t.scale,a=t.rotation,i=document.querySelector("#svg-clone"),o=i.querySelector("[fill]");o.setAttributeNS(null,"fill",e),o.setAttributeNS(null,"stroke",e);const c=i.querySelector("g");var r;let s=null!==(r=c.getAttributeNS(null,"transform"))&&void 0!==r?r:"";if(s+=` scale(${n})`,a){s+=` rotate(${a} ${i.clientWidth/2} ${i.clientHeight/2})`}c.setAttributeNS(null,"transform",s);const l=i.clientWidth*n,h=i.clientHeight*n;return i.setAttributeNS(null,"width",l),i.setAttributeNS(null,"height",h),{width:l,height:h}}async function J(){const t=new m(x);!function(t){const e=t.getBackgroundColor();P.fillStyle=e,P.fillRect(0,0,E.width,E.height)}(t);const e=await async function(t){const e=t.getBodyConfig();_("body-0");const n=G({color:e.color,scale:e.scale}),a=E.width/2-n.width/2,i=E.height/2-n.height/2;return await X(a,i),n}(t);await async function(t){const e=t.getEyesConfig();await H(e);const n={...e,distance:-e.distance};await H(n)}(t),await async function(t){const e=t.getNosemouthConfig();_(`nosemouth-${e.variant}`);const n=G({color:e.color,scale:e.scale}),a=E.width/2-n.width/2,i=E.height/2-n.height/2+8;await X(a,i)}(t),await async function(t,e){const n=t.getEarsConfig(),a=Math.round(e.width/2);await F(n,a);const i=n.translateDeg+2*(270-n.translateDeg),o=-n.rotation,c={...n,translateDeg:i,rotation:o};await F(c,a)}(t,e)}window.onload=async function(){D=document.querySelector("#componentContainer"),q=document.querySelector("#imgRenderer"),M=document.querySelector("#svgEditor"),$=document.querySelector("#btnDownloadAvatar"),T=document.querySelector("#btnRandomInput"),W=document.querySelector("#downloader"),N=document.querySelector("#avatarPreview"),A=document.querySelector("#inputText"),L=document.querySelector("#hash"),E=document.querySelector("#canvas"),z(),await async function(){for(let n=0;n<Object.keys(l).length;n++){var t=Object.keys(l)[n],e=l[t];for(let n=0;n<e;n++){const e=`/avatar-generator/components/${t}_${n}.svg`,a=await fetch(e),i=await a.text(),o=(new DOMParser).parseFromString(i,"text/xml").firstChild,c=`svg-${t}-${n}`;o.id=c,D.appendChild(o),j[c]=o}}}(),J()};
//# sourceMappingURL=index.27312e47.js.map
