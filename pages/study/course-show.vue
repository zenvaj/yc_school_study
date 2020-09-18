<template>
	<view class="">
		<view class="form">
			<view class="cu-form-group">
				<view class="title">课表日期</view>
				<input placeholder="选择课表日期" name="input" disabled :value="dateSet"></input>
				<button class='cu-btn bg-gradual-blue shadow' @click="showPicker = !showPicker">选择日期</button>
			</view>
		</view>
		<mx-date-picker :show="showPicker"
			:type="'date'"
			:format="'yyyy-mm-dd'"
			:value="dateSet"
			@confirm="onSelected" 
			@cancel="onSelected"
			/>
		<view class="cu-modal" :class="modalEdit?'show':''" @tap="modalEdit = false">
			<view class="cu-dialog" @tap.stop="">
				<view class="cu-list menu sm-border card-menu ">
					<form>
					<view class="cu-form-group margin-top">
						<view class="title">设置课程</view>
						<picker @change="CourseChange" :value="course_index" :range="course_list">
							<view class="picker">
								{{course_list[course_index]}}
							</view>
						</picker>
					</view>
					</form>
					<view class="cu-item arrow" >
						<view class="content">
							<text class="cuIcon-circlefill text-grey"></text>
							<text class="text-grey">课堂计划</text>
						</view>
					</view>
					<view class="cu-item arrow" >
						<view class="content">
							<text class="cuIcon-circlefill text-grey"></text>
							<text class="text-grey">课堂评价</text>
						</view>
					</view>
					<view class="cu-item arrow" >
						<view class="content">
							<text class="cuIcon-circlefill text-grey"></text>
							<text class="text-grey">课堂一览</text>
						</view>
					</view>
					<view class="cu-item arrow" >
						<view class="content">
							<text class="cuIcon-circlefill text-grey"></text>
							<text class="text-grey">学生一览</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<view class="padding-xs text-sm flex align-start">
			<view class="" style="width: 180rpx;">
				<view class="solid-bottom padding text-center bg-cyan">
					<view class="">
						课次
					</view>
				</view>
				<view class="solid-bottom padding text-center bg-white" v-for="(item,index) in 8" :key="index">
					<view class="">
						{{item<4?'上午':(item<7?'下午':'晚辅')}}
					</view>
					第{{item<4?item:(item<7?item-3:item-6)}}节
				</view>
			</view>
			<scroll-view class="" scroll-x scroll-with-animation style="width:calc(100vw - 180rpx);">
				<view class="flex table-box">
					<view class="table-day" style="min-width: 180rpx;" v-for="(v,k) in 6" :key="k">
						<view class="solid-bottom solid-right padding bg-white">
							<view class="">
								班级{{v}}
							</view>
						</view>
						<view class="solid-bottom solid-right padding" :class="item<7?'bg-grey':''" @tap="CourseEdit(v,item)" v-for="(item,index) in 8" :key="index">
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
import MxDatePicker from '../../components/mx-datepicker/mx-datepicker.vue'
	export default {
		components:{
			MxDatePicker
		},
		data() {
			return {
				showPicker: false,
				dateSet: '',
				modalEdit :false,
				course_index:0,
				course_list:['选择课程',
	'语文',
	'数学',
	'英语',
	'物理',
	'化学',
	'生物',
	'地理',
	'政治',
	'历史',
	'智能单词',
	'作业',
	'多媒体'],
				teacher:"设置教师",
			};
		},
		methods:{
			CourseEdit(v,item){
				this.modalEdit = true
				return	
				uni.showModal({
					content:"点击了第"+item+"行，第"+v+"列"
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
					//this.ourseTableInit()
				}
			},
			CourseChange(e) {
				console.log(e.detail)
				this.course_index = e.detail.value
			},
		}
	}
</script>

<style lang="scss">
	.table-value{
		
	}
</style>
