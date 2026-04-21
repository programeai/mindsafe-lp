// link handler

(()=>{function u(){function n(t,e,i){let r=document.createElement("a");r.href=t,r.target=i,r.rel=e,document.body.appendChild(r),r.click(),r.remove()}function o(t){if(this.dataset.hydrated){this.removeEventListener("click",o);return}t.preventDefault(),t.stopPropagation();let e=this.getAttribute("href");if(!e)return;if(/Mac|iPod|iPhone|iPad/u.test(navigator.userAgent)?t.metaKey:t.ctrlKey)return n(e,"","_blank");let r=this.getAttribute("rel")??"",c=this.getAttribute("target")??"";n(e,r,c)}function a(t){if(this.dataset.hydrated){this.removeEventListener("auxclick",o);return}t.preventDefault(),t.stopPropagation();let e=this.getAttribute("href");e&&n(e,"","_blank")}function s(t){if(this.dataset.hydrated){this.removeEventListener("keydown",s);return}if(t.key!=="Enter")return;t.preventDefault(),t.stopPropagation();let e=this.getAttribute("href");if(!e)return;let i=this.getAttribute("rel")??"",r=this.getAttribute("target")??"";n(e,i,r)}document.querySelectorAll("[data-nested-link]").forEach(t=>{t instanceof HTMLElement&&(t.addEventListener("click",o),t.addEventListener("auxclick",a),t.addEventListener("keydown",s))})}return u})()()

// image sizes

(()=>{function i(){for(let e of document.querySelectorAll("[data-framer-original-sizes]")){let t=e.getAttribute("data-framer-original-sizes");t===""?e.removeAttribute("sizes"):e.setAttribute("sizes",t),e.removeAttribute("data-framer-original-sizes")}}function a(){window.__framer_onRewriteBreakpoints=i}return a})()()

// variant url params

!function(){var l="framer_variant";function u(a,r){let n=r.indexOf("#"),e=n===-1?r:r.substring(0,n),o=n===-1?"":r.substring(n),t=e.indexOf("?"),m=t===-1?e:e.substring(0,t),d=t===-1?"":e.substring(t),s=new URLSearchParams(d),h=new URLSearchParams(a);for(let[i,g]of h)s.has(i)||i!==l&&s.append(i,g);let c=s.toString();return c===""?e+o:m+"?"+c+o}var w='div#main a[href^="#"],div#main a[href^="/"],div#main a[href^="."]',f="div#main a[data-framer-preserve-params]",p=document.currentScript?.hasAttribute("data-preserve-internal-params");if(window.location.search&&!navigator.webdriver&&!/bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(navigator.userAgent)){let a=document.querySelectorAll(p?`${w},${f}`:f);for(let r of a){let n=u(window.location.search,r.href);r.setAttribute("href",n)}}
}()

// appear animation

(()=>{function c(i,o,s){if(window.__framer_disable_appear_effects_optimization__||typeof animator>"u")return;let e={detail:{bg:document.hidden}};requestAnimationFrame(()=>{let a="framer-appear-start";performance.mark(a,e),animator.animateAppearEffects(JSON.parse(window.__framer__appearAnimationsContent.text),(m,p,d)=>{let t=document.querySelector(m);if(t)for(let[r,f]of Object.entries(p))animator.startOptimizedAppearAnimation(t,r,f,d[r])},i,o,s&&window.matchMedia("(prefers-reduced-motion:reduce)").matches===!0,animator.getActiveVariantHash(JSON.parse(window.__framer__breakpoints.text)));let n="framer-appear-end";performance.mark(n,e),performance.measure("framer-appear",{start:a,end:n,detail:e.detail})})}return c})()("data-framer-appear-id","__Appear_Animation_Transform__",false)

// process.env polyfill

typeof document<"u"&&(window.process={...window.process,env:{...window.process?.env,NODE_ENV:"production"}});