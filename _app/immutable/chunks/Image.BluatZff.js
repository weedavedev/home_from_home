import{b as g,t as u}from"./disclose-version.CJu6SknR.js";import"./legacy.C4R0rwMW.js";import{Z as l,_ as v,E as c,$ as d,a0 as h,J as p}from"./runtime.VxkQ0v0H.js";import{c as N}from"./events.CDa1SSPe.js";import{p as _}from"./props.BYkQKZZT.js";import{b as y}from"./paths.Bu36suqh.js";function O(s){if(c){var r=!1,a=()=>{if(!r){if(r=!0,s.hasAttribute("value")){var i=s.value;f(s,"value",null),s.value=i}if(s.hasAttribute("checked")){var e=s.checked;f(s,"checked",null),s.checked=e}}};s.__on_r=a,h(a),N()}}function f(s,r,a,i){var e=s.__attributes??(s.__attributes={});c&&(e[r]=s.getAttribute(r),r==="src"||r==="srcset"||r==="href"&&s.nodeName==="LINK")||e[r]!==(e[r]=a)&&(r==="style"&&"__styles"in s&&(s.__styles={}),r==="loading"&&(s[l]=a),a==null?s.removeAttribute(r):typeof a!="string"&&A(s).includes(r)?s[r]=a:s.setAttribute(r,a))}var n=new Map;function A(s){var r=n.get(s.nodeName);if(r)return r;n.set(s.nodeName,r=[]);for(var a,i=s,e=Element.prototype;e!==i;){a=d(i);for(var o in a)a[o].set&&r.push(o);i=v(i)}return r}function m(s){if(!c&&s.loading==="lazy"){var r=s.src;s[l]=null,s.loading="eager",s.removeAttribute("src"),requestAnimationFrame(()=>{s[l]!=="eager"&&(s.loading="lazy"),s.src=r})}}function L(s,r,a){var i=s.__className,e=k(r);c&&s.className===e?s.__className=e:(i!==e||c&&s.className!==e)&&(r==null?s.removeAttribute("class"):s.className=e,s.__className=e)}function k(s,r){return(s??"")+""}function S(s,r,a){if(a){if(s.classList.contains(r))return;s.classList.add(r)}else{if(!s.classList.contains(r))return;s.classList.remove(r)}}var z=u('<img loading="lazy" decoding="async">');function T(s,r){let a=_(r,"src",8),i=_(r,"alt",8,""),e=_(r,"className",8,"");const o=`${y}${a()}`;var t=z();f(t,"src",o),p(()=>{f(t,"alt",i()),L(t,`image ${e()??""}`)}),m(t),g(s,t)}export{T as I,m as h,O as r,f as s,S as t};
