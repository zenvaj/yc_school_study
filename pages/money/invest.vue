<template>
	<view>
		<view class="cu-card article no-card">
			<view class="cu-item shadow padding-tb" v-for="(item,index) in 10" :key="index">
				<view class="content">
					<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg"
					 mode="aspectFill" style="min-width: 170rpx;"></image>
					<view class="flex flex-direction" style="min-width: 450rpx;">
						
						<view class="text-black text-bold text-lg text-cut">文具品投资文具品投资文具品投资文具品投资</view>
						<view class="desc">
							<view class="text-content"> 小成本，短暂压货，快速回本！小成本，短暂压货，快速回本！小成本，短暂压货，快速回本！小成本，短暂压货，快速回本！小成本，短暂压货，快速回本！小成本，短暂压货，快速回本！</view>
							<view>
								<view class="cu-tag bg-red light sm round">文具用品</view>
								<view class="cu-tag bg-green light sm round">肉制品</view>
								<view class="cu-tag bg-red light sm round">蔬菜</view>
								<view class="cu-tag bg-green light sm round">生鲜</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isCard: false
			};
		},
		methods: {
			IsCard(e) {
				this.isCard = e.detail.value
			},
		}
	}
</script>

<style scoped>
.text-content{
	height: 4.4em;
	line-height: 1.5;
	padding-top: 6rpx;
}
</style>
