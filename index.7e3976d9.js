function t(t,e,n){if(!e.has(t))throw new TypeError("attempted to "+n+" private field on non-instance");return e.get(t)}function e(e,n){return function(t,e){return e.get?e.get.call(t):e.value}(e,t(e,n,"get"))}function n(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function a(t,e,a){n(t,e),e.set(t,a)}function o(e,n,a){return function(t,e,n){if(e.set)e.set.call(t,n);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=n}}(e,t(e,n,"set"),a),a}function r(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return n}function i(t,e){n(t,e),e.add(t)}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const c=["#11133c","#f9ead4","#030504","#ffffff","#79fe9d","#f9a86f","#f71e4d","#060fbf","#1d43c6","#eef5f9","#c3d5e1","#f2f2f2","#fcf8f3"],s={body:1,eye:2,nosemouth:2,ear:2};function u(t){let e=0;if(0==(null==t?void 0:t.length))return e;t=t.toLowerCase();for(let n=0;n<t.length;n++){e=(e<<5)-e+t.charCodeAt(n),e&=e}return Math.abs(e)}function h(t){var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e?[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]:null}function f(t,e,n){var a=[t,e,n].map((function(t){return(t/=255)<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}));return.2126*a[0]+.7152*a[1]+.0722*a[2]}var d=new WeakMap,g=new WeakMap,w=new WeakMap,y=new WeakSet,v=new WeakSet,m=new WeakSet,S=new WeakSet,b=new WeakSet;class p{getBackgroundColor(){return o(this,g,r(this,y,C).call(this)),e(this,g)}getBodyConfig(){const t=r(this,y,C).call(this,3,e(this,g),["#030504"]);o(this,w,t);return{color:t,scale:r(this,m,M).call(this,p.bodyScaleRange,3)}}getEyesConfig(){const t=r(this,y,C).call(this,5,e(this,w)),n=r(this,v,R).call(this,"eye",5);return{color:t,scale:r(this,m,M).call(this,p.eyesScaleRange,5),distance:r(this,S,k).call(this,p.eyesDistanceRange,5),variant:n}}getNosemouthConfig(){const t=r(this,y,C).call(this,7,e(this,w)),n=r(this,v,R).call(this,"nosemouth",7);return{color:t,scale:r(this,m,M).call(this,p.nousemouthScaleRange,7),variant:n}}getEarsConfig(){const t=r(this,y,C).call(this,11,e(this,g),[e(this,w)]),n=r(this,v,R).call(this,"ear",11),a=r(this,m,M).call(this,p.earsScaleRange,11),o=r(this,S,k).call(this,p.earsRotation,11);return{color:t,scale:a,translateDeg:r(this,S,k).call(this,p.earsTranslateDegRange,11),variant:n,rotationDeg:o}}constructor(t){i(this,y),i(this,v),i(this,m),i(this,S),i(this,b),a(this,d,{writable:!0,value:void 0}),a(this,g,{writable:!0,value:void 0}),a(this,w,{writable:!0,value:void 0}),o(this,d,t)}}function C(t=1,e,n){let a=c;return e&&(a=a.filter((t=>{return n=e,a=h(t),o=h(n),r=f(a[0],a[1],a[2]),i=f(o[0],o[1],o[2]),(Math.max(r,i)+.05)/(Math.min(r,i)+.05)>p.minColorContrastRatio;var n,a,o,r,i}))),n&&(a=a.filter((t=>!n.includes(t)))),a[r(this,b,$).call(this,t)%a.length]}function R(t,e=1){return r(this,b,$).call(this,e)%s[t]}function M(t,e=1){const n=100*t[0],a=100*t[1];return(n+r(this,b,$).call(this,e)%(a-n))/100}function k(t,e=1){const n=t[0],a=t[1];return n+r(this,b,$).call(this,e)%(a-n)}function $(t){return Math.abs(Math.round(e(this,d)/t))}let x,A,D,N,q,E,T,W,B;l(p,"minColorContrastRatio",1.2),l(p,"bodyScaleRange",[.9,1.1]),l(p,"eyesScaleRange",[.6,.8]),l(p,"eyesDistanceRange",[48,96]),l(p,"nousemouthScaleRange",[.8,1.2]),l(p,"earsScaleRange",[.6,.8]),l(p,"earsRotation",[15,45]),l(p,"earsTranslateDegRange",[225,250]);const I={};function L(t,e){const n=I[`svg-${t}-${e}`];if(!n)throw`Can't find component with name svg-${t}-${e}`;const a=n.querySelector("g").cloneNode(!0);return a.id=`${t}-layer`,a}function P(t,e){const{color:n,offsetX:a,offsetY:o,flipHorizontal:r}=e,{scale:i}=e,l=t.querySelector("[fill]");l.setAttributeNS(null,"fill",n),l.setAttributeNS(null,"stroke",n),t.setAttributeNS(null,"transform-origin","center");const c=t.getBoundingClientRect(),s=c.width,u=c.height;z(t,`scale(${i})`);const h=t.getBoundingClientRect().width,f=t.getBoundingClientRect().height,d=A.getAttributeNS(null,"width"),g=A.getAttributeNS(null,"height");let w=0,y=0;return"path"===l.tagName?(w=Math.round(d/2-s/2)+(null!=a?a:0),y=Math.round(g/2-u/2)+(null!=o?o:0)):(w=Math.round(d/2)+(null!=a?a:0),y=Math.round(g/2)+(null!=o?o:0)),z(t,`translate(${w}, ${y})`),{width:h,height:f}}async function j(t,e,n){const a=t.querySelector("[fill]");["cx","cy","x","y"].forEach((t=>{a.hasAttributeNS(null,t)&&a.removeAttributeNS(null,t)})),A.appendChild(t)}function z(t,e){var n;let a=null!==(n=t.getAttributeNS(null,"transform"))&&void 0!==n?n:"";Array.isArray(e)||(e=[e]);const o=[a,...e].join(" ").trim();t.setAttributeNS(null,"transform",o)}async function O(t){const e=L("eye",t.variant);await j(e);const n=Math.round(t.distance/2);return P(e,{color:t.color,scale:t.scale,offsetX:n,offsetY:-24})}async function U(t,e,n){const a=L("ear",t.variant);await j(a),n&&z(a,"scale(-1,1)");const o=P(a,{color:t.color,scale:t.scale,flipHorizontal:n}),r=t.translateDeg,i=Math.PI/180*r;let l=(e+o.width/2)/t.scale*Math.cos(i);n&&(l=-l),function(t,e){const{x:n,y:a}=e;z(t,`translate(${n} ${a})`)}(a,{x:l,y:((e+o.height/2)/t.scale-24)*Math.sin(i)});let c=t.translateDeg-270;return n&&(c=-c),function(t,e){const n=t.querySelector("[fill]"),a=n.getBoundingClientRect(),o=function(t,e,n,a){var o=A.createSVGPoint();o.x=t,o.y=e;var r=a.getScreenCTM();return o.matrixTransform(r.inverse())}(a.x+a.width/2,a.y+a.height/2,0,n);z(n,`rotate(${e} ${o.x} ${o.y})`)}(a,c),o}let X;function Y(){const t=B.toDataURL();E.download="avatar",E.href=t,E.click(),E.href=null}function H(t){X=u(t),W.value=X,J()}function F(){const t=crypto.randomUUID();T.value=t,H(t)}function G(t){var e,n;H(null!==(n=null==t||null===(e=t.currentTarget)||void 0===e?void 0:e.value)&&void 0!==n?n:"")}function V(){var t;x=document.querySelector("#stageWrapper"),A=document.querySelector("#stageSvg"),D=document.querySelector("#componentContainer"),N=document.querySelector("#btnDownloadAvatar"),q=document.querySelector("#btnRandomInput"),E=document.querySelector("#downloader"),T=document.querySelector("#inputText"),W=document.querySelector("#hash"),B=document.querySelector("#canvasPreview");const e=null!==(t=window.location.search?window.location.search.substring(1):void 0)&&void 0!==t?t:"29055dff-42b8-41fc-b017-c8f589a6799e";T.value=e,X=u(T.value),W.value=X,B.width=256,B.height=256,N.addEventListener("click",Y),q.addEventListener("click",F),T.addEventListener("change",G)}async function _(){const t=new Image,e=new Promise((e=>(e=>t.onload=()=>{B.getContext("2d").drawImage(t,0,0,256,256),t.onload=null,e()})(e))),n=(new XMLSerializer).serializeToString(A),a="data:image/svg+xml;base64,"+window.btoa(n);return t.src=a,e}async function J(){Array.from(A.children).filter((t=>"background-layer"!==t.id)).forEach((t=>t.remove()));const t=new p(X);!function(t){const e=t.getBackgroundColor(),n=A.querySelector("g#background-layer rect");n.setAttributeNS(null,"fill",e),n.setAttributeNS(null,"stroke",e)}(t);const e=await async function(t){const e=t.getBodyConfig(),n=L("body",0);return await j(n),P(n,{color:e.color,scale:e.scale})}(t);await async function(t){const e=t.getEyesConfig();await O(e);const n={...e,distance:-e.distance};await O(n)}(t),await async function(t){const e=t.getNosemouthConfig(),n=L("nosemouth",e.variant);return await j(n),P(n,{color:e.color,scale:e.scale,offsetY:16})}(t),await async function(t,e){const n=t.getEarsConfig(),a=Math.round(e.width/2);await U(n,a,!1);const o=n.translateDeg+2*(270-n.translateDeg),r={...n,translateDeg:o};await U(r,a,!0)}(t,e),_()}window.onload=async function(){V(),await async function(){for(let n=0;n<Object.keys(s).length;n++){var t=Object.keys(s)[n],e=s[t];for(let n=0;n<e;n++){const e=`/avatar-generator/components/${t}_${n}.svg`,a=await fetch(e),o=await a.text(),r=(new DOMParser).parseFromString(o,"text/xml").firstChild,i=`svg-${t}-${n}`;r.id=i,D.appendChild(r),I[i]=r}}}(),J()};
//# sourceMappingURL=index.7e3976d9.js.map
