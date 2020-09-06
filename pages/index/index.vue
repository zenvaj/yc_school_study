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
				},{
					id: 5,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99007.jpg'
				},{
					id: 6,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
				}],
				//九宫格按钮数据
				paraMenuGrid:{
					cuIconList: [{
						cuIcon: 'location',
						color: 'red',
						badge: 0,
						name: '到校签到',
						path: '/pages/index/sign-std-school'
					}, {
						cuIcon: 'locationfill',
						color: 'orange',
						badge: 0,
						name: '离校签到',
						path: '/pages/index/sign-std-home'
					}, {
						cuIcon: 'form',
						color: 'yellow',
						badge: 0,
						name: '课表',
						path: '/pages/study/course-table'
					}, {
						cuIcon: 'time',
						color: 'olive',
						badge: 3,
						name: '课堂任务',
						path: '/pages/study/course-plan'
					}, {
						cuIcon: 'write',
						color: 'cyan',
						badge: 0,
						name: '课堂点评',
						path: '/pages/study/course-comment'
					}, {
						cuIcon: 'attention',
						color: 'blue',
						badge: 0,
						name: '课堂一览',
						path: '/pages/study/course-view'
					}, {
						cuIcon: 'moneybag',
						color: 'purple',
						badge: 0,
						name: '钱包',
						path: '/pages/public/content'
					}, {
						cuIcon: 'question',
						color: 'mauve',
						badge: 0,
						name: '帮助',
						path: '/pages/public/help'
					}, {
						cuIcon: 'selection',
						color: 'purple',
						badge: 0,
						name: '学习',
						path: '/pages/public/content'
					},{
						cuIcon: 'group',
						color: 'purple',
						badge: 0,
						name: '圈子',
						path: '/pages/public/content'
					},{
						cuIcon: 'list',
						color: 'purple',
						badge: 0,
						name: '交易记录',
						path: '/pages/public/content'
					},{
						cuIcon: 'settings',
						color: 'purple',
						badge: 0,
						name: '设置',
						path: '/pages/public/content'
					},{
						cuIcon: 'close',
						color: 'purple',
						badge: 0,
						name: '错题本',
						path: '/pages/public/content'
					},{
						cuIcon: 'addressbook',
						color: 'purple',
						badge: 0,
						name: '绑定用户',
						path: '/pages/public/content'
					},{
						cuIcon: 'profile',
						color: 'purple',
						badge: 0,
						name: '邀请',
						path: '/pages/public/content'
					},{
						cuIcon: 'forward',
						color: 'purple',
						badge: 0,
						name: '发布动态',
						path: '/pages/public/content'
					},{
						cuIcon: 'shop',
						color: 'purple',
						badge: 0,
						name: '商圈',
						path: '/pages/public/content'
					},{
						cuIcon: 'share',
						color: 'purple',
						badge: 0,
						name: '分享',
						path: '/pages/public/content'
					},{
						cuIcon: 'friend',
						color: 'purple',
						badge: 0,
						name: '联盟',
						path: '/pages/public/content'
					},{
						cuIcon: 'more',
						color: 'mauve',
						badge: 0,
						name: '更多',
						path: '/pages/index/guid-btn-set'
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
				uni.navigateTo({
					url:type
				})
				console.log('navigeteMenuGrid',name,type)
			},
			//热门文章点击方法
			cardDetail(newsid){
				console.log('cardDetail',newsid)
				uni.navigateTo({
					url:'/pages/public/card-detail?id='+newsid
				})
			}
		}
	}
</script>

<style>
	.cu-card.article>.cu-item .content .text-content {
		height: 4.8em;
	}
</style>
