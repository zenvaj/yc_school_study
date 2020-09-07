<template>
	<view class="">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText"></block>
			<block slot="content">课表</block>
		</cu-custom>
		<view class="tower-swiper" @touchmove="TowerMove" @touchstart="TowerStart" @touchend="TowerEnd">
			<view class="tower-item" :class="item.zIndex==1?'none':''" 
				v-for="(item,index) in swiperList" :key="index" 
				:style="[{'--index': item.zIndex,'--left':item.mLeft}]" 
				:data-direction="direction">
				<view class="flex swiper-item align-center text-center bg-gradual-orange" @click="imgClick(item.id,item.type)">
					<text>{{item.date}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//轮播数据
				cardCur: 0,
				dotStyle: true,
				towerStart: 0,
				direction: '',
				swiperList:[{
						id: 0,
						date:'9-7'
					},{
						id: 5,
						date:'9-8'
					},{
						id: 6,
						date:'9-9'
					},{
						id: 5,
						date:'9-10'
					},{
						id: 6,
						date:'9-11'
					},{
						id: 5,
						date:'9-12'
					},{
						id: 6,
						date:'9-13'
					}]
					
			}
		},
		onLoad(options){
			
		},
		beforeMount(){
			this.TowerSwiper('swiperList');
		},
		methods:{ 
			// towerSwiper
			// 初始化towerSwiper
			TowerSwiper(name) {
				let list = this[name];
				for (let i = 0; i < list.length; i++) {
					list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
					list[i].mLeft = i - parseInt(list.length / 2)
				}
				this.swiperList = list
			}, 
			// towerSwiper触摸开始
			TowerStart(e) {
				this.towerStart = e.touches[0].pageX
			}, 
			// towerSwiper计算方向
			TowerMove(e) {
				this.direction = e.touches[0].pageX - this.towerStart > 0 ? 'right' : 'left'
			}, 
			// towerSwiper计算滚动
			TowerEnd(e) {
				let direction = this.direction;
				let list = this.swiperList;
				if (direction == 'right') {
					let mLeft = list[0].mLeft;
					let zIndex = list[0].zIndex;
					for (let i = 1; i < this.swiperList.length; i++) {
						this.swiperList[i - 1].mLeft = this.swiperList[i].mLeft
						this.swiperList[i - 1].zIndex = this.swiperList[i].zIndex
					}
					this.swiperList[list.length - 1].mLeft = mLeft;
					this.swiperList[list.length - 1].zIndex = zIndex;
				} else {
					let mLeft = list[list.length - 1].mLeft;
					let zIndex = list[list.length - 1].zIndex;
					for (let i = this.swiperList.length - 1; i > 0; i--) {
						this.swiperList[i].mLeft = this.swiperList[i - 1].mLeft
						this.swiperList[i].zIndex = this.swiperList[i - 1].zIndex
					}
					this.swiperList[0].mLeft = mLeft;
					this.swiperList[0].zIndex = zIndex;
				}
				this.direction = ""
				this.swiperList = this.swiperList
			},
			imgClick(id,type){
				console.log('imgClick',id,type);
			}
		}
	}
</script>

<style>
	.tower-swiper .tower-item {
		transform: scale(calc(0.5 + var(--index) / 10));
		margin-left: calc(var(--left) * 100upx - 150upx);
		z-index: var(--index);
		/* height: 80rpx; */
	}
</style>
