(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["colorui/components/cu-custom"],{"3af3":function(t,a,n){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={data:function(){return{StatusBar:this.StatusBar,CustomBar:this.CustomBar}},name:"cu-custom",computed:{style:function(){var t=this.StatusBar,a=this.CustomBar,n=this.bgImage,u="height:".concat(a,"px;padding-top:").concat(t,"px;");return this.bgImage&&(u="".concat(u,"background-image:url(").concat(n,");")),u}},props:{bgColor:{type:String,default:""},isBack:{type:[Boolean,String],default:!1},isMenu:{type:[Boolean,String],default:!1},bgImage:{type:String,default:""}},methods:{BackPage:function(){t.navigateBack({delta:1})}}};a.default=n}).call(this,n("543d")["default"])},"4c74":function(t,a,n){"use strict";var u;n.d(a,"b",(function(){return e})),n.d(a,"c",(function(){return c})),n.d(a,"a",(function(){return u}));var e=function(){var t=this,a=t.$createElement;t._self._c},c=[]},a538:function(t,a,n){"use strict";n.r(a);var u=n("4c74"),e=n("fcb8");for(var c in e)"default"!==c&&function(t){n.d(a,t,(function(){return e[t]}))}(c);var r,o=n("f0c5"),i=Object(o["a"])(e["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],r);a["default"]=i.exports},fcb8:function(t,a,n){"use strict";n.r(a);var u=n("3af3"),e=n.n(u);for(var c in u)"default"!==c&&function(t){n.d(a,t,(function(){return u[t]}))}(c);a["default"]=e.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'colorui/components/cu-custom-create-component',
    {
        'colorui/components/cu-custom-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("a538"))
        })
    },
    [['colorui/components/cu-custom-create-component']]
]);
