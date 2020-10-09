<template>
	<view class="">
		<view class="cu-bar bg-white solid-bottom" @click="desShow = !desShow">
			<view class="action">
				<text class="cuIcon-title text-orange"></text> 课程信息 {{courseInfo.date}},{{courseInfo.course_name}}••••••
			</view>
			<view class="action">
				<button class="cu-btn bg-green sm shadow" @click.stop="planNew">新增</button>
			</view>
		</view>
		<view class="cu-modal" :class="newPlan?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">新建课堂计划
					</view>
					<view class="action" @tap="hideModal">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="">
					<view class="cu-form-group margin-top-sm">
						<view class="title">计划标题</view>
						<input placeholder="计划的简短标题" :value="planDataNew.title" @input="Input('title',$event)">
					</view>
					<view class="cu-form-group ">
						<view class="title">计划描述</view>
						<input placeholder="计划的描述" :value="planDataNew.des" @input="Input('des',$event)">
					</view>
					<view class="cu-form-group ">
						<view class="title">最大分数</view>
						<input placeholder="该计划给分最大值" :value="planDataNew.maxScore" @input="Input('maxScore',$event)">
					</view>
					<view class="cu-form-group">
						<view class="title">计划类型</view>
						<switch @change="planDataNew.isHigh = !planDataNew.isHigh" :class="planDataNew.isHigh?'checked':''" :checked="planDataNew.isHigh?true:false"></switch>
					</view>
				</view>
				<view class="cu-bar bg-white justify-end margin-top-sm">
					<view class="action">
						<button class="cu-btn line-green text-green" @tap="hideModal">取消</button>
						<button class="cu-btn bg-green margin-left" @tap="newPlanConfirm">确定</button>
		
					</view>
				</view>
			</view>
		</view>
		<view class="solid-bottom text-lg padding bg-white" v-if="desShow">
			<text class="text-black">
				{{courseInfo.date}},{{courseInfo.class_no}},【{{courseInfo.class_name}}{{courseInfo.course_name}}】,By:{{courseInfo.teacher_name}}
			</text>
		</view>
		<view class="cu-timeline">
			<view class="cu-time">基本</view>
			<view class="cu-item">
				<view class="content">
					<view class="cu-capsule radius">
						<view class="cu-tag bg-cyan">古诗四首</view>
						<view class="cu-tag line-cyan">满分（10）</view>
					</view>
					<button class="cu-btn line-blue shadow sm margin-left" @click="planEdit(planDataNew)">修改</button>
					<view class="margin-top">这是第一次，我家的铲屎官他狠狠地吼上10分钟，然后再看心情要不要他进门。</view>
				</view>
			</view>
		</view>
		<view class="cu-timeline">
			<view class="cu-time">提高</view>
			<view class="cu-item">
				<view class="content">
					<view class="cu-capsule radius">
						<view class="cu-tag bg-cyan">古诗朗诵</view>
						<view class="cu-tag line-cyan">额外加分（10）</view>
					</view>
					<button class="cu-btn line-blue shadow sm margin-left" @click="planEdit(planDataNew)">修改</button>
					<view class="margin-top">这是第一次，我家的铲屎官他狠狠地吼上10分钟，然后再看心情要不要他进门。</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				courseId:'0',
				courseInfo:'',
				desShow:false,
				newPlan:false,
				planDataNew:{
					id:0,
					title:'',
					des:'',
					maxScore:'',
					isHigh:false
				},
			}
		},
		onLoad(option){
			console.log(option)
			this.courseId = option.id
			this.CourseInfo()
		},
		methods:{
			async CourseInfo(courseID){
				var courseInfo = await this.$api.json('courseInfo')
				console.log(courseInfo)
				if(courseInfo.code !== '0000'){
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
					return
				}
				this.courseInfo = courseInfo.data
			},
			hideModal(){
				this.newPlan = false
			},
			planNew(){
				this.planDataNew.id = 0
				this.newPlan = true
			},
			planEdit(e){
				this.planDataNew.id = 0
				this.newPlan = true
			},
			newPlanConfirm(){
				console.log(this.planDataNew)
			},
			Input(key,e){
				console.log(e)
				this.planDataNew[key] = e.detail.value;
			},
			
		}
	}
</script>

<style>
</style>
