import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		hasLogin: false,
		userInfo: {},
		token:{},
		AuthorizationToken:""
	},
	mutations: {
		authLogin(state, provider) {

			state.hasLogin = true;
			state.token = provider;
			state.AuthorizationToken = provider.token_auth
			uni.setStorage({
			    key: 'token',  
			    data: provider  
			})
			uni.setStorage({
			    key: 'AuthorizationToken',  
			    data: provider.token_auth 
			})
			//console.log(state.token);
		},
		userInfo(state, provider) {
			state.userInfo = provider;
			uni.setStorage({
			    key: 'userInfo',  
			    data: provider  
			}) 
			//console.log(state.userInfo);
		},
		logout(state) {
			state.hasLogin = false;
			state.userInfo = {};
			state.token = {};
			state.AuthorizationToken = '';
			uni.removeStorage({  
                key: 'userInfo'  
            })
			uni.removeStorage({
			    key: 'AuthorizationToken'  
			})
			uni.removeStorage({
			    key: 'token'  
			})
			console.log("退出登录成功")
		}
	},
	actions: {
	
	}
})

export default store
