<template>
	<view class="">
		<view class="cu-bar">
			<view class="cu-btn">
				日期选择
			</view>
			<view class="cu-btn">
				班级选择
			</view>
			<view class="cu-btn">
				教师选择
			</view>
		</view>
		<view class="padding-xs text-sm flex align-start">
			<view class="" style="width: 180rpx;">
				<view class="solid-bottom padding text-center">
					<view class="">
						课次
					</view>
				</view>
				<view class="solid-bottom padding text-center" v-for="(item,index) in 8" :key="index">
					<view class="">
						{{item<4?'上午':(item<7?'下午':'晚辅')}}
					</view>
					第{{item<4?item:(item<7?item-3:item-6)}}节
				</view>
			</view>
			<scroll-view class=" bg-gray" scroll-x scroll-with-animation style="width:calc(100vw - 180rpx);">
				<view class="flex table-box">
					<view class="table-day" style="" v-for="(v,k) in 6" :key="k">
						<view class="solid-bottom solid-right padding">
							<view class="">
								班级{{v}}
							</view>
						</view>
						<view class="solid-bottom solid-right padding" @tap="CourseEdit(v,item)" v-for="(item,index) in 8" :key="index">
							英语{{item}}
							<view class="">
								<text class="cuIcon-activity">老师{{item}}</text>
							</view>
						</view>
					</view>
				</view>
				
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			CourseEdit(v,item){
				uni.showModal({
					content:"点击了第"+item+"行，第"+v+"列"
				})
			}
		}
	}
</script>

<style lang="scss">
	.table-value{
		
	}
		.table-day{
			min-width: 180rpx;
		}
</style>
