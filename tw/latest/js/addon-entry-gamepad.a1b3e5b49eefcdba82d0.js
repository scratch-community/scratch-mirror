(window.webpackJsonpGUI=window.webpackJsonpGUI||[]).push([[33],{1457:function(e,t,n){"use strict";function s(){}n.d(t,"a",(function(){return s}))},1564:function(e,t,n){(e.exports=n(9)(!1)).push([e.i,'[dir="ltr"] .sa-gamepad-container {\n  margin-right: 0.2rem;\n}\n[dir="rtl"] .sa-gamepad-container {\n  margin-left: 0.2rem;\n}\n\n.sa-gamepad-popup-outer {\n  /* above fullscreen */\n  z-index: 99999;\n}\n.sa-gamepad-popup {\n  box-sizing: border-box;\n  width: 700px;\n  max-height: min(800px, 85vh);\n  height: 100%;\n  max-width: 85%;\n  margin: 50px auto;\n  display: flex;\n  flex-direction: column;\n}\n.sa-gamepad-popup-content {\n  background-color: white !important;\n  color: #575e75 !important;\n  padding: 1.5rem 2.25rem;\n  height: 100%;\n  overflow-y: auto;\n}\n\n.sa-gamepad-popup [class*="modal_header-item-title"] {\n  margin: 0 -20rem 0 0;\n}\n\n.sa-gamepad-cursor {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 9999;\n  user-select: none;\n  pointer-events: none;\n  will-change: transform;\n  image-rendering: optimizeSpeed;\n  image-rendering: crisp-edges;\n  image-rendering: pixelated;\n}\n.sa-gamepad-cursor-down {\n  filter: invert(100%);\n}\n\n.sa-small-stage [class*="gui_body-wrapper_"]:not(.sa-stage-hidden) .sa-gamepad-container {\n  display: none !important;\n}\n\n.sa-gamepad-hide-cursor [class^="stage_stage_"] {\n  cursor: none;\n}\n\n.sa-gamepad-browser-support-warning {\n  font-weight: bold;\n  margin-bottom: 10px;\n}\n\n.sa-gamepad-extra-options {\n  display: none;\n}\n.sa-gamepad-has-controller .sa-gamepad-extra-options {\n  display: block;\n}\n\n.sa-gamepad-store-settings {\n  display: block;\n}\n.sa-gamepad-store-settings > input {\n  margin-right: 4px;\n}\n\n.sa-gamepad-reset-button {\n  margin: 8px 8px 8px 0;\n}\n',""])},1565:function(e,t,n){var s=n(213);(e.exports=n(9)(!1)).push([e.i,'.gamepadlib-selector {\n  width: 100%;\n  margin-bottom: 3px;\n}\n\n.gamepadlib-content {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n.gamepadlib-content-buttons {\n  padding-right: 10px;\n}\n\n.gamepadlib-mapping {\n  display: flex;\n  align-items: center;\n  margin-bottom: 3px;\n}\n.gamepadlib-mapping-label {\n  width: 100px;\n  text-align: center;\n}\n.gamepadlib-keyinput {\n  text-align: center;\n  width: 75px;\n  height: 25px;\n  border-radius: 0;\n  border: 1px solid black;\n  background: white;\n  color: black;\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n.gamepadlib-mapping[data-value="1"] .gamepadlib-keyinput {\n  background: yellow;\n}\n.gamepadlib-keyinput[data-accepting-input="true"] {\n  background: #d6fff9;\n}\n.gamepadlib-keyinput[data-empty="true"]:not([data-accepting-input="true"]) {\n  color: #aaa;\n  font-style: italic;\n}\n\n.gamepadlib-axis {\n  margin-bottom: 8px;\n  text-align: center;\n}\n.gamepadlib-axis-circle {\n  position: relative;\n  width: 150px;\n  height: 150px;\n  border: 1px solid black;\n  overflow: hidden;\n}\n.gamepadlib-axis-dot {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  background-image: url('+s(n(1566))+");\n  width: 8px;\n  height: 8px;\n  transform: translate(-50%, -50%);\n  pointer-events: none;\n}\n.gamepadlib-axis-mapping {\n  width: 100%;\n}\n\n.gamepadlib-axis-circle-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.gamepadlib-axis-circle-overlay > .gamepadlib-axis-mapper {\n  position: absolute;\n}\n.gamepadlib-axis-circle-overlay > .gamepadlib-axis-mapper:nth-of-type(1) {\n  left: 50%;\n  top: 0;\n  transform: translateX(-50%);\n}\n.gamepadlib-axis-circle-overlay > .gamepadlib-axis-mapper:nth-of-type(2) {\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.gamepadlib-axis-circle-overlay > .gamepadlib-axis-mapper:nth-of-type(3) {\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.gamepadlib-axis-circle-overlay > .gamepadlib-axis-mapper:nth-of-type(4) {\n  left: 50%;\n  bottom: 0;\n  transform: translateX(-50%);\n}\n",""])},1566:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiIHZpZXdCb3g9IjAgMCAyLjExNyAyLjExNyI+PGNpcmNsZSBjeD0iMS4wNTgiIGN5PSIxLjA1OCIgcj0iMS4wNTgiIGZpbGw9InJlZCIvPjwvc3ZnPg=="},1594:function(e,t,n){"use strict";n.r(t),n.d(t,"resources",(function(){return I}));var s=n(446);let a=window.console;const i=[{type:"key",high:"ArrowRight",low:"ArrowLeft",deadZone:.5},{type:"key",high:"ArrowDown",low:"ArrowUp",deadZone:.5}],o=[{type:"key",high:"d",low:"a",deadZone:.5},{type:"key",high:"s",low:"w",deadZone:.5}],r=[{type:"virtual_cursor",high:"+x",low:"-x",sensitivity:.6,deadZone:.2},{type:"virtual_cursor",high:"-y",low:"+y",sensitivity:.6,deadZone:.2}],d=e=>{if("object"!=typeof e||!e)return a.warn("invalid mapping",e),{type:"key",high:null,low:null};const t=Object.assign({},e);if("key"===t.type)void 0===t.deadZone&&(t.deadZone=.5),void 0===t.high&&(t.high=""),void 0===t.low&&(t.low="");else if("mousedown"===t.type)void 0===t.deadZone&&(t.deadZone=.5),void 0===t.button&&(t.button=0);else{if("virtual_cursor"!==t.type)return a.warn("unknown mapping type",t.type),{type:"key",high:null,low:null};void 0===t.high&&(t.high=""),void 0===t.low&&(t.low=""),void 0===t.sensitivity&&(t.sensitivity=10),void 0===t.deadZone&&(t.deadZone=.5)}return t},l=e=>Object.assign({},e),c=l,p=e=>{const t=l(e);return delete t.deadZone,delete t.low,t},h=(e,t)=>{for(;e.length<t;)e.push({type:"key",high:null,low:null});return e.length=t,e},u=e=>h([],e),g=e=>({usesArrows:e.has("ArrowUp")||e.has("ArrowDown")||e.has("ArrowRight")||e.has("ArrowLeft"),usesWASD:e.has("w")&&e.has("s")||e.has("a")&&e.has("d")}),m=e=>"".concat(e.id," (").concat(e.index,")");class y{constructor(e,t){this.gamepad=e,this.gamepadLib=t,this.resetMappings()}resetMappings(){this.hints=this.gamepadLib.getHints(),this.buttonMappings=this.getDefaultButtonMappings().map(d),this.axesMappings=this.getDefaultAxisMappings().map(d)}clearMappings(){this.buttonMappings=u(this.gamepad.buttons.length),this.axesMappings=u(this.gamepad.axes.length)}getDefaultButtonMappings(){let e;if(this.hints.importedSettings)e=this.hints.importedSettings.buttons;else{const t=this.hints.usedKeys,n=new Set,{usesArrows:s,usesWASD:a}=g(t);a&&(n.add("w"),n.add("a"),n.add("s"),n.add("d"));const i=["p","q","r"],o=[" ","Enter","e","f","z","x","c",...Array.from(t).filter(e=>1===e.length&&!i.includes(e))],r=e=>{for(const s of e)if(t.has(s)&&!n.has(s))return n.add(s),s;return null},d=()=>r(o),l=()=>r(i),c=()=>s||!a?"ArrowUp":"w",p=()=>s||!a?"ArrowDown":"s",h=()=>s||!a?"ArrowRight":"d",u=()=>s||!a?"ArrowLeft":"a",m=(()=>s&&t.has("ArrowUp")?"ArrowUp":a&&t.has("w")?"w":r(o))();let y=d(),w=d(),v=d();!m||y||w||v||(y=m,w=m,v=m),m&&y&&!w&&!v&&(w=m,v=y),e=[],e[0]={type:"key",high:m},e[1]={type:"key",high:y},e[2]={type:"key",high:w},e[3]={type:"key",high:v},e[4]={type:"mousedown"},e[5]={type:"mousedown"},e[6]={type:"mousedown"},e[7]={type:"mousedown"},e[9]={type:"key",high:l()},e[8]={type:"key",high:l()},e[10]={type:"key",high:null,low:null},e[11]={type:"key",high:null,low:null},e[12]={type:"key",high:c()},e[13]={type:"key",high:p()},e[14]={type:"key",high:u()},e[15]={type:"key",high:h()}}return h(e,this.gamepad.buttons.length)}getDefaultAxisMappings(){let e=[];if(this.hints.importedSettings)e=this.hints.importedSettings.axes;else if(4===this.gamepad.axes.length){const t=this.hints.usedKeys,{usesArrows:n,usesWASD:s}=g(t);s?(e.push(o[0]),e.push(o[1])):n?(e.push(i[0]),e.push(i[1])):(e.push(r[0]),e.push(r[1])),e.push(r[0]),e.push(r[1])}return h(e,this.gamepad.axes.length)}}class w extends s.a{constructor(){super(),this.gamepads=new Map,this.handleConnect=this.handleConnect.bind(this),this.handleDisconnect=this.handleDisconnect.bind(this),this.update=this.update.bind(this),this.animationFrame=null,this.currentTime=null,this.deltaTime=0,this.virtualCursor={x:0,y:0,maxX:1/0,minX:-1/0,maxY:1/0,minY:-1/0,modified:!1},this._editor=null,this.connectCallbacks=[],this.keysPressedThisFrame=new Set,this.oldKeysPressed=new Set,this.mouseButtonsPressedThisFrame=new Set,this.oldMouseDown=new Set,this.addEventHandlers()}addEventHandlers(){window.addEventListener("gamepadconnected",this.handleConnect),window.addEventListener("gamepaddisconnected",this.handleDisconnect)}removeEventHandlers(){window.removeEventListener("gamepadconnected",this.handleConnect),window.removeEventListener("gamepaddisconnected",this.handleDisconnect)}gamepadConnected(){return this.gamepads.size>0?Promise.resolve():new Promise(e=>{this.connectCallbacks.push(e)})}getHints(){return Object.assign({usedKeys:new Set,importedSettings:null,generated:!1},this.getUserHints())}getUserHints(){return{}}resetControls(){for(const e of this.gamepads.values())e.resetMappings()}clearControls(){for(const e of this.gamepads.values())e.clearMappings()}handleConnect(e){for(const e of this.connectCallbacks)e();this.connectCallbacks=[];const t=e.gamepad,n=m(t);a.log("connected",t);const s=new y(t,this);this.gamepads.set(n,s),null===this.animationFrame&&(this.animationFrame=requestAnimationFrame(this.update)),this.dispatchEvent(new CustomEvent("gamepadconnected",{detail:s}))}handleDisconnect(e){const t=e.gamepad,n=m(t);a.log("disconnected",t);const s=this.gamepads.get(n);this.gamepads.delete(n),this.dispatchEvent(new CustomEvent("gamepaddisconnected",{detail:s})),0===this.gamepads.size&&(cancelAnimationFrame(this.animationFrame),this.animationFrame=null,this.currentTime=null)}dispatchKey(e,t){t?this.dispatchEvent(new CustomEvent("keydown",{detail:e})):this.dispatchEvent(new CustomEvent("keyup",{detail:e}))}dispatchMouse(e,t){t?this.dispatchEvent(new CustomEvent("mousedown",{detail:e})):this.dispatchEvent(new CustomEvent("mouseup",{detail:e}))}dispatchMouseMove(e,t){this.dispatchEvent(new CustomEvent("mousemove",{detail:{x:e,y:t}}))}updateButton(e,t){if("key"===t.type)e>=t.deadZone?t.high&&this.keysPressedThisFrame.add(t.high):e<=-t.deadZone&&t.low&&this.keysPressedThisFrame.add(t.low);else if("mousedown"===t.type){Math.abs(e)>=t.deadZone&&this.mouseButtonsPressedThisFrame.add(t.button)}else if("virtual_cursor"===t.type){const n=t.deadZone;let s;if(e>=n&&(s=t.high),e<=-n&&(s=t.low),s){const a=(Math.abs(e)-n)/(1-n),i=a*a*t.sensitivity*this.deltaTime;"+x"===s?this.virtualCursor.x+=i:"-x"===s?this.virtualCursor.x-=i:"+y"===s?this.virtualCursor.y+=i:"-y"===s&&(this.virtualCursor.y-=i),this.virtualCursor.modified=!0}}}update(e){this.oldKeysPressed=this.keysPressedThisFrame,this.oldMouseButtonsPressed=this.mouseButtonsPressedThisFrame,this.keysPressedThisFrame=new Set,this.mouseButtonsPressedThisFrame=new Set,null===this.currentTime?this.deltaTime=0:this.deltaTime=e-this.currentTime,this.deltaTime=Math.max(Math.min(this.deltaTime,1e3),0),this.currentTime=e,this.animationFrame=requestAnimationFrame(this.update);const t=navigator.getGamepads();for(const e of t){if(null===e)continue;const t=m(e),n=this.gamepads.get(t);for(let t=0;t<e.buttons.length;t++){const s=e.buttons[t].value,a=n.buttonMappings[t];this.updateButton(s,a)}for(let t=0;t<e.axes.length;t++){const s=e.axes[t],a=n.axesMappings[t];this.updateButton(s,a)}}this._editor&&this._editor.update(t);for(const e of this.keysPressedThisFrame)this.oldKeysPressed.has(e)||this.dispatchKey(e,!0);for(const e of this.oldKeysPressed)this.keysPressedThisFrame.has(e)||this.dispatchKey(e,!1);for(const e of this.mouseButtonsPressedThisFrame)this.oldMouseButtonsPressed.has(e)||this.dispatchMouse(e,!0);for(const e of this.oldMouseButtonsPressed)this.mouseButtonsPressedThisFrame.has(e)||this.dispatchMouse(e,!1);this.virtualCursor.modified&&(this.virtualCursor.modified=!1,this.virtualCursor.x>this.virtualCursor.maxX&&(this.virtualCursor.x=this.virtualCursor.maxX),this.virtualCursor.x<this.virtualCursor.minX&&(this.virtualCursor.x=this.virtualCursor.minX),this.virtualCursor.y>this.virtualCursor.maxY&&(this.virtualCursor.y=this.virtualCursor.maxY),this.virtualCursor.y<this.virtualCursor.minY&&(this.virtualCursor.y=this.virtualCursor.minY),this.dispatchMouseMove(this.virtualCursor.x,this.virtualCursor.y))}editor(){return this._editor||(this._editor=new A(this)),this._editor}}w.browserHasBrokenGamepadAPI=()=>!navigator.getGamepads||(!(!navigator.userAgent.includes("Firefox")||!navigator.userAgent.includes("Linux"))||!(!navigator.userAgent.includes("Firefox")||!navigator.userAgent.includes("Mac OS"))),w.setConsole=e=>a=e;const v=e=>{for(;e.firstChild;)e.removeChild(e.firstChild)},b=e=>"gamepadlib-axis-".concat(e);class A extends s.a{constructor(e){super(),this.gamepadLib=e,this.root=Object.assign(document.createElement("div"),{className:"gamepadlib-root"}),this.selector=Object.assign(document.createElement("select"),{className:"gamepadlib-selector"}),this.content=Object.assign(document.createElement("div"),{className:"gamepadlib-content"}),this.root.appendChild(this.selector),this.root.appendChild(this.content),this.onSelectorChange=this.onSelectorChange.bind(this),this.onGamepadsChange=this.onGamepadsChange.bind(this),this.selector.addEventListener("change",this.onSelectorChange),this.gamepadLib.addEventListener("gamepadconnected",this.onGamepadsChange),this.gamepadLib.addEventListener("gamepaddisconnected",this.onGamepadsChange),this.buttonIdToElement=new Map,this.axisIdToElement=new Map,this.hidden=!1,this.msg=(e,t)=>e}onSelectorChange(){this.updateContent(),this.dispatchEvent(new CustomEvent("gamepad-changed"))}onGamepadsChange(){this.updateAllContent(),this.dispatchEvent(new CustomEvent("gamepad-changed"))}updateAllContent(){this.updateDropdown(),this.updateContent(),this.focus()}updateDropdown(){v(this.selector);const e=Array.from(this.gamepadLib.gamepads.entries());if(0!==e.length){this.selector.hidden=!1;for(const[t,n]of e){const e=document.createElement("option");e.textContent=t,e.value=t,this.selector.appendChild(e)}}else this.selector.hidden=!0}keyToString(e){return" "===e?this.msg("key-space"):"ArrowUp"===e?this.msg("key-up"):"ArrowDown"===e?this.msg("key-down"):"ArrowLeft"===e?this.msg("key-left"):"ArrowRight"===e?this.msg("key-right"):"Enter"===e?this.msg("key-enter"):1===e.length?e.toUpperCase():e.replace(/[a-z]([A-Z])/,e=>"".concat(e[0]," ").concat(e[1]))}createButtonMapping(e,t){let{property:n="high",allowClick:s=!0}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const a=document.createElement("input");a.readOnly=!0,a.className="gamepadlib-keyinput",a.title=this.msg("keyinput-title"),a.dataset.index=t;const i=()=>{const s=e[t];if(a.dataset.empty=!1,"key"===s.type)null===s[n]?(a.value=this.msg("key-none"),a.dataset.empty=!0):a.value=this.keyToString(s[n]);else if("mousedown"===s.type){let e=this.msg("key-click");0!==s.button&&(e+=" (".concat(s.button,")")),a.value=e}else a.value="??? ".concat(s.type)},o=()=>{e[t]=d(e[t]),r=!1,a.blur(),i(),a.dispatchEvent(new CustomEvent("mapping-changed")),this.changed()};let r=!1;const l=s=>{if(r){s.preventDefault();const a=s.key;if(["Alt"].includes(a))return;const i=e[t],r=["ArrowUp","ArrowDown","ArrowRight","ArrowLeft","Enter","Shift","CapsLock","ScrollLock","Control","Insert","Home","End","PageUp","PageDown"];1===a.length||r.includes(a)?(i.type="key",i[n]=a):"Escape"!==a&&(i.type="key",i[n]=null),o()}else"Enter"===s.key&&(s.preventDefault(),s.target.click())},c=["Shift","Control"],p=()=>{a.dataset.acceptingInput=!1,r&&(r=!1,i())};return a.addEventListener("contextmenu",e=>{e.preventDefault()}),a.addEventListener("mouseup",n=>{if(n.preventDefault(),r)if(s){const s=e[t];s.type="mousedown",s.button=n.button,o()}else p();else a.value="...",a.dataset.acceptingInput=!0,r=!0}),a.addEventListener("keydown",e=>{c.includes(e.key)||l(e)}),a.addEventListener("keyup",e=>{c.includes(e.key)&&l(e)}),a.addEventListener("blur",p),i(),a}createAxisMapping(e,t){const n=document.createElement("select");n.className="gamepadlib-axis-mapping",n.id=b(t),n.appendChild(Object.assign(document.createElement("option"),{textContent:this.msg("axis-none"),value:"none"})),n.appendChild(Object.assign(document.createElement("option"),{textContent:this.msg("axis-cursor"),value:"cursor"})),n.appendChild(Object.assign(document.createElement("option"),{textContent:"WASD",value:"wasd"})),n.appendChild(Object.assign(document.createElement("option"),{textContent:this.msg("axis-arrows"),value:"arrows"})),n.appendChild(Object.assign(document.createElement("option"),{textContent:this.msg("axis-custom"),value:"custom"}));const s=()=>{"key"===e[t].type||"mousedown"===e[t].type?null===e[t].high&&null===e[t].low&&null===e[t+1].high&&null===e[t+1].low?n.value="none":e[t].high===o[0].high&&e[t].low===o[0].low&&e[t+1].high===o[1].high&&e[t+1].low===o[1].low?n.value="wasd":e[t].high===i[0].high&&e[t].low===i[0].low&&e[t+1].high===i[1].high&&e[t+1].low===i[1].low?n.value="arrows":n.value="custom":"virtual_cursor"===e[t].type?n.value="cursor":n.value="none"};s();const a=document.createElement("div");a.className="gamepadlib-axis-circle-overlay";const l=()=>{if(v(a),"key"===e[t].type){const n=[this.createButtonMapping(e,t+1,{property:"low",allowClick:!1}),this.createButtonMapping(e,t,{property:"low",allowClick:!1}),this.createButtonMapping(e,t,{property:"high",allowClick:!1}),this.createButtonMapping(e,t+1,{property:"high",allowClick:!1})];for(const e of n)e.classList.add("gamepadlib-axis-mapper"),e.addEventListener("mapping-changed",s),a.appendChild(e)}};return l(),n.addEventListener("change",()=>{"custom"===n.value?"key"!==e[t].type&&(e[t]=d(i[0]),e[t+1]=d(i[1])):"arrows"===n.value?(e[t]=d(i[0]),e[t+1]=d(i[1])):"wasd"===n.value?(e[t]=d(o[0]),e[t+1]=d(o[1])):"cursor"===n.value?(e[t]=d(r[0]),e[t+1]=d(r[1])):(e[t]=d({type:"key",high:null,low:null}),e[t+1]=d({type:"key",high:null,low:null})),l(),this.changed()}),{circleOverlay:a,selector:n}}hasControllerSelected(){return!!this.selector.value}updateContent(){if(v(this.content),this.hidden)return;const e=this.selector.value;if(!e){const e=document.createElement("div");return e.textContent=this.msg("no-controllers"),void this.content.appendChild(e)}const t=this.gamepadLib.gamepads.get(e);if(!t){const t=document.createElement("div");return t.textContent="Cannot find controller: ".concat(e),void this.content.appendChild(t)}this.buttonIdToElement.clear(),this.axisIdToElement.clear();const n=document.createElement("div");n.className="gamepadlib-content-buttons";const s=t.buttonMappings;for(let e=0;e<s.length;e++){const t=document.createElement("div");t.className="gamepadlib-mapping",t.dataset.id=e;const a=document.createElement("label");a.className="gamepadlib-mapping-label",a.textContent=this.msg("button-n",{n:e});const i="gamepadlib-button-".concat(e);a.htmlFor=i;const o=document.createElement("div");o.className="gamepadlib-mapping-options";const r=this.createButtonMapping(s,e);r.id=i,o.appendChild(r),t.appendChild(a),t.appendChild(o),n.appendChild(t),this.buttonIdToElement.set(e,t)}const a=document.createElement("div");a.className="gamepadlib-content-axes";const i=t.axesMappings;for(let e=0;e<i.length;e+=2){const t=document.createElement("div");t.className="gamepadlib-axis";const n=document.createElement("label");n.textContent=this.msg("axes-a-b",{a:e,b:e+1}),n.htmlFor=b(e);const s=document.createElement("div");s.className="gamepadlib-axis-circle";const{circleOverlay:o,selector:r}=this.createAxisMapping(i,e);s.appendChild(o);const d=document.createElement("div");d.className="gamepadlib-axis-dot",s.appendChild(d),t.appendChild(n),t.appendChild(s),t.appendChild(r),a.appendChild(t),this.axisIdToElement.set(e,d)}this.content.appendChild(n),this.content.appendChild(a)}update(e){if(this.hidden)return;if(!this.selector.value)return;const t=Array.from(e).find(e=>e&&m(e)===this.selector.value);if(t){for(let e=0;e<t.buttons.length;e++){const n=this.buttonIdToElement.get(e);if(n){const s=t.buttons[e].value.toString();s!==n.dataset.value&&(n.dataset.value=s)}}for(let e=0;e<t.axes.length;e+=2){const n=this.axisIdToElement.get(e);if(n){const s=t.axes[e],a=t.axes[e+1]||0,i=75;n.style.transform="translate(-50%, -50%) translate(".concat(s*i,"px, ").concat(a*i,"px)")}}}}export(){const e=this.selector.value;if(!e)return null;const t=this.gamepadLib.gamepads.get(e);return t?{axes:t.axesMappings.map(c),buttons:t.buttonMappings.map(p)}:null}changed(){this.dispatchEvent(new CustomEvent("mapping-changed"))}hide(){this.hidden=!0,this.updateContent()}focus(){this.selector.value&&this.selector.focus()}generateEditor(){return this.hidden=!1,this.updateAllContent(),this.root}}var f=w,x=n(1457);function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){E(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function E(e,t,n){var s;return(t="symbol"==typeof(s=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var s=n.call(e,t||"default");if("object"!=typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?s:String(s))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var k=n(1564),N=n.n(k),L=n(1565),D=n.n(L);const I={"userscript.js":async function(e){let{addon:t,console:n,msg:s}=e;const a=t.tab.traps.vm;await new Promise(e=>{if(a.editingTarget)return e();a.runtime.once("PROJECT_LOADED",e)});const i=()=>null!==a.runtime._steppingInterval,o=e=>{switch(e){case"right arrow":return"ArrowRight";case"up arrow":return"ArrowUp";case"left arrow":return"ArrowLeft";case"down arrow":return"ArrowDown";case"enter":return"Enter";case"space":return" "}return e.toLowerCase().charAt(0)},r=()=>{const e=[a.runtime.getTargetForStage(),...a.runtime.targets].filter(e=>e.isOriginal).map(e=>e.blocks),t=new Set;for(const n of e)for(const e of Object.values(n._blocks))if("event_whenkeypressed"===e.opcode||"sensing_keyoptions"===e.opcode){if("sensing_keyoptions"===e.opcode&&!e.parent)continue;const n=e.fields.KEY_OPTION.value;t.add(o(n))}return t},d=()=>{const e=a.runtime.getTargetForStage().comments;for(const t of Object.values(e))if(t.text.includes(" // _gamepad_"))return t;return null};f.setConsole(n);const l=new f;l.getUserHints=()=>{const e=(()=>{const e=d();if(!e)return null;const t=e.text.split("\n").find(e=>e.endsWith(" // _gamepad_"));if(!t)return n.warn("Gamepad comment does not contain valid line"),null;const s=t.substr(0,t.length-" // _gamepad_".length);let a;try{if(a=JSON.parse(s),!a||"object"!=typeof a||!Array.isArray(a.buttons)||!Array.isArray(a.axes))throw new Error("Invalid data")}catch(e){return n.warn("Gamepad comment has invalid JSON",e),null}return a})();return e?{importedSettings:e}:{usedKeys:r()}},a.runtime.on("PROJECT_LOADED",()=>{l.resetControls()}),t.settings.get("hide")&&await new Promise(e=>{const n=()=>{t.settings.removeEventListener("change",s),e()},s=()=>{t.settings.get("hide")||n()};l.gamepadConnected().then(n),t.settings.addEventListener("change",s)});const c=a.runtime.renderer,p=c._xRight-c._xLeft,h=c._yTop-c._yBottom,u=c.canvas,g=document.createElement("div");g.className="sa-gamepad-container",t.tab.displayNoneWhileDisabled(g,{display:"flex"});const m=document.createElement("span");m.className=t.tab.scratchClass("button_outlined-button","stage-header_stage-button");const y=document.createElement("div");y.className=t.tab.scratchClass("button_content");const w=document.createElement("img");let v;w.className=t.tab.scratchClass("stage-header_stage-button-icon"),w.draggable=!1,w.src=t.self.getResource("/gamepad.svg"),y.appendChild(w),m.appendChild(y),g.appendChild(m);let b=!1;const A=()=>{a.runtime.emitProjectChanged(),a.editingTarget===a.runtime.getTargetForStage()&&a.emitWorkspaceUpdate()},C=()=>{const e=v.export();if(!e)return void n.warn("Could not export gamepad settings");const t="".concat(s("config-header"),"\n").concat(JSON.stringify(e)).concat(" // _gamepad_"),i=d();if(i)i.text=t;else{a.runtime.getTargetForStage().createComment(Math.random()+"",null,t,50,50,350,150,!1)}A()},E=()=>{b&&C()},k=e=>{b=!!e.target.checked,b?C():(()=>{const e=d();if(e){delete a.runtime.getTargetForStage().comments[e.id],A()}})()},N=()=>{document.body.classList.toggle("sa-gamepad-has-controller",v.hasControllerSelected()),E()};m.addEventListener("click",()=>{v||(v=l.editor(),v.msg=s,v.addEventListener("mapping-changed",E),v.addEventListener("gamepad-changed",N));const e=v.generateEditor();N();const{backdrop:n,container:a,content:i,closeButton:o,remove:r}=t.tab.createModal(s("settings"),{isOpen:!0,useEditorClasses:!0});if(n.addEventListener("click",r),window.addEventListener("keydown",e=>{"Escape"!==e.key||e.target.closest("[data-accepting-input]")||r()}),t.self.addEventListener("disabled",r),n.classList.add("sa-gamepad-popup-outer"),a.classList.add("sa-gamepad-popup"),o.tabIndex="0",o.setAttribute("role","button"),o.addEventListener("click",r),o.addEventListener("keydown",e=>{"Enter"!==e.key&&" "!==e.key||r()}),i.classList.add("sa-gamepad-popup-content"),f.browserHasBrokenGamepadAPI()){const e=document.createElement("div");e.textContent=s("browser-support"),e.className="sa-gamepad-browser-support-warning",i.appendChild(e)}i.appendChild(e);const d=document.createElement("div");d.className="sa-gamepad-extra-options",i.appendChild(d);const c=()=>{v.updateAllContent(),g.checked=!1,b=!1},p=document.createElement("button");p.className="sa-gamepad-reset-button",p.textContent=s("reset"),p.addEventListener("click",()=>{l.resetControls(),c()}),d.appendChild(p);const h=document.createElement("button");h.className="sa-gamepad-reset-button",h.textContent=s("clear"),h.addEventListener("click",()=>{l.clearControls(),c()}),d.appendChild(h);const u=document.createElement("label");u.className="sa-gamepad-store-settings",u.textContent=s("store-in-project");const g=document.createElement("input");g.type="checkbox",g.checked=b,g.addEventListener("change",k),u.prepend(g),d.appendChild(u),v.focus()}),Object(x.a)();const L=document.createElement("img");let D;L.hidden=!0,L.className="sa-gamepad-cursor",L.src=t.self.getResource("/cursor.png"),t.self.addEventListener("disabled",()=>{L.hidden=!0});const I=e=>{L.hidden=!e,clearTimeout(D),e&&(document.body.classList.add("sa-gamepad-hide-cursor"),D=setTimeout(T,8e3))},T=()=>{I(!1)},S=e=>{I(!0),L.classList.toggle("sa-gamepad-cursor-down",e)};let O;if(document.addEventListener("mousemove",()=>{I(!1),document.body.classList.remove("sa-gamepad-hide-cursor")}),window.ResizeObserver){let e=p,t=h;new ResizeObserver(n=>{for(const s of n)e=s.contentRect.width,t=s.contentRect.height}).observe(u),O=()=>[e,t]}else O=()=>{const e=u.getBoundingClientRect();return[e.width,e.height]};let j=0,P=0;const Z=e=>{if(t.self.disabled||!i())return;const[n,s]=O();a.postIOData("mouse",M(M({},e),{},{canvasWidth:n,canvasHeight:s,x:(j+p/2)*(n/p),y:s/h*(h/2-P)}))},B=(e,n)=>{!t.self.disabled&&i()&&a.postIOData("keyboard",{key:e,isDown:n})};for(l.virtualCursor.maxX=c._xRight,l.virtualCursor.minX=c._xLeft,l.virtualCursor.maxY=c._yTop,l.virtualCursor.minY=c._yBottom,l.addEventListener("keydown",e=>B(e.detail,!0)),l.addEventListener("keyup",e=>B(e.detail,!1)),l.addEventListener("mousedown",e=>{S(!0),Z({isDown:!0,button:e.detail})}),l.addEventListener("mouseup",e=>{S(!1),Z({isDown:!1,button:e.detail})}),l.addEventListener("mousemove",e=>{j=e.detail.x,P=e.detail.y,((e,t)=>{I(!0);const n=p/2+e-3,s=h/2-t-3;L.style.transform="translate(".concat(n,"px, ").concat(s,"px)")})(j,P),Z({})});;){const e=await t.tab.waitForElement('[class^="stage-header_stage-size-row"], [class^="stage-header_fullscreen-buttons-row_"]',{markAsSeen:!0,reduxEvents:["scratch-gui/mode/SET_PLAYER","scratch-gui/mode/SET_FULL_SCREEN","fontsLoaded/SET_FONTS_LOADED","scratch-gui/locales/SELECT_LOCALE"]});g.dataset.editorMode=t.tab.editorMode,e.closest('[class^="stage-header_stage-size-row"]')?t.tab.appendToSharedSpace({space:"stageHeader",element:g,order:1}):t.tab.appendToSharedSpace({space:"fullscreenStageHeader",element:g,order:0});document.querySelector("[class^='monitor-list_monitor-list-scaler']").appendChild(L)}},"style.css":N.a,"gamepadlib.css":D.a,"active.png":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGAQMAAADaAn0LAAAABlBMVEX///8AAABVwtN+AAAADklEQVQI12MAAQMgBAIAAkwAYUis6mUAAAAASUVORK5CYII=","close.svg":"data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9IkxheWVyIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDcuNDggNy40OCI+PHBhdGggZD0iTTMuNzQgNi40OFYxTTEgMy43NGg1LjQ4IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZmZmO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MnB4Ii8+PC9zdmc+","cursor.png":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGAQMAAADaAn0LAAAABlBMVEUAAAD///+l2Z/dAAAADklEQVQI12MAAQMgBAIAAkwAYUis6mUAAAAASUVORK5CYII=","dot.svg":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiIHZpZXdCb3g9IjAgMCAyLjExNyAyLjExNyI+PGNpcmNsZSBjeD0iMS4wNTgiIGN5PSIxLjA1OCIgcj0iMS4wNTgiIGZpbGw9InJlZCIvPjwvc3ZnPg==","gamepad.svg":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGFyaWEtaGlkZGVuPSJ0cnVlIiB3aWR0aD0iMWVtIiBoZWlnaHQ9IjFlbSIgc3R5bGU9Ii1tcy10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZmlsbD0iIzU3NWU3NSIgZD0iTTM2OCAxNjhoLTk2di02NGgxNzZhMjQuMDI3IDI0LjAyNyAwIDAgMCAyNC0yNFYxNmgtMzJ2NTZIMjY0YTI0LjAyNyAyNC4wMjcgMCAwIDAtMjQgMjR2NzJoLTk2QTEyOC4xNDUgMTI4LjE0NSAwIDAgMCAxNiAyOTZ2MTAwLjk1M0E5MS4xNSA5MS4xNSAwIDAgMCAxMDcuMDQ3IDQ4OGgxLjhhOTAuODA3IDkwLjgwNyAwIDAgMCA2OS45NTMtMzIuNzZMMjMxLjUgMzkyaDQ4LjYyOGw1Mi42NjYgNjguNDY1QTkxLjA0NiA5MS4wNDYgMCAwIDAgNDk2IDQwNC45NTNWMjk2YTEyOC4xNDUgMTI4LjE0NSAwIDAgMC0xMjgtMTI4em05NiAyMzYuOTUzYTU5LjA0NyA1OS4wNDcgMCAwIDEtMTA1Ljg0OSAzNkwyOTUuODc4IDM2MGgtNzkuMzcybC02Mi4yOTQgNzQuNzU0QTU4Ljg5MyA1OC44OTMgMCAwIDEgMTA4Ljg1IDQ1NmgtMS44QTU5LjExMyA1OS4xMTMgMCAwIDEgNDggMzk2Ljk1M1YyOTZhOTYuMTA4IDk2LjEwOCAwIDAgMSA5Ni05NmgyMjRhOTYuMTA4IDk2LjEwOCAwIDAgMSA5NiA5NnoiLz48cGF0aCBmaWxsPSIjNTc1ZTc1IiBkPSJNMzYwIDI0OGgzMnYzMmgtMzJ6bTAgODBoMzJ2MzJoLTMyem0tNDAtNDBoMzJ2MzJoLTMyem04MCAwaDMydjMyaC0zMnptLTI0OC00MGgtMzJ2NDBIODB2MzJoNDB2NDBoMzJ2LTQwaDQwdi0zMmgtNDB2LTQweiIvPjwvc3ZnPg=="}}}]);