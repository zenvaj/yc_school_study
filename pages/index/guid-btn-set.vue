<template>
	<view class="">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText"></block>
			<block slot="content">常用功能设置</block>
		</cu-custom>
		<view class="use-bth bg-white" :style="'top:'+CustomBar+'px'">
			<view class="cu-bar bg-white solid-bottom">
				<view class="flex solid-bottom padding justify-between" style="width: 100%;">
					<view class="">
						<text class="cuIcon-title text-blue"></text>常用功能
					</view>
					<view class="">
						<text class="cuIcon-edit text-blue"></text>保存
						<text class="cuIcon-check text-blue"></text>保存
					</view>
				</view>
			</view>
			<view class="grid col-4 bg-gray">
				<view class="margin-tb-sm text-center" v-for="(item,index) in 6" :key="index">
					<button class="cu-btn round bg-gradual-blue sm shadow"><text class="cuIcon-emojifill"></text>选中方法订单</button>
				</view>
			</view>
		</view>
		<view class="" v-for="(value,key) in 6" :key="key">
			<view class="cu-bar  bg-white solid-bottom">
				<view class="action">
					<text class="cuIcon-title text-blue"></text>通用功能
				</view>
			</view>
			<view class="grid col-4" >
				<view class="margin-tb-sm text-center" v-for="(item,index) in 6" :key="index">
					<button class="cu-btn round line-blue sm shadow" v-if="index%2==0">
						<text class="cuIcon-emojifill"></text>未选中功
					</button>
					<button class="cu-btn round bg-gradual-blue sm shadow" v-if="index%2==1">
						<text class="cuIcon-emojifill"></text>选中的
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
				CustomBar: this.CustomBar,
				opacityBar:'opacity:0;'
			}
		},
		onLoad(){
			//console.log(this.CustomBar)
		},
		methods: {
			
		}
	} 
</script>

<style>
	.use-bth{
		position: sticky;
		z-index: 1;
	}
</style>
