(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ec305156"],{"19f7":function(t,a,e){},4904:function(t,a,e){},"4a2f":function(t,a,e){"use strict";var s=e("dfbe"),i=e.n(s);i.a},"4a7b":function(t,a,e){},"56a6":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"message-alert mt-4"},t._l(t.messages,function(a,s){return e("div",{key:s,staticClass:"alert alert-dismissible",class:"alert-"+a.status},[t._v("\n    "+t._s(a.message)+"\n    "),e("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(a){return t.removeMessage(s)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}),0)},i=[],n=(e("ac6a"),{name:"Navbar",data:function(){return{messages:[]}},methods:{updateMessage:function(t,a){var e=Math.floor(new Date/1e3);this.messages.push({message:t,status:a,timestamp:e}),this.removeMessageWithTiming(e)},removeMessage:function(t){this.messages.splice(t,1)},removeMessageWithTiming:function(t){var a=this;setTimeout(function(){a.messages.forEach(function(e,s){e.timestamp===t&&a.messages.splice(s,1)})},5e3)}},created:function(){var t=this;t.$bus.$on("message:push",function(a){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warning";t.updateMessage(a,e)})}}),r=n,o=(e("4a2f"),e("2877")),c=Object(o["a"])(r,s,i,!1,null,null,null);a["a"]=c.exports},"62f1":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"container"},[e("swiper",{attrs:{options:t.swiperOption}},[t._l(t.sliderImg,function(t,a){return e("swiper-slide",{key:a},[e("div",{staticClass:"bg-swiper swiper-container",style:"backgroundImage: url('"+t.imgPath+"');"})])}),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)])},i=[],n={data:function(){return{swiperOption:{loop:!0,spaceBetween:30,centeredSlides:!0,grabCursor:!0,pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:1e4}},sliderImg:[{imgPath:"img/nathan-fertig-249917-unsplash.jpg"},{imgPath:"img/wes-hicks-1103983-unsplash.jpg"},{imgPath:"img/michael-browning-246513-unsplash.jpg"}]}}},r=n,o=(e("b7be"),e("2877")),c=Object(o["a"])(r,s,i,!1,null,"cd8c4a3c",null);a["a"]=c.exports},"90b0":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top"},[e("div",{staticClass:"container"},[t._m(0),t._m(1),e("router-link",{staticClass:"px-2 d-s-none d-block order-lg-1 position-relative",attrs:{to:"/customer"}},[e("i",{staticClass:"fas fa-shopping-cart"}),e("span",{staticClass:"badge badge-pill badge-danger"},[t._v("\n          "+t._s(t.cart.carts.length)+"\n        ")])]),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[e("ul",{staticClass:"navbar-nav ml-auto align-items-center"},[e("li",{staticClass:"nav-item px-3"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/index"}},[t._v("首頁")])],1),e("li",{staticClass:"nav-item px-3"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/shopping"}},[t._v("商品列表")])],1),e("li",{staticClass:"nav-item mr-auto mb-0 d-none d-s-block"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/customer"}},[e("i",{staticClass:"fas fa-shopping-cart"})])],1)])])],1)])])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"navbar-toggler p-0 border-0",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("h1",{staticClass:"logo mb-0 mx-auto"},[e("a",{staticClass:"text-hide",attrs:{href:"#/index"}},[t._v("logo")])])}],n={name:"Navbar",data:function(){return{cart:{carts:[]}}},methods:{signout:function(){var t=this,a="".concat("https://vue-course-api.herokuapp.com","/logout");this.$http.post(a).then(function(a){console.log(a.data),a.data.success&&t.$router.push("/signin")})},getCart:function(){var t=this,a="".concat("https://vue-course-api.herokuapp.com","/api/").concat("zivue","/cart");this.$http.get(a).then(function(a){t.cart=a.data.data})}},created:function(){this.getCart()}},r=n,o=(e("e239"),e("2877")),c=Object(o["a"])(r,s,i,!1,null,"265d4462",null);a["a"]=c.exports},ac6a:function(t,a,e){for(var s=e("cadf"),i=e("0d58"),n=e("2aba"),r=e("7726"),o=e("32e9"),c=e("84f2"),l=e("2b4c"),u=l("iterator"),p=l("toStringTag"),g=c.Array,m={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},f=i(m),d=0;d<f.length;d++){var v,h=f[d],b=m[h],C=r[h],_=C&&C.prototype;if(_&&(_[u]||o(_,u,g),_[p]||o(_,p,h),c[h]=g,b))for(v in s)_[v]||n(_,v,s[v],!0)}},b7be:function(t,a,e){"use strict";var s=e("19f7"),i=e.n(s);i.a},bb51:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home"},[e("Navber"),e("Alert"),e("TopSwiper"),e("router-view"),t._m(0)],1)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("footer",{staticClass:"footer mt-3"},[e("p",{staticClass:"text-center m-0"},[t._v("資料、圖片來源皆來自網路，僅用來做為學習用途。")])])}],n=e("90b0"),r=e("62f1"),o=e("56a6"),c={name:"home",components:{Navber:n["a"],TopSwiper:r["a"],Alert:o["a"]}},l=c,u=(e("d867"),e("2877")),p=Object(u["a"])(l,s,i,!1,null,"d901e45e",null);a["default"]=p.exports},d867:function(t,a,e){"use strict";var s=e("4a7b"),i=e.n(s);i.a},dfbe:function(t,a,e){},e239:function(t,a,e){"use strict";var s=e("4904"),i=e.n(s);i.a}}]);
//# sourceMappingURL=chunk-ec305156.21d9deb0.js.map