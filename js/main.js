(()=>{var e,t,o,r,n={},a={};function i(e){var t=a[e];if(void 0!==t)return t.exports;var o=a[e]={exports:{}};return n[e](o,o.exports,i),o.exports}i.m=n,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(o,r){if(1&r&&(o=this(o)),8&r)return o;if("object"==typeof o&&o){if(4&r&&o.__esModule)return o;if(16&r&&"function"==typeof o.then)return o}var n=Object.create(null);i.r(n);var a={};e=e||[null,t({}),t([]),t(t)];for(var s=2&r&&o;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>a[e]=()=>o[e]));return a.default=()=>o,i.d(n,a),n},i.d=(e,t)=>{for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,o)=>(i.f[o](e,t),t)),[])),i.u=e=>"chunk."+{51:"country-header",267:"countries-tab",487:"article-tab",914:"categories-tab"}[e]+".js?h="+{51:"645422ab8a7e750570a4",267:"64bef808c978678fea05",487:"146937b297e063c25565",914:"a5f5ce782b85daadfc25"}[e],i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o={},r="folc-styleguide:",i.l=(e,t,n,a)=>{if(o[e])o[e].push(t);else{var s,c;if(void 0!==n)for(var d=document.getElementsByTagName("script"),l=0;l<d.length;l++){var u=d[l];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==r+n){s=u;break}}s||(c=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.setAttribute("data-webpack",r+n),s.src=e),o[e]=[t];var p=(t,r)=>{s.onerror=s.onload=null,clearTimeout(f);var n=o[e];if(delete o[e],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((e=>e(r))),t)return t(r)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),c&&document.head.appendChild(s)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),(()=>{var e={179:0};i.f.j=(t,o)=>{var r=i.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var n=new Promise(((o,n)=>r=e[t]=[o,n]));o.push(r[2]=n);var a=i.p+i.u(t),s=new Error;i.l(a,(o=>{if(i.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var n=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",s.name="ChunkLoadError",s.type=n,s.request=a,r[1](s)}}),"chunk-"+t,t)}};var t=(t,o)=>{var r,n,[a,s,c]=o,d=0;if(a.some((t=>0!==e[t]))){for(r in s)i.o(s,r)&&(i.m[r]=s[r]);c&&c(i)}for(t&&t(o);d<a.length;d++)n=a[d],i.o(e,n)&&e[n]&&e[n][0](),e[a[d]]=0},o=self.webpackChunkfolc_styleguide=self.webpackChunkfolc_styleguide||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var s=$(".main-content"),c=$("#main-navbar"),d=$("body"),l=$(".main-header");function u(){var e=l.outerHeight(),t=d.outerHeight()-e;document.documentElement.style.setProperty("--menu-height","".concat(e,"px")),document.documentElement.style.setProperty("--menu-overlay-height","".concat(t,"px"))}c.on("show.bs.collapse",(function(){u(),d.addClass("overflow-hidden"),s.addClass("menu-opened")})),c.on("hide.bs.collapse",(function(){d.hasClass("overflow-hidden")&&d.removeClass("overflow-hidden"),s.removeClass("menu-opened")})),c.on("show.bs.dropdown",".nav-item.dropdown",(function(){u(),s.addClass("menu-opened")})),c.on("hide.bs.dropdown",".nav-item.dropdown",(function(){s.removeClass("menu-opened")}));var p=0;function f(){$(window).innerWidth()<768?s.css("margin-top","".concat(l.outerHeight(),"px")):s.css("margin-top","0")}$(window).on("scroll",(function(){var e=$(window).scrollTop();window.matchMedia("(max-width: 767px)").matches?(e<p?(l.addClass("sticky"),l.addClass("sticky-visible"),f()):(e>l.outerHeight()&&l.removeClass("sticky-visible"),setTimeout((function(){e<=0&&(l.removeClass("sticky"),f())}),400)),p=e<=0?0:e):(l.removeClass("sticky"),l.removeClass("sticky-visible"),s.css("margin-top","0"))})),$(window).on("resize",f),$(document).on("click",".avoid-auto-close.dropdown-menu",(function(e){e.stopPropagation()})),$(".countries-tab").length>0&&i.e(267).then(i.t.bind(i,361,23)),$(".categories-tab").length>0&&i.e(914).then(i.t.bind(i,762,23)),$(".article-tab").length>0&&i.e(487).then(i.t.bind(i,881,23)),$(".country-header").length>0&&i.e(51).then(i.t.bind(i,511,23))})();