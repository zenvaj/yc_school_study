<view class="container"><view class="user-section"><image class="bg" src="/static/user-bg.jpg"></image><view class="vip-card-box"><view data-event-opts="{{[['tap',[['navToNologin',['/pages/public/content?title='+moneyType+'攻略']]]]]}}" class="b-btn" bindtap="__e">{{''+moneyType+'攻略'}}</view><view class="tit"><text class="yticon icon-iLinkapp-"></text>{{''+moneyType+''}}</view><text class="e-m">一次绑定，永久收益</text><text class="e-b">邀请学生辅导交费，您就会有相应的佣金回馈，期待您一起和我们成长。</text></view></view><view class="cover-container"><image class="arc" src="/static/arc.png"></image><view class="tj-sction"><view class="tj-item"><text style="font-size:50rpx;color:#ff0000;">{{"总"+moneyType}}</text></view><view class="tj-item"><text class="num" style="font-size:80rpx;color:#ff0000;">￥1028.82</text></view></view><view class="tj-sction  margin-top-sm"><view class="tj-item"><text class="num">1028.8</text><text>{{moneyType}}</text></view><view class="tj-item"><text class="num">200</text><text>{{"可提"+moneyType}}</text></view></view><view class="order-section"><view class="order-item" hover-class="common-hover" hover-stay-time="{{50}}" data-event-opts="{{[['tap',[['navTo',['/pages/my/money-log?state=0']]]]]}}" bindtap="__e"><text class="yticon icon-shouye"></text><text>明细</text></view><view class="order-item" hover-class="common-hover" hover-stay-time="{{50}}" data-event-opts="{{[['tap',[['navTo',['/pages/order/order?state=1']]]]]}}" bindtap="__e"><text class="yticon icon-daifukuan"></text><text>充值</text></view><view class="order-item" hover-class="common-hover" hover-stay-time="{{50}}" data-event-opts="{{[['tap',[['navTo',['/pages/order/order?state=2']]]]]}}" bindtap="__e"><text class="yticon icon-yishouhuo"></text><text>转账</text></view><view class="order-item" hover-class="common-hover" hover-stay-time="{{50}}" data-event-opts="{{[['tap',[['navTo',['/pages/order/order?state=4']]]]]}}" bindtap="__e"><text class="yticon icon-shouhoutuikuan"></text><text>提现</text></view></view><view class="order-section" style="padding:0;"><view class="qiun-charts"><canvas class="charts" canvas-id="canvasColumnMeter" id="canvasColumnMeter" data-event-opts="{{[['touchstart',[['touchIt',['$event','canvasColumnMeter']]]]]}}" bindtouchstart="__e"></canvas></view></view></view></view>