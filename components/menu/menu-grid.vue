<template>
	<view class="cu-list grid" :class="['col-' + gridCol,gridBorder?'':'no-border']">
		<view class="cu-item" v-for="(item,index) in cuIconList" :key="index" v-if="index<gridCol*gridRow" @click="menuClick(item.name,item.path)">
			<view style="font-size:48rpx;" :class="['cuIcon-' + item.cuIcon,'text-' + item.color]">
				<view class="cu-tag badge" v-if="item.badge!=0">
					<block v-if="item.badge!=1">{{item.badge>99?'99+':item.badge}}</block>
				</view>
			</view>
			<text>{{item.name}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				gridRow:3,
			};
		},
		props:['cuIconList','gridCol','gridBorder','fontSize'],
		methods:{
			menuClick(name,path){
				this.$emit('menuClick',name,path)
			}
		},
		beforeMount(){
			this.gridRow = Math.ceil(this.cuIconList.length / this.gridCol);
		}
	}
</script>

<style>
	
</style>
