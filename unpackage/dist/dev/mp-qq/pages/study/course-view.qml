<view><view class="cu-form-group" style="margin-bottom:4rpx;"><view class="title">课表日期</view><input placeholder="选择课表日期" name="input" disabled="{{true}}" value="{{dateSet}}"/><button data-event-opts="{{[['tap',[['e0',['$event']]]]]}}" class="cu-btn bg-green shadow" bindtap="__e">选择</button></view><mx-date-picker vue-id="27169a72-1" show="{{showPicker}}" type="date" format="yyyy-mm-dd" value="{{dateSet}}" data-event-opts="{{[['^confirm',[['onSelected']]],['^cancel',[['onSelected']]]]}}" bind:confirm="__e" bind:cancel="__e" bind:__l="__l"></mx-date-picker><scroll-view class="bg-white nav " scroll-x="{{true}}" scroll-with-animation="{{true}}" scroll-left="{{scrollLeft}}"><block qq:for="{{classList}}" qq:for-item="item" qq:for-index="index" qq:key="index"><view class="{{['cu-item',index==TabCur?'text-green cur':'']}}" data-id="{{index}}" data-event-opts="{{[['tap',[['tabSelect',['$event']]]]]}}" bindtap="__e">{{''+item+''}}</view></block></scroll-view><block qq:for="{{courseList}}" qq:for-item="table" qq:for-index="t_index" qq:key="t_index"><view class="course-table text-sm margin-top-sm"><block qq:for="{{table}}" qq:for-item="item" qq:for-index="i_index" qq:key="i_index"><view class="cu-form-group "><view class="title">{{item.title}}</view><view class="picker">{{''+(item.name||'无课程')+''}}</view><view class="picker">{{''+(item.teacher_name||'无教师')+''}}</view><block qq:if="{{item.course_id>0}}"><view><button data-event-opts="{{[['tap',[['goPlan',['$0'],[[['courseList','',t_index],['','',i_index,'course_id']]]]]]]}}" class="cu-btn line-green sm margin-left" bindtap="__e">计划</button><button data-event-opts="{{[['tap',[['goComment',['$0'],[[['courseList','',t_index],['','',i_index,'course_id']]]]]]]}}" class="cu-btn line-green sm margin-left" bindtap="__e">点评</button></view></block></view></block></view></block><view class="cu-tabbar-height"></view></view>