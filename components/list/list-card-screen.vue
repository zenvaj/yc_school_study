<template>
	<view>
		<view class="cu-card case ">
			<view class="cu-item shadow" v-for="(item,index) in newsList" :key="item.id" @click="cardDetail(item.id)">
				<view class="image">
					<image :src="item.imgurl" mode="widthFix"></image>
					<view class="cu-tag bg-blue">{{item.mark}}</view>
					<view class="cu-bar bg-shadeBottom"> <text class="text-cut">{{item.title}}</text></view>
				</view>
				<view class="cu-list menu-avatar">
					<view class="cu-item">
						<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
						<view class="content flex-sub">
							<view class="text-grey">{{item.nickname}}</view>
							<view class="text-gray text-sm flex justify-between">
								{{item.time}}
								<view class="text-gray text-sm">
									<text class="cuIcon-attentionfill margin-lr-xs"></text> {{item.num.view}}
									<text class="cuIcon-appreciatefill margin-lr-xs"></text> {{item.num.up}}
									<text class="cuIcon-messagefill margin-lr-xs"></text> {{item.num.comment}}
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:['newsList'],
		methods:{
			cardDetail(newsid){
				this.$emit("cardDetail",newsid)
			}
		}
	}
</script>

<style>

</style>
