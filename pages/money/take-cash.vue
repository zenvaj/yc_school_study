<template>
	<view>
		<view class="cu-bar bg-white solid-bottom">
			<view class="action">
				<text class="cuIcon-refund text-blue"></text>可用余额
			</view>
			<view class="flex-sub text-center">
				<text class="text-price text-red" style="font-size: 60rpx;">{{money}}</text>
			</view>
		</view>
		<view class="cu-form-group">
			<view class="title">提现金额</view>
			<input placeholder="输入提现金额" name="input" :value="money_take" type="number"></input>
			<button class='cu-btn bg-green shadow sm' @click="moneyTakeAll">全部</button>
		</view>
		<view class="padding flex flex-direction">
			<button class="cu-btn bg-gradual-blue margin-tb-sm lg">提现</button>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				money:'1314.00',
				money_take:0,
			}
		},
		onLoad(){
			
		},
	    methods: {
			moneyTakeAll(){
				this.money_take = this.money
			}
	    }  
	}  
</script>

<style>
	
</style>
