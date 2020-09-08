<template>
	<view class="">
		
		<view class="cu-timeline">
			<view class="cu-time">06-17</view>
			<view class="cu-item">
				<view class="content">
					<view class="cu-capsule radius">
						<view class="cu-tag bg-cyan">上午</view>
						<view class="cu-tag line-cyan">10:00</view>
					</view>
					<view class="margin-top">这是第一次，我家的铲屎官他狠狠地吼上10分钟，然后再看心情要不要他进门。</view>
				</view>
				<slider value="5" @change="sliderChange" min="0" max="10" show-value />
			</view>
			<view class="cu-item">
				<view class="content">
					<view class="cu-capsule radius">
						<view class="cu-tag bg-cyan">上午</view>
						<view class="cu-tag line-cyan">10:00</view>
					</view>
					<view class="margin-top">这是第一次，我家的铲屎官他狠狠地吼上10分钟，然后再看心情要不要他进门。</view>
				</view>
				<slider value="5" @change="sliderChange" min="0" max="10" show-value />
			</view>
			<view class="cu-item">
				<view class="content">
					<view class="cu-capsule radius">
						<view class="cu-tag bg-cyan">上午</view>
						<view class="cu-tag line-cyan">10:00</view>
					</view>
					<view class="margin-top">这是第一次，我家的铲屎官他狠狠地吼上10分钟，然后再看心情要不要他进门。</view>
				</view>
				<slider value="5" @change="sliderChange" min="0" max="10" show-value />
			</view>
		</view>
		<view class="cu-timeline">
			<view class="cu-time">06-17</view>
			<view class="cu-item">
				<view class="content">
					<view class="cu-capsule radius">
						<view class="cu-tag bg-cyan">上午</view>
						<view class="cu-tag line-cyan">10:00</view>
					</view>
					<view class="margin-top">这是第一次，我家的铲屎官他狠狠地吼上10分钟，然后再看心情要不要他进门。</view>
				</view>
				<slider value="5" @change="sliderChange" min="0" max="10" show-value />
			</view>
		</view>
		<view class="cu-timeline">
			<view class="cu-time">06-17</view>
			<view class="cu-item">
				<view class="content">
					<view class="cu-capsule radius">
						<view class="cu-tag bg-cyan">上午</view>
						<view class="cu-tag line-cyan">10:00</view>
					</view>
					<view class="margin-top">这是第一次，我家的铲屎官他狠狠地吼上10分钟，然后再看心情要不要他进门。</view>
				</view>
				<slider value="5" @change="sliderChange" min="0" max="10" show-value />
			</view>
		</view>
		
	</view>
</template>

<script>
	export default{
		data(){
			return {
				courseId:'0',
				courseInfo:''
			}
		},
		onLoad(option){
			console.log(option)
			this.courseId = option.id
			this.CourseInfo()
		},
		methods:{
			async CourseInfo(courseID){
				this.courseInfo = await this.$api.json('courseInfo')
				console.log(this.courseInfo)
				if(this.courseInfo.code !== '0000'){
					uni.showModal({
						title: '错误',
						content: '无当前课程数据',
						cancelText: '确定',
						confirmText: '取消',
						success: res => {
							if (res.confirm) {
								
							}
							uni.navigateBack()
						},
						fail:res => {
							console.log('fail',res)
						},
						complete:res => {
							console.log('complete',res)
						}
					})
				}
			},
			sliderChange(e) {
				console.log('value 发生变化：' + e.detail.value)
			},
		}
	}
</script>

<style>
</style>
