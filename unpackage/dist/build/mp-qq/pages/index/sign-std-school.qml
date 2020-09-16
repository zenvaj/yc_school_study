<view><view class="cu-bar bg-white margin-top"><view class="action">签到图片</view><view class="action">{{''+imgList.length+'/4'}}</view></view><view class="cu-form-group"><view class="grid col-4 grid-square flex-sub"><block qq:for="{{imgList}}" qq:for-item="item" qq:for-index="index" qq:key="index"><view class="bg-img" data-url="{{imgList[index]}}" data-event-opts="{{[['tap',[['ViewImage',['$event']]]]]}}" bindtap="__e"><image src="{{imgList[index]}}" mode="aspectFill"></image><view class="cu-tag bg-red" data-index="{{index}}" data-event-opts="{{[['tap',[['DelImg',['$event']]]]]}}" catchtap="__e"><text class="cuIcon-close"></text></view></view></block><block qq:if="{{imgList.length<4}}"><view data-event-opts="{{[['tap',[['ChooseImage',['$event']]]]]}}" class="solids" bindtap="__e"><text class="cuIcon-cameraadd"></text></view></block></view></view><view class="cu-bar bg-white margin-top"><view class="action">签到学生</view><view><uni-search-bar vue-id="5ea34a52-1" radius="100" data-event-opts="{{[['^confirm',[['search']]],['^input',[['input']]],['^cancel',[['cancel']]]]}}" bind:confirm="__e" bind:input="__e" bind:cancel="__e" bind:__l="__l"></uni-search-bar></view></view><view class="padding-lr"><view class="search-result"><block qq:if="{{searchVal}}"><view class="cu-list menu-avatar"><block qq:for="{{studentList}}" qq:for-item="item" qq:for-index="index" qq:key="index"><view class="{{['cu-item',stdSelectedIndex=='move-box-'+index?'move-cur':'']}}" data-target="{{'move-box-'+index}}" data-event-opts="{{[['touchstart',[['ListTouchStart',['$event']]]],['touchmove',[['ListTouchMove',['$event']]]],['touchend',[['ListTouchEnd',['$event']]]]]}}" bindtouchstart="__e" bindtouchmove="__e" bindtouchend="__e"><view class="cu-avatar round lg" style="{{'background-image:'+('url('+item.headpic)+';'}}"><view class="{{['cu-tag badge',k%2==0?'cuIcon-female bg-pink':'cuIcon-male bg-blue']}}"></view></view><view class="content"><view class="text-grey">{{item.name}}</view><view class="text-gray text-sm"><text class="cuIcon-location text-red margin-right-xs"></text>{{''+item.area}}</view></view><view class="action"><view class="text-grey text-xs">{{item.gradeClass}}</view><view class="{{['cu-tag round sm',item.signStatus?'bg-green':'bg-grey']}}">{{item.signStatus?'已经签到':'未签到'}}</view></view><view class="move"><view data-event-opts="{{[['tap',[['ChoiseStd',['$0'],[[['studentList','',index]]]]]]]}}" class="{{[item.signStatus?'bg-green':'bg-grey']}}" bindtap="__e">选择</view></view></view></block></view></block></view></view><block qq:if="{{studentSelected.length>0}}"><view class="cu-bar bg-white margin-top"><view class="action"><text class="cuIcon-title text-blue"></text>神兽们</view></view></block><view class="padding-sm flex flex-wrap"><block qq:for="{{studentSelected}}" qq:for-item="item" qq:for-index="index" qq:key="index"><view class="padding-xs"><view class="cu-capsule radius"><view class="cu-tag bg-blue ">{{''+item.name+''}}</view><view data-event-opts="{{[['tap',[['DelStd',[index]]]]]}}" class="cu-tag line-blue" bindtap="__e"><text class="cuIcon-close"></text></view></view></view></block></view><view class="cu-form-group margin-top"><view class="title">是否迟到</view><switch class="{{[stdSignIsLate?'checked':'']}}" style="z-index:0;" checked="{{stdSignIsLate?true:false}}" data-event-opts="{{[['change',[['switchIsLate',['$event']]]]]}}" bindchange="__e"></switch></view><view class="cu-form-group margin-top"><view class="title">迟到原因</view><picker value="{{index}}" range="{{picker}}" data-event-opts="{{[['change',[['PickerChange',['$event']]]]]}}" bindchange="__e"><view class="picker">{{''+(index>-1?picker[index]:'选择迟到原因')+''}}</view></picker></view><view class="cu-form-group align-start"><view class="title">迟到原因</view><textarea maxlength="-1" placeholder="学生迟到原因" data-event-opts="{{[['input',[['textareaInput',['$event']]]]]}}" bindinput="__e"></textarea></view><view class="cu-tabbar-height"></view><view class="btn-sign"><view class="cu-bar bg-white margin-top"><view class="action"><text class="cuIcon-my text-orange "></text>签到核查教师：刘丽仙</view><view class="action"><button data-event-opts="{{[['tap',[['showModalSign',['$event']]]]]}}" class="cu-btn bg-green shadow lg" bindtap="__e">到校签到</button></view></view><view class="{{['cu-modal bottom-modal',ModelShow?'show':'']}}"><view class="cu-dialog"><view class="cu-bar bg-white"><view data-event-opts="{{[['tap',[['hideModalSign',['$event']]]]]}}" class="action text-blue" bindtap="__e">取消</view><view data-event-opts="{{[['tap',[['stdSign',['$event']]]]]}}" class="action text-green" bindtap="__e">确定</view></view><view class="padding-xl">{{''+ModelShowDes+''}}</view></view></view></view></view>