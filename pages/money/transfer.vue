<template>
	<view>
		<view class="cu-bar bg-white solid-bottom">
			<view class="action">
				<text class="cuIcon-refund text-blue"></text>
				可用余额
			</view>
			<view class="flex-sub text-center">
				<text class="text-price text-red" style="font-size: 60rpx;">{{ money }}</text>
			</view>
		</view>
		<uni-search-bar radius="100" placeholder="输入用户信息" clearButton="always" cancelButton="always" @confirm="search" @input="input" @cancel="cancel" />
		<view class="cu-list menu-avatar">
			<view class="cu-item" v-for="(v, i) in 10" :key="i">
				<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Taric.png);"></view>
				<view class="content">
					<view class="text-grey">
						<view class="text-cut">塔里克</view>
						<view class="cu-tag round bg-orange sm" v-if="i % 2 == 0">神兽</view>
					</view>
					<view class="text-gray text-sm flex"><view class="text-cut">塔里克是保护，永不疲倦地警。</view></view>
				</view>
				<view class="action">
					<view class="text-grey text-xs"><button class="cu-btn bg-gradual-blue shadow sm" @click="moneyTakeAll">转账</button></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue';
export default {
	components: {
		uniSearchBar
	},
	data() {
		return {
			money: '1314.00',
			money_transfer: 0,
			searchVal: ''
		};
	},
	onLoad() {},
	methods: {
		search(res) {
			uni.showToast({
				title: '搜索：' + res.value,
				icon: 'none'
			});
		},
		input(res) {
			this.searchVal = res.value;
		},
		cancel(res) {
			uni.showToast({
				title: '点击取消，输入值为：' + res.value,
				icon: 'none'
			});
		}
	}
};
</script>

<style></style>
