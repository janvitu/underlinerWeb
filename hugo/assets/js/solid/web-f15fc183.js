(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();const ue=(e,t)=>e===t,V=Symbol("solid-proxy"),ae=Symbol("solid-track"),U={equals:ue};let ee=re;const E=1,B=2,te={owned:null,cleanups:null,context:null,owner:null};var h=null;let q=null,y=null,g=null,S=null,K=0;function D(e,t){const n=y,s=h,r=e.length===0,i=t===void 0?s:t,l=r?te:{owned:null,cleanups:null,context:i?i.context:null,owner:i},o=r?e:()=>e(()=>m(()=>_(l)));h=l,y=null;try{return T(o,!0)}finally{y=n,h=s}}function de(e,t){t=t?Object.assign({},U,t):U;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=r=>(typeof r=="function"&&(r=r(n.value)),ie(n,r));return[se.bind(n),s]}function N(e,t,n){const s=Q(e,t,!1,E);k(s)}function he(e,t,n){ee=me;const s=Q(e,t,!1,E);(!n||!n.render)&&(s.user=!0),S?S.push(s):k(s)}function x(e,t,n){n=n?Object.assign({},U,n):U;const s=Q(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,k(s),se.bind(s)}function Ve(e){return T(e,!1)}function m(e){if(y===null)return e();const t=y;y=null;try{return e()}finally{y=t}}function Xe(e){he(()=>m(e))}function ye(e){return h===null||(h.cleanups===null?h.cleanups=[e]:h.cleanups.push(e)),e}function He(){return y}function Ge(e,t){const n=Symbol("context");return{id:n,Provider:pe(n),defaultValue:e}}function Qe(e){return h&&h.context&&h.context[e.id]!==void 0?h.context[e.id]:e.defaultValue}function ne(e){const t=x(e),n=x(()=>X(t()));return n.toArray=()=>{const s=n();return Array.isArray(s)?s:s!=null?[s]:[]},n}function se(){if(this.sources&&this.state)if(this.state===E)k(this);else{const e=g;g=null,T(()=>F(this),!1),g=e}if(y){const e=this.observers?this.observers.length:0;y.sources?(y.sources.push(this),y.sourceSlots.push(e)):(y.sources=[this],y.sourceSlots=[e]),this.observers?(this.observers.push(y),this.observerSlots.push(y.sources.length-1)):(this.observers=[y],this.observerSlots=[y.sources.length-1])}return this.value}function ie(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&T(()=>{for(let r=0;r<e.observers.length;r+=1){const i=e.observers[r],l=q&&q.running;l&&q.disposed.has(i),(l?!i.tState:!i.state)&&(i.pure?g.push(i):S.push(i),i.observers&&le(i)),l||(i.state=E)}if(g.length>1e6)throw g=[],new Error},!1)),t}function k(e){if(!e.fn)return;_(e);const t=K;ge(e,e.value,t)}function ge(e,t,n){let s;const r=h,i=y;y=h=e;try{s=e.fn(t)}catch(l){return e.pure&&(e.state=E,e.owned&&e.owned.forEach(_),e.owned=null),e.updatedAt=n+1,oe(l)}finally{y=i,h=r}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?ie(e,s):e.value=s,e.updatedAt=n)}function Q(e,t,n,s=E,r){const i={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:h,context:h?h.context:null,pure:n};return h===null||h!==te&&(h.owned?h.owned.push(i):h.owned=[i]),i}function v(e){if(e.state===0)return;if(e.state===B)return F(e);if(e.suspense&&m(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<K);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===E)k(e);else if(e.state===B){const s=g;g=null,T(()=>F(e,t[0]),!1),g=s}}function T(e,t){if(g)return e();let n=!1;t||(g=[]),S?n=!0:S=[],K++;try{const s=e();return we(n),s}catch(s){n||(S=null),g=null,oe(s)}}function we(e){if(g&&(re(g),g=null),e)return;const t=S;S=null,t.length&&T(()=>ee(t),!1)}function re(e){for(let t=0;t<e.length;t++)v(e[t])}function me(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:v(s)}for(t=0;t<n;t++)v(e[t])}function F(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const s=e.sources[n];if(s.sources){const r=s.state;r===E?s!==t&&(!s.updatedAt||s.updatedAt<K)&&v(s):r===B&&F(s,t)}}}function le(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=B,n.pure?g.push(n):S.push(n),n.observers&&le(n))}}function _(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),r=n.observers;if(r&&r.length){const i=r.pop(),l=n.observerSlots.pop();s<r.length&&(i.sourceSlots[l]=s,r[s]=i,n.observerSlots[s]=l)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)_(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function be(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function oe(e,t=h){throw be(e)}function X(e){if(typeof e=="function"&&!e.length)return X(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const s=X(e[n]);Array.isArray(s)?t.push.apply(t,s):t.push(s)}return t}return e}function pe(e,t){return function(s){let r;return N(()=>r=m(()=>(h.context={...h.context,[e]:s.value},ne(()=>s.children))),void 0),r}}const Ae=Symbol("fallback");function W(e){for(let t=0;t<e.length;t++)e[t]()}function Se(e,t,n={}){let s=[],r=[],i=[],l=0,o=t.length>1?[]:null;return ye(()=>W(i)),()=>{let c=e()||[],a,f;return c[ae],m(()=>{let d=c.length,w,C,$,j,M,b,p,A,L;if(d===0)l!==0&&(W(i),i=[],s=[],r=[],l=0,o&&(o=[])),n.fallback&&(s=[Ae],r[0]=D(ce=>(i[0]=ce,n.fallback())),l=1);else if(l===0){for(r=new Array(d),f=0;f<d;f++)s[f]=c[f],r[f]=D(u);l=d}else{for($=new Array(d),j=new Array(d),o&&(M=new Array(d)),b=0,p=Math.min(l,d);b<p&&s[b]===c[b];b++);for(p=l-1,A=d-1;p>=b&&A>=b&&s[p]===c[A];p--,A--)$[A]=r[p],j[A]=i[p],o&&(M[A]=o[p]);for(w=new Map,C=new Array(A+1),f=A;f>=b;f--)L=c[f],a=w.get(L),C[f]=a===void 0?-1:a,w.set(L,f);for(a=b;a<=p;a++)L=s[a],f=w.get(L),f!==void 0&&f!==-1?($[f]=r[a],j[f]=i[a],o&&(M[f]=o[a]),f=C[f],w.set(L,f)):i[a]();for(f=b;f<d;f++)f in $?(r[f]=$[f],i[f]=j[f],o&&(o[f]=M[f],o[f](f))):r[f]=D(u);r=r.slice(0,l=d),s=c.slice(0)}return r});function u(d){if(i[f]=d,o){const[w,C]=de(f);return o[f]=C,t(c[f],w)}return t(c[f])}}}let xe=!1;function We(e,t){return m(()=>e(t||{}))}function I(){return!0}const Ee={get(e,t,n){return t===V?n:e.get(t)},has(e,t){return t===V?!0:e.has(t)},set:I,deleteProperty:I,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:I,deleteProperty:I}},ownKeys(e){return e.keys()}};function R(e){return(e=typeof e=="function"?e():e)?e:{}}function Ce(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function Ye(...e){let t=!1;for(let i=0;i<e.length;i++){const l=e[i];t=t||!!l&&V in l,e[i]=typeof l=="function"?(t=!0,x(l)):l}if(t)return new Proxy({get(i){for(let l=e.length-1;l>=0;l--){const o=R(e[l])[i];if(o!==void 0)return o}},has(i){for(let l=e.length-1;l>=0;l--)if(i in R(e[l]))return!0;return!1},keys(){const i=[];for(let l=0;l<e.length;l++)i.push(...Object.keys(R(e[l])));return[...new Set(i)]}},Ee);const n={},s={},r=new Set;for(let i=e.length-1;i>=0;i--){const l=e[i];if(!l)continue;const o=Object.getOwnPropertyNames(l);for(let c=0,a=o.length;c<a;c++){const f=o[c];if(f==="__proto__"||f==="constructor")continue;const u=Object.getOwnPropertyDescriptor(l,f);if(!r.has(f))u.get?(r.add(f),Object.defineProperty(n,f,{enumerable:!0,configurable:!0,get:Ce.bind(s[f]=[u.get.bind(l)])})):(u.value!==void 0&&r.add(f),n[f]=u.value);else{const d=s[f];d?u.get?d.push(u.get.bind(l)):u.value!==void 0&&d.push(()=>u.value):n[f]===void 0&&(n[f]=u.value)}}}return n}const fe=e=>`Stale read from <${e}>.`;function Je(e){const t="fallback"in e&&{fallback:()=>e.fallback};return x(Se(()=>e.each,e.children,t||void 0))}function Ze(e){const t=e.keyed,n=x(()=>e.when,void 0,{equals:(s,r)=>t?s===r:!s==!r});return x(()=>{const s=n();if(s){const r=e.children;return typeof r=="function"&&r.length>0?m(()=>r(t?s:()=>{if(!m(n))throw fe("Show");return e.when})):r}return e.fallback},void 0,void 0)}function ze(e){let t=!1;const n=(i,l)=>i[0]===l[0]&&(t?i[1]===l[1]:!i[1]==!l[1])&&i[2]===l[2],s=ne(()=>e.children),r=x(()=>{let i=s();Array.isArray(i)||(i=[i]);for(let l=0;l<i.length;l++){const o=i[l].when;if(o)return t=!!i[l].keyed,[l,o,i[l]]}return[-1]},void 0,{equals:n});return x(()=>{const[i,l,o]=r();if(i<0)return e.fallback;const c=o.children;return typeof c=="function"&&c.length>0?m(()=>c(t?l:()=>{if(m(r)[0]!==i)throw fe("Match");return o.when})):c},void 0,void 0)}function et(e){return e}const Ne=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],Le=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Ne]),Pe=new Set(["innerHTML","textContent","innerText","children"]),Oe=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),Te=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function $e(e,t){const n=Te[e];return typeof n=="object"?n[t]?n.$:void 0:n}const ke=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),je={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function Me(e,t,n){let s=n.length,r=t.length,i=s,l=0,o=0,c=t[r-1].nextSibling,a=null;for(;l<r||o<i;){if(t[l]===n[o]){l++,o++;continue}for(;t[r-1]===n[i-1];)r--,i--;if(r===l){const f=i<s?o?n[o-1].nextSibling:n[i-o]:c;for(;o<i;)e.insertBefore(n[o++],f)}else if(i===o)for(;l<r;)(!a||!a.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[i-1]&&n[o]===t[r-1]){const f=t[--r].nextSibling;e.insertBefore(n[o++],t[l++].nextSibling),e.insertBefore(n[--i],f),t[r]=n[i]}else{if(!a){a=new Map;let u=o;for(;u<i;)a.set(n[u],u++)}const f=a.get(t[l]);if(f!=null)if(o<f&&f<i){let u=l,d=1,w;for(;++u<r&&u<i&&!((w=a.get(t[u]))==null||w!==f+d);)d++;if(d>f-o){const C=t[l];for(;o<f;)e.insertBefore(n[o++],C)}else e.replaceChild(n[o++],t[l++])}else l++;else t[l++].remove()}}}const Y="_$DX_DELEGATE";function tt(e,t,n,s={}){let r;return D(i=>{r=i,t===document?e():Ke(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{r(),t.textContent=""}}function nt(e,t,n){let s;const r=()=>{const l=document.createElement("template");return l.innerHTML=e,n?l.content.firstChild.firstChild:l.content.firstChild},i=t?()=>m(()=>document.importNode(s||(s=r()),!0)):()=>(s||(s=r())).cloneNode(!0);return i.cloneNode=i,i}function Ie(e,t=window.document){const n=t[Y]||(t[Y]=new Set);for(let s=0,r=e.length;s<r;s++){const i=e[s];n.has(i)||(n.add(i),t.addEventListener(i,Re))}}function H(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function De(e,t,n,s){s==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,s)}function Ue(e,t){t==null?e.removeAttribute("class"):e.className=t}function Be(e,t,n,s){if(s)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const r=n[0];e.addEventListener(t,n[0]=i=>r.call(e,n[1],i))}else e.addEventListener(t,n)}function ve(e,t,n={}){const s=Object.keys(t||{}),r=Object.keys(n);let i,l;for(i=0,l=r.length;i<l;i++){const o=r[i];!o||o==="undefined"||t[o]||(J(e,o,!1),delete n[o])}for(i=0,l=s.length;i<l;i++){const o=s[i],c=!!t[o];!o||o==="undefined"||n[o]===c||!c||(J(e,o,!0),n[o]=c)}return n}function Fe(e,t,n){if(!t)return n?H(e,"style"):t;const s=e.style;if(typeof t=="string")return s.cssText=t;typeof n=="string"&&(s.cssText=n=void 0),n||(n={}),t||(t={});let r,i;for(i in n)t[i]==null&&s.removeProperty(i),delete n[i];for(i in t)r=t[i],r!==n[i]&&(s.setProperty(i,r),n[i]=r);return n}function st(e,t={},n,s){const r={};return s||N(()=>r.children=O(e,t.children,r.children)),N(()=>t.ref&&t.ref(e)),N(()=>_e(e,t,n,!0,r,!0)),r}function it(e,t,n){return m(()=>e(t,n))}function Ke(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return O(e,t,s,n);N(r=>O(e,t(),r,n),s)}function _e(e,t,n,s,r={},i=!1){t||(t={});for(const l in r)if(!(l in t)){if(l==="children")continue;r[l]=Z(e,l,null,r[l],n,i)}for(const l in t){if(l==="children"){s||O(e,t.children);continue}const o=t[l];r[l]=Z(e,l,o,r[l],n,i)}}function qe(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function J(e,t,n){const s=t.trim().split(/\s+/);for(let r=0,i=s.length;r<i;r++)e.classList.toggle(s[r],n)}function Z(e,t,n,s,r,i){let l,o,c,a,f;if(t==="style")return Fe(e,n,s);if(t==="classList")return ve(e,n,s);if(n===s)return s;if(t==="ref")i||n(e);else if(t.slice(0,3)==="on:"){const u=t.slice(3);s&&e.removeEventListener(u,s),n&&e.addEventListener(u,n)}else if(t.slice(0,10)==="oncapture:"){const u=t.slice(10);s&&e.removeEventListener(u,s,!0),n&&e.addEventListener(u,n,!0)}else if(t.slice(0,2)==="on"){const u=t.slice(2).toLowerCase(),d=ke.has(u);if(!d&&s){const w=Array.isArray(s)?s[0]:s;e.removeEventListener(u,w)}(d||n)&&(Be(e,u,n,d),d&&Ie([u]))}else if(t.slice(0,5)==="attr:")H(e,t.slice(5),n);else if((f=t.slice(0,5)==="prop:")||(c=Pe.has(t))||!r&&((a=$e(t,e.tagName))||(o=Le.has(t)))||(l=e.nodeName.includes("-")))f&&(t=t.slice(5),o=!0),t==="class"||t==="className"?Ue(e,n):l&&!o&&!c?e[qe(t)]=n:e[a||t]=n;else{const u=r&&t.indexOf(":")>-1&&je[t.split(":")[0]];u?De(e,u,t,n):H(e,Oe[t]||t,n)}return n}function Re(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n;){const s=n[t];if(s&&!n.disabled){const r=n[`${t}Data`];if(r!==void 0?s.call(n,r,e):s.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function O(e,t,n,s,r){for(;typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,l=s!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,i==="string"||i==="number")if(i==="number"&&(t=t.toString()),l){let o=n[0];o&&o.nodeType===3?o.data=t:o=document.createTextNode(t),n=P(e,n,s,o)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;else if(t==null||i==="boolean")n=P(e,n,s);else{if(i==="function")return N(()=>{let o=t();for(;typeof o=="function";)o=o();n=O(e,o,n,s)}),()=>n;if(Array.isArray(t)){const o=[],c=n&&Array.isArray(n);if(G(o,t,n,r))return N(()=>n=O(e,o,n,s,!0)),()=>n;if(o.length===0){if(n=P(e,n,s),l)return n}else c?n.length===0?z(e,o,s):Me(e,n,o):(n&&P(e),z(e,o));n=o}else if(t.nodeType){if(Array.isArray(n)){if(l)return n=P(e,n,s,t);P(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function G(e,t,n,s){let r=!1;for(let i=0,l=t.length;i<l;i++){let o=t[i],c=n&&n[i],a;if(!(o==null||o===!0||o===!1))if((a=typeof o)=="object"&&o.nodeType)e.push(o);else if(Array.isArray(o))r=G(e,o,c)||r;else if(a==="function")if(s){for(;typeof o=="function";)o=o();r=G(e,Array.isArray(o)?o:[o],Array.isArray(c)?c:[c])||r}else e.push(o),r=!0;else{const f=String(o);c&&c.nodeType===3&&c.data===f?e.push(c):e.push(document.createTextNode(f))}}return r}function z(e,t,n=null){for(let s=0,r=t.length;s<r;s++)e.insertBefore(t[s],n)}function P(e,t,n,s){if(n===void 0)return e.textContent="";const r=s||document.createTextNode("");if(t.length){let i=!1;for(let l=t.length-1;l>=0;l--){const o=t[l];if(r!==o){const c=o.parentNode===e;!i&&!l?c?e.replaceChild(r,o):e.insertBefore(r,n):c&&o.remove()}else i=!0}}else e.insertBefore(r,n);return[r]}export{V as $,Je as F,et as M,ze as S,We as a,Ge as b,de as c,Ie as d,Be as e,N as f,Ue as g,x as h,Ke as i,Ze as j,ae as k,He as l,Ve as m,m as n,Xe as o,D as p,he as q,tt as r,Fe as s,nt as t,Qe as u,ye as v,Ye as w,st as x,it as y,H as z};