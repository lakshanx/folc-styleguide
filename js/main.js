(()=>{var e,t,o,r,n={},i={};function a(e){var t=i[e];if(void 0!==t)return t.exports;var o=i[e]={exports:{}};return n[e](o,o.exports,a),o.exports}a.m=n,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,a.t=function(o,r){if(1&r&&(o=this(o)),8&r)return o;if("object"==typeof o&&o){if(4&r&&o.__esModule)return o;if(16&r&&"function"==typeof o.then)return o}var n=Object.create(null);a.r(n);var i={};e=e||[null,t({}),t([]),t(t)];for(var s=2&r&&o;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>i[e]=()=>o[e]));return i.default=()=>o,a.d(n,i),n},a.d=(e,t)=>{for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,o)=>(a.f[o](e,t),t)),[])),a.u=e=>"chunk."+{51:"country-header",267:"countries-tab",487:"article-tab",914:"categories-tab"}[e]+".js?h="+{51:"78d2bf42958b21f8e9a5",267:"64bef808c978678fea05",487:"146937b297e063c25565",914:"2cc509f5c0373cbb5a91"}[e],a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o={},r="folc-styleguide:",a.l=(e,t,n,i)=>{if(o[e])o[e].push(t);else{var s,c;if(void 0!==n)for(var d=document.getElementsByTagName("script"),l=0;l<d.length;l++){var u=d[l];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==r+n){s=u;break}}s||(c=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",r+n),s.src=e),o[e]=[t];var p=(t,r)=>{s.onerror=s.onload=null,clearTimeout(f);var n=o[e];if(delete o[e],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((e=>e(r))),t)return t(r)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),c&&document.head.appendChild(s)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),(()=>{var e={179:0};a.f.j=(t,o)=>{var r=a.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var n=new Promise(((o,n)=>r=e[t]=[o,n]));o.push(r[2]=n);var i=a.p+a.u(t),s=new Error;a.l(i,(o=>{if(a.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var n=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",s.name="ChunkLoadError",s.type=n,s.request=i,r[1](s)}}),"chunk-"+t,t)}};var t=(t,o)=>{var r,n,[i,s,c]=o,d=0;if(i.some((t=>0!==e[t]))){for(r in s)a.o(s,r)&&(a.m[r]=s[r]);c&&c(a)}for(t&&t(o);d<i.length;d++)n=i[d],a.o(e,n)&&e[n]&&e[n][0](),e[i[d]]=0},o=self.webpackChunkfolc_styleguide=self.webpackChunkfolc_styleguide||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var s=$(".main-content"),c=$("#main-navbar"),d=$("body"),l=$(".main-header");function u(){var e=l.outerHeight(),t=d.outerHeight()-e;document.documentElement.style.setProperty("--menu-height","".concat(e,"px")),document.documentElement.style.setProperty("--menu-overlay-height","".concat(t,"px"))}function p(){d.hasClass("overflow-hidden")&&d.removeClass("overflow-hidden"),s.removeClass("menu-opened")}c.on("show.bs.collapse",(function(){u(),d.addClass("overflow-hidden"),s.addClass("menu-opened")})),c.on("hide.bs.collapse",p),c.on("show.bs.dropdown",".nav-item.dropdown",(function(){u(),s.addClass("menu-opened")})),c.on("hide.bs.dropdown",".nav-item.dropdown",p);var f=0;function h(){$(window).innerWidth()<768?s.css("margin-top","".concat(l.outerHeight(),"px")):s.css("margin-top","0")}$(window).on("scroll",(function(){var e=$(window).scrollTop();window.matchMedia("(max-width: 767px)").matches?(e<f?(l.addClass("sticky"),l.addClass("sticky-visible"),h()):(e>l.outerHeight()&&l.removeClass("sticky-visible"),setTimeout((function(){e<=0&&(l.removeClass("sticky"),h())}),400)),f=e<=0?0:e):(l.removeClass("sticky"),l.removeClass("sticky-visible"),s.css("margin-top","0"))})),$(window).on("resize",h),$(document).on("click",".avoid-auto-close.dropdown-menu",(function(e){e.stopPropagation()})),$(".countries-tab").length>0&&a.e(267).then(a.t.bind(a,361,23)),$(".categories-tab").length>0&&a.e(914).then(a.t.bind(a,762,23)),$(".article-tab").length>0&&a.e(487).then(a.t.bind(a,881,23)),$(".country-header").length>0&&a.e(51).then(a.t.bind(a,511,23))})();