(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/my"],{"0c46":function(e,t,n){"use strict";(function(e){n("7aad");r(n("66fd"));var t=r(n("6aa9"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"6aa9":function(e,t,n){"use strict";n.r(t);var r=n("acd6"),o=n("e867");for(var c in o)"default"!==c&&function(e){n.d(t,e,(function(){return o[e]}))}(c);n("a775");var a,i=n("f0c5"),u=Object(i["a"])(o["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);t["default"]=u.exports},a775:function(e,t,n){"use strict";var r=n("aea6"),o=n.n(r);o.a},acd6:function(e,t,n){"use strict";var r;n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return r}));var o=function(){var e=this,t=e.$createElement;e._self._c},c=[]},aea6:function(e,t,n){},baef:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("2f62");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=function(){n.e("components/mix-list-cell").then(function(){return resolve(n("ac12"))}.bind(null,n)).catch(n.oe)},u=0,s=0,l=!0,f={components:{listCell:i},data:function(){return{coverTransform:"translateY(0px)",coverTransition:"0s",moving:!1,headerpic:"/static/missing-face.png",username:"未登录"}},onLoad:function(){console.log(this.user),this.hasLogin||e.navigateTo({url:"/pages/public/login"});try{this.headerpic=this.user.mpuser.headerpic||"/static/missing-face.png",this.username=this.user.real_name||this.user.mpuser.nickname||"未登录"}catch(t){}},computed:c({},(0,r.mapState)(["hasLogin","user"])),onPageScroll:function(e){},methods:{showuser:function(){console.log(this.user)},navTo:function(t){e.navigateTo({url:t})},navToNologin:function(t){e.navigateTo({url:t})},coverTouchstart:function(e){!1!==l&&(this.coverTransition="transform .1s linear",u=e.touches[0].clientY)},coverTouchmove:function(e){s=e.touches[0].clientY;var t=s-u;t<0?this.moving=!1:(this.moving=!0,t>=80&&t<100&&(t=80),t>0&&t<=80&&(this.coverTransform="translateY(".concat(t,"px)")))},coverTouchend:function(){!1!==this.moving&&(this.moving=!1,this.coverTransition="transform 0.3s cubic-bezier(.21,1.93,.53,.64)",this.coverTransform="translateY(0px)",console.log("触底了 刷新数据"))}}};t.default=f}).call(this,n("543d")["default"])},e867:function(e,t,n){"use strict";n.r(t);var r=n("baef"),o=n.n(r);for(var c in r)"default"!==c&&function(e){n.d(t,e,(function(){return r[e]}))}(c);t["default"]=o.a}},[["0c46","common/runtime","common/vendor"]]]);