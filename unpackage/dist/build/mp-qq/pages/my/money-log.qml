<view><view class="cu-bar fixed cu-form-group" style="{{'top:'+('0rpx')+';'+('z-index:'+(2)+';')}}"><view class="title">筛选</view><picker mode="date" value="{{date_start}}" start="1970-09-01" end="2050-09-01" data-event-opts="{{[['change',[['DateChange',['date_start','$event']]]]]}}" bindchange="__e"><view class="picker">{{''+date_start+''}}</view></picker><picker mode="date" value="{{date_end}}" start="{{date_start}}" end="2050-09-01" data-event-opts="{{[['change',[['DateChange',['date_end','$event']]]]]}}" bindchange="__e"><view class="picker">{{''+date_end+''}}</view></picker><picker value="{{type_index}}" range="{{type_range}}" data-event-opts="{{[['change',[['PickerChange',['$event']]]]]}}" bindchange="__e"><view class="picker">{{''+(type_index>-1?type_range[type_index]:'明细类型')+''}}</view></picker></view><view class="cu-list menu-avatar " style="{{'margin-top:'+(0+CustomBar*2+'rpx')+';'}}"><block qq:for="{{22}}" qq:for-item="item" qq:for-index="index" qq:key="index"><view class="cu-item"><view class="content"><view class="text-grey">{{"佣金"+index}}</view><view class="text-gray text-sm flex"><view class="text-cut">我已天理为凭，踏入这片荒。我已天理为凭，踏入这片荒。我已天理为凭，踏入这片荒。我已天理为凭，踏入这片荒。</view></view></view><view class="action padding-lr"><view class="text-grey text-xs">2020-09-11 22:20:00</view><view class="cu-tag radius light bg-red ">￥5</view></view></view></block></view></view>