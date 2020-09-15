import Vue from 'vue'
import store from './store'
import App from './App'


import Json from './Json' //测试用数据
/**
 *  因工具函数属于公司资产, 所以直接在Vue实例挂载几个常用的函数
 *  所有测试用数据均存放于根目录json.js
 *  
 *  css部分使用了App.vue下的全局样式和iconfont图标，有需要图标库的可以留言。
 *  示例使用了uni.scss下的变量, 除变量外已尽量移除特有语法,可直接替换为其他预处理器使用
 */
const msg = (title, duration=1500, mask=false, icon='none')=>{
	//统一提示方便全局修改
	if(Boolean(title) === false){
		return;
	}
	uni.showToast({
		title,
		duration,
		mask,
		icon
	});
}
const json = type=>{
	//模拟异步请求数据
	return new Promise(resolve=>{
		setTimeout(()=>{
			resolve(Json[type]);
		}, 500)
	})
}
const prePage = ()=>{
	let pages = getCurrentPages();
	let prePage = pages[pages.length - 2];
	// #ifdef H5
	return prePage;
	// #endif
	return prePage.$vm;
}

import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)

Vue.config.productionTip = false
Vue.prototype.$fire = new Vue();
Vue.prototype.$store = store;
Vue.prototype.$api = {msg, json, prePage};

Vue.prototype.$request = (parament)=>{
	let header = parament.header || "application/json";
	let base_url = "https://app.wfycjy.com";
	let AuthorizationToken = uni.getStorageSync("AuthorizationToken");
	
	console.error(parament);
	return new Promise((succ, error) => {
		uni.request({
			url: base_url + parament.method,
			data: parament.data,
			method: "POST",
			withCredentials:true,
			header: {
				"Accept":header,
				"content-type": header,
				"Authorization": "Bearer "+ AuthorizationToken,
			},
			success: function (result) {
				//console.error(result);
				succ.call(self, result.data)
			},
			fail: function (e) {
				console.log("token : "+AuthorizationToken)
				error.call(self, e)
			}
		})
	})
	
	
	uni.request({
		url:base_url + method,
		data:data,
		header:{
			"Accept":header,
			"content-type": header,
			"Authorization": "Bearer "+ AuthorizationToken
		},
		method:"POST",
		success:(res)=>{
			console.log('success',res)
			return res;
		},
		fail:(err)=>{
			console.log('fail',err)
		},
		complete:()=>{
			
		}
	})
};

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
