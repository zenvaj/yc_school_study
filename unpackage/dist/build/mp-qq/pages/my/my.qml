<view class="container"><view class="user-section"><image class="bg" src="/static/bg-imag-004.jpg"></image><view data-event-opts="{{[['tap',[['showuser',['$event']]]]]}}" class="user-info-box" bindtap="__e"><view class="portrait-box"><image class="portrait" src="{{user.mpuser.headerpic||'/static/logo_yingchao.png'}}"></image></view><view class="info-box"><text class="username">{{user.real_name||user.mpuser.nickname||'未登录'}}</text></view></view><view class="vip-card-box"><view data-event-opts="{{[['tap',[['navToNologin',['/pages/public/content?title=关于我们']]]]]}}" class="b-btn" bindtap="__e">关于会员</view><view class="tit"><text class="yticon icon-iLinkapp-"></text>颖超教育</view><text class="e-m">会员</text><text class="e-b">用数据说话，线上线下协调，避长扬短，提高成绩，提高自信</text></view></view><view data-event-opts="{{[['touchstart',[['coverTouchstart',['$event']]]],['touchmove',[['coverTouchmove',['$event']]]],['touchend',[['coverTouchend',['$event']]]]]}}" class="cover-container" style="{{'transform:'+(coverTransform)+';'+('transition:'+(coverTransition)+';')}}" bindtouchstart="__e" bindtouchmove="__e" bindtouchend="__e"><image class="arc" src="/static/arc.png"></image><view data-event-opts="{{[['tap',[['navTo',['/pages/my/moneybag']]]]]}}" class="tj-sction" bindtap="__e"><view class="tj-item"><text class="num">128.8</text><text>总资产</text></view><view class="tj-item"><text class="num">100</text><text>余额</text></view><view class="tj-item"><text class="num">200</text><text>佣金</text></view></view><view class="history-section icon"><list-cell vue-id="0be16910-1" icon="icon-tuandui" iconColor="#e07472" title="Icon" tips data-event-opts="{{[['^eventClick',[['navTo',['/pages/public/icon-all']]]]]}}" bind:eventClick="__e" bind:__l="__l"></list-cell><list-cell vue-id="0be16910-2" icon="icon-iconfontweixin" iconColor="#e07472" title="我的钱包" tips="小钱钱" data-event-opts="{{[['^eventClick',[['navTo',['/pages/my/moneybag']]]]]}}" bind:eventClick="__e" bind:__l="__l"></list-cell><list-cell vue-id="0be16910-3" icon="icon-pinglun-copy" iconColor="#ee883b" title="我的消息" tips="系统通知" data-event-opts="{{[['^eventClick',[['navTo',['/pages/my/msg-list']]]]]}}" bind:eventClick="__e" bind:__l="__l"></list-cell><list-cell vue-id="0be16910-4" icon="icon-hot" iconColor="#54b4ef" title="我的标签" tips="成长记录" data-event-opts="{{[['^eventClick',[['navTo',['/pages/my/marks']]]]]}}" bind:eventClick="__e" bind:__l="__l"></list-cell><list-cell vue-id="0be16910-5" icon="icon-weixin" iconColor="#5fcda2" title="我的好友" tips="一顿操作猛如虎" data-event-opts="{{[['^eventClick',[['navTo',['/pages/my/friend']]]]]}}" bind:eventClick="__e" bind:__l="__l"></list-cell><list-cell vue-id="0be16910-6" icon="icon-saomiao" iconColor="#9789f7" title="个人名片" tips="一看数据零杠五" data-event-opts="{{[['^eventClick',[['navTo',['/pages/my/make-join']]]]]}}" bind:eventClick="__e" bind:__l="__l"></list-cell><list-cell vue-id="0be16910-7" icon="icon-share" iconColor="#9789f7" title="邀请好友" tips="邀请好友赢大礼" data-event-opts="{{[['^eventClick',[['navTo',['/pages/my/make-join']]]]]}}" bind:eventClick="__e" bind:__l="__l"></list-cell><list-cell vue-id="0be16910-8" icon="icon-jiazailoading-A" iconColor="#ee883b" title="绑定" tips="一统江湖" data-event-opts="{{[['^eventClick',[['navTo',['/pages/my/bind']]]]]}}" bind:eventClick="__e" bind:__l="__l"></list-cell><list-cell vue-id="0be16910-9" icon="icon-xiatubiao--copy" iconColor="#54b4ef" title="我的门店" tips="自己的小店" data-event-opts="{{[['^eventClick',[['navTo',['/pages/group/shop']]]]]}}" bind:eventClick="__e" bind:__l="__l"></list-cell><list-cell vue-id="0be16910-10" icon="icon-shezhi1" iconColor="#e07472" title="设置" border data-event-opts="{{[['^eventClick',[['navTo',['/pages/my/set']]]]]}}" bind:eventClick="__e" bind:__l="__l"></list-cell></view></view></view>