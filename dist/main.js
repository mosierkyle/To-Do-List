(()=>{"use strict";var e={150:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(81),o=n.n(r),i=n(645),s=n.n(i)()(o());s.push([e.id,"* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0; \n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n#main-container {\n    width: 100vw;\n    height: 100vh;\n    display: grid;\n    grid-template: 1fr 5fr / 2fr 5fr;\n}\n\n#header {\n    border: solid;\n    grid-area: 1 / 1 / 2 / 3;\n    display: flex;\n    justify-content: start;\n    align-items: center;\n    padding: 2rem;\n}\n\n#sidebar {\n    border: solid;\n    grid-area: 2 / 1 / 3 / 2;\n    display: grid;\n    grid-template-rows: 1fr 2fr;\n    padding: 1rem;\n    grid-row-gap: 2rem;\n}\n\n#lists {\n    display: grid;\n    grid-template-rows: 2fr 1fr 1fr 1fr;\n    grid-row-gap: 10px;\n}\n\n#projects {\n    display: grid;\n    grid-template-rows: 1fr 7fr;\n    grid-row-gap: 10px;\n}\n\n.list {\n    padding-left: 1rem;\n    font-size: 1.2rem;\n    font-weight: 500;\n}\n\n.list:hover {\n    cursor: pointer;\n}\n\n.list:active {\n    text-decoration: underline;\n}\n\n#project-list {\n    display: grid;\n    grid-template-rows: repeat(auto-fit, 22.5px);\n    grid-row-gap: max(10px, 8%);\n    padding-left: 1rem;\n}\n\n.project {\n    font-size: 1.2rem;\n    font-weight: 500;\n}\n\n.project:hover {\n    cursor: pointer;\n}\n\n.project:active {\n    text-decoration: underline;\n}\n\n#content {\n    border: solid;\n    grid: 2 / 2 / 3 / 3;\n}\n\n#to-dos {\n    width: 100%;\n    height: 100%;\n    padding: 2rem;\n    display: grid;\n    grid-template-rows: repeat(auto-fit, 50px);\n    grid-auto-rows: 100px;\n    row-gap: 1rem;\n}\n\n.to-do-item {\n    background-color: rgba(0,0,0,0.1);\n    border-radius: 10px;\n    width: 100%;\n    height: 50px;\n    display: grid;\n    grid-template: 1fr / .5fr 6fr 1fr 1fr 1fr 1fr;\n    align-items: center;\n    column-gap: .5rem;\n    justify-content: center;\n    padding: 0 1rem;\n\n}\n\n.to-do-item-box {\n    background-color: white;\n    border: none;\n    height: 16px;\n    width: 16px;\n    border-radius: 50%;\n}\n\n.to-do-item-box:hover{\n    cursor: pointer;\n}\n\n.to-do-item-box-clicked {\n    background-color: rgba(0,0,0,0.5);\n    border: 2px white solid;\n}\n\n.to-do-item-box-div {\n    justify-content: center;\n    align-items: center;\n    display: flex;\n}\n\n\n.to-do-item-title {\n    color: black;\n    font-weight: 500;\n}\n\n.to-do-item-details {\n    color: black;\n    background-color: white;\n    border: none;\n    padding: .40rem;\n    border-radius: 10px;\n    font-size: 1rem;\n}\n\n/* .to-do-item-date {\n\n} */\n\n.to-do-item-date-div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.to-do-item-edit {\n    color: black;\n    background-color: white;\n    border: none;\n    padding: .40rem;\n    border-radius: 10px;\n    font-size: 1rem;\n}\n\n.to-do-item-delete {\n    color: black;\n    background-color: white;\n    border: none;\n    padding: .40rem;\n    border-radius: 10px;\n    font-size: 1rem;\n}\n\n.details {\n    display: none;\n    grid-template-columns: repeat(4,1fr);\n    position: absolute;\n    top: 25%;\n    left: 30%;\n    height: 100px;\n    width: 60vw;\n    background-color: white;\n    border: 1px solid rgba(0,0,0,0.5);\n    /* align-items: center;\n    justify-content: center; */\n    border-radius: 10px;\n    padding: 1rem;\n}\n\n.details-title {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-weight: 500;\n    font-size: 1.1rem;\n}\n\n.details-due-date {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-weight: 500;\n    font-size: 1.1rem;\n}\n\n.details-priority {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-weight: 500;\n    font-size: 1.1rem;\n}\n\n.close-button {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-weight: 500;\n    font-size: 1.1rem;\n    border-radius: 10px;\n    background-color: rgba(0,0,0,0.1);\n}\n\n.new-button-div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.new-button {\n    background-color: rgba(0,0,0,0.1);\n    border: none;\n    font-size: 1.5rem;\n    padding: .25rem .75rem;\n    border-radius: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.new-heading-div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}",""]);const a=s},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var a=0;a<this.length;a++){var d=this[a][0];null!=d&&(s[d]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);r&&s[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},s=[],a=0;a<e.length;a++){var d=e[a],c=r.base?d[0]+r.base:d[0],l=i[c]||0,u="".concat(c," ").concat(l);i[c]=l+1;var p=n(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=o(m,r);r.byIndex=a,t.splice(a,0,{identifier:u,updater:f,references:1})}s.push(u)}return s}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<i.length;s++){var a=n(i[s]);t[a].references--}for(var d=r(e,o),c=0;c<i.length;c++){var l=n(i[c]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=d}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),i=n(569),s=n.n(i),a=n(565),d=n.n(a),c=n(216),l=n.n(c),u=n(589),p=n.n(u),m=n(150),f={};f.styleTagTransform=p(),f.setAttributes=d(),f.insert=s().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;class h{constructor(e){this.name=e,this.toDos=[]}getName(){return this.name}addItem(e){this.toDos.push(e)}removeItem(e){let t=this.toDos.indexOf(e);this.toDos.splice(t,1)}changeName(e){this.name=e}sortList(){y(this.toDos)}}const g=(()=>{const e=[];return{projectList:e,addItem:t=>{e.push(t)},deleteItem:t=>{let n=e.indexOf(t);e.splice(n,1)}}})(),b=(()=>{const e=[];return{lists:e,addItem:t=>{e.push(t)}}})(),y=e=>{e.sort(((e,t)=>e.priority>t.priority?1:-1))};class v{constructor(e,t,n,r,o=!1){this.name=e,this.dueDate=t,this.priority=n,this.hasProject=o,this.project=r}getName(){return this.name}changeName(e){this.name=e}changeDueDate(e){this.dueDate=e}changePriority(e){this.priority=e}getLists(){return((e,t,n)=>{const r=[];return r.push(b.lists[0]),!0===t&&r.push(n),e<10&&r.push(b.lists[2]),e<20&&r.push(b.lists[1]),r})(this.dueDate,this.hasProject,this.project)}addTo(){return((e,t)=>{this.getLists().forEach((t=>{t.addItem(e)}))})(this)}deleteFrom(){return((e,t)=>{this.getLists().forEach((t=>{t.removeItem(e)}))})(this)}}const x=e=>{const t=e.name.replace(/\s/g,""),n=document.querySelector("#body"),r=document.querySelector("#to-dos");let o=document.createElement("div"),i=document.createElement("div"),s=document.createElement("button"),a=document.createElement("p"),d=document.createElement("div"),c=document.createElement("p"),l=document.createElement("button"),u=document.createElement("button"),p=document.createElement("button"),m=document.createElement("div"),f=document.createElement("p"),h=document.createElement("p"),g=document.createElement("p"),b=document.createElement("p");o.setAttribute("id",t),o.setAttribute("class","to-do-item"),i.setAttribute("class","to-do-item-box-div"),s.setAttribute("class","to-do-item-box"),a.setAttribute("class","to-do-item-title"),d.setAttribute("class","to-do-item-date-div"),c.setAttribute("class","to-do-item-date"),l.setAttribute("class","to-do-item-details"),u.setAttribute("class","to-do-item-edit"),p.setAttribute("class","to-do-item-edit"),m.setAttribute("class","details"),f.setAttribute("class","details-title"),h.setAttribute("class","details-due-date"),g.setAttribute("class","details-priority"),b.setAttribute("class","close-button"),a.textContent=e.name,c.textContent=e.dueDate,l.textContent="Details",u.textContent="Edit",p.textContent="Delete",f.textContent=`Name: ${e.name}`,h.textContent=`Due Date: ${e.dueDate}`,g.textContent=`Priority: ${e.priority}`,b.textContent="X",r.appendChild(o),o.appendChild(i),i.appendChild(s),o.appendChild(a),o.appendChild(d),d.appendChild(c),o.appendChild(l),o.appendChild(u),o.appendChild(p),n.appendChild(m),m.appendChild(f),m.appendChild(h),m.appendChild(g),m.appendChild(b),l.addEventListener("click",(()=>{m.style.display="grid"})),b.addEventListener("click",(()=>{m.style.display="none"})),u.addEventListener("click",(()=>{m.style.display="grid"})),p.addEventListener("click",(()=>{E(t,e)}))},w=e=>{C(),D(e);for(let t=0;t<e.length;t++)x(e[t]);j()},C=()=>{const e=document.querySelector("#to-dos");for(;e.firstChild;)e.removeChild(e.firstChild)},E=(e,t)=>{document.querySelector(`#${e}`).remove(),t.deleteFrom()},j=()=>{const e=document.querySelector("#to-dos"),t=document.createElement("div"),n=document.createElement("button");n.textContent="+",n.setAttribute("class","new-button"),t.setAttribute("class","new-button-div"),e.appendChild(t),t.appendChild(n),n.addEventListener("click",(()=>{}))},D=e=>{const t=document.querySelector("#to-dos"),n=document.createElement("div"),r=document.createElement("h2");for(let t=0;t<b.lists.length;t++)e==b.lists[t].toDos&&(r.textContent=k(b.lists[t].getName()));for(let t=0;t<g.projectList.length;t++)e==g.projectList[t].toDos&&(r.textContent=k(g.projectList[t].getName()));r.setAttribute("class","new-heading"),n.setAttribute("class","new-heading-div"),t.appendChild(n),n.appendChild(r)};function k(e){return e.charAt(0).toUpperCase()+e.slice(1)}(()=>{const e=new h("home"),t=new h("today"),n=new h("week");b.addItem(e),b.addItem(n),b.addItem(t)})();const A=new h("school"),L=new h("gym");g.addItem(A),g.addItem(L),console.log(g);const S=new v("take trash out",7,1,"none",!1),I=new v("email prof",11,3,A,!0),T=new v("pay dues",7,2,A,!0);console.log(b.lists[1]),S.addTo(),I.addTo(),T.addTo(),y(b.lists[0].toDos),w(b.lists[0].toDos),(()=>{const e=document.querySelector("#home"),t=document.querySelector("#today"),n=document.querySelector("#week");e.addEventListener("click",(()=>{y(b.lists[0].toDos),w(b.lists[0].toDos)})),t.addEventListener("click",(()=>{y(b.lists[2].toDos),w(b.lists[2].toDos)})),n.addEventListener("click",(()=>{y(b.lists[1].toDos),w(b.lists[1].toDos)}))})(),(e=>{const t=document.querySelector("#project-list");for(let n=0;n<e.projectList.length;n++){const r=document.createElement("p");t.appendChild(r),r.textContent=e.projectList[n].name,r.setAttribute("class","project"),r.addEventListener("click",(()=>{y(e.projectList[n].toDos),w(e.projectList[n].toDos)}))}})(g)})()})();