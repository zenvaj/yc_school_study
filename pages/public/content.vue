<template>
	<view>
		<view class="">
			
		</view>
	</view>
</template>

<script>
	export default{
		data:function (){
			return {
				contents:{}
			}
		},
		onLoad(respones){
			console.log(respones)
			//根据id展示内容
			uni.setNavigationBarTitle({
				title:respones.title
			})
		}
	}
</script>

<style>
</style>
