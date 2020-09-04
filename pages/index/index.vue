<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" >
			<block slot="content">颖超教育Iris</block>
		</cu-custom>
		<cardSwiper :swiperList="swiperList" @imgClick="navigeteBanner"></cardSwiper>
		<!-- <screenSwiper :swiperList="swiperList" @imgClick="navigeteBanner"></screenSwiper> -->
		<!-- <towerSwiper :swiperList="swiperList" @imgClick="navigeteBanner"></towerSwiper> -->
		<menuGrid 
			:cuIconList="paraMenuGrid.cuIconList" 
			:gridCol="paraMenuGrid.gridCol" 
			:gridBorder="paraMenuGrid.gridBorder" 
			@menuClick="navigeteMenuGrid"></menuGrid>
		<listCardScreen :newsList="hotNewsList" @cardDetail="cardDetail"></listCardScreen>
		<listCard :newsList="hotNewsList" @cardDetail="cardDetail"></listCard>
	</view>
	
</template>

<script>
	import cardSwiper from '../../components/swiper/card-swiper.vue'
	// import screenSwiper from '../../components/swiper/screen-swiper.vue'
	// import towerSwiper from '../../components/swiper/tower-swiper.vue'
	import menuGrid from '../../components/menu/menu-grid.vue'
	import listCardScreen from '../../components/list/list-card-screen.vue'
	import listCard from '../../components/list/list-card.vue' 
	//Vue.component('plugin',plugin)
	export default {
		data() {
			return {
				//轮播数据
				swiperList: [{
					id: 0,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg',
				}, {
					id: 1,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg',
				}, {
					id: 3,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
				}, {
					id: 4,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
				}, {
					id: 5,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
				}, {
					id: 6,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
				}],
				//九宫格按钮数据
				paraMenuGrid:{
					cuIconList: [{
						cuIcon: 'cardboardfill',
						color: 'red',
						badge: 120,
						name: 'VR',
						path: '/pages/public/content'
					}, {
						cuIcon: 'recordfill',
						color: 'orange',
						badge: 1,
						name: '录像',
						path: '/pages/public/content'
					}, {
						cuIcon: 'picfill',
						color: 'yellow',
						badge: 0,
						name: '图像',
						path: '/pages/public/content'
					}, {
						cuIcon: 'noticefill',
						color: 'olive',
						badge: 22,
						name: '通知',
						path: '/pages/public/content'
					}, {
						cuIcon: 'upstagefill',
						color: 'cyan',
						badge: 0,
						name: '排行榜',
						path: '/pages/public/content'
					}, {
						cuIcon: 'clothesfill',
						color: 'blue',
						badge: 0,
						name: '皮肤',
						path: '/pages/public/content'
					}, {
						cuIcon: 'discoverfill',
						color: 'purple',
						badge: 0,
						name: '发现',
						path: '/pages/public/content'
					}, {
						cuIcon: 'questionfill',
						color: 'mauve',
						badge: 0,
						name: '帮助',
						path: '/pages/public/content'
					}, {
						cuIcon: 'commandfill',
						color: 'purple',
						badge: 0,
						name: '问答',
						path: '/pages/public/content'
					}, {
						cuIcon: 'brandfill',
						color: 'mauve',
						badge: 0,
						name: '版权',
						path: '/pages/public/content'
					}],
					gridCol: 5,
					gridBorder: 0
				},
				//推荐话题数据
				hotNewsList:[{
					id:1,
					imgurl:'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
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
					imgurl:'https://ossweb-img.qq.com/images/lol/web201310/skin/big10005.jpg',
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
					imgurl:'https://ossweb-img.qq.com/images/lol/web201310/skin/big10004.jpg',
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
				//热门话题数据
				
			}
		},
		components:{
			cardSwiper,//screenSwiper,towerSwiper,
			menuGrid,
			listCardScreen,listCard
		},
		onLoad() {

		},
		methods: {
			//轮播点击方法
			navigeteBanner(id,type){
				console.log('navigeteBanner',id,type)
				uni.navigateTo({
					url:'/pages/public/content?id='+id
				})
			},
			//九宫格点击方法
			navigeteMenuGrid(name,type){
				console.log('navigeteMenuGrid',name,type)
			},
			//热门文章点击方法
			cardDetail(newsid){
				console.log('cardDetail',newsid)
				uni.navigateTo({
					url:'/pages/public/card-detail?id='+newsid
				})
			},
			getNo(){
				console.log(22) 
			}
			
		}
	}
</script>

<style>
	
</style>
