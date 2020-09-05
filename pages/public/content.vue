<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText"></block>
			<block slot="content">内容展示页面</block>
		</cu-custom>
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
		}
	}
</script>

<style>
</style>
