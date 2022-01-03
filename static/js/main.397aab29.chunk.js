(this["webpackJsonpmarkdown-editor"]=this["webpackJsonpmarkdown-editor"]||[]).push([[0],{105:function(e,t,n){},106:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(11),r=n.n(o),l=n(50),i=n.n(l),s=n(13),u=[{name:"Blue",primaryColor:"#0647A6",accentColor:"#4284F4",textColor:"#212121"},{name:"Black",primaryColor:"#1E1E1E",accentColor:"#2C2C2C",textColor:"#ffffff"}],m=n(51),d=n.n(m),f=n(132),E=function(e,t){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(a){return console.log(a),t}},b=function(e,t){var n=Object(a.useState)(E(e,t)),c=Object(s.a)(n,2),o=c[0],r=c[1];return[o,function(t){try{var n=t instanceof Function?t(o):t;r(n),window.localStorage.setItem(e,JSON.stringify(n))}catch(a){console.log(a)}}]};var v=function(e){var t=e.isDarkMode,n=e.setDarkMode;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h4",null,"Code Dark Mode"),c.a.createElement(f.a,{checked:t,onChange:function(e){n(e.target.checked)}}))};var h=function(){var e=b("isDarkMode",!1),t=Object(s.a)(e,2),n=t[0],o=t[1],r=b("codeDarkMode",!1),l=Object(s.a)(r,2),i=l[0],u=l[1];return Object(a.useEffect)((function(){n?document.body.classList.add("dark"):document.body.classList.remove("dark")}),[n]),Object(a.useEffect)((function(){var e="markdown-editor/styles/".concat(i?"dark":"light",".css");document.getElementById("code-stylesheet").setAttribute("href",e)}),[i]),c.a.createElement(c.a.Fragment,null,c.a.createElement("h4",null,"Dark Mode"),c.a.createElement(f.a,{checked:n,onChange:function(e){var t=e.target.checked;u(!!t),o(t)}}),c.a.createElement(v,{isDarkMode:i,setDarkMode:u}))};var g=function(e){return{backgroundColor:e}},k=function(e){var t=e.isVisible,n=e.setVisible,o=e.activeTheme,r=e.setActiveTheme,l=Object(a.useRef)(null);Object(a.useEffect)((function(){var e=function(e){!l.current||l.current.parentElement.contains(e.target)||l.current.contains(e.target)||n(!1)};return document.addEventListener("click",e),function(){document.removeEventListener("click",e)}}),[t,n]);var i=u.map((function(e){return c.a.createElement("div",{onClick:function(){return function(e){r(e)}(e)},className:"toggle-btn",style:g(e.primaryColor),key:e.name},e.name===o.name&&c.a.createElement("img",{src:d.a,alt:"theme-".concat(e.name.toLowerCase)}))}));return c.a.createElement("div",{className:"all-theme-wrapper",ref:l,style:{display:t?"block":"none"}},c.a.createElement("h3",null,"Change Theme"),c.a.createElement("div",{className:"theme-btn"},i),c.a.createElement(h,null))},w=n(57),p=n.n(w);var C=function(e){document.body.style.setProperty("--primary-color",e.primaryColor),document.body.style.setProperty("--accent-color",e.accentColor),document.body.style.setProperty("--link-color",e.linkColor?e.linkColor:e.primaryColor),e.textColor&&document.body.style.setProperty("--nav-section-text-color",e.textColor)},y=function(){var e=b("theme",u[0]),t=Object(s.a)(e,2),n=t[0],o=t[1],r=Object(a.useState)(!1),l=Object(s.a)(r,2),i=l[0],m=l[1];return Object(a.useEffect)((function(){C(n)}),[n]),c.a.createElement("div",{className:"theme-toggle"},c.a.createElement("div",{className:"theme-icon",onClick:function(){m((function(e){return!e}))}},c.a.createElement("img",{src:p.a,alt:"Theme Icon"})),c.a.createElement(k,{isVisible:i,setVisible:m,activeTheme:n,setActiveTheme:o}))};var N=function(){return c.a.createElement("nav",{className:"navbar"},c.a.createElement("h3",{className:"title"},"\xa0Markdown Editor"),c.a.createElement("div",{className:"nav-right"},c.a.createElement(y,null),c.a.createElement("img",{onClick:function(){return window.open("https://github.com/coderyi/markdown-editor")},className:"github",src:i.a,alt:""})))},O=n(64),j=n(130),S=n(128),x=n(134),I=n(18),M=n(19),L=n(58),A=n(39),D=n(60),T=n(133);var B=function(e){document.getElementById(e).select(),document.execCommand("copy"),window.getSelection?window.getSelection().removeAllRanges():document.selection&&document.selection.empty()},R=function(e){var t=e.content,n=e.changeContent,o=Object(a.useState)(!1),r=Object(s.a)(o,2),l=r[0],i=r[1],u=Object(a.useRef)(null);Object(a.useEffect)((function(){""===t?localStorage.setItem("markdown","# Hi\n"):localStorage.setItem("markdown",t);var e=function(e){var t=e.value.slice(0,e.selectionStart).split(/\n|\r\n/),n=t.length,a=t[t.length-1].length;return{currentLineNumber:n,currentColumnIndex:a}}(document.getElementById("editor")),n=e.currentLineNumber,a=e.currentColumnIndex;document.getElementById("line-column").textContent="Line "+n+" Col "+a+" Word "+t.length}),[t]);var m=function(){i(!1)};return c.a.createElement("div",{className:"markdown-edit scroll"},c.a.createElement("div",{className:"section-title"},c.a.createElement("h3",null,"Markdown"),c.a.createElement("div",{className:"right-section"},c.a.createElement("button",{onClick:function(){n(t+"# ")},className:"editorbtn"},c.a.createElement(I.b,null)),c.a.createElement("button",{onClick:function(){n(t+"** **")},className:"editorbtn"},c.a.createElement(M.c,null)),c.a.createElement("button",{onClick:function(){n(t+"* *")},className:"editorbtn"},c.a.createElement(I.c,null)),c.a.createElement("button",{onClick:function(){n(t+"~~ ~~")},className:"editorbtn"},c.a.createElement(M.f,null)),c.a.createElement("button",{onClick:function(){n(t+"` `")},className:"editorbtn"},c.a.createElement(L.a,null)),c.a.createElement("button",{onClick:function(){n(t+"```language\nyour code\n```")},className:"editorbtn"},c.a.createElement(I.a,null)),c.a.createElement("button",{onClick:function(){n(t+"[]()")},className:"editorbtn"},c.a.createElement(I.d,null)),c.a.createElement("button",{onClick:function(){n(t+"A | B | C\n---|---|---\nD |\xa0E | F\n")},className:"editorbtn"},c.a.createElement(A.b,null)),c.a.createElement("button",{onClick:function(){n(t+"> \n")},className:"editorbtn"},c.a.createElement(M.e,null)),c.a.createElement("button",{onClick:function(){n(t+"- \n")},className:"editorbtn"},c.a.createElement(M.d,null)),c.a.createElement("button",{onClick:function(){n(t+"![]()\n")},className:"editorbtn"},c.a.createElement(A.a,null))),c.a.createElement("div",{className:"right-section"},c.a.createElement(T.a,{title:"Import Markdown"},c.a.createElement("button",{onClick:function(){document.getElementById("fileInput").click()},className:"btn"},c.a.createElement("input",{type:"file",id:"fileInput",onChange:function(e){if(window.FileReader){var t=e.target.files[0],a=t.size/1024/1024,c=new FileReader;c.onload=function(e){a<3&&n(e.target.result)},c.readAsText(t)}},accept:".txt,.md,"}),c.a.createElement(D.a,null))),c.a.createElement(T.a,{title:"Download Markdown"},c.a.createElement("button",{onClick:function(){var e=new Blob([t],{type:"text/plain"}),n=document.createElement("a");n.download="markdown.md",n.href=window.URL.createObjectURL(e),n.click()},className:"btn"},c.a.createElement(I.e,null))),c.a.createElement(T.a,{title:"Copy to Clipboard"},c.a.createElement("button",{onClick:function(){B("editor"),i(!0)},className:"btn"},c.a.createElement(M.a,null))),c.a.createElement(T.a,{title:"Clean"},c.a.createElement("button",{onClick:function(){n(""),u.current.focus()},className:"btn"},c.a.createElement(M.b,null))))),c.a.createElement("textarea",{className:"editable",value:t,onChange:function(e){e.preventDefault(),n(e.target.value)},id:"editor",ref:u}),c.a.createElement("div",{className:"text-bottom"},c.a.createElement("p",{id:"line-column"},"Line 1 Col 0")),c.a.createElement(j.a,{open:l,autoHideDuration:2e3,onClose:m},c.a.createElement(S.a,{onClose:m,severity:"success",elevation:6,variant:"filled"},c.a.createElement(x.a,null,"Copied"),"The markdown is copied to your clipboard")))},W=n(61),F=n(62),z=n.n(F),P=(n(84),n(85),n(86),n(87),n(88),n(89),n(90),n(91),n(92),n(93),n(94),n(95),n(96),n(97),n(98),n(99),n(100),n(101),n(102),n(103),n(104),n(40)),H=n(63);var U=function(e){return W(e)},J=function(e){var t=e.content,n=Object(a.useState)(U(t)),o=Object(s.a)(n,2),r=o[0],l=o[1],i=Object(P.b)();return Object(a.useEffect)((function(){z.a.highlightAll()})),Object(a.useEffect)((function(){l(U(t))}),[t]),c.a.createElement("div",{className:"markdown-preview scroll"},c.a.createElement("div",{className:"section-title"},c.a.createElement("h3",null,"Preview"),c.a.createElement("div",{className:"right-section"},c.a.createElement(T.a,{title:"Download HTML"},c.a.createElement("button",{className:"btn",onClick:function(){var e=document.createElement("a");e.href="data:text/html,".concat(r),e.download="export.html",e.click()}},c.a.createElement(I.e,null))),c.a.createElement(T.a,{title:"FullScreen"},c.a.createElement("button",{className:"btn",onClick:function(){return i.active?i.exit():i.enter()}},c.a.createElement(H.a,null))))),c.a.createElement(P.a,{handle:i},c.a.createElement("div",{id:"preview",className:"html-div ".concat(i.active?"preview-fullscreen":""),dangerouslySetInnerHTML:{__html:r}})))};var V=function(){var e=localStorage.getItem("markdown")||"# Hi\n",t=Object(a.useState)(e),n=Object(s.a)(t,2),o=n[0],r=n[1],l=Object(a.useState)("horizontal"),i=Object(s.a)(l,2),u=i[0],m=i[1];return Object(a.useEffect)((function(){var e=function(){m(window.innerWidth<600?"vertical":"horizontal")};e(),window.onresize=e}),[]),c.a.createElement("div",{className:"work-area"},c.a.createElement(O.a,{className:"wrapper-card",sizes:[50,50],minSize:"horizontal"===u?300:100,expandToMin:!0,gutterAlign:"center",direction:u},c.a.createElement(R,{content:o,changeContent:r}),c.a.createElement(J,{content:o})))};n(105);var _=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(N,null),c.a.createElement(V,null))},$=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function q(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(_,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/markdown-editor",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/markdown-editor","/service-worker.js");$?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):q(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):q(t,e)}))}}()},50:function(e,t,n){e.exports=n.p+"static/media/github.c1763e6a.svg"},51:function(e,t,n){e.exports=n.p+"static/media/tick.5fcbdf03.svg"},57:function(e,t,n){e.exports=n.p+"static/media/theme_icon.fc96cec2.svg"},73:function(e,t,n){e.exports=n(106)}},[[73,1,2]]]);
//# sourceMappingURL=main.397aab29.chunk.js.map