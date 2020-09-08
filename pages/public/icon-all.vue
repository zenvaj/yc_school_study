<template>
	<view class="">
		<view class="order-item" v-for="(item,index) in iconArr">
			<text class="yticon" :class="item"></text>
			<text>{{item}}</text>
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
				opacityBar:'opacity:0;',
				iconArr:[],
			}
		},
		onLoad(){
			this.iconArr = ["icon-yiguoqi1",
			"icon-iconfontshanchu1",
			"icon-iconfontweixin",
			"icon-alipay",
			"icon-shang",
			"icon-shouye",
			"icon-shanchu4",
			"icon-xiaoxi",
			"icon-jiantour-copy",
			"icon-fenxiang2",
			"icon-pingjia",
			"icon-daifukuan",
			"icon-pinglun-copy",
			"icon-dianhua-copy",
			"icon-shoucang",
			"icon-xuanzhong2",
			"icon-gouwuche_",
			"icon-icon-test",
			"icon-icon-test1",
			"icon-bianji",
			"icon-jiazailoading-A",
			"icon-zuoshang",
			"icon-jia2",
			"icon-huifu",
			"icon-sousuo",
			"icon-arrow-fine-up",
			"icon-hot",
			"icon-lishijilu",
			"icon-zhengxinchaxun-zhifubaoceping-",
			"icon-naozhong",
			"icon-xiatubiao--copy",
			"icon-shoucang_xuanzhongzhuangtai",
			"icon-jia1",
			"icon-bangzhu1",
			"icon-arrow-left-bottom",
			"icon-arrow-right-bottom",
			"icon-arrow-left-top",
			"icon-icon--",
			"icon-zuojiantou-up",
			"icon-xia",
			"icon--jianhao",
			"icon-weixinzhifu",
			"icon-comment",
			"icon-weixin",
			"icon-fenlei1",
			"icon-erjiye-yucunkuan",
			"icon-Group-",
			"icon-you",
			"icon-forward",
			"icon-tuijian",
			"icon-bangzhu",
			"icon-share",
			"icon-yiguoqi",
			"icon-shezhi1",
			"icon-fork",
			"icon-kafei",
			"icon-iLinkapp-",
			"icon-saomiao",
			"icon-shezhi",
			"icon-shouhoutuikuan",
			"icon-gouwuche",
			"icon-dizhi",
			"icon-fenlei",
			"icon-xingxing",
			"icon-tuandui",
			"icon-zuanshi",
			"icon-zuo",
			"icon-shoucang2",
			"icon-shouhuodizhi",
			"icon-yishouhuo",
			"icon-dianzan-ash",]
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