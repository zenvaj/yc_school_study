<template>
	<view class="">
		<view class="cu-bar bg-white margin-top"><view class="action">背景图片</view></view>
		<view class="cu-form-group">
			<view class="grid col-3 grid-square flex-sub">
				<view class="bg-img" v-for="(item, index) in imgList" :key="index" @tap="ViewImage" :data-url="imgList[index]">
					<image :src="imgList[index]" mode="aspectFill"></image>
					<view class="cu-tag bg-red" @click.stop="DelImg" :data-index="index"><text class="cuIcon-close"></text></view>
				</view>
				<view class="solids" @tap="ChooseImage" v-if="imgList.length < 1"><text class="cuIcon-cameraadd"></text></view>
			</view>
		</view>
		<view class="cu-form-group">
			<view class="title">主标题</view>
			<input placeholder="请输入主标题" :value="z_title" @input="Input($event,'z_title')"></input>
		</view>
		<view class="cu-form-group">
			<view class="title">副标题</view>
			<input placeholder="请输入副标题" :value="f_title" @input="Input($event,'f_title')"></input>
		</view>
		<view class="padding flex flex-direction">
			<button class="cu-btn bg-gradual-blue" @click="sharePoster">生成海报</button>
		</view>
		<qrcode-poster ref="poster" :title="z_title" 
		        :subTitle="f_title" 
		        :headerImg="imgList[0]"
		        :price="333"></qrcode-poster>
	</view>
</template>

<script>
import QrcodePoster from '@/components/zhangyu-qrcode-poster/zhangyu-qrcode-poster.vue';
export default {
	components: {
		QrcodePoster
	},
	data() {
		return {
			imgList: [],
			z_title:"",
			f_title:"",
		};
	},
	methods: {
		ChooseImage() {
			uni.chooseImage({
				count: 1, //默认9
				sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				//sourceType: ['album'], //从相册选择
				success: res => {
					if (this.imgList.length != 0) {
						this.imgList = this.imgList.concat(res.tempFilePaths);
					} else {
						this.imgList = res.tempFilePaths;
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
			console.log('DelImg');
			uni.showModal({
				content: '确定重新选择背景图片？',
				success: res => {
					if (res.confirm) {
						this.imgList.splice(e.currentTarget.dataset.index, 1);
					}
				}
			});
		},
		Input(e,title_type) {
			this[title_type] = e.detail.value
		},
		//分享海报
		sharePoster(){
			//获取带参数二维码
			this.is_show_model = false
			this.$refs.poster.showCanvas('https://oss.zhangyubk.com/cmqrcode.jpg')
		}
	}
};
</script>

<style></style>
