<template>
	<view class="">
		<!-- #ifdef H5 -->
		<view class="cu-bar fixed cu-form-group" :style="[{top:(StatusBar*2 + CustomBar*2 - 2) + 'rpx'},{zIndex:2}]">
		<!-- #endif -->
		<!-- #ifdef MP -->
		<view class="cu-bar fixed cu-form-group" :style="[{top:'0rpx'},{zIndex:2}]">
		<!-- #endif -->
		<!-- #ifdef APP-PLUS -->
		<view class="cu-bar fixed cu-form-group" :style="[{top:'0rpx'},{zIndex:2}]">
		<!-- #endif -->
			<view class="title">筛选</view>
			<picker mode="date" :value="date_start" start="1970-09-01" end="2050-09-01" @change="DateChange('date_start',$event)">
				<view class="picker">
					{{date_start}}
				</view>
			</picker>
			<picker mode="date" :value="date_end" :start="date_start" end="2050-09-01" @change="DateChange('date_end',$event)">
				<view class="picker">
					{{date_end}}
				</view>
			</picker>
			<picker @change="PickerChange" :value="type_index" :range="type_range">
				<view class="picker">
					{{type_index>-1?type_range[type_index]:'明细类型'}}
				</view>
			</picker>
		</view>
		<!-- #ifdef H5 -->
		<view class="cu-list menu-avatar " :style="{marginTop:(StatusBar*2+CustomBar*2) + 'rpx'}">
		<!-- #endif -->
		<!-- #ifdef MP -->
		<view class="cu-list menu-avatar " :style="{marginTop:(0 + CustomBar*2) + 'rpx'}">
		<!-- #endif -->
		<!-- #ifdef APP-PLUS -->
		<view class="cu-list menu-avatar " :style="{marginTop:(0 + CustomBar*2) + 'rpx'}">
		<!-- #endif -->
			<view class="cu-item" v-for="(item,index) in 22" :key="index">
				<view class="content">
					<view class="text-grey">佣金{{index}}</view>
					<view class="text-gray text-sm flex">
						<view class="text-cut">我已天理为凭，踏入这片荒。我已天理为凭，踏入这片荒。我已天理为凭，踏入这片荒。我已天理为凭，踏入这片荒。</view> 
					</view>
				</view>
				<view class="action padding-lr">
					<view class="text-grey text-xs">2020-09-11 22:20:00</view>
					<view class="cu-tag radius light bg-red ">￥5</view>
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
	.cu-list.menu-avatar>.cu-item .content {
	    left: 40rpx;
	}
	.cu-list.menu-avatar>.cu-item .action {
		width: 330upx;
		text-align: right
	}
</style>
