<template>
	<view class="">
		<view class="cu-form-group" style="margin-bottom: 4rpx;">
			<view class="title">课表日期</view>
			<input placeholder="选择课表日期" name="input" disabled :value="dateSet"></input>
			<button class='cu-btn bg-green shadow' @click="showPicker = !showPicker">选择</button>
		</view>
		<mx-date-picker :show="showPicker" 
			:type="'date'"
			:format="'yyyy-mm-dd'"
			:value="dateSet"
			@confirm="onSelected" 
			@cancel="onSelected"
			/>
			
		<scroll-view scroll-x class="bg-white nav " scroll-with-animation :scroll-left="scrollLeft">
			<view class="cu-item" :class="index==TabCur?'text-green cur':''" v-for="(item,index) in classList" :key="index" @tap="tabSelect" :data-id="index">
				{{item}}
			</view>
		</scroll-view>
		<view class="course-table margin-top-sm" v-for="(table,t_index) in courseList" :key="t_index">
			<view class="cu-form-group" v-for="(item,i_index) in table" :key="i_index">
				<view class="title">{{item.title}}</view>
				<view class="picker">
					{{item.name||'无课程'}}
				</view>
				<view class="picker">
					{{item.teacher_name||'无教师'}}
				</view>
				<view v-if="item.course_id>0">
					<button class='cu-btn line-green sm margin-left' @tap="goPlan(item.course_id)">计划</button>
					<button class='cu-btn line-green sm margin-left' @tap="goComment(item.course_id)">点评</button>
				</view>
			</view>
		</view>
		<view class="cu-tabbar-height"></view>
	</view>
</template>

<script>
	import MxDatePicker from '../../components/mx-datepicker/mx-datepicker.vue'
	export default {
		components:{
			MxDatePicker
		},
		data() {
			return {
				showPicker: false,
				dateSet: '',
				TabCur: 0,
				scrollLeft: 0,
				classList:[],
				classSet:'',
				courseTable:{
					table_id:0,
					table_date:"",
					table_class:"",
				},
				courseList:[
					[
						{course_id:0,title:'上午第一节',name:"无课程",teacher_:0,teacher_name:"无教师"},
						{course_id:0,title:'上午第二节',name:"无课程",teacher_:0,teacher_name:"无教师"},
						{course_id:0,title:'上午第三节',name:"无课程",teacher_:0,teacher_name:"无教师"},
						{course_id:0,title:'上午第四节',name:"无课程",teacher_:0,teacher_name:"无教师"},
					],
					[
						{course_id:0,title:'下午第一节',name:"无课程",teacher_:0,teacher_name:"无教师"},
						{course_id:0,title:'下午第二节',name:"无课程",teacher_:0,teacher_name:"无教师"},
						{course_id:0,title:'下午第三节',name:"无课程",teacher_:0,teacher_name:"无教师"},
						{course_id:0,title:'下午第四节',name:"无课程",teacher_:0,teacher_name:"无教师"},
					],
					[
						{course_id:0,title:'晚辅第一节',name:"无课程",teacher_:0,teacher_name:"无教师"},
						{course_id:0,title:'晚辅第二节',name:"无课程",teacher_:0,teacher_name:"无教师"},
						{course_id:0,title:'晚辅第三节',name:"无课程",teacher_:0,teacher_name:"无教师"},
					],
				],
				allCourseList:'',
				
			}
		},
		onLoad() {
			var now = new Date();
			this.dateSet = now.getFullYear()+'-'+(now.getMonth()+1) + '-' + now.getDate()
			this.classInit()
			this.classSet = this.classList[0]
			this.courseListInit()
			this.ourseTableInit()
		},
		methods:{
			async classInit(){
				this.classList = await this.$api.json('allClassList')
				this.classSet = this.classList[0]
			},
			async courseListInit(){
				this.allCourseList = await this.$api.json('allCourseList')
			},
			tabSelect(e) {
				this.classSet = this.classList[e.currentTarget.dataset.id]
				console.log(this.classSet)
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
				this.ourseTableInit()
			},
			async ourseTableInit(){
				if(this.dateSet !== '' && this.classSet !== ''){
					let courseTableList = await this.$api.json('courseTableList')
					this.courseTable = courseTableList[0]
					this.courseList = this.courseTable.courseList
					console.log(this.courseTable) 
				}
			},
			onSelected(e) {//选择
				this.showPicker = false;
				if(e) {
					this[this.type] = e.value; 
					//选择的值
					console.log('value => '+ e.value);
					this.dateSet = e.value
					//原始的Date对象
					//console.log('date => ' + e.date);
					this.ourseTableInit()
				}
			},
			goPlan(courseid){
				uni.navigateTo({
					url:'/pages/study/course-plan?id='+courseid
				})
			},
			goComment(courseid){
				uni.navigateTo({
					url:'/pages/study/course-comment?id='+courseid
				})
			}
		}
	}
</script>

<style>
	.nav .cu-item.cur {
	    border-bottom: 2px solid;
	}
	.text-green, .line-green, .lines-green {
	    color: #39b54a;
	}
	.btn-sign{
		position: sticky;
		z-index: 1;
		position: fixed;
		width: 100%;
		left: 0;
		bottom: 0;
	}
</style>
