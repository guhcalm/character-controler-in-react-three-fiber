(()=>{"use strict";var e,r={544:(e,r,t)=>{var n=t(745),o=t(294),a=t(893);const i=function(e){var r=e.children;return(0,a.jsx)(A.Provider,{value:(0,o.useReducer)(k,S),children:r})};var c,u;!function(e){e[e.LIGHT=0]="LIGHT",e[e.DARK=1]="DARK"}(c||(c={})),function(e){e[e.SWITCH_THEME=0]="SWITCH_THEME"}(u||(u={}));var l,s=t(804);const f=(0,s.vJ)(l||(p=["\n    *,\n    *::before,\n    *::after {\n        margin: 0;\n        padding: 0;\n        border: 0;\n        box-sizing: border-box;\n    }\n\n    ::-webkit-scrollbar {\n        width: 0px;\n    }\n\n    body,\n    #root {\n        width: 100vw;\n        height: 100vh;\n        max-width: 100vw;\n        display: flex;\n        justify-content: center;\n        align-items: flex-start;\n    }\n\n"],d||(d=p.slice(0)),l=Object.freeze(Object.defineProperties(p,{raw:{value:Object.freeze(d)}}))));var p,d;const y={name:c.DARK,palette:{background:{main:"black",on:""},primary:{main:"",on:"",light:"",dark:""},secondary:{main:"",on:"",light:"",dark:""}}},m={name:c.LIGHT,palette:{background:{main:"white",on:""},primary:{main:"",on:"",light:"",dark:""},secondary:{main:"",on:"",light:"",dark:""}}};function b(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function h(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?b(Object(t),!0).forEach((function(r){g(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function g(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}c.LIGHT;var v=c.DARK,w=u.SWITCH_THEME,j=m,O=y;const x={dispatchers:{switchTheme:function(){return{type:w}}},reducers:function(e,r){return g({},w,(function(){return h(h({},e),{},{theme:e.theme.name===v?j:O})}))}},S={theme:m},k=function(e,r){return x.reducers(e,r)[r.type]};var P=x.dispatchers,A=(0,o.createContext)(null),E=t(240),M=t(629),V=t(477),D=t(666),T=t(217),I=t(854);function _(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var n,o,a=[],i=!0,c=!1;try{for(t=t.call(e);!(i=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==t.return||t.return()}finally{if(c)throw o}}return a}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return C(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return C(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function K(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function L(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?K(Object(t),!0).forEach((function(r){R(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):K(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function R(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function H(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var n,o,a=[],i=!0,c=!1;try{for(t=t.call(e);!(i=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==t.return||t.return()}finally{if(c)throw o}}return a}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return z(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return z(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function z(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var G={KeyW:!1,KeyS:!1,KeyA:!1,KeyD:!1};addEventListener("keydown",(function(e){var r=e.code;return G[r]=!0})),addEventListener("keyup",(function(e){var r=e.code;return G[r]=!1}));var F=function(e,r){return(new V.Quaternion).copy(r).setFromAxisAngle(new V.Vector3(0,1,0),e)},U=function(e,r){return r.filter((function(r){var t=r.object;return t instanceof V.Mesh&&t.name!==e}))[0]},W=[{direction:"towards",lookAt:new V.Vector3(0,0,1)},{direction:"backwards",lookAt:new V.Vector3(0,0,-1)}],Q={clicked:!1};addEventListener("pointerdown",(function(){return Q.clicked=!0})),addEventListener("pointerup",(function(){return Q.clicked=!1}));const q=function(e,r,t,n){var a=H((0,o.useState)(new V.Vector3),2),i=a[0],c=a[1],u=H((0,o.useState)(new V.Quaternion),2),l=u[0],s=u[1],f=H((0,o.useState)(null),2),p=f[0],d=f[1];!function(e){(0,M.x)((function(){G.KeyA&&e((function(e){return e.multiply(F(.05,e))})),G.KeyD&&e((function(e){return e.multiply(F(-.05,e))}))}))}(s);var y=function(e,r,t,n,a,i){var c=H((0,o.useState)({towards:new V.Vector3,backwards:new V.Vector3}),2),u=c[0],l=c[1],s=H((0,o.useState)({towards:!1,backwards:!1}),2),f=s[0],p=s[1];return(0,M.x)((function(o){var c=o.raycaster,s=o.scene;G.KeyW&&a((function(e){return e.add(u.towards)})),G.KeyS&&a((function(e){return e.add(u.backwards)}));var d=(new V.Vector3).copy(t).add(n);W.forEach((function(t){var o=t.direction,a=t.lookAt,u=(new V.Vector3).copy(a).applyQuaternion(i);c.far=.5,c.set(d,u);var y=U(e,c.intersectObject(s));p(y?function(e){return L(L({},e),{},R({},o,!1))}:function(e){return L(L({},e),{},R({},o,!0))}),c.far=10,c.set(d,(new V.Vector3).copy(n).add(u).sub(d).normalize());var m=U(e,c.intersectObject(s));m&&f[o]?l((function(e){return L(L({},e),{},R({},o,m.point.sub(n).normalize().multiplyScalar(r)))})):l((function(e){return L(L({},e),{},R({},o,new V.Vector3))}))}))})),{nextMoviment:u}}(e,r,t,i,c,l),m=y.nextMoviment,b=function(e,r,t,n){var a=H((0,o.useState)(new V.Vector3),2),i=a[0],c=a[1],u=H((0,o.useState)(new V.Vector3),2),l=u[0],s=u[1];return(0,M.x)((function(o){var a=o.camera,u=o.raycaster,f=o.scene;a.position.lerp(i,.1),a.lookAt(l);var p=new V.Vector3(0,2,-2).applyQuaternion(n).add(t),d=(new V.Vector3).copy(r).add(new V.Vector3(0,0,2)).applyQuaternion(n).add(t);c((function(e){return e.lerp(p,.2)})),s((function(e){return e.lerp(d,.5)}));var y=(new V.Vector3).copy(a.position).sub(t),m=(new V.Vector3).copy(y).length(),b=(new V.Vector3).copy(r).add(t),h=y.normalize();u.far=m,u.set(b,h);var g=U(e,u.intersectObject(f));g&&c((function(e){return e.lerp(g.point,.5)}))})),{cameraPosition:i,setCameraPosition:c,cameraTarget:l,setCameraTarget:s}}(e,t,i,l),h=b.cameraPosition,g=b.cameraTarget;return function(e,r,t,n,o,a,i,c){(0,M.x)((function(o){var u=o.mouse,l=o.raycaster,s=o.camera,f=o.scene;l.far=1/0,l.setFromCamera(u,s);var p=U(e,l.intersectObject(f));if(p&&Q.clicked&&c(p.point),i){var d=(new V.Vector3).copy(i).setY(0).sub((new V.Vector3).copy(t).setY(0)),y=(new V.Vector3).copy(d).normalize(),m=d.length();a((function(e){return e.slerp((new V.Quaternion).setFromUnitVectors(new V.Vector3(0,0,1),y),.1)})),n((function(e){return e.add(r)})),m<1&&c(null)}}))}(e,m.towards,i,c,0,s,p,d),(0,M.x)((function(){return n((function(e){return e.position.copy(i),e.quaternion.copy(l),e}))})),{position:i,quaternion:l,nextMoviment:m,target:p,cameraPosition:h,cameraTarget:g}};var B={KeyW:!1,KeyS:!1,KeyA:!1,KeyD:!1};addEventListener("keydown",(function(e){var r=e.code;return B[r]=!0})),addEventListener("keyup",(function(e){var r=e.code;return B[r]=!1}));var X;const Y=s.ZP.div(X||(X=function(e,r){return r||(r=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))}(["\n  ","\n  width: 100%;\n  height: 100vh;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--background);\n  background-image: radial-gradient(circle at 0 0, red, transparent),\n    radial-gradient(circle at 100% 50%, blue, transparent),\n    radial-gradient(circle at 0 100%, yellow, transparent);\n"])),(function(e){var r=e.palette;return"\n  --background: ".concat(r.background.main,";\n  --on-background: ").concat(r.background.on,";\n  --primary: ").concat(r.primary.main,";\n  --on-primary: ").concat(r.primary.on,";\n  --primary-on-light: ").concat(r.primary.light,";\n  --primary-on-dark: ").concat(r.primary.dark,";\n  --secondary: ").concat(r.secondary.main,";\n  --on-secondary: ").concat(r.secondary.on,";\n  --secondary-on-light: ").concat(r.secondary.light,";\n  --secondary-on-dark: ").concat(r.secondary.dark,";\n  ")})),$=function(e){var r,t=e.children,n={state:(r=_((0,o.useContext)(A),2))[0],dispatch:r[1],actions:P}.state;return(0,a.jsx)(Y,{palette:n.theme.palette,"data-layout":"",children:t})};function J(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function Z(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?J(Object(t),!0).forEach((function(r){N(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):J(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function N(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function ee(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var n,o,a=[],i=!0,c=!1;try{for(t=t.call(e);!(i=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==t.return||t.return()}finally{if(c)throw o}}return a}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return re(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return re(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function re(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var te=(new D.x).load("https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/empty_warehouse_01_1k.hdr",(function(e){return e.mapping=V.EquirectangularReflectionMapping})),ne=new V.MeshStandardMaterial({color:"white",roughness:0,metalness:0}),oe=function(e){var r=e.target,t=ee((0,o.useState)(new V.Group),2),n=t[0],i=t[1],c=ee((0,o.useState)(null),2),u=(c[0],c[1]);return function(e,r){(0,M.x)((function(t){var n=t.clock;return e((function(e){if(!e)return e;e.mixer.update(n.getDelta());var t=e.actions,o=t.idle,a=t.run;return B.KeyW||B.KeyS||r?(o.weight>0&&(o.weight-=.1),a.weight<1&&(a.weight+=.1),e):(a.weight>0&&(a.weight-=.1),o.weight<1&&(o.weight+=.1),e)}))}))}(u,r),(0,o.useEffect)((function(){return(new T.E).setDRACOLoader((new I._).setDecoderPath("/examples/js/libs/draco/").setDecoderConfig({type:"js"})).load("./assets/model/model.glb",(function(e){var r=e.scene,t=e.animations;r.traverse((function(e){e instanceof V.Mesh&&(e.material.dispose(),"Beta_Surface"===e.name&&(e.material=ne),"Beta_Joints"===e.name&&(e.geometry.dispose(),e.visible=!1,e.matrixAutoUpdate=!1))}));var n=new V.AnimationMixer(r),o=n.clipAction(t[0]);o.weight=1,o.play();var a=n.clipAction(t[3]);a.weight=0,a.play(),u({mixer:n,actions:{idle:o,run:a}}),i(r)}))}),[]),(0,a.jsx)("primitive",{object:n})},ae=function(){var e=ee((0,o.useState)(null),2),r=(e[0],e[1]),t=ee((0,o.useState)(null),2),n=(t[0],t[1]),i=q("player",.1,new V.Vector3(0,.75,0),r).target;return(0,M.x)((function(){return n((function(e){return e.name="player",e.visible=!0,i?e.position.copy(i):e.visible=!1,e}))})),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("group",{ref:r,children:[(0,a.jsx)(oe,{target:i}),(0,a.jsx)("pointLight",{position:[0,.75,0],args:["red",13,2],castShadow:!0})]}),(0,a.jsxs)("mesh",{ref:n,children:[(0,a.jsx)("sphereGeometry",{args:[.2]}),(0,a.jsx)("meshPhysicalMaterial",{roughness:0,metalness:0,color:"black",clearcoat:1,clearcoatRoughness:0})]})]})},ie={geometry:new V.PlaneBufferGeometry(300,300,50,50),material:new V.MeshPhysicalMaterial({color:"white",roughness:0,metalness:0,specularIntensity:0})},ce=ie.geometry;ce.rotateX(-Math.PI/2);var ue=ce.attributes.position;new Array(ue.count).fill("").forEach((function(e,r){var t=ue.getX(r),n=ue.getZ(r);ue.setY(r,3*(Math.sin(t/10)+Math.sin(n/10)))})),ue.needsUpdate=!0,ce.computeVertexNormals();var le=function(){return(0,a.jsx)("mesh",Z(Z({},ie),{},{receiveShadow:!0,castShadow:!0,matrixAutoUpdate:!1}))},se=function(){var e,r,t,n,i;return e=(0,M.w)(),r=e.camera,t=e.scene,n=e.gl,i=e.raycaster,(0,o.useEffect)((function(){i.near=0,n.outputEncoding=V.sRGBEncoding,n.toneMapping=V.ACESFilmicToneMapping,n.toneMappingExposure=1,n.shadowMap.enabled=!0,n.physicallyCorrectLights=!0,n.setPixelRatio(.9*Math.min(devicePixelRatio,2)),t.background=new V.Color("rgb(240,195,185)"),t.environment=te,t.fog=new V.Fog("rgb(240,195,185)",0,80),r.position.set(0,2,3),r.lookAt(0,0,0),r.near=1.5,r.far=80})),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(ae,{}),(0,a.jsx)(le,{})]})},fe=function(){return(0,a.jsx)($,{children:(0,a.jsx)(o.Suspense,{children:(0,a.jsx)(E.Xz,{gl:{antialias:!0,powerPreference:"high-performance"},children:(0,a.jsx)(se,{})})})})};(0,n.s)(document.querySelector("#root")).render((0,a.jsxs)(i,{children:[(0,a.jsx)(f,{}),(0,a.jsx)(fe,{})]}))}},t={};function n(e){var o=t[e];if(void 0!==o)return o.exports;var a=t[e]={exports:{}};return r[e](a,a.exports,n),a.exports}n.m=r,e=[],n.O=(r,t,o,a)=>{if(!t){var i=1/0;for(s=0;s<e.length;s++){for(var[t,o,a]=e[s],c=!0,u=0;u<t.length;u++)(!1&a||i>=a)&&Object.keys(n.O).every((e=>n.O[e](t[u])))?t.splice(u--,1):(c=!1,a<i&&(i=a));if(c){e.splice(s--,1);var l=o();void 0!==l&&(r=l)}}return r}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[t,o,a]},n.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return n.d(r,{a:r}),r},n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={179:0};n.O.j=r=>0===e[r];var r=(r,t)=>{var o,a,[i,c,u]=t,l=0;if(i.some((r=>0!==e[r]))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(u)var s=u(n)}for(r&&r(t);l<i.length;l++)a=i[l],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(s)},t=self.webpackChunk_guhcalm_minimal_boilerplate=self.webpackChunk_guhcalm_minimal_boilerplate||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var o=n.O(void 0,[977],(()=>n(544)));o=n.O(o)})();