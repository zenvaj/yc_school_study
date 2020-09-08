<template>
	<view class="container">
		<view class="left-bottom-sign"></view>
		<view class="back-btn yticon icon-zuojiantou-up" @click="navBack"></view>
		<view class="right-top-sign"></view>
		<!-- 设置白色背景防止软键盘把下部绝对定位元素顶上来盖住输入框等 -->
		<view class="wrapper">
			<view class="left-top-sign">LOGIN</view>
			<view class="welcome">
				欢迎回来！
			</view>
			<view class="input-content">
				<view class="input-item">
					<text class="tit">手机号码</text>
					<input 
						type="number" 
						:value="mobile" 
						placeholder="请输入手机号码"
						maxlength="11"
						data-key="mobile"
						@input="inputChange"
					/>
				</view>
				<view class="input-item">
					<text class="tit">密码</text>
					<input 
						type="mobile" 
						value="" 
						placeholder="8-18位不含特殊字符的数字、字母组合"
						placeholder-class="input-empty"
						maxlength="20"
						password 
						data-key="password"
						@input="inputChange"
						@confirm="toLogin"
					/>
				</view>
			</view>
			<button class="confirm-btn" @click="toLogin" :disabled="logining">登录</button>
		</view>
		<!-- #ifdef MP -->
		<view class="login-footer">
			<view class="footer-tip flex">其他登录方式</view>
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
			</view>
		</view>
		<!-- #endif -->
	</view>
</template>

<script>
	import {  
        mapMutations  
    } from 'vuex';
	
	export default{
		data(){
			return {
				mobile: '',
				password: '',
				logining: false,
				isMP:false,
			}
		},
		onLoad(){
			
		},
		methods: {
			...mapMutations(['login']),
			inputChange(e){
				const key = e.currentTarget.dataset.key;
				this[key] = e.detail.value;
			},
			navBack(){
				uni.navigateBack();
			},
			toRegist(){
				this.$api.msg('去注册');
			},
			async toLogin(){
				this.logining = true;
				const {mobile, password} = this;
				/* 数据验证模块
				if(!this.$api.match({
					mobile,
					password
				})){
					this.logining = false;
					return;
				}
				*/
				const sendData = {
					mobile,
					password
				};
				const result = await this.$api.json('userInfo');
				if(result.status === 1){
					this.login(result.data);
                    uni.navigateBack();  
				}else{
					this.$api.msg(result.msg);
					this.logining = false;
				}
			},
			// #ifdef MP-QQ
			//QQ登录
			login_qq() {
				let _this = this;
				uni.getUserInfo({
					provider: 'qq',
					success: infoRes => {
						console.log('qq1',infoRes)
						console.log('weixin',infoRes)
						var userinfo = {
							id: infoRes.userInfo.gender,
							mobile: infoRes.userInfo.province,
							nickname: infoRes.userInfo.nickName,
							portrait: infoRes.userInfo.avatarUrl,
						}
						this.login(userinfo);
						uni.navigateBack();
					},
					fail:function(){
						uni.login({
							provider: 'qq',
							success: function(loginRes) {
								// 获取用户信息
								uni.getUserInfo({
									provider: 'qq',
									success: function(infoRes) {
										console.log('qq2',loginRes,infoRes)
									}
								});
							}
						});
					}
				});
			},
			// #endif
			// #ifdef MP-WEIXIN
			//微信登录
			login_weixin() {
				let _this = this;
				uni.getUserInfo({
					provider: 'weixin',
					success: infoRes => {
						console.log('weixin',infoRes)
						var userinfo = {
							id: infoRes.userInfo.gender,
							mobile: infoRes.userInfo.province,
							nickname: infoRes.userInfo.nickName,
							portrait: infoRes.userInfo.avatarUrl,
						}
						this.login(userinfo);
						uni.navigateBack();  
					},
					fali:function(){
						uni.login({
							provider: 'weixin',
							success: function(loginRes) {
								// 获取用户信息
								uni.getUserInfo({
									provider: 'weixin',
									success: function(infoRes) {
										console.log('weixin',loginRes,infoRes)
									}
								});
							}
						});
					}
				});
			},
			// #endif
			
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
