<block qq:if="{{isShow}}"><view class="picker data-v-57854e10"><block qq:if="{{type!='time'}}"><view class="picker-modal data-v-57854e10"><view class="picker-modal-header data-v-57854e10"><view class="picker-icon picker-icon-zuozuo data-v-57854e10" hover-stay-time="{{100}}" hover-class="picker-icon-active" data-event-opts="{{[['tap',[['onSetYear',['-1']]]]]}}" bindtap="__e"></view><view class="picker-icon picker-icon-zuo data-v-57854e10" hover-stay-time="{{100}}" hover-class="picker-icon-active" data-event-opts="{{[['tap',[['onSetMonth',['-1']]]]]}}" bindtap="__e"></view><text class="picker-modal-header-title data-v-57854e10">{{title}}</text><view class="picker-icon picker-icon-you data-v-57854e10" hover-stay-time="{{100}}" hover-class="picker-icon-active" data-event-opts="{{[['tap',[['onSetMonth',['+1']]]]]}}" bindtap="__e"></view><view class="picker-icon picker-icon-youyou data-v-57854e10" hover-stay-time="{{100}}" hover-class="picker-icon-active" data-event-opts="{{[['tap',[['onSetYear',['+1']]]]]}}" bindtap="__e"></view></view><swiper class="picker-modal-body data-v-57854e10" circular="{{true}}" duration="{{200}}" skip-hidden-item-layout="{{true}}" current="{{calendarIndex}}" data-event-opts="{{[['change',[['onSwiperChange',['$event']]]]]}}" bindchange="__e"><block qq:for="{{calendars}}" qq:for-item="calendar" qq:for-index="calendarIndex2" qq:key="calendarIndex2"><swiper-item class="picker-calendar data-v-57854e10"><block qq:for="{{weeks}}" qq:for-item="week" qq:for-index="index" qq:key="index"><view class="picker-calendar-view data-v-57854e10"><view class="picker-calendar-view-item data-v-57854e10">{{week}}</view></view></block><block qq:for="{{calendar}}" qq:for-item="date" qq:for-index="dateIndex" qq:key="dateIndex"><view data-event-opts="{{[['tap',[['onSelectDate',['$0'],[[['calendars','',calendarIndex2],['','',dateIndex]]]]]]]}}" class="picker-calendar-view data-v-57854e10" bindtap="__e"><view hidden="{{!(date.bgStyle.type)}}" class="{{['data-v-57854e10','picker-calendar-view-'+date.bgStyle.type]}}" style="{{'background:'+(date.bgStyle.background)+';'}}"></view><view class="picker-calendar-view-item data-v-57854e10" style="{{'opacity:'+(date.statusStyle.opacity)+';'+('color:'+(date.statusStyle.color)+';')+('background:'+(date.statusStyle.background)+';')}}"><text class="data-v-57854e10">{{date.title}}</text></view><view class="picker-calendar-view-dot data-v-57854e10" style="{{'opacity:'+(date.dotStyle.opacity)+';'+('background:'+(date.dotStyle.background)+';')}}"></view><view hidden="{{!(date.tips)}}" class="picker-calendar-view-tips data-v-57854e10">{{date.tips}}</view></view></block></swiper-item></block></swiper><view class="picker-modal-footer data-v-57854e10"><view class="picker-modal-footer-info data-v-57854e10"><block qq:if="{{isMultiSelect}}"><block class="data-v-57854e10"><view class="picker-display data-v-57854e10"><text class="data-v-57854e10">{{beginText+"日期"}}</text><text class="picker-display-text data-v-57854e10">{{BeginTitle}}</text><block qq:if="{{isContainTime}}"><view class="picker-display-link data-v-57854e10" style="{{'color:'+(color)+';'}}" hover-stay-time="{{100}}" hover-class="picker-display-link-active" data-event-opts="{{[['tap',[['onShowTimePicker',['begin']]]]]}}" bindtap="__e">{{BeginTimeTitle}}</view></block></view><view class="picker-display data-v-57854e10"><text class="data-v-57854e10">{{endText+"日期"}}</text><text class="picker-display-text data-v-57854e10">{{EndTitle}}</text><block qq:if="{{isContainTime}}"><view class="picker-display-link data-v-57854e10" style="{{'color:'+(color)+';'}}" hover-stay-time="{{100}}" hover-class="picker-display-link-active" data-event-opts="{{[['tap',[['onShowTimePicker',['end']]]]]}}" bindtap="__e">{{EndTimeTitle}}</view></block></view></block></block><block qq:else><block class="data-v-57854e10"><view class="picker-display data-v-57854e10"><text class="data-v-57854e10">当前选择</text><text class="picker-display-text data-v-57854e10">{{BeginTitle}}</text><block qq:if="{{isContainTime}}"><view class="picker-display-link data-v-57854e10" style="{{'color:'+(color)+';'}}" hover-stay-time="{{100}}" hover-class="picker-display-link-active" data-event-opts="{{[['tap',[['onShowTimePicker',['begin']]]]]}}" bindtap="__e">{{BeginTimeTitle}}</view></block></view></block></block></view><view class="picker-modal-footer-btn data-v-57854e10"><view class="picker-btn data-v-57854e10" hover-stay-time="{{100}}" hover-class="picker-btn-active" data-event-opts="{{[['tap',[['onCancel',['$event']]]]]}}" bindtap="__e">取消</view><view class="picker-btn data-v-57854e10" style="{{'color:'+(color)+';'}}" hover-stay-time="{{100}}" hover-class="picker-btn-active" data-event-opts="{{[['tap',[['onConfirm',['$event']]]]]}}" bindtap="__e">确定</view></view></view></view></block><block qq:if="{{showTimePicker}}"><view class="picker data-v-57854e10"><view class="picker-modal picker-time data-v-57854e10"><view class="picker-modal-header data-v-57854e10"><text class="picker-modal-header-title data-v-57854e10">选择日期</text></view><picker-view class="picker-modal-time data-v-57854e10" indicator-class="picker-modal-time-item" value="{{timeValue}}" data-event-opts="{{[['change',[['onTimeChange',['$event']]]]]}}" bindchange="__e"><picker-view-column class="data-v-57854e10"><block qq:for="{{24}}" qq:for-item="v" qq:for-index="i" qq:key="i"><view class="data-v-57854e10">{{(i<10?'0'+i:i)+"时"}}</view></block></picker-view-column><picker-view-column class="data-v-57854e10"><block qq:for="{{60}}" qq:for-item="v" qq:for-index="i" qq:key="i"><view class="data-v-57854e10">{{(i<10?'0'+i:i)+"分"}}</view></block></picker-view-column><block qq:if="{{showSeconds}}"><picker-view-column class="data-v-57854e10"><block qq:for="{{60}}" qq:for-item="v" qq:for-index="i" qq:key="i"><view class="data-v-57854e10">{{(i<10?'0'+i:i)+"秒"}}</view></block></picker-view-column></block></picker-view><view class="picker-modal-footer data-v-57854e10"><view class="picker-modal-footer-info data-v-57854e10"><view class="picker-display data-v-57854e10"><text class="data-v-57854e10">当前选择</text><text class="picker-display-text data-v-57854e10">{{PickerTimeTitle}}</text></view></view><view class="picker-modal-footer-btn data-v-57854e10"><view class="picker-btn data-v-57854e10" hover-stay-time="{{100}}" hover-class="picker-btn-active" data-event-opts="{{[['tap',[['onCancelTime',['$event']]]]]}}" bindtap="__e">取消</view><view class="picker-btn data-v-57854e10" style="{{'color:'+(color)+';'}}" hover-stay-time="{{100}}" hover-class="picker-btn-active" data-event-opts="{{[['tap',[['onConfirmTime',['$event']]]]]}}" bindtap="__e">确定</view></view></view></view></view></block></view></block>