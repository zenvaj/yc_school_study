(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/friend"],{"0962":function(t,i,e){"use strict";(function(t){e("7aad");n(e("66fd"));var i=n(e("ee3d"));function n(t){return t&&t.__esModule?t:{default:t}}t(i.default)}).call(this,e("a821")["createPage"])},2680:function(t,i,e){"use strict";var n=e("9b7f"),a=e.n(n);a.a},8435:function(t,i,e){"use strict";e.r(i);var n=e("f5c2"),a=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(i,t,(function(){return n[t]}))}(r);i["default"]=a.a},"9b7f":function(t,i,e){},ee3d:function(t,i,e){"use strict";e.r(i);var n=e("f805"),a=e("8435");for(var r in a)"default"!==r&&function(t){e.d(i,t,(function(){return a[t]}))}(r);e("2680");var o,u=e("f0c5"),s=Object(u["a"])(a["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],o);i["default"]=s.exports},f5c2:function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={data:function(){return{topBar:0,list:[],tabCur:0,mainCur:0,verticalNavTop:0,load:!0}},onLoad:function(){console.log(this.topBar),t.showLoading({title:"加载中...",mask:!0});for(var i=[{}],e=0;e<26;e++)i[e]={},i[e].name=String.fromCharCode(65+e),i[e].id=e;this.list=i,this.listCur=i[0]},onReady:function(){t.hideLoading()},methods:{TabSelect:function(t){this.tabCur=t.currentTarget.dataset.id,this.mainCur=t.currentTarget.dataset.id,this.verticalNavTop=50*(t.currentTarget.dataset.id-1)},VerticalMain:function(i){var e=this,n=0;if(this.load){for(var a=function(i){var a=t.createSelectorQuery().select("#main-"+e.list[i].id);a.fields({size:!0},(function(t){e.list[i].top=n,n+=t.height,e.list[i].bottom=n})).exec()},r=0;r<this.list.length;r++)a(r);this.load=!1}for(var o=i.detail.scrollTop+10,u=0;u<this.list.length;u++)if(o>this.list[u].top&&o<this.list[u].bottom)return this.verticalNavTop=50*(this.list[u].id-1),this.tabCur=this.list[u].id,!1}}};i.default=e}).call(this,e("a821")["default"])},f805:function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return r})),e.d(i,"a",(function(){return n}));var a=function(){var t=this,i=t.$createElement;t._self._c},r=[]}},[["0962","common/runtime","common/vendor"]]]);