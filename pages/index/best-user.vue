<template>
	<view class="">
		<!-- #ifdef H5 -->
		<view class="cu-bar fixed cu-form-group" :style="[{top:(StatusBar + CustomBar - 3) + 'px'},{zIndex:2}]">
		<!-- #endif -->
		<!-- #ifdef MP -->
		<view class="cu-bar fixed cu-form-group" :style="[{top:'0px'},{zIndex:2}]">
		<!-- #endif -->
		<!-- #ifdef APP-PLUS -->
		<view class="cu-bar fixed cu-form-group" :style="[{top:'0px'},{zIndex:2}]">
		<!-- #endif -->
			<view class="title">类型</view>
			<picker @change="PickerChange" :value="type_index" :range="type_range">
				<view class="picker">
					{{type_index>-1?type_range[type_index]:'类型'}}
				</view>
			</picker>
		</view>
		<!-- #ifdef H5 -->
		<view class="cu-list menu-avatar " :style="{marginTop:(StatusBar+CustomBar) + 'px'}">
		<!-- #endif -->
		<!-- #ifdef MP -->
		<view class="cu-list menu-avatar " :style="{marginTop:(CustomBar - 6) + 'px'}">
		<!-- #endif -->
		<!-- #ifdef APP-PLUS -->
		<view class="cu-list menu-avatar " :style="{marginTop:(CustomBar - 6) + 'px'}">
		<!-- #endif -->
			<view class="cu-item" v-for="(v, i) in 10" :key="i">
				<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Taric.png);"></view>
				<view class="content">
					<view class="text-grey">
						<view class="text-cut">塔里克{{i}}</view>
					</view>
					<view class="text-gray text-sm flex">
						<view class="text-cut"><view class="cu-tag round bg-orange sm" v-for="(item,index) in 3">神兽{{index}}</view></view>
					</view>
				</view>
				<view class="action">
					<view class="text-price">{{364*(22 - i)}}</view>
				</view>
			</view>
			
		</view>
		</view>
	</view>
</template>

<script>  
    export default {
		data(){
			return {
				date_start:"2020-09-01",
				date_end:"2021-09-01",
				type_range:["全部","余额","佣金","备佣金","红包","分红","提现",],
				type_index:"-1",
				StatusBar:this.StatusBar,
				CustomBar:this.CustomBar,
			}
		},
		onLoad(){
			var now = new Date();
			this.date_start = this.date_end = now.getFullYear()+'-'+(now.getMonth()+1) + '-' + now.getDate()
			console.log(this.StatusBar,this.CustomBar,JSON.stringify(this.Custom))
		},
        methods: {
			DateChange(type,e) {
				this[type] = e.detail.value
			},
			PickerChange(e) {
				this.index = e.detail.value
			},
			
        },
		onPullDownRefresh() {
			this.isFresh = false
			console.log('refresh');
			setTimeout(function () {
				uni.stopPullDownRefresh();
				this.isFresh = true
				console.log(this.isFresh);
			}, 1000);
		},
		onReachBottom() {
			console.log('onReachBottom');
			setTimeout(function () {
				uni.stopPullDownRefresh();
			}, 1000);
		},
    }
</script>  

<style lang="scss">
</style>
