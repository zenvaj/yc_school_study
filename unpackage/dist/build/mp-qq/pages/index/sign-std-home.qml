<view class="data-v-8e9b399a"><scroll-view class="bg-white nav data-v-8e9b399a" scroll-x="{{true}}"><view class="flex text-center data-v-8e9b399a"><view class="{{['cu-item flex-sub data-v-8e9b399a',0==TabCur?'bg-gradual-green1':'']}}" data-id="{{0}}" data-event-opts="{{[['tap',[['tabSelect',['$event']]]]]}}" bindtap="__e"><text class="cuIcon-likefill data-v-8e9b399a"></text>家长自提</view><view class="{{['cu-item flex-sub data-v-8e9b399a',1==TabCur?'bg-gradual-green2':'']}}" data-id="{{1}}" data-event-opts="{{[['tap',[['tabSelect',['$event']]]]]}}" bindtap="__e"><text class="cuIcon-warnfill data-v-8e9b399a"></text>11路公交</view><view class="{{['cu-item flex-sub data-v-8e9b399a',2==TabCur?'bg-gradual-green3':'']}}" data-id="{{2}}" data-event-opts="{{[['tap',[['tabSelect',['$event']]]]]}}" bindtap="__e"><text class="cuIcon-timefill data-v-8e9b399a"></text>送货上门</view></view></scroll-view><view class="cu-bar bg-white margin-top data-v-8e9b399a"><view class="action data-v-8e9b399a">离校学生</view><view class="data-v-8e9b399a"><uni-search-bar vue-id="60c6f586-1" radius="100" data-event-opts="{{[['^confirm',[['search']]],['^input',[['input']]],['^cancel',[['cancel']]]]}}" bind:confirm="__e" bind:input="__e" bind:cancel="__e" class="data-v-8e9b399a" bind:__l="__l"></uni-search-bar></view></view><view class="padding-lr data-v-8e9b399a"><view class="search-result data-v-8e9b399a"><block qq:if="{{searchVal}}"><view class="cu-list menu-avatar data-v-8e9b399a"><block qq:for="{{studentList}}" qq:for-item="item" qq:for-index="index" qq:key="index"><view class="{{['cu-item data-v-8e9b399a',stdSelectedIndex=='move-box-'+index?'move-cur':'']}}" data-target="{{'move-box-'+index}}" data-event-opts="{{[['touchstart',[['ListTouchStart',['$event']]]],['touchmove',[['ListTouchMove',['$event']]]],['touchend',[['ListTouchEnd',['$event']]]]]}}" bindtouchstart="__e" bindtouchmove="__e" bindtouchend="__e"><view class="cu-avatar round lg data-v-8e9b399a" style="{{'background-image:'+('url('+item.headpic)+';'}}"><view class="{{['cu-tag badge data-v-8e9b399a',k%2==0?'cuIcon-female bg-pink':'cuIcon-male bg-blue']}}"></view></view><view class="content data-v-8e9b399a"><view class="text-grey data-v-8e9b399a">{{item.name}}</view><view class="text-gray text-sm data-v-8e9b399a"><text class="cuIcon-location text-red margin-right-xs data-v-8e9b399a"></text>{{''+item.area}}</view></view><view class="action data-v-8e9b399a"><view class="text-grey text-xs data-v-8e9b399a">{{item.gradeClass}}</view><view class="{{['cu-tag round sm data-v-8e9b399a',item.signStatus?'bg-green':'bg-grey']}}">{{item.signStatus?'已经签到':'未签到'}}</view></view><view class="move data-v-8e9b399a"><view data-event-opts="{{[['tap',[['ChoiseStd',['$0'],[[['studentList','',index]]]]]]]}}" class="{{['data-v-8e9b399a',item.signStatus?'bg-green':'bg-grey']}}" bindtap="__e">选择</view></view></view></block></view></block></view></view><block qq:if="{{studentSelected.length>0}}"><view class="cu-bar bg-white margin-top data-v-8e9b399a"><view class="action data-v-8e9b399a"><text class="cuIcon-title text-blue data-v-8e9b399a"></text>神兽们</view></view></block><view class="padding-sm flex flex-wrap data-v-8e9b399a"><block qq:for="{{studentSelected}}" qq:for-item="item" qq:for-index="index" qq:key="index"><view class="padding-xs data-v-8e9b399a"><view class="cu-capsule radius data-v-8e9b399a"><view class="cu-tag bg-blue  data-v-8e9b399a">{{''+item.name+''}}</view><view data-event-opts="{{[['tap',[['DelStd',[index]]]]]}}" class="cu-tag line-blue data-v-8e9b399a" bindtap="__e"><text class="cuIcon-close data-v-8e9b399a"></text></view></view></view></block></view><view class="cu-form-group data-v-8e9b399a"><view class="title data-v-8e9b399a">是否早退</view><switch class="{{['data-v-8e9b399a',isEarly?'checked':'']}}" checked="{{isEarly?true:false}}" data-event-opts="{{[['change',[['e0',['$event']]]]]}}" bindchange="__e"></switch></view><view class="cu-form-group margin-top data-v-8e9b399a"><view class="title data-v-8e9b399a">早退原因</view><picker value="{{index}}" range="{{picker}}" data-event-opts="{{[['change',[['PickerChange',['$event']]]]]}}" bindchange="__e" class="data-v-8e9b399a"><view class="picker data-v-8e9b399a">{{''+(index>-1?picker[index]:'选择早退原因')+''}}</view></picker></view><view class="cu-form-group align-start data-v-8e9b399a"><view class="title data-v-8e9b399a">早退原因</view><textarea maxlength="-1" placeholder="学生早退原因" data-event-opts="{{[['input',[['textareaInput',['$event']]]]]}}" bindinput="__e" class="data-v-8e9b399a"></textarea></view><view class="cu-tabbar-height data-v-8e9b399a"></view><view class="btn-sign data-v-8e9b399a"><view class="cu-bar bg-white margin-top data-v-8e9b399a"><view class="action data-v-8e9b399a"><text class="cuIcon-my text-orange  data-v-8e9b399a"></text>签到核查教师：刘丽仙</view><view class="action data-v-8e9b399a"><button data-event-opts="{{[['tap',[['showModalSign',['$event']]]]]}}" class="cu-btn bg-green shadow lg data-v-8e9b399a" bindtap="__e">离校签到</button></view></view><view class="{{['cu-modal bottom-modal data-v-8e9b399a',ModelShow?'show':'']}}"><view class="cu-dialog data-v-8e9b399a"><view class="cu-bar bg-white data-v-8e9b399a"><view data-event-opts="{{[['tap',[['hideModalSign',['$event']]]]]}}" class="action text-blue data-v-8e9b399a" bindtap="__e">取消</view><view data-event-opts="{{[['tap',[['stdSign',['$event']]]]]}}" class="action text-green data-v-8e9b399a" bindtap="__e">确定</view></view><view class="padding-xl data-v-8e9b399a">{{''+ModelShowDes+''}}</view></view></view></view></view>