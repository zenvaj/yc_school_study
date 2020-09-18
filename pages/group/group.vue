<template>
	<view>
		<!-- #ifdef H5 -->
		<view class="cu-bar bg-white fixed" @tap="goTop" :style="[{Top:'0px'},{height:(0) + 'px'}]">
		<!-- #endif -->
		<!-- #ifndef H5 -->
		<view class="cu-bar bg-white fixed" @tap="goTop" :style="[{Top:'0px'},{height:(0) + 'px'}]">
		<!-- #endif -->
		
			<view class="headerpic" @tap.stop="groupSelf">
				<!-- <view class="cu-avatar round lg" :style="'background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);'"></view> -->
				<view class="cu-avatar radius lg " :style="{backgroundImage:'url('+userInfo.headpic+')'}"></view>
				<view class="padding-lr text-lg text-cut" style="width: 300rpx;">走走停停走走停停走走停停走走停停</view>
				<view class="cu-btn sm bg-gradual-blue shadow cuIcon" @tap.stop="navaTo('/pages/group/new-speak')">
					<text class="cuIcon-add"></text>
				</view>
				<view class="cu-btn sm margin-left shadow cuIcon" :class="self_show?'bg-gradual-green':''" @tap.stop="self_show = !self_show">
					<text class="cuIcon-profile"></text>
				</view>
				<view class="cu-btn bg-gradual-orange margin-left shadow cuIcon lg" @tap.stop="navaTo('/pages/group/shop')">
					<text class="cuIcon-shop lg"></text>
				</view>
			</view>
			<image src="/static/bg-imag-101.jpg" mode="scaleToFill" class="response"></image>
		</view> 
		<view class="" :style="[{height:'140px'}]"></view>
		<!-- <view class="cu-tabbar-height"></view> -->
		<listCardGroup :newsList="newsList" @cardDetail="cardDetail" @UserGroup="UserGroup"></listCardGroup>
	</view>
</template>

<script>
	import listCardGroup from '../../components/list/list-card-group.vue'
	export default {
		data() {
			return {
				self_show:false,
				userInfo:{headpic:"https://ossweb-img.qq.com/images/lol/web201310/skin/big10004.jpg"},
				newsList:[{
						id:1,
						imgurl:[
							'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg'
						],
						mark:'史诗',
						title:'1我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。',
						headpic:'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
						nickname:'1正义天使 凯尔',
						time:'十天前',
						num:{
							view:1999999,
							up:155,
							comment:41
						}
					},{
						id:2,
						imgurl:[
							'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
							'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
							'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg'
						],
						mark:'神话',
						title:'2我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。',
						headpic:'https://ossweb-img.qq.com/images/lol/web201310/skin/big10005.jpg',
						nickname:'3正义天使 凯尔',
						time:'十一天前',
						num:{
							view:1999999,
							up:155,
							comment:41
						}
					},{
						id:3,
						imgurl:[
							'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
							'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
							'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
							'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
							'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
							'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg'
						],
						mark:'神仙打架',
						title:'3我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。',
						headpic:'https://ossweb-img.qq.com/images/lol/web201310/skin/big10004.jpg',
						nickname:'2正义天使 凯尔',
						time:'十二天前',
						num:{
							view:19999,
							up:155,
							comment:41
						}
					},{
						id:4,
						imgurl:[
							'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
							'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
							'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
							'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
							'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
							'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
							'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
							'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
							'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg'
						],
						mark:'神仙打架',
						title:'3我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。',
						headpic:'https://ossweb-img.qq.com/images/lol/web201310/skin/big10004.jpg',
						nickname:'2正义天使 凯尔',
						time:'十二天前',
						num:{
							view:19999,
							up:155,
							comment:41
						}
					},{
						id:5,
						imgurl:[
							'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
							'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
							'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
							'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
							'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
							'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
							'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
							'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
							'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
							'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
							'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
							'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg'
						],
						mark:'神仙打架',
						title:'3我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。',
						headpic:'https://ossweb-img.qq.com/images/lol/web201310/skin/big10004.jpg',
						nickname:'2正义天使 凯尔',
						time:'十二天前',
						num:{
							view:19999,
							up:155,
							comment:41
						}
					},
				],
				isFresh:true,
				StatusBar:this.StatusBar,
				CustomBar:this.CustomBar,
				isPad:false,
			}
		},
		components:{
			listCardGroup
		},
		onLoad(){
			console.log(this.StatusBar,this.CustomBar,JSON.stringify(this.Custom))
		},
		methods: {
			//热门文章点击方法
			cardDetail(newsid,type){
				console.log('cardDetail',newsid,type)
				uni.navigateTo({
					url:'/pages/public/card-detail?id='+newsid
				})
			},
			UserGroup(newsid,type){
				console.log('UserGroup',newsid,type)
				uni.navigateTo({
					url:'/pages/group/center?id='+newsid
				})
			},
			groupSelf(){
				console.log("进入自己的朋友圈")
				uni.navigateTo({
					url:'/pages/group/center'
				})
			},
			goTop(){
				console.log("划到开始未知")
				uni.pageScrollTo({
				    scrollTop: 0,
				    duration: 300
				});
			},
			navaTo(url){
				uni.navigateTo({
					url
				})
			}
		},
		onPullDownRefresh() {
			this.isFresh = false
			console.log('refresh');
			setTimeout(function () {
				uni.stopPullDownRefresh();
				this.isFresh = true
				console.log(this.isFresh);
			}, 1000);
		},
		onReachBottom() {
			console.log('onReachBottom');
			setTimeout(function () {
				uni.stopPullDownRefresh();
			}, 1000);
		},
	}
</script>

<style lang="scss">
	.headerpic{
		position: absolute;
		z-index: 10;
		top: 82px;
		left: 8px;
		display: flex;
		align-items: flex-end;
	}
	
</style>
