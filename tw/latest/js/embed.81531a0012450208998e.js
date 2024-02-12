var GUI=function(e){function n(n){for(var a,o,c=n[0],l=n[1],s=n[2],b=0,i=[];b<c.length;b++)o=c[b],Object.prototype.hasOwnProperty.call(t,o)&&t[o]&&i.push(t[o][0]),t[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);for(f&&f(n);i.length;)i.shift()();return r.push.apply(r,s||[]),d()}function d(){for(var e,n=0;n<r.length;n++){for(var d=r[n],a=!0,c=1;c<d.length;c++){var l=d[c];0!==t[l]&&(a=!1)}a&&(r.splice(n--,1),e=o(o.s=d[0]))}return e}var a={},t={83:0},r=[];function o(n){if(a[n])return a[n].exports;var d=a[n]={i:n,l:!1,exports:{}};return e[n].call(d.exports,d,d.exports,o),d.l=!0,d.exports}o.e=function(e){var n=[],d=t[e];if(0!==d)if(d)n.push(d[2]);else{var a=new Promise((function(n,a){d=t[e]=[n,a]}));n.push(d[2]=a);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=function(e){return o.p+"js/"+({1:"addon-settings~addons~editor~fullscreen~player",4:"addon-default-entry",5:"addon-entry-2d-color-picker",6:"addon-entry-better-img-uploads",7:"addon-entry-block-count",8:"addon-entry-block-palette-icons",9:"addon-entry-blocks2image",10:"addon-entry-cat-blocks",11:"addon-entry-clones",12:"addon-entry-columns",13:"addon-entry-copy-reporter",14:"addon-entry-custom-block-shape",15:"addon-entry-custom-block-text",16:"addon-entry-custom-menu-bar",17:"addon-entry-custom-zoom",18:"addon-entry-data-category-tweaks-v2",19:"addon-entry-debugger",20:"addon-entry-default-costume-editor-color",21:"addon-entry-disable-paste-offset",22:"addon-entry-disable-stage-drag-select",23:"addon-entry-editor-buttons-reverse-order",24:"addon-entry-editor-colored-context-menus",25:"addon-entry-editor-compact",26:"addon-entry-editor-extra-keys",27:"addon-entry-editor-number-arrow-keys",28:"addon-entry-editor-sounds",29:"addon-entry-editor-square-inputs",30:"addon-entry-editor-stage-left",31:"addon-entry-editor-stepping",32:"addon-entry-editor-theme3",33:"addon-entry-fullscreen",34:"addon-entry-gamepad",35:"addon-entry-hide-delete-button",36:"addon-entry-hide-flyout",37:"addon-entry-hide-new-variables",38:"addon-entry-hide-stage",39:"addon-entry-initialise-sprite-position",40:"addon-entry-load-extensions",41:"addon-entry-mediarecorder",42:"addon-entry-mouse-pos",43:"addon-entry-move-to-top-layer",44:"addon-entry-no-script-bumping",45:"addon-entry-number-pad",46:"addon-entry-paint-by-default",47:"addon-entry-paint-snap",48:"addon-entry-remove-curved-stage-border",49:"addon-entry-remove-sprite-confirm",50:"addon-entry-script-snap",51:"addon-entry-search-sprites",52:"addon-entry-sprite-properties",53:"addon-entry-swap-local-global",54:"addon-entry-transparent-orphans",55:"addon-entry-tw-disable-cloud-variables",56:"addon-entry-tw-disable-compiler",57:"addon-entry-tw-remove-backpack",58:"addon-entry-tw-remove-feedback",59:"addon-entry-tw-straighten-comments",60:"addon-entry-variable-manager",61:"addon-entry-vol-slider",62:"addon-entry-zebra-striping",63:"addon-l10n-de",64:"addon-l10n-es",65:"addon-l10n-fi",66:"addon-l10n-fr",67:"addon-l10n-hu",68:"addon-l10n-it",69:"addon-l10n-ja",70:"addon-l10n-ko",71:"addon-l10n-nl",72:"addon-l10n-pl",73:"addon-l10n-pt",74:"addon-l10n-ro",75:"addon-l10n-ru",76:"addon-l10n-sl",77:"addon-l10n-tr",78:"addon-l10n-zh-tw",80:"addons",85:"iframe-extension-worker",86:"library-backdrops",87:"library-costumes",88:"library-sounds",89:"library-sprites",91:"sb"}[e]||e)+"."+{1:"96387e9116d713aa1b57",4:"52d8a217c1290c832b20",5:"ef3f34325cdc4d381a0e",6:"d6d0480ffc63548c8868",7:"204d1b172a26feed423e",8:"c47cac4d58689aa63a63",9:"36095efd1e3596ff60b6",10:"dca53a975669b1894876",11:"b38321491c662bded16a",12:"c89a3a275f45b989fd22",13:"effef9fb2c22fbb25023",14:"7228bbdc00de895f9c1f",15:"afc4b888a66b317ce989",16:"9dee0d4ac9be44ea891f",17:"15a0c04b3d8f005e52e2",18:"521065fde2a1edb70a5e",19:"3072eca6c60c1d50d5b1",20:"ed7a6e250a14b6078833",21:"fc4e73a6fa4de515d711",22:"08a9059e4705dd4e5895",23:"7fb55f3d135c095c9d5e",24:"47708b586c54d192987f",25:"be4c7e02a74edd97da40",26:"2b2f6d0b70514494e34c",27:"be0935e150dfd2859af2",28:"f6f4e69913370ac0db91",29:"744b10ba067d44f2b100",30:"31852ff946a6911ab52e",31:"5270a4555af82b1e68fd",32:"20635af8458ccd50a425",33:"ca22630c7131528138c6",34:"3f351804e6b758051587",35:"547b27c41138d4d683bc",36:"bb1cea30b3adbcc63222",37:"a500c1a22d50dfcffab5",38:"70760cd467ded0cd7256",39:"7c8d06e6acfce5e5366a",40:"7b41310ee1b9790463f0",41:"ab798d7f129be5ac0410",42:"0532d6ae89f7182fc156",43:"a6757aeeaaa63208279d",44:"e18d2ecd9bc6ca5e9eb7",45:"b694837a8c4ff387bdc3",46:"c3aae5bd3f6de612be92",47:"b02cb4c12dd90155f00f",48:"e2bc9359862c08ca0323",49:"ecec4db0b866be3f3534",50:"029ba92d5c5688fa1df2",51:"ab9944e71a627d9d342b",52:"35046b5af2d0a2f7b17e",53:"ef56721d4462387ea54d",54:"765135d1f5601b7ecc83",55:"4dddce07f324a5f7a9cb",56:"8f61d74a2e694403b711",57:"9e26ff6b2225027de7e5",58:"3a340b9263feb914ca48",59:"a5544184a13b473d7dcf",60:"e05e9b0b7ca13f07c9a0",61:"a22b103af764bd5bde62",62:"dc61bbab8c27794e35ec",63:"5a38b6984f1bbff96cb1",64:"d009a23b708e4953776a",65:"851f2f701c32edc0ec6e",66:"d98663271865bc75f2b9",67:"85220595280a95318e84",68:"734f8f4b51afcf3e7a49",69:"0478f1da33521e7dfb7c",70:"4722ec6147db489a5a2b",71:"945c301ef399de7349ef",72:"cf1b9646d9231350c205",73:"2544afc03173ad12f272",74:"77e0c5a3dc18ee42d6b7",75:"5b365a7c337636944bfd",76:"fdef5a13fcb998a534c9",77:"6357f28ac01688083670",78:"55a9b550b29950cb8c0c",80:"92bd291e72fce2a85b24",85:"27eb00c03733ce090453",86:"86beb324dd8e03824751",87:"f3c54fc29005f3d7603c",88:"d95cd7628407d184d2a3",89:"1e43cf6c859625dd47d3",91:"078195f5feeefbbd0c6b"}[e]+".js"}(e);var l=new Error;r=function(n){c.onerror=c.onload=null,clearTimeout(s);var d=t[e];if(0!==d){if(d){var a=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",l.name="ChunkLoadError",l.type=a,l.request=r,d[1](l)}t[e]=void 0}};var s=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(n)},o.m=e,o.c=a,o.d=function(e,n,d){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:d})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var d=Object.create(null);if(o.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)o.d(d,a,function(n){return e[n]}.bind(null,a));return d},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="/tw/2bf64dfe387f3d4b9daea81e9d5f7dc2af698661/",o.oe=function(e){throw console.error(e),e};var c=window.webpackJsonpGUI=window.webpackJsonpGUI||[],l=c.push.bind(c);c.push=n,c=c.slice();for(var s=0;s<c.length;s++)n(c[s]);var f=l;return r.push([1458,0,3,2]),d()}({1458:function(e,n,d){"use strict";d.r(n);d(302);var a=d(1),t=d.n(a),r=d(41),o=d(166),c=d(5),l=d.n(c),s=d(0),f=d.n(s),b=d(6),i=d(80),u=d(28),p=d(182);const y=["isFullScreen","onSetIsFullScreen","onSetWindowIsFullScreen"];function h(e,n){if(null==e)return{};var d,a,t=function(e,n){if(null==e)return{};var d,a,t={},r=Object.keys(e);for(a=0;a<r.length;a++)d=r[a],n.indexOf(d)>=0||(t[d]=e[d]);return t}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)d=r[a],n.indexOf(d)>=0||Object.prototype.propertyIsEnumerable.call(e,d)&&(t[d]=e[d])}return t}var m=d(168),g=d(177),v=d(13),S=d(178),w=d(96);const F=(()=>{const e=location.hash.match(/#(\d+)/);if(null!==e)return e[1];const n=location.pathname.match(/(\d+)\/embed/);return null!==n?n[n.length-1]:"0"})(),O=new URLSearchParams(location.search);let j;const k=Object(r.d)(o.a,m.a,(function(e){class n extends t.a.Component{constructor(e){super(e),l()(this,["handleFullScreenChange"])}componentDidMount(){document.addEventListener("fullscreenchange",this.handleFullScreenChange),document.addEventListener("webkitfullscreenchange",this.handleFullScreenChange)}shouldComponentUpdate(e){return this.props.isFullScreen!==e.isFullScreen}componentDidUpdate(){p.a.available()&&(this.props.isFullScreen?p.a.request():p.a.enabled()&&p.a.exit())}componentWillUnmount(){document.removeEventListener("fullscreenchange",this.handleFullScreenChange),document.removeEventListener("webkitfullscreenchange",this.handleFullScreenChange)}handleFullScreenChange(){const e=p.a.enabled();this.props.onSetWindowIsFullScreen(e),this.props.onSetIsFullScreen(e)}render(){const n=this.props,{isFullScreen:d,onSetIsFullScreen:a,onSetWindowIsFullScreen:r}=n,o=h(n,y);return t.a.createElement(e,o)}}n.propTypes={isFullScreen:f.a.bool,onSetIsFullScreen:f.a.func,onSetWindowIsFullScreen:f.a.func};return Object(b.b)(e=>({isFullScreen:e.scratchGui.mode.isFullScreen}),e=>({onSetIsFullScreen:n=>e(Object(i.c)(n)),onSetWindowIsFullScreen:n=>e(Object(u.o)(n))}))(n)}))(S.a);Object(w.a)(t.a.createElement(k,{isEmbedded:!0,projectId:F,onVmInit:e=>{j=e},onProjectLoaded:()=>{O.has("autoplay")&&(j.start(),j.greenFlag())},routingStyle:"none",theme:v.l.light})),O.has("addons")&&Object(g.a)()}});