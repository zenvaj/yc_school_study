<template>
	<view class="container">
		<view class="left-bottom-sign"></view>
		<view class="back-btn yticon icon-zuojiantou-up" @click="navBack"></view>
		<view class="right-top-sign"></view>
		<!-- 设置白色背景防止软键盘把下部绝对定位元素顶上来盖住输入框等 -->
		
		<view class="wrapper">
			<view class="left-top-sign">welcome IRIS</view>
			<view class="welcome">
				欢迎！
			</view>
			<!-- #ifndef MP -->
			<view class="input-content">
				<view class="input-item">
					<text class="tit">颖超学号</text>
					<input 
						type="number" 
						:value="username" 
						placeholder="请输入颖超学号"
						maxlength="11"
						data-key="username"
						@input="Input('username',$event)"
					/>
				</view>
				<view class="input-item">
					<text class="tit">密码</text>
					<input 
						type="password" 
						value="" 
						placeholder="6-18位不含特殊字符的数字、字母组合"
						placeholder-class="input-empty"
						maxlength="20"
						password 
						data-key="password"
						@input="Input('password',$event)"
						@confirm="toLogin"
					/>
				</view>
			</view>
			<button class="confirm-btn" @click="toLogin" >登录</button>
			<!-- #endif -->
			<!-- #ifdef MP -->
			<view class="cu-item text-center">
					<image src="../../static/logo_yingchao.png" style="width: 300rpx; height: 300rpx;" mode="aspectFit"></image>
			</view>
			<view class="flex-sub text-center">
				<view class="text-xl ">
					<text class="text-black text-bold">颖超教育培训学校</text>
				</view>
				<view class="padding">脱颖而出，超群绝伦</view>
			</view>
			<!-- #endif -->
		</view> 
		<view class="login-footer">
			<view class="footer-tip flex">登录方式</view>
			<view class="footer-other flex">
				<!-- #ifdef MP-QQ -->
				<view class="other-list">
					<image src="../../static/ic-QQ@2x.png" mode="aspectFill" @tap="login_qq()"></image>
				</view>
				<!-- #endif -->
				<!-- #ifdef MP-WEIXIN -->
				<view class="other-list">
					<image src="../../static/ic-weixin@2x.png" mode="aspectFill" @tap="login_weixin()"></image>
				</view>
				<!-- #endif -->
				<!-- #ifdef APP-PLUS -->
				<!-- #endif -->
			</view>
		</view>
		<view class="cu-modal" :class="isModal?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">选择登录方式
					</view>
					<view class="action" @tap="isModal = false">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="">
					<view class="cu-form-group margin-top-sm">
						<view class="title cu-avatar radius" :style="'background-image:url('+auth_userinfo.headerpic||'/static/errorImage.jpg' +');'"></view>{{auth_userinfo.nickname}}
					</view>
					<view class="cu-form-group margin-top-sm">
						<view class="title">颖超学号</view>
						<input placeholder="已有帐号学号" :value="username" @input="Input('username',$event)">
					</view>
					<view class="cu-form-group ">
						<view class="title">账号密码</view>
						<input password placeholder="已有账号密码" @input="Input('password',$event)">
					</view>
					<view class="cu-form-group ">
						<view class="text-gray text-xs">PS:注册新账号不需要填写账号密码信息</view>
					</view>
				</view>
				<view class="cu-bar bg-white">
					<view class="action margin-0 flex-sub text-green " @tap="auth_regin">
						<text class="cuIcon-discoverfill"></text>注册新账号</view>
					<view class="action margin-0 flex-sub text-green solid-left" @tap="auth_bind">绑定已有账号</view>
					<view class="action margin-0 flex-sub  solid-left" @tap="isModal = false">取消</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {mapState,mapMutations} from 'vuex';
	
	export default{
		data(){
			return {
				username: '',
				password: '',
				isModal:false,
				modalTitle:"",
				auth_userinfo:{},
				auth_type:'wx_auth'
			}
		},
		onLoad(){
			if(this.hasLogin){
				uni.navigateBack()
			}
		},
		computed: {
			...mapState(['hasLogin','user'])
		},
		methods: {
			...mapMutations(['authLogin']),
			Input(key,e){
				//console.log(key,e.detail.value)
				this[key] = e.detail.value;
			},
			navBack(){
				uni.navigateBack();
			},
			async toLogin(){
				uni.showLoading({
					title: '登陆中...',
					mask: true
				});
				if(this.username == '' || this.password == ''){
					uni.showModal({
						content:"学号和密码不能为空。"
					})
					uni.hideLoading();
					return;
				}
				let data = {username:this.username,password:this.password,type:"password"}
				this.auth_login(data)
			},
			// #1ifdef MP-QQ
			//QQ登录
			login_qq() {
				// uni.getProvider({
				//     service: 'oauth',
				//     success: function (res) {
				//         console.log(res.provider)
				//         if (~res.provider.indexOf('qq')) {
				//             uni.login({
				//                 provider: 'qq',
				//                 success: function (loginRes) {
				//                     console.log(JSON.stringify(loginRes));
				//                 }
				//             });
				//         }
				//     }
				// });
				// return;
				// qq.getSetting({ 
				//    success(res) {
				//       console.log(res.authSetting)
				//    }
				// })
				// return
				uni.showLoading({
					title: '登陆中...',
					mask: true
				});
				this.auth_type = 'qq_auth'
				uni.login({
					provider: 'qq',
					success: (loginRes) => {
						// 获取用户信息
						uni.getUserInfo({
							provider: 'qq',
							success: async (infoRes) => {
								//console.log('qq2',loginRes)
								//console.log('qq3',infoRes)
								// 获取用户信息 openid
								const userInfo = await this.$request({
									method:'/api/auth_qq',
									data:{js_code:loginRes.code,infoRes:infoRes.userInfo}
								})
								this.auth_userinfo = userInfo.data
								// this.$request({
								// 	method:'/api/test/logsave',
								// 	data:{loginRes:loginRes,infoRes:infoRes}
								// });
								if(this.auth_userinfo.userid > 0){
									//用qq openid的方式去登录
									let data = {openid:this.auth_userinfo.openid,type:this.auth_type,method:"login"}
									this.auth_login(data)
								}else{
									//重新注册还是绑定已有账号
									this.isModal = true
									uni.hideLoading();
								}
							},
							fail :(e)=>{
								console.log(e);
								this.$request({
									method:'/api/test/logsave',
									data:{'uni.getuserinfo.fail qq':e}
								});
								this.$api.msg("获取信息未知错误");
								uni.hideLoading();
							}
						});
					},
					fail :(e) =>{
						console.log(e);
						this.$request({
							method:'/api/test/logsave',
							data:{'uni.login.fail qq':e}
						});
						this.$api.msg("未知登录错误");
						uni.hideLoading();
					}
				});
			},
			// #1endif
			// #1ifdef MP-WEIXIN
			//微信登录
			 login_weixin() {
				 uni.showLoading({
				 	title: '登陆中...',
				 	mask: true
				 });
				 this.auth_type = 'qq_auth'
				uni.login({
					provider: 'weixin',
					success: (loginRes) =>  {
						uni.getUserInfo({
							provider: 'weixin',
							success: async (infoRes) => {
								//console.log('weixin1',loginRes)
								//console.log('weixin2',infoRes)
								// 获取用户信息 openid
								const userInfo = await this.$request({
									method:'/api/auth_wx',
									data:{js_code:loginRes.code,infoRes:infoRes.userInfo}
								})
								this.auth_userinfo = userInfo.data
								// this.$request({
								// 	method:'/api/test/logsave',
								// 	data:{'uni.getuserinfo.success':userInfo}
								// });
								if(this.auth_userinfo.userid > 0){
									//用微信openid的方式去登录
									let data = {openid:this.auth_userinfo.openid,type:this.auth_type,method:"login"}
									this.auth_login(data)
								}else{
									//重新注册还是绑定已有账号
									this.isModal = true
									uni.hideLoading();
								}
							},
							fail :(e)=>{
								console.log(e);
								this.$request({
									method:'/api/test/logsave',
									data:{'uni.getuserinfo.fail wx':e}
								});
								this.$api.msg("获取信息未知错误");
								uni.hideLoading();
							}
						})
					},
					fail :(e) =>{
						console.log(e);
						this.$request({
							method:'/api/test/logsave',
							data:{'uni.login.fail wx':e}
						});
						this.$api.msg("未知登录错误");
						uni.hideLoading();
					}
				})
			},
			// #1endif
			auth_regin(){
				uni.showLoading({
					title: '登陆中...',
					mask: true
				});
				let data = {username:this.username,password:this.password,openid:this.auth_userinfo.openid,type:this.auth_type,method:"regin"}
				this.auth_login(data)
			},
			auth_bind(){
				uni.showLoading({
					title: '登陆中...',
					mask: true
				});
				let data = {username:this.username,password:this.password,openid:this.auth_userinfo.openid,type:this.auth_type,method:"bind"}
				this.auth_login(data)
			},
			async auth_login(data){
				const result = await this.$request({
					method:'/api/login',
					data:data
				});
				// console.log(result)
				// this.$request({
				// 	method:'/api/test/logsave',
				// 	data:{'auth_login.re./api/login':result}
				// });
				if(result.code == 10000){
					this.authLogin(result.data)
					uni.reLaunch({url:"/pages/index/index"})
				}else{
					this.$api.msg(result.msg||"未知登录错误");
				}
				uni.hideLoading();
			}
		},

	}
</script>

<style lang='scss'>
	page{
		background: #fff;
	}
	.container{
		padding-top: 115px;
		position:relative;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		background: #fff;
	}
	.wrapper{
		position:relative;
		z-index: 90;
		background: #fff;
		padding-bottom: 40rpx;
	}
	.back-btn{
		position:absolute;
		left: 40rpx;
		z-index: 9999;
		padding-top: var(--status-bar-height);
		top: 40rpx;
		font-size: 40rpx;
		color: $uni-text-color-dark;
	}
	.left-top-sign{
		font-size: 120rpx;
		color: $uni-color-base;
		position:relative;
		left: -16rpx;
	}
	.right-top-sign{
		position:absolute;
		top: 80rpx;
		right: -30rpx;
		z-index: 95;
		&:before, &:after{
			display:block;
			content:"";
			width: 400rpx;
			height: 80rpx;
			background: #b4f3e2;
		}
		&:before{
			transform: rotate(50deg);
			border-radius: 0 50px 0 0;
		}
		&:after{
			position: absolute;
			right: -198rpx;
			top: 0;
			transform: rotate(-50deg);
			border-radius: 50px 0 0 0;
			/* background: pink; */
		}
	}
	.left-bottom-sign{
		position:absolute;
		left: -270rpx;
		bottom: -320rpx;
		border: 100rpx solid #d0d1fd;
		border-radius: 50%;
		padding: 180rpx;
	}
	.welcome{
		position:relative;
		left: 50rpx;
		top: -90rpx;
		font-size: 46rpx;
		color: #555;
		text-shadow: 1px 0px 1px rgba(0,0,0,.3);
	}
	.input-content{
		padding: 0 60rpx;
	}
	.input-item{
		display:flex;
		flex-direction: column;
		align-items:flex-start;
		justify-content: center;
		padding: 0 30rpx;
		background:$uni-color-light;
		height: 120rpx;
		border-radius: 4px;
		margin-bottom: 50rpx;
		&:last-child{
			margin-bottom: 0;
		}
		.tit{
			height: 50rpx;
			line-height: 56rpx;
			font-size: $uni-font-size-sm+2rpx;
			color: $uni-text-color;
		}
		input{
			height: 60rpx;
			font-size: $uni-font-size-base + 2rpx;
			color: $uni-text-color-dark;
			width: 100%;
		}	
	}

	.confirm-btn{
		width: 630rpx;
		height: 76rpx;
		line-height: 76rpx;
		border-radius: 50px;
		margin-top: 70rpx;
		background: $uni-color-primary;
		color: #fff;
		font-size: $uni-font-size-lg;
		&:after{
			border-radius: 100px;
		}
	}
	.forget-section{
		font-size: $uni-font-size-sm+2rpx;
		color: $uni-text-color-spec;
		text-align: center;
		margin-top: 40rpx;
	}
	.register-section{
		position:absolute;
		left: 0;
		bottom: 50rpx;
		width: 100%;
		font-size: $uni-font-size-sm+2rpx;
		color: $uni-text-color;
		text-align: center;
		text{
			color: $uni-text-color-spec;
			margin-left: 10rpx;
		}
	}
	.login-footer {
		padding: 0 70upx;
	
		.footer-tip {
			align-items: center;
			font-size: 24upx;
			color: #999999;
			text-align: center;
	
			&:before {
				flex: 1;
				content: '';
				height: 2upx;
				background: #D0D0D0;
				margin-right: 30upx;
			}
	
			&:after {
				margin-left: 30upx;
				flex: 1;
				content: '';
				height: 2upx;
				background: #D0D0D0;
			}
	
		}
	
		.footer-other {
			padding: 40upx 0 100upx 0;
			justify-content: center;
	
			.other-list {
				width: 80upx;
				height: 80upx;
				margin: 0 75upx;
	
				image {
					width: 100%;
					height: 100%;
				}
			}
		}
	}
</style>
