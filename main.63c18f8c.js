parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=document.getElementsByClassName("slider__slide"),t=document.getElementById("prev"),d=document.getElementById("next"),n=1;function o(l){l<1?n=e.length:l>e.length&&(n=1);for(var r=0;r<e.length;r++)e[r].style.display="none";function s(e){o(n+=e)}e[n-1].style.display="flex",t.onclick=function(){s(-1)},d.onclick=function(){s(1)}}o(n);var l=document.getElementById("change-them");l.onclick=function(){if(l.classList.contains("theme-light")){l.classList.remove("theme-light"),l.classList.add("theme-dark"),l.style.background="#2c2c2c",document.getElementById("header").style.backgroundColor="#2060f6",document.getElementById("header").style.borderRadius="0 0 0 100px",document.getElementById("button").style.background="#FF9C8E",document.getElementById("button").style.borderRadius="30px",document.getElementById("slider").style.borderRadius="70px 30px 0 0",document.getElementById("slider").style.background="#2060f6",document.getElementById("menu").style.background="#FF9C8E";var e=document.getElementById("slider__slide");e.classList.remove("slider__slide--light"),e.classList.add("slider__slide--dark");var t=document.getElementById("services__item-number-yellow"),d=document.getElementById("services__item-arrow-yellow");t.style.color="#FCC91D",d.style.background="#FCC91D";var n=document.getElementById("services__item-number-green"),o=document.getElementById("services__item-arrow-green");n.style.color="#15D850",o.style.background="#15D850";var r=document.getElementById("services__item-number-red"),s=document.getElementById("services__item-arrow-red");r.style.color="#F36363",s.style.background="#F36363";var c=document.getElementById("vpr-bg-shapce");c.classList.remove("vpr__content--dark"),c.classList.add("vpr__content--light"),document.getElementById("vpr__btn").style.borderRadius="30px",document.getElementById("vpr__btn").style.background="#FF7E6C",document.getElementById("footer").style.background="#2060f6",document.getElementById("footer").style.borderRadius="0 100px 0 0",document.getElementById("contact-us-send-btn").style.background="#FF7E6C",document.getElementById("contact-us-send-btn").style.borderRadius="30px";for(var m=document.querySelectorAll(".contact-form__input"),u=0;u<m.length;u++)m[u].style.borderBottom="1px solid #fff"}else{l.classList.remove("theme-dark"),l.classList.add("theme-light"),l.style.background="#2060f6",document.getElementById("header").style.backgroundColor="#2c2c2c",document.getElementById("header").style.borderRadius="0",document.getElementById("button").style.background="#2060f6",document.getElementById("button").style.borderRadius="10px",document.getElementById("slider").style.borderRadius="0",document.getElementById("slider").style.background="#2c2c2c",document.getElementById("menu").style.background="#2060f6";var a=document.getElementById("slider__slide");a.classList.remove("slider__slide--dark"),a.classList.add("slider__slide--light");var i=document.getElementById("services__item-number-yellow"),y=document.getElementById("services__item-arrow-yellow");i.style.color="#2060f6",y.style.background="#2060f6";var g=document.getElementById("services__item-number-green"),_=document.getElementById("services__item-arrow-green");g.style.color="#2060f6",_.style.background="#2060f6";var b=document.getElementById("services__item-number-red"),E=document.getElementById("services__item-arrow-red");b.style.color="#2060f6",E.style.background="#2060f6";var v=document.getElementById("vpr-bg-shapce");v.classList.remove("vpr__content--light"),v.classList.add("vpr__content--dark"),document.getElementById("vpr__btn").style.borderRadius="10px",document.getElementById("vpr__btn").style.background="#2060f6",document.getElementById("footer").style.background="#2c2c2c",document.getElementById("footer").style.borderRadius="30px 30px 0 0",document.getElementById("contact-us-send-btn").style.background="#2060f6",document.getElementById("contact-us-send-btn").style.borderRadius="10px";for(var B=document.querySelectorAll(".contact-form__input"),I=0;I<B.length;I++)B[I].style.borderBottom="1px solid #fff"}};var r=document.getElementById("contact-form");r.addEventListener("submit",function(e){e.preventDefault(),r.reset()}),window.addEventListener("hashchange",function(){"#menu"===window.location.hash?document.body.classList.add("page__body--with-menu"):document.body.classList.remove("page__body--with-menu")});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.63c18f8c.js.map