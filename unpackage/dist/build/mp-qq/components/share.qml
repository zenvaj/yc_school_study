<block qq:if="{{show}}"><view data-event-opts="{{[['tap',[['toggleMask',['$event']]]],['touchmove',[['stopPrevent',['$event']]]]]}}" class="mask" style="{{'background-color:'+(backgroundColor)+';'}}" bindtap="__e" catchtouchmove="__e"><view data-event-opts="{{[['tap',[['stopPrevent',['$event']]]]]}}" class="mask-content" style="{{'height:'+(config.height)+';'+('transform:'+(transform)+';')}}" catchtap="__e"><scroll-view class="view-content" scroll-y="{{true}}"><view class="share-header">分享到</view><view class="share-list"><block qq:for="{{shareList}}" qq:for-item="item" qq:for-index="index" qq:key="index"><view data-event-opts="{{[['tap',[['shareToFriend',['$0'],[[['shareList','',index,'text']]]]]]]}}" class="share-item" bindtap="__e"><image src="{{item.icon}}" mode></image><text>{{item.text}}</text></view></block></view></scroll-view><view data-event-opts="{{[['tap',[['toggleMask',['$event']]]]]}}" class="bottom b-t" bindtap="__e">取消</view></view></view></block>