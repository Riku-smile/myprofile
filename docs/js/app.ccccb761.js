(function(t){function e(e){for(var a,n,c=e[0],o=e[1],l=e[2],u=0,f=[];u<c.length;u++)n=c[u],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&f.push(s[n][0]),s[n]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);v&&v(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],a=!0,n=1;n<r.length;n++){var c=r[n];0!==s[c]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=r[0]))}return t}var a={},n={app:0},s={app:0},i=[];function c(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"eaf29e4b"}[t]+".js"}function o(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(t){var e=[],r={about:1};n[t]?e.push(n[t]):0!==n[t]&&r[t]&&e.push(n[t]=new Promise((function(e,r){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"440a6874"}[t]+".css",s=o.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var l=i[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===s))return e()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){l=f[c],u=l.getAttribute("data-href");if(u===a||u===s)return e()}var v=document.createElement("link");v.rel="stylesheet",v.type="text/css",v.onload=e,v.onerror=function(e){var a=e&&e.target&&e.target.src||s,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete n[t],v.parentNode.removeChild(v),r(i)},v.href=s;var d=document.getElementsByTagName("head")[0];d.appendChild(v)})).then((function(){n[t]=0})));var a=s[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,r){a=s[t]=[e,r]}));e.push(a[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=c(t);var f=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(v);var r=s[t];if(0!==r){if(r){var a=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",f.name="ChunkLoadError",f.type=a,f.request=n,r[1](f)}s[t]=void 0}};var v=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},o.m=t,o.c=a,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(r,a,function(e){return t[e]}.bind(null,a));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/myprofile/",o.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var f=0;f<l.length;f++)e(l[f]);var v=u;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var a=r("85ec"),n=r.n(a);n.a},"064e":function(t,e,r){},"076e":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"text-center text-sm text-gray-600"},[r("p",[t._v("(C) RIKUSITE")])])}],s={name:"Footer"},i=s,c=r("2877"),o=Object(c["a"])(i,a,n,!1,null,"48c90d9a",null);e["a"]=o.exports},"12d9":function(t,e,r){},"453c":function(t,e,r){"use strict";var a=r("064e"),n=r.n(a);n.a},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("transition",{attrs:{mode:"out-in"}},[r("router-view")],1)],1)},s=[],i=(r("034f"),r("2877")),c={},o=Object(i["a"])(c,n,s,!1,null,null,null),l=o.exports,u=(r("d3b7"),r("8c4f")),f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"home"}},[r("Header"),r("main",[r("Service"),r("Policy")],1),r("Footer")],1)},v=[],d=r("71c2"),p=r("076e"),m=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},b=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"container mx-auto"},[a("div",{staticClass:"text-center"},[a("h2",{staticClass:"title-h2"},[t._v("Service")])]),a("div",{staticClass:"flex flex-wrap justify-center lg:justify-around"},[a("div",{staticClass:"card-wrapper"},[a("img",{staticClass:"w-full",attrs:{src:r("77f7"),alt:"LP制作・修正"}}),a("div",{staticClass:"card-inner"},[a("h3",{staticClass:"card-title"},[t._v("LP制作・修正")]),a("p",{staticClass:"card-p"},[t._v(" ランディングページの制作・修正を行います。"),a("br"),t._v(" デザイン、バナー等の作成は原則クライアント様側からのご提供とさせて頂いております。"),a("br"),t._v(" 簡単な物でしたら作成可能ですのでお申し付けください。 ")])]),a("div",{staticClass:"card-inner"},[a("span",{staticClass:"card-span"},[t._v("ページ単価：¥10,000")])])]),a("div",{staticClass:"card-wrapper"},[a("img",{staticClass:"w-full",attrs:{src:r("9786"),alt:"WordPress制作・修正"}}),a("div",{staticClass:"card-inner"},[a("h3",{staticClass:"card-title"},[t._v("WordPress制作・修正")]),a("p",{staticClass:"card-p"},[t._v(" ワードプレス関係の作業を行います。"),a("br"),t._v(" 具体的な例として新規テーマの作成、コンタクトフォームの設置等をお受け可能です。"),a("br"),t._v(" こちらのポートフォリオでは、Googleフォームを採用しております。 ")])]),a("div",{staticClass:"card-inner"},[a("span",{staticClass:"card-span"},[t._v("ページ単価：¥15,000")])])]),a("div",{staticClass:"card-wrapper"},[a("img",{staticClass:"w-full",attrs:{src:r("c67b"),alt:"HP制作・修正"}}),a("div",{staticClass:"card-inner"},[a("h3",{staticClass:"card-title"},[t._v("HP制作・修正")]),a("p",{staticClass:"card-p"},[t._v(" ホームページの制作・修正を行います。"),a("br"),t._v(" デザイン、バナー等の作成はLP制作・修正に準拠します。ご確認ください。"),a("br"),t._v(" ホームページの新規作成の際には別途追加で料金が発生しますので、併せてご確認ください。 ")])]),a("div",{staticClass:"card-inner"},[a("span",{staticClass:"card-span mr-2"},[t._v("ページ単価：¥10,000")]),a("span",{staticClass:"card-span"},[t._v("追加料金：¥5,000")])])])])])}],h={name:"Service"},_=h,C=Object(i["a"])(_,m,b,!1,null,"143498b0",null),y=C.exports,g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"container mx-auto my-4"},[t._m(0),r("div",{staticClass:"bg-white mx-4 md:mx-auto max-w-2xl shadow"},[r("ul",{staticClass:"flex justify-start border-b"},[r("li",{staticClass:"tab-btn"},[r("button",{class:{active:1==t.isActive},attrs:{type:"button"},on:{click:function(e){return t.isSelect(1)}}},[t._v("その１")])]),r("li",{staticClass:"tab-btn"},[r("button",{class:{active:2==t.isActive},attrs:{type:"button"},on:{click:function(e){return t.isSelect(2)}}},[t._v("その２")])]),r("li",{staticClass:"tab-btn"},[r("button",{class:{active:3==t.isActive},attrs:{type:"button"},on:{click:function(e){return t.isSelect(3)}}},[t._v("その３")])])]),r("div",{staticClass:"px-8 py-4"},[r("transition",{attrs:{mode:"out-in"}},[1==t.isActive?r("div",{key:"1"},[r("h3",{staticClass:"title"},[t._v("納品後のご対応について")]),r("p",{staticClass:"content"},[t._v(" 納品後は２週間まで修正期間を設けます。"),r("br"),t._v(" 何かご不満な点やバグ等がございましたら遠慮なくお申し付けください。"),r("br"),t._v(" なお、２週間経過後も有料にて修正のご対応をさせて頂きますので、お気軽にご依頼ください。 ")])]):2==t.isActive?r("div",{key:"2"},[r("h3",{staticClass:"title"},[t._v("不都合によりお電話をお受けできなかった場合")]),r("p",{staticClass:"content"},[t._v(" 翌日までに必ず折り返しお電話させて頂きます。"),r("br"),t._v(" また、お急ぎの場合は恐縮ですが、お電話対応の時間を作業に充てたい為、 メールやツール等でのご連絡も併せてお願い申し上げます。 ")])]):3==t.isActive?r("div",{key:"3"},[r("h3",{staticClass:"title"},[t._v("期日厳守")]),r("p",{staticClass:"content"},[t._v(" 決められた納期、期限は必ず守ります。"),r("br"),t._v(" また、作業の進捗報告についてクライアント様側からの指定がない場合は その都度必要に応じてご連絡いたします。 ")])]):t._e()])],1)])])},x=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-center"},[r("h2",{staticClass:"title-h2"},[t._v("Policy")])])}],w={name:"Policy",data:function(){return{isActive:1}},methods:{isSelect:function(t){this.isActive=t}}},P=w,j=(r("9c6d"),Object(i["a"])(P,g,x,!1,null,"5bb78f98",null)),E=j.exports,O={name:"Home",components:{Header:d["a"],Footer:p["a"],Service:y,Policy:E}},S=O,A=(r("453c"),Object(i["a"])(S,f,v,!1,null,"61a680b3",null)),k=A.exports;a["a"].use(u["a"]);var T=[{path:"/",name:"Home",component:k},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],$=new u["a"]({mode:"history",base:"/myprofile/",routes:T}),H=$;r("ba8c");a["a"].config.productionTip=!1,new a["a"]({router:H,render:function(t){return t(l)}}).$mount("#app")},"71c2":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",[t._m(0),r("nav",[r("ul",{staticClass:"flex flex-row justify-around py-4 items-center"},[r("li",{staticClass:"router"},[r("router-link",{attrs:{to:"/"}},[t._v("TOP")])],1),r("li",{staticClass:"router"},[r("router-link",{attrs:{to:"/about"}},[t._v("ABOUT")])],1),r("li",{staticClass:"router"},[r("a",{attrs:{href:t.publicPath+"contact.html"}},[t._v("CONTACT")])])])])])},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"logo"},[r("h1",{staticClass:"text-6xl text-center font-serif"},[t._v("RIKUSITE")])])}],s={name:"Header",data:function(){return{publicPath:"/myprofile/"}}},i=s,c=r("2877"),o=Object(c["a"])(i,a,n,!1,null,"5ef79c9d",null);e["a"]=o.exports},"77f7":function(t,e,r){t.exports=r.p+"img/デスクワーク.97f1f2ed.png"},"85ec":function(t,e,r){},9786:function(t,e,r){t.exports=r.p+"img/wp_icon.e2a41e16.png"},"9c6d":function(t,e,r){"use strict";var a=r("12d9"),n=r.n(a);n.a},ba8c:function(t,e,r){},c67b:function(t,e,r){t.exports=r.p+"img/プレゼン.77e3ea5b.png"}});
//# sourceMappingURL=app.ccccb761.js.map