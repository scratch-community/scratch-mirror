(window.webpackJsonpGUI=window.webpackJsonpGUI||[]).push([[47],{1470:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return a}));let o=!1;const i={paintSkew:null,paintSnap:null};function a(t,e){if(o)return;o=!0;const n=e.prototype.onMouseDrag;e.prototype.onMouseDrag=function(t){if(!this.active)return;const e=()=>{i.paintSnap?i.paintSnap.call(this,t):n.call(this,t)};i.paintSkew?i.paintSkew.call(this,t,e):e()}}},1545:function(t,e,n){(t.exports=n(9)(!1)).push([t.i,'.sa-paint-snap-button {\n  position: relative;\n}\n.sa-paint-snap-button:focus-within {\n  background-color: var(--editorDarkMode-primary-transparent35, hsla(260, 60%, 60%, 0.35));\n}\n.sa-paint-snap-button[data-enabled="true"] .sa-paint-snap-image {\n  filter: brightness(0) invert(1);\n}\n.sa-paint-snap-button[data-enabled="true"] {\n  background-color: var(--looks-secondary);\n}\n\n.sa-paint-snap-group {\n  position: relative;\n  flex-direction: row;\n}\n\n.sa-paint-snap-settings-wrapper {\n  position: absolute;\n  justify-items: center;\n  left: 50%;\n  width: 1.95rem;\n  height: 1.95rem;\n  display: grid;\n}\n\n.sa-paint-snap-settings {\n  position: absolute;\n  bottom: 100%;\n  /* based on the styles for the color dropdown */\n  padding: 4px;\n  border-radius: 4px;\n  border: 1px solid var(--ui-black-transparent);\n  box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.3);\n  transition-property: bottom, opacity;\n  transition-duration: 500ms;\n  transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  opacity: 0;\n  pointer-events: none;\n  background: var(--ui-modal-background);\n  color: var(--ui-text-primary);\n  min-height: 100%;\n  min-width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 0.25em;\n}\n.sa-paint-snap-settings[data-visible="true"] {\n  bottom: calc(100% + 22px);\n  pointer-events: auto;\n  opacity: 1;\n  z-index: 200;\n}\n\n.sa-paint-snap-settings-line {\n  display: flex;\n  justify-content: flex-end;\n  align-items: baseline;\n}\n\n.sa-paint-snap-settings-input {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  text-align: center;\n  border: 0;\n  background: transparent;\n  -moz-appearance: textfield;\n  border: 0;\n  outline: 0;\n}\n\n.sa-paint-snap-settings-input::-webkit-outer-spin-button,\n.sa-paint-snap-settings-input::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n.sa-paint-snap-settings-tip {\n  position: absolute;\n  bottom: 0;\n  transform: translateY(100%);\n  right: calc(50% - 7px);\n}\n.sa-paint-snap-settings-polygon {\n  fill: var(--ui-modal-background);\n  stroke: var(--ui-black-transparent);\n}\n\n.sa-paint-snap-settings-separator {\n  flex-grow: 1;\n  border-bottom: 1px solid currentColor;\n  margin: 4px;\n  opacity: 0.25;\n}\n\n.sa-paint-snap-settings-section {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25em;\n  align-items: flex-end;\n  width: 100%;\n}\n\n.sa-paint-snap-settings-section-title {\n  font-size: 1.2em;\n  font-weight: 500;\n  align-self: flex-start;\n  margin-left: 4px;\n}\n\n.sa-paint-snap-settings-label {\n  white-space: nowrap;\n}\n\n.sa-paint-snap-image[data-shrink="true"] {\n  height: 1em;\n  width: 1em;\n}\n',""])},1597:function(t,e,n){"use strict";n.r(e),n.d(e,"resources",(function(){return A}));let o=!0;const i={pageEdges:!0,pageCenter:!0,pageAxes:!0,pageCorners:!1,objectEdges:!0,objectCenters:!0,objectMidlines:!0,objectCorners:!1},a={boxCenter:!0,boxCorners:!1,boxEdgeMids:!1};let r,s=10;function l(t,e){i[t]=!!e}function c(t,e){a[t]=!!e}function d(t){s=t}function p(){o=!0}function u(){o=!1}function m(t){t?p():u()}function g(t){r=t}function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(Object(n),!0).forEach((function(e){v(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function v(t,e,n){var o;return(e="symbol"==typeof(o=function(t,e){if("object"!=typeof t||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,e||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(e,"string"))?o:String(o))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function y(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?y(Object(n),!0).forEach((function(e){w(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function w(t,e,n){var o;return(e="symbol"==typeof(o=function(t,e){if("object"!=typeof t||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,e||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(e,"string"))?o:String(o))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function M(t,e){const n=function(e){for(const n of t.project.layers)if(n.data&&n.data[e])return n};let o,i,a,r,s,l,c;const d=()=>{o=e.runtime.stageWidth,i=e.runtime.stageHeight,a=2*o,r=2*i,s=new t.Point(a/2,r/2),l=new t.Rectangle(0,0,a,r),c=new t.Rectangle(-a/4,-r/4,1.5*a,1.5*r)};e.on("STAGE_SIZE_CHANGED",d),d();return{math:{checkPointsClose:function(t,e,n){const o=Math.abs(t.x-e.x),i=Math.abs(t.y-e.y);return o<n&&i<n},snapDeltaToAngle:function(e,n){let o=Math.atan2(e.y,e.x);o=Math.round(o/n)*n;const i=Math.cos(o),a=Math.sin(o),r=i*e.x+a*e.y;return new t.Point(i*r,a*r)}},layer:{CROSSHAIR_FULL_OPACITY:.75,getDragCrosshairLayer:function(){return n("isDragCrosshairLayer")},getLayer:n},view:{get CENTER(){return s},get ART_BOARD_BOUNDS(){return l},get MAX_WORKSPACE_BOUNDS(){return c},getActionBounds:e=>e?l:t.view.bounds.unite(l)},guide:{hoverBounds:function(e,o){let i=e.internalBounds;o&&(i=i.expand(o));const a=new t.Path.Rectangle(i);return a.matrix=e.matrix,function(e){e.strokeWidth=1/t.view.zoom,e.opacity=1,e.blendMode="normal",e.guide=!0}(a),a.parent=n("isGuideLayer"),a.strokeColor="#009dec",a.fillColor=null,a.data.isHelperItem=!0,a.data.origItem=e,a.bringToFront(),a}}}}const I=t=>Object.fromEntries(Object.entries(t).map(t=>{let[e]=t;return[e,e]})),x={BRUSH:null,ERASER:null,LINE:null,FILL:null,SELECT:null,RESHAPE:null,OVAL:null,RECT:null,ROUNDED_RECT:null,TEXT:null},j={BIT_BRUSH:null,BIT_LINE:null,BIT_OVAL:null,BIT_RECT:null,BIT_TEXT:null,BIT_FILL:null,BIT_ERASER:null,BIT_SELECT:null},S=(I(x),I(j)),N=I(f(f({},x),j)),L=(I({FILL:null,SELECT:null,RESHAPE:null,OVAL:null,RECT:null,LINE:null,BIT_OVAL:null,BIT_RECT:null,BIT_SELECT:null,BIT_FILL:null}),(t,e,n)=>{const l=M(t,n),{math:{checkPointsClose:c,snapDeltaToAngle:d},view:{getActionBounds:p,CENTER:u},layer:{getDragCrosshairLayer:m,CROSSHAIR_FULL_OPACITY:g,getLayer:b},guide:{hoverBounds:v}}=l,y=(t=>t.boundingBoxTool._modeMap.MOVE)(e);let f=new t.Path.Line({from:[0,0],to:[0,0],strokeColor:new t.Color(r),strokeWidth:1/t.view.zoom,visible:!1,data:{isHelperItem:!0,noSelect:!0,noHover:!0,saPaintSnapGuide:!0},selected:!1});const w={shadow:null,circle:null},I=new t.Group({children:[],visible:!1});let x;f.remove(),I.remove();let j;function L(e){var n,o;const y=e.point,M=p(this.mode in S);y.x=Math.max(M.left,Math.min(y.x,M.right)),y.y=Math.max(M.top,Math.min(y.y,M.bottom));const L=y.subtract(e.downPoint),C=s/t.view.zoom;let P;if(0===this.selectedItems.length)return;const T=this.selectionCenter._owner,z=this.selectionCenter.add(L),D=null!==(n=null===(o=b("isGuideLayer").children.find(t=>t.data.isSelectionBound))||void 0===o?void 0:o.selectionAnchor)&&void 0!==n?n:{},O=()=>{D.strokeColor=new t.Color(.30196078431372547,.592156862745098,1),D.fillColor=null};if(j=()=>{var t;f.remove(),I.remove(),I.visible=!1,f.visible=!1,null===(t=x)||void 0===t||t.remove(),x&&(x.visible=!1),O()},j(),!e.modifiers.shift&&this.mode!==N.RESHAPE){const e=b("isPaintingLayer"),n=function(t,e,n,o){const{view:{CENTER:r,ART_BOARD_BOUNDS:s}}=n;return{from:h(h(h({},a.boxCenter?{center:e.center}:{}),a.boxCorners?{topLeft:e.topLeft,topRight:e.topRight,bottomLeft:e.bottomLeft,bottomRight:e.bottomRight}:{}),a.boxEdgeMids?{left:new t.Point(e.left,e.center.y),right:new t.Point(e.right,e.center.y),top:new t.Point(e.center.x,e.top),bottom:new t.Point(e.center.x,e.bottom)}:{}),to:h(h(h(h(h(h(h(h({},i.pageCenter?{bounds_c:{type:"point",value:r}}:{}),i.pageAxes?{bounds_cx:{type:"xcoord",value:r.x},bounds_cy:{type:"ycoord",value:r.y}}:{}),i.pageEdges?{bounds_l:{type:"xcoord",value:s.left,clamp:{min:s.top,max:s.bottom}},bounds_r:{type:"xcoord",value:s.right,clamp:{min:s.top,max:s.bottom}},bounds_t:{type:"ycoord",value:s.top,clamp:{min:s.left,max:s.right}},bounds_b:{type:"ycoord",value:s.bottom,clamp:{min:s.left,max:s.right}},bounds_lc:{type:"point",value:new t.Point(s.left,r.y)},bounds_rc:{type:"point",value:new t.Point(s.right,r.y)},bounds_tc:{type:"point",value:new t.Point(r.x,s.top)},bounds_bc:{type:"point",value:new t.Point(r.x,s.bottom)}}:{}),i.pageCorners?{bounds_tl:{type:"point",value:s.topLeft},bounds_tr:{type:"point",value:s.topRight},bounds_bl:{type:"point",value:s.bottomLeft},bounds_br:{type:"point",value:s.bottomRight}}:{}),i.objectEdges?Object.fromEntries(o.filter(t=>!(t.selected||t.data.isHelperItem||t.locked||t.guide)).map(t=>[["item_".concat(t.id,"_r"),{type:"itemSideVert",value:t.bounds.right,clamp:{min:t.bounds.top,max:t.bounds.bottom}}],["item_".concat(t.id,"_l"),{type:"itemSideVert",value:t.bounds.left,clamp:{min:t.bounds.top,max:t.bounds.bottom}}],["item_".concat(t.id,"_t"),{type:"itemSideHoriz",value:t.bounds.top,clamp:{min:t.bounds.left,max:t.bounds.right}}],["item_".concat(t.id,"_b"),{type:"itemSideHoriz",value:t.bounds.bottom,clamp:{min:t.bounds.left,max:t.bounds.right}}]]).flat(1)):{}),i.objectCenters?Object.fromEntries(o.filter(t=>!(t.selected||t.data.isHelperItem||t.locked||t.guide)).map(t=>[["item_".concat(t.id,"_c"),{type:"point",value:t.bounds.center}]]).flat(1)):{}),i.objectMidlines?Object.fromEntries(o.filter(t=>!(t.selected||t.data.isHelperItem||t.locked||t.guide)).map(t=>[["item_".concat(t.id,"_cx"),{type:"xcoord",value:t.bounds.center.x}],["item_".concat(t.id,"_cy"),{type:"ycoord",value:t.bounds.center.y}]]).flat(1)):{}),i.objectCorners?Object.fromEntries(o.filter(t=>!(t.selected||t.data.isHelperItem||t.locked||t.guide)).map(t=>[["item_".concat(t.id,"_tl"),{type:"point",value:t.bounds.topLeft}],["item_".concat(t.id,"_tr"),{type:"point",value:t.bounds.topRight}],["item_".concat(t.id,"_bl"),{type:"point",value:t.bounds.bottomLeft}],["item_".concat(t.id,"_br"),{type:"point",value:t.bounds.bottomRight}]]).flat(1)):{})}}(t,T,l,e.children),o=n.from,s=n.to,d=e=>(e.clamp||(e.clamp={min:-1/0,max:1/0}),"point"===e.type?()=>e.value:"xcoord"===e.type||"itemSideVert"===e.type?n=>new t.Point(e.value,Math.min(Math.max(n.y,e.clamp.min),e.clamp.max)):"ycoord"===e.type||"itemSideHoriz"===e.type?n=>new t.Point(Math.min(Math.max(n.x,e.clamp.min),e.clamp.max),e.value):"generator"===e.type?e.value:void 0),p=t=>Object.fromEntries(Object.entries(s).map(e=>{let[n,o]=e;return[n,{type:o.type,point:d(o)(t)}]})),u=Object.entries(o).map(t=>{let[e,n]=t;return{pointPos:e,origPoint:n,point:n.add(L),snapPoints:p(n.add(L))}}),m=["point","itemSideVert","itemSideHoriz","xcoord","ycoord","generated",void 0],g=(t,e)=>{const n=m.indexOf(t.snapPointType)-m.indexOf(e.snapPointType);return n||t.distance-e.distance},y=u.map(t=>{var e,n;let{point:o,origPoint:i,snapPoints:a}=t;const r=Object.entries(a).filter(t=>{let[e,n]=t;return c(o,n.point,C)}).map(t=>{let[e,n]=t;return{pos:e,distance:(i=n.point,a=o,i.getDistance(a)),snapPointType:n.type};var i,a}).sort(g)[0]||{pos:"",distance:1/0};return{point:i,snapPoint:null===(e=a[r.pos])||void 0===e?void 0:e.point,snapPointType:null===(n=a[r.pos])||void 0===n?void 0:n.type,distance:r.distance,pos:r.pos}}).sort(g).sort(g)[0];if(j(),null!=y&&y.snapPoint){var E;w.shadow=new t.Path.Circle({center:new t.Point(0,0),radius:5.5/t.view.zoom,fillColor:"black",opacity:.12,data:{isHelperItem:!0,noSelect:!0,noHover:!0,saPaintSnapGuide:!0},visible:!0,guide:!0}),w.circle=new t.Path.Circle({center:new t.Point(0,0),radius:4/t.view.zoom,fillColor:new t.Color(r),data:{isScaleHandle:!1,isHelperItem:!0,noSelect:!0,noHover:!0,saPaintSnapGuide:!0},visible:!0,guide:!0}),I.removeChildren(),I.addChildren([w.shadow,w.circle]),f.strokeWidth=1/t.view.zoom,f.strokeColor=new t.Color(r),f.bringToFront(),I.bringToFront(),b("isGuideLayer").addChildren([f,I]),P=y.snapPoint.subtract(y.point);const e=null===(E=y.pos.match(/item_(\d+)_/))||void 0===E?void 0:E[1];if(e){const n=t.project.getItem({id:parseInt(e,10)});n&&(x=v(n))}if(y.point.equals(this.selectionCenter)&&"point"===y.snapPointType)D.fillColor=D.strokeColor=new t.Color(r);else switch(O(),y.snapPointType){case"point":I.visible=!0,I.position=y.snapPoint,I.bringToFront();break;case"xcoord":case"itemSideVert":f.firstSegment.point=new t.Point(y.snapPoint.x,M.top),f.lastSegment.point=new t.Point(y.snapPoint.x,M.bottom),f.visible=!0,f.bringToFront();break;case"ycoord":case"itemSideHoriz":f.firstSegment.point=new t.Point(M.left,y.snapPoint.y),f.lastSegment.point=new t.Point(M.right,y.snapPoint.y),f.visible=!0,f.bringToFront()}}}let A;for(const t of this.selectedItems)t.data.origPos||(t.data.origPos=t.position),P?t.position=t.data.origPos.add(P):e.modifiers.shift?t.position=t.data.origPos.add(d(L,Math.PI/4)):t.position=t.data.origPos.add(L),A=A?A.unite(t.bounds):t.bounds;this.firstDrag&&(m().visible=!0,this.firstDrag=!1);let k=1;if(u.y<A.top&&u.x<A.left||u.y>A.bottom&&u.x<A.left||u.y<A.top&&u.x>A.right||u.y>A.bottom&&u.x>A.right){const e=Math.max(u.x-A.right,A.left-u.x),n=Math.max(u.y-A.bottom,A.top-u.y),o=Math.sqrt(e*e+n*n);k=Math.max(0,1-o/(10/t.view.zoom))}else u.y<A.top||u.y>A.bottom?k=Math.max(0,1-(Math.abs(u.y-z.y)-A.height/2)/(10/t.view.zoom)):(u.x<A.left||u.x>A.right)&&(k=Math.max(0,1-(Math.abs(u.x-z.x)-A.width/2)/(10/t.view.zoom)));m().opacity=g*k}const C=y.constructor.prototype.onMouseDrag;y.constructor.prototype.onMouseDrag=L;const P=y.constructor.prototype.onMouseDown;y.constructor.prototype.onMouseDown=function(){y.constructor.prototype.onMouseDrag=o?L:C;for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];P.apply(this,e)};const T=y.constructor.prototype.onMouseUp;y.constructor.prototype.onMouseUp=function(){var t;null===(t=j)||void 0===t||t();for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];T.apply(this,n)}});function C(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function P(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?C(Object(n),!0).forEach((function(e){T(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function T(t,e,n){var o;return(e="symbol"==typeof(o=function(t,e){if("object"!=typeof t||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,e||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(e,"string"))?o:String(o))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function z(t,e,n,o,a){const{view:{CENTER:r,ART_BOARD_BOUNDS:s}}=e;return P(P(P(P({},i.pageAxes?P(P({},o?{bounds_cx:{type:"xcoord",value:r.x}}:{}),a?{bounds_cy:{type:"ycoord",value:r.y}}:{}):{}),i.pageEdges?P(P(P(P({},o?{bounds_l:{type:"xcoord",value:s.left,clamp:{min:s.top,max:s.bottom}},bounds_r:{type:"xcoord",value:s.right,clamp:{min:s.top,max:s.bottom}}}:{}),a?{bounds_t:{type:"ycoord",value:s.top,clamp:{min:s.left,max:s.right}},bounds_b:{type:"ycoord",value:s.bottom,clamp:{min:s.left,max:s.right}}}:{}),o?{bounds_w:{type:"width",value:r.y,clamp:{min:s.left,max:s.right}}}:{}),a?{bounds_h:{type:"height",value:r.x,clamp:{min:s.bottom,max:s.top}}}:{}):{}),i.objectEdges?Object.fromEntries(n.filter(t=>!(t.selected||t.data.isHelperItem||t.locked||t.guide)).map(t=>[o&&["item_".concat(t.id,"_r"),{type:"xcoord",value:t.bounds.right}],o&&["item_".concat(t.id,"_l"),{type:"xcoord",value:t.bounds.left}],a&&["item_".concat(t.id,"_t"),{type:"ycoord",value:t.bounds.top}],a&&["item_".concat(t.id,"_b"),{type:"ycoord",value:t.bounds.bottom}],o&&["item_".concat(t.id,"_w"),{type:"width",value:t.bounds.bottom,clamp:{min:t.bounds.left,max:t.bounds.right}}],a&&["item_".concat(t.id,"_h"),{type:"height",value:t.bounds.left,clamp:{min:t.bounds.bottom,max:t.bounds.top}}]].filter(Boolean)).flat(1)):{}),i.objectMidlines?Object.fromEntries(n.filter(t=>!(t.selected||t.data.isHelperItem||t.locked||t.guide)).map(t=>[o&&["item_".concat(t.id,"_cx"),{type:"xcoord",value:t.bounds.center.x}],a&&["item_".concat(t.id,"_cy"),{type:"ycoord",value:t.bounds.center.y}]].filter(Boolean)).flat(1)):{})}var D=n(1470);const O=(t,e,n)=>{const i=M(t,n),{view:{getActionBounds:a},layer:{getLayer:l}}=i,c=(t=>t.boundingBoxTool._modeMap.SCALE)(e),d={endLeft:new t.Path.Line({from:[0,0],to:[0,0],strokeColor:new t.Color(r),strokeWidth:1/t.view.zoom,visible:!0,data:{isHelperItem:!0,noSelect:!0,noHover:!0,saPaintSnapGuide:!0},selected:!1}),endRight:new t.Path.Line({from:[0,0],to:[0,0],strokeColor:new t.Color(r),strokeWidth:1/t.view.zoom,visible:!0,data:{isHelperItem:!0,noSelect:!0,noHover:!0,saPaintSnapGuide:!0},selected:!1}),line:new t.Path.Line({from:[0,0],to:[0,0],strokeColor:new t.Color(r),strokeWidth:1/t.view.zoom,visible:!0,data:{isHelperItem:!0,noSelect:!0,noHover:!0,saPaintSnapGuide:!0},selected:!1}),group:new t.Group({children:[],visible:!1})},p={endLeft:new t.Path.Line({from:[0,0],to:[0,0],strokeColor:new t.Color(r),strokeWidth:1/t.view.zoom,visible:!0,data:{isHelperItem:!0,noSelect:!0,noHover:!0,saPaintSnapGuide:!0},selected:!1}),endRight:new t.Path.Line({from:[0,0],to:[0,0],strokeColor:new t.Color(r),strokeWidth:1/t.view.zoom,visible:!0,data:{isHelperItem:!0,noSelect:!0,noHover:!0,saPaintSnapGuide:!0},selected:!1}),line:new t.Path.Line({from:[0,0],to:[0,0],strokeColor:new t.Color(r),strokeWidth:1/t.view.zoom,visible:!0,data:{isHelperItem:!0,noSelect:!0,noHover:!0,saPaintSnapGuide:!0},selected:!1}),group:new t.Group({children:[],visible:!1})};d.endLeft.remove(),p.endLeft.remove(),d.endRight.remove(),p.endRight.remove(),d.line.remove(),p.line.remove(),d.group.remove(),p.group.remove(),d.group.addChildren([d.endLeft,d.line,d.endRight]),p.group.addChildren([p.endLeft,p.line,p.endRight]);let u=new t.Path.Line({from:[0,0],to:[0,0],strokeColor:new t.Color(r),strokeWidth:1/t.view.zoom,visible:!1,data:{isHelperItem:!0,noSelect:!0,noHover:!0,saPaintSnapGuide:!0,axis:"x"},selected:!1}),m=new t.Path.Line({from:[0,0],to:[0,0],strokeColor:new t.Color(r),strokeWidth:1/t.view.zoom,visible:!1,data:{isHelperItem:!0,noSelect:!0,noHover:!0,saPaintSnapGuide:!0,axis:"y"},selected:!1});u.remove(),m.remove();const g=["width","height","itemSideVert","itemSideHoriz","xcoord","ycoord","generated",void 0],b=()=>{d.group.remove(),d.group.visible=!1,p.group.remove(),p.group.visible=!1,u.remove(),u.visible=!1,m.remove(),m.visible=!1};D.a.paintSnap=function(e){if(!this.active)return;const n=e.point,c=a(this.isBitmap);n.x=Math.max(c.left,Math.min(n.x,c.right)),n.y=Math.max(c.top,Math.min(n.y,c.bottom)),this.lastPoint||(this.lastPoint=e.lastPoint);const h=n.subtract(this.lastPoint);this.lastPoint=n,e.modifiers.alt?(this.centered=!0,this.itemGroup.position=this.origCenter,this.pivot=this.origCenter):(this.centered&&(this.centered=!1,this.itemGroup.scale(1/this.lastSx,1/this.lastSy,this.pivot),this.selectionAnchor&&this.selectionAnchor.scale(this.lastSx,this.lastSy),this.lastSx=1,this.lastSy=1),this.pivot=this.origPivot),this.corner=this.corner.add(h);let v=this.corner.subtract(this.pivot);e.modifiers.alt&&(v=v.multiply(2));let y=1,f=1;Math.abs(this.origSize.x)>1e-7&&(y=v.x/this.origSize.x),Math.abs(this.origSize.y)>1e-7&&(f=v.y/this.origSize.y);const w=(t,e)=>{const n=g.indexOf(t.type)-g.indexOf(e.type);return n||t.distance-e.distance},M=l("isPaintingLayer"),I=o&&(this.isCorner&&!e.modifiers.shift||Math.abs(this.origSize.x)>1e-7),x=o&&(this.isCorner&&!e.modifiers.shift||Math.abs(this.origSize.y)>1e-7),j=s/t.view.zoom,S=t=>t.distance<j,N=t=>{let[e,n]=t;return{type:n.type,distance:(()=>{switch(n.type){case"width":return Math.abs(Math.abs(v.x)-Math.abs(n.clamp.max-n.clamp.min));case"height":return Math.abs(Math.abs(v.y)-Math.abs(n.clamp.max-n.clamp.min));case"xcoord":case"itemSideVert":return Math.abs(this.corner.x-n.value);case"ycoord":case"itemSideHoriz":return Math.abs(this.corner.y-n.value)}})(),name:e,coord:n}},L=z(0,i,M.children,I,!1),C=Object.entries(L).map(N).filter(S).sort(w),P=z(0,i,M.children,!1,x),T=Object.entries(P).map(N).filter(S).sort(w),D=C[0],O=T[0],E=y>0?1:-1,A=f>0?1:-1;if(D)switch(D.type){case"width":y=new t.Point(Math.abs(D.coord.clamp.max-D.coord.clamp.min),this.corner.y).x/this.origSize.x;break;case"xcoord":case"itemSideVert":y=new t.Point(D.coord.value,this.corner.y).subtract(this.pivot).x/this.origSize.x,e.modifiers.alt&&(y*=2);break}if(O)switch(O.type){case"height":f=new t.Point(this.corner.x,Math.abs(O.coord.clamp.max-O.coord.clamp.min)).y/this.origSize.y;break;case"ycoord":case"itemSideHoriz":f=new t.Point(this.corner.x,O.coord.value).subtract(this.pivot).y/this.origSize.y,e.modifiers.alt&&(f*=2);break}const k=y,_=f;if(this.isCorner&&!e.modifiers.shift&&(y=f=Math.max(Math.abs(y),Math.abs(f)),y*=E,f*=A),y=E*Math.max(Math.abs(y),1e-4),f=A*Math.max(Math.abs(f),1e-4),this.itemGroup.scale(y/this.lastSx,f/this.lastSy,this.pivot),this.selectionAnchor&&this.selectionAnchor.scale(this.lastSx/y,this.lastSy/f),b(),(Math.abs(k)===Math.abs(y)&&D||Math.abs(_)===Math.abs(f)&&O)&&(u.strokeWidth=1/t.view.zoom,m.strokeWidth=1/t.view.zoom,u.strokeColor=new t.Color(r),m.strokeColor=new t.Color(r),d.endLeft.strokeWidth=1/t.view.zoom,p.endLeft.strokeWidth=1/t.view.zoom,d.endRight.strokeWidth=1/t.view.zoom,p.endRight.strokeWidth=1/t.view.zoom,d.line.strokeWidth=1/t.view.zoom,p.line.strokeWidth=1/t.view.zoom,d.endLeft.strokeColor=new t.Color(r),p.endLeft.strokeColor=new t.Color(r),d.endRight.strokeColor=new t.Color(r),p.endRight.strokeColor=new t.Color(r),d.line.strokeColor=new t.Color(r),p.line.strokeColor=new t.Color(r),u.bringToFront(),m.bringToFront(),l("isGuideLayer").addChildren([m,u,d.group,p.group])),Math.abs(k)===Math.abs(y)&&D)switch(D.type){case"width":{const e=D.coord.value,n=this.itemGroup.bounds.bottom;p.endLeft.firstSegment.point=new t.Point(D.coord.clamp.min,e),p.endLeft.lastSegment.point=new t.Point(D.coord.clamp.min,e+5/t.view.zoom),p.endRight.firstSegment.point=new t.Point(D.coord.clamp.max,e),p.endRight.lastSegment.point=new t.Point(D.coord.clamp.max,e+5/t.view.zoom),p.line.firstSegment.point=new t.Point(D.coord.clamp.min,e+3/t.view.zoom),p.line.lastSegment.point=new t.Point(D.coord.clamp.max,e+3/t.view.zoom),p.group.visible=!0,p.group.bringToFront(),d.endLeft.firstSegment.point=new t.Point(this.itemGroup.bounds.left,n+2/t.view.zoom),d.endLeft.lastSegment.point=new t.Point(this.itemGroup.bounds.left,n+7/t.view.zoom),d.endRight.firstSegment.point=new t.Point(this.itemGroup.bounds.right,n+2/t.view.zoom),d.endRight.lastSegment.point=new t.Point(this.itemGroup.bounds.right,n+7/t.view.zoom),d.line.firstSegment.point=new t.Point(this.itemGroup.bounds.left,n+4.5/t.view.zoom),d.line.lastSegment.point=new t.Point(this.itemGroup.bounds.right,n+4.5/t.view.zoom),d.group.visible=!0,d.group.bringToFront();break}case"xcoord":case"itemSideVert":u.firstSegment.point=new t.Point(D.coord.value,c.top),u.lastSegment.point=new t.Point(D.coord.value,c.bottom),u.visible=!0,u.bringToFront()}if(Math.abs(_)===Math.abs(f)&&O)switch(O.type){case"height":{const e=O.coord.value,n=this.itemGroup.bounds.left;p.endLeft.firstSegment.point=new t.Point(e,O.coord.clamp.min),p.endLeft.lastSegment.point=new t.Point(e-5/t.view.zoom,O.coord.clamp.min),p.endRight.firstSegment.point=new t.Point(e,O.coord.clamp.max),p.endRight.lastSegment.point=new t.Point(e-5/t.view.zoom,O.coord.clamp.max),p.line.firstSegment.point=new t.Point(e-3/t.view.zoom,O.coord.clamp.min),p.line.lastSegment.point=new t.Point(e-3/t.view.zoom,O.coord.clamp.max),p.group.visible=!0,p.group.bringToFront(),d.endLeft.firstSegment.point=new t.Point(n-2/t.view.zoom,this.itemGroup.bounds.top),d.endLeft.lastSegment.point=new t.Point(n-7/t.view.zoom,this.itemGroup.bounds.top),d.endRight.firstSegment.point=new t.Point(n-2/t.view.zoom,this.itemGroup.bounds.bottom),d.endRight.lastSegment.point=new t.Point(n-7/t.view.zoom,this.itemGroup.bounds.bottom),d.line.firstSegment.point=new t.Point(n-4.5/t.view.zoom,this.itemGroup.bounds.top),d.line.lastSegment.point=new t.Point(n-4.5/t.view.zoom,this.itemGroup.bounds.bottom),d.group.visible=!0,d.group.bringToFront();break}case"ycoord":case"itemSideHoriz":m.firstSegment.point=new t.Point(c.left,O.coord.value),m.lastSegment.point=new t.Point(c.right,O.coord.value),m.visible=!0,m.bringToFront()}this.lastSx=y,this.lastSy=f},Object(D.b)(t,c.constructor);const h=c.constructor.prototype.onMouseUp;c.constructor.prototype.onMouseUp=function(){b(),h.call(this)}};var E=n(1545);const A={"userscript.js":async function(t){const{addon:e}=t;e.self.addEventListener("disabled",u),e.self.addEventListener("reenabled",p),function(t){let{settings:e}=t;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&l(t,e.get(t));for(const t in a)Object.prototype.hasOwnProperty.call(a,t)&&c(t,e.get(t));d(e.get("threshold")),m(e.get("enable-default"))}(e);const n=await e.tab.traps.getPaper(),[r]=n.tools;m(e.settings.get("enable-default")),g(e.settings.get("guide-color")),e.settings.addEventListener("change",()=>g(e.settings.get("guide-color"))),(t=>"selectionBoxTool"in t&&"boundingBoxTool"in t)(r)&&(L(n,r,e.tab.traps.vm),O(n,r,e.tab.traps.vm)),function(t){let{addon:e,msg:n}=t;const r=()=>{const t=document.createElement("div");return t.className="sa-paint-snap-group",t},p=()=>{const t=document.createElement("div");return t.className="sa-paint-snap-settings-separator",t},u=function(){let{useButtonTag:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const e=document.createElement(t?"button":"span");return e.className="sa-paint-snap-button",e.setAttribute("role","button"),e},g=t=>{const n=document.createElement("img");return n.className="sa-paint-snap-image",n.draggable=!1,n.src=e.self.getResource("/icons/"+t+".svg"),n},b=r();e.tab.displayNoneWhileDisabled(b,{display:"flex"});const h=document.createElement("div");h.className="sa-paint-snap-settings-wrapper",b.appendChild(h);const v=document.createElement("div");v.className="sa-paint-snap-settings",h.appendChild(v);const y="http://www.w3.org/2000/svg",f=document.createElementNS(y,"svg");f.setAttribute("class","sa-paint-snap-settings-tip"),f.setAttribute("width","14"),f.setAttribute("height","7");const w=document.createElementNS(y,"polygon");w.setAttribute("class","sa-paint-snap-settings-polygon"),w.setAttribute("points","0,0 7,7, 14,0"),f.appendChild(w),v.appendChild(f);const M=u();M.addEventListener("click",()=>{o||(Object.values(i).some(t=>t)||l("pageCenter",!0),Object.values(a).some(t=>t)||c("boxCenter",!0)),m(!o),M.dataset.enabled=o}),M.title=n("toggle"),M.appendChild(g("snap")),M.dataset.enabled=o,b.appendChild(M);const I=u();I.addEventListener("click",()=>j(!S())),I.title=n("settings"),I.appendChild(g("settings")),b.appendChild(I),document.body.addEventListener("click",t=>{S()&&!t.target.matches(".sa-paint-snap-group *")&&j(!1)});const x=[],j=t=>{I.dataset.enabled=t,v.dataset.visible=t,t?x.forEach(t=>{try{null==t||t()}catch(t){}}):(Object.values(a).every(t=>!t)||Object.values(i).every(t=>!t))&&(m(!1),M.dataset.enabled=!1)},S=()=>"true"===v.dataset.visible,N=function(t,e,o){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:()=>{};const a=[t,e],s=r(),l=u({useButtonTag:!0}),c=u({useButtonTag:!0}),d=g(t),p=g(e);d.dataset.shrink=p.dataset.shrink=!0,l.appendChild(d),c.appendChild(p),l.setAttribute("aria-label",l.title=n(t)),c.setAttribute("aria-label",c.title=n(e));const m=function(t,e){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];l.dataset.enabled=!!t,c.dataset.enabled=!t,n||i(a[t])};return m(1-a.indexOf(o),null,!0),l.addEventListener("click",m.bind(l,1)),c.addEventListener("click",m.bind(c,0)),s.append(l,c),s},L=(t,e)=>{const o=document.createElement("label");o.className="sa-paint-snap-settings-line";const r=document.createElement("div");return r.className="sa-paint-snap-settings-label",r.textContent=n(t),o.append(r,e),x.push(()=>{const o=e.querySelector('[aria-label="'.concat(n("on"),'"]')),r=e.querySelector('[aria-label="'.concat(n("off"),'"]'));t in i&&(o.dataset.enabled=!!i[t],r.dataset.enabled=!i[t]),t in a&&(o.dataset.enabled=!!a[t],r.dataset.enabled=!a[t])}),o},C=function(t){const e=document.createElement("div");e.className="sa-paint-snap-settings-section";const n=document.createElement("span");n.appendChild(document.createTextNode(t)),n.className="sa-paint-snap-settings-section-title",e.appendChild(n);for(var o=arguments.length,i=new Array(o>1?o-1:0),a=1;a<o;a++)i[a-1]=arguments[a];return e.append(...i),e},P=L("threshold",function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:()=>{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-1/0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1/0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;const a=r(),s=document.createElement("div");s.style.width="20px";const l=u();l.appendChild(s);const c=document.createElement("input");c.className="sa-paint-snap-settings-input",c.type="number",c.step=i,c.min=n,c.max=o,c.value=t,c.addEventListener("change",()=>{c.value>o&&(c.value=o),c.value<n&&(c.value=n),e(c.value)}),c.addEventListener("blur",()=>{c.value||(c.value="0")}),l.appendChild(c);const d=u();d.appendChild(g("decrement")),d.addEventListener("click",()=>{c.value>n&&(c.value=Number(c.value)-1,e(Number(c.value)+1))});const p=u();return p.appendChild(g("increment")),p.addEventListener("click",()=>{c.value<o&&(c.value=Number(c.value)+1,e(Number(c.value)+1))}),a.append(d,l,p),a}(s,t=>{d(t)},4,50,1)),T=t=>t?"on":"off",z=t=>!!["on","off"].indexOf(t),D=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:()=>{};return["off","on",T(t),t=>e(z(t))]},O=t=>L(t,N(...D(i[t],e=>{m(!0),M.dataset.enabled=!0,l(t,e)}))),E=C(n("snapTo"),O("pageCenter"),O("pageAxes"),O("pageEdges"),O("pageCorners"),O("objectCenters"),O("objectMidlines"),O("objectEdges"),O("objectCorners")),A=t=>L(t,N(...D(a[t],e=>{c(t,e)}))),k=C(n("snapFrom"),A("boxCenter"),A("boxCorners"),A("boxEdgeMids"));v.append(P,p(),E,p(),k),(async()=>{let t=!1;for(;;){const n=(await e.tab.waitForElement("[class^='paint-editor_canvas-controls']",{markAsSeen:!0,reduxEvents:["scratch-gui/navigation/ACTIVATE_TAB","scratch-gui/mode/SET_PLAYER","fontsLoaded/SET_FONTS_LOADED","scratch-gui/locales/SELECT_LOCALE","scratch-gui/targets/UPDATE_TARGET_LIST"],reduxCondition:t=>1===t.scratchGui.editorTab.activeTabIndex&&!t.scratchGui.mode.isPlayerOnly})).querySelector("[class^='paint-editor_zoom-controls']");if(e.tab.appendToSharedSpace({space:"paintEditorZoomControls",element:b,order:2}),!t){t=!0;const e=n.firstChild.className,o=n.firstChild.firstChild.className,i=n.firstChild.firstChild.firstChild.className;for(const t of document.querySelectorAll(".sa-paint-snap-group"))t.className+=" "+e;for(const t of document.querySelectorAll(".sa-paint-snap-button"))t.className+=" "+o;for(const t of document.querySelectorAll(".sa-paint-snap-image"))t.className+=" "+i}}})()}(t)},"userstyle.css":n.n(E).a,"icons/decrement.svg":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggc3R5bGU9ImZpbGw6IzU3NWU3NTtzdHJva2Utd2lkdGg6LjczNDczNiIgZD0iTTMuMjUgMTEuMzU4aDE3LjUwMXYxLjI4NUgzLjI1eiIvPjwvc3ZnPg==","icons/increment.svg":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHdpZHRoPSIyNCI+PHBhdGggc3R5bGU9ImZpbGw6IzU3NWU3NTtzdHJva2Utd2lkdGg6LjczNDczNiIgZD0iTTMuMjUgMTEuMzU4aDE3LjUwMXYxLjI4NUgzLjI1eiIvPjxwYXRoIHRyYW5zZm9ybT0icm90YXRlKDkwKSIgc3R5bGU9ImZpbGw6IzU3NWU3NTtzdHJva2Utd2lkdGg6LjczNDczNiIgZD0iTTMuMjUtMTIuNjQyaDE3LjUwMXYxLjI4NUgzLjI1eiIvPjwvc3ZnPg==","icons/off.svg":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzU3NWU3NSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0ibTExLjI1IDQuNzUtNi41IDYuNW0wLTYuNSA2LjUgNi41Ii8+PC9zdmc+","icons/on.svg":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxwYXRoIGZpbGw9IiM1NzVlNzUiIGQ9Ik0xMi43MzYgMy45N2EuNzMzLjczMyAwIDAgMSAxLjA0NyAwYy4yODYuMjg5LjI5Ljc1Ni4wMSAxLjA1TDcuODggMTIuMDFhLjczMy43MzMgMCAwIDEtMS4wNjUuMDJMMy4yMTcgOC4zODRhLjc1Ny43NTcgMCAwIDEgMC0xLjA2LjczMy43MzMgMCAwIDEgMS4wNDcgMGwzLjA1MiAzLjA5MyA1LjQtNi40MjVhLjI0Ny4yNDcgMCAwIDEgLjAyLS4wMjJaIi8+PC9zdmc+","icons/settings.svg":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PGNpcmNsZSBjeD0iMTIuNTUiIGN5PSIxMi41NSIgcj0iOS4wNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNTc1ZTc1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iNyIvPjxjaXJjbGUgY3g9IjYxLjk0MyIgY3k9IjYxLjQzNiIgcj0iNy41IiBmaWxsPSIjNTc1ZTc1Ii8+PHBhdGggZmlsbD0iIzU3NWU3NSIgZD0ibTUzLjExOSAyNy43NDMtOC4yNjcgOC4yNjZMMzEuNjkgMjIuODQ3bC04LjU3IDguNTczIDEzLjE2IDEzLjE2LTguMjY2IDguMjY2aDI1LjEwNXoiIGNvbG9yPSIjNTc1ZTc1Ii8+PHBhdGggZmlsbD0iIzU3NWU3NSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNDYuMjI3IDEwMGMuNTMtMy4yMDUgMS4yMTktNi4zNzQgMi4xMTItOS40N2wtNC44MDQtMS4zODZjLS45NTQgMy4zMS0xLjY4MyA2LjY2OS0yLjI0IDEwLjA0em0zLjYwMy0xNC4wNjhhNjMuOTM1IDYzLjkzNSAwIDAgMSAzLjkzLTguNzc1bC00LjM5My0yLjM4NmE2OC45MTcgNjguOTE3IDAgMCAwLTQuMjQgOS40NnptNi4zODItMTIuOWMxLjc1My0yLjY5NCAzLjY5LTUuMjQ5IDUuODQtNy41NzhsLTMuNjczLTMuMzkyYy0yLjM3MiAyLjU2OS00LjQ3NCA1LjM1LTYuMzU3IDguMjQxem05LjIzNC0xMC45NDFhNTcuOTUgNTcuOTUgMCAwIDEgNy42MDktNS44MTNsLTIuNzAzLTQuMjA4YTYyLjk0NCA2Mi45NDQgMCAwIDAtOC4yNjYgNi4zMTd6bTExLjc1Mi04LjI2MmE3MS4yNjUgNzEuMjY1IDAgMCAxIDguNzg2LTRsLTEuNzY2LTQuNjc3YTc2LjI0MiA3Ni4yNDIgMCAwIDAtOS40MDEgNC4yODF6bTEzLjM3Mi01LjU3MkE4Ny45MjYgODcuOTI2IDAgMCAxIDEwMCA0NS45MUw5OS4wNTcgNDFhOTIuOTM4IDkyLjkzOCAwIDAgMC05Ljk2NyAyLjQ4eiIgY29sb3I9IiM1NzVlNzUiLz48L3N2Zz4=","icons/snap.svg":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZmlsbD0iIzU3NWU3NSIgc3Ryb2tlPSIjNTc1ZTc1IiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMzIiIGQ9Ik0xOTEuOTggNDYzLjU4di00OE05MC4xNiA0MjEuNGwzMy45NC0zMy45NG0tNzYuMTItNjcuODhoNDgiLz48cGF0aCBmaWxsPSIjNTc1ZTc1IiBkPSJNNDIyLjIgODkuODJhMTQ0IDE0NCAwIDAgMC0yMDMuNzEtLjA3bC02Ny44OCA2Ny44OCA2Ny44OCA2Ny44OSA2Ny44OC02Ny44OWE0OCA0OCAwIDAgMSA2OC40Ni41OWMxOC4zIDE4LjkyIDE3LjQ4IDQ5LjI0LTEuMTQgNjcuODZsLTY3LjMyIDY3LjMyIDY3Ljg4IDY3Ljg4IDY2LjkxLTY2LjkxYzU2LjM3LTU2LjM3IDU3LjM3LTE0OC4xNSAxLjA0LTIwNC41NVpNODIuNzE5IDIyNS41MTdsNDUuMjU0LTQ1LjI1NCA2Ny44ODMgNjcuODgyTDE1MC42IDI5My40ek0yMTguNDkgMzYxLjI3bDQ1LjI1NC00NS4yNTQgNjcuODgyIDY3Ljg4Mi00NS4yNTUgNDUuMjU1eiIvPjwvc3ZnPg=="}}}]);