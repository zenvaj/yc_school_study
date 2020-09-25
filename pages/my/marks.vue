<template>
	<view>
			
		<view class="cu-timeline" v-for="(item,index) in mark_list">
			<view class="cu-time">{{item.created_at}}</view>
			<view class="cu-item cur text-blue cuIcon-evaluate_fill">
				<view class="content light" :class="color_list[index]">
					<view class="cu-capsule radius">
						<view class="cu-tag bg-cyan">{{item.mark_name}}</view>
						<view class="cu-tag line-cyan">{{item.mark_des}}</view>
					</view>
					<view class="margin-top">这一天，'{{item.user_name}}'获得[{{item.mark_name}}]标签，成为了{{item.info_value}}。</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mark_list:[],
				color_list:[
					'bg-red','bg-blue','bg-cyan','bg-mauve','bg-green','bg-yellow','bg-pink','bg-grey','bg-orange',
					'bg-red','bg-blue','bg-cyan','bg-mauve','bg-green','bg-yellow','bg-pink','bg-grey','bg-orange',
					'bg-red','bg-blue','bg-cyan','bg-mauve','bg-green','bg-yellow','bg-pink','bg-grey','bg-orange',
					'bg-red','bg-blue','bg-cyan','bg-mauve','bg-green','bg-yellow','bg-pink','bg-grey','bg-orange',
					'bg-red','bg-blue','bg-cyan','bg-mauve','bg-green','bg-yellow','bg-pink','bg-grey','bg-orange',
					'bg-red','bg-blue','bg-cyan','bg-mauve','bg-green','bg-yellow','bg-pink','bg-grey','bg-orange',
					'bg-red','bg-blue','bg-cyan','bg-mauve','bg-green','bg-yellow','bg-pink','bg-grey','bg-orange',
					'bg-red','bg-blue','bg-cyan','bg-mauve','bg-green','bg-yellow','bg-pink','bg-grey','bg-orange',
					'bg-red','bg-blue','bg-cyan','bg-mauve','bg-green','bg-yellow','bg-pink','bg-grey','bg-orange',
					'bg-red','bg-blue','bg-cyan','bg-mauve','bg-green','bg-yellow','bg-pink','bg-grey','bg-orange',
					'bg-red','bg-blue','bg-cyan','bg-mauve','bg-green','bg-yellow','bg-pink','bg-grey','bg-orange',
					'bg-red','bg-blue','bg-cyan','bg-mauve','bg-green','bg-yellow','bg-pink','bg-grey','bg-orange',
					'bg-red','bg-blue','bg-cyan','bg-mauve','bg-green','bg-yellow','bg-pink','bg-grey','bg-orange',
					'bg-red','bg-blue','bg-cyan','bg-mauve','bg-green','bg-yellow','bg-pink','bg-grey','bg-orange',
					'bg-red','bg-blue','bg-cyan','bg-mauve','bg-green','bg-yellow','bg-pink','bg-grey','bg-orange',
				]
			}
		},
		onLoad(respones){
			this.MarkList()
		},
		methods: {
			async MarkList(){
				console.log('我的标签')
				let result = await this.$request({
					method:'/api/marks',
					data:{}
				})
				console.log(result)
				if(result.code != 10000){
					uni.showModal({content:"朋友圈列表数据错误。"})
				}
				this.mark_list = result.data
				uni.stopPullDownRefresh();
			}
		}
	}
</script>

<style>
	.cu-timeline .cu-time {
	    width: 320rpx;
	    text-align: center;
	    padding: 20rpx 0;
	    font-size: 26rpx;
	    color: #888;
	    display: block;
	}
</style>
