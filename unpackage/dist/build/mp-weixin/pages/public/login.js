(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/public/login"],{"10dd":function(e,t,n){},"303e":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n("a34a")),a=n("2f62");function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n,o,a,i,r){try{var u=e[i](r),s=u.value}catch(c){return void n(c)}u.done?t(s):Promise.resolve(s).then(o,a)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(o,a){var i=e.apply(t,n);function u(e){r(i,o,a,u,s,"next",e)}function s(e){r(i,o,a,u,s,"throw",e)}u(void 0)}))}}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f={data:function(){return{username:"",password:"",isModal:!1,modalTitle:"",auth_userinfo:{},auth_type:"wx_auth"}},onLoad:function(){this.hasLogin&&e.navigateBack()},computed:c({},(0,a.mapState)(["hasLogin","user"])),methods:c(c({},(0,a.mapMutations)(["authLogin"])),{},{Input:function(e,t){this[e]=t.detail.value},navBack:function(){e.navigateBack()},getuserinfo:function(){e.login({success:function(e){if(e.code){e.code;wx.getUserInfo({success:function(e){console.log(e)},fail:function(e){}})}}})},toLogin:function(){var t=this;return u(o.default.mark((function n(){var a;return o.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.showModal({content:"账号登录维护。"}),n.abrupt("return");case 3:if(e.showLoading({title:"登陆中...",mask:!0}),""!=t.username&&""!=t.password){n.next=8;break}return e.showModal({content:"学号和密码不能为空。"}),e.hideLoading(),n.abrupt("return");case 8:a={username:t.username,password:t.password,type:"password"},t.auth_login(a);case 10:case"end":return n.stop()}}),n)})))()},login_qq:function(){var t=this;e.showLoading({title:"登陆中...",mask:!0}),this.auth_type="qq_auth",e.getProvider({service:"oauth",success:function(n){console.log(n.provider),~n.provider.indexOf("qq")&&e.login({provider:"qq",success:function(n){console.log(JSON.stringify(n)),e.getUserInfo({provider:"qq",success:function(){var a=u(o.default.mark((function a(i){var r,u;return o.default.wrap((function(o){while(1)switch(o.prev=o.next){case 0:if(n.code){o.next=4;break}return e.showModal({content:"授权码错误。"}),e.hideLoading(),o.abrupt("return");case 4:return o.next=6,t.$request({method:"/api/auth_qq",data:{js_code:n.code,infoRes:i.userInfo}});case 6:r=o.sent,t.auth_userinfo=r.data,t.auth_userinfo.userid>0?(u={openid:t.auth_userinfo.openid,type:t.auth_type,method:"login"},t.auth_login(u)):(t.isModal=!0,e.hideLoading());case 9:case"end":return o.stop()}}),a)})));function i(e){return a.apply(this,arguments)}return i}(),fail:function(n){console.log(n),t.$request({method:"/api/test/logsave",data:{"uni.getuserinfo.fail qq":n}}),e.showModal({content:"获取信息未知错误。"}),e.hideLoading()}})},fail:function(n){console.log(n),t.$request({method:"/api/test/logsave",data:{"uni.login.fail qq":n}}),e.showModal({content:"授权未知错误。"}),e.hideLoading()}})}})},login_weixin:function(){var t=this;e.showLoading({title:"登陆中...",mask:!0}),this.auth_type="qq_auth",e.login({provider:"weixin",success:function(n){e.getUserInfo({provider:"weixin",success:function(){var a=u(o.default.mark((function a(i){var r,u;return o.default.wrap((function(o){while(1)switch(o.prev=o.next){case 0:if(n.code){o.next=4;break}return e.showModal({content:"授权码错误。"}),e.hideLoading(),o.abrupt("return");case 4:return o.next=6,t.$request({method:"/api/auth_wx",data:{js_code:n.code,infoRes:i.userInfo}});case 6:r=o.sent,t.auth_userinfo=r.data,t.auth_userinfo.userid>0?(u={openid:t.auth_userinfo.openid,type:t.auth_type,method:"login"},t.auth_login(u)):(t.isModal=!0,e.hideLoading());case 9:case"end":return o.stop()}}),a)})));function i(e){return a.apply(this,arguments)}return i}(),fail:function(n){console.log(n),t.$request({method:"/api/test/logsave",data:{"uni.getuserinfo.fail wx":n}}),e.showModal({content:"获取信息未知错误。"}),e.hideLoading()}})},fail:function(n){console.log(n),t.$request({method:"/api/test/logsave",data:{"uni.login.fail wx":n}}),e.showModal({content:"授权登录未知错误。"}),e.hideLoading()}})},auth_regin:function(){e.showLoading({title:"登陆中...",mask:!0});var t={username:this.username,password:this.password,openid:this.auth_userinfo.openid,type:this.auth_type,method:"regin"};this.auth_login(t)},auth_bind:function(){e.showLoading({title:"登陆中...",mask:!0});var t={username:this.username,password:this.password,openid:this.auth_userinfo.openid,type:this.auth_type,method:"bind"};this.auth_login(t)},auth_login:function(t){var n=this;return u(o.default.mark((function a(){var i;return o.default.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.next=2,n.$request({method:"/api/login",data:t});case 2:i=o.sent,1e4==i.code?(n.authLogin(i.data),e.reLaunch({url:"/pages/index/index"})):n.$api.msg(i.msg||"未知登录错误"),e.hideLoading();case 5:case"end":return o.stop()}}),a)})))()}})};t.default=f}).call(this,n("543d")["default"])},b45c:function(e,t,n){"use strict";n.r(t);var o=n("fa10"),a=n("b64e");for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);n("ee21");var r,u=n("f0c5"),s=Object(u["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],r);t["default"]=s.exports},b64e:function(e,t,n){"use strict";n.r(t);var o=n("303e"),a=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);t["default"]=a.a},cae4:function(e,t,n){"use strict";(function(e){n("7aad");o(n("66fd"));var t=o(n("b45c"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},ee21:function(e,t,n){"use strict";var o=n("10dd"),a=n.n(o);a.a},fa10:function(e,t,n){"use strict";var o;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return o}));var a=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){e.isModal=!1},e.e1=function(t){e.isModal=!1})},i=[]}},[["cae4","common/runtime","common/vendor"]]]);