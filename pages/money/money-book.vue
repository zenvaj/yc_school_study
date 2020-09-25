<template>
	<view class="">
		<!-- #ifdef H5 -->
		<view class="cu-bar bg-white search fixed" :style="[{top:CustomBar + 'px'}]">
		<!-- #endif -->
		<!-- #ifdef MP -->
		<view class="cu-bar fixed cu-form-group" :style="[{top:'0px'},{zIndex:2}]">
		<!-- #endif -->
		<!-- #ifdef APP-PLUS -->
		<view class="cu-bar fixed cu-form-group" :style="[{top:'0px'},{zIndex:2}]">
		<!-- #endif -->
			<view class="padding">收入</view>
			<view class="flex-sub text-center">
				<view class="solid-bottom text-xl padding">
					<text class="text-price text-green">80.00</text>
				</view>
			</view>
			<view class="padding">支出</view>
			<view class="flex-sub text-center">
				<view class="solid-bottom text-xl padding">
					<text class="text-price text-red">80.00</text>
				</view>
			</view>
		</view>
		<!-- #ifdef H5 -->
		<view class="cu-bar fixed cu-form-group" :style="[{top:(StatusBar*2 + CustomBar*2 + 90) + 'rpx'},{zIndex:2}]">
		<!-- #endif -->
		<!-- #ifdef MP -->
		<view class="cu-bar fixed cu-form-group" :style="[{top:'90rpx'},{zIndex:2}]">
		<!-- #endif -->
		<!-- #ifdef APP-PLUS -->
		<view class="cu-bar fixed cu-form-group" :style="[{top:'90rpx'},{zIndex:2}]">
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
			<view class="">
				<button class="cu-btn round bg-blue sm margin-left" type="primary" @tap="newLog = true">新增记录</button>
			</view>
			
		</view>
		<!-- #ifdef H5 -->
		<view class="cu-list menu-avatar " :style="{marginTop:(StatusBar*2+CustomBar*2 + 90) + 'rpx'}">
		<!-- #endif -->
		<!-- #ifdef MP -->
		<view class="cu-list menu-avatar " :style="{marginTop:(90 + CustomBar*2) + 'rpx'}">
		<!-- #endif -->
		<!-- #ifdef APP-PLUS -->
		<view class="cu-list menu-avatar " :style="{marginTop:(90 + CustomBar*2) + 'rpx'}">
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
					<view class="cu-tag radius light bg-white text-lg text-red">￥5<text class="cuIcon-delete text-red padding-left" @tap="DelLog(item)"></text></view>
				</view>
			</view>
		</view>
		<view class="cu-modal" :class="newLog?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">新增记账记录
					</view>
					<view class="action" @tap="newLog = false">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="">
					<view class="cu-form-group margin-top-sm">
						<view class="title">记录标题</view>
						<input placeholder="账本记录的简短标题" @input="Input('title',$event)">
					</view>
					<view class="cu-form-group ">
						<view class="title">记录描述</view>
						<input placeholder="账本记录的描述" @input="Input('des',$event)">
					</view>
					<view class="cu-form-group ">
						<view class="title">记录金额</view>
						<input placeholder="账本记录金额" @input="Input('money',$event)">
					</view>
					<view class="cu-form-group">
						<view class="title">记录类型</view>
						<switch @change="moneyLogNew.isIn = !moneyLogNew.isIn" class="checked"></switch>
					</view>
				</view>
				<view class="cu-bar bg-white justify-end margin-top-sm">
					<view class="action">
						<button class="cu-btn line-green text-green" @tap="newLog = false">取消</button>
						<button class="cu-btn bg-green margin-left" @tap="newLogConfirm">确定</button>
		
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
				type_index:"-1",
				StatusBar:this.StatusBar,
				CustomBar:this.CustomBar,
				newLog:false,
				moneyLogNew:{
					title:'',
					des:"",
					money:"",
					isIn:true
				}
				
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
			Input(key,e){
				console.log(key,e.detail.value)
				this.moneyLogNew[key] = e.detail.value;
			},
			newLogConfirm(){
				console.log(this.moneyLogNew)
			},
			DelLog(logid){
				uni.showModal({
					content:"确定删除记录？",
					title:"提示",
					success: res => {
						if (res.confirm) {
							console.log("del log id:"+logid)
						}
					}
				})
			}
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
