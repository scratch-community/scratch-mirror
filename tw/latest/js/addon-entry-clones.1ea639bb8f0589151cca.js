(window.webpackJsonpGUI=window.webpackJsonpGUI||[]).push([[11],{1458:function(n,i,t){"use strict";function e(){}t.d(i,"a",(function(){return e}))},1539:function(n,i,t){var e=t(214);(n.exports=t(9)(!1)).push([n.i,'.clone-container-container {\n  display: none;\n  align-items: center;\n  padding: 0.25rem;\n  user-select: none;\n  color: #a065ff;\n}\n\n.clone-container {\n  font-size: 0.625rem;\n  font-weight: bold;\n  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n  white-space: nowrap;\n}\n\n.clone-icon {\n  margin: 0.25rem;\n  display: inline-block;\n  background-image: url('+e(t(1540))+');\n  height: 16px;\n  width: 16px;\n}\n\n.clone-container-container[data-count="none"] {\n  display: none;\n}\n\n.clone-container-container[data-count="full"] {\n  color: #ff6680;\n}\n\n.clone-container-container[data-count="full"] .clone-icon {\n  background-image: url('+e(t(1541))+");\n}\n\n.clone-count::after {\n  content: attr(data-str);\n}\n\n.sa-small-stage .clone-container-container {\n  display: none !important;\n}\n",""])},1540:function(n,i){n.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTS0xLTFoODAydjYwMkgtMXoiLz48ZyBmaWxsPSIjZGNjOWZmIj48Y2lyY2xlIGN5PSI4LjQ4NCIgY3g9IjcuNDE0IiByPSI0LjczMyIvPjxwYXRoIGQ9Im0zLjg0MyA2LjEuMjk2LTQuODMgMi4yMzYgNC4yNjVtMS40MTEtLjEwOEw5LjQuODY2bC45NzUgNC43MTYiIGZpbGwtb3BhY2l0eT0ibnVsbCIvPjwvZz48ZyBmaWxsPSIjYmM5NmZmIj48Y2lyY2xlIGN5PSI5LjEwNCIgY3g9IjcuOTg3IiByPSI0LjczMyIvPjxwYXRoIGQ9Im00LjQxNSA2LjcyLjI5Ni00LjgzIDIuMjM3IDQuMjY1bTEuNDEtLjEwOCAxLjYxNi00LjU2Ljk3NCA0LjcxNSIgZmlsbC1vcGFjaXR5PSJudWxsIi8+PC9nPjxnIGZpbGw9IiNhMDY1ZmYiPjxjaXJjbGUgY3k9IjkuNDg2IiBjeD0iOC45NDEiIHI9IjQuNzMzIi8+PHBhdGggZD0ibTUuMzcgNy4xMDIuMjk1LTQuODMgMi4yMzcgNC4yNjVtMS40MS0uMTA3IDEuNjE2LTQuNTYyLjk3NCA0LjcxNiIgZmlsbC1vcGFjaXR5PSJudWxsIi8+PC9nPjwvc3ZnPg=="},1541:function(n,i){n.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTS0xLTFoODAydjYwMkgtMXoiLz48ZyBmaWxsPSIjZmZkMWQ4Ij48Y2lyY2xlIGN5PSI4LjQ4NCIgY3g9IjcuNDE0IiByPSI0LjczMyIvPjxwYXRoIGQ9Im0zLjg0MyA2LjEuMjk2LTQuODMgMi4yMzYgNC4yNjVtMS40MTEtLjEwOEw5LjQuODY2bC45NzUgNC43MTYiIGZpbGwtb3BhY2l0eT0ibnVsbCIvPjwvZz48ZyBmaWxsPSIjZmY5MWEzIj48Y2lyY2xlIGN5PSI5LjEwNCIgY3g9IjcuOTg3IiByPSI0LjczMyIvPjxwYXRoIGQ9Im00LjQxNSA2LjcyLjI5Ni00LjgzIDIuMjM3IDQuMjY1bTEuNDEtLjEwOCAxLjYxNi00LjU2Ljk3NCA0LjcxNSIgZmlsbC1vcGFjaXR5PSJudWxsIi8+PC9nPjxnIGZpbGw9IiNmZjY2ODAiPjxjaXJjbGUgY3k9IjkuNDg2IiBjeD0iOC45NDEiIHI9IjQuNzMzIi8+PHBhdGggZD0ibTUuMzcgNy4xMDIuMjk1LTQuODMgMi4yMzcgNC4yNjVtMS40MS0uMTA3IDEuNjE2LTQuNTYyLjk3NCA0LjcxNiIgZmlsbC1vcGFjaXR5PSJudWxsIi8+PC9nPjwvc3ZnPg=="},1606:function(n,i,t){"use strict";t.r(i),t.d(i,"resources",(function(){return I}));var e=t(1458),j=t(1539);const I={"userscript.js":async function(n){let{addon:i,console:t,msg:j}=n;const I=i.tab.traps.vm;let a=i.settings.get("projectpage"),c=i.settings.get("showicononly");Object(e.a)();let o=document.createElement("div");i.tab.displayNoneWhileDisabled(o);let s=document.createElement("div"),g=document.createElement("span"),u=document.createElement("span");o.className="clone-container-container",s.className="clone-container",g.className="clone-count",u.className="clone-icon",o.appendChild(u),o.appendChild(s),s.appendChild(g);let l=0;const N=Array(301).fill().map((n,i)=>j("clones",{cloneCount:i}));function M(n){const t=I.runtime._cloneCounter;(t!==l||n)&&(l=t,0===t?o.dataset.count="none":t>=I.runtime.runtimeOptions.maxClones?o.dataset.count="full":o.dataset.count="",g.dataset.str=c?t:N[t]||j("clones",{cloneCount:t}),0===t||"editor"!==i.tab.editorMode&&!a?o.style.display="none":o.style.display="flex")}i.settings.addEventListener("change",()=>{c=i.settings.get("showicononly"),a=i.settings.get("projectpage"),M(!0)});const L=I.runtime._step;for(I.runtime._step=function(){for(var n=arguments.length,i=new Array(n),t=0;t<n;t++)i[t]=arguments[t];const e=L.call(this,...i);return M(),e};;)await i.tab.waitForElement('[class*="controls_controls-container"]',{markAsSeen:!0,reduxEvents:["scratch-gui/mode/SET_PLAYER","fontsLoaded/SET_FONTS_LOADED","scratch-gui/locales/SELECT_LOCALE"]}),(a||"editor"===i.tab.editorMode||i.tab.redux.state.scratchGui.mode.isEmbedded)&&(i.tab.appendToSharedSpace({space:"afterStopButton",element:o,order:2}),M(!0))},"style.css":t.n(j).a,"300cats.svg":"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTS0xLTFoODAydjYwMkgtMXoiLz48ZyBmaWxsPSIjZmZkMWQ4Ij48Y2lyY2xlIGN5PSI4LjQ4NCIgY3g9IjcuNDE0IiByPSI0LjczMyIvPjxwYXRoIGQ9Im0zLjg0MyA2LjEuMjk2LTQuODMgMi4yMzYgNC4yNjVtMS40MTEtLjEwOEw5LjQuODY2bC45NzUgNC43MTYiIGZpbGwtb3BhY2l0eT0ibnVsbCIvPjwvZz48ZyBmaWxsPSIjZmY5MWEzIj48Y2lyY2xlIGN5PSI5LjEwNCIgY3g9IjcuOTg3IiByPSI0LjczMyIvPjxwYXRoIGQ9Im00LjQxNSA2LjcyLjI5Ni00LjgzIDIuMjM3IDQuMjY1bTEuNDEtLjEwOCAxLjYxNi00LjU2Ljk3NCA0LjcxNSIgZmlsbC1vcGFjaXR5PSJudWxsIi8+PC9nPjxnIGZpbGw9IiNmZjY2ODAiPjxjaXJjbGUgY3k9IjkuNDg2IiBjeD0iOC45NDEiIHI9IjQuNzMzIi8+PHBhdGggZD0ibTUuMzcgNy4xMDIuMjk1LTQuODMgMi4yMzcgNC4yNjVtMS40MS0uMTA3IDEuNjE2LTQuNTYyLjk3NCA0LjcxNiIgZmlsbC1vcGFjaXR5PSJudWxsIi8+PC9nPjwvc3ZnPg==","cat.svg":"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTS0xLTFoODAydjYwMkgtMXoiLz48ZyBmaWxsPSIjZGNjOWZmIj48Y2lyY2xlIGN5PSI4LjQ4NCIgY3g9IjcuNDE0IiByPSI0LjczMyIvPjxwYXRoIGQ9Im0zLjg0MyA2LjEuMjk2LTQuODMgMi4yMzYgNC4yNjVtMS40MTEtLjEwOEw5LjQuODY2bC45NzUgNC43MTYiIGZpbGwtb3BhY2l0eT0ibnVsbCIvPjwvZz48ZyBmaWxsPSIjYmM5NmZmIj48Y2lyY2xlIGN5PSI5LjEwNCIgY3g9IjcuOTg3IiByPSI0LjczMyIvPjxwYXRoIGQ9Im00LjQxNSA2LjcyLjI5Ni00LjgzIDIuMjM3IDQuMjY1bTEuNDEtLjEwOCAxLjYxNi00LjU2Ljk3NCA0LjcxNSIgZmlsbC1vcGFjaXR5PSJudWxsIi8+PC9nPjxnIGZpbGw9IiNhMDY1ZmYiPjxjaXJjbGUgY3k9IjkuNDg2IiBjeD0iOC45NDEiIHI9IjQuNzMzIi8+PHBhdGggZD0ibTUuMzcgNy4xMDIuMjk1LTQuODMgMi4yMzcgNC4yNjVtMS40MS0uMTA3IDEuNjE2LTQuNTYyLjk3NCA0LjcxNiIgZmlsbC1vcGFjaXR5PSJudWxsIi8+PC9nPjwvc3ZnPg=="}}}]);