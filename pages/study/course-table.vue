<template>
	<view class="">
		
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText"></block>
			<block slot="content">课表</block>
		</cu-custom>
		<form>
			<view class="cu-form-group">
				<view class="title">日期</view>
				<input placeholder="选择课表日期" name="input" :value="dateSet"></input>
				<button class='cu-btn bg-green shadow' @click="show = true">选择</button>
			</view>
			<u-calendar v-model="show" :maxDate="'2049-05-03'" :mode="mode" @change="dateChoice"></u-calendar>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				mode: 'date',
				dateSet:'',
			}
		},
		methods:{
			dateChoice(e){
				console.log(e)
				this.dateSet = e.result
			}
		}
	}
</script>

<style>
</style>
