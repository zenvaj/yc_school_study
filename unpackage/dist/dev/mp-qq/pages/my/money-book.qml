<view><view class="cu-bar fixed cu-form-group" style="{{'top:'+('0px')+';'+('z-index:'+(2)+';')}}"><view class="padding">收入</view><view class="flex-sub text-center"><view class="solid-bottom text-xl padding"><text class="text-price text-green">80.00</text></view></view><view class="padding">支出</view><view class="flex-sub text-center"><view class="solid-bottom text-xl padding"><text class="text-price text-red">80.00</text></view></view></view><view class="cu-bar fixed cu-form-group" style="{{'top:'+('90rpx')+';'+('z-index:'+(2)+';')}}"><view class="title">筛选</view><picker mode="date" value="{{date_start}}" start="1970-09-01" end="2050-09-01" data-event-opts="{{[['change',[['DateChange',['date_start','$event']]]]]}}" bindchange="__e"><view class="picker">{{''+date_start+''}}</view></picker><picker mode="date" value="{{date_end}}" start="{{date_start}}" end="2050-09-01" data-event-opts="{{[['change',[['DateChange',['date_end','$event']]]]]}}" bindchange="__e"><view class="picker">{{''+date_end+''}}</view></picker><view><button class="cu-btn round bg-blue sm margin-left" type="primary" data-event-opts="{{[['tap',[['e0',['$event']]]]]}}" bindtap="__e">新增记录</button></view><view class="{{['cu-modal',newLog?'show':'']}}"><view class="cu-dialog"><view class="cu-bar bg-white justify-end"><view class="content">新增记账记录</view><view data-event-opts="{{[['tap',[['e1',['$event']]]]]}}" class="action" bindtap="__e"><text class="cuIcon-close text-red"></text></view></view><view><view class="cu-form-group margin-top-sm"><view class="title">记录标题</view><input placeholder="账本记录的简短标题" data-event-opts="{{[['input',[['Input',['title','$event']]]]]}}" bindinput="__e"/></view><view class="cu-form-group "><view class="title">记录描述</view><input placeholder="账本记录的描述" data-event-opts="{{[['input',[['Input',['des','$event']]]]]}}" bindinput="__e"/></view><view class="cu-form-group "><view class="title">记录金额</view><input placeholder="账本记录金额" data-event-opts="{{[['input',[['Input',['money','$event']]]]]}}" bindinput="__e"/></view><view class="cu-form-group"><view class="title">记录类型</view><switch data-event-opts="{{[['change',[['e2',['$event']]]]]}}" class="checked" bindchange="__e"></switch></view></view><view class="cu-bar bg-white justify-end margin-top-sm"><view class="action"><button data-event-opts="{{[['tap',[['e3',['$event']]]]]}}" class="cu-btn line-green text-green" bindtap="__e">取消</button><button data-event-opts="{{[['tap',[['newLogConfirm',['$event']]]]]}}" class="cu-btn bg-green margin-left" bindtap="__e">确定</button></view></view></view></view></view><view class="cu-list menu-avatar " style="{{'margin-top:'+(90+CustomBar*2+'rpx')+';'}}"><block qq:for="{{22}}" qq:for-item="item" qq:for-index="index" qq:key="index"><view class="cu-item"><view class="content"><view class="text-grey">{{"佣金"+index}}</view><view class="text-gray text-sm flex"><view class="text-cut">我已天理为凭，踏入这片荒。我已天理为凭，踏入这片荒。我已天理为凭，踏入这片荒。我已天理为凭，踏入这片荒。</view></view></view><view class="action padding-lr"><view class="text-grey text-xs">2020-09-11 22:20:00</view><view class="cu-tag radius light bg-white text-lg text-red">￥5<text data-event-opts="{{[['tap',[['DelLog',['$0'],[[[22,'',index]]]]]]]}}" class="cuIcon-delete text-red padding-left" bindtap="__e"></text></view></view></view></block></view></view>