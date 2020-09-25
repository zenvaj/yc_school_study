<template>
	<view class="">
		<view class="" v-for="(value,key) in allMenuGridList" :key="key">
			<view class="cu-bar  bg-white solid-bottom">
				<view class="action">
					<text class="cuIcon-title text-blue"></text>{{value.name}}
				</view>
			</view>
			<view class="grid justify-start">
				<view class="padding-lr-sm margin-tb-sm text-center" v-for="(item,index) in value.menus_list" :key="index">
					<button class="cu-btn line-blue shadow sm" @click="naviTo(item.app_path)">
						<text :class="'cuIcon-'+item.icon_name"></text>{{item.name}}
					</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				allMenuGridList:[],
			}
		},
		onLoad(){
			this.AllMenuGridInit()
		},
		methods: {
			async AllMenuGridInit(){
				const result = await this.$request({
					method:'/api/sysmenus',
					data:{}
				})
				console.log(result)
				if(result.code == 10000){
					this.allMenuGridList = result.data
				}else{
					uni.showModal({
						content:result.msg
					})
				}
			},
			naviTo(url){
				console.log(url)
				uni.navigateTo({
					url
				})
			}
		}
	} 
</script>

<style>
	.use-bth{
		position: sticky;
		z-index: 1;
		top:0;
	}
</style>
