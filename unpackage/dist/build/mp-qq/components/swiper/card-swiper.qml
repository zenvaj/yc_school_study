<swiper class="{{['card-swiper',dotStyle?'square-dot':'round-dot']}}" indicator-dots="{{true}}" circular="{{true}}" autoplay="{{true}}" interval="5000" duration="500" indicator-color="#8799a3" indicator-active-color="#0081ff" data-event-opts="{{[['change',[['cardSwiper',['$event']]]]]}}" bindchange="__e"><block qq:for="{{swiperList}}" qq:for-item="item" qq:for-index="index" qq:key="index"><swiper-item class="{{[cardCur==index?'cur':'']}}"><view data-event-opts="{{[['tap',[['imgClick',['$0','$1'],[[['swiperList','',index,'id']],[['swiperList','',index,'type']]]]]]]}}" class="swiper-item" bindtap="__e"><image src="{{item.url}}" mode="aspectFill"></image></view></swiper-item></block></swiper>