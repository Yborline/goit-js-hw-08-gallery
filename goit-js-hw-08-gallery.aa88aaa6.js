parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Z5sL":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var p=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}];exports.default=p;
},{}],"jEDW":[function(require,module,exports) {
"use strict";function n(n){return n.map(function(n){var e=n.preview,a=n.original,r=n.description;return'\n        <li class="gallery__item">\n  <a\n    class="gallery__link"\n    href="'.concat(a,'"\n  >\n    <img\n      class="gallery__image"\n      src="').concat(e,'"\n      data-source="').concat(a,'"\n      alt="').concat(r,'"\n    />\n  </a>\n</li>\n')}).join("")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.createGalleryList=n;
},{}],"s49Z":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.onImageClick=t;var e=require("./index.js");function t(t){if(t.preventDefault(),"IMG"===t.target.nodeName){var r=t.target.getAttribute(["data-source"]);e.divBoxEl.classList.add("is-open"),e.imgEl.setAttribute("src",r)}}
},{"./index.js":"Focm"}],"abfB":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.onCloseModalClick=s;var e=require("./index.js");function s(){e.divBoxEl.classList.remove("is-open"),e.imgEl.setAttribute("src","")}
},{"./index.js":"Focm"}],"U53A":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.onBackdropClick=o;var e=require("./onCloseModal.js");function o(o){o.currentTarget===o.target&&(0,e.onCloseModalClick)()}
},{"./onCloseModal.js":"abfB"}],"oFm7":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.onEscCloseModal=o;var e=require("./onCloseModal.js");function o(o){"Escape"===o.key&&(0,e.onCloseModalClick)()}
},{"./onCloseModal.js":"abfB"}],"PlIe":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.onSlideImg=r;var t=i(require("./array.js")),e=require("./index.js");function i(t){return t&&t.__esModule?t:{default:t}}function r(e){console.log(e),"ArrowLeft"===e.key&&n(t.default),"ArrowRight"===e.key&&o(t.default)}function n(t){for(var i=0;i<t.length;i++){if(t[i].original===e.imgEl.getAttribute("src")&&0!==i)l(t[i-1])}}function o(t){for(var i=0;i<t.length;i++){if(t[i].original===e.imgEl.getAttribute("src")&&i!==t.length-1){u(t[i+1]);break}}}function l(t){e.imgEl.setAttribute("src",t.original),e.imgEl.setAttribute("alt",t.description)}function u(t){e.imgEl.setAttribute("src",t.original),e.imgEl.setAttribute("alt",t.description)}
},{"./array.js":"Z5sL","./index.js":"Focm"}],"Focm":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.imgEl=exports.divBoxEl=void 0;var e=n(require("./array.js")),r=require("./createMarkup.js"),o=require("./oneImageClick.js"),t=require("./onCloseModal.js"),l=require("./onBackdropClick.js"),i=require("./onEscCloseModal.js"),d=require("./onSlideImg.js");function n(e){return e&&e.__esModule?e:{default:e}}var c=document.querySelector(".js-gallery"),s=(0,r.createGalleryList)(e.default),a=document.querySelector(".js-lightbox");exports.divBoxEl=a;var u=document.querySelector("img.lightbox__image");exports.imgEl=u;var m=document.querySelector(".lightbox__button"),v=document.querySelector(".lightbox__overlay");c.insertAdjacentHTML("beforeend",s),c.addEventListener("click",o.onImageClick),m.addEventListener("click",t.onCloseModalClick),v.addEventListener("click",l.onBackdropClick),document.addEventListener("keydown",i.onEscCloseModal),document.addEventListener("keydown",d.onSlideImg);
},{"./array.js":"Z5sL","./createMarkup.js":"jEDW","./oneImageClick.js":"s49Z","./onCloseModal.js":"abfB","./onBackdropClick.js":"U53A","./onEscCloseModal.js":"oFm7","./onSlideImg.js":"PlIe"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-08-gallery/goit-js-hw-08-gallery.aa88aaa6.js.map