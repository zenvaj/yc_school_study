<template>
	<view>
		<view class="cu-bar bg-white">
			<view class="action sub-title">
				<text class="text-xl text-bold text-green">{{title}}</text>
				<text class="bg-green"></text>
				<!-- last-child选择器-->
			</view>
		</view>
		<view class="uni-common-mt" style="background:#FFF; padding:20rpx;">
			<rich-text :nodes="strings"></rich-text>
		</view>
	</view>
</template>

<script>
	export default{
		data:function (){
			return {
				strings:"",
				title:''
			}
		},
		async onLoad(respones){
			console.log(respones)
			//根据id展示内容
			uni.setNavigationBarTitle({
				title:respones.title
			})
			this.title = respones.title
			const result = await this.$request({
				method:'/api/content',
				data:{title:respones.title}
			})
			if(result.code !== 10000){
				uni.showModal({
					content:result.msg||'系统出错啦',
					success:function(){
						uni.navigateBack()
					}
				})
			}
			this.strings = result.data.content
		}
	}
</script>

<style>
</style>
