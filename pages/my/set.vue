<template>
	<view class="container">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText"></block>
			<block slot="content">设置</block>
		</cu-custom>
		<view class="list-cell b-b m-t" @click="navTo('个人资料')" hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit">个人资料</text>
			<text class="cell-more yticon icon-you"></text>
		</view>
		<view class="list-cell b-b" @click="navTo('收货地址')" hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit">收货地址</text>
			<text class="cell-more yticon icon-you"></text>
		</view>
		<view class="list-cell" @click="navTo('实名认证')" hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit">实名认证</text>
			<text class="cell-more yticon icon-you"></text>
		</view>
		
		<view class="list-cell m-t">
			<text class="cell-tit">消息推送</text>
			<switch checked color="#fa436a" @change="switchChange" />
		</view>
		<view class="list-cell m-t b-b" @click="navTo('清除缓存')" hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit">清除缓存</text>
			<text class="cell-more yticon icon-you"></text>
		</view>
		<view class="list-cell b-b" @click="navTo('关于Dcloud')" hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit">关于Dcloud</text>
			<text class="cell-more yticon icon-you"></text>
		</view>
		<view class="list-cell">
			<text class="cell-tit">检查更新</text>
			<text class="cell-tip">当前版本 1.0.3</text>
			<text class="cell-more yticon icon-you"></text>
		</view>
		<view class="list-cell log-out-btn" @click="toLogout">
			<text class="cell-tit">退出登录</text>
		</view>
	</view>
</template>

<script>
	import {  
	    mapMutations  
	} from 'vuex';
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			...mapMutations(['logout']),

			navTo(url){
				this.$api.msg(`跳转到${url}`);
			},
			//退出登录
			toLogout(){
				uni.showModal({
				    content: '确定要退出登录么',
				    success: (e)=>{
				    	if(e.confirm){
				    		this.logout();
				    		setTimeout(()=>{
				    			uni.navigateBack();
				    		}, 200)
				    	}
				    }
				});
			},
			//switch
			switchChange(e){
				let statusTip = e.detail.value ? '打开': '关闭';
				this.$api.msg(`${statusTip}消息推送`);
			},

		}
	}
</script>

<style lang='scss'>
	@import "colorui/mix-mall-shop-base";
	
	page{
		background: $uni-color-base;
	}
	.list-cell{
		display:flex;
		align-items:baseline;
		padding: 20rpx $uni-spacing-row-base;
		line-height:60rpx;
		position:relative;
		background: #fff;
		justify-content: center;
		&.log-out-btn{
			margin-top: 40rpx;
			.cell-tit{
				color: $uni-base-color;
				text-align: center;
				margin-right: 0;
			}
		}
		&.cell-hover{
			background:#fafafa;
		}
		&.b-b:after{
			left: 30rpx;
		}
		&.m-t{
			margin-top: 16rpx; 
		}
		.cell-more{
			align-self: baseline;
			font-size:$uni-font-size-lg;
			color:$uni-text-color-grey;
			margin-left:10rpx;
		}
		.cell-tit{
			flex: 1;
			font-size: $uni-font-size-base + 2rpx;
			color: $uni-text-color-dark;
			margin-right:10rpx;
		}
		.cell-tip{
			font-size: $uni-font-size-base;
			color: $uni-text-color-grey;
		}
		switch{
			transform: translateX(16rpx) scale(.84);
		}
	}
</style>
