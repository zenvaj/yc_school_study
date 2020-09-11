<template>
	<view>
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
