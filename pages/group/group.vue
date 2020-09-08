<template>
	<view>
		
		<listCardGroup :newsList="newsList" @cardDetail="cardDetail"></listCardGroup>
	</view>
</template>

<script>
	import listCardGroup from '../../components/list/list-card-group.vue'
	export default {
		data() {
			return {
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
				}]
			}
		},
		components:{
			listCardGroup
		},
		methods: {
			//热门文章点击方法
			cardDetail(newsid){
				console.log('cardDetail',newsid)
				uni.navigateTo({
					url:'/pages/public/card-detail?id='+newsid
				})
			},
			HideNavigationBar(){
				uni.hideNavigationBarLoading()
			}
		},
		onPageScroll(e){
			console.log(e.scrollTop)
			if(e.scrollTop > 200){
				this.HideNavigationBar();
			}
		},
		onPullDownRefresh() {
			console.log('refresh');
			setTimeout(function () {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		onReachBottom() {
			console.log('onReachBottom');
			setTimeout(function () {
				//uni.stopPullDownRefresh();
			}, 1000);
		}
	}
</script>

<style>

</style>
