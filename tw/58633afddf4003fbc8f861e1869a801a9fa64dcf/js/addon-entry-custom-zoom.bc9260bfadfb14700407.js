(window.webpackJsonpGUI=window.webpackJsonpGUI||[]).push([[16],{1567:function(t,o,e){(t.exports=e(9)(!1)).push([t.i,".sa-custom-zoom-area {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 60px;\n  height: 148px;\n  pointer-events: none;\n}\n.blocklyZoom > * {\n  transition: transform var(--sa-custom-zoom-speed, 0) ease-in-out;\n}\n.sa-custom-zoom-hidden > * {\n  transform: translateX(80px);\n}\n",""])},1635:function(t,o,e){"use strict";e.r(o),e.d(o,"resources",(function(){return s}));var n=e(1567);const s={"userscript.js":async function(t){let o,{addon:e,console:n}=t;await e.tab.traps.getBlockly();let s=!1;const i={none:"0s",short:"0.2s",default:"0.3s",long:"0.5s"},a=document.createElement("div");function c(){if(document.removeEventListener("mousemove",d),"editor"!==e.tab.editorMode)return;Blockly.getMainWorkspace().options.zoomOptions.maxScale=e.settings.get("maxZoom")/100,Blockly.getMainWorkspace().options.zoomOptions.minScale=e.settings.get("minZoom")/100,Blockly.getMainWorkspace().options.zoomOptions.startScale=e.settings.get("startZoom")/100,Blockly.getMainWorkspace().options.zoomOptions.scaleSpeed=1+e.settings.get("zoomSpeed")/100*.2;const t=r(),o=e.settings.get("autohide");if(t&&t.classList.toggle("sa-custom-zoom-hidden",o),o){document.querySelector(".injectionDiv").appendChild(a),m(),document.addEventListener("mousemove",d)}}function r(){const t=Blockly.getMainWorkspace().zoomControls_;return t?t.svgGroup_:null}function d(t){const n=t.x>o.left&&t.x<o.right&&t.y>o.top&&t.y<o.bottom;if(n!==s){s=n;const t=r();t&&(t.style.setProperty("--sa-custom-zoom-speed",i[e.settings.get("speed")]),t.classList.toggle("sa-custom-zoom-hidden",!n))}}function m(){o=a.getBoundingClientRect()}for(a.className="sa-custom-zoom-area",document.querySelector('[class^="backpack_backpack-container"]')&&window.dispatchEvent(new Event("resize")),e.settings.addEventListener("change",c),window.addEventListener("resize",(function(){"editor"===e.tab.editorMode&&e.settings.get("autohide")&&m()}));;)await e.tab.waitForElement(".blocklyZoom",{markAsSeen:!0,reduxEvents:["scratch-gui/mode/SET_PLAYER","scratch-gui/locales/SELECT_LOCALE","scratch-gui/theme/SET_THEME","fontsLoaded/SET_FONTS_LOADED"],reduxCondition:t=>!t.scratchGui.mode.isPlayerOnly}),c()},"style.css":e.n(n).a}}}]);