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
};var cuCustom = function cuCustom() {__webpack_require__.e(/*! require.ensure | colorui/components/cu-custom */ "colorui/components/cu-custom").then((function () {return resolve(__webpack_require__(/*! ./colorui/components/cu-custom.vue */ 138));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsbnVsbCwid2VicGFjazovLy9EOi/lt6XkvZwvY29kZS95Y19zaG9vbF9zdHVkeS95Y19zY2hvb2xfc3R1ZHkvQXBwLnZ1ZT9jZjhkIiwidW5pLWFwcDovLy9BcHAudnVlIiwid2VicGFjazovLy9EOi/lt6XkvZwvY29kZS95Y19zaG9vbF9zdHVkeS95Y19zY2hvb2xfc3R1ZHkvQXBwLnZ1ZT9jODg2Iiwid2VicGFjazovLy9EOi/lt6XkvZwvY29kZS95Y19zaG9vbF9zdHVkeS95Y19zY2hvb2xfc3R1ZHkvQXBwLnZ1ZT9mZDMwIl0sIm5hbWVzIjpbIm1zZyIsInRpdGxlIiwiZHVyYXRpb24iLCJtYXNrIiwiaWNvbiIsIkJvb2xlYW4iLCJ1bmkiLCJzaG93VG9hc3QiLCJqc29uIiwidHlwZSIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsIkpzb24iLCJwcmVQYWdlIiwicGFnZXMiLCJnZXRDdXJyZW50UGFnZXMiLCJsZW5ndGgiLCIkdm0iLCJWdWUiLCJjb21wb25lbnQiLCJjdUN1c3RvbSIsImNvbmZpZyIsInByb2R1Y3Rpb25UaXAiLCJwcm90b3R5cGUiLCIkZmlyZSIsIiRzdG9yZSIsInN0b3JlIiwiJGFwaSIsIkFwcCIsIm1wVHlwZSIsImFwcCIsIiRtb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O3NEQUFBLHdDQUFtQjtBQUNuQjtBQUNBOzs7QUFHQSwwRSx5bkNBQTBCO0FBQzFCOzs7Ozs7O0FBT0EsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sQ0FBQ0MsS0FBRCxFQUFpRCxLQUF6Q0MsUUFBeUMsdUVBQWhDLElBQWdDLEtBQTFCQyxJQUEwQix1RUFBckIsS0FBcUIsS0FBZEMsSUFBYyx1RUFBVCxNQUFTO0FBQzVEO0FBQ0EsTUFBR0MsT0FBTyxDQUFDSixLQUFELENBQVAsS0FBbUIsS0FBdEIsRUFBNEI7QUFDM0I7QUFDQTtBQUNESyxLQUFHLENBQUNDLFNBQUosQ0FBYztBQUNiTixTQUFL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RUFqRUE7O0FBc0VBO0FBQ0EsaUJBREE7QUFFQSxtQkFGQTtBQUdBLHNCQUhBLEVBdEVBOzs7QUE0RUEsR0F4R0E7QUF5R0E7QUFDQTtBQUNBLEdBM0dBO0FBNEdBO0FBQ0E7QUFDQSxHQTlHQSxFOzs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQUE7QUFBQTtBQUFxbUMsQ0FBZ0IsdWpDQUFHLEVBQUMsQzs7Ozs7Ozs7OztBQ0F6bkM7QUFDQSxPQUFPLEtBQVUsRUFBRSxrQkFLZCIsImZpbGUiOiJjb21tb24vbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnXHJcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnXHJcblxyXG5cclxuaW1wb3J0IEpzb24gZnJvbSAnLi9Kc29uJyAvL+a1i+ivleeUqOaVsOaNrlxyXG4vKipcclxuICogIOWboOW3peWFt+WHveaVsOWxnuS6juWFrOWPuOi1hOS6pywg5omA5Lul55u05o6l5ZyoVnVl5a6e5L6L5oyC6L295Yeg5Liq5bi455So55qE5Ye95pWwXHJcbiAqICDmiYDmnInmtYvor5XnlKjmlbDmja7lnYflrZjmlL7kuo7moLnnm67lvZVqc29uLmpzXHJcbiAqICBcclxuICogIGNzc+mDqOWIhuS9v+eUqOS6hkFwcC52dWXkuIvnmoTlhajlsYDmoLflvI/lkoxpY29uZm9udOWbvuagh++8jOaciemcgOimgeWbvuagh+W6k+eahOWPr+S7peeVmeiogOOAglxyXG4gKiAg56S65L6L5L2/55So5LqGdW5pLnNjc3PkuIvnmoTlj5jph48sIOmZpOWPmOmHj+WkluW3suWwvemHj+enu+mZpOeJueacieivreazlSzlj6/nm7TmjqXmm7/mjaLkuLrlhbbku5bpooTlpITnkIblmajkvb/nlKhcclxuICovXHJcbmNvbnN0IG1zZyA9ICh0aXRsZSwgZHVyYXRpb249MTUwMCwgbWFzaz1mYWxzZSwgaWNvbj0nbm9uZScpPT57XHJcblx0Ly/nu5/kuIDmj5DnpLrmlrnkvr/lhajlsYDkv67mlLlcclxuXHRpZihCb29sZWFuKHRpdGxlKSA9PT0gZmFsc2Upe1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdHRpdGxlLFxyXG5cdFx0ZHVyYXRpb24sXHJcblx0XHRtYXNrLFxyXG5cdFx0aWNvblxyXG5cdH0pO1xyXG59XHJcbmNvbnN0IGpzb24gPSB0eXBlPT57XHJcblx0Ly/mqKHmi5/lvILmraXor7fmsYLmlbDmja5cclxuXHRyZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZT0+e1xyXG5cdFx0c2V0VGltZW91dCgoKT0+e1xyXG5cdFx0XHRyZXNvbHZlKEpzb25bdHlwZV0pO1xyXG5cdFx0fSwgNTAwKVxyXG5cdH0pXHJcbn1cclxuY29uc3QgcHJlUGFnZSA9ICgpPT57XHJcblx0bGV0IHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XHJcblx0bGV0IHByZVBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAyXTtcclxuXHJcblxyXG5cclxuXHRyZXR1cm4gcHJlUGFnZS4kdm07XHJcbn1cclxuXHJcbmltcG9ydCBjdUN1c3RvbSBmcm9tICcuL2NvbG9ydWkvY29tcG9uZW50cy9jdS1jdXN0b20udnVlJ1xyXG5WdWUuY29tcG9uZW50KCdjdS1jdXN0b20nLGN1Q3VzdG9tKVxyXG5cclxuVnVlLmNvbmZpZy5wcm9kdWN0aW9uVGlwID0gZmFsc2VcclxuVnVlLnByb3RvdHlwZS4kZmlyZSA9IG5ldyBWdWUoKTtcclxuVnVlLnByb3RvdHlwZS4kc3RvcmUgPSBzdG9yZTtcclxuVnVlLnByb3RvdHlwZS4kYXBpID0ge21zZywganNvbiwgcHJlUGFnZX07XHJcblxyXG5BcHAubXBUeXBlID0gJ2FwcCdcclxuXHJcbmNvbnN0IGFwcCA9IG5ldyBWdWUoe1xyXG4gICAgLi4uQXBwXHJcbn0pXHJcbmFwcC4kbW91bnQoKSIsInZhciByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50c1xudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJBcHAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8c2NyaXB0PlxyXG5cdGltcG9ydCBWdWUgZnJvbSAndnVlJ1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdG9uTGF1bmNoOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dW5pLmdldFN5c3RlbUluZm8oe1xyXG5cdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRcdC8vICNpZm5kZWYgTVBcclxuXHRcdFx0XHRcdFZ1ZS5wcm90b3R5cGUuU3RhdHVzQmFyID0gZS5zdGF0dXNCYXJIZWlnaHQ7XHJcblx0XHRcdFx0XHRpZiAoZS5wbGF0Zm9ybSA9PSAnYW5kcm9pZCcpIHtcclxuXHRcdFx0XHRcdFx0VnVlLnByb3RvdHlwZS5DdXN0b21CYXIgPSBlLnN0YXR1c0JhckhlaWdodCArIDUwO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0VnVlLnByb3RvdHlwZS5DdXN0b21CYXIgPSBlLnN0YXR1c0JhckhlaWdodCArIDQ1O1xyXG5cdFx0XHRcdFx0fTtcclxuXHRcdFx0XHRcdC8vICNlbmRpZlxyXG5cclxuXHRcdFx0XHRcdC8vICNpZmRlZiBNUC1XRUlYSU5cclxuXHRcdFx0XHRcdFZ1ZS5wcm90b3R5cGUuU3RhdHVzQmFyID0gZS5zdGF0dXNCYXJIZWlnaHQ7XHJcblx0XHRcdFx0XHRsZXQgY3VzdG9tID0gd3guZ2V0TWVudUJ1dHRvbkJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coY3VzdG9tKSBcclxuXHRcdFx0XHRcdFZ1ZS5wcm90b3R5cGUuQ3VzdG9tID0gY3VzdG9tO1xyXG5cdFx0XHRcdFx0VnVlLnByb3RvdHlwZS5DdXN0b21CYXIgPSBjdXN0b20uYm90dG9tICsgY3VzdG9tLnRvcCAtIGUuc3RhdHVzQmFySGVpZ2h0O1xyXG5cdFx0XHRcdFx0Ly8gI2VuZGlmXHRcdFxyXG5cclxuXHRcdFx0XHRcdC8vICNpZmRlZiBNUC1BTElQQVlcclxuXHRcdFx0XHRcdFZ1ZS5wcm90b3R5cGUuU3RhdHVzQmFyID0gZS5zdGF0dXNCYXJIZWlnaHQ7XHJcblx0XHRcdFx0XHRWdWUucHJvdG90eXBlLkN1c3RvbUJhciA9IGUuc3RhdHVzQmFySGVpZ2h0ICsgZS50aXRsZUJhckhlaWdodDtcclxuXHRcdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdFx0XHJcblx0XHRcdFZ1ZS5wcm90b3R5cGUuQ29sb3JMaXN0ID0gW3tcclxuXHRcdFx0XHRcdHRpdGxlOiAn5auj57qiJyxcclxuXHRcdFx0XHRcdG5hbWU6ICdyZWQnLFxyXG5cdFx0XHRcdFx0Y29sb3I6ICcjZTU0ZDQyJ1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGl0bGU6ICfmoZTmqZknLFxyXG5cdFx0XHRcdFx0bmFtZTogJ29yYW5nZScsXHJcblx0XHRcdFx0XHRjb2xvcjogJyNmMzdiMWQnXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0aXRsZTogJ+aYjum7hCcsXHJcblx0XHRcdFx0XHRuYW1lOiAneWVsbG93JyxcclxuXHRcdFx0XHRcdGNvbG9yOiAnI2ZiYmQwOCdcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRpdGxlOiAn5qmE5qaEJyxcclxuXHRcdFx0XHRcdG5hbWU6ICdvbGl2ZScsXHJcblx0XHRcdFx0XHRjb2xvcjogJyM4ZGM2M2YnXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0aXRsZTogJ+ajrue7vycsXHJcblx0XHRcdFx0XHRuYW1lOiAnZ3JlZW4nLFxyXG5cdFx0XHRcdFx0Y29sb3I6ICcjMzliNTRhJ1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGl0bGU6ICflpKnpnZInLFxyXG5cdFx0XHRcdFx0bmFtZTogJ2N5YW4nLFxyXG5cdFx0XHRcdFx0Y29sb3I6ICcjMWNiYmI0J1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGl0bGU6ICfmtbfok50nLFxyXG5cdFx0XHRcdFx0bmFtZTogJ2JsdWUnLFxyXG5cdFx0XHRcdFx0Y29sb3I6ICcjMDA4MWZmJ1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGl0bGU6ICflp7nntKsnLFxyXG5cdFx0XHRcdFx0bmFtZTogJ3B1cnBsZScsXHJcblx0XHRcdFx0XHRjb2xvcjogJyM2NzM5YjYnXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0aXRsZTogJ+acqOanvycsXHJcblx0XHRcdFx0XHRuYW1lOiAnbWF1dmUnLFxyXG5cdFx0XHRcdFx0Y29sb3I6ICcjOWMyNmIwJ1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGl0bGU6ICfmoYPnsoknLFxyXG5cdFx0XHRcdFx0bmFtZTogJ3BpbmsnLFxyXG5cdFx0XHRcdFx0Y29sb3I6ICcjZTAzOTk3J1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGl0bGU6ICfmo5XopJAnLFxyXG5cdFx0XHRcdFx0bmFtZTogJ2Jyb3duJyxcclxuXHRcdFx0XHRcdGNvbG9yOiAnI2E1NjczZidcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRpdGxlOiAn546E54GwJyxcclxuXHRcdFx0XHRcdG5hbWU6ICdncmV5JyxcclxuXHRcdFx0XHRcdGNvbG9yOiAnIzg3OTlhMydcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRpdGxlOiAn6I2J54GwJyxcclxuXHRcdFx0XHRcdG5hbWU6ICdncmF5JyxcclxuXHRcdFx0XHRcdGNvbG9yOiAnI2FhYWFhYSdcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRpdGxlOiAn5aKo6buRJyxcclxuXHRcdFx0XHRcdG5hbWU6ICdibGFjaycsXHJcblx0XHRcdFx0XHRjb2xvcjogJyMzMzMzMzMnXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0aXRsZTogJ+mbheeZvScsXHJcblx0XHRcdFx0XHRuYW1lOiAnd2hpdGUnLFxyXG5cdFx0XHRcdFx0Y29sb3I6ICcjZmZmZmZmJ1xyXG5cdFx0XHRcdH1dXHJcblx0XHRcdFxyXG5cdFx0fSxcclxuXHRcdG9uU2hvdzogZnVuY3Rpb24oKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdBcHAgU2hvdycpXHJcblx0XHR9LFxyXG5cdFx0b25IaWRlOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ0FwcCBIaWRlJylcclxuXHRcdH1cclxuXHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxyXG5cdEBpbXBvcnQgXCJjb2xvcnVpL21haW4uY3NzXCI7XHJcblx0QGltcG9ydCBcImNvbG9ydWkvaWNvbi5jc3NcIjtcclxuXHJcblx0Lm5hdi1saXN0IHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0XHRwYWRkaW5nOiAwcHggNDB1cHggMHB4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdH1cclxuXHJcblx0Lm5hdi1saSB7XHJcblx0XHRwYWRkaW5nOiAzMHVweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDEydXB4O1xyXG5cdFx0d2lkdGg6IDQ1JTtcclxuXHRcdG1hcmdpbjogMCAyLjUlIDQwdXB4O1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vY2RuLm5sYXJrLmNvbS95dXF1ZS8wLzIwMTkvcG5nLzI4MDM3NC8xNTUyOTk2MzU4MzUyLWFzc2V0cy93ZWItdXBsb2FkL2NjM2IxODA3LWM2ODQtNGI4My04ZjgwLTgwZTViOGE2Yjk3NS5wbmcpO1xyXG5cdFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHRcdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdHotaW5kZXg6IDE7XHJcblx0fVxyXG5cclxuXHQubmF2LWxpOjphZnRlciB7XHJcblx0XHRjb250ZW50OiBcIlwiO1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0ei1pbmRleDogLTE7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0Ym90dG9tOiAtMTAlO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTB1cHg7XHJcblx0XHRvcGFjaXR5OiAwLjI7XHJcblx0XHR0cmFuc2Zvcm06IHNjYWxlKDAuOSwgMC45KTtcclxuXHR9XHJcblxyXG5cdC5uYXYtbGkuY3VyIHtcclxuXHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0YmFja2dyb3VuZDogcmdiKDk0LCAxODUsIDk0KTtcclxuXHRcdGJveC1zaGFkb3c6IDR1cHggNHVweCA2dXB4IHJnYmEoOTQsIDE4NSwgOTQsIDAuNCk7XHJcblx0fVxyXG5cclxuXHQubmF2LXRpdGxlIHtcclxuXHRcdGZvbnQtc2l6ZTogMzJ1cHg7XHJcblx0XHRmb250LXdlaWdodDogMzAwO1xyXG5cdH1cclxuXHJcblx0Lm5hdi10aXRsZTo6Zmlyc3QtbGV0dGVyIHtcclxuXHRcdGZvbnQtc2l6ZTogNDB1cHg7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDR1cHg7XHJcblx0fVxyXG5cclxuXHQubmF2LW5hbWUge1xyXG5cdFx0Zm9udC1zaXplOiAyOHVweDtcclxuXHRcdHRleHQtdHJhbnNmb3JtOiBDYXBpdGFsaXplO1xyXG5cdFx0bWFyZ2luLXRvcDogMjB1cHg7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0fVxyXG5cclxuXHQubmF2LW5hbWU6OmJlZm9yZSB7XHJcblx0XHRjb250ZW50OiBcIlwiO1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHR3aWR0aDogNDB1cHg7XHJcblx0XHRoZWlnaHQ6IDZ1cHg7XHJcblx0XHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdFx0Ym90dG9tOiAwO1xyXG5cdFx0cmlnaHQ6IDA7XHJcblx0XHRvcGFjaXR5OiAwLjU7XHJcblx0fVxyXG5cclxuXHQubmF2LW5hbWU6OmFmdGVyIHtcclxuXHRcdGNvbnRlbnQ6IFwiXCI7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdHdpZHRoOiAxMDB1cHg7XHJcblx0XHRoZWlnaHQ6IDFweDtcclxuXHRcdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0XHRib3R0b206IDA7XHJcblx0XHRyaWdodDogNDB1cHg7XHJcblx0XHRvcGFjaXR5OiAwLjM7XHJcblx0fVxyXG5cclxuXHQubmF2LW5hbWU6OmZpcnN0LWxldHRlciB7XHJcblx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdGZvbnQtc2l6ZTogMzZ1cHg7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDFweDtcclxuXHR9XHJcblxyXG5cdC5uYXYtbGkgdGV4dCB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRyaWdodDogMzB1cHg7XHJcblx0XHR0b3A6IDMwdXB4O1xyXG5cdFx0Zm9udC1zaXplOiA1MnVweDtcclxuXHRcdHdpZHRoOiA2MHVweDtcclxuXHRcdGhlaWdodDogNjB1cHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRsaW5lLWhlaWdodDogNjB1cHg7XHJcblx0fVxyXG5cclxuXHQudGV4dC1saWdodCB7XHJcblx0XHRmb250LXdlaWdodDogMzAwO1xyXG5cdH1cclxuXHJcblx0QGtleWZyYW1lcyBzaG93IHtcclxuXHRcdDAlIHtcclxuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MHB4KTtcclxuXHRcdH1cclxuXHJcblx0XHQ2MCUge1xyXG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNDB1cHgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdDEwMCUge1xyXG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdEAtd2Via2l0LWtleWZyYW1lcyBzaG93IHtcclxuXHRcdDAlIHtcclxuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MHB4KTtcclxuXHRcdH1cclxuXHJcblx0XHQ2MCUge1xyXG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNDB1cHgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdDEwMCUge1xyXG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuXHRcdH1cclxuXHR9XHJcbjwvc3R5bGU+XHJcbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tOC1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS04LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC1vbmVPZi0xLTQhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS01IS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tOC1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS04LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC1vbmVPZi0xLTQhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS01IS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNTk5NTY1NTMwODQ1XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIkQ6L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG1yXCI6dHJ1ZSxcInB1YmxpY1BhdGhcIjpcIi4uLy4uL1wiLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==