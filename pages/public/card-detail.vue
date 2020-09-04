<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">唠唠详情</block>
		</cu-custom>
		<cardDetail></cardDetail>
	</view>
</template>

<script>
	import cardDetail from '../../components/list/list-card-detail.vue'
	export default{
		data:function (){
			return {
				contents:{}
			}
		},
		components:{
			cardDetail
		},
		onLoad(respones){
			console.log(respones)
			//根据id展示内容
		}
	}
</script>

<style>
</style>
