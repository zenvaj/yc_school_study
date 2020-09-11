<template>
	<view class="">
		<view class="cu-btn bg-green shadow cuIcon fixed more" v-if="!modalShow" @tap="modalShow = true">
			<text class="cuIcon-moreandroid"></text>
		</view>
		<view class="cu-modal drawer-modal justify-end" :class="modalShow?'show':''" @tap="modalShow = false">
			<view class="cu-dialog basis-lg" @tap.stop="" :style="[{top:CustomBar+'px',height:'calc(100vh - ' + CustomBar + 'px)'}]">
					<scroll-view :scroll-top="scrollTop" scroll-y="true" :style="{height:'100%'}">
				<view class="cu-list menu text-left">
					<view class="cu-item arrow" v-for="(item,index) in 16" :key="index">
						<view class="content">
							<view>Item {{index +1}}</view>
						</view>
					</view>
				</view>
					</scroll-view>
			</view>
		</view>
		<!-- #ifndef MP -->
		<view class="cu-bar fixed bg-white" :style="[{top:(StatusBar + CustomBar - 1) + 'px'},{zIndex:2}]">
		<!-- #endif -->
		<!-- #ifdef MP -->
		<view class="cu-bar fixed bg-white" :style="[{top:'0px'},{zIndex:2}]">
		<!-- #endif -->
			<view class="action sub-title">
				<text class="text-xl text-bold text-blue">{{bookInfo.name}}</text>
				<text class="text-ABC text-blue">{{bookInfo.title}}</text>
				<!-- last-child选择器-->
			</view>
		</view>
		<!-- #ifndef MP -->
		<scroll-view scroll-x class="nav bg-white fixed" scroll-with-animation :scroll-left="scrollLeft" :style="[{top:(47 + StatusBar + CustomBar) + 'px'},{zIndex:2}]">
		<!-- #endif -->
		<!-- #ifdef MP -->
		<scroll-view scroll-x class="nav bg-white fixed" scroll-with-animation :scroll-left="scrollLeft" :style="[{top:'42px'},{zIndex:2}]">
		<!-- #endif -->
			<view class="cu-item" :class="index==TabCur?'text-green cur':''" v-for="(item,index) in bookMenuInfo" :key="index" @tap="tabSelect(index)" :data-id="index">
				{{index}}:{{item.name}} <text class="cuIcon-right"></text>
			</view>
		</scroll-view>
		<!-- #ifndef MP -->
		<view class="" :style="[{paddingTop:(47 + StatusBar + CustomBar ) + 'px'}]"></view>
		<!-- #endif -->
		<!-- #ifdef MP -->
		<view class="" :style="[{paddingTop:(86) + 'px'}]"></view>
		<!-- #endif -->
		
		<view v-for="(item,index) in bookMenuInfo" :key="index" v-if="index==TabCur" class="bg-grey text-left">
			content：{{index}};,{{item.title}}
			<view class="" v-for="(v,k) in item.menu_list" :key="k">
				<view class="flex">
					<button class="cu-btn" @tap="getBookMenuInfo"> {{v.name}}</button>
				</view>
				
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
				scrollTop: 0,
				old: {
					scrollTop: 0
				}
				
			};
		},
		onLoad() {
			this.getBookMenuInfo();
		},
		methods: {
			tabSelect(t_index) {
				this.TabCur = t_index
				this.scrollLeft = (t_index - 1) * 600
				//换知识树节点
			},
			async getBookMenuInfo(){
				const result = await this.$api.json('bookMenus')
				var newBookMenu = []
				if(this.bookMenuInfo.length > 0){
					for(let i = 0;i <= this.TabCur;i++){
						newBookMenu[i] = this.bookMenuInfo[i]
					}
				}
				newBookMenu.push(result)
				this.bookMenuInfo = newBookMenu
				this.tabSelect(this.TabCur+1)
			},
			upper: function(e) {
				console.log(e)
			},
			lower: function(e) {
				console.log(e)
			},
			scroll: function(e) {
				console.log(e)
				this.old.scrollTop = e.detail.scrollTop
			},
			goTop: function(e) {
				// 解决view层不同步的问题
				this.scrollTop = this.old.scrollTop
				this.$nextTick(function() {
					this.scrollTop = 0
				});
				uni.showToast({
					icon:"none",
					title:"纵向滚动 scrollTop 值已被修改为 0"
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
	  z-index: 1111111111114;
	  right: 40rpx;
	  top: 340rpx;
	}
	
</style>
