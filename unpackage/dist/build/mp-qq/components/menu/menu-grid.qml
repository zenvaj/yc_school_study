<view class="{{['cu-list grid','col-'+gridCol,gridBorder?'':'no-border']}}"><block qq:for="{{cuIconList}}" qq:for-item="item" qq:for-index="index" qq:key="index"><block qq:if="{{index<gridCol*gridRow}}"><view data-event-opts="{{[['tap',[['menuClick',['$0','$1'],[[['cuIconList','',index,'name']],[['cuIconList','',index,'path']]]]]]]}}" class="cu-item" bindtap="__e"><view class="{{['cuIcon-'+item.cuIcon,'text-'+item.color]}}" style="font-size:48rpx;"><block qq:if="{{item.badge!=0}}"><view class="cu-tag badge"><block qq:if="{{item.badge!=1}}"><block>{{item.badge>99?'99+':item.badge}}</block></block></view></block></view><text>{{item.name}}</text></view></block></block></view>