<template>
	<view>
		<view class="cu-list menu-avatar bg-white btn-sign" >
			<view class="cu-item" :style="[{height:(StatusBar + CustomBar) + 'px'}]" >
				<!-- <view class="cu-avatar round lg" :style="'background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);'"></view> -->
				<view class="cu-avatar round lg" :style="{backgroundImage:'url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg)',
					maxWidth:(StatusBar + CustomBar - 4) + 'px',maxHeight:(StatusBar + CustomBar - 4) + 'px',}"  @tap="groupSelf"></view>
				<view class="content flex-sub" v-if="!isPad" @tap="goTop">
					<view>走走停停 </view>
					<view class="text-gray text-sm flex justify-between" v-if="(StatusBar + CustomBar)">
						巴拉巴拉
					</view>
				</view>
				<view class="content flex-sub" :style="{fontSize:((StatusBar + CustomBar - 10) / 2) + 'px',}" v-if="isPad" @tap="goTop">
					<view>走走停停
						<view class="text-gray text-sm flex justify-between padding-left">
							巴拉巴拉
						</view>
					 </view>
				</view>
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
				userInfo:[],
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
			const systemInfo = uni.getSystemInfoSync();
			console.log(systemInfo)
			if(systemInfo.windowWidth > 760){
				this.isPad = true
			}
			
		},
		methods: {
			//热门文章点击方法
			cardDetail(newsid){
				console.log('cardDetail',newsid)
				uni.navigateTo({
					url:'/pages/public/card-detail?id='+newsid
				})
			},
			groupSelf(){
				console.log("进入自己的朋友圈")
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
	.btn-sign{
		position: sticky;
		z-index: 1000;
		position: fixed;
		width: 100%;
		left: 0;
		top: 0;
	}
</style>
