(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/address"],{"03d1":function(e,n,t){"use strict";var a;t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return r})),t.d(n,"a",(function(){return a}));var o=function(){var e=this,n=e.$createElement;e._self._c},r=[]},"23fc":function(e,n,t){"use strict";var a=t("7966"),o=t.n(a);o.a},7966:function(e,n,t){},"7ba9":function(e,n,t){"use strict";t.r(n);var a=t("ae74"),o=t.n(a);for(var r in a)"default"!==r&&function(e){t.d(n,e,(function(){return a[e]}))}(r);n["default"]=o.a},"9e10":function(e,n,t){"use strict";t.r(n);var a=t("03d1"),o=t("7ba9");for(var r in o)"default"!==r&&function(e){t.d(n,e,(function(){return o[e]}))}(r);t("23fc");var s,u=t("f0c5"),c=Object(u["a"])(o["default"],a["b"],a["c"],!1,null,"4fb36eea",null,!1,a["a"],s);n["default"]=c.exports},ae74:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={data:function(){return{source:0,addressList:[{name:"刘晓晓",mobile:"18666666666",addressName:"贵族皇仕牛排(东城店)",address:"北京市东城区",area:"B区",default:!0},{name:"刘大大",mobile:"18667766666",addressName:"龙回1区12号楼",address:"山东省济南市历城区",area:"西单元302",default:!1}]}},onLoad:function(e){console.log(e.source),this.source=e.source},methods:{checkAddress:function(e){console.log(e)},addAddress:function(n,t){console.log(n,t),e.navigateTo({url:"/pages/my/address-manager?type=".concat(n,"&data=").concat(JSON.stringify(t))})},refreshList:function(e,n){this.addressList.unshift(e),console.log(e,n)}}};n.default=t}).call(this,t("543d")["default"])},d5d8:function(e,n,t){"use strict";(function(e){t("de04");a(t("66fd"));var n=a(t("9e10"));function a(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])}},[["d5d8","common/runtime","common/vendor"]]]);