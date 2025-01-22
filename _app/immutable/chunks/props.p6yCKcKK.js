import{a6 as D,a7 as V,a8 as Z,a9 as P,aa as $,a1 as g,ab as T,U as _,g as y,K as q,ac as z,a3 as H,Y as J,ad as B,b as C,V as Q,ae as G,af as W,ag as X,ah as k,ai as p,aj as ee,ak as re,S as F,al as ne,t as ae,am as te,an as ie,ao as fe,f as M,ap as ue,aq as se}from"./runtime.yYPmdaWU.js";function E(r,i=null,d){if(typeof r!="object"||r===null||D in r)return r;const s=H(r);if(s!==V&&s!==Z)return r;var f=new Map,c=J(r),w=P(0);c&&f.set("length",P(r.length));var I;return new Proxy(r,{defineProperty(u,e,n){(!("value"in n)||n.configurable===!1||n.enumerable===!1||n.writable===!1)&&$();var t=f.get(e);return t===void 0?(t=P(n.value),f.set(e,t)):g(t,E(n.value,I)),!0},deleteProperty(u,e){var n=f.get(e);if(n===void 0)e in u&&f.set(e,P(_));else{if(c&&typeof e=="string"){var t=f.get("length"),a=Number(e);Number.isInteger(a)&&a<t.v&&g(t,a)}g(n,_),j(w)}return!0},get(u,e,n){var b;if(e===D)return r;var t=f.get(e),a=e in u;if(t===void 0&&(!a||(b=T(u,e))!=null&&b.writable)&&(t=P(E(a?u[e]:_,I)),f.set(e,t)),t!==void 0){var l=y(t);return l===_?void 0:l}return Reflect.get(u,e,n)},getOwnPropertyDescriptor(u,e){var n=Reflect.getOwnPropertyDescriptor(u,e);if(n&&"value"in n){var t=f.get(e);t&&(n.value=y(t))}else if(n===void 0){var a=f.get(e),l=a==null?void 0:a.v;if(a!==void 0&&l!==_)return{enumerable:!0,configurable:!0,value:l,writable:!0}}return n},has(u,e){var l;if(e===D)return!0;var n=f.get(e),t=n!==void 0&&n.v!==_||Reflect.has(u,e);if(n!==void 0||q!==null&&(!t||(l=T(u,e))!=null&&l.writable)){n===void 0&&(n=P(t?E(u[e],I):_),f.set(e,n));var a=y(n);if(a===_)return!1}return t},set(u,e,n,t){var h;var a=f.get(e),l=e in u;if(c&&e==="length")for(var b=n;b<a.v;b+=1){var R=f.get(b+"");R!==void 0?g(R,_):b in u&&(R=P(_),f.set(b+"",R))}a===void 0?(!l||(h=T(u,e))!=null&&h.writable)&&(a=P(void 0),g(a,E(n,I)),f.set(e,a)):(l=a.v!==_,g(a,E(n,I)));var o=Reflect.getOwnPropertyDescriptor(u,e);if(o!=null&&o.set&&o.set.call(t,n),!l){if(c&&typeof e=="string"){var O=f.get("length"),m=Number(e);Number.isInteger(m)&&m>=O.v&&g(O,m+1)}j(w)}return!0},ownKeys(u){y(w);var e=Reflect.ownKeys(u).filter(a=>{var l=f.get(a);return l===void 0||l.v!==_});for(var[n,t]of f)t.v!==_&&!(n in u)&&e.push(n);return e},setPrototypeOf(){z()}})}function j(r,i=1){g(r,r.v+i)}function le(r,i,d){if(r==null)return i(void 0),B;const s=C(()=>r.subscribe(i,d));return s.unsubscribe?()=>s.unsubscribe():s}let N=!1;function _e(r,i,d){const s=d[i]??(d[i]={store:null,source:G(void 0),unsubscribe:B});if(s.store!==r)if(s.unsubscribe(),s.store=r,r==null)s.source.v=void 0,s.unsubscribe=B;else{var f=!0;s.unsubscribe=le(r,c=>{f?s.source.v=c:g(s.source,c)}),f=!1}return y(s.source)}function ce(){const r={};return Q(()=>{for(var i in r)r[i].unsubscribe()}),r}function ve(r){var i=N;try{return N=!1,[r(),N]}finally{N=i}}function K(r){for(var i=q,d=q;i!==null&&!(i.f&(ee|re));)i=i.parent;try{return F(i),r()}finally{F(d)}}function be(r,i,d,s){var Y;var f=(d&ne)!==0,c=!ae||(d&te)!==0,w=(d&ie)!==0,I=(d&se)!==0,u=!1,e;w?[e,u]=ve(()=>r[i]):e=r[i];var n=D in r||fe in r,t=w&&(((Y=T(r,i))==null?void 0:Y.set)??(n&&i in r&&(v=>r[i]=v)))||void 0,a=s,l=!0,b=!1,R=()=>(b=!0,l&&(l=!1,I?a=C(s):a=s),a);e===void 0&&s!==void 0&&(t&&c&&W(),e=R(),t&&t(e));var o;if(c)o=()=>{var v=r[i];return v===void 0?R():(l=!0,b=!1,v)};else{var O=K(()=>(f?M:ue)(()=>r[i]));O.f|=X,o=()=>{var v=y(O);return v!==void 0&&(a=void 0),v===void 0?a:v}}if(!(d&k))return o;if(t){var m=r.$$legacy;return function(v,S){return arguments.length>0?((!c||!S||m||u)&&t(S?o():v),v):o()}}var h=!1,U=!1,L=G(e),A=K(()=>M(()=>{var v=o(),S=y(L);return h?(h=!1,U=!0,S):(U=!1,L.v=v)}));return f||(A.equals=p),function(v,S){if(arguments.length>0){const x=S?y(A):c&&w?E(v):v;return A.equals(x)||(h=!0,g(L,x),b&&a!==void 0&&(a=x),C(()=>y(A))),v}return y(A)}}export{E as a,_e as b,be as p,ce as s};
