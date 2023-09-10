(()=>{"use strict";var e={150:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(81),r=n.n(o),i=n(645),d=n.n(i)()(r());d.push([e.id,"* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0; \n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n#main-container {\n    width: 100vw;\n    height: 100vh;\n    display: grid;\n    grid-template-rows: minmax(100px, auto) 10fr;\n    grid-template-columns: minmax(200px, auto) 10fr;\n}\n\n#header {\n    grid-area: 1 / 1 / 2 / 3;\n    display: flex;\n    justify-content: start;\n    align-items: center;\n    padding: 2rem;\n    background-color: rgba(0,0,0,0.05);;\n    color:  black;\n}\n\n#sidebar {\n    grid-area: 2 / 1 / 3 / 2;\n    display: grid;\n    grid-template-rows: 1fr 2fr;\n    padding: 1rem;\n    background-color: rgb(206,255,158);\n    color: black;\n    max-height: fit-content;\n    overflow: scroll;\n}\n\n#lists {\n    display: grid;\n    grid-template-rows: 65px 50px 50px 50px;\n    grid-row-gap: 10px;\n    min-width: 200px;\n}\n\n#projects {\n    display: grid;\n    grid-template-rows: 1fr 7fr;\n    grid-row-gap: 15px;\n}\n\n.list {\n    padding-left: 1rem;\n    font-size: 1.2rem;\n    font-weight: 500;\n}\n\n.list:hover {\n    cursor: pointer;\n}\n\n.list:active {\n    text-decoration: underline;\n}\n\n#project-list {\n    display: grid;\n    grid-template-rows: repeat(auto-fit, 22.5px);\n    grid-row-gap: max(10px, 8%);\n}\n\n.project {\n    font-size: 1.2rem;\n    font-weight: 500;\n    padding-left: 1rem;\n}\n\n.project:hover {\n    cursor: pointer;\n}\n\n.project:active {\n    text-decoration: underline;\n}\n\n.new-project-button-div {\n    padding-left: 1rem;\n}\n\n.new-project-button {\n    background-color: white;\n    border: none;\n    padding: .25rem .75rem;\n    border-radius: 10px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.1rem;\n}\n\n.new-project-button:hover {\n    cursor: pointer;\n}\n\n.project-input {\n    background-color: white;\n    border: none;\n    padding: .40rem;\n    border-radius: 10px;\n    font-size: 1.1rem;\n    color: black;\n    width:120px;\n    height: 1.75rem;\n    margin-left: .8rem;\n}\n\n#content {\n    grid: 2 / 2 / 3 / 3;\n}\n\n\n#to-dos {\n    width: 100%;\n    height: 100%;\n    padding: 2rem;\n    display: grid;\n    grid-template-rows: repeat(auto-fit, 50px);\n    grid-auto-rows: 100px;\n    row-gap: 1rem;\n    justify-content: center;\n    max-height: 90vh;\n    overflow: scroll;\n}\n\n.new-to-do-item {\n    background-color: rgb(206,255,158);\n    border-radius: 10px;\n    width: 65vw;\n    min-width: 530px;\n    height: 50px;\n    display: grid;\n    grid-template: 1fr / .5fr 6fr 127px 1fr 1fr;\n    align-items: center;\n    column-gap: .5rem;\n    justify-content: center;\n    padding: 0 1rem;\n    border-left: 10px solid rgba(0,0,0,0.5);\n}\n\n.to-do-item {\n    background-color: rgb(206,255,158);\n    border-radius: 10px;\n    width: 65vw;\n    min-width: 530px;\n    height: 50px;\n    display: grid;\n    grid-template: 1fr / .5fr 6fr 127px 1fr 1fr;\n    align-items: center;\n    column-gap: .5rem;\n    justify-content: center;\n    padding: 0 1rem;\n    overflow: hidden;\n}\n\n.high {\n    border-left: 10px solid rgb(249, 92, 92);\n}\n\n.medium {\n    border-left: 10px solid rgb(249, 241, 92);\n}\n\n.low {\n    border-left: 10px solid rgb(92, 249, 100);\n}\n\n.to-do-item-box {\n    background-color: white;\n    border: none;\n    height: 16px;\n    width: 16px;\n    border-radius: 50%;\n}\n\n.to-do-item-box:hover{\n    cursor: pointer;\n}\n\n.clicked {\n    background-color: rgba(0,0,0,0.5);\n    border: 2px white solid;\n}\n\n.to-do-item-box-div {\n    justify-content: center;\n    align-items: center;\n    display: flex;\n}\n\n\n.to-do-item-title {\n    color: black;\n    font-weight: 500;\n    overflow: hidden;\n}\n\n.checked {\n    text-decoration: line-through;\n}\n\n.to-do-item-details {\n    color: black;\n    background-color: white;\n    border: none;\n    padding: .40rem;\n    border-radius: 10px;\n    font-size: 1rem;\n}\n\n.to-do-item-details:hover {\n    cursor: pointer;\n}\n\n.to-do-item-date-div {\n    display: flex;\n    justify-content: end;\n    align-items: center;\n}\n\n.to-do-item-delete {\n    color: black;\n    background-color: white;\n    border: none;\n    padding: .40rem;\n    border-radius: 10px;\n    font-size: 1rem;\n}\n\n.to-do-item-delete:hover {\n    cursor: pointer;\n}\n\n.done-button {\n    color: black;\n    background-color: white;\n    border: none;\n    padding: .40rem;\n    border-radius: 10px;\n    font-size: 1rem;\n}\n\n.done-button:hover {\n    cursor: pointer;\n}\n\n.priority-input {\n    color: black;\n    background-color: white;\n    border: none;\n    padding: .40rem;\n    border-radius: 10px;\n    font-size: 1rem;\n}\n\n.date-input {\n    color: black;\n    background-color: white;\n    border: none;\n    padding: .40rem;\n    border-radius: 10px;\n    font-size: 1rem;\n}\n\n.title-input {\n    color: black;\n    background-color: white;\n    border: none;\n    padding: .40rem;\n    border-radius: 10px;\n    font-size: 1rem;\n}\n\n#blur {\n    position: absolute;\n    width: 100vw;\n    height: 100vh;\n    display: none;\n    background-color: rgba(0,0,0,0.5);\n}\n\n.details {\n    display: none;\n    row-gap: 1rem;\n    position: absolute;\n    top: 15%;\n    left: 15%;\n    height: 30vh;\n    width: 75vw;\n    background-color: white;\n    border: 1px solid rgba(0,0,0,0.5);\n    border-radius: 10px;\n    align-items: center;\n    justify-content: center;\n    z-index: 999;\n}\n\n\n.details-title {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-weight: 500;\n    font-size: 1.1rem;\n}\n\n.details-due-date {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-weight: 500;\n    font-size: 1.1rem;\n}\n\n.details-priority {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-weight: 500;\n    font-size: 1.1rem;\n}\n\n.close-button {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-weight: 500;\n    font-size: 1.1rem;\n    border-radius: 10px;\n    background-color: rgba(0,0,0,0.05);;\n    width: 100%;\n}\n\n.new-button-div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.new-button {\n    background-color: rgba(0,0,0,0.05);\n    border: none;\n    padding: .25rem .75rem;\n    border-radius: 10px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.1rem;\n}\n\n.new-button:hover {\n    cursor: pointer;\n}\n\n.new-heading-div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n",""]);const s=d},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var d={};if(o)for(var s=0;s<this.length;s++){var a=this[s][0];null!=a&&(d[a]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);o&&d[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},d=[],s=0;s<e.length;s++){var a=e[s],c=o.base?a[0]+o.base:a[0],l=i[c]||0,u="".concat(c," ").concat(l);i[c]=l+1;var p=n(u),m={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var h=r(m,o);o.byIndex=s,t.splice(s,0,{identifier:u,updater:h,references:1})}d.push(u)}return d}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var d=0;d<i.length;d++){var s=n(i[d]);t[s].references--}for(var a=o(e,r),c=0;c<i.length;c++){var l=n(i[c]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=a}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),i=n(569),d=n.n(i),s=n(565),a=n.n(s),c=n(216),l=n.n(c),u=n(589),p=n.n(u),m=n(150),h={};h.styleTagTransform=p(),h.setAttributes=a(),h.insert=d().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=l(),t()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;class g{constructor(e){this.name=e,this.toDos=[]}getName(){return this.name}addItem(e){this.toDos.push(e)}removeItem(e){let t=this.toDos.indexOf(e);this.toDos.splice(t,1)}changeName(e){this.name=e}sortList(){v(this.toDos)}}const f=(()=>{const e=[];return{projectList:e,addItem:t=>{e.push(t)},deleteItem:t=>{let n=e.indexOf(t);e.splice(n,1)}}})(),b=(()=>{const e=[];return{lists:e,addItem:t=>{e.push(t)}}})(),v=e=>{e.sort(((e,t)=>e.priority<t.priority?1:-1))};class y{constructor(e,t,n,o,r=!1){this.name=e,this.dueDate=t,this.priority=n,this.hasProject=r,this.project=o}getName(){return this.name}changeName(e){this.name=e}changeDueDate(e){this.dueDate=e}changePriority(e){this.priority=e}getLists(){return((e,t,n)=>{const o=[];o.push(b.lists[0]);let r=new Date,i=Number((d=e,Number(`${d.charAt(d.length-2)}${d.charAt(d.length-1)}`)));var d;let s=Number((e=>Number(`${e.charAt(5)}${e.charAt(6)}`))(e))-1,a=Number((e=>Number(`${e.charAt(0)}${e.charAt(1)}${e.charAt(2)}${e.charAt(3)}`))(e));return r.setFullYear(a,s,i),!0===t&&o.push(n),function(e){const t=new Date,n=t.getDate(),o=t.getDay(),r=new Date(t.setDate(n-o)),i=new Date(r);return i.setDate(i.getDate()+6),e>=r&&e<=i}(r)&&o.push(b.lists[1]),function(e){const t=new Date;return e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()}(r)&&o.push(b.lists[2]),o})(this.dueDate,this.hasProject,this.project)}addTo(){return((e,t)=>{this.getLists().forEach((t=>{t.addItem(e)}))})(this)}deleteFrom(){return((e,t)=>{this.getLists().forEach((t=>{t.removeItem(e)}))})(this)}}const x=()=>{let e=localStorage.projectList;if(void 0!==localStorage.projectList&&void 0!==localStorage.projectList){const t=e.split(",");for(let e=0;e<t.length;e++){let n=new g(t[e]);f.addItem(n)}}};let w;const C=e=>{const t=e.name.replace(/\s/g,""),n=document.querySelector("#to-dos");let o=document.createElement("div"),r=document.createElement("div"),i=document.createElement("button"),d=document.createElement("div"),s=document.createElement("p"),a=document.createElement("div"),c=document.createElement("p"),l=document.createElement("button"),u=document.createElement("button"),p=document.createElement("div"),m=document.createElement("div"),h=document.createElement("div"),g=document.createElement("dic"),f=document.createElement("div");const b=document.querySelector("#blur");o.setAttribute("id",t),o.setAttribute("class","to-do-item"),r.setAttribute("class","to-do-item-box-div"),i.setAttribute("class","to-do-item-box"),s.setAttribute("class","to-do-item-title"),d.setAttribute("class","to-do-item-title-div"),a.setAttribute("class","to-do-item-date-div"),c.setAttribute("class","to-do-item-date"),l.setAttribute("class","to-do-item-details"),u.setAttribute("class","to-do-item-delete"),p.setAttribute("class","details"),m.setAttribute("class","details-title"),h.setAttribute("class","details-due-date"),g.setAttribute("class","details-priority"),f.setAttribute("class","close-button"),s.textContent=e.name,c.textContent=e.dueDate,l.textContent="Details",u.textContent="Delete",m.textContent=`Name: ${e.name}`,h.textContent=`Due Date: ${e.dueDate}`,g.textContent=`Priority: ${F(e.priority)}`,f.textContent="X",n.appendChild(o),o.appendChild(r),r.appendChild(i),o.appendChild(d),d.appendChild(s),o.appendChild(a),a.appendChild(c),o.appendChild(l),o.appendChild(u),body.appendChild(p),p.appendChild(m),p.appendChild(h),p.appendChild(g),p.appendChild(f),P(e.priority,o),i.addEventListener("click",(()=>{O(s,i)})),l.addEventListener("click",(()=>{p.style.display="grid",b.style.display="flex"})),f.addEventListener("click",(()=>{p.style.display="none",b.style.display="none"})),u.addEventListener("click",(()=>{L(t,e)})),s.addEventListener("click",(()=>{I(d,s,e)})),c.addEventListener("click",(()=>{N(a,c,e)}))},E=e=>{j(),D(e);for(let t=0;t<e.length;t++)C(e[t]);A(),w=e},j=()=>{const e=document.querySelector("#to-dos");for(;e.firstChild;)e.removeChild(e.firstChild)},k=e=>{0==e.projectList.length&&x();const t=document.querySelector("#project-list");for(;t.firstChild;)t.removeChild(t.firstChild);for(let n=0;n<e.projectList.length;n++){const o=document.createElement("p");t.appendChild(o),o.textContent=e.projectList[n].name,o.setAttribute("class","project"),o.addEventListener("click",(()=>{v(e.projectList[n].toDos),E(e.projectList[n].toDos)}))}M()},L=(e,t)=>{document.querySelector(`#${e}`).remove(),t.deleteFrom()},A=()=>{const e=document.querySelector("#to-dos"),t=document.createElement("div"),n=document.createElement("button");n.textContent="Add Task",n.setAttribute("class","new-button"),t.setAttribute("class","new-button-div"),e.appendChild(t),t.appendChild(n),n.addEventListener("click",(()=>{$()}))},D=e=>{const t=document.querySelector("#to-dos"),n=document.createElement("div"),o=document.createElement("h2");for(let t=0;t<b.lists.length;t++)e==b.lists[t].toDos&&(o.textContent=S(b.lists[t].getName()));for(let t=0;t<f.projectList.length;t++)e==f.projectList[t].toDos&&(o.textContent=S(f.projectList[t].getName()));o.setAttribute("class","new-heading"),n.setAttribute("class","new-heading-div"),t.appendChild(n),n.appendChild(o)};function S(e){return e.charAt(0).toUpperCase()+e.slice(1)}const $=()=>{const e=document.querySelector("#to-dos");e.removeChild(e.lastChild);let t=document.createElement("div"),n=document.createElement("div"),o=document.createElement("button");const r=document.createElement("input"),i=document.createElement("input"),d=document.createElement("select"),s=document.createElement("option"),a=document.createElement("option"),c=document.createElement("option"),l=document.createElement("option"),u=document.createElement("button");t.setAttribute("class","new-to-do-item"),n.setAttribute("class","to-do-item-box-div"),o.setAttribute("class","to-do-item-box"),r.setAttribute("class","title-input"),r.setAttribute("type","text"),i.setAttribute("class","date-input"),i.setAttribute("type","date"),d.setAttribute("class","priority-input"),u.setAttribute("class","done-button"),s.textContent="Priority",a.textContent="High",c.textContent="Medium",l.textContent="Low",u.textContent="Done",e.appendChild(t),t.appendChild(n),n.appendChild(o),t.appendChild(r),t.appendChild(i),t.appendChild(d),d.appendChild(s),d.appendChild(l),d.appendChild(c),d.appendChild(a),t.appendChild(u),u.addEventListener("click",(()=>{""!=r.value&&""!=i.value&&"Priority"!=d.value&&q(r.value,i.value,d.value)}))},I=(e,t,n)=>{e.removeChild(t);const o=document.createElement("input");o.setAttribute("class","title-input"),o.setAttribute("type","text"),o.setAttribute("placeholder",t.textContent),e.appendChild(o),o.addEventListener("keydown",(r=>{if("Enter"===r.key)if(""==o.value){const r=document.createElement("p");r.setAttribute("class","to-do-item-title"),r.textContent=t.value,e.removeChild(o),e.appendChild(r),r.addEventListener("click",(()=>{I(e,r,n)})),z()}else if(""!=o.value){const t=document.createElement("p");t.setAttribute("class","to-do-item-title"),t.textContent=o.value,n.changeName(o.value),e.removeChild(o),e.appendChild(t),t.addEventListener("click",(()=>{I(e,t,n)})),z()}}))},N=(e,t,n)=>{e.removeChild(t);const o=document.createElement("input");o.setAttribute("class","date-input"),o.setAttribute("type","date"),e.appendChild(o),o.addEventListener("keydown",(t=>{if("Enter"===t.key){const t=document.createElement("p");t.setAttribute("class","to-do-item-date"),t.textContent=o.value,n.changeDueDate(o.value),e.removeChild(o),e.appendChild(t),t.addEventListener("click",(()=>{N(e,t,n)})),z()}}))},z=(e=w)=>{v(e),E(e)},q=(e,t,n,o="none",r=!1)=>{const i=document.querySelector(".new-heading").textContent.toLowerCase();let d=0,s=o,a=r;for(let e=0;e<f.projectList.length;e++)f.projectList[e].name==i&&(s=f.projectList[e],a=!0);"High"==n?d=3:"Medium"==n?d=2:"Low"==n&&(d=1);const c=new y(e,t,d,s,a);console.log(c),((e,t,n,o,r)=>{localStorage[`${e}`]=`${e},${t},${n},${o},${r}`,console.log(localStorage[`${e}`])})(e,t,d,s,a),c.addTo(),z()},M=()=>{const e=document.querySelector("#project-list"),t=document.createElement("div"),n=document.createElement("button");n.textContent="Add Project",n.setAttribute("class","new-project-button"),t.setAttribute("class","new-project-button-div"),e.appendChild(t),t.appendChild(n),n.addEventListener("click",(()=>{T()}))},T=()=>{const e=document.querySelector("#project-list");e.removeChild(e.lastChild);const t=document.createElement("input");t.setAttribute("type","text"),t.setAttribute("class","project-input"),e.appendChild(t),t.addEventListener("keydown",(e=>{if("Enter"===e.key){if(""==t.value)return;const e=new g(t.value);(e=>{if(void 0===localStorage.projectList)localStorage.projectList=`${e}`;else if(void 0!==localStorage.projectList){let t=localStorage.projectList;localStorage.projectList=`${t},${e}`}console.log(localStorage.projectList)})(t.value),f.addItem(e),k(f)}}))},P=(e,t)=>{"3"==e?t.classList.add("high"):"2"==e?t.classList.add("medium"):"1"==e&&t.classList.add("low")},O=(e,t)=>{for(let n=0;n<e.classList.length;n++)if("checked"==e.classList[n])return e.classList.remove("checked"),void t.classList.remove("clicked");e.classList.add("checked"),t.classList.add("clicked")},F=e=>"3"==e?"High":"2"==e?"Medium":"1"==e?"Low":void 0;(()=>{const e=new g("home"),t=new g("today"),n=new g("week");b.addItem(e),b.addItem(n),b.addItem(t)})(),new y("take trash out","2023-07-07",1,"none",!1).addTo(),v(b.lists[0].toDos),E(b.lists[0].toDos),(()=>{const e=document.querySelector("#home"),t=document.querySelector("#today"),n=document.querySelector("#week");e.addEventListener("click",(()=>{v(b.lists[0].toDos),E(b.lists[0].toDos)})),t.addEventListener("click",(()=>{v(b.lists[2].toDos),E(b.lists[2].toDos)})),n.addEventListener("click",(()=>{v(b.lists[1].toDos),E(b.lists[1].toDos)}))})(),k(f),console.log(localStorage),(()=>{const e=Object.entries(localStorage);for(let t=0;t<e.length;t++)if("projectList"!==e[t][0]){let n=e[t][1].split(",");const o=new y(n[0],n[1],n[2],n[3],n[4]);console.log(n[1]),o.addTo(),z()}})()})()})();