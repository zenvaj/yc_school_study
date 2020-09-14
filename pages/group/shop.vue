<template>
	<view class="container">
		<view class="carousel">
			<swiper indicator-dots circular=true duration="400">
				<swiper-item class="swiper-item" v-for="(item,index) in imgList" :key="index">
					<view class="image-wrapper">
						<image
							:src="item.src" 
							class="loaded" 
							mode="aspectFill"
						></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		
		<view class="introduce-section">
			<text class="title">颖超教育自营小店</text>
			
			<view class="bot-row">
				<text>销量: 108</text>
				<text>库存: 4690</text>
				<text>浏览量: 768</text>
			</view>
		</view>
		
		<view class="c-list" style="border-top: 2rpx solid #23f7ed;">
			<view class="c-row b-b">
				<text class="tit">促销活动</text>
				<view class="con-list">
					<text>新人首单送20元无门槛代金券</text>
					<text>订单满50减10</text>
					<text>订单满100减30</text>
					<text>单笔购买满两件免邮费</text>
				</view>
			</view>
		</view>
		<!--  分享 -->
		<view class="share-section" @click="share">
			<view class="share-icon">
				<text class="yticon icon-xingxing"></text>
				 返
			</view>
			<text class="tit">该商品分享可领49减10红包</text>
			<text class="yticon icon-bangzhu1"></text>
			<view class="share-btn">
				立即分享
				<text class="yticon icon-you"></text>
			</view>
		</view>
		
		<scroll-view scroll-x class="bg-white nav" style="border-bottom: 2rpx solid #23f7ed;">
			<view class="flex text-center" >
				<view class="cu-item flex-sub" :class="0==TabCur?'bg-gradual-blue1 cur':''" @tap="TabCur = 0">
					商品
				</view>
				<view class="cu-item flex-sub" :class="1==TabCur?'bg-gradual-blue2 cur':''" @tap="TabCur = 1">
					评价
				</view>
				<view class="cu-item flex-sub" :class="2==TabCur?'bg-gradual-blue1 cur':''" @tap="TabCur = 2">
					门店介绍
				</view>
			</view>
		</scroll-view>
		
		<view class="goods" style="padding-bottom: 200rpx;" v-if="0==TabCur">
			<!-- 列表 -->
			<view class="cart-list">
				<block v-for="(item, index) in cartList" :key="index">
					<view
						class="cart-item" 
						:class="{'b-b': index!==cartList.length-1}"
					>
						<view class="image-wrapper">
							<image :src="item.image" 
								:class="[item.loaded]"
								mode="aspectFill" 
								lazy-load 
								@load="onImageLoad('cartList', index)" 
								@error="onImageError('cartList', index)"
							></image>
						</view>
						<view class="item-right">
							<text class="clamp title">{{item.title}}</text>
							<text class="attr">{{item.attr_val}}</text>
							<text class="price">¥{{item.price}}</text>
							<view class="uni-numbox">
								<view class="uni-numbox-minus" 
									@click="_calcValue('subtract')"
								>
									<text class="yticon icon--jianhao" :class="minDisabled?'uni-numbox-disabled': ''" ></text>
								</view>
								<input 
									class="uni-numbox-value" 
									type="number" 
									disabled
									:value="inputValue" 
									
									@blur="_onBlur"
								>
								<view 
									class="uni-numbox-plus" 
									@click="_calcValue('add')"
								>
									<text class="yticon icon-jia2" :class="maxDisabled?'uni-numbox-disabled': ''" ></text>
								</view>
							</view>
						</view>
					</view>
				</block>
			</view>
			
			<!-- 底部菜单栏 -->
			<view class="action-section page-bottom">
				<view class="checkbox">
				</view>
				<view class="total-box">
					<text class="price">¥{{total}}</text>
					<text class="coupon">
						已优惠
						<text>74.35</text>
						元
					</text>
				</view>
				<view class="action-btn-group">
					<button type="primary" class=" action-btn no-border buy-now-btn" @click="buy">立即购买</button>
					<button type="primary" class=" action-btn no-border add-cart-btn">找人代付</button>
				</view>
				<!-- <button type="primary" class="no-border confirm-btn" @click="createOrder">去结算</button> -->
			</view>
		</view>
		<view class="buy-comment" v-if="1==TabCur">
			<!-- 评价 -->
			<view class="eva-section">
				<view class="e-header">
					<text class="tit">评价</text>
					<text>(86)</text>
					<text class="tip">好评率 100%</text>
					<text class="yticon icon-you"></text>
				</view> 
				<view class="eva-box">
					<image class="portrait" src="http://img3.imgtn.bdimg.com/it/u=1150341365,1327279810&fm=26&gp=0.jpg" mode="aspectFill"></image>
					<view class="right">
						<text class="name">Leo yo</text>
						<text class="con">商品收到了，79元两件，质量不错，试了一下有点瘦，但是加个外罩很漂亮，我很喜欢</text>
						<view class="bot">
							<text class="attr">购买类型：XL 红色</text>
							<text class="time">2019-04-01 19:21</text>
						</view>
					</view>
				</view>
			</view>
			<view class="eva-section">
				<view class="e-header">
					<text class="tit">评价</text>
					<text>(86)</text>
					<text class="tip">好评率 100%</text>
					<text class="yticon icon-you"></text>
				</view> 
				<view class="eva-box">
					<image class="portrait" src="http://img3.imgtn.bdimg.com/it/u=1150341365,1327279810&fm=26&gp=0.jpg" mode="aspectFill"></image>
					<view class="right">
						<text class="name">Leo yo</text>
						<text class="con">商品收到了，79元两件，质量不错，试了一下有点瘦，但是加个外罩很漂亮，我很喜欢</text>
						<view class="bot">
							<text class="attr">购买类型：XL 红色</text>
							<text class="time">2019-04-01 19:21</text>
						</view>
					</view>
				</view>
			</view>
			<view class="eva-section">
				<view class="e-header">
					<text class="tit">评价</text>
					<text>(86)</text>
					<text class="tip">好评率 100%</text>
					<text class="yticon icon-you"></text>
				</view> 
				<view class="eva-box">
					<image class="portrait" src="http://img3.imgtn.bdimg.com/it/u=1150341365,1327279810&fm=26&gp=0.jpg" mode="aspectFill"></image>
					<view class="right">
						<text class="name">Leo yo</text>
						<text class="con">商品收到了，79元两件，质量不错，试了一下有点瘦，但是加个外罩很漂亮，我很喜欢</text>
						<view class="bot">
							<text class="attr">购买类型：XL 红色</text>
							<text class="time">2019-04-01 19:21</text>
						</view>
					</view>
				</view>
			</view>
			
		</view>
		<view class="des" v-if="2==TabCur">
			<view class="c-list">
				<view class="c-row b-b">
					<text class="tit">优惠券</text>
					<text class="con t-r red">领取优惠券</text>
					<text class="yticon icon-you"></text>
				</view>
				<view class="c-row b-b">
					<text class="tit">促销活动</text>
					<view class="con-list">
						<text>新人首单送20元无门槛代金券</text>
						<text>订单满50减10</text>
						<text>订单满100减30</text>
						<text>单笔购买满两件免邮费</text>
					</view>
				</view>
				<view class="c-row b-b">
					<text class="tit">服务</text>
					<view class="bz-list con">
						<text>7天无理由退换货 ·</text>
						<text>假一赔十 ·</text>
					</view>
				</view>
			</view>
			
			<view class="detail-desc">
				<view class="d-header">
					<text>图文详情</text>
				</view>
				<rich-text :nodes="desc"></rich-text>
			</view>
			
		</view>
		
		<!-- 分享 -->
		<share 
			ref="share" 
			:contentHeight="580"
			:shareList="shareList"
		></share>
	</view>
</template>

<script>
	import share from '@/components/share';
	export default{
		components: {
			share
		},
		data() {
			return {
				inputValue:0,
				step:1,
				max:10,
				minDisabled: false,
				maxDisabled: false,
				TabCur:0,
				total: 0, //总价格
				allChecked: false, //全选状态  true|false
				empty: false, //空白页现实  true|false
				cartList: [],
				
				specClass: 'none',
				specSelected:[],
				
				favorite: true,
				shareList: [],
				imgList: [
					{
						src: 'https://gd3.alicdn.com/imgextra/i3/0/O1CN01IiyFQI1UGShoFKt1O_!!0-item_pic.jpg_400x400.jpg'
					},
					{
						src: 'https://gd3.alicdn.com/imgextra/i3/TB1RPFPPFXXXXcNXpXXXXXXXXXX_!!0-item_pic.jpg_400x400.jpg'
					},
					{
						src: 'https://gd2.alicdn.com/imgextra/i2/38832490/O1CN01IYq7gu1UGShvbEFnd_!!38832490.jpg_400x400.jpg'
					}
				],
				desc: `
					<div style="width:100%">
						<img style="width:100%;display:block;" src="https://gd3.alicdn.com/imgextra/i4/479184430/O1CN01nCpuLc1iaz4bcSN17_!!479184430.jpg_400x400.jpg" />
						<img style="width:100%;display:block;" src="https://gd2.alicdn.com/imgextra/i2/479184430/O1CN01gwbN931iaz4TzqzmG_!!479184430.jpg_400x400.jpg" />
						<img style="width:100%;display:block;" src="https://gd3.alicdn.com/imgextra/i3/479184430/O1CN018wVjQh1iaz4aupv1A_!!479184430.jpg_400x400.jpg" />
						<img style="width:100%;display:block;" src="https://gd4.alicdn.com/imgextra/i4/479184430/O1CN01tWg4Us1iaz4auqelt_!!479184430.jpg_400x400.jpg" />
						<img style="width:100%;display:block;" src="https://gd1.alicdn.com/imgextra/i1/479184430/O1CN01Tnm1rU1iaz4aVKcwP_!!479184430.jpg_400x400.jpg" />
					</div>
				`,
				specList: [
					{
						id: 1,
						name: '尺寸',
					},
					{	
						id: 2,
						name: '颜色',
					},
				],
				specChildList: [
					{
						id: 1,
						pid: 1,
						name: 'XS',
					},
					{
						id: 2,
						pid: 1,
						name: 'S',
					},
					{
						id: 3,
						pid: 1,
						name: 'M',
					},
					{
						id: 4,
						pid: 1,
						name: 'L',
					},
					{
						id: 5,
						pid: 1,
						name: 'XL',
					},
					{
						id: 6,
						pid: 1,
						name: 'XXL',
					},
					{
						id: 7,
						pid: 2,
						name: '白色',
					},
					{
						id: 8,
						pid: 2,
						name: '珊瑚粉',
					},
					{
						id: 9,
						pid: 2,
						name: '草木绿',
					},
				]
			};
		},
		async onLoad(options){
			
			//接收传值,id里面放的是标题，因为测试数据并没写id 
			let id = options.id;
			if(id){
				this.$api.msg(`点击了${id}`);
			}
			
			this.shareList = [{
					type: 1,
					icon: '/static/share_wechat.png',
					text: '微信好友'
				},
				{
					type: 2,
					icon: '/static/share_moment.png',
					text: '朋友圈'
				},
				{
					type: 3,
					icon: '/static/share_qq.png',
					text: 'QQ好友'
				},
				{
					type: 4,
					icon: '/static/share_qqzone.png',
					text: 'QQ空间'
				}
			]
			this.loadData();
		},
		methods:{
			//请求数据
			async loadData(){
				let list = await this.$api.json('cartList'); 
				let cartList = list.map(item=>{
					item.checked = true;
					return item;
				});
				this.cartList = cartList;
				this.calcTotal();  //计算总价
			},
			//分享
			share(){
				this.$refs.share.toggleMask();	
			},
			buy(){
				uni.navigateTo({
					url: `/pages/order/createOrder`
				})
			},
			//监听image加载完成
			onImageLoad(key, index) {
				this.$set(this[key][index], 'loaded', 'loaded');
			},
			//监听image加载失败
			onImageError(key, index) {
				this[key][index].image = '/static/errorImage.jpg';
			},
			_calcValue(type) {
				let value = this.inputValue;
				let newValue = 0;
				let step = this.step;
				
				if(type === 'subtract'){
					newValue = value - step;
					if (newValue <= 0){
						this.minDisabled = true;
					}
					if(newValue < this.max && this.maxDisabled === true){
						this.maxDisabled = false;
					}
				}else if(type === 'add'){
					newValue = value + step;
					if (newValue >= this.max){
						this.maxDisabled = true;
					}
					if(newValue > this.max){
						newValue = this.max
					}
					if(newValue > 0 && this.minDisabled === true){
						this.minDisabled = false;
					}
				}
				if(newValue === value){
					return;
				}
				this.inputValue = newValue ;
			},
			_onBlur(event) {
				let value = event.detail.value;
				if (!value) {
					this.inputValue = 0;
					return
				}
				value = +value;
				if (value > this.max) {
					value = this.max;
				} else if (value < this.min) {
					value = this.min
				}
			
				this.inputValue = value
			},
			//数量
			numberChange(data){
				this.cartList[data.index].number = data.number;
				this.calcTotal();
			},
			//计算总价
			calcTotal(){
				let list = this.cartList;
				let total = 0;
				let checked = true;
				list.forEach(item=>{
					if(item.checked === true){
						total += item.price * item.number;
					}else if(checked === true){
						checked = false;
					}
				})
				this.allChecked = checked;
				this.total = Number(total.toFixed(2));
			},
			//创建订单
			createOrder(){
				let list = this.cartList;
				let goodsData = [];
				list.forEach(item=>{
					if(item.checked){
						goodsData.push({
							attr_val: item.attr_val,
							number: item.number
						})
					}
				})
			
				uni.navigateTo({
					url: `/pages/order/createOrder?data=${JSON.stringify({
						goodsData: goodsData
					})}`
				})
				this.$api.msg('跳转下一页 sendData');
			}
		},

	}
</script>

<style lang='scss'>
	@import "colorui/mix-mall-shop-base";
	page{
		background: $uni-color-base;
		padding-bottom: 160rpx;
	}
	.icon-you{
		font-size: $uni-font-size-base + 2rpx;
		color: #888;
	}
	.carousel {
		height: 722rpx;
		position:relative;
		swiper{
			height: 100%;
		}
		.image-wrapper{
			width: 100%;
			height: 100%;
		}
		.swiper-item {
			display: flex;
			justify-content: center;
			align-content: center;
			height: 750rpx;
			overflow: hidden;
			image {
				width: 100%;
				height: 100%;
			}
		}
		
	}
	
	/* 标题简介 */
	.introduce-section{
		background: #fff;
		padding: 20rpx 30rpx;
		
		.title{
			font-size: 32rpx;
			color: $uni-text-color-dark;
			height: 50rpx;
			line-height: 50rpx;
		}
		.price-box{
			display:flex;
			align-items:baseline;
			height: 64rpx;
			padding: 10rpx 0;
			font-size: 26rpx;
			color:$uni-color-primary;
		}
		.price{
			font-size: $uni-font-size-lg + 2rpx;
		}
		.m-price{
			margin:0 12rpx;
			color: $uni-text-color-light;
			text-decoration: line-through;
		}
		.coupon-tip{
			align-items: center;
			padding: 4rpx 10rpx;
			background: $uni-color-primary;
			font-size: $uni-font-size-sm;
			color: #fff;
			border-radius: 6rpx;
			line-height: 1;
			transform: translateY(-4rpx); 
		}
		.bot-row{
			display:flex;
			align-items:center;
			height: 50rpx;
			font-size: $uni-font-size-sm;
			color: $uni-text-color-light;
			text{
				flex: 1;
			}
		}
	}
	/* 分享 */
	.share-section{
		display:flex;
		align-items:center;
		color: $uni-text-color;
		background: linear-gradient(left, #fdf5f6, #fbebf6);
		padding: 12rpx 30rpx;
		.share-icon{
			display:flex;
			align-items:center;
			width: 70rpx;
			height: 30rpx;
			line-height: 1;
			border: 1px solid $uni-color-primary;
			border-radius: 4rpx;
			position:relative;
			overflow: hidden;
			font-size: 22rpx;
			color: $uni-color-primary;
			&:after{
				content: '';
				width: 50rpx;
				height: 50rpx;
				border-radius: 50%;
				left: -20rpx;
				top: -12rpx;
				position:absolute;
				background: $uni-color-primary;
			}
		}
		.icon-xingxing{
			position:relative;
			z-index: 1;
			font-size: 24rpx;
			margin-left: 2rpx;
			margin-right: 10rpx;
			color: #fff;
			line-height: 1;
		}
		.tit{
			font-size: $uni-font-size-base;
			margin-left:10rpx;
		}
		.icon-bangzhu1{
			padding: 10rpx;
			font-size: 30rpx;
			line-height: 1;
		}
		.share-btn{
			flex: 1;
			text-align:right;
			font-size: $uni-font-size-sm;
			color: $uni-color-primary;
		}
		.icon-you{
			font-size: $uni-font-size-sm;
			margin-left: 4rpx;
			color: $uni-color-primary;
		}
	}
	
	.c-list{
		font-size: $uni-font-size-sm + 2rpx;
		color: $uni-text-color;
		background: #fff;
		.c-row{
			display:flex;
			align-items:center;
			padding: 20rpx 30rpx;
			position:relative;
		}
		.tit{
			width: 140rpx;
		}
		.con{
			flex: 1;
			color: $uni-text-color-dark;
			.selected-text{
				margin-right: 10rpx;
			}
		}
		.bz-list{
			height: 40rpx;
			font-size: $uni-font-size-sm+2rpx;
			color: $uni-text-color-dark;
			text{
				display: inline-block;
				margin-right: 30rpx;
			}
		}
		.con-list{
			flex: 1;
			display:flex;
			flex-direction: column;
			color: $uni-text-color-dark;
			line-height: 40rpx;
		}
		.red{
			color: $uni-color-primary;
		}
	}
	
	/* 评价 */
	.eva-section{
		display: flex;
		flex-direction: column;
		padding: 20rpx 30rpx;
		background: #fff;
		margin-top: 16rpx;
		.e-header{
			display: flex;
			align-items: center;
			height: 70rpx;
			font-size: $uni-font-size-sm + 2rpx;
			color: $uni-text-color-light;
			.tit{
				font-size: $uni-font-size-base + 2rpx;
				color: $uni-text-color-dark;
				margin-right: 4rpx;
			}
			.tip{
				flex: 1;
				text-align: right;
			}
			.icon-you{
				margin-left: 10rpx;
			}
		}
	}
	.eva-box{
		display: flex;
		padding: 20rpx 0;
		.portrait{
			flex-shrink: 0;
			width: 80rpx;
			height: 80rpx;
			border-radius: 100px;
		}
		.right{
			flex: 1;
			display: flex;
			flex-direction: column;
			font-size: $uni-font-size-base;
			color: $uni-text-color;
			padding-left: 26rpx;
			.con{
				font-size: $uni-font-size-base;
				color: $uni-text-color-dark;
				padding: 20rpx 0;
			}
			.bot{
				display: flex;
				justify-content: space-between;
				font-size: $uni-font-size-sm;
				color:$uni-text-color-light;
			}
		}
	}
	/*  详情 */
	.detail-desc{
		background: #fff;
		margin-top: 16rpx;
		.d-header{
			display: flex;
			justify-content: center;
			align-items: center;
			height: 80rpx;
			font-size: $uni-font-size-base + 2rpx;
			color: $uni-text-color-dark;
			position: relative;
				
			text{
				padding: 0 20rpx;
				background: #fff;
				position: relative;
				z-index: 1;
			}
			&:after{
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translateX(-50%);
				width: 300rpx;
				height: 0;
				content: '';
				border-bottom: 1px solid #ccc; 
			}
		}
	}
	
	/* 规格选择弹窗 */
	.attr-content{
		padding: 10rpx 30rpx;
		.a-t{
			display: flex;
			image{
				width: 170rpx;
				height: 170rpx;
				flex-shrink: 0;
				margin-top: -40rpx;
				border-radius: 8rpx;;
			}
			.right{
				display: flex;
				flex-direction: column;
				padding-left: 24rpx;
				font-size: $uni-font-size-sm + 2rpx;
				color: $uni-text-color;
				line-height: 42rpx;
				.price{
					font-size: $uni-font-size-lg;
					color: $uni-color-primary;
					margin-bottom: 10rpx;
				}
				.selected-text{
					margin-right: 10rpx;
				}
			}
		}
		.attr-list{
			display: flex;
			flex-direction: column;
			font-size: $uni-font-size-base + 2rpx;
			color: $uni-text-color;
			padding-top: 30rpx;
			padding-left: 10rpx;
		}
		.item-list{
			padding: 20rpx 0 0;
			display: flex;
			flex-wrap: wrap;
			text{
				display: flex;
				align-items: center;
				justify-content: center;
				background: #eee;
				margin-right: 20rpx;
				margin-bottom: 20rpx;
				border-radius: 100rpx;
				min-width: 60rpx;
				height: 60rpx;
				padding: 0 20rpx;
				font-size: $uni-font-size-base;
				color: $uni-text-color-dark;
			}
			.selected{
				background: #fbebee;
				color: $uni-color-primary;
			}
		}
	}
	
	/*  弹出层 */
	.popup {
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		z-index: 99;
		
		&.show {
			display: block;
			.mask{
				animation: showPopup 0.2s linear both;
			}
			.layer {
				animation: showLayer 0.2s linear both;
			}
		}
		&.hide {
			.mask{
				animation: hidePopup 0.2s linear both;
			}
			.layer {
				animation: hideLayer 0.2s linear both;
			}
		}
		&.none {
			display: none;
		}
		.mask{
			position: fixed;
			top: 0;
			width: 100%;
			height: 100%;
			z-index: 1;
			background-color: rgba(0, 0, 0, 0.4);
		}
		.layer {
			position: fixed;
			z-index: 99;
			bottom: 0;
			width: 100%;
			min-height: 40vh;
			border-radius: 10rpx 10rpx 0 0;
			background-color: #fff;
			.btn{
				height: 66rpx;
				line-height: 66rpx;
				border-radius: 100rpx;
				background: $uni-color-primary;
				font-size: $uni-font-size-base + 2rpx;
				color: #fff;
				margin: 30rpx auto 20rpx;
			}
		}
		@keyframes showPopup {
			0% {
				opacity: 0;
			}
			100% {
				opacity: 1;
			}
		}
		@keyframes hidePopup {
			0% {
				opacity: 1;
			}
			100% {
				opacity: 0;
			}
		}
		@keyframes showLayer {
			0% {
				transform: translateY(120%);
			}
			100% {
				transform: translateY(0%);
			}
		}
		@keyframes hideLayer {
			0% {
				transform: translateY(0);
			}
			100% {
				transform: translateY(120%);
			}
		}
	}
	
	/* 底部操作菜单 */
	.page-bottom{
		position:fixed;
		left: 30rpx;
		bottom:30rpx;
		z-index: 95;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 690rpx;
		height: 100rpx;
		background: rgba(255,255,255,.9);
		box-shadow: 0 0 20rpx 0 rgba(0,0,0,.5);
		border-radius: 16rpx;
		
		.p-b-btn{
			display:flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			font-size: $uni-font-size-sm;
			color: $uni-text-color;
			width: 96rpx;
			height: 80rpx;
			.yticon{
				font-size: 40rpx;
				line-height: 48rpx;
				color: $uni-text-color-light;
			}
			&.active, &.active .yticon{
				color: $uni-color-primary;
			}
			.icon-fenxiang2{
				font-size: 42rpx;
				transform: translateY(-2rpx);
			}
			.icon-shoucang{
				font-size: 46rpx;
			}
		}
		.action-btn-group{
			display: flex;
			height: 76rpx;
			border-radius: 100px;
			overflow: hidden;
			box-shadow: 0 20rpx 40rpx -16rpx #fa436a;
			box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4);
			background: linear-gradient(to right, #ffac30,#fa436a,#F56C6C);
			margin-left: 20rpx;
			position:relative;
			&:after{
				content: '';
				position:absolute;
				top: 50%;
				right: 50%;
				transform: translateY(-50%);
				height: 28rpx;
				width: 0;
				border-right: 1px solid rgba(255,255,255,.5);
			}
			.action-btn{
				display:flex;
				align-items: center;
				justify-content: center;
				width: 180rpx;
				height: 100%;
				font-size: $uni-font-size-base ;
				padding: 0;
				border-radius: 0;
				background: transparent;
			}
		}
	}
	/* 购物车列表项 */
	.cart-item{
		display:flex;
		position:relative;
		padding:30rpx 40rpx;
		.image-wrapper{
			width: 230rpx;
			height: 230rpx;
			flex-shrink: 0;
			position:relative;
			image{
				border-radius:8rpx;
			}
		}
		.checkbox{
			position:absolute;
			left:-16rpx;
			top: -16rpx;
			z-index: 8;
			font-size: 44rpx;
			line-height: 1;
			padding: 4rpx;
			color: $uni-text-color-disable;
			background:#fff;
			border-radius: 50px;
		}
		.item-right{
			display:flex;
			flex-direction: column;
			flex: 1;
			overflow: hidden;
			position:relative;
			padding-left: 30rpx;
			.title,.price{
				font-size:$uni-font-size-base + 2rpx;
				color: $uni-text-color-dark;
				height: 40rpx;
				line-height: 40rpx;
			}
			.attr{
				font-size: $uni-font-size-sm + 2rpx;
				color: $uni-text-color-light;
				height: 50rpx;
				line-height: 50rpx;
			}
			.price{
				height: 50rpx;
				line-height:50rpx;
			}
		}
		.del-btn{
			padding:4rpx 10rpx;
			font-size:34rpx; 
			height: 50rpx;
			color: $uni-text-color-light;
		}
	}
	/* 底部栏 */
	.action-section{
		/* #ifdef H5 */
		margin-bottom:100rpx;
		/* #endif */
		position:fixed;
		left: 30rpx;
		bottom:30rpx;
		z-index: 95;
		display: flex;
		align-items: center;
		width: 690rpx;
		height: 100rpx;
		padding: 0 30rpx;
		background: rgba(255,255,255,.9);
		box-shadow: 0 0 20rpx 0 rgba(0,0,0,.5);
		border-radius: 16rpx;
		.checkbox{
			height:52rpx;
			position:relative;
			image{
				width: 52rpx;
				height: 100%;
				position:relative;
				z-index: 5;
			}
		}
		.clear-btn{
			position:absolute;
			left: 26rpx;
			top: 0;
			z-index: 4;
			width: 0;
			height: 52rpx;
			line-height: 52rpx;
			padding-left: 38rpx;
			font-size: $uni-font-size-base;
			color: #fff;
			background: $uni-text-color-disable;
			border-radius:0 50px 50px 0;
			opacity: 0;
			transition: .2s;
			&.show{
				opacity: 1;
				width: 120rpx;
			}
		}
		.total-box{
			flex: 1;
			display:flex;
			flex-direction: column;
			text-align:right;
			padding-right: 40rpx;
			.price{
				font-size: $uni-font-size-lg;
				color: $uni-text-color-dark;
			}
			.coupon{
				font-size: $uni-font-size-sm;
				color: $uni-text-color-light;
				text{
					color: $uni-text-color-dark;
				}
			}
		}
		.confirm-btn{
			padding: 0 38rpx;
			margin: 0;
			border-radius: 100px;
			height: 76rpx;
			line-height: 76rpx;
			font-size: $uni-font-size-base + 2rpx;
			background: $uni-color-primary;
			box-shadow: 1px 2px 5px rgba(217, 60, 93, 0.72)
		}
	}
	.uni-numbox {
		position:absolute;
		left: 30rpx;
		bottom: 0;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		width:230rpx;
		height: 70rpx;
		background:#f5f5f5;
	}
	
	.uni-numbox-minus,
	.uni-numbox-plus {
		margin: 0;
		background-color: #f5f5f5;
		width: 70rpx;
		height: 100%;
		line-height: 70rpx;
		text-align: center;
		position: relative;
	}
	.uni-numbox-minus .yticon,
	.uni-numbox-plus .yticon{
		font-size: 36rpx;
		color: #555;
	}
	
	.uni-numbox-minus {
		border-right: none;
		border-top-left-radius: 6rpx;
		border-bottom-left-radius: 6rpx;
	}
	
	.uni-numbox-plus {
		border-left: none;
		border-top-right-radius: 6rpx;
		border-bottom-right-radius: 6rpx;
	}
	
	.uni-numbox-value {
		position: relative;
		background-color: #f5f5f5;
		width: 90rpx;
		height: 50rpx;
		text-align: center;
		padding: 0;
		font-size: 30rpx;
	}
	
	.uni-numbox-disabled.yticon {
		color: #d6d6d6;
	}
	
	.bg-gradual-blue1{
		background-image: linear-gradient(90deg, #cafaff, #3a83d1);
		color: #ffffff;
	}
	.bg-gradual-blue2{
		background-image: linear-gradient(90deg, #3a83d1, #cafaff);
		color: #ffffff;
	}
</style>
