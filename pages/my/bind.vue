<template>
	<view class="">
		<scroll-view scroll-x class="bg-white nav">
			<view class="flex text-center">
				<view class="cu-item flex-sub" :class="0==TabCur?'bg-gradual-blue':''" @tap="tabSelect" :data-id="0">
					<text class="cuIcon-camerafill"></text> 好友
				</view>
				<view class="cu-item flex-sub" :class="1==TabCur?'bg-gradual-blue':''" @tap="tabSelect" :data-id="1">
					<text class="cuIcon-camerafill"></text> 母上父上
				</view>
				<view class="cu-item flex-sub" :class="2==TabCur?'bg-gradual-blue':''" @tap="tabSelect" :data-id="2">
					<text class="cuIcon-camerafill"></text> 神兽宝宝
				</view>
			</view>
		</scroll-view>
		<uni-search-bar radius="100" @confirm="search" @input="input" @cancel="cancel" />
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
							<view :class="item.signStatus?'bg-green':'bg-grey'" @click="choiceBind(item)">绑定</view>
						</view>
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
		data(){
			return{
				searchVal:'',
				listTouchStart: 0,
				listTouchDirection: null,
				stdSelectedIndex:'',
				index: -1,
				studentList:[],
				TabCur:0,
			}
		},onLoad() {
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
			//选择绑定
			choiceBind(){
				console.log('choiceBind')
				uni.showModal({
					title: '这位道友',
					content: '确定要绑定这段关系吗？',
					cancelText: '找更好的',
					confirmText: '就他吧',
					success: res => {
						if (res.confirm) {
							//
							uni.showModal({
								content:"绑定成功",
								showCancel:false
							})
						}
					}
				})
			}
		}
	}
</script>

<style>
</style>
