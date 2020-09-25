<template>
	<view>
		<view class="cu-chat">
			<view class="cu-item">
				<view class="cu-avatar radius" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big143004.jpg);"></view>
				<view class="main">
					<view class="content shadow">
						<view>小苹果，使用暴力挖了一水晶钻，得到
						<text class="cuIcon-redpacket text-red "></text>1.00元红包</view>
					</view>
				</view>
				<view class="date "> 13:23</view>
			</view>
			<view class="cu-item">
				<view class="cu-avatar radius" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big143004.jpg);"></view>
				<view class="main">
					<view class="content shadow">
						@#$^&**
					</view>
					<view class="action text-grey">
						<text class="cuIcon-warnfill text-red text-xxl"></text> <text class="text-sm margin-left-sm">被禁言</text>
					</view>
				</view>
				<view class="date">13:23</view>
			</view>
			<view class="cu-item self">
				<view class="main">
					<view class="action">
						<text class="cuIcon-locationfill text-orange text-xxl"></text>
					</view>
					<view class="content shadow">
						<view>小苹果，使用暴力挖了一水晶钻，得到
						<text class="cuIcon-redpacket text-red "></text>1.00元红包</view>
					</view>
				</view>
				<view class="cu-avatar radius" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big107000.jpg);"></view>
				<view class="date">13:23</view>
			</view>
			<view class="cu-item">
				<view class="cu-avatar radius" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big143004.jpg);"></view>
				<view class="main">
					<view class="content shadow">
						<view>小苹果，使用暴力挖了一水晶钻，得到
						<text class="cuIcon-redpacket text-red "></text>1.00元红包</view>
					</view>
				</view>
				<view class="date "> 13:23</view>
			</view>
			<view class="cu-item">
				<view class="cu-avatar radius" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big143004.jpg);"></view>
				<view class="main">
					<view class="content shadow">
						@#$^&**
					</view>
					<view class="action text-grey">
						<text class="cuIcon-warnfill text-red text-xxl"></text> <text class="text-sm margin-left-sm">被禁言</text>
					</view>
				</view>
				<view class="date">13:23</view>
			</view>
			<view class="cu-item self">
				<view class="main">
					<view class="action">
						<text class="cuIcon-locationfill text-orange text-xxl"></text>
					</view>
					<view class="content shadow">
						<view>小苹果，使用暴力挖了一水晶钻，得到
						<text class="cuIcon-redpacket text-red "></text>1.00元红包</view>
					</view>
				</view>
				<view class="cu-avatar radius" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big107000.jpg);"></view>
				<view class="date">13:23</view>
			</view>
			<view class="cu-item">
				<view class="cu-avatar radius" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big143004.jpg);"></view>
				<view class="main">
					<view class="content shadow">
						<view>小苹果，使用暴力挖了一水晶钻，得到
						<text class="cuIcon-redpacket text-red "></text>1.00元红包</view>
					</view>
				</view>
				<view class="date "> 13:23</view>
			</view>
			<view class="cu-item">
				<view class="cu-avatar radius" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big143004.jpg);"></view>
				<view class="main">
					<view class="content shadow">
						@#$^&**
					</view>
					<view class="action text-grey">
						<text class="cuIcon-warnfill text-red text-xxl"></text> <text class="text-sm margin-left-sm">被禁言</text>
					</view>
				</view>
				<view class="date">13:23</view>
			</view>
			<view class="cu-item self">
				<view class="main">
					<view class="action">
						<text class="cuIcon-locationfill text-orange text-xxl"></text>
					</view>
					<view class="content shadow">
						<view>小苹果，使用暴力挖了一水晶钻，得到
						<text class="cuIcon-redpacket text-red "></text>1.00元红包</view>
					</view>
				</view>
				<view class="cu-avatar radius" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big107000.jpg);"></view>
				<view class="date">13:23</view>
			</view>
		</view>

		<view class="cu-bar foot input" :style="[{bottom:InputBottom+'px'}]">
			<view class="action">
				<text class="cuIcon-edit text-grey"></text>
			</view>
			<input class="solid-bottom" :adjust-position="false" :focus="false" maxlength="300" cursor-spacing="10"
			 @focus="InputFocus" @blur="InputBlur"></input>
			
			<button class="cu-btn bg-green shadow" @tap="modalStatus=true"><text class="cuIcon-we text-white lg padding-right"></text>挖一下</button>
		</view>
		<view class="cu-modal bottom-modal" :class="modalStatus?'show':''" @tap="modalStatus=false">
			<view class="cu-dialog" @tap.stop="">
				<view class="cu-bar bg-white">
					<view class="action text-blue" @tap="modalStatus=false">取消</view>
					<view class="action text-green" @tap="modalStatus=false">确定</view>
				</view>
				<view class="grid padding-sm">
					<view v-for="(item,index) in checkbox" class="padding-xs" :key="index">
						<button class="cu-btn orange lg block" :class="item.checked?'bg-orange':'line-orange'" @tap="ChooseCheckbox"
						 :data-value="item.value"> {{item.name}}
							<view class="cu-tag sm round" :class="item.checked?'bg-white text-orange':'bg-orange'" v-if="item.hot">HOT</view>
						</button>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				InputBottom: 0,
				modalStatus:false,
				checkbox: [{
					value: 0,
					name: '免费走一波',
					checked: false,
					hot: true,
				}, {
					value: 1,
					name: '1元试水',
					checked: false,
					hot: true,
				}, {
					value: 2,
					name: '2分走起',
					checked: false,
					hot: false,
				}, {
					value: 3,
					name: '10元手不抖',
					checked: false,
					hot: true,
				}, {
					value: 4,
					name: '80元肝颤儿',
					checked: false,
					hot: false,
				}, {
					value: 5,
					name: '100元不吃鸡就成盒儿',
					checked: false,
					hot: false,
				}]
			};
		},
		methods: {
			InputFocus(e) {
				this.InputBottom = e.detail.height
			},
			InputBlur(e) {
				this.InputBottom = 0
			},
			ChooseCheckbox(e) {
				let items = this.checkbox;
				let values = e.currentTarget.dataset.value;
				for (let i = 0, lenI = items.length; i < lenI; ++i) {
					if (items[i].value == values) {
						items[i].checked = !items[i].checked;
					}else{
						items[i].checked = false
					}
				}
			}
		}
	}
</script>

<style>
page{
  padding-bottom: 100upx;
}
button .cu-tag {
		position: absolute;
		top: 8upx;
		right: 8upx;
	}
</style>
