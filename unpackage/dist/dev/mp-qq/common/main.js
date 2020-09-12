(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/main"],[
/* 0 */
/*!*********************************************************!*\
  !*** D:/工作/code/yc_shool_study/yc_school_study/main.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, createApp) {__webpack_require__(/*! uni-pages */ 4);var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _store = _interopRequireDefault(__webpack_require__(/*! ./store */ 5));
var _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 7));


var _Json = _interopRequireDefault(__webpack_require__(/*! ./Json */ 13));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} //测试用数据
/**
 *  因工具函数属于公司资产, 所以直接在Vue实例挂载几个常用的函数
 *  所有测试用数据均存放于根目录json.js
 *  
 *  css部分使用了App.vue下的全局样式和iconfont图标，有需要图标库的可以留言。
 *  示例使用了uni.scss下的变量, 除变量外已尽量移除特有语法,可直接替换为其他预处理器使用
 */
var msg = function msg(title) {var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1500;var mask = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;var icon = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'none';
  //统一提示方便全局修改
  if (Boolean(title) === false) {
    return;
  }
  uni.showToast({
    title: title,
    duration: duration,
    mask: mask,
    icon: icon });

};
var json = function json(type) {
  //模拟异步请求数据
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(_Json.default[type]);
    }, 500);
  });
};
var prePage = function prePage() {
  var pages = getCurrentPages();
  var prePage = pages[pages.length - 2];



  return prePage.$vm;
};var cuCustom = function cuCustom() {__webpack_require__.e(/*! require.ensure | colorui/components/cu-custom */ "colorui/components/cu-custom").then((function () {return resolve(__webpack_require__(/*! ./colorui/components/cu-custom.vue */ 290));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};


_vue.default.component('cu-custom', cuCustom);

_vue.default.config.productionTip = false;
_vue.default.prototype.$fire = new _vue.default();
_vue.default.prototype.$store = _store.default;
_vue.default.prototype.$api = { msg: msg, json: json, prePage: prePage };

_App.default.mpType = 'app';

var app = new _vue.default(_objectSpread({},
_App.default));

createApp(app).$mount();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-qq/dist/index.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-qq/dist/index.js */ 1)["createApp"]))

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/*!*********************************************************!*\
  !*** D:/工作/code/yc_shool_study/yc_school_study/App.vue ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 8);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=scss& */ 10);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);
var render, staticRenderFns, recyclableRender, components
var renderjs





/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null,
  false,
  components,
  renderjs
)

component.options.__file = "App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 8 */
/*!**********************************************************************************!*\
  !*** D:/工作/code/yc_shool_study/yc_school_study/App.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./App.vue?vue&type=script&lang=js& */ 9);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 9 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/工作/code/yc_shool_study/yc_school_study/App.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =
{
  onLaunch: function onLaunch() {
    uni.getSystemInfo({
      success: function success(e) {
        //Vue.prototype.windowWidth = e.windowWidth;
















        _vue.default.prototype.StatusBar = e.statusBarHeight;
        var custom = uni.getMenuButtonBoundingClientRect();
        _vue.default.prototype.Custom = custom;
        _vue.default.prototype.CustomBar = custom.bottom + custom.top - e.statusBarHeight;






      } });


    _vue.default.prototype.ColorList = [{
      title: '嫣红',
      name: 'red',
      color: '#e54d42' },

    {
      title: '桔橙',
      name: 'orange',
      color: '#f37b1d' },

    {
      title: '明黄',
      name: 'yellow',
      color: '#fbbd08' },

    {
      title: '橄榄',
      name: 'olive',
      color: '#8dc63f' },

    {
      title: '森绿',
      name: 'green',
      color: '#39b54a' },

    {
      title: '天青',
      name: 'cyan',
      color: '#1cbbb4' },

    {
      title: '海蓝',
      name: 'blue',
      color: '#0081ff' },

    {
      title: '姹紫',
      name: 'purple',
      color: '#6739b6' },

    {
      title: '木槿',
      name: 'mauve',
      color: '#9c26b0' },

    {
      title: '桃粉',
      name: 'pink',
      color: '#e03997' },

    {
      title: '棕褐',
      name: 'brown',
      color: '#a5673f' },

    {
      title: '玄灰',
      name: 'grey',
      color: '#8799a3' },

    {
      title: '草灰',
      name: 'gray',
      color: '#aaaaaa' },

    {
      title: '墨黑',
      name: 'black',
      color: '#333333' },

    {
      title: '雅白',
      name: 'white',
      color: '#ffffff' }];


  },
  onShow: function onShow() {
    console.log('App Show');
  },
  onHide: function onHide() {
    console.log('App Hide');
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-qq/dist/index.js */ 1)["default"]))

/***/ }),
/* 10 */
/*!*******************************************************************************************!*\
  !*** D:/工作/code/yc_shool_study/yc_school_study/App.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./App.vue?vue&type=style&index=0&lang=scss& */ 11);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 11 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/工作/code/yc_shool_study/yc_school_study/App.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })
],[[0,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsbnVsbCwid2VicGFjazovLy9EOi/lt6XkvZwvY29kZS95Y19zaG9vbF9zdHVkeS95Y19zY2hvb2xfc3R1ZHkvQXBwLnZ1ZT9jZjhkIiwidW5pLWFwcDovLy9BcHAudnVlIiwid2VicGFjazovLy9EOi/lt6XkvZwvY29kZS95Y19zaG9vbF9zdHVkeS95Y19zY2hvb2xfc3R1ZHkvQXBwLnZ1ZT9jODg2Iiwid2VicGFjazovLy9EOi/lt6XkvZwvY29kZS95Y19zaG9vbF9zdHVkeS95Y19zY2hvb2xfc3R1ZHkvQXBwLnZ1ZT9mZDMwIl0sIm5hbWVzIjpbIm1zZyIsInRpdGxlIiwiZHVyYXRpb24iLCJtYXNrIiwiaWNvbiIsIkJvb2xlYW4iLCJ1bmkiLCJzaG93VG9hc3QiLCJqc29uIiwidHlwZSIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsIkpzb24iLCJwcmVQYWdlIiwicGFnZXMiLCJnZXRDdXJyZW50UGFnZXMiLCJsZW5ndGgiLCIkdm0iLCJWdWUiLCJjb21wb25lbnQiLCJjdUN1c3RvbSIsImNvbmZpZyIsInByb2R1Y3Rpb25UaXAiLCJwcm90b3R5cGUiLCIkZmlyZSIsIiRzdG9yZSIsInN0b3JlIiwiJGFwaSIsIkFwcCIsIm1wVHlwZSIsImFwcCIsIiRtb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O3NEQUFBLHdDQUFtQjtBQUNuQjtBQUNBOzs7QUFHQSwwRSx5bkNBQTBCO0FBQzFCOzs7Ozs7O0FBT0EsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sQ0FBQ0MsS0FBRCxFQUFpRCxLQUF6Q0MsUUFBeUMsdUVBQWhDLElBQWdDLEtBQTFCQyxJQUEwQix1RUFBckIsS0FBcUIsS0FBZEMsSUFBYyx1RUFBVCxNQUFTO0FBQzVEO0FBQ0EsTUFBR0MsT0FBTyxDQUFDSixLQUFELENBQVAsS0FBbUIsS0FBdEIsRUFBNEI7QUFDM0I7QUFDQTtBQUNESyxLQUFHLENBQUNDLFNBQUosQ0FBYztBQUNiTixTQUFL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QURBO0FBRUEsbUJBRkE7QUFHQSxzQkFIQSxFQWpFQTs7QUFzRUE7QUFDQSxpQkFEQTtBQUVBLG1CQUZBO0FBR0Esc0JBSEEsRUF0RUE7OztBQTRFQSxHQTlHQTtBQStHQTtBQUNBO0FBQ0EsR0FqSEE7QUFrSEE7QUFDQTtBQUNBLEdBcEhBLEU7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBQTtBQUFBO0FBQXFtQyxDQUFnQix1akNBQUcsRUFBQyxDOzs7Ozs7Ozs7O0FDQXpuQztBQUNBLE9BQU8sS0FBVSxFQUFFLGtCQUtkIiwiZmlsZSI6ImNvbW1vbi9tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd1bmktcGFnZXMnO2ltcG9ydCBWdWUgZnJvbSAndnVlJ1xyXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSdcclxuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCdcclxuXHJcblxyXG5pbXBvcnQgSnNvbiBmcm9tICcuL0pzb24nIC8v5rWL6K+V55So5pWw5o2uXHJcbi8qKlxyXG4gKiAg5Zug5bel5YW35Ye95pWw5bGe5LqO5YWs5Y+46LWE5LqnLCDmiYDku6Xnm7TmjqXlnKhWdWXlrp7kvovmjILovb3lh6DkuKrluLjnlKjnmoTlh73mlbBcclxuICogIOaJgOaciea1i+ivleeUqOaVsOaNruWdh+WtmOaUvuS6juagueebruW9lWpzb24uanNcclxuICogIFxyXG4gKiAgY3Nz6YOo5YiG5L2/55So5LqGQXBwLnZ1ZeS4i+eahOWFqOWxgOagt+W8j+WSjGljb25mb2505Zu+5qCH77yM5pyJ6ZyA6KaB5Zu+5qCH5bqT55qE5Y+v5Lul55WZ6KiA44CCXHJcbiAqICDnpLrkvovkvb/nlKjkuoZ1bmkuc2Nzc+S4i+eahOWPmOmHjywg6Zmk5Y+Y6YeP5aSW5bey5bC96YeP56e76Zmk54m55pyJ6K+t5rOVLOWPr+ebtOaOpeabv+aNouS4uuWFtuS7lumihOWkhOeQhuWZqOS9v+eUqFxyXG4gKi9cclxuY29uc3QgbXNnID0gKHRpdGxlLCBkdXJhdGlvbj0xNTAwLCBtYXNrPWZhbHNlLCBpY29uPSdub25lJyk9PntcclxuXHQvL+e7n+S4gOaPkOekuuaWueS+v+WFqOWxgOS/ruaUuVxyXG5cdGlmKEJvb2xlYW4odGl0bGUpID09PSBmYWxzZSl7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0dGl0bGUsXHJcblx0XHRkdXJhdGlvbixcclxuXHRcdG1hc2ssXHJcblx0XHRpY29uXHJcblx0fSk7XHJcbn1cclxuY29uc3QganNvbiA9IHR5cGU9PntcclxuXHQvL+aooeaLn+W8guatpeivt+axguaVsOaNrlxyXG5cdHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlPT57XHJcblx0XHRzZXRUaW1lb3V0KCgpPT57XHJcblx0XHRcdHJlc29sdmUoSnNvblt0eXBlXSk7XHJcblx0XHR9LCA1MDApXHJcblx0fSlcclxufVxyXG5jb25zdCBwcmVQYWdlID0gKCk9PntcclxuXHRsZXQgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcclxuXHRsZXQgcHJlUGFnZSA9IHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDJdO1xyXG5cclxuXHJcblxyXG5cdHJldHVybiBwcmVQYWdlLiR2bTtcclxufVxyXG5cclxuaW1wb3J0IGN1Q3VzdG9tIGZyb20gJy4vY29sb3J1aS9jb21wb25lbnRzL2N1LWN1c3RvbS52dWUnXHJcblZ1ZS5jb21wb25lbnQoJ2N1LWN1c3RvbScsY3VDdXN0b20pXHJcblxyXG5WdWUuY29uZmlnLnByb2R1Y3Rpb25UaXAgPSBmYWxzZVxyXG5WdWUucHJvdG90eXBlLiRmaXJlID0gbmV3IFZ1ZSgpO1xyXG5WdWUucHJvdG90eXBlLiRzdG9yZSA9IHN0b3JlO1xyXG5WdWUucHJvdG90eXBlLiRhcGkgPSB7bXNnLCBqc29uLCBwcmVQYWdlfTtcclxuXHJcbkFwcC5tcFR5cGUgPSAnYXBwJ1xyXG5cclxuY29uc3QgYXBwID0gbmV3IFZ1ZSh7XHJcbiAgICAuLi5BcHBcclxufSlcclxuYXBwLiRtb3VudCgpIiwidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkFwcC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTItMSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjxzY3JpcHQ+XHJcblx0aW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0b25MYXVuY2g6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR1bmkuZ2V0U3lzdGVtSW5mbyh7XHJcblx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdFx0Ly9WdWUucHJvdG90eXBlLndpbmRvd1dpZHRoID0gZS53aW5kb3dXaWR0aDtcclxuXHRcdFx0XHRcdC8vICNpZm5kZWYgTVBcclxuXHRcdFx0XHRcdFZ1ZS5wcm90b3R5cGUuU3RhdHVzQmFyID0gZS5zdGF0dXNCYXJIZWlnaHQ7XHJcblx0XHRcdFx0XHRpZiAoZS5wbGF0Zm9ybSA9PSAnYW5kcm9pZCcpIHtcclxuXHRcdFx0XHRcdFx0VnVlLnByb3RvdHlwZS5DdXN0b21CYXIgPSBlLnN0YXR1c0JhckhlaWdodCArIDUwO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0VnVlLnByb3RvdHlwZS5DdXN0b21CYXIgPSBlLnN0YXR1c0JhckhlaWdodCArIDQ1O1xyXG5cdFx0XHRcdFx0fTtcclxuXHRcdFx0XHRcdC8vICNlbmRpZlxyXG5cclxuXHRcdFx0XHRcdC8vICNpZmRlZiBNUC1XRUlYSU5cclxuXHRcdFx0XHRcdFZ1ZS5wcm90b3R5cGUuU3RhdHVzQmFyID0gZS5zdGF0dXNCYXJIZWlnaHQ7XHJcblx0XHRcdFx0XHRsZXQgY3VzdG9tID0gdW5pLmdldE1lbnVCdXR0b25Cb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdFx0XHRcdFZ1ZS5wcm90b3R5cGUuQ3VzdG9tID0gY3VzdG9tO1xyXG5cdFx0XHRcdFx0VnVlLnByb3RvdHlwZS5DdXN0b21CYXIgPSBjdXN0b20uYm90dG9tICsgY3VzdG9tLnRvcCAtIGUuc3RhdHVzQmFySGVpZ2h0O1xyXG5cdFx0XHRcdFx0Ly8gI2VuZGlmXHRcdFxyXG5cdFx0XHRcdFx0Ly8gI2lmZGVmIE1QLVFRXHJcblx0XHRcdFx0XHRWdWUucHJvdG90eXBlLlN0YXR1c0JhciA9IGUuc3RhdHVzQmFySGVpZ2h0O1xyXG5cdFx0XHRcdFx0bGV0IGN1c3RvbSA9IHVuaS5nZXRNZW51QnV0dG9uQm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHRcdFx0XHRWdWUucHJvdG90eXBlLkN1c3RvbSA9IGN1c3RvbTtcclxuXHRcdFx0XHRcdFZ1ZS5wcm90b3R5cGUuQ3VzdG9tQmFyID0gY3VzdG9tLmJvdHRvbSArIGN1c3RvbS50b3AgLSBlLnN0YXR1c0JhckhlaWdodDtcclxuXHRcdFx0XHRcdC8vICNlbmRpZlx0XHRcclxuXHJcblx0XHRcdFx0XHQvLyAjaWZkZWYgTVAtQUxJUEFZXHJcblx0XHRcdFx0XHRWdWUucHJvdG90eXBlLlN0YXR1c0JhciA9IGUuc3RhdHVzQmFySGVpZ2h0O1xyXG5cdFx0XHRcdFx0VnVlLnByb3RvdHlwZS5DdXN0b21CYXIgPSBlLnN0YXR1c0JhckhlaWdodCArIGUudGl0bGVCYXJIZWlnaHQ7XHJcblx0XHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHRcdFxyXG5cdFx0XHRWdWUucHJvdG90eXBlLkNvbG9yTGlzdCA9IFt7XHJcblx0XHRcdFx0XHR0aXRsZTogJ+Wro+e6oicsXHJcblx0XHRcdFx0XHRuYW1lOiAncmVkJyxcclxuXHRcdFx0XHRcdGNvbG9yOiAnI2U1NGQ0MidcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRpdGxlOiAn5qGU5qmZJyxcclxuXHRcdFx0XHRcdG5hbWU6ICdvcmFuZ2UnLFxyXG5cdFx0XHRcdFx0Y29sb3I6ICcjZjM3YjFkJ1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGl0bGU6ICfmmI7pu4QnLFxyXG5cdFx0XHRcdFx0bmFtZTogJ3llbGxvdycsXHJcblx0XHRcdFx0XHRjb2xvcjogJyNmYmJkMDgnXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0aXRsZTogJ+aphOamhCcsXHJcblx0XHRcdFx0XHRuYW1lOiAnb2xpdmUnLFxyXG5cdFx0XHRcdFx0Y29sb3I6ICcjOGRjNjNmJ1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGl0bGU6ICfmo67nu78nLFxyXG5cdFx0XHRcdFx0bmFtZTogJ2dyZWVuJyxcclxuXHRcdFx0XHRcdGNvbG9yOiAnIzM5YjU0YSdcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRpdGxlOiAn5aSp6Z2SJyxcclxuXHRcdFx0XHRcdG5hbWU6ICdjeWFuJyxcclxuXHRcdFx0XHRcdGNvbG9yOiAnIzFjYmJiNCdcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRpdGxlOiAn5rW36JOdJyxcclxuXHRcdFx0XHRcdG5hbWU6ICdibHVlJyxcclxuXHRcdFx0XHRcdGNvbG9yOiAnIzAwODFmZidcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRpdGxlOiAn5ae557SrJyxcclxuXHRcdFx0XHRcdG5hbWU6ICdwdXJwbGUnLFxyXG5cdFx0XHRcdFx0Y29sb3I6ICcjNjczOWI2J1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGl0bGU6ICfmnKjmp78nLFxyXG5cdFx0XHRcdFx0bmFtZTogJ21hdXZlJyxcclxuXHRcdFx0XHRcdGNvbG9yOiAnIzljMjZiMCdcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRpdGxlOiAn5qGD57KJJyxcclxuXHRcdFx0XHRcdG5hbWU6ICdwaW5rJyxcclxuXHRcdFx0XHRcdGNvbG9yOiAnI2UwMzk5NydcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRpdGxlOiAn5qOV6KSQJyxcclxuXHRcdFx0XHRcdG5hbWU6ICdicm93bicsXHJcblx0XHRcdFx0XHRjb2xvcjogJyNhNTY3M2YnXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0aXRsZTogJ+eOhOeBsCcsXHJcblx0XHRcdFx0XHRuYW1lOiAnZ3JleScsXHJcblx0XHRcdFx0XHRjb2xvcjogJyM4Nzk5YTMnXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0aXRsZTogJ+iNieeBsCcsXHJcblx0XHRcdFx0XHRuYW1lOiAnZ3JheScsXHJcblx0XHRcdFx0XHRjb2xvcjogJyNhYWFhYWEnXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0aXRsZTogJ+WiqOm7kScsXHJcblx0XHRcdFx0XHRuYW1lOiAnYmxhY2snLFxyXG5cdFx0XHRcdFx0Y29sb3I6ICcjMzMzMzMzJ1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGl0bGU6ICfpm4Xnmb0nLFxyXG5cdFx0XHRcdFx0bmFtZTogJ3doaXRlJyxcclxuXHRcdFx0XHRcdGNvbG9yOiAnI2ZmZmZmZidcclxuXHRcdFx0XHR9XVxyXG5cdFx0XHRcclxuXHRcdH0sXHJcblx0XHRvblNob3c6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnQXBwIFNob3cnKVxyXG5cdFx0fSxcclxuXHRcdG9uSGlkZTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdBcHAgSGlkZScpXHJcblx0XHR9XHJcblxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cclxuXHRAaW1wb3J0IFwiY29sb3J1aS9tYWluLmNzc1wiO1xyXG5cdEBpbXBvcnQgXCJjb2xvcnVpL2ljb24uY3NzXCI7XHJcblxyXG5cdC5uYXYtbGlzdCB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdFx0cGFkZGluZzogMHB4IDQwdXB4IDBweDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHR9XHJcblxyXG5cdC5uYXYtbGkge1xyXG5cdFx0cGFkZGluZzogMzB1cHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxMnVweDtcclxuXHRcdHdpZHRoOiA0NSU7XHJcblx0XHRtYXJnaW46IDAgMi41JSA0MHVweDtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2Nkbi5ubGFyay5jb20veXVxdWUvMC8yMDE5L3BuZy8yODAzNzQvMTU1Mjk5NjM1ODM1Mi1hc3NldHMvd2ViLXVwbG9hZC9jYzNiMTgwNy1jNjg0LTRiODMtOGY4MC04MGU1YjhhNmI5NzUucG5nKTtcclxuXHRcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHR6LWluZGV4OiAxO1xyXG5cdH1cclxuXHJcblx0Lm5hdi1saTo6YWZ0ZXIge1xyXG5cdFx0Y29udGVudDogXCJcIjtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHotaW5kZXg6IC0xO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdGJvdHRvbTogLTEwJTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDEwdXB4O1xyXG5cdFx0b3BhY2l0eTogMC4yO1xyXG5cdFx0dHJhbnNmb3JtOiBzY2FsZSgwLjksIDAuOSk7XHJcblx0fVxyXG5cclxuXHQubmF2LWxpLmN1ciB7XHJcblx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdGJhY2tncm91bmQ6IHJnYig5NCwgMTg1LCA5NCk7XHJcblx0XHRib3gtc2hhZG93OiA0dXB4IDR1cHggNnVweCByZ2JhKDk0LCAxODUsIDk0LCAwLjQpO1xyXG5cdH1cclxuXHJcblx0Lm5hdi10aXRsZSB7XHJcblx0XHRmb250LXNpemU6IDMydXB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDMwMDtcclxuXHR9XHJcblxyXG5cdC5uYXYtdGl0bGU6OmZpcnN0LWxldHRlciB7XHJcblx0XHRmb250LXNpemU6IDQwdXB4O1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiA0dXB4O1xyXG5cdH1cclxuXHJcblx0Lm5hdi1uYW1lIHtcclxuXHRcdGZvbnQtc2l6ZTogMjh1cHg7XHJcblx0XHR0ZXh0LXRyYW5zZm9ybTogQ2FwaXRhbGl6ZTtcclxuXHRcdG1hcmdpbi10b3A6IDIwdXB4O1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdH1cclxuXHJcblx0Lm5hdi1uYW1lOjpiZWZvcmUge1xyXG5cdFx0Y29udGVudDogXCJcIjtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0d2lkdGg6IDQwdXB4O1xyXG5cdFx0aGVpZ2h0OiA2dXB4O1xyXG5cdFx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRcdGJvdHRvbTogMDtcclxuXHRcdHJpZ2h0OiAwO1xyXG5cdFx0b3BhY2l0eTogMC41O1xyXG5cdH1cclxuXHJcblx0Lm5hdi1uYW1lOjphZnRlciB7XHJcblx0XHRjb250ZW50OiBcIlwiO1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHR3aWR0aDogMTAwdXB4O1xyXG5cdFx0aGVpZ2h0OiAxcHg7XHJcblx0XHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdFx0Ym90dG9tOiAwO1xyXG5cdFx0cmlnaHQ6IDQwdXB4O1xyXG5cdFx0b3BhY2l0eTogMC4zO1xyXG5cdH1cclxuXHJcblx0Lm5hdi1uYW1lOjpmaXJzdC1sZXR0ZXIge1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHRmb250LXNpemU6IDM2dXB4O1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAxcHg7XHJcblx0fVxyXG5cclxuXHQubmF2LWxpIHRleHQge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0cmlnaHQ6IDMwdXB4O1xyXG5cdFx0dG9wOiAzMHVweDtcclxuXHRcdGZvbnQtc2l6ZTogNTJ1cHg7XHJcblx0XHR3aWR0aDogNjB1cHg7XHJcblx0XHRoZWlnaHQ6IDYwdXB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0bGluZS1oZWlnaHQ6IDYwdXB4O1xyXG5cdH1cclxuXHJcblx0LnRleHQtbGlnaHQge1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDMwMDtcclxuXHR9XHJcblxyXG5cdEBrZXlmcmFtZXMgc2hvdyB7XHJcblx0XHQwJSB7XHJcblx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTBweCk7XHJcblx0XHR9XHJcblxyXG5cdFx0NjAlIHtcclxuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDQwdXB4KTtcclxuXHRcdH1cclxuXHJcblx0XHQxMDAlIHtcclxuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRALXdlYmtpdC1rZXlmcmFtZXMgc2hvdyB7XHJcblx0XHQwJSB7XHJcblx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTBweCk7XHJcblx0XHR9XHJcblxyXG5cdFx0NjAlIHtcclxuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDQwdXB4KTtcclxuXHRcdH1cclxuXHJcblx0XHQxMDAlIHtcclxuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcblx0XHR9XHJcblx0fVxyXG48L3N0eWxlPlxyXG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTgtb25lT2YtMS0wIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0zIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtb25lT2YtMS00IS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtNSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTgtb25lT2YtMS0wIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0zIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtb25lT2YtMS00IS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtNSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTU5OTg2ODE2NjQyOVxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCJEOi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImhtclwiOnRydWUsXCJwdWJsaWNQYXRoXCI6XCIuLi8uLi9cIixcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0=