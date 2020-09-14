<template>
	<view class="">
		<scroll-view scroll-x class="bg-white nav">
			<view class="flex text-center">
				<view class="cu-item flex-sub" :class="0==TabCur?'bg-gradual-green':''" @tap="tabSelect" :data-id="0">
					<text class="cuIcon-camerafill"></text> 家长自提
				</view>
				<view class="cu-item flex-sub" :class="1==TabCur?'bg-gradual-blue':''" @tap="tabSelect" :data-id="1">
					<text class="cuIcon-camerafill"></text> 11路公交
				</view>
				<view class="cu-item flex-sub" :class="2==TabCur?'bg-gradual-orange':''" @tap="tabSelect" :data-id="2">
					<text class="cuIcon-camerafill"></text> 送货上门
				</view>
			</view>
		</scroll-view>
		<view class="cu-bar bg-white margin-top">
			<view class="action">
				离校学生
			</view>
			<view class="">
				<uni-search-bar radius="100" @confirm="search" @input="input" @cancel="cancel" />
			</view>
		</view>
		<view class="padding-lr">
			<view class="search-result">
				<view class="cu-list menu-avatar" v-if="searchVal">
					<view class="cu-item" :class="stdSelectedIndex=='move-box-'+ index?'move-cur':''" v-for="(item,index) in studentList" :key="index"
					 @touchstart="ListTouchStart" @touchmove="ListTouchMove" @touchend="ListTouchEnd" :data-target="'move-box-' + index">
						<view class="cu-avatar round lg" :style="[{backgroundImage:'url('+ item.headpic}]"></view>
						<view class="content">
							<view class="text-grey">{{item.name}}</view>
							<view class="text-gray text-sm">
								<text class="cuIcon-location text-red margin-right-xs"></text> {{item.area}}</view>
						</view>
						<view class="action">
							<view class="text-grey text-xs">{{item.gradeClass}}</view>
							<view class="cu-tag round sm" :class="item.signStatus?'bg-green':'bg-grey'">{{item.signStatus?'已经签到':'未签到'}}</view>
						</view>
						<view class="move">
							<view :class="item.signStatus?'bg-green':'bg-grey'" @click="ChoiseStd(item)">选择</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<view class="cu-bar bg-white margin-top" v-if="studentSelected.length > 0">
			<view class='action'>
				<text class='cuIcon-title text-blue'></text>神兽们
			</view>
		</view>
		<view class='padding-sm flex flex-wrap'>
			<view class="padding-xs" v-for="(item,index) in studentSelected" :key="index" >
				<view class="cu-capsule radius">
					<view class='cu-tag bg-blue '>
						{{item.name}}
					</view>
					<view class="cu-tag line-blue" @click="DelStd(index)">
						<text class="cuIcon-close"></text>
					</view>
				</view>
			</view>
		</view>
		
		<view class="cu-form-group">
			<view class="title">是否早退</view>
			<switch @change="isEarly = !isEarly" :class="isEarly?'checked':''" :checked="isEarly?true:false"></switch>
		</view>
		<view class="cu-form-group margin-top">
			<view class="title">早退原因</view>
			<picker @change="PickerChange" :value="index" :range="picker">
				<view class="picker">
					{{index>-1?picker[index]:'选择早退原因'}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group align-start">
			<view class="title">早退原因</view>
			<textarea maxlength="-1" @input="textareaInput" placeholder="学生早退原因"></textarea>
		</view>
		
		<view class="cu-tabbar-height"></view>
		<view class="btn-sign">
			<view class="cu-bar bg-white margin-top">
				<view class="action">
					<text class="cuIcon-my text-orange "></text> 签到核查教师：刘丽仙
				</view>
				<view class="action">
					<button class="cu-btn bg-green shadow lg" @tap="showModalSign">离校签到</button>
				</view>
			</view>
			<view class="cu-modal bottom-modal" :class="ModelShow?'show':''">
				<view class="cu-dialog">
					<view class="cu-bar bg-white">
						<view class="action text-blue" @tap="hideModalSign">取消</view>
						<view class="action text-green" @tap="stdSign">确定</view>
					</view>
					<view class="padding-xl">
						{{ModelShowDes}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
	import uniSection from '@/components/uni-section/uni-section.vue'
	export default{
		components: {
			uniSearchBar,
			uniSection
		},
		data() {
			return {
				index: -1,
				TabCur: 0,
				scrollLeft: 0,
				studentList:[],
				studentSelected:[],
				isEarly:false,
				picker:['身体不适','家里有事','学校有事','提前放学'],
				ModelShow:false,
				ModelShowDes:'',
				searchVal:'',
				listTouchStart: 0,
				listTouchDirection: null,
				stdSelectedIndex:'',
			};
		},
		onLoad() {
			this.studentListInit()
		},
		methods: {
			async studentListInit(){
				this.studentList = await this.$api.json('allStudentList')
			},
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
			showModalSign() {
				//判断图片和学生的选中状态
				this.ModelShowDes = "确定给该学生离校签到么？";
				this.ModelShow = true
			},
			hideModalSign() {
				this.ModelShow = false
			},
			stdSign(){
				//签到数据提交
				uni.showModal({
					content: '签到成功',
					showCancel:false
				})
				this.ModelShow = false
			},
			//搜索框方法
			search(res) {
				uni.showToast({
					title: '搜索：' + res.value,
					icon: 'none'
				})
			},
			input(res) {
				this.searchVal = res.value
			},
			cancel(res) {
				uni.showToast({
					title: '点击取消，输入值为：' + res.value,
					icon: 'none'
				})
			},
			// ListTouch触摸开始
			ListTouchStart(e) {
				this.listTouchStart = e.touches[0].pageX
			},
			
			// ListTouch计算方向
			ListTouchMove(e) {
				this.listTouchDirection = e.touches[0].pageX - this.listTouchStart > 0 ? 'right' : 'left'
			},
			
			// ListTouch计算滚动
			ListTouchEnd(e) {
				if (this.listTouchDirection == 'left') {
					this.stdSelectedIndex = e.currentTarget.dataset.target
				} else {
					this.stdSelectedIndex = null
				}
				this.listTouchDirection = null
			},
			ChoiseStd(std){
				console.log(std)
				var std = {id:std.id,name:std.name}
				this.studentSelected.push(std)
			},
			DelStd(index){
				this.studentSelected.splice(index)
			},
			PickerChange(e) {
				this.index = e.detail.value
				console.log(this.index)
			},
			textareaInput(e){
				console.log(e.detail.value)
			}
		}
	}
</script>

<style scoped>
	.btn-sign{
		position: sticky;
		z-index: 1000;
		position: fixed;
		width: 100%;
		left: 0;
		bottom: 0;
	}
	.flex-sub{
		margin: 0;
	}
</style>
