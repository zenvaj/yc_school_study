<template>
	<view>
		<view class="cu-bar bg-white margin-top">
			<view class="action">
				美美帅帅大照片
			</view>
			<view class="action">
				{{imgList.length}}/9
			</view>
		</view>
		<view class="cu-form-group">
			<view class="grid col-3 grid-square flex-sub">
				<view class="bg-img" v-for="(item,index) in imgList" :key="index" @tap="ViewImage" :data-url="imgList[index]">
				 <image :src="imgList[index]" mode="aspectFill"></image>
					<view class="cu-tag bg-red" @click.stop="DelImg" :data-index="index">
						<text class='cuIcon-close'></text>
					</view>
				</view>
				<view class="solids" @tap="ChooseImage" v-if="imgList.length<9">
					<text class='cuIcon-cameraadd'></text>
				</view>
			</view>
		</view>
		
		<view class="cu-form-group margin-top">
			<view class="title">叨叨类型</view>
			<picker @change="PickerChange" :value="index" :range="picker">
				<view class="picker">
					{{index>-1?picker[index]:'选择叨叨类型'}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group align-start">
			<view class="title">叨叨吧</view>
			<textarea maxlength="-1" @input="textareaInput" style="height: 300rpx;" styplaceholder="想说说吧"></textarea>
		</view>
		<view class="cu-tabbar-height"></view>
		<view class="btn-sign">
			<view class="cu-bar bg-white margin-top">
				<view class="action">
					
				</view>
				<view class="action">
					<button class="cu-btn bg-green shadow lg" @tap="showModalSign">发布</button>
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
	export default{
		data(){
			return{
				imgList: [],
				ModelShow:false,
				ModelShowDes:'',
				index: -1,
				picker: ['牢骚','美丽心情','美丽食物'],
			}
		},
		onLoad() {
			
		},
		methods: {
			ChooseImage() {
				uni.chooseImage({
					count: 9, //默认9
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
					title: '这位小朋宇',
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
				this.ModelShowDes = "确定发布该叨叨么？";
				this.ModelShow = true
			},
			hideModalSign() {
				this.ModelShow = false
			},
			stdSign(){
				console.log("确定发布")
				//发布数据提交
				uni.showModal({
					content: '发布成功',
					showCancel:false
				})
				this.ModelShow = false
			},
			cancel(res) {
				uni.showToast({
					title: '点击取消，输入值为：' + res.value,
					icon: 'none'
				})
			},
			PickerChange(e) {
				this.index = e.detail.value
			},
			textareaInput(e) {
				//this.textareaAValue = e.detail.value
				console.log(e.detail.value)
			},
		}
	}
</script>

<style>
	.btn-sign{
		position: sticky;
		position: fixed;
		width: 100%;
		left: 0;
		bottom: 0;
	}
</style>
