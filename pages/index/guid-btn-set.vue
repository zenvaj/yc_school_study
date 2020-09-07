<template>
	<view class="">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText"></block>
			<block slot="content">常用功能设置</block>
		</cu-custom>
		<view class="use-bth bg-white" :style="'top:'+CustomBar+'px'">
			<view class="cu-bar bg-white solid-bottom">
				<view class="flex solid-bottom padding justify-between" style="width: 100%;">
					<view class="">
						<text class="cuIcon-title text-blue"></text>常用功能
					</view>
					<view class="">
						<text class="cuIcon-edit text-blue"></text>保存
						<text class="cuIcon-check text-blue"></text>保存
					</view>
				</view>
			</view>
			<view class="grid bg-gray justify-start">
				<view class="padding-lr-sm margin-tb-sm text-center" v-for="(item,index) in ofenUseMenuList" :key="index">
					<button class="cu-btn bg-blue shadow">
						<text :class="'cuIcon-'+item.icon"></text>{{item.name}}
					</button>
				</view>
			</view>
		</view>
		<view class="" v-for="(value,key) in allMenuGridList" :key="key">
			<view class="cu-bar  bg-white solid-bottom">
				<view class="action">
					<text class="cuIcon-title text-blue"></text>{{value.title}}
				</view>
			</view>
			<view class="grid justify-start">
				<view class="padding-lr-sm margin-tb-sm text-center" v-for="(item,index) in value.menuList" :key="index">
					<button class="cu-btn  shadow" :class="index%2==0?'line-blue':'bg-blue'">
						<text :class="'cuIcon-'+item.icon"></text>{{item.name}}
					</button>
				</view>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	export default {
		data(){
			return {
				CustomBar: this.CustomBar,
				isMenuEdit:false,
				ofenUseMenuList:[],
				allMenuGridList:[],
			}
		},
		onLoad(){
			//console.log(this.CustomBar)
			this.OfenUseGridInit()
			this.AllMenuGridInit()
		},
		methods: {
			async OfenUseGridInit(){
				this.ofenUseMenuList = await this.$api.json("ofenUseMenuList")
			},
			async AllMenuGridInit(){
				this.allMenuGridList = await this.$api.json("allMenuGridList")
			}
		}
	} 
</script>

<style>
	.use-bth{
		position: sticky;
		z-index: 1;
	}
</style>
