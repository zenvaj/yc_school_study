<template>
	<view class="">
		<form>
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
			<!-- <view class="cu-form-group margin-top-sm">
				<view class="title">是否开启编辑模式</view>
				<switch @change="courseEditEnable = !courseEditEnable" :class="courseEditEnable?'checked':''" :checked="courseEditEnable?true:false"></switch>
			</view> -->
			<view class="course-table margin-top-sm" v-for="(table,t_index) in courseList" :key="t_index">
				<view class="cu-form-group" v-for="(item,i_index) in table" :key="i_index">
					<view class="title">{{item.title}}</view>
					<!-- <input placeholder="课程名称" :disabled="courseEditEnable?false:true" name="input" :value="item.name"/> -->
					<picker @change="PickerChangeCourse(t_index,i_index,$event)" :value="pickeKeyCourse(item.name)" :range="allCourseList" :disabled="courseEditEnable?false:true">
						<view class="picker">
							{{item.name||'选择课程'}}
						</view>
					</picker>
					<!-- <button class='cu-btn line-green shadow margin-left'>{{item.teacher_name||'教师'}}</button> -->
					<picker @change="PickerChangeTeacher(t_index,i_index,$event)" range-key="teacher_name" :value="pickeKeyTeacher(item.teacher_name)" :range="allTeacherList" :disabled="courseEditEnable?false:true">
						<view class="picker">
							{{item.teacher_name||'选择教师'}}
						</view>
					</picker>
				</view>
			</view>
			<view class="cu-tabbar-height"></view>
			<view class="cu-form-group btn-sign" v-if="courseEditEnable">
				<view class="title"></view>
				<button class='cu-btn bg-green shadow' @click="SaveCourseTable">模板</button>
				<button class='cu-btn bg-green shadow' @click="SaveCourseTable">套用昨天</button>
				<button class='cu-btn bg-green shadow' @click="SaveCourseTable">保存课程</button>
			</view>
		</form>
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
						{course_id:0,title:'上午第一节',name:"选择课程",teacher_:0,teacher_name:"选择教师"},
						{course_id:0,title:'上午第二节',name:"选择课程",teacher_:0,teacher_name:"选择教师"},
						{course_id:0,title:'上午第三节',name:"选择课程",teacher_:0,teacher_name:"选择教师"},
						{course_id:0,title:'上午第四节',name:"选择课程",teacher_:0,teacher_name:"选择教师"},
					],
					[
						{course_id:0,title:'下午第一节',name:"选择课程",teacher_:0,teacher_name:"选择教师"},
						{course_id:0,title:'下午第二节',name:"选择课程",teacher_:0,teacher_name:"选择教师"},
						{course_id:0,title:'下午第三节',name:"选择课程",teacher_:0,teacher_name:"选择教师"},
						{course_id:0,title:'下午第四节',name:"选择课程",teacher_:0,teacher_name:"选择教师"},
					],
					[
						{course_id:0,title:'晚辅第一节',name:"选择课程",teacher_:0,teacher_name:"选择教师"},
						{course_id:0,title:'晚辅第二节',name:"选择课程",teacher_:0,teacher_name:"选择教师"},
						{course_id:0,title:'晚辅第三节',name:"选择课程",teacher_:0,teacher_name:"选择教师"},
					],
				],
				courseEditEnable:true,
				allCourseList:'',
				allTeacherList:'',
				
			}
		},
		onLoad() {
			var now = new Date();
			this.dateSet = now.getFullYear()+'-'+(now.getMonth()+1) + '-' + now.getDate()
			this.classInit()
			this.classSet = this.classList[0]
			this.courseListInit()
			this.teacherListInit()
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
			async teacherListInit(){
				this.allTeacherList = await this.$api.json('allTeacherList')
			},
			dateChoice(e){
				console.log(e)
				this.dateSet = e.result
				this.courseTable.table_date = e.result
				this.ourseTableInit()
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
			pickeKeyCourse(courseName){ 
				var checkRe = this.allCourseList.indexOf(courseName)
				return checkRe
			},
			PickerChangeCourse(t,i,e) {
				//console.log(t,i,e)
				var index = e.detail.value
				console.log(this.allCourseList[index])
				this.courseList[t][i].name = this.allCourseList[index]
				//console.log(this.courseList)
			},
			pickeKeyTeacher(teacherName){
				var checkRe = this.allTeacherList.indexOf(teacherName)
				return checkRe
			},
			PickerChangeTeacher(t,i,e) {
				//console.log(t,i,e)
				var index = e.detail.value
				console.log(this.allTeacherList[index])
				this.courseList[t][i].teacher_name = this.allTeacherList[index].teacher_name
				this.courseList[t][i].teacher_id = this.allTeacherList[index].id
				//console.log(this.courseList)
			},
			SaveCourseTable(){
				uni.showModal({
					title: '课程保存',
					content: '确定要保存当前课程安排吗？',
					cancelText: '取消',
					confirmText: '是的',
					success: res => {
						if (res.confirm) {
							this.courseEditEnable = false;
						}
					}
				})
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
				}
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
