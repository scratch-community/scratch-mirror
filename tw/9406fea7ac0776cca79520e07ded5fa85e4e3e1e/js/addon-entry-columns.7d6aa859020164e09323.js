(window.webpackJsonpGUI=window.webpackJsonpGUI||[]).push([[12],{1748:function(t,e,n){(t.exports=n(9)(!1)).push([t.i,'[class*="blocks_blocks_"] .blocklyToolboxDiv {\n  width: 310px;\n  height: auto !important;\n}\n\n.scratchCategoryMenu {\n  width: 100%;\n  columns: 2;\n  column-gap: 0.5rem;\n  padding: 0.25rem;\n}\n\n.scratchCategorySecondMenu {\n  columns: 1;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  padding-bottom: 2.25rem;\n}\n\n.scratchCategorySecondMenu:empty {\n  padding-top: 0;\n  padding-bottom: 2rem;\n}\n\n.scratchCategoryMenuItem {\n  display: inline-flex; /* inline so that it isn\'t split between both columns */\n  width: 100%;\n  padding: 0.25rem;\n  border-radius: 0.875rem;\n}\n\n.scratchCategoryItemBubble,\n.scratchCategoryItemIcon {\n  margin: 0;\n  margin-inline-end: 0.5rem;\n}\n\n.scratchCategoryMenuItemLabel {\n  flex: 1;\n  display: flex;\n  align-items: center;\n}\n\n[class*="gui_extension-button-container_"] {\n  top: var(--sa-add-extension-button-y);\n  bottom: auto;\n  margin-inline-start: 0.5rem;\n  width: calc(308px - 1rem);\n  height: calc(1.75rem - 2px);\n  background-color: transparent;\n  border-color: var(--ui-black-transparent, rgba(0, 0, 0, 0.15));\n}\n\n/* [dir] is for specificity to override editor-stage-left */\n[dir] [class*="gui_extension-button-container_"] {\n  border-radius: 0.25rem;\n}\n\n[class*="gui_extension-button-container_"]:hover {\n  background-color: var(--ui-tertiary, white);\n}\n\n[class*="gui_extension-button-container_"]::before {\n  display: none;\n}\n\n[class*="gui_extension-button_"] {\n  display: flex;\n  align-items: center;\n  padding-inline: 0;\n}\n\n[class*="gui_extension-button-icon_"] {\n  filter: var(--editorDarkMode-categoryMenu-invertedFilter, brightness(0.4));\n}\n\n[class*="gui_extension-button-container_"]:hover [class*="gui_extension-button-icon_"] {\n  filter: var(--editorDarkMode-accent-invertedFilter, brightness(0.4));\n}\n[theme="dark"] [class*="gui_extension-button-icon_"] {\n  filter: none !important;\n}\n\n.sa-add-extension-label {\n  color: var(--text-primary, #575e75);\n  font-size: 0.65rem;\n}\n\n[class*="gui_extension-button-container_"]:hover .sa-add-extension-label {\n  color: var(--text-primary, #575e75);\n  font-size: 0.65rem;\n}\n\n/* hide-flyout compatibility */\n\n[class*="gui_tabs_"] {\n  --sa-flyout-width: 310px;\n  --sa-category-width: 0;\n}\n\n.sa-flyout-placeHolder {\n  top: calc(var(--sa-flyout-y));\n}\n',""])},1814:function(t,e,n){"use strict";n.r(e),n.d(e,"resources",(function(){return s}));var o=n(1748);const s={"userscript.js":async function({addon:t,msg:e,console:n}){const o=await t.tab.traps.getBlockly(),s=o.Toolbox.prototype.position;o.Toolbox.prototype.position=function(){s.call(this),this.HtmlDiv&&!this.HtmlDiv._observer&&(this.HtmlDiv._observer=new ResizeObserver(()=>{this.flyout_.position()}),this.HtmlDiv._observer.observe(this.HtmlDiv))};const i=o.VerticalFlyout.prototype.position;o.VerticalFlyout.prototype.position=function(){if(i.call(this),t.self.disabled||!this.isVisible())return;var e=this.targetWorkspace_.getMetrics();if(!e)return;var n=this.toolboxPosition_===o.TOOLBOX_AT_RIGHT?e.viewWidth-3:0,s=this.parentToolbox_.HtmlDiv.offsetHeight;this.width_=this.parentToolbox_.getWidth(),this.height_=Math.max(0,e.viewHeight-s),this.setBackgroundPath_(this.width_,this.height_),this.svgGroup_.setAttribute("width",this.width_),this.svgGroup_.setAttribute("height",this.height_);var a="translate("+n+"px,"+s+"px)";o.utils.setCssTransform(this.svgGroup_,a),this.scrollbar_&&(this.scrollbar_.setOrigin(n+(this.toolboxPosition_===o.TOOLBOX_AT_RIGHT?0:this.width_-this.getWidth()),s),this.scrollbar_.resize());const r=this.svgGroup_.closest("[class*='gui_tab-panel_']");r.style.setProperty("--sa-add-extension-button-y","".concat(s-33,"px")),r.parentElement.style.setProperty("--sa-flyout-y","".concat(s,"px"))};const a=o.VerticalFlyout.prototype.getWidth;o.VerticalFlyout.prototype.getWidth=function(){let e=a.call(this);return t.self.disabled||(e+=60),e};const r=o.Toolbox.CategoryMenu.prototype.createDom;o.Toolbox.CategoryMenu.prototype.createDom=function(){r.call(this),t.self.disabled||(this.secondTable=document.createElement("div"),this.secondTable.className="scratchCategorySecondMenu "+(this.parent_.horizontalLayout_?"scratchCategoryMenuHorizontal":"scratchCategoryMenu"),this.parentHtml_.appendChild(this.secondTable))};const l=o.Toolbox.CategoryMenu.prototype.populate;o.Toolbox.CategoryMenu.prototype.populate=function(e){if(!e)return;const n=["motion","looks","sound","events","control","sensing","operators","variables","lists","myBlocks"],s=[],i=e.cloneNode(!0);t.self.disabled||i.childNodes.forEach(t=>{"category"!==t.tagName||n.includes(t.id)||(s.push(t.cloneNode(!0)),t.remove())}),l.call(this,i);for(const t of s){const e=document.createElement("div");e.className="scratchCategoryMenuRow",this.secondTable.appendChild(e),t&&this.categories_.push(new o.Toolbox.Category(this,e,t))}t.self.disabled||(this.height_=this.table.offsetHeight+this.secondTable.offsetHeight)};const c=o.Toolbox.CategoryMenu.prototype.dispose;function d(){const e=o.getMainWorkspace(),n=e.getToolbox();if(!n)return;const s=n.categoryMenu_;s&&(s.secondTable&&!t.self.disabled||(s.dispose(),s.createDom(),n.populate_(e.options.languageTree),n.position()))}for(o.Toolbox.CategoryMenu.prototype.dispose=function(){c.call(this),this.secondTable&&(this.secondTable.remove(),this.secondTable=null)},d(),t.self.addEventListener("disabled",d),t.self.addEventListener("reenabled",d);;){const e=await t.tab.waitForElement("[class*='gui_extension-button_']",{markAsSeen:!0,reduxEvents:["scratch-gui/mode/SET_PLAYER","fontsLoaded/SET_FONTS_LOADED","scratch-gui/locales/SELECT_LOCALE"],condition:()=>!t.tab.redux.state.scratchGui.mode.isPlayerOnly}),n=Object.assign(document.createElement("span"),{className:"sa-add-extension-label",innerText:t.tab.scratchMessage("gui.gui.addExtension")});t.tab.displayNoneWhileDisabled(n),e.appendChild(n),e.removeAttribute("title")}},"style.css":n.n(o).a}}}]);