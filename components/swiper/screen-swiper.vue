<template>
	<swiper class="screen-swiper" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true" :circular="true"
	 :autoplay="true" interval="5000" duration="500">
		<swiper-item v-for="(item,index) in swiperList" :key="index" @click="imgClick(item.id,item.type)">
			<image :src="item.url" mode="aspectFill"></image>
		</swiper-item>
	</swiper>
</template>

<script>
	export default {
		data() {
			return {
				//轮播数据
				cardCur: 0,
				dotStyle: true,
				towerStart: 0,
				direction: '啊实打实大苏打'
			};
		},
		props: [
			'swiperList'
		],
		methods: {
			// cardSwiper
			cardSwiper(e) {
				this.cardCur = e.detail.current
			},
			imgClick(id,type){
				console.log('imgClick',id,type);
				this.$emit('imgClick',id,type);
			}
		}
	}
</script>

<style>

</style>
