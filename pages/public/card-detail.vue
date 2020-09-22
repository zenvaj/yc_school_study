<template>
	<view>
		<view class="cu-card dynamic">
			<view class="cu-item shadow">
				<view class="cu-list menu-avatar">
					<view class="cu-item">
						<view class="cu-avatar round lg" :style="'background-image:url('+contents.headerpic+');'"></view>
						<view class="content flex-sub">
							<view>{{contents.username}}</view>
							<view class="text-gray text-sm flex justify-between">
								{{contents.created_at}}
							</view>
						</view>
					</view>
				</view>
				<view class="text-content" >
					{{contents.content}}
				</view>
				<view class="grid flex-sub padding-lr" :class="contents.images.length>1?'col-3 grid-square':'col-1'">
					<view class="bg-img" :class="contents.images.length>1?'':'only-img'" :style="'background-image:url('+item+');'"
					 v-for="(item,index) in contents.images" :key="index" @tap="proviewImg">
					</view>
				</view>
				<view class="text-gray text-sm text-right padding">
					<text class="cuIcon-attentionfill margin-lr-sm"></text>{{contents.num.view}}
					<text class="cuIcon-appreciatefill margin-lr-sm" @click="SpeakUp('speak-isup')"></text>{{contents.num.up}}
					<text class="cuIcon-messagefill margin-lr-sm" @click="SpeakComment('speak-comment')"></text> {{contents.num.comment}}
				</view>
		
				<view class="cu-list menu-avatar comment solids-top" style="padding-bottom: 100rpx;">
					
					<view class="cu-item" v-for="(item,index) in contents.comment_list" :key="index">
						<view class="cu-avatar round" :style="'background-image:url('+item.headerpic+');'"></view>
						<view class="content">
							<view class="text-grey">{{item.username}}</view>
							<view class="text-gray text-content text-df">
								{{item.comment}}
							</view>
							<view class="bg-grey padding-sm radius margin-top-sm  text-sm" v-for="(v,k) in item.re_comment" :key="k">
								<view class="flex">
									<view class="cu-avatar round sm" :style="'background-image:url('+v.headerpic+');'"></view>
									<view>{{v.username}}：</view>
									<view class="flex-sub">{{v.comment}}</view>
								</view>
							</view>
							<view class="margin-top-sm flex justify-between">
								<view class="text-gray text-df">{{item.created_at}}</view>
								<view>
									<text class="cuIcon-appreciatefill text-red" @click="SpeakUp('comment-isup',item.id)"></text>{{item.re_isup}}
									<text class="cuIcon-messagefill text-gray margin-left-sm" @click="SpeakComment('comment-comment',item.id)"></text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="cu-bar foot input" v-if="comment_show" :style="[{bottom:InputBottom+'px'},{zIndex:'4'}]">
				<view class="action">
					<text class="cuIcon-edit text-grey"></text>
				</view>
				<input class="solid-bottom" :adjust-position="false" :focus="false" maxlength="300" cursor-spacing="10"
				 @focus="InputFocus" @blur="InputBlur" @input="Input"></input>
				
				<button class="cu-btn bg-green shadow" @tap="SpeakCommentDo">评论</button>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapState } from 'vuex';
	export default{
		computed: {
			...mapState(['hasLogin','user'])
		},
		data:function (){
			return {
				contents:{},
				speakid:0,
				InputBottom: 0,
				comment_pid:0,
				comment:'',
				comment_show:false,
				comment_at:'',
				comment_data:{},
			}
		},
		onLoad(respones){
			console.log(respones)
			if(respones.id == 0){
				uni.navigateBack()
			}
			//根据id展示内容
			this.speakid = respones.id
			this.SpeakDetail()
		},
		methods:{
			async SpeakDetail(){
				console.log('朋友圈详情')
				let data = {speakid:this.speakid}
				let result = await this.$request({
					method:'/api/group-detail',
					data:data
				})
				if(result.code != 10000){
					uni.showModal({content:"朋友圈数据错误。"})
					console.log(result)
				}
				this.contents = result.data
				uni.stopPullDownRefresh();
			},
			async SpeakUp(type,pid = 0){
				console.log(type)
				var data = {
					speakid:this.speakid,
				}
				switch(type){
					case 'speak-isup':
						data.isup = 1
						break
					case 'comment-isup':
						data.pid = pid
						data.isup = 1
						break
					default:
						uni.showModal({content:'请选择正确的点赞方式'})
						return
				}
				console.log(data)
				//return 
				let result = await this.$request({
					method:'/api/group-comment',
					data:data
				})
				console.log(result)
				if(result.code != 10000){
					uni.showModal({content:result.msg})
				}
				this.SpeakDetail()
			},
			SpeakComment(type,pid = 0){
				console.log(type)
				var data = {
					speakid:this.speakid,
				}
				switch(type){
					case 'speak-comment':
						this.comment_show = true 
						data.comment = '' 
						break
					case 'comment-comment':
						this.comment_show = true
						data.pid = pid 
						data.comment = '' 
						break
					default:
						uni.showModal({content:'请选择正确的评论方式'})
						return
				}
				console.log(data)
				this.comment_data = data
			},
			async SpeakCommentDo(){
				if(this.comment == ''){
					this.comment_show = false 
					return
				}
				this.comment_show = false 
				this.comment_data.comment = this.comment 
				this.comment = ''
				//return 
				let result = await this.$request({
					method:'/api/group-comment',
					data:this.comment_data
				})
				console.log(result)
				if(result.code != 10000){
					uni.showModal({content:result.msg})
				}
				this.SpeakDetail()
			},
			InputFocus(e) {
				this.InputBottom = e.detail.height
			},
			InputBlur(e) {
				this.InputBottom = 0
			},
			Input(e){
				//console.log(e.detail.value)
				this.comment = e.detail.value
			},
			proviewImg(){
				// 预览图片
				uni.previewImage({
					urls: this.contents.images,
					loop:true,
					longPressActions: {
						itemList: ['发送给朋友', '保存图片', '收藏'],
						success: function(data) {
							console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
						},
						fail: function(err) {
							console.log(err.errMsg);
						}
					}
				});
			}
		}
	}
</script>

<style>
</style>
