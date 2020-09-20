<template>
	<view class="cu-card dynamic">
		<view class="cu-item shadow" v-for="(item,index) in newsList" :key="index">
			<view class="cu-list menu-avatar" @click="UserGroup(item.userid)">
				<view class="cu-item">
					<view class="cu-avatar round lg" :style="'background-image:url('+item.headerpic+');'"></view>
					<view class="content flex-sub">
						<view>{{item.username}}</view>
						<view class="text-gray text-sm flex justify-between">
							{{item.created_at}}
						</view>
					</view>
				</view>
			</view>
			<view class="text-content" style="margin-top: 12rpx;" @click="cardDetail(item.id)">
				{{item.content}}
			</view>
			<view class="grid flex-sub padding-lr" :class="item.images.length>1?'col-3 grid-square':'col-1'" @click="cardDetail(item.id)">
				<view class="bg-img" :class="item.images.length>1?'':'only-img'" 
					:style="'background-image:url('+item1+');'"
					v-for="(item1,index1) in item.images" :key="index1">
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
			isCardShow(images){
				//console.log(this.newsList[e].imgurl.length)
				console.log(images.length)
				return (images.length <= 1)?false:true
				//return this.newsList[e].imgurl.length <= 1?false:true
			},
			cardDetail(newsid){
				this.$emit("cardDetail",newsid)
			},
			UserGroup(newsid){
				this.$emit("UserGroup",newsid)
			}
		}
	}
</script>

<style>

</style>
