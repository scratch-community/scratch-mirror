(window.webpackJsonpGUI=window.webpackJsonpGUI||[]).push([[25],{1641:function(e,n,t){"use strict";t.r(n),t.d(n,"resources",(function(){return s}));const s={"userscript.js":async function(e){let{addon:n,msg:t}=e;const s=await n.tab.traps.getBlockly();let o=null;function i(e,s){return o||(o=[...e]),n.self.disabled||(e.push(["-","-"],[",",","],[".","."]),e.splice(5,0,[t("enter-key"),"enter"]),n.settings.get("experimentalKeys")&&e.push(["`","`"],["=","="],["[","["],["]","]"],["\\","\\"],[";",";"],["'","'"],["/","/"]),s&&n.settings.get("shiftKeys")&&e.push(["!","!"],["@","@"],["#","#"],["$","$"],["%","%"],["^","^"],["&","&"],["*","*"],["(","("],[")",")"],["_","_"],["+","+"],["{","{"],["}","}"],["|","|"],[":",":"],['"','"'],["?","?"],["<","<"],[">",">"],["~","~"]),n.settings.get("twKeys")&&e.push(["backspace","backspace"],["delete","delete"],["shift","shift"],["caps lock","caps lock"],["scroll lock","scroll lock"],["control","control"],["escape","escape"],["insert","insert"],["home","home"],["end","end"],["page up","page up"],["page down","page down"])),e}for(const e of["sensing_keyoptions","event_whenkeypressed"]){const n=s.Blocks[e],t=n.init;n.init=function(){const n=this.jsonInit;this.jsonInit=function(t){return i(t.args0[0].options,"event_whenkeypressed"===e),n.call(this,t)};for(var s=arguments.length,o=new Array(s),c=0;c<s;c++)o[c]=arguments[c];return t.call(this,...o)}}const c=()=>{const e=Blockly.getMainWorkspace(),n=e&&e.getFlyout();if(e&&n){const t=[...e.getAllBlocks(),...n.getWorkspace().getAllBlocks()];for(const e of t){if("event_whenkeypressed"!==e.type&&"sensing_keyoptions"!==e.type)continue;const n=e.inputList[0];if(!n)continue;const t=n.fieldRow.find(e=>e&&Array.isArray(e.menuGenerator_));t&&(t.menuGenerator_=i(o?[...o]:t.menuGenerator_,"event_whenkeypressed"===e.type))}}};c(),n.settings.addEventListener("change",c),n.self.addEventListener("disabled",c),n.self.addEventListener("reenabled",c)}}}}]);