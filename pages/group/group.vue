<template>
	<view>
		<!-- #ifdef H5 -->
		<view class="cu-bar bg-white fixed" @tap="goTop" :style="[{Top:'0px'},{height:(0) + 'px'}]">
		<!-- #endif -->
		<!-- #ifndef H5 -->
		<view class="cu-bar bg-white fixed" @tap="goTop" :style="[{Top:'0px'},{height:(0) + 'px'}]">
		<!-- #endif -->
		
			<view class="headerpic" @tap.stop="groupSelf">
				<!-- <view class="cu-avatar round lg" :style="'background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);'"></view> -->
				<view class="cu-avatar radius lg " :style="{backgroundImage:'url('+ (user.mpuser.headerpic || '/static/logo_yingchao.png') +')'}"></view>
				<view class="padding-lr text-lg text-cut" style="width: 300rpx;">{{user.real_name || user.mpuser.nickname || '未登录'}}</view>
				<view class="cu-btn sm bg-gradual-blue shadow cuIcon" @tap.stop="navaTo('/pages/group/new-speak')">
					<text class="cuIcon-add"></text>
				</view>
				<view class="cu-btn sm margin-left shadow cuIcon" :class="self_show?'bg-gradual-green':''" @tap.stop="groupSelf()">
					<text class="cuIcon-profile"></text>
				</view>
				<view class="cu-btn bg-gradual-orange margin-left shadow cuIcon lg" @tap.stop="navaTo('/pages/group/shop')">
					<text class="cuIcon-shop lg"></text>
				</view>
			</view>
			<image src="/static/bg-imag-101.jpg" mode="scaleToFill" class="response"></image>
		</view> 
		<view class="" :style="[{height:'140px'}]"></view>
		<!-- <view class="cu-tabbar-height"></view> -->
		<listCardGroup :newsList="speak_list" @cardDetail="cardDetail" @UserGroup="UserGroup"></listCardGroup>
	</view>
</template>

<script>
	import listCardGroup from '../../components/list/list-card-group.vue'
	import { mapState } from 'vuex';
	export default {
		computed: {
			...mapState(['hasLogin','user'])
		},
		data() {
			return {
				self_show:false,
				page:1,
				speak_list:[],
				isFresh:true,
			}
		},
		components:{
			listCardGroup
		},
		onLoad(){
			console.log(this.user)
			this.SpeakList()
		},
		methods: {
			async SpeakList(){
				console.log('朋友圈数据')
				let data = {page:this.page}
				if(this.self_show){
					data = {page:this.page,userid:this.user.id}
				}
				let result = await this.$request({
					method:'/api/group-speak',
					data:data
				})
				console.log(result)
				if(result.code != 10000){
					uni.showModal({content:result.msg})
				}
				if(result.data){
					result.data.forEach(item =>{
						this.speak_list.push(item)
					})
				}
				uni.stopPullDownRefresh();
			},
			//热门文章点击方法
			cardDetail(newsid){
				console.log('cardDetail',newsid)
				uni.navigateTo({
					url:'/pages/group/card-detail?id='+newsid
				})
			},
			UserGroup(userid){
				console.log("展示别人的朋友圈")
				console.log('UserGroup',userid)
				if(userid == this.user.id){
					uni.showModal({
						content:"请点击按钮查看自己的圈子"
					})
					return
				}
				uni.navigateTo({
					url:'/pages/group/center?userid='+userid
				})
			},
			groupSelf(){
				console.log("展示自己的朋友圈")
				this.self_show = !this.self_show
				this.speak_list = []
				this.page = 1
				this.SpeakList()
			},
			goTop(){
				console.log("划到开始未知")
				uni.pageScrollTo({
				    scrollTop: 0,
				    duration: 300
				});
			},
			navaTo(url){
				uni.navigateTo({
					url
				})
			}
		},
		onPullDownRefresh() {
			console.log('refresh');
			this.speak_list = []
			this.page = 1
			this.SpeakList()
		},
		onReachBottom() {
			console.log('onReachBottom');
			this.page ++
			this.SpeakList()
		},
	}
</script>

<style lang="scss">
	.headerpic{
		position: absolute;
		z-index: 10;
		top: 82px;
		left: 8px;
		display: flex;
		align-items: flex-end;
	}
	
</style>
