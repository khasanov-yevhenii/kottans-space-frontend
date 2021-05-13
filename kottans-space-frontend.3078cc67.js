parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"FO+Z":[function(require,module,exports) {
"use strict";function e(e){return Math.floor(Math.random()*e)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getRandomInt=e;
},{}],"Focm":[function(require,module,exports) {
"use strict";var t=require("./utils");function e(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,i)}return n}function n(t){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?e(Object(o),!0).forEach(function(e){i(t,e,o[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))})}return t}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(){document.getElementById("app-root").innerHTML=`${v()}`;const t=document.querySelectorAll(".rocket-radio"),e=document.querySelectorAll(".mission-radio");t.forEach(t=>t.addEventListener("change",({target:t})=>l(t.value))),e.forEach(t=>t.addEventListener("change",({target:t})=>w(t.value)))}function r(){return fetch("https://api.spacexdata.com/v3/rockets").then(t=>t.json()).then(t=>t)}function a(){return fetch("https://api.spacexdata.com/v3/missions").then(t=>t.json()).then(t=>t)}function d(){return fetch("https://api.spacexdata.com/v3/history").then(t=>t.json()).then(t=>t)}function s(){window.dataStore.isDataLoading=!0,window.dataStore.error=null,Promise.all([r(),a(),d()]).then(t=>{window.dataStore=n(n({},window.dataStore),{},{rockets:t[0],missions:t[1],histories:t[2]}),window.dataStore.isDataLoading=!1,o()}).catch(t=>{window.dataStore.isDataLoading=!1,window.dataStore.error=t})}function c({rocket_name:t,description:e,flickr_images:n,wikipedia:i,height:o,diameter:r,mass:a}){return`<div>\n            <div>\n                <img src="${n[0]}" alt="${t}">\n                <p>${e}</p>\n            </div>\n            <div>\n                <h3><a href="${i}">${t}</a></h3>\n                <table>\n                    <tbody>\n                        <tr>\n                            <td>HEIGHT:</td>\n                            <td>${o.meters} m</td>\n                        </tr>\n                        <tr>\n                            <td>DIAMETER:</td>\n                            <td>${r.meters} m</td>\n                        </tr>\n                        <tr>\n                            <td>MASS:</td>\n                            <td>${a.kg} kg</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>`}module.not&&module.not.accept(),window.dataStore={rockets:[],selectedRocket:"Falcon 1",missions:[],selectedMission:"Thaicom",histories:[],isDataLoading:!1,error:null},window.renderApp=o,s();const l=t=>{window.dataStore.selectedRocket=t,o()};function u(){return`<div>\n        <h2>Rockets</h2>\n        <div>\n        ${window.dataStore.rockets.map(({rocket_name:t,id:e})=>`<label>${t}<input class="rocket-radio" type="radio" value="${t}" name="missions" ${t===window.dataStore.selectedRocket?"checked":""}/></label>`)}\n        </div>\n       ${c(window.dataStore.rockets.find(({rocket_name:t})=>t===window.dataStore.selectedRocket))}\n    </div>`}function p({wikipedia:t,mission_name:e,description:n}){return`<div>\n            <a href="${t}">${e}</a>\n            <p>${n}</p>\n        </div>`}const w=t=>{window.dataStore.selectedMission=t,o()};function h(){const{missions:t}=window.dataStore;return`<div>\n        <h2>Missions</h2>\n        <div>\n        ${t.map(({mission_name:t})=>`<label>${t}<input class="mission-radio" type="radio" value="${t}" name="rockets" ${t===window.dataStore.selectedMission?"checked":""}/></label>`)}\n        </div>\n        ${p(t.find(({mission_name:t})=>t===window.dataStore.selectedMission))}\n    </div>`}function m(){const e=(0,t.getRandomInt)(window.dataStore.histories.length),n=window.dataStore.histories[e];return`<div>\n      <h2>Random event</h2>\n      <div>\n          <p>${n.title}</p>\n          <p>${n.details}</p>\n      </div>\n  </div>`}function v(){return window.dataStore.isDataLoading?"<div>Loading...</div>":`<div>\n        <h1>SpaceX info app</h1>\n        ${u()}\n        <hr>\n        ${h()}\n        <hr>\n        ${m()}\n    </div>`}
},{"./utils":"FO+Z"}]},{},["Focm"], null)
//# sourceMappingURL=kottans-space-frontend.3078cc67.js.map