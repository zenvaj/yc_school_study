(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/group/group"],{"1a30":function(s,i,e){"use strict";(function(s){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=function(){e.e("components/list/list-card-group").then(function(){return resolve(e("4050"))}.bind(null,e)).catch(e.oe)},t={data:function(){return{userInfo:{headpic:"https://ossweb-img.qq.com/images/lol/web201310/skin/big10004.jpg"},newsList:[{id:1,imgurl:["https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg"],mark:"史诗",title:"1我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。",headpic:"https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",nickname:"1正义天使 凯尔",time:"十天前",num:{view:1999999,up:155,comment:41}},{id:2,imgurl:["https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg","https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg","https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg"],mark:"神话",title:"2我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。",headpic:"https://ossweb-img.qq.com/images/lol/web201310/skin/big10005.jpg",nickname:"3正义天使 凯尔",time:"十一天前",num:{view:1999999,up:155,comment:41}},{id:3,imgurl:["https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg","https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg","https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg","https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg","https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg","https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg"],mark:"神仙打架",title:"3我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。",headpic:"https://ossweb-img.qq.com/images/lol/web201310/skin/big10004.jpg",nickname:"2正义天使 凯尔",time:"十二天前",num:{view:19999,up:155,comment:41}},{id:4,imgurl:["https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg","https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg","https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg","https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg","https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg","https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg","https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg","https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg","https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg"],mark:"神仙打架",title:"3我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。",headpic:"https://ossweb-img.qq.com/images/lol/web201310/skin/big10004.jpg",nickname:"2正义天使 凯尔",time:"十二天前",num:{view:19999,up:155,comment:41}},{id:5,imgurl:["https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg","https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg","https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg","https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg","https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg","https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg","https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg","https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg","https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg","https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg","https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg","https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg"],mark:"神仙打架",title:"3我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。",headpic:"https://ossweb-img.qq.com/images/lol/web201310/skin/big10004.jpg",nickname:"2正义天使 凯尔",time:"十二天前",num:{view:19999,up:155,comment:41}}],isFresh:!0,StatusBar:this.StatusBar,CustomBar:this.CustomBar,isPad:!1}},components:{listCardGroup:o},onLoad:function(){console.log(this.StatusBar,this.CustomBar,JSON.stringify(this.Custom))},methods:{cardDetail:function(i,e){console.log("cardDetail",i,e),s.navigateTo({url:"/pages/public/card-detail?id="+i})},groupSelf:function(){console.log("进入自己的朋友圈"),s.navigateTo({url:"/pages/group/center"})},goTop:function(){console.log("划到开始未知"),s.pageScrollTo({scrollTop:0,duration:300})}},onPullDownRefresh:function(){this.isFresh=!1,console.log("refresh"),setTimeout((function(){s.stopPullDownRefresh(),this.isFresh=!0,console.log(this.isFresh)}),1e3)},onReachBottom:function(){console.log("onReachBottom"),setTimeout((function(){s.stopPullDownRefresh()}),1e3)}};i.default=t}).call(this,e("a821")["default"])},3583:function(s,i,e){"use strict";var o;e.d(i,"b",(function(){return t})),e.d(i,"c",(function(){return g})),e.d(i,"a",(function(){return o}));var t=function(){var s=this,i=s.$createElement;s._self._c},g=[]},"4e4f":function(s,i,e){"use strict";e.r(i);var o=e("3583"),t=e("a597");for(var g in t)"default"!==g&&function(s){e.d(i,s,(function(){return t[s]}))}(g);var m,n=e("f0c5"),l=Object(n["a"])(t["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],m);i["default"]=l.exports},a11b:function(s,i,e){"use strict";(function(s){e("7aad");o(e("66fd"));var i=o(e("4e4f"));function o(s){return s&&s.__esModule?s:{default:s}}s(i.default)}).call(this,e("a821")["createPage"])},a597:function(s,i,e){"use strict";e.r(i);var o=e("1a30"),t=e.n(o);for(var g in o)"default"!==g&&function(s){e.d(i,s,(function(){return o[s]}))}(g);i["default"]=t.a}},[["a11b","common/runtime","common/vendor"]]]);