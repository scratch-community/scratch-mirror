(window.webpackJsonpGUI=window.webpackJsonpGUI||[]).push([[27],{1720:function(t,o,e){(t.exports=e(9)(!1)).push([t.i,".blocklyEditableText > text {\n  fill: var(--editorTheme3-inputColor-text);\n}\n.blocklyHtmlInput {\n  background-color: var(--editorTheme3-inputColor);\n  color: var(--editorTheme3-inputColor-text);\n}\n\n.blocklyDropDownDiv .goog-menuitem-highlight,\n.blocklyDropDownDiv .goog-menuitem-hover,\n.sa-contextmenu-colored .blocklyContextMenu .goog-menuitem-highlight {\n  background-color: var(--editorTheme3-hoveredItem, rgba(0, 0, 0, 0.2));\n}\n\n.scratchCommentRect {\n  fill: var(--editorTheme3-commentColor);\n}\n.scratchCommentBody,\n.scratchCommentTextarea {\n  background-color: var(--editorTheme3-commentColor);\n}\n.scratchWorkspaceCommentBorder {\n  stroke: var(--editorTheme3-commentBorder);\n}\n.scratchCommentTextarea::placeholder {\n  color: var(--editorTheme3-commentTextTransparent);\n}\n.scratchCommentText {\n  fill: var(--editorTheme3-commentText);\n  color: var(--editorTheme3-commentText);\n}\n",""])},1721:function(t,o,e){(t.exports=e(9)(!1)).push([t.i,'@namespace xlink url("http://www.w3.org/1999/xlink");\n\n.scratchCategoryItemBubble::after {\n  /* block-palette-icons */\n  filter: brightness(0);\n}\n\n.blocklyEditableText > text {\n  fill: var(--editorTheme3-inputColor-blackText);\n}\n.blocklyHtmlInput {\n  color: var(--editorTheme3-inputColor-blackText);\n}\n\n[class*="blocks_blocks_"] image[xlink|href$="/rotate-left.svg"],\n[class*="blocks_blocks_"] image[xlink|href$="/rotate-right.svg"],\n[class*="blocks_blocks_"] image[xlink|href$="/repeat.svg"] {\n  filter: invert(1) hue-rotate(180deg);\n}\n\n.blocklyDropDownDiv .goog-menuitem,\n.sa-contextmenu-colored .blocklyContextMenu .goog-menuitem .goog-menuitem-content {\n  color: black;\n}\n.blocklyDropDownDiv .blocklyText {\n  fill: black;\n}\n\n/* Compatibility */\n\n.sa-block-color {\n  --sa-block-text: black;\n  --sa-block-gray-text: black;\n  --sa-block-colored-text: var(--sa-block-background-tertiary);\n  --sa-block-text-on-bright-background: black;\n}\n',""])},1722:function(t,o,e){(t.exports=e(9)(!1)).push([t.i,".scratchCategoryItemBubble::after {\n  /* block-palette-icons */\n  filter: brightness(0);\n  opacity: 0.6;\n}\n\n.u-dropdown-searchbar,\n.u-dropdown-searchbar:focus,\n.blocklyDropDownDiv .goog-menuitem,\n.sa-contextmenu-colored .blocklyContextMenu .goog-menuitem .goog-menuitem-content {\n  color: #575e75;\n}\n.u-dropdown-searchbar:focus {\n  background-color: var(--editorTheme3-hoveredItem);\n}\n\n.blocklyAngleDragHandle {\n  stroke: black;\n  stroke-opacity: 0.15;\n  paint-order: stroke fill;\n}\n\n.scratchCommentRect {\n  fill: #feffff;\n}\n.scratchCommentBody,\n.scratchCommentTextarea {\n  background-color: #ffffff;\n}\n.scratchWorkspaceCommentBorder {\n  stroke: var(--editorTheme3-commentColor);\n}\n.scratchCommentTextarea::placeholder {\n  color: rgba(0, 0, 0, 0.5);\n}\n.scratchCommentText {\n  fill: #575e75;\n  color: #575e75;\n}\n\n/* Compatibility */\n\n.sa-block-color {\n  --sa-block-colored-background: var(--sa-block-background-secondary);\n  --sa-block-colored-background-secondary: var(--sa-block-field-background);\n  --sa-block-bright-background: var(--sa-block-background-tertiary);\n  --sa-block-text: var(--sa-block-background-tertiary);\n  --sa-block-gray-text: #575e75;\n  --sa-block-colored-text: var(--sa-block-background-tertiary);\n  --sa-block-text-on-bright-background: white;\n}\n",""])},1723:function(t,o,e){(t.exports=e(9)(!1)).push([t.i,".u-dropdown-searchbar {\n  border-color: rgba(255, 255, 255, 0.15);\n}\n.u-dropdown-searchbar:focus {\n  background-color: var(--editorTheme3-hoveredItem);\n}\n.blocklyDropDownDiv .goog-menuitem-checkbox {\n  filter: brightness(0) invert(1);\n}\n\n.scratchCommentRect {\n  fill: #282828;\n}\n.scratchCommentBody,\n.scratchCommentTextarea {\n  background-color: #282828;\n}\n.scratchWorkspaceCommentBorder {\n  stroke: var(--editorTheme3-commentColor);\n}\n.scratchCommentTextarea::placeholder {\n  color: rgba(255, 255, 255, 0.5);\n}\n.scratchCommentText {\n  fill: #ffffff;\n  color: #ffffff;\n}\n\n/* Compatibility */\n\n.sa-block-color {\n  --sa-block-colored-background: var(--sa-block-background-secondary);\n  --sa-block-colored-background-secondary: var(--sa-block-field-background);\n  --sa-block-bright-background: var(--sa-block-background-tertiary);\n  --sa-block-text: var(--sa-block-background-tertiary);\n  --sa-block-gray-text: white;\n  --sa-block-colored-text: var(--sa-block-background-tertiary);\n  --sa-block-text-on-bright-background: white;\n}\n",""])},1794:function(t,o,e){"use strict";e.r(o),e.d(o,"resources",(function(){return m}));var r=e(1639);const n=new RegExp("^data:image/svg\\+xml;base64,([A-Za-z0-9+/=]*)$"),l={id:null,settingId:"Pen-color",colorId:"pen"},c={id:null,settingId:"tw-color",colorId:"tw"},i={settingId:"sa-color",colorId:"sa"},s=[{id:"motion",settingId:"motion-color",colorId:"motion"},{id:"looks",settingId:"looks-color",colorId:"looks"},{id:"sound",settingId:"sounds-color",colorId:"sounds"},{id:"events",settingId:"events-color",colorId:"event"},{id:"control",settingId:"control-color",colorId:"control"},{id:"sensing",settingId:"sensing-color",colorId:"sensing"},{id:"operators",settingId:"operators-color",colorId:"operators"},{id:"variables",settingId:"data-color",colorId:"data"},{id:"lists",settingId:"data-lists-color",colorId:"data_lists"},{id:"myBlocks",settingId:"custom-color",colorId:"more"},l,c,i];var a=e(1720),d=e.n(a),b=e(1721),g=e.n(b),h=e(1722),u=e.n(h),p=e(1723),k=e.n(p);const m={"theme3.js":async function({addon:t,console:o}){const e=await t.tab.traps.getBlockly(),a=JSON.parse(JSON.stringify(e.Colours));a.sa={primary:"#29beb8",secondary:"#3aa8a4",tertiary:"#3aa8a4"},a.tw={primary:"#ff4c4c",secondary:"#e64444",tertiary:"#e64444"};let d=t.settings.get("text");const b=()=>t.self.disabled?"white":d,g=()=>"colorOnWhite"===b()||"colorOnBlack"===b(),h=o=>t.self.disabled?a[o.colorId].primary:"colorOnWhite"===b()?"#feffff":"colorOnBlack"===b()?"#282828":t.settings.get(o.settingId),u=o=>t.self.disabled?a[o.colorId].secondary:g()?Object(r.a)(h(o),Object(r.d)(t.settings.get(o.settingId),{a:.15})):"black"===b()?Object(r.b)(t.settings.get(o.settingId),{r:.6,g:.6,b:.6}):Object(r.d)(t.settings.get(o.settingId),{r:.9,g:.9,b:.9}),p=o=>t.self.disabled?a[o.colorId].tertiary:g()?t.settings.get(o.settingId):"black"===b()?Object(r.d)(t.settings.get(o.settingId),{r:.65,g:.65,b:.65}):Object(r.d)(t.settings.get(o.settingId),{r:.8,g:.8,b:.8}),k=o=>{if(o instanceof e.Block||o instanceof e.Field){const t=o instanceof e.Block?o:o.sourceBlock_;if(g()||"black"===b()){let o;return o=t.isShadow()&&t.getParent()?t.getParent().getColour():t.getColour(),g()?Object(r.a)(o,Object(r.d)(t.getColourTertiary(),{a:.25})):Object(r.b)(o,{r:.4,g:.4,b:.4})}return t.getColourTertiary()}return g()?Object(r.a)(h(o),Object(r.d)(t.settings.get(o.settingId),{a:.25})):"black"===b()?Object(r.b)(h(o),{r:.4,g:.4,b:.4}):p(o)},m=o=>t.self.disabled||"white"===b()?"#ffffff":"black"===b()?"#000000":o?o.sourceBlock_.getColourTertiary():"#000000",f=()=>t.self.disabled?"#ffffff":{white:"#ffffff",black:"#575e75",colorOnWhite:"#575e75",colorOnBlack:"#ffffff"}[b],y=e.Block.prototype.makeColour_;e.Block.prototype.makeColour_=function(t){return"string"==typeof t&&/^#(?:[0-9A-Za-z]{2}){3,4}$/.test(t)?t:y(t)};const x=e.Toolbox.Category.prototype.createDom;e.Toolbox.Category.prototype.createDom=function(){if(this.iconURI_){if(t.self.disabled)return x.call(this);if(!["sa-blocks","videoSensing","text2speech"].includes(this.id_))return x.call(this);const o=n.exec(this.iconURI_);if(o){const t=atob(o[1]),e="sa-blocks"===this.id_?i:l,r=g?p(e):h(e);if(r){const o=t.replace(/#29beb8|#0ebd8c/gi,r);this.iconURI_="data:image/svg+xml;base64,".concat(btoa(o))}}}if(x.call(this),this.iconURI_)return;const o=s.find(t=>t.id===this.id_);o&&(this.bubble_.style.backgroundColor=g()?k(o):h(o),this.bubble_.style.borderColor=p(o))};const C=e.Block.prototype.setColour;e.Block.prototype.setColour=function(t,o,e){return t.toLowerCase()===a.pen.primary.toLowerCase()&&(t=h(l),o=u(l),e=p(l)),this.type.startsWith("tw_")&&(t=h(c),o=u(c),e=p(c)),C.call(this,t,o,e)};const v=e.BlockSvg.prototype.updateColour;e.BlockSvg.prototype.updateColour=function(){if(v.call(this),g())for(const t of this.inputList)t.outlinePath&&t.outlinePath.setAttribute("fill",k(this))};const I=e.BlockSvg.prototype.showContextMenu_;e.BlockSvg.prototype.showContextMenu_=function(t){return e.WidgetDiv.DIV.style.setProperty("--editorTheme3-hoveredItem",k(this)),I.call(this,t)};const _=e.FieldLabel.prototype.init;e.FieldLabel.prototype.init=function(){_.call(this),this.textElement_.style.fill=m(this)};const w=e.FieldTextInput.prototype.init;e.FieldTextInput.prototype.init=function(){w.call(this),this.sourceBlock_.isShadow()||this.box_.setAttribute("fill",k(this))};const T=e.FieldDropdown.prototype.init;e.FieldDropdown.prototype.init=function(){T.call(this),this.textElement_.style.setProperty("fill",m(this),"important"),"#ffffff"!==m(this)&&(this.arrow_.style.filter=Object(r.f)(m(this)))};const D=e.FieldDropdown.prototype.showEditor_;e.FieldDropdown.prototype.showEditor_=function(){let t;D.call(this),this.disableColourChange_||(this.sourceBlock_.isShadow()?this.sourceBlock_.setShadowColour(k(this)):this.box_&&this.box_.setAttribute("fill",k(this))),t=this.sourceBlock_.isShadow()&&this.sourceBlock_.getParent()?this.sourceBlock_.getParent().getColour():this.sourceBlock_.getColour(),e.DropDownDiv.DIV_.style.backgroundColor=Object(r.g)(t),g()?e.DropDownDiv.getContentDiv().style.setProperty("--editorTheme3-hoveredItem",k(this)):e.DropDownDiv.getContentDiv().style.removeProperty("--editorTheme3-hoveredItem")};const B=e.FieldVariable.prototype.init;e.FieldVariable.prototype.init=function(){B.call(this),this.textElement_.style.setProperty("fill",m(this),"important")};const F=e.FieldVariableGetter.prototype.init;e.FieldVariableGetter.prototype.init=function(){F.call(this),this.textElement_.style.fill=m(this)};const O=e.FieldMatrix.prototype.updateMatrix_;e.FieldMatrix.prototype.updateMatrix_=function(){O.call(this);for(let t=0;t<this.matrix_.length;t++)"0"!==this.matrix_[t]&&(this.fillMatrixNode_(this.ledButtons_,t,f()),this.fillMatrixNode_(this.ledThumbNodes_,t,f()))};const S=e.FieldMatrix.prototype.createButton_;e.FieldMatrix.prototype.createButton_=function(t){return"#FFFFFF"===t&&(t=f()),S.call(this,t)};const j=e.FieldVerticalSeparator.prototype.init;e.FieldVerticalSeparator.prototype.init=function(){j.call(this),"black"===b()&&this.lineElement_.setAttribute("stroke",this.sourceBlock_.getColourTertiary())};const E=()=>{const o=t.tab.traps.vm;d=t.settings.get("text");for(const t of s){const o="--editorTheme3-".concat(t.colorId);for(const[e,r]of Object.entries({primary:h(t),secondary:u(t),tertiary:p(t),field:k(t)}))document.documentElement.style.setProperty("".concat(o,"-").concat(e),r);e.Colours[t.colorId]&&(e.Colours[t.colorId].primary=h(t),e.Colours[t.colorId].secondary=u(t),e.Colours[t.colorId].tertiary=p(t))}var r,n;t.tab.setCustomBlockColor({color:h(i),secondaryColor:u(i),tertiaryColor:p(i)}),e.Colours.textField=(r="input-color",n="textField",t.self.disabled?a[n]:t.settings.get(r)),"#575e75"===f()?e.Colours.fieldShadow="rgba(0, 0, 0, 0.15)":e.Colours.fieldShadow=a.fieldShadow;const l=e.getMainWorkspace(),c=l.getFlyout(),b=l.getToolbox();o.editingTarget&&o.emitWorkspaceUpdate();const g=c.getWorkspace();e.Xml.clearWorkspaceAndLoadFromXml(e.Xml.workspaceToDom(g),g),b.populate_(l.options.languageTree),l.toolboxRefreshEnabled_=!0};E(),t.settings.addEventListener("change",E),t.self.addEventListener("disabled",E),t.self.addEventListener("reenabled",E)},"theme3.css":d.a,"black_text.css":g.a,"color_on_white.css":u.a,"color_on_black.css":k.a}}}]);