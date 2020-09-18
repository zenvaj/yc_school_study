<template>
	<view class="">
		<view class="form">
			<view class="cu-form-group">
				<view class="title">课表日期</view>
				<input placeholder="选择课表日期" name="input" disabled :value="dateSet"></input>
				<button class='cu-btn bg-gradual-blue shadow' @click="showPicker = !showPicker">选择日期</button>
			</view>
		</view>
		<mx-date-picker :show="showPicker"
			:type="'date'"
			:format="'yyyy-mm-dd'"
			:value="dateSet"
			@confirm="onSelected" 
			@cancel="onSelected"
			/>
		<view class="cu-modal" :class="modalEdit?'show':''" @tap="modalEdit = false">
			<view class="cu-dialog" @tap.stop="">
				<radio-group class="block" @change="RadioChange">
					<view class="cu-list menu text-left">
						<view class="cu-item" v-for="(item,index) in 5" :key="index">
							<label class="flex justify-between align-center flex-sub">
								<view class="flex-sub">Item {{index +1}}</view>
								<radio class="round" :class="radio=='radio' + index?'checked':''" :checked="radio=='radio' + index?true:false"
								 :value="'radio' + index"></radio>
							</label>
						</view>
					</view>
				</radio-group>
			</view>
		</view>
		<view class="padding-xs text-sm flex align-start">
			<view class="" style="width: 180rpx;">
				<view class="solid-bottom padding text-center bg-cyan">
					<view class="">
						课次
					</view>
				</view>
				<view class="solid-bottom padding text-center bg-white" v-for="(item,index) in 8" :key="index">
					<view class="">
						{{item<4?'上午':(item<7?'下午':'晚辅')}}
					</view>
					第{{item<4?item:(item<7?item-3:item-6)}}节
				</view>
			</view>
			<scroll-view class=" bg-gray" scroll-x scroll-with-animation style="width:calc(100vw - 180rpx);">
				<view class="flex table-box">
					<view class="table-day" style="" v-for="(v,k) in 6" :key="k">
						<view class="solid-bottom solid-right padding bg-white">
							<view class="">
								班级{{v}}
							</view>
						</view>
						<view class="solid-bottom solid-right padding" @tap="CourseEdit(v,item)" v-for="(item,index) in 8" :key="index">
							英语{{item}}
							<view class="">
								<text class="cuIcon-activity">老师{{item}}</text>
							</view>
						</view>
					</view>
				</view>
				
			</scroll-view>
		</view>
	</view>
</template>

<script>
import MxDatePicker from '../../components/mx-datepicker/mx-datepicker.vue'
	export default {
		components:{
			MxDatePicker
		},
		data() {
			return {
				showPicker: false,
				dateSet: '',
			};
		},
		methods:{
			CourseEdit(v,item){
				uni.showModal({
					content:"点击了第"+item+"行，第"+v+"列"
				})
			},
			onSelected(e) {//选择
				this.showPicker = false;
				if(e) {
					this[this.type] = e.value; 
					//选择的值
					console.log('value => '+ e.value);
					this.dateSet = e.value
					//原始的Date对象
					//console.log('date => ' + e.date);
					//this.ourseTableInit()
				}
			}
		}
	}
</script>

<style lang="scss">
	.table-value{
		
	}
		.table-day{
			min-width: 180rpx;
		}
</style>
