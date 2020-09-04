<template>
	<view>
		
		<cu-custom bgColor="bg-gradual-blue" >
			<block slot="content">我的</block>
		</cu-custom>
		<cardSwiper :swiperList="swiperList" @imgClick="navigeteBanner"></cardSwiper>
	</view>
</template>

<script>
	import cardSwiper from '../../components/swiper/card-swiper.vue'
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
				}],
			}
		},
		components:{
			cardSwiper
		},
		methods: {
			navigeteBanner(){
				
			}
		}
	}
</script>

<style>

</style>
