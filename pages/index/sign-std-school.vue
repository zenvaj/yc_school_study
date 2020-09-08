<template>
	<view>
		<view class="cu-bar bg-white margin-top">
			<view class="action">
				签到图片
			</view>
			<view class="action">
				{{imgList.length}}/4
			</view>
		</view>
		<view class="cu-form-group">
			<view class="grid col-4 grid-square flex-sub">
				<view class="bg-img" v-for="(item,index) in imgList" :key="index" @tap="ViewImage" :data-url="imgList[index]">
				 <image :src="imgList[index]" mode="aspectFill"></image>
					<view class="cu-tag bg-red" @click.stop="DelImg" :data-index="index">
						<text class='cuIcon-close'></text>
					</view>
				</view>
				<view class="solids" @tap="ChooseImage" v-if="imgList.length<4">
					<text class='cuIcon-cameraadd'></text>
				</view>
			</view>
		</view>
		<view class="cu-bar bg-white margin-top">
			<view class="action">
				签到学生
			</view>
			<view class="">
				<uni-search-bar radius="100" @confirm="search" @input="input" @cancel="cancel" />
			</view>
		</view>
		<view class="padding-lr">
			<view class="search-result">
				<view class="cu-list menu-avatar" v-if="searchVal">
					<view class="cu-item" :class="stdSelectedIndex=='move-box-'+ index?'move-cur':''" v-for="(item,index) in 11" :key="index"
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
		<view class="cu-form-group margin-top">
			<view class="title">是否迟到</view>
			<switch @change="switchIsLate" :class="stdSignIsLate?'checked':''" :checked="stdSignIsLate?true:false"></switch>
		</view>
		<view class="cu-form-group margin-top">
			<view class="title">迟到原因</view>
			<picker @change="PickerChange" :value="index" :range="picker">
				<view class="picker">
					{{index>-1?picker[index]:'选择迟到原因'}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group align-start">
			<view class="title">迟到原因</view>
			<textarea maxlength="-1" @input="textareaInput" placeholder="学生迟到原因"></textarea>
		</view>
		<view class="cu-tabbar-height"></view>
		<view class="btn-sign">
			<view class="cu-bar bg-white margin-top">
				<view class="action">
					<text class="cuIcon-my text-orange "></text> 签到核查教师：刘丽仙
				</view>
				<view class="action">
					<button class="cu-btn bg-green shadow lg" @tap="showModalSign">到校签到</button>
				</view>
			</view>
			<view class="cu-modal bottom-modal" :class="ModelShow?'show':''">
				<view class="cu-dialog">
					<view class="cu-bar bg-white">
						<view class="action text-blue" @click="hideModalSign">取消</view>
						<view class="action text-green" @click="stdSign">确定</view>
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
		data(){
			return{
				imgList: [],
				StdList:this.StdList,
				ModelShow:false,
				ModelShowDes:'',
				searchVal:'',
				listTouchStart: 0,
				listTouchDirection: null,
				stdSelectedIndex:'',
				index: -1,
				picker: ['睡过了','吃多了','帮老爷爷过马路了','手动填写'],
				stdSignIsLate: false,
			}
		},
		methods:{
			ChooseImage() {
				uni.chooseImage({
					count: 4, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					//sourceType: ['album'], //从相册选择
					success: (res) => {
						if (this.imgList.length != 0) {
							this.imgList = this.imgList.concat(res.tempFilePaths)
						} else {
							this.imgList = res.tempFilePaths
						}
					}
				});
			},
			ViewImage(e) {
				uni.previewImage({
					urls: this.imgList,
					current: e.currentTarget.dataset.url
				});
			},
			DelImg(e) {
				console.log('DelImg')
				uni.showModal({
					title: '这位老师',
					content: '确定不要这张美美哒照片吗？',
					cancelText: '留下吧',
					confirmText: '还能更好',
					success: res => {
						if (res.confirm) {
							this.imgList.splice(e.currentTarget.dataset.index, 1)
						}
					}
				})
			},
			showModalSign() {
				//判断图片和学生的选中状态
				this.ModelShowDes = "确定给该学生到校签到么？";
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
			//备注选择
			switchIsLate(e) {
				this.stdSignIsLate = e.detail.value
			},
			PickerChange(e) {
				this.index = e.detail.value
			},
			textareaInput(e) {
				//this.textareaAValue = e.detail.value
				console.log(e.detail.value)
			}
		}
	}
</script>

<style>
	.btn-sign{
		position: sticky;
		z-index: 1000;
		position: fixed;
		width: 100%;
		left: 0;
		bottom: 0;
	}
</style>
