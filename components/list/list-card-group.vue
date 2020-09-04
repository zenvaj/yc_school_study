<template>
	<view class="cu-card dynamic">
		<view class="cu-item shadow" v-for="(item,index) in newsList" :key="index">
			<view class="cu-list menu-avatar">
				<view class="cu-item">
					<view class="cu-avatar round lg" :style="'background-image:url('+item.headpic+');'"></view>
					<view class="content flex-sub">
						<view>{{item.nickname}}</view>
						<view class="text-gray text-sm flex justify-between">
							{{item.time}}
						</view>
					</view>
				</view>
			</view>
			<view class="text-content" style="margin-top: 12rpx;">
				{{item.title}}
			</view>
			<view class="grid flex-sub padding-lr" :class="isCardShow(index)?'col-3 grid-square':'col-1'">
				<view class="bg-img" :class="isCardShow(index)?'':'only-img'" 
					:style="'background-image:url('+item1+');'"
					v-for="(item1,index1) in item.imgurl" :key="index1">
				</view>
			</view>
			<view class="text-gray text-sm text-right padding">
				<text class="cuIcon-attentionfill margin-lr-xs"></text> {{item.num.view}}
				<text class="cuIcon-appreciatefill margin-lr-xs"></text> {{item.num.up}}
				<text class="cuIcon-messagefill margin-lr-xs"></text> {{item.num.comment}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isCard:false
			};
		},
		
		props:['newsList'],
		beforeMount(){
			//console.log(this.newsList.imgurl)
			//this.isCard = this.newsList.imgurl.length <= 1?true:false;
		},
		methods:{
			isCardShow(e){
				//console.log(this.newsList[e].imgurl.length)
				return this.newsList[e].imgurl.length <= 1?false:true
			}
		}
	}
</script>

<style>

</style>
