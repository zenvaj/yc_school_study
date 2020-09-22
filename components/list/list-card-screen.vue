<template>
	<view>
		<view class="cu-card case ">
			<view class="cu-item shadow" v-for="(item,index) in newsList" :key="index" @click="cardDetail(item.title)">
				<view class="image">
					<image :src="item.image" mode="widthFix"></image>
					<view class="cu-tag bg-blue">官宣</view>
					<view class="cu-bar bg-shadeBottom"> <text class="text-cut">{{item.title}}</text></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
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

<style>

</style>
