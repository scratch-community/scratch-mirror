(window.webpackJsonpGUI=window.webpackJsonpGUI||[]).push([[46],{1732:function(e,t,n){(e.exports=n(9)(!1)).push([e.i,'[class^="sprite-info_sprite-info_"] {\n  height: 0;\n  padding: 0 0.75rem;\n  overflow: hidden;\n  transition-property: height, padding, transform;\n  transition-duration: var(--spriteProperties-transitionDuration);\n}\n\n.sa-hide-sprite-properties [class^="sprite-info_sprite-info_"] {\n  border: none;\n}\n\n[class^="sprite-selector_scroll-wrapper_"] {\n  height: 100%;\n  transition-property: height;\n  transition-duration: var(--spriteProperties-transitionDuration);\n}\n\n.sa-show-sprite-properties [class^="sprite-info_sprite-info_"] {\n  /* The height needs to be known for the animation to work.\n     6.5rem + 5px is the exact height of sprite info when\n     this addon is enabled:\n       0.75rem (top padding)\n     + 2rem + 2px (.icon-wrappers in the first row)\n     + 0.5rem (margin between rows)\n     + 2rem + 2px (.icon-wrappers in the second row)\n     + 1.25rem (close button)\n     + 1px (bottom border) */\n  height: calc(6.5rem + 5px);\n  padding: 0.75rem;\n  padding-bottom: 0;\n}\n.sa-sprite-properties-wide-locale.sa-show-sprite-properties [class^="sprite-info_sprite-info_"] {\n  /* In wide languages, add in addition to the previous:\n     + 2 * 0.625rem * 1.2 (each row\'s text label now uses vertical space)\n     + 2 * 0.25rem (each row has extra padding) */\n  height: calc(6.5rem + 5px + 2rem);\n}\n[class^="label_input-group-column_"] {\n  /* Default line-height: normal is inconsistent across browsers, but above style needs constant line-height. */\n  line-height: 1.2;\n}\n\n/* see heights in above selectors */\n.sa-show-sprite-properties [class^="sprite-selector_scroll-wrapper_"] {\n  height: calc(100% - 6.5rem - 5px);\n}\n.sa-sprite-properties-wide-locale.sa-show-sprite-properties [class^="sprite-selector_scroll-wrapper_"] {\n  height: calc(100% - 6.5rem - 5px - 2rem);\n}\n\n.sa-sprite-properties-info-btn {\n  /* !important to override displayNoneWhileDisabled\'s inline styles */\n  display: flex !important;\n  position: absolute;\n  justify-content: center;\n  align-items: center;\n  width: 1rem;\n  height: 1rem;\n  top: -2px;\n  left: -2px;\n  border: none;\n  border-radius: 100%;\n  background-color: var(--editorDarkMode-primary, hsla(0, 100%, 65%, 1));\n}\n[dir="rtl"] .sa-sprite-properties-info-btn {\n  left: auto;\n  right: -2px;\n}\n.sa-show-sprite-properties .sa-sprite-properties-info-btn {\n  display: none !important;\n}\n\n.sa-sprite-properties-info-btn img {\n  width: calc(1rem - 6px);\n  height: calc(1rem - 6px);\n  filter: var(--editorDarkMode-primary-filter);\n}\n\n.sa-sprite-properties-close-btn {\n  width: 100%;\n  height: 1.25rem;\n  padding: 0;\n  padding-top: 0.5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  background-color: transparent;\n  user-select: none;\n}\n\n.sa-sprite-properties-close-btn img {\n  filter: var(--editorDarkMode-accent-filter);\n  transition: opacity 0.25s ease-out;\n}\n\n.sa-sprite-properties-close-btn:hover img {\n  opacity: 0.75;\n}\n\n/* Prevent double clicking from highlighting the "Choose a sprite" button */\n[class*="action-menu_main-button_"] {\n  user-select: none;\n}\n',""])},1770:function(e,t,n){"use strict";n.r(t),n.d(t,"resources",(function(){return i}));var s=n(1732);const i={"userscript.js":async function({addon:e,console:t,msg:n}){let s;const i=new MutationObserver(()=>{g()});function r(e){document.body.classList.toggle("sa-show-sprite-properties",e),document.body.classList.toggle("sa-hide-sprite-properties",!e)}function o(){r(!document.body.classList.contains("sa-show-sprite-properties"))}function a(){e.settings.get("autoCollapse")&&r(!1)}function p(){r(!e.settings.get("autoCollapse")&&!e.settings.get("hideByDefault"))}function c(t,n,s){const i=document.createElement("img");i.setAttribute("src",e.self.getResource(n)),i.draggable=!1;const r=document.createElement("button");return r.classList.add(t),r.title=s,r.addEventListener("click",()=>o()),r.appendChild(i),e.tab.displayNoneWhileDisabled(r,{display:"flex"}),r}let l,d;function g(){l||(l=c("sa-sprite-properties-info-btn","/info.svg",n("open-properties-panel-tooltip")));const e=s.parentNode.querySelector('[class*="sprite-selector-item_is-selected"]');l.parentNode!==e&&(e?e.appendChild(l):l.remove())}function u(){const e=!!s.querySelector("[class^=label_input-group-column_]");document.body.classList.toggle("sa-sprite-properties-wide-locale",e)}for(document.addEventListener("click",e=>{2===e.detail&&e.target.closest('[class^="sprite-selector_scroll-wrapper_"]')&&o()}),document.body.addEventListener("mouseleave",e=>{e.target.matches('[class*="sprite-selector_sprite-selector_2KgCX"]')&&a()},{capture:!0}),e.settings.addEventListener("change",a),e.self.addEventListener("reenabled",p),p(),e.self.addEventListener("disabled",()=>{r(!0)}),document.addEventListener("click",e=>{(e.target.closest("[class*='stage-header_stage-button-first']")||e.target.closest("[class*='stage-header_stage-button-last']"))&&setTimeout(u)},{capture:!0});;){s=await e.tab.waitForElement('[class^="sprite-info_sprite-info_"]',{markAsSeen:!0,reduxEvents:["scratch-gui/mode/SET_PLAYER","fontsLoaded/SET_FONTS_LOADED","scratch-gui/locales/SELECT_LOCALE"],reduxCondition:e=>!e.scratchGui.mode.isPlayerOnly});const t=s.parentNode.querySelector('[class*="sprite-selector_items-wrapper_"]');i.observe(t,{childList:!0,subtree:!0}),u(),g(),d||(d=c("sa-sprite-properties-close-btn","/collapse.svg",n("close-properties-panel-tooltip"))),s.appendChild(d)}},"userstyle.css":n.n(s).a,"collapse.svg":"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIuNyIgaGVpZ2h0PSI4Ljc5IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik02LjM2IDFhMS40MyAxLjQzIDAgMCAwLTEgLjQyTDEuNDIgNS4zNGExLjQ0IDEuNDQgMCAwIDAgMCAyYy41Ni41NiA5LjMxLjU2IDkuODcgMGExLjQ0IDEuNDQgMCAwIDAgMC0yTDcuMzcgMS40MkExLjQzIDEuNDMgMCAwIDAgNi4zNiAxeiIgZmlsbD0iIzU3NWU3NSIvPjwvc3ZnPg==","info.svg":"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAwLjU3IDAuNTciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNLjIzMi4yMzJ2LjAzNmguMDM2Vi41SC4yMTR2LjAzNWguMTQzVi41SC4zMDRWLjIzM3oiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIuMDcxIiBzdHlsZT0icGFpbnQtb3JkZXI6c3Ryb2tlIGZpbGwgbWFya2VycyIvPjxjaXJjbGUgY3g9Ii4yODUiIGN5PSIuMDcxIiByPSIuMDcxIiBzdHlsZT0icGFpbnQtb3JkZXI6c3Ryb2tlIGZpbGwgbWFya2VycyIvPjwvZz48L3N2Zz4="}}}]);