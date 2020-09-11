<template>  
    <view class="container">
		<view class="user-section">
			<image class="bg" src="/static/user-bg.jpg"></image>
			<view class="vip-card-box">
				<view class="b-btn">
					查看攻略
				</view>
				<view class="tit">
					<text class="yticon icon-iLinkapp-"></text>
					佣金
				</view>
				<text class="e-m">一次绑定，永久收益</text>
				<text class="e-b">邀请学生辅导交费，您就会有相应的佣金回馈，期待您一起和我们成长。</text>
			</view>
		</view>
		
		<view class="cover-container">
			<image class="arc" src="/static/arc.png"></image>
			<view class="tj-sction">
				<view class="tj-item">
					<text class="num">1028.8</text>
					<text>余额</text>
				</view>
				<view class="tj-item">
					<text class="num">2000</text>
					<text>佣金</text>
				</view>
				<view class="tj-item">
					<text class="num">200</text>
					<text>备佣金</text>
				</view>
			</view>
			<view class="tj-sction">
				<view class="tj-item">
					<text class="num">1028.8</text>
					<text>分红</text>
				</view>
				<view class="tj-item">
					<text class="num">2000</text>
					<text>红包</text>
				</view>
				<view class="tj-item">
					<text class="num">2000</text>
					<text>投资金</text>
				</view>
			</view>
			<view class="tj-sction margin-top-sm">
				<view class="tj-item">
					<text style="font-size: 50rpx;color:#ff0000;">总资产</text>
				</view>
				<view class="tj-item">
					<text style="font-size: 80rpx;color:#ff0000;" class="num">￥1021028.82</text>
				</view>
				
			</view>
			<view class="order-section">
				<view class="order-item" @click="navTo('/pages/my/money-log?state=0')" hover-class="common-hover"  :hover-stay-time="50">
					<text class="yticon icon-shouye"></text>
					<text>明细</text>
				</view>
				<view class="order-item" @click="navTo('/pages/order/order?state=1')"  hover-class="common-hover" :hover-stay-time="50">
					<text class="yticon icon-daifukuan"></text>
					<text>投资</text>
				</view>
				<view class="order-item" @click="navTo('/pages/order/order?state=2')" hover-class="common-hover"  :hover-stay-time="50">
					<text class="yticon icon-yishouhuo"></text>
					<text>转账</text>
				</view>
				<view class="order-item" @click="navTo('/pages/order/order?state=4')" hover-class="common-hover"  :hover-stay-time="50">
					<text class="yticon icon-shouhoutuikuan"></text>
					<text>提现</text>
				</view>
			</view>
			<view class="history-section icon">
				<listCell icon="icon-tuandui" iconColor="#e07472" title="我的推荐" tips="谁拉的我" @eventClick="navTo('/pages/public/icon-all')"></listCell>
				<listCell icon="icon-weixin" iconColor="#5fcda2" title="我的好友" tips="我拉的谁" @eventClick="navTo('/pages/address/address')"></listCell>
				<listCell icon="icon-dianzan-ash" iconColor="#9789f7" title="龙虎榜" tips="意想不到的他在第几层"></listCell>
				<listCell icon="icon-iconfontweixin" iconColor="#ee883b" title="孩子红包" tips="看看神兽的小金库"></listCell>
				<listCell icon="icon-iLinkapp-" iconColor="#54b4ef" title="挖宝" tips="看看神兽的小金库"></listCell>
				
			</view>
			
		</view>
			
		
    </view>  
</template>  
<script>  
	import listCell from '@/components/mix-list-cell';
    import { mapState } from 'vuex';  
	let startY = 0, moveY = 0, pageAtTop = true;
    export default {
		components: {
			listCell
		},
		data(){
			return {
				coverTransform: 'translateY(0px)',
				coverTransition: '0s',
				moving: false,
				isBarShow:false,
				opacityBar:'opacity:0;'
			}
		},
		onLoad(){
			
		},
        computed: {
			...mapState(['hasLogin','userInfo'])
		},
        methods: {

			/**
			 * 统一跳转接口,拦截未登录路由
			 * navigator标签现在默认没有转场动画，所以用view
			 */
			navTo(url){
				if(0&&!this.hasLogin){
					url = '/pages/public/login';
				}
				uni.navigateTo({  
					url
				})  
			},
			
        }  
    }  
</script>  
<style lang='scss'>
	@import "colorui/mix-mall-shop-base";
	%flex-center {
	 display:flex;
	 flex-direction: column;
	 justify-content: center;
	 align-items: center;
	}
	%section {
	  display:flex;
	  justify-content: space-around;
	  align-content: center;
	  background: #fff;
	  border-radius: 10rpx;
	}

	.user-section{
		height: 520rpx;
		padding: 100rpx 30rpx 0;
		position:relative;
		.bg{
			position:absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			filter: blur(1px);
			opacity: .7;
		}
	}
	.user-info-box{
		height: 180rpx;
		display:flex;
		align-items:center;
		position:relative;
		z-index: 1;
		.portrait{
			width: 130rpx;
			height: 130rpx;
			border:5rpx solid #fff;
			border-radius: 50%;
		}
		.username{
			font-size: $uni-font-size-lg + 6rpx;
			color: $uni-text-color-dark;
			margin-left: 20rpx;
		}
	}

	.vip-card-box{
		display:flex;
		flex-direction: column;
		color: #f7d680;
		height: 240rpx;
		background: linear-gradient(left, rgba(0,0,0,.7), rgba(0,0,0,.8));
		border-radius: 16rpx 16rpx 0 0;
		overflow: hidden;
		position: relative;
		padding: 20rpx 24rpx;
		.card-bg{
			position:absolute;
			top: 20rpx;
			right: 0;
			width: 380rpx;
			height: 260rpx;
		}
		.b-btn{
			position: absolute;
			right: 20rpx;
			top: 16rpx;
			width: 132rpx;
			height: 40rpx;
			text-align: center;
			line-height: 40rpx;
			font-size: 24rpx;
			color: #36343c;
			border-radius: 20px;
			background: linear-gradient(left, #f9e6af, #ffd465);
			z-index: 1;
		}
		.tit{
			font-size: $uni-font-size-base+2rpx;
			color: #f7d680;
			margin-bottom: 28rpx;
			.yticon{
				color: #f6e5a3;
				margin-right: 16rpx;
			}
		}
		.e-b{
			font-size: $uni-font-size-sm;
			color: #d8cba9;
			margin-top: 10rpx;
		}
	}
	.cover-container{
		margin-top: -200rpx;
		padding: 0 30rpx;
		position:relative;
		background: #f5f5f5;
		padding-bottom: 20rpx;
		.arc{
			position:absolute;
			left: 0;
			top: -34rpx;
			width: 100%;
			height: 36rpx;
		}
	}
	.tj-sction{
		@extend %section;
		.tj-item{
			@extend %flex-center;
			flex-direction: column;
			height: 140rpx;
			font-size: $uni-font-size-sm;
			color: #75787d;
		}
		.num{
			font-size: $uni-font-size-lg;
			color: $uni-text-color-dark;
			margin-bottom: 8rpx;
		}
	}
	.order-section{
		@extend %section;
		padding: 28rpx 0;
		margin-top: 20rpx;
		.order-item{
			@extend %flex-center;
			width: 120rpx;
			height: 120rpx;
			border-radius: 10rpx;
			font-size: $uni-font-size-sm;
			color: $uni-text-color-dark;
		}
		.yticon{
			font-size: 48rpx;
			margin-bottom: 18rpx;
			color: #fa436a;
		}
		.icon-shouhoutuikuan{
			font-size:44rpx;
		}
	}
	.history-section{
		padding: 30rpx 0 0;
		margin-top: 20rpx;
		background: #fff;
		border-radius:10rpx;
		.sec-header{
			display:flex;
			align-items: center;
			font-size: $uni-font-size-base;
			color: $uni-text-color-dark;
			line-height: 40rpx;
			margin-left: 30rpx;
			.yticon{
				font-size: 44rpx;
				color: #5eba8f;
				margin-right: 16rpx;
				line-height: 40rpx;
			}
		}
		.h-list{
			white-space: nowrap;
			padding: 30rpx 30rpx 0;
			image{
				display:inline-block;
				width: 160rpx;
				height: 160rpx;
				margin-right: 20rpx;
				border-radius: 10rpx;
			}
		}
	}
</style>