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
				contents:{},
				group_id:0
			}
		},
		components:{
			cardDetail
		},
		onLoad(respones){
			console.log(respones)
			if(respones.group_id == 0){
				uni.navigateBack()
			}
			//根据id展示内容
			this.group_id = respones.group_id
			this.SpeakDetail()
		},
		methods:{
			async SpeakDetail(){
				console.log('朋友圈详情')
				let data = {groupid:this.group_id}
				let result = await this.$request({
					method:'/api/group-detail',
					data:data
				})
				console.log(result)
				if(result.code != 10000){
					uni.showModal({content:"朋友圈数据错误。"})
				}
				// uni.setNavigationBarTitle({
				//     title: result.data[0].username+"的圈子"
				// });
				// result.data.forEach(item =>{
				// 	this.speak_list.push(item)
				// })
				uni.stopPullDownRefresh();
			},
			
		}
	}
</script>

<style>
</style>
