<template>
	<view class="cu-card article">
		<view class="cu-item shadow" v-for="(item,index) in newsList" :key="index" @click="cardDetail(item.title)">
			<view class="title"><view class="text-cut">{{item.title}}</view></view>
			<view class="content">
				<image :src="item.image" mode="aspectFill"></image>
				<view class="desc">
					<view class="text-content">{{item.des}}</view>
					<view>
						<view class="cu-tag bg-red light sm round">热门文章</view>
						<view class="cu-tag bg-green light sm round">鸡汤</view>
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
				isCard:0
			};
		},
		props:['newsList'],
		methods:{
			cardDetail(title){
				console.log(title)
				this.$emit("cardDetail",title)
			}
		}
	}
</script>

<style scoped>
.text-content{
	height: 4.8em;
}
</style>
