(()=>{"use strict";var e,r={544:(e,r,t)=>{var n=t(745),o=t(294),a=t(893);const i=function(e){var r=e.children;return(0,a.jsx)(A.Provider,{value:(0,o.useReducer)(k,S),children:r})};var c,u;!function(e){e[e.LIGHT=0]="LIGHT",e[e.DARK=1]="DARK"}(c||(c={})),function(e){e[e.SWITCH_THEME=0]="SWITCH_THEME"}(u||(u={}));var l,s=t(804);const f=(0,s.vJ)(l||(p=["\n    *,\n    *::before,\n    *::after {\n        margin: 0;\n        padding: 0;\n        border: 0;\n        box-sizing: border-box;\n    }\n\n    ::-webkit-scrollbar {\n        width: 0px;\n    }\n\n    body,\n    #root {\n        width: 100vw;\n        height: 100vh;\n        max-width: 100vw;\n        display: flex;\n        justify-content: center;\n        align-items: flex-start;\n    }\n\n"],d||(d=p.slice(0)),l=Object.freeze(Object.defineProperties(p,{raw:{value:Object.freeze(d)}}))));var p,d;const y={name:c.DARK,palette:{background:{main:"black",on:""},primary:{main:"",on:"",light:"",dark:""},secondary:{main:"",on:"",light:"",dark:""}}},b={name:c.LIGHT,palette:{background:{main:"white",on:""},primary:{main:"",on:"",light:"",dark:""},secondary:{main:"",on:"",light:"",dark:""}}};function m(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function h(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?m(Object(t),!0).forEach((function(r){g(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function g(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}c.LIGHT;var v=c.DARK,w=u.SWITCH_THEME,j=b,O=y;const x={dispatchers:{switchTheme:function(){return{type:w}}},reducers:function(e,r){return g({},w,(function(){return h(h({},e),{},{theme:e.theme.name===v?j:O})}))}},S={theme:b},k=function(e,r){return x.reducers(e,r)[r.type]};var P=x.dispatchers,A=(0,o.createContext)(null),E=t(240),M=t(629),D=t(477),T=t(666),V=t(217),_=t(854);function I(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var n,o,a=[],i=!0,c=!1;try{for(t=t.call(e);!(i=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==t.return||t.return()}finally{if(c)throw o}}return a}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return K(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return K(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function K(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function C(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function H(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?C(Object(t),!0).forEach((function(r){L(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):C(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function L(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function R(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var n,o,a=[],i=!0,c=!1;try{for(t=t.call(e);!(i=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==t.return||t.return()}finally{if(c)throw o}}return a}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return z(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return z(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function z(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var G={KeyW:!1,KeyS:!1,KeyA:!1,KeyD:!1};addEventListener("keydown",(function(e){var r=e.code;return G[r]=!0})),addEventListener("keyup",(function(e){var r=e.code;return G[r]=!1}));var W=function(e,r){return(new D.Quaternion).copy(r).setFromAxisAngle(new D.Vector3(0,1,0),e)},B=function(e,r){return r.filter((function(r){var t=r.object;return t instanceof D.Mesh&&t.name!==e}))[0]},Q=[{direction:"towards",lookAt:new D.Vector3(0,0,1)},{direction:"backwards",lookAt:new D.Vector3(0,0,-1)}];const q=function(e,r,t,n){var a=R((0,o.useState)(new D.Vector3),2),i=a[0],c=a[1],u=R((0,o.useState)(new D.Quaternion),2),l=u[0];!function(e){(0,M.x)((function(){G.KeyA&&e((function(e){return e.multiply(W(.05,e))})),G.KeyD&&e((function(e){return e.multiply(W(-.05,e))}))}))}(u[1]);var s=function(e,r,t,n,a,i){var c=R((0,o.useState)({towards:new D.Vector3,backwards:new D.Vector3}),2),u=c[0],l=c[1],s=R((0,o.useState)({towards:!1,backwards:!1}),2),f=s[0],p=s[1];return(0,M.x)((function(o){var c=o.raycaster,s=o.scene;G.KeyW&&a((function(e){return e.add(u.towards)})),G.KeyS&&a((function(e){return e.add(u.backwards)}));var d=(new D.Vector3).copy(t).add(n);Q.forEach((function(t){var o=t.direction,a=t.lookAt,u=(new D.Vector3).copy(a).applyQuaternion(i);c.far=.5,c.set(d,u);var y=B(e,c.intersectObject(s));p(y?function(e){return H(H({},e),{},L({},o,!1))}:function(e){return H(H({},e),{},L({},o,!0))}),c.far=10,c.set(d,(new D.Vector3).copy(n).add(u).sub(d).normalize());var b=B(e,c.intersectObject(s));b&&f[o]?l((function(e){return H(H({},e),{},L({},o,b.point.sub(n).normalize().multiplyScalar(r)))})):l((function(e){return H(H({},e),{},L({},o,new D.Vector3))}))}))})),{nextMoviment:u}}(e,r,t,i,c,l),f=s.nextMoviment,p=function(e,r,t,n){var a=R((0,o.useState)(new D.Vector3),2),i=a[0],c=a[1],u=R((0,o.useState)(new D.Vector3),2),l=u[0],s=u[1];return(0,M.x)((function(o){var a=o.camera,u=o.raycaster,f=o.scene;a.position.copy(i),a.lookAt(l);var p=new D.Vector3(0,2,-2).applyQuaternion(n).add(t),d=(new D.Vector3).copy(r).add(new D.Vector3(0,0,2)).applyQuaternion(n).add(t);c((function(e){return e.lerp(p,.1)})),s((function(e){return e.lerp(d,.5)}));var y=(new D.Vector3).copy(a.position).sub(t),b=(new D.Vector3).copy(y).length(),m=(new D.Vector3).copy(r).add(t),h=y.normalize();u.far=b,u.set(m,h);var g=B(e,u.intersectObject(f));g&&c((function(e){return e.lerp(g.point,.5)}))})),{cameraPosition:i,setCameraPosition:c,cameraTarget:l,setCameraTarget:s}}(e,t,i,l),d=p.cameraPosition,y=p.cameraTarget;return(0,M.x)((function(){return n((function(e){return e.position.copy(i),e.quaternion.copy(l),e}))})),{position:i,quaternion:l,nextMoviment:f,cameraPosition:d,cameraTarget:y}};var F={KeyW:!1,KeyS:!1,KeyA:!1,KeyD:!1};addEventListener("keydown",(function(e){var r=e.code;return F[r]=!0})),addEventListener("keyup",(function(e){var r=e.code;return F[r]=!1}));var U;const X=s.ZP.div(U||(U=function(e,r){return r||(r=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))}(["\n  ","\n  width: 100%;\n  height: 100vh;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--background);\n  background-image: radial-gradient(circle at 0 0, red, transparent),\n    radial-gradient(circle at 100% 50%, blue, transparent),\n    radial-gradient(circle at 0 100%, yellow, transparent);\n"])),(function(e){var r=e.palette;return"\n  --background: ".concat(r.background.main,";\n  --on-background: ").concat(r.background.on,";\n  --primary: ").concat(r.primary.main,";\n  --on-primary: ").concat(r.primary.on,";\n  --primary-on-light: ").concat(r.primary.light,";\n  --primary-on-dark: ").concat(r.primary.dark,";\n  --secondary: ").concat(r.secondary.main,";\n  --on-secondary: ").concat(r.secondary.on,";\n  --secondary-on-light: ").concat(r.secondary.light,";\n  --secondary-on-dark: ").concat(r.secondary.dark,";\n  ")})),$=function(e){var r,t=e.children,n={state:(r=I((0,o.useContext)(A),2))[0],dispatch:r[1],actions:P}.state;return(0,a.jsx)(X,{palette:n.theme.palette,"data-layout":"",children:t})};function J(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function Z(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?J(Object(t),!0).forEach((function(r){N(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):J(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function N(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function Y(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var n,o,a=[],i=!0,c=!1;try{for(t=t.call(e);!(i=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==t.return||t.return()}finally{if(c)throw o}}return a}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return ee(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ee(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ee(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var re=(new T.x).load("https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/empty_warehouse_01_1k.hdr",(function(e){return e.mapping=D.EquirectangularReflectionMapping})),te=new D.MeshStandardMaterial({color:"white",roughness:0,metalness:0}),ne=function(){var e=Y((0,o.useState)(new D.Group),2),r=e[0],t=e[1],n=Y((0,o.useState)(null),2),i=(n[0],n[1]);return function(e){(0,M.x)((function(r){var t=r.clock;return e((function(e){if(!e)return e;e.mixer.update(t.getDelta());var r=e.actions,n=r.idle,o=r.run;return F.KeyW||F.KeyS?(n.weight>0&&(n.weight-=.1),o.weight<1&&(o.weight+=.1),e):(o.weight>0&&(o.weight-=.1),n.weight<1&&(n.weight+=.1),e)}))}))}(i),(0,o.useEffect)((function(){return(new V.E).setDRACOLoader((new _._).setDecoderPath("/examples/js/libs/draco/").setDecoderConfig({type:"js"})).load("./assets/model/model.glb",(function(e){var r=e.scene,n=e.animations;r.traverse((function(e){e instanceof D.Mesh&&("Beta_Surface"===e.name&&(e.material=te),"Beta_Joints"===e.name&&(e.visible=!1,e.geometry.dispose(),e.material.dispose()))}));var o=new D.AnimationMixer(r),a=o.clipAction(n[0]);a.weight=1,a.play();var c=o.clipAction(n[3]);c.weight=0,c.play(),i({mixer:o,actions:{idle:a,run:c}}),t(r)}))}),[]),(0,a.jsx)("primitive",{object:r})},oe=function(){var e=Y((0,o.useState)(null),2),r=(e[0],e[1]);return q("player",.2,new D.Vector3(0,.75,0),r),(0,a.jsxs)("group",{ref:r,children:[(0,a.jsx)(ne,{}),(0,a.jsx)("pointLight",{position:[0,.75,0],args:["red",13,2],castShadow:!0})]})},ae={geometry:new D.PlaneBufferGeometry(300,300,50,50),material:new D.MeshBasicMaterial({color:"black",wireframe:!0})},ie=ae.geometry;ie.rotateX(-Math.PI/2);var ce=ie.attributes.position;new Array(ce.count).fill("").forEach((function(e,r){var t=ce.getX(r),n=ce.getZ(r);ce.setY(r,3*(Math.sin(t/10)+Math.sin(n/10)))})),ce.needsUpdate=!0,ie.computeVertexNormals();var ue=function(){return(0,a.jsx)("mesh",Z(Z({},ae),{},{receiveShadow:!0,castShadow:!0}))},le=function(){var e,r,t,n,i;return e=(0,M.w)(),r=e.camera,t=e.scene,n=e.gl,i=e.raycaster,(0,o.useEffect)((function(){i.near=0,n.outputEncoding=D.sRGBEncoding,n.toneMapping=D.ACESFilmicToneMapping,n.toneMappingExposure=1,n.shadowMap.enabled=!0,n.physicallyCorrectLights=!0,n.setPixelRatio(.9*Math.min(devicePixelRatio,2)),t.background=new D.Color("rgb(240,195,185)"),t.environment=re,t.fog=new D.Fog("rgb(240,195,185)",0,50),r.position.set(0,2,3),r.lookAt(0,0,0),r.near=1.5,r.far=50})),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(oe,{}),(0,a.jsx)(ue,{})]})},se=function(){return(0,a.jsx)($,{children:(0,a.jsx)(o.Suspense,{children:(0,a.jsx)(E.Xz,{gl:{antialias:!0,powerPreference:"high-performance"},children:(0,a.jsx)(le,{})})})})};(0,n.s)(document.querySelector("#root")).render((0,a.jsxs)(i,{children:[(0,a.jsx)(f,{}),(0,a.jsx)(se,{})]}))}},t={};function n(e){var o=t[e];if(void 0!==o)return o.exports;var a=t[e]={exports:{}};return r[e](a,a.exports,n),a.exports}n.m=r,e=[],n.O=(r,t,o,a)=>{if(!t){var i=1/0;for(s=0;s<e.length;s++){for(var[t,o,a]=e[s],c=!0,u=0;u<t.length;u++)(!1&a||i>=a)&&Object.keys(n.O).every((e=>n.O[e](t[u])))?t.splice(u--,1):(c=!1,a<i&&(i=a));if(c){e.splice(s--,1);var l=o();void 0!==l&&(r=l)}}return r}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[t,o,a]},n.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return n.d(r,{a:r}),r},n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={179:0};n.O.j=r=>0===e[r];var r=(r,t)=>{var o,a,[i,c,u]=t,l=0;if(i.some((r=>0!==e[r]))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(u)var s=u(n)}for(r&&r(t);l<i.length;l++)a=i[l],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(s)},t=self.webpackChunk_guhcalm_minimal_boilerplate=self.webpackChunk_guhcalm_minimal_boilerplate||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var o=n.O(void 0,[977],(()=>n(544)));o=n.O(o)})();