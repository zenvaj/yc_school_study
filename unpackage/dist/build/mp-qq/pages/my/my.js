(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/my"],{"2a8b":function(e,t,n){"use strict";n.r(t);var r=n("7071"),o=n("69aa");for(var c in o)"default"!==c&&function(e){n.d(t,e,(function(){return o[e]}))}(c);n("5d88");var i,a=n("f0c5"),u=Object(a["a"])(o["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],i);t["default"]=u.exports},"5d88":function(e,t,n){"use strict";var r=n("aacf"),o=n.n(r);o.a},"69aa":function(e,t,n){"use strict";n.r(t);var r=n("cd49"),o=n.n(r);for(var c in r)"default"!==c&&function(e){n.d(t,e,(function(){return r[e]}))}(c);t["default"]=o.a},7071:function(e,t,n){"use strict";var r;n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return r}));var o=function(){var e=this,t=e.$createElement;e._self._c},c=[]},"99f2":function(e,t,n){"use strict";(function(e){n("de04");r(n("66fd"));var t=r(n("2a8b"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("a821")["createPage"])},aacf:function(e,t,n){},cd49:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("2f62");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=function(){n.e("components/mix-list-cell").then(function(){return resolve(n("c7d2"))}.bind(null,n)).catch(n.oe)},u=0,s=0,f=!0,l={components:{listCell:a},data:function(){return{coverTransform:"translateY(0px)",coverTransition:"0s",moving:!1,headerpic:"/static/missing-face.png",username:"未登录"}},onLoad:function(){console.log(this.user),this.hasLogin||e.navigateTo({url:"/pages/public/login"});try{this.headerpic=this.user.mpuser.headerpic||"/static/missing-face.png",this.username=this.user.real_name||this.user.mpuser.nickname||"未登录"}catch(t){}},computed:c({},(0,r.mapState)(["hasLogin","user"])),onPageScroll:function(e){},methods:{showuser:function(){console.log(this.user)},navTo:function(t){e.navigateTo({url:t})},navToNologin:function(t){e.navigateTo({url:t})},coverTouchstart:function(e){!1!==f&&(this.coverTransition="transform .1s linear",u=e.touches[0].clientY)},coverTouchmove:function(e){s=e.touches[0].clientY;var t=s-u;t<0?this.moving=!1:(this.moving=!0,t>=80&&t<100&&(t=80),t>0&&t<=80&&(this.coverTransform="translateY(".concat(t,"px)")))},coverTouchend:function(){!1!==this.moving&&(this.moving=!1,this.coverTransition="transform 0.3s cubic-bezier(.21,1.93,.53,.64)",this.coverTransform="translateY(0px)",console.log("触底了 刷新数据"))}}};t.default=l}).call(this,n("a821")["default"])}},[["99f2","common/runtime","common/vendor"]]]);