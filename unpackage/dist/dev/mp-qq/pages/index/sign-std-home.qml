<view class="data-v-60c6ce1a"><scroll-view class="bg-white nav data-v-60c6ce1a" scroll-x="{{true}}"><view class="flex text-center data-v-60c6ce1a"><view class="{{['cu-item flex-sub data-v-60c6ce1a',0==TabCur?'bg-gradual-green':'']}}" data-id="{{0}}" data-event-opts="{{[['tap',[['tabSelect',['$event']]]]]}}" bindtap="__e"><text class="cuIcon-camerafill data-v-60c6ce1a"></text>家长自提</view><view class="{{['cu-item flex-sub data-v-60c6ce1a',1==TabCur?'bg-gradual-blue':'']}}" data-id="{{1}}" data-event-opts="{{[['tap',[['tabSelect',['$event']]]]]}}" bindtap="__e"><text class="cuIcon-camerafill data-v-60c6ce1a"></text>11路公交</view><view class="{{['cu-item flex-sub data-v-60c6ce1a',2==TabCur?'bg-gradual-orange':'']}}" data-id="{{2}}" data-event-opts="{{[['tap',[['tabSelect',['$event']]]]]}}" bindtap="__e"><text class="cuIcon-camerafill data-v-60c6ce1a"></text>送货上门</view></view></scroll-view><view class="cu-bar bg-white margin-top data-v-60c6ce1a"><view class="action data-v-60c6ce1a">离校学生</view><view class="data-v-60c6ce1a"><uni-search-bar vue-id="60c6f586-1" radius="100" data-event-opts="{{[['^confirm',[['search']]],['^input',[['input']]],['^cancel',[['cancel']]]]}}" bind:confirm="__e" bind:input="__e" bind:cancel="__e" class="data-v-60c6ce1a" bind:__l="__l"></uni-search-bar></view></view><view class="padding-lr data-v-60c6ce1a"><view class="search-result data-v-60c6ce1a"><block qq:if="{{searchVal}}"><view class="cu-list menu-avatar data-v-60c6ce1a"><block qq:for="{{studentList}}" qq:for-item="item" qq:for-index="index" qq:key="index"><view class="{{['cu-item data-v-60c6ce1a',stdSelectedIndex=='move-box-'+index?'move-cur':'']}}" data-target="{{'move-box-'+index}}" data-event-opts="{{[['touchstart',[['ListTouchStart',['$event']]]],['touchmove',[['ListTouchMove',['$event']]]],['touchend',[['ListTouchEnd',['$event']]]]]}}" bindtouchstart="__e" bindtouchmove="__e" bindtouchend="__e"><view class="cu-avatar round lg data-v-60c6ce1a" style="{{'background-image:'+('url('+item.headpic)+';'}}"></view><view class="content data-v-60c6ce1a"><view class="text-grey data-v-60c6ce1a">{{item.name}}</view><view class="text-gray text-sm data-v-60c6ce1a"><text class="cuIcon-location text-red margin-right-xs data-v-60c6ce1a"></text>{{''+item.area}}</view></view><view class="action data-v-60c6ce1a"><view class="text-grey text-xs data-v-60c6ce1a">{{item.gradeClass}}</view><view class="{{['cu-tag round sm data-v-60c6ce1a',item.signStatus?'bg-green':'bg-grey']}}">{{item.signStatus?'已经签到':'未签到'}}</view></view><view class="move data-v-60c6ce1a"><view data-event-opts="{{[['tap',[['ChoiseStd',['$0'],[[['studentList','',index]]]]]]]}}" class="{{['data-v-60c6ce1a',item.signStatus?'bg-green':'bg-grey']}}" bindtap="__e">选择</view></view></view></block></view></block></view></view><block qq:if="{{studentSelected.length>0}}"><view class="cu-bar bg-white margin-top data-v-60c6ce1a"><view class="action data-v-60c6ce1a"><text class="cuIcon-title text-blue data-v-60c6ce1a"></text>神兽们</view></view></block><view class="padding-sm flex flex-wrap data-v-60c6ce1a"><block qq:for="{{studentSelected}}" qq:for-item="item" qq:for-index="index" qq:key="index"><view class="padding-xs data-v-60c6ce1a"><view class="cu-capsule radius data-v-60c6ce1a"><view class="cu-tag bg-blue  data-v-60c6ce1a">{{''+item.name+''}}</view><view data-event-opts="{{[['tap',[['DelStd',[index]]]]]}}" class="cu-tag line-blue data-v-60c6ce1a" bindtap="__e"><text class="cuIcon-close data-v-60c6ce1a"></text></view></view></view></block></view><view class="cu-form-group data-v-60c6ce1a"><view class="title data-v-60c6ce1a">是否早退</view><switch class="{{['data-v-60c6ce1a',isEarly?'checked':'']}}" checked="{{isEarly?true:false}}" data-event-opts="{{[['change',[['e0',['$event']]]]]}}" bindchange="__e"></switch></view><view class="cu-form-group margin-top data-v-60c6ce1a"><view class="title data-v-60c6ce1a">早退原因</view><picker value="{{index}}" range="{{picker}}" data-event-opts="{{[['change',[['PickerChange',['$event']]]]]}}" bindchange="__e" class="data-v-60c6ce1a"><view class="picker data-v-60c6ce1a">{{''+(index>-1?picker[index]:'选择早退原因')+''}}</view></picker></view><view class="cu-form-group align-start data-v-60c6ce1a"><view class="title data-v-60c6ce1a">早退原因</view><textarea maxlength="-1" placeholder="学生早退原因" data-event-opts="{{[['input',[['textareaInput',['$event']]]]]}}" bindinput="__e" class="data-v-60c6ce1a"></textarea></view><view class="cu-tabbar-height data-v-60c6ce1a"></view><view class="btn-sign data-v-60c6ce1a"><view class="cu-bar bg-white margin-top data-v-60c6ce1a"><view class="action data-v-60c6ce1a"><text class="cuIcon-my text-orange  data-v-60c6ce1a"></text>签到核查教师：刘丽仙</view><view class="action data-v-60c6ce1a"><button data-event-opts="{{[['tap',[['showModalSign',['$event']]]]]}}" class="cu-btn bg-green shadow lg data-v-60c6ce1a" bindtap="__e">离校签到</button></view></view><view class="{{['cu-modal bottom-modal data-v-60c6ce1a',ModelShow?'show':'']}}"><view class="cu-dialog data-v-60c6ce1a"><view class="cu-bar bg-white data-v-60c6ce1a"><view data-event-opts="{{[['tap',[['hideModalSign',['$event']]]]]}}" class="action text-blue data-v-60c6ce1a" bindtap="__e">取消</view><view data-event-opts="{{[['tap',[['stdSign',['$event']]]]]}}" class="action text-green data-v-60c6ce1a" bindtap="__e">确定</view></view><view class="padding-xl data-v-60c6ce1a">{{''+ModelShowDes+''}}</view></view></view></view></view>