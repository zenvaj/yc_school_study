<template>
	<view>
		<view class="cu-form-group">
			<view class="title">截至日期</view>
			<picker mode="date" :value="date" start="2015-01-01" end="2040-12-31" @change="DateChange">
				<view class="picker">
					{{date}}
				</view>
			</picker>
		</view>
		<view class="cu-timeline text-sm">
			<view class="cu-timeline" v-for="(item,index) in sign_list" :key="index">
				<view class="cu-time">{{index}}</view>
				<view class="cu-item cur" :class="v.is_special?'cuIcon-noticefill':(v.type=='到校签到'?'cuIcon-evaluate_fill text-green':'text-blue')" v-for="(v,k) in item" :key="k">
					<view class="content shadow-blur" :class="v.is_special?'bg-grey':(v.type=='到校签到'?'bg-green':'bg-blue')">
						<text>{{v.created_at}}</text> 【{{v.type}}】由{{v.t_name}}确认，{{v.u_name}}已经在 [{{v.position}}] {{v.special_des}}
					</view>
				</view>
			</view>
			
			
		</view>
	</view>
</template>

<script>
	import { mapState } from 'vuex';
	export default {
		computed: {
			...mapState(['hasLogin','user'])
		},
		data(){
			return{
				date:"2020-02-02",
				sign_list:{
					"2020-09-16": [
						{
							"id": 8,
							"type": "离校签到",
							"is_special": 0,
							"special_des": "正常离校",
							"position": "大花林",
							"created_at": "17:29:16",
							"u_name": "姜振华",
							"t_name": "刘丽仙",
							"images": " "
						},
						{
							"id": 16,
							"type": "离校签到",
							"is_special": 0,
							"special_des": "正常离校",
							"position": "大花林",
							"created_at": "17:29:16",
							"u_name": "刘丽仙",
							"t_name": "刘丽仙",
							"images": " "
						},
						{
							"id": 7,
							"type": "到校签到",
							"is_special": 1,
							"special_des": "迟到了",
							"position": "学校",
							"created_at": "07:29:16",
							"u_name": "姜振华",
							"t_name": "刘丽仙",
							"images": " "
						},
						{
							"id": 15,
							"type": "到校签到",
							"is_special": 0,
							"special_des": "正常到校",
							"position": "学校",
							"created_at": "07:29:16",
							"u_name": "刘丽仙",
							"t_name": "刘丽仙",
							"images": " "
						}
					],
					"2020-09-15": [
						{
							"id": 6,
							"type": "离校签到",
							"is_special": 0,
							"special_des": "正常离校",
							"position": "大花林",
							"created_at": "17:29:16",
							"u_name": "姜振华",
							"t_name": "刘丽仙",
							"images": " "
						},
						{
							"id": 14,
							"type": "离校签到",
							"is_special": 0,
							"special_des": "正常离校",
							"position": "大花林",
							"created_at": "17:29:16",
							"u_name": "刘丽仙",
							"t_name": "刘丽仙",
							"images": " "
						},
						{
							"id": 5,
							"type": "到校签到",
							"is_special": 0,
							"special_des": "正常到校",
							"position": "学校",
							"created_at": "12:29:16",
							"u_name": "姜振华",
							"t_name": "刘丽仙",
							"images": " "
						},
						{
							"id": 13,
							"type": "到校签到",
							"is_special": 0,
							"special_des": "正常到校",
							"position": "学校",
							"created_at": "12:29:16",
							"u_name": "刘丽仙",
							"t_name": "刘丽仙",
							"images": " "
						}
					],
					"2020-09-14": [
						{
							"id": 4,
							"type": "离校签到",
							"is_special": 0,
							"special_des": "正常离校",
							"position": "大花林",
							"created_at": "17:29:16",
							"u_name": "姜振华",
							"t_name": "刘丽仙",
							"images": " "
						},
						{
							"id": 12,
							"type": "离校签到",
							"is_special": 0,
							"special_des": "正常离校",
							"position": "大花林",
							"created_at": "17:29:16",
							"u_name": "刘丽仙",
							"t_name": "刘丽仙",
							"images": " "
						}
					],"2020-09-14": [
						{
							"id": 4,
							"type": "离校签到",
							"is_special": 0,
							"special_des": "正常离校",
							"position": "大花林",
							"created_at": "17:29:16",
							"u_name": "姜振华",
							"t_name": "刘丽仙",
							"images": " "
						},
						{
							"id": 12,
							"type": "离校签到",
							"is_special": 0,
							"special_des": "正常离校",
							"position": "大花林",
							"created_at": "17:29:16",
							"u_name": "刘丽仙",
							"t_name": "刘丽仙",
							"images": " "
						}
					],"2020-09-14": [
						{
							"id": 4,
							"type": "离校签到",
							"is_special": 0,
							"special_des": "正常离校",
							"position": "大花林",
							"created_at": "17:29:16",
							"u_name": "姜振华",
							"t_name": "刘丽仙",
							"images": " "
						},
						{
							"id": 12,
							"type": "离校签到",
							"is_special": 0,
							"special_des": "正常离校",
							"position": "大花林",
							"created_at": "17:29:16",
							"u_name": "刘丽仙",
							"t_name": "刘丽仙",
							"images": " "
						}
					]
				}
			}
		},
		onLoad(){
			
			var now = new Date()
			this.date = now.getFullYear()+'-'+(now.getMonth()+1) + '-' + now.getDate()
		},
		methods:{
			DateChange(e) {
				this.date = e.detail.value
			},
			async SignList(){
				const result = await this.$request({
					method:'/api/sign/list',
					data:{js_code:loginRes.code,infoRes:infoRes.userInfo}
				})
				if(result.code == 10000){
					this.sign_list = result.data
				}else{
					uni.showModal({
						content:result.msg,
						title:"出错啦"
					})
				}
			}
		}
	}
</script>

<style>
	.cu-timeline .cu-time {
	    width: 230rpx;
	    text-align: center;
	    padding: 20rpx 0;
	    font-size: 26rpx;
	    color: #888;
	    display: block;
	}
</style>
