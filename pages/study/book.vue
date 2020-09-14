<template>
	<view class="">
		<view class="cu-btn bg-green shadow cuIcon fixed more" v-if="!modalShow" @tap="modalShow = true">
			<text class="cuIcon-moreandroid"></text>
		</view>
		<view class="cu-modal drawer-modal justify-end" :class="modalShow?'show':''" @tap="modalShow = false">
			<view class="cu-dialog basis-lg" @tap.stop="" :style="[{top:CustomBar+'px',height:'calc(100vh - ' + CustomBar + 'px)'}]">
					<scroll-view :scroll-top="scrollTop" scroll-y="true" :style="{height:'100%'}">
				<view class="cu-list menu text-left">
					<view class="cu-item arrow" v-for="(item,index) in tmpMenuList" :key="index">
						<view class="content" @tap="getBookMenuInfo(item.id)">
							<view>{{item.name}}</view>
						</view>
					</view>
				</view>
					</scroll-view>
			</view>
		</view>
		<!-- #ifdef H5 -->
		<view class="cu-bar fixed bg-white" :style="[{top:(StatusBar*2 + CustomBar*2 - 9) + 'rpx'},{zIndex:2}]">
		<!-- #endif -->
		<!-- #ifdef MP -->
		<view class="cu-bar fixed bg-white" :style="[{top:'0px'},{zIndex:2}]">
		<!-- #endif -->
		<!-- #ifdef APP-PLUS -->
		<view class="cu-bar fixed bg-white" :style="[{top:'0px'},{zIndex:2}]">
		<!-- #endif -->
			<view class="action sub-title">
				<text class="text-xl text-bold text-blue">{{bookInfo.name}}</text>
				<text class="text-ABC text-blue">{{bookInfo.title}}</text>
				<!-- last-child选择器-->
			</view>
		</view>
		<!-- #ifdef H5 -->
		<scroll-view scroll-x class="nav bg-white fixed" scroll-with-animation :scroll-left="scrollLeft" :style="[{top:(90 + StatusBar*2 + CustomBar*2) + 'rpx'},{zIndex:2}]">
		<!-- #endif -->
		<!-- #ifdef MP -->
		<scroll-view scroll-x class="nav bg-white fixed" scroll-with-animation :scroll-left="scrollLeft" :style="[{top:'90rpx'},{zIndex:2}]">
		<!-- #endif -->
		<!-- #ifdef APP-PLUS -->
		<scroll-view scroll-x class="nav bg-white fixed" scroll-with-animation :scroll-left="scrollLeft" :style="[{top:'90rpx'},{zIndex:2}]">
		<!-- #endif -->
			<view class="cu-item" :class="index==TabCur?'text-green cur':''" v-for="(item,index) in bookMenuInfo" :key="index" @tap="tabSelect(index)" :data-id="index">
				{{index}}:{{item.name}} <text class="cuIcon-right"></text>
			</view>
		</scroll-view>
		<!-- #ifdef H5 -->
		<view class="" :style="[{paddingTop:(100 + StatusBar*2 + CustomBar*2 ) + 'rpx'}]"></view>
		<!-- #endif -->
		<!-- #ifdef MP -->
		<view class="" :style="[{paddingTop:(200) + 'rpx'}]"></view>
		<!-- #endif -->
		<!-- #ifdef APP-PLUS -->
		<view class="" :style="[{paddingTop:(200) + 'rpx'}]"></view>
		<!-- #endif -->
		
		<view v-for="(item,index) in bookMenuInfo" :key="index" v-if="index==TabCur" class="bg-gray text-left">
			content：{{index}};,{{item.title}}
			,{{item.title}}
			,{{item.title}}
			,{{item.title}}
			<view class="" v-for="(v,k) in item.menu_list" :key="k">
				<view class="flex">
					<button class="cu-btn" @tap="getBookMenuInfo(v.id)"> {{v.name}}</button>
				</view>
				
			</view>
			<view class="">
				<button class="cu-btn bg-blue" @tap="getBookQuestion(item.id)"> 课后练习</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				modalShow:false,
				TabCur: -1,
				scrollLeft: 0,
				bookInfo:{
					id:1,name:"语文",title:"about"
				},
				bookMenuInfo:[],
				tmpMenuList:[],
				scrollTop: 0,
				old: {
					scrollTop: 0
				}
			};
		},
		onLoad() {
			uni.showLoading({
				title: '加载中...',
				mask: true
			});
			this.getBookMenuInfo();
		},
		onReady() {
			uni.hideLoading()
		},
		methods: {
			tabSelect(t_index) {
				this.TabCur = t_index
				this.scrollLeft = (t_index - 1) * 600
				//换知识树节点 
				this.tmpMenuList = this.bookMenuInfo[this.TabCur].menu_list
			},
			async getBookMenuInfo(menu_id){
				this.modalShow = false
				const result = await this.$api.json('bookMenus')
				var newBookMenu = []
				if(this.bookMenuInfo.length > 0){
					for(let i = 0;i <= this.TabCur;i++){
						newBookMenu[i] = this.bookMenuInfo[i]
					}
				}
				newBookMenu.push(result)
				this.bookMenuInfo = newBookMenu
				this.tmpMenuList = result.menu_list
				this.tabSelect(this.TabCur+1)
			},
			getBookQuestion(){
				uni.navigateTo({
					url:"/pages/study/book_question"
				})
			}
		}
	}
</script>

<style>
	.nav .cu-item.cur {
		border-bottom: 8upx solid;
	}
	.more {
	  position: fixed;
	  z-index: 4;
	  right: 40rpx;
	  top: 340rpx;
	}
	
</style>
