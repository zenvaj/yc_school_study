(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/main"],[
/* 0 */
/*!********************************************************************!*\
  !*** C:/works/uniapp_code/yingchao_uniapp/yc_school_study/main.js ***!
  \********************************************************************/
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
};var cuCustom = function cuCustom() {__webpack_require__.e(/*! require.ensure | colorui/components/cu-custom */ "colorui/components/cu-custom").then((function () {return resolve(__webpack_require__(/*! ./colorui/components/cu-custom.vue */ 322));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};


_vue.default.component('cu-custom', cuCustom);

_vue.default.config.productionTip = false;
_vue.default.prototype.$fire = new _vue.default();
_vue.default.prototype.$store = _store.default;
_vue.default.prototype.$api = { msg: msg, json: json, prePage: prePage };

_vue.default.prototype.$request = function (method, data, header) {
  header = header || "application/json";
  var base_url = "https://app.wfycjy.com";
  var AuthorizationToken = uni.getStorageSync("AuthorizationToken");

  // return new Promise((succ, error) => {
  // 	uni.request({
  // 		url: base_url + method,
  // 		data: data,
  // 		method: "POST",
  // 		header: {
  // 			"Accept":header,
  // 			"content-type": header,
  // 			"Authorization": "Bearer "+ AuthorizationToken
  // 		},
  // 		success: function (result) {
  // 			console.error(result);
  // 			succ.call(self, result.data)
  // 		},
  // 		fail: function (e) {
  // 			error.call(self, e)
  // 		}
  // 	})
  // })


  uni.request({
    url: base_url + method,
    data: data,
    header: {
      "Accept": header,
      "content-type": header,
      "Authorization": "Bearer " + AuthorizationToken },

    method: "POST",
    success: function success(res) {
      console.log('success', res);
      return res;
    },
    fail: function fail(err) {
      console.log('fail', err);
    },
    complete: function complete() {

    } });

};

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
/*!********************************************************************!*\
  !*** C:/works/uniapp_code/yingchao_uniapp/yc_school_study/App.vue ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 8);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=scss& */ 10);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);
var render, staticRenderFns, recyclableRender, components
var renderjs





/* normalize component */

var component = Object(_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
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
/*!*********************************************************************************************!*\
  !*** C:/works/uniapp_code/yingchao_uniapp/yc_school_study/App.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./App.vue?vue&type=script&lang=js& */ 9);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 9 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/works/uniapp_code/yingchao_uniapp/yc_school_study/App.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/*!******************************************************************************************************!*\
  !*** C:/works/uniapp_code/yingchao_uniapp/yc_school_study/App.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./App.vue?vue&type=style&index=0&lang=scss& */ 11);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 11 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/works/uniapp_code/yingchao_uniapp/yc_school_study/App.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })
],[[0,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsbnVsbCwid2VicGFjazovLy9DOi93b3Jrcy91bmlhcHBfY29kZS95aW5nY2hhb191bmlhcHAveWNfc2Nob29sX3N0dWR5L0FwcC52dWU/ODkyYiIsInVuaS1hcHA6Ly8vQXBwLnZ1ZSIsIndlYnBhY2s6Ly8vQzovd29ya3MvdW5pYXBwX2NvZGUveWluZ2NoYW9fdW5pYXBwL3ljX3NjaG9vbF9zdHVkeS9BcHAudnVlP2UwYjIiLCJ3ZWJwYWNrOi8vL0M6L3dvcmtzL3VuaWFwcF9jb2RlL3lpbmdjaGFvX3VuaWFwcC95Y19zY2hvb2xfc3R1ZHkvQXBwLnZ1ZT82MDBjIl0sIm5hbWVzIjpbIm1zZyIsInRpdGxlIiwiZHVyYXRpb24iLCJtYXNrIiwiaWNvbiIsIkJvb2xlYW4iLCJ1bmkiLCJzaG93VG9hc3QiLCJqc29uIiwidHlwZSIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsIkpzb24iLCJwcmVQYWdlIiwicGFnZXMiLCJnZXRDdXJyZW50UGFnZXMiLCJsZW5ndGgiLCIkdm0iLCJWdWUiLCJjb21wb25lbnQiLCJjdUN1c3RvbSIsImNvbmZpZyIsInByb2R1Y3Rpb25UaXAiLCJwcm90b3R5cGUiLCIkZmlyZSIsIiRzdG9yZSIsInN0b3JlIiwiJGFwaSIsIiRyZXF1ZXN0IiwibWV0aG9kIiwiZGF0YSIsImhlYWRlciIsImJhc2VfdXJsIiwiQXV0aG9yaXphdGlvblRva2VuIiwiZ2V0U3RvcmFnZVN5bmMiLCJyZXF1ZXN0IiwidXJsIiwic3VjY2VzcyIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJmYWlsIiwiZXJyIiwiY29tcGxldGUiLCJBcHAiLCJtcFR5cGUiLCJhcHAiLCIkbW91bnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztzREFBQSx3Q0FBbUI7QUFDbkI7QUFDQTs7O0FBR0EsMEUseW5DQUEwQjtBQUMxQjs7Ozs7OztBQU9BLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLENBQUNDLEtBQUQsRUFBaUQs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QUFDQSxpQkFEQTtBQUVBLG1CQUZBO0FBR0Esc0JBSEEsRUFqRUE7O0FBc0VBO0FBQ0EsaUJBREE7QUFFQSxtQkFGQTtBQUdBLHNCQUhBLEVBdEVBOzs7QUE0RUEsR0E5R0E7QUErR0E7QUFDQTtBQUNBLEdBakhBO0FBa0hBO0FBQ0E7QUFDQSxHQXBIQSxFOzs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQUE7QUFBQTtBQUFtdUMsQ0FBZ0IscXJDQUFHLEVBQUMsQzs7Ozs7Ozs7OztBQ0F2dkM7QUFDQSxPQUFPLEtBQVUsRUFBRSxrQkFLZCIsImZpbGUiOiJjb21tb24vbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnXHJcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnXHJcblxyXG5cclxuaW1wb3J0IEpzb24gZnJvbSAnLi9Kc29uJyAvL+a1i+ivleeUqOaVsOaNrlxyXG4vKipcclxuICogIOWboOW3peWFt+WHveaVsOWxnuS6juWFrOWPuOi1hOS6pywg5omA5Lul55u05o6l5ZyoVnVl5a6e5L6L5oyC6L295Yeg5Liq5bi455So55qE5Ye95pWwXHJcbiAqICDmiYDmnInmtYvor5XnlKjmlbDmja7lnYflrZjmlL7kuo7moLnnm67lvZVqc29uLmpzXHJcbiAqICBcclxuICogIGNzc+mDqOWIhuS9v+eUqOS6hkFwcC52dWXkuIvnmoTlhajlsYDmoLflvI/lkoxpY29uZm9udOWbvuagh++8jOaciemcgOimgeWbvuagh+W6k+eahOWPr+S7peeVmeiogOOAglxyXG4gKiAg56S65L6L5L2/55So5LqGdW5pLnNjc3PkuIvnmoTlj5jph48sIOmZpOWPmOmHj+WkluW3suWwvemHj+enu+mZpOeJueacieivreazlSzlj6/nm7TmjqXmm7/mjaLkuLrlhbbku5bpooTlpITnkIblmajkvb/nlKhcclxuICovXHJcbmNvbnN0IG1zZyA9ICh0aXRsZSwgZHVyYXRpb249MTUwMCwgbWFzaz1mYWxzZSwgaWNvbj0nbm9uZScpPT57XHJcblx0Ly/nu5/kuIDmj5DnpLrmlrnkvr/lhajlsYDkv67mlLlcclxuXHRpZihCb29sZWFuKHRpdGxlKSA9PT0gZmFsc2Upe1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdHRpdGxlLFxyXG5cdFx0ZHVyYXRpb24sXHJcblx0XHRtYXNrLFxyXG5cdFx0aWNvblxyXG5cdH0pO1xyXG59XHJcbmNvbnN0IGpzb24gPSB0eXBlPT57XHJcblx0Ly/mqKHmi5/lvILmraXor7fmsYLmlbDmja5cclxuXHRyZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZT0+e1xyXG5cdFx0c2V0VGltZW91dCgoKT0+e1xyXG5cdFx0XHRyZXNvbHZlKEpzb25bdHlwZV0pO1xyXG5cdFx0fSwgNTAwKVxyXG5cdH0pXHJcbn1cclxuY29uc3QgcHJlUGFnZSA9ICgpPT57XHJcblx0bGV0IHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XHJcblx0bGV0IHByZVBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAyXTtcclxuXHJcblxyXG5cclxuXHRyZXR1cm4gcHJlUGFnZS4kdm07XHJcbn1cclxuXHJcbmltcG9ydCBjdUN1c3RvbSBmcm9tICcuL2NvbG9ydWkvY29tcG9uZW50cy9jdS1jdXN0b20udnVlJ1xyXG5WdWUuY29tcG9uZW50KCdjdS1jdXN0b20nLGN1Q3VzdG9tKVxyXG5cclxuVnVlLmNvbmZpZy5wcm9kdWN0aW9uVGlwID0gZmFsc2VcclxuVnVlLnByb3RvdHlwZS4kZmlyZSA9IG5ldyBWdWUoKTtcclxuVnVlLnByb3RvdHlwZS4kc3RvcmUgPSBzdG9yZTtcclxuVnVlLnByb3RvdHlwZS4kYXBpID0ge21zZywganNvbiwgcHJlUGFnZX07XHJcblxyXG5WdWUucHJvdG90eXBlLiRyZXF1ZXN0ID0gKG1ldGhvZCxkYXRhLGhlYWRlcik9PntcclxuXHRoZWFkZXIgPSBoZWFkZXIgfHwgXCJhcHBsaWNhdGlvbi9qc29uXCI7XHJcblx0bGV0IGJhc2VfdXJsID0gXCJodHRwczovL2FwcC53ZnljankuY29tXCI7XHJcblx0bGV0IEF1dGhvcml6YXRpb25Ub2tlbiA9IHVuaS5nZXRTdG9yYWdlU3luYyhcIkF1dGhvcml6YXRpb25Ub2tlblwiKTtcclxuXHRcclxuXHQvLyByZXR1cm4gbmV3IFByb21pc2UoKHN1Y2MsIGVycm9yKSA9PiB7XHJcblx0Ly8gXHR1bmkucmVxdWVzdCh7XHJcblx0Ly8gXHRcdHVybDogYmFzZV91cmwgKyBtZXRob2QsXHJcblx0Ly8gXHRcdGRhdGE6IGRhdGEsXHJcblx0Ly8gXHRcdG1ldGhvZDogXCJQT1NUXCIsXHJcblx0Ly8gXHRcdGhlYWRlcjoge1xyXG5cdC8vIFx0XHRcdFwiQWNjZXB0XCI6aGVhZGVyLFxyXG5cdC8vIFx0XHRcdFwiY29udGVudC10eXBlXCI6IGhlYWRlcixcclxuXHQvLyBcdFx0XHRcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIrIEF1dGhvcml6YXRpb25Ub2tlblxyXG5cdC8vIFx0XHR9LFxyXG5cdC8vIFx0XHRzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcblx0Ly8gXHRcdFx0Y29uc29sZS5lcnJvcihyZXN1bHQpO1xyXG5cdC8vIFx0XHRcdHN1Y2MuY2FsbChzZWxmLCByZXN1bHQuZGF0YSlcclxuXHQvLyBcdFx0fSxcclxuXHQvLyBcdFx0ZmFpbDogZnVuY3Rpb24gKGUpIHtcclxuXHQvLyBcdFx0XHRlcnJvci5jYWxsKHNlbGYsIGUpXHJcblx0Ly8gXHRcdH1cclxuXHQvLyBcdH0pXHJcblx0Ly8gfSlcclxuXHRcclxuXHRcclxuXHR1bmkucmVxdWVzdCh7XHJcblx0XHR1cmw6YmFzZV91cmwgKyBtZXRob2QsXHJcblx0XHRkYXRhOmRhdGEsXHJcblx0XHRoZWFkZXI6e1xyXG5cdFx0XHRcIkFjY2VwdFwiOmhlYWRlcixcclxuXHRcdFx0XCJjb250ZW50LXR5cGVcIjogaGVhZGVyLFxyXG5cdFx0XHRcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIrIEF1dGhvcml6YXRpb25Ub2tlblxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZDpcIlBPU1RcIixcclxuXHRcdHN1Y2Nlc3M6KHJlcyk9PntcclxuXHRcdFx0Y29uc29sZS5sb2coJ3N1Y2Nlc3MnLHJlcylcclxuXHRcdFx0cmV0dXJuIHJlcztcclxuXHRcdH0sXHJcblx0XHRmYWlsOihlcnIpPT57XHJcblx0XHRcdGNvbnNvbGUubG9nKCdmYWlsJyxlcnIpXHJcblx0XHR9LFxyXG5cdFx0Y29tcGxldGU6KCk9PntcclxuXHRcdFx0XHJcblx0XHR9XHJcblx0fSlcclxufTtcclxuXHJcbkFwcC5tcFR5cGUgPSAnYXBwJ1xyXG5cclxuY29uc3QgYXBwID0gbmV3IFZ1ZSh7XHJcbiAgICAuLi5BcHBcclxufSlcclxuYXBwLiRtb3VudCgpIiwidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiQXBwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8c2NyaXB0PlxyXG5cdGltcG9ydCBWdWUgZnJvbSAndnVlJ1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdG9uTGF1bmNoOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dW5pLmdldFN5c3RlbUluZm8oe1xyXG5cdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRcdC8vVnVlLnByb3RvdHlwZS53aW5kb3dXaWR0aCA9IGUud2luZG93V2lkdGg7XHJcblx0XHRcdFx0XHQvLyAjaWZuZGVmIE1QXHJcblx0XHRcdFx0XHRWdWUucHJvdG90eXBlLlN0YXR1c0JhciA9IGUuc3RhdHVzQmFySGVpZ2h0O1xyXG5cdFx0XHRcdFx0aWYgKGUucGxhdGZvcm0gPT0gJ2FuZHJvaWQnKSB7XHJcblx0XHRcdFx0XHRcdFZ1ZS5wcm90b3R5cGUuQ3VzdG9tQmFyID0gZS5zdGF0dXNCYXJIZWlnaHQgKyA1MDtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFZ1ZS5wcm90b3R5cGUuQ3VzdG9tQmFyID0gZS5zdGF0dXNCYXJIZWlnaHQgKyA0NTtcclxuXHRcdFx0XHRcdH07XHJcblx0XHRcdFx0XHQvLyAjZW5kaWZcclxuXHJcblx0XHRcdFx0XHQvLyAjaWZkZWYgTVAtV0VJWElOXHJcblx0XHRcdFx0XHRWdWUucHJvdG90eXBlLlN0YXR1c0JhciA9IGUuc3RhdHVzQmFySGVpZ2h0O1xyXG5cdFx0XHRcdFx0bGV0IGN1c3RvbSA9IHVuaS5nZXRNZW51QnV0dG9uQm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHRcdFx0XHRWdWUucHJvdG90eXBlLkN1c3RvbSA9IGN1c3RvbTtcclxuXHRcdFx0XHRcdFZ1ZS5wcm90b3R5cGUuQ3VzdG9tQmFyID0gY3VzdG9tLmJvdHRvbSArIGN1c3RvbS50b3AgLSBlLnN0YXR1c0JhckhlaWdodDtcclxuXHRcdFx0XHRcdC8vICNlbmRpZlx0XHRcclxuXHRcdFx0XHRcdC8vICNpZmRlZiBNUC1RUVxyXG5cdFx0XHRcdFx0VnVlLnByb3RvdHlwZS5TdGF0dXNCYXIgPSBlLnN0YXR1c0JhckhlaWdodDtcclxuXHRcdFx0XHRcdGxldCBjdXN0b20gPSB1bmkuZ2V0TWVudUJ1dHRvbkJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0XHRcdFx0VnVlLnByb3RvdHlwZS5DdXN0b20gPSBjdXN0b207XHJcblx0XHRcdFx0XHRWdWUucHJvdG90eXBlLkN1c3RvbUJhciA9IGN1c3RvbS5ib3R0b20gKyBjdXN0b20udG9wIC0gZS5zdGF0dXNCYXJIZWlnaHQ7XHJcblx0XHRcdFx0XHQvLyAjZW5kaWZcdFx0XHJcblxyXG5cdFx0XHRcdFx0Ly8gI2lmZGVmIE1QLUFMSVBBWVxyXG5cdFx0XHRcdFx0VnVlLnByb3RvdHlwZS5TdGF0dXNCYXIgPSBlLnN0YXR1c0JhckhlaWdodDtcclxuXHRcdFx0XHRcdFZ1ZS5wcm90b3R5cGUuQ3VzdG9tQmFyID0gZS5zdGF0dXNCYXJIZWlnaHQgKyBlLnRpdGxlQmFySGVpZ2h0O1xyXG5cdFx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0XHRcclxuXHRcdFx0VnVlLnByb3RvdHlwZS5Db2xvckxpc3QgPSBbe1xyXG5cdFx0XHRcdFx0dGl0bGU6ICflq6PnuqInLFxyXG5cdFx0XHRcdFx0bmFtZTogJ3JlZCcsXHJcblx0XHRcdFx0XHRjb2xvcjogJyNlNTRkNDInXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0aXRsZTogJ+ahlOapmScsXHJcblx0XHRcdFx0XHRuYW1lOiAnb3JhbmdlJyxcclxuXHRcdFx0XHRcdGNvbG9yOiAnI2YzN2IxZCdcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRpdGxlOiAn5piO6buEJyxcclxuXHRcdFx0XHRcdG5hbWU6ICd5ZWxsb3cnLFxyXG5cdFx0XHRcdFx0Y29sb3I6ICcjZmJiZDA4J1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGl0bGU6ICfmqYTmpoQnLFxyXG5cdFx0XHRcdFx0bmFtZTogJ29saXZlJyxcclxuXHRcdFx0XHRcdGNvbG9yOiAnIzhkYzYzZidcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRpdGxlOiAn5qOu57u/JyxcclxuXHRcdFx0XHRcdG5hbWU6ICdncmVlbicsXHJcblx0XHRcdFx0XHRjb2xvcjogJyMzOWI1NGEnXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0aXRsZTogJ+WkqemdkicsXHJcblx0XHRcdFx0XHRuYW1lOiAnY3lhbicsXHJcblx0XHRcdFx0XHRjb2xvcjogJyMxY2JiYjQnXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0aXRsZTogJ+a1t+iTnScsXHJcblx0XHRcdFx0XHRuYW1lOiAnYmx1ZScsXHJcblx0XHRcdFx0XHRjb2xvcjogJyMwMDgxZmYnXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0aXRsZTogJ+Wnuee0qycsXHJcblx0XHRcdFx0XHRuYW1lOiAncHVycGxlJyxcclxuXHRcdFx0XHRcdGNvbG9yOiAnIzY3MzliNidcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRpdGxlOiAn5pyo5qe/JyxcclxuXHRcdFx0XHRcdG5hbWU6ICdtYXV2ZScsXHJcblx0XHRcdFx0XHRjb2xvcjogJyM5YzI2YjAnXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0aXRsZTogJ+ahg+eyiScsXHJcblx0XHRcdFx0XHRuYW1lOiAncGluaycsXHJcblx0XHRcdFx0XHRjb2xvcjogJyNlMDM5OTcnXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0aXRsZTogJ+ajleikkCcsXHJcblx0XHRcdFx0XHRuYW1lOiAnYnJvd24nLFxyXG5cdFx0XHRcdFx0Y29sb3I6ICcjYTU2NzNmJ1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGl0bGU6ICfnjoTngbAnLFxyXG5cdFx0XHRcdFx0bmFtZTogJ2dyZXknLFxyXG5cdFx0XHRcdFx0Y29sb3I6ICcjODc5OWEzJ1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGl0bGU6ICfojYnngbAnLFxyXG5cdFx0XHRcdFx0bmFtZTogJ2dyYXknLFxyXG5cdFx0XHRcdFx0Y29sb3I6ICcjYWFhYWFhJ1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGl0bGU6ICfloqjpu5EnLFxyXG5cdFx0XHRcdFx0bmFtZTogJ2JsYWNrJyxcclxuXHRcdFx0XHRcdGNvbG9yOiAnIzMzMzMzMydcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRpdGxlOiAn6ZuF55m9JyxcclxuXHRcdFx0XHRcdG5hbWU6ICd3aGl0ZScsXHJcblx0XHRcdFx0XHRjb2xvcjogJyNmZmZmZmYnXHJcblx0XHRcdFx0fV1cclxuXHRcdFx0XHJcblx0XHR9LFxyXG5cdFx0b25TaG93OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ0FwcCBTaG93JylcclxuXHRcdH0sXHJcblx0XHRvbkhpZGU6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnQXBwIEhpZGUnKVxyXG5cdFx0fVxyXG5cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XHJcblx0QGltcG9ydCBcImNvbG9ydWkvbWFpbi5jc3NcIjtcclxuXHRAaW1wb3J0IFwiY29sb3J1aS9pY29uLmNzc1wiO1xyXG5cclxuXHQubmF2LWxpc3Qge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtd3JhcDogd3JhcDtcclxuXHRcdHBhZGRpbmc6IDBweCA0MHVweCAwcHg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0fVxyXG5cclxuXHQubmF2LWxpIHtcclxuXHRcdHBhZGRpbmc6IDMwdXB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTJ1cHg7XHJcblx0XHR3aWR0aDogNDUlO1xyXG5cdFx0bWFyZ2luOiAwIDIuNSUgNDB1cHg7XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9jZG4ubmxhcmsuY29tL3l1cXVlLzAvMjAxOS9wbmcvMjgwMzc0LzE1NTI5OTYzNTgzNTItYXNzZXRzL3dlYi11cGxvYWQvY2MzYjE4MDctYzY4NC00YjgzLThmODAtODBlNWI4YTZiOTc1LnBuZyk7XHJcblx0XHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0ei1pbmRleDogMTtcclxuXHR9XHJcblxyXG5cdC5uYXYtbGk6OmFmdGVyIHtcclxuXHRcdGNvbnRlbnQ6IFwiXCI7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR6LWluZGV4OiAtMTtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHRib3R0b206IC0xMCU7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxMHVweDtcclxuXHRcdG9wYWNpdHk6IDAuMjtcclxuXHRcdHRyYW5zZm9ybTogc2NhbGUoMC45LCAwLjkpO1xyXG5cdH1cclxuXHJcblx0Lm5hdi1saS5jdXIge1xyXG5cdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRiYWNrZ3JvdW5kOiByZ2IoOTQsIDE4NSwgOTQpO1xyXG5cdFx0Ym94LXNoYWRvdzogNHVweCA0dXB4IDZ1cHggcmdiYSg5NCwgMTg1LCA5NCwgMC40KTtcclxuXHR9XHJcblxyXG5cdC5uYXYtdGl0bGUge1xyXG5cdFx0Zm9udC1zaXplOiAzMnVweDtcclxuXHRcdGZvbnQtd2VpZ2h0OiAzMDA7XHJcblx0fVxyXG5cclxuXHQubmF2LXRpdGxlOjpmaXJzdC1sZXR0ZXIge1xyXG5cdFx0Zm9udC1zaXplOiA0MHVweDtcclxuXHRcdG1hcmdpbi1yaWdodDogNHVweDtcclxuXHR9XHJcblxyXG5cdC5uYXYtbmFtZSB7XHJcblx0XHRmb250LXNpemU6IDI4dXB4O1xyXG5cdFx0dGV4dC10cmFuc2Zvcm06IENhcGl0YWxpemU7XHJcblx0XHRtYXJnaW4tdG9wOiAyMHVweDtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR9XHJcblxyXG5cdC5uYXYtbmFtZTo6YmVmb3JlIHtcclxuXHRcdGNvbnRlbnQ6IFwiXCI7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdHdpZHRoOiA0MHVweDtcclxuXHRcdGhlaWdodDogNnVweDtcclxuXHRcdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0XHRib3R0b206IDA7XHJcblx0XHRyaWdodDogMDtcclxuXHRcdG9wYWNpdHk6IDAuNTtcclxuXHR9XHJcblxyXG5cdC5uYXYtbmFtZTo6YWZ0ZXIge1xyXG5cdFx0Y29udGVudDogXCJcIjtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0d2lkdGg6IDEwMHVweDtcclxuXHRcdGhlaWdodDogMXB4O1xyXG5cdFx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRcdGJvdHRvbTogMDtcclxuXHRcdHJpZ2h0OiA0MHVweDtcclxuXHRcdG9wYWNpdHk6IDAuMztcclxuXHR9XHJcblxyXG5cdC5uYXYtbmFtZTo6Zmlyc3QtbGV0dGVyIHtcclxuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0Zm9udC1zaXplOiAzNnVweDtcclxuXHRcdG1hcmdpbi1yaWdodDogMXB4O1xyXG5cdH1cclxuXHJcblx0Lm5hdi1saSB0ZXh0IHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHJpZ2h0OiAzMHVweDtcclxuXHRcdHRvcDogMzB1cHg7XHJcblx0XHRmb250LXNpemU6IDUydXB4O1xyXG5cdFx0d2lkdGg6IDYwdXB4O1xyXG5cdFx0aGVpZ2h0OiA2MHVweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGxpbmUtaGVpZ2h0OiA2MHVweDtcclxuXHR9XHJcblxyXG5cdC50ZXh0LWxpZ2h0IHtcclxuXHRcdGZvbnQtd2VpZ2h0OiAzMDA7XHJcblx0fVxyXG5cclxuXHRAa2V5ZnJhbWVzIHNob3cge1xyXG5cdFx0MCUge1xyXG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwcHgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdDYwJSB7XHJcblx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0MHVweCk7XHJcblx0XHR9XHJcblxyXG5cdFx0MTAwJSB7XHJcblx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0QC13ZWJraXQta2V5ZnJhbWVzIHNob3cge1xyXG5cdFx0MCUge1xyXG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwcHgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdDYwJSB7XHJcblx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0MHVweCk7XHJcblx0XHR9XHJcblxyXG5cdFx0MTAwJSB7XHJcblx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG5cdFx0fVxyXG5cdH1cclxuPC9zdHlsZT5cclxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTgtb25lT2YtMS0wIS4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS04LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS04LW9uZU9mLTEtNCEuLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtNSEuLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTgtb25lT2YtMS0wIS4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS04LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS04LW9uZU9mLTEtNCEuLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtNSEuLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2MDAwOTE5MjEwMjFcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiQzovUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImhtclwiOnRydWUsXCJwdWJsaWNQYXRoXCI6XCIuLi8uLi9cIixcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0=