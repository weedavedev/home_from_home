import{B,j as O,w as S,L as l,M as _,N as y,D as b,O as q,P as D,Q as M,R as N}from"./runtime.Dn_jn-Rh.js";function Q(r){B&&O(r)!==null&&S(r)}let w=!1;function T(){w||(w=!0,document.addEventListener("reset",r=>{Promise.resolve().then(()=>{var t;if(!r.defaultPrevented)for(const a of r.target.elements)(t=a.__on_r)==null||t.call(a)})},{capture:!0}))}function L(r){var t=y,a=b;l(null),_(null);try{return r()}finally{l(t),_(a)}}function R(r,t,a,n=a){r.addEventListener(t,()=>L(a));const i=r.__on_r;i?r.__on_r=()=>{i(),n(!0)}:r.__on_r=()=>n(!0),T()}const z=new Set,A=new Set;function W(r,t,a,n){function i(e){if(n.capture||j.call(t,e),!e.cancelBubble)return L(()=>a.call(this,e))}return r.startsWith("pointer")||r.startsWith("touch")||r==="wheel"?D(()=>{t.addEventListener(r,i,n)}):t.addEventListener(r,i,n),i}function C(r,t,a,n,i){var e={capture:n,passive:i},s=W(r,t,a,e);(t===document.body||t===window||t===document)&&q(()=>{t.removeEventListener(r,s,e)})}function j(r){var g;var t=this,a=t.ownerDocument,n=r.type,i=((g=r.composedPath)==null?void 0:g.call(r))||[],e=i[0]||r.target,s=0,v=r.__root;if(v){var f=i.indexOf(v);if(f!==-1&&(t===document||t===window)){r.__root=t;return}var h=i.indexOf(t);if(h===-1)return;f<=h&&(s=f)}if(e=i[s]||r.target,e!==t){M(r,"currentTarget",{configurable:!0,get(){return e||a}});var E=y,x=b;l(null),_(null);try{for(var o,p=[];e!==null;){var d=e.assignedSlot||e.parentNode||e.host||null;try{var c=e["__"+n];if(c!==void 0&&!e.disabled)if(N(c)){var[P,...k]=c;P.apply(e,[r,...k])}else c.call(e,r)}catch(u){o?p.push(u):o=u}if(r.cancelBubble||d===t||d===null)break;e=d}if(o){for(let u of p)queueMicrotask(()=>{throw u});throw o}}finally{r.__root=t,delete r.currentTarget,l(E),_(x)}}}export{z as a,T as b,Q as c,C as e,j as h,R as l,A as r};
