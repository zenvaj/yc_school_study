<template>
	<view class="">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText"></block>
			<block slot="content">离校签到</block>
		</cu-custom>
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
					<view class="cu-item" :class="stdSelectedIndex=='move-box-'+ index?'move-cur':''" v-for="(item,index) in 4" :key="index"
					 @touchstart="ListTouchStart" @touchmove="ListTouchMove" @touchend="ListTouchEnd" :data-target="'move-box-' + index">
						<view class="cu-avatar round lg" :style="[{backgroundImage:'url(https://ossweb-img.qq.com/images/lol/web201310/skin/big2100'+ (index+2) +'.jpg)'}]"></view>
						<view class="content">
							<view class="text-grey">文晓港</view>
							<view class="text-gray text-sm">
								<text class="cuIcon-location text-red margin-right-xs"></text> 大宋</view>
						</view>
						<view class="action">
							<view class="text-grey text-xs">8年纪3班</view>
							<view class="cu-tag round bg-green sm">已经签到</view>
						</view>
						<view class="move">
							<view class="bg-green">选择</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="" v-if="0==TabCur">
			叮嘱一下路上小心
		</view>
		<view class="" v-if="1==TabCur">
			叮嘱一下路上小心
		</view>
		<view class="" v-if="2==TabCur">
			选择送达地点，叮嘱一下
		</view>
		
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
				TabCur: 0,
				scrollLeft: 0,
				StdList:this.StdList,
				ModelShow:false,
				ModelShowDes:'',
				searchVal:'',
				listTouchStart: 0,
				listTouchDirection: null,
				stdSelectedIndex:'',
			};
		},
		methods: {
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
		}
	}
</script>

<style scoped>
	.btn-sign{
		position: sticky;
		z-index: 1;
		position: fixed;
		width: 100%;
		left: 0;
		bottom: 0;
	}
	.flex-sub{
		margin: 0;
	}
</style>
