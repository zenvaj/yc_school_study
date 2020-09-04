<template>
	<swiper class="card-swiper" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true" :circular="true"
	 :autoplay="true" interval="5000" duration="500" @change="cardSwiper" indicator-color="#8799a3"
	 indicator-active-color="#0081ff">
		<swiper-item v-for="(item,index) in swiperList" :key="index" :class="cardCur==index?'cur':''">
			<view class="swiper-item" @click="imgClick(item.id,item.type)">
				<image :src="item.url" mode="aspectFill" ></image>
			</view>
		</swiper-item>
	</swiper>
</template>

<script>
	export default {
		data() {
			return {
				//轮播数据
				cardCur: 0,
				dotStyle: 1,
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
