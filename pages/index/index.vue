<template>
	<view>
		<cardSwiper :swiperList="swiperList" @imgClick="navigeteBanner"></cardSwiper>
		<menuGrid v-if="menuGridList.length > 0"
			:cuIconList="menuGridList" 
			:gridCol="menuGridCol" 
			:gridBorder="menuGridBorder" 
			@menuClick="navigeteMenuGrid"></menuGrid>
		<listCardScreen :newsList="hotNewsList" @cardDetail="cardDetail"></listCardScreen>
		<listCard :newsList="newNewsList" @cardDetail="cardDetail"></listCard>
	</view>
	
</template> 

<script>
	import cardSwiper from '../../components/swiper/card-swiper.vue'
	import menuGrid from '../../components/menu/menu-grid.vue'
	import listCardScreen from '../../components/list/list-card-screen.vue'
	import listCard from '../../components/list/list-card.vue'
	import {mapState,mapMutations} from 'vuex';
	export default { 
		computed: {
			...mapState(['hasLogin','user'])
		},
		data() {
			return {
				isBarShow:true,
				//轮播数据
				swiperList: [],
				//九宫格按钮数据
				menuGridList:[],
				menuGridCol: 5,
				menuGridBorder: 0,
				//推荐话题数据
				hotNewsList:[],
				newNewsList:[],
			}
		},
		components:{
			cardSwiper,
			menuGrid,
			listCardScreen,listCard
		},
		onLoad() {
			let user = uni.getStorageSync("user");
			if(!user){
				uni.redirectTo({
					url:'/pages/public/login'
				})
			}else{
				this.authLogin(user)
			}
			console.log(this.user)
			this.swiperInit()
			this.menuGridInit()
			this.hotNewsInit()
		},
		methods: {
			...mapMutations(['authLogin']),
			async swiperInit(){
				const result = await this.$request({
					method:'/api/banner',
					data:{}
				})
				console.log(result)
				if(result.code !== 10000){
					uni.showModal({
						content:result.msg
					})
					return;
				}
				this.swiperList = result.data
			},
			//轮播点击方法
			navigeteBanner(title){
				console.log('navigeteBanner',title)
				uni.navigateTo({
					url:'/pages/public/content?title='+title
				})
			},
			async menuGridInit(){
				//const menuGridList = await this.$api.json('menuGridList')
				this.menuGridList = await this.$api.json('menuGridList')
			},
			//九宫格点击方法
			navigeteMenuGrid(name,type){
				console.log('navigeteMenuGrid',name,type)
				uni.navigateTo({
					url:type
				})
			},
			async hotNewsInit(){
				const result = await this.$request({
					method:'/api/index_news',
					data:{}
				})
				console.log(result)
				if(result.code !== 10000){
					uni.showModal({
						content:result.msg
					})
					return;
				}
				this.hotNewsList = result.data.index_notice
				this.newNewsList = result.data.index_news
			},
			//文章点击方法
			cardDetail(title){
				console.log('cardDetail',title)
				uni.navigateTo({
					url:'/pages/public/content?title='+title
				})
			},
		}
	}
</script>

<style>
	.cu-card.article>.cu-item .content .text-content {
		height: 4.8em;
	}
</style>
