(()=>{"use strict";var e={69923:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(c,r){function i(e){try{d(o.next(e))}catch(t){r(t)}}function a(e){try{d(o.throw(e))}catch(t){r(t)}}function d(e){var t;e.done?c(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}d((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const c=n(31848);window.location.pathname.includes("mobile")?n(25374):n(54157),document.addEventListener("DOMContentLoaded",(()=>{!function(){o(this,void 0,void 0,(function*(){yield l(),window.addEventListener("message",(e=>{e.origin&&""!==e.origin&&e.origin===i&&"start"===e.data&&l()}),!1)}))}()})),window.captchaSuccess=function(e){a?document.location.replace("bitwarden://captcha-callback?token="+encodeURIComponent(e)):function(e){if(d)return;parent.postMessage("success|"+e,r),d=!0}(e)},window.captchaError=function(){u("An error occurred with the captcha. Try again.")};let r=null,i=null,a=null,d=!1;function l(){var e;return o(this,void 0,void 0,(function*(){d=!1;const t=c.getQsParam("data");if(!t)return void u("No data.");if(r=c.getQsParam("parent"),!r)return void u("No parent.");let n;r=decodeURIComponent(r),i=new URL(r).origin;try{n=JSON.parse(c.b64Decode(t,!0))}catch(m){return void u("Cannot parse data.")}a=null!=n.callbackUri||!0===n.mobile;let l="https://hcaptcha.com/1/api.js?render=explicit";n.locale&&(l+=`&hl=${null!==(e=encodeURIComponent(n.locale))&&void 0!==e?e:"en"}`);const h=document.getElementById("captchaRequired");n.captchaRequiredText&&h&&(h.textContent=n.captchaRequiredText);const f=document.createElement("script");f.src=l,f.async=!0,f.defer=!0,f.addEventListener("load",(()=>{hcaptcha.render("captcha",{sitekey:encodeURIComponent(n.siteKey),callback:"captchaSuccess","error-callback":"captchaError"}),function(){o(this,void 0,void 0,(function*(){const e=document.body.lastChild;for(;;)s({height:"hidden"===e.style.visibility?document.documentElement.offsetHeight:document.documentElement.scrollHeight,width:document.documentElement.scrollWidth}),yield p(100)}))}()})),document.head.appendChild(f)}))}function u(e){parent.postMessage("error|"+e,r)}function s(e){parent.postMessage("info|"+JSON.stringify(e),r)}function p(e){return o(this,void 0,void 0,(function*(){yield new Promise((t=>setTimeout(t,e)))}))}},31848:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.b64Decode=t.getQsParam=void 0,t.getQsParam=function(e){const t=window.location.href;e=e.replace(/[\[\]]/g,"\\$&");const n=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(t);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null},t.b64Decode=function(e,t=!1){return t&&(e=e.replace(/ /g,"+")),decodeURIComponent(Array.prototype.map.call(atob(e),(e=>"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2))).join(""))}},25374:(e,t,n)=>{n.r(t)},54157:(e,t,n)=>{n.r(t)}},t={};function n(o){var c=t[o];if(void 0!==c)return c.exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,n),r.exports}n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};n(69923)})();
//# sourceMappingURL=captcha.a111ae84c011ccd106f0.js.map