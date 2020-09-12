<template>
	<view>
		<view class="cu-bar bg-white fixed" @tap="goTop" :style="[{Top:'0px'},{height:(StatusBar+CustomBar) + 'px'}]">
			<view class="flex align-center" @tap.stop="groupSelf">
				<!-- <view class="cu-avatar round lg" :style="'background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);'"></view> -->
				<view class="cu-avatar radius lg " :style="{backgroundImage:'url('+userInfo.headpic+')'}"></view>
				<view class="padding-lr text-lg">走走停停</view>
			</view>
		</view>
		<view class="" :style="[{height:(StatusBar + CustomBar) + 'px'}]"></view>
		<!-- <view class="cu-tabbar-height"></view> -->
		<listCardGroup :newsList="newsList" @cardDetail="cardDetail"></listCardGroup>
	</view>
</template>

<script>
	import listCardGroup from '../../components/list/list-card-group.vue'
	export default {
		data() {
			return {
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
	
	
</style>
