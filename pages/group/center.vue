<template>
	<view>

		<listCardGroup :newsList="speak_list" @cardDetail="cardDetail"></listCardGroup>
	</view>
</template>

<script>
	import listCardGroup from '../../components/list/list-card-group.vue'
	export default {
		data() {
			return {
				page: 1,
				speak_list: [],
				userid: 0
			}
		},
		components: {
			listCardGroup
		},
		onLoad(respones) {
			if (respones.userid == 0) {
				uni.navigateBack()
			}
			this.userid = respones.userid
			this.SpeakList()
		},
		methods: {
			async SpeakList() {
				console.log('朋友圈数据')
				let data = {
					page: this.page,
					userid: this.userid
				}
				let result = await this.$request({
					method: '/api/group-speak',
					data: data
				})
				console.log(result)
				if (result.code != 10000) {
					uni.showModal({
						content: "朋友圈列表数据错误。"
					})
				}
				uni.setNavigationBarTitle({
					title: result.data[0].username + "的圈子"
				});
				result.data.forEach(item => {
					this.speak_list.push(item)
				})
				uni.stopPullDownRefresh();
			},
			//热门文章点击方法
			cardDetail(newsid, type) {
				console.log('cardDetail', newsid, type)
				uni.navigateTo({
					url: '/pages/group/card-detail?id=' + newsid
				})
			},
		},
		onPullDownRefresh() {
			console.log('refresh');
			this.speak_list = []
			this.page = 1
			this.SpeakList()
		},
		onReachBottom() {
			console.log('onReachBottom');
			this.page++
			this.SpeakList()
		},
	}
</script>

<style lang="scss">
	.more {
		position: fixed;
		z-index: 4;
		right: 60rpx;
		top: 210rpx;
	}
</style>
