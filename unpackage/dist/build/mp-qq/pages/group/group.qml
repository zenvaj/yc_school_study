<view><view data-event-opts="{{[['tap',[['goTop',['$event']]]]]}}" class="cu-bar bg-white fixed" style="{{'top:'+('0px')+';'+('height:'+(0+'px')+';')}}" bindtap="__e"><view data-event-opts="{{[['tap',[['groupSelf',['$event']]]]]}}" class="headerpic" catchtap="__e"><view class="cu-avatar radius lg " style="{{'background-image:'+('url('+userInfo.headpic+')')+';'}}"></view><view class="padding-lr text-lg">走走停停</view><view data-event-opts="{{[['tap',[['navaTo',['/pages/group/new-speak']]]]]}}" class="cu-btn sm bg-gradual-blue shadow cuIcon" catchtap="__e"><text class="cuIcon-forward"></text></view><view data-event-opts="{{[['tap',[['e0',['$event']]]]]}}" class="{{['cu-btn sm margin-left shadow cuIcon',self_show?'bg-gradual-green':'']}}" catchtap="__e"><text class="cuIcon-profile"></text></view><view data-event-opts="{{[['tap',[['navaTo',['/pages/group/shop']]]]]}}" class="cu-btn bg-gradual-orange margin-left shadow cuIcon lg" catchtap="__e"><text class="cuIcon-shop lg"></text></view></view><image class="response" src="/static/bg-imag-101.jpg" mode="scaleToFill"></image></view><view style="{{'height:'+('140px')+';'}}"></view><list-card-group vue-id="d9011860-1" newsList="{{newsList}}" data-event-opts="{{[['^cardDetail',[['cardDetail']]],['^UserGroup',[['UserGroup']]]]}}" bind:cardDetail="__e" bind:UserGroup="__e" bind:__l="__l"></list-card-group></view>