import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		hasLogin: false,
		user: {},
		token:'',
	},
	mutations: {
		authLogin(state, provider) {
			
			state.hasLogin = true
			state.user = provider
			state.token = provider.mpuser.token
			uni.setStorage({
			    key: 'user',  
			    data: provider  
			})
			uni.setStorage({
			    key: 'token',  
			    data: provider.mpuser.token
			})
		},
		logout(state) {
			state.hasLogin = false;
			state.user = {};
			state.token = ''; 
			uni.removeStorage({  
                key: 'user'  
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
