<template>  
    <view class="container">
		<view class="user-section">
			<image class="bg" src="/static/bg-imag-005.jpg"></image>
			<view class="user-info-box">
				<view class="portrait-box">
					<image class="portrait" :src="'/static/logo_yingchao.png'"></image>
				</view>
				<view class="info-box">
					<text class="username">{{'未登录'}}</text>
				</view>
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
					<text class="num">2000</text>
					<text>红包</text>
				</view>
				<view class="tj-item">
					<text class="num">1028.8</text>
					<text>分红</text>
				</view>
				<view class="tj-item">
					<text class="num">2000</text>
					<text>成本</text>
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
				<view class="order-item" hover-class="common-hover"  :hover-stay-time="50">
					<text class="yticon icon-shouye"></text>
					<text>收支明细</text>
				</view>
				<view class="order-item" hover-class="common-hover" :hover-stay-time="50">
					<text class="yticon icon-daifukuan"></text>
					<text>关爱一下</text>
				</view>
				<view class="order-item" hover-class="common-hover"  :hover-stay-time="50">
					<text class="yticon icon-yishouhuo"></text>
					<text>给他转账</text>
				</view>
				<view class="order-item" hover-class="common-hover"  :hover-stay-time="50">
					<text class="yticon icon-shouhoutuikuan"></text>
					<text>挖宝互动</text>
				</view>
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
			this.childrenInit()
		},
        computed: {
			...mapState(['hasLogin','userInfo'])
		},
        methods: {
			async childrenInit(){
				let result = await this.$request({
					method:'/api/children',
					data:{}
				})
				console.log(result)
				if(result.code == 10000){
					this.allMenuGridList = result.data
				}else{
					uni.showModal({
						content:result.msg
					})
				}
			},
			babyChange(){
				
			},
			navTo(url){
				if(0&&!this.hasLogin){
					url = '/pages/public/login';
				}
				uni.navigateTo({  
					url
				})  
			},
			navToNologin(url){
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
	
</style>