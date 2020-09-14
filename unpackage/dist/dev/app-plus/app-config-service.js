
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/study/study","pages/group/group","pages/my/my","pages/index/guid-btn-set","pages/index/sign-std-school","pages/index/sign-std-home","pages/study/course-table","pages/study/course-plan","pages/study/course-comment","pages/study/course-view","pages/my/moneybag","pages/public/icon-all","pages/public/content","pages/public/card-detail","pages/public/login","pages/public/help","pages/my/set","pages/public/about","pages/group/center","pages/my/money-log","pages/my/money-detail","pages/study/bad-notice","pages/my/bind","pages/my/msg-list","pages/my/make-join","pages/group/new-speak","pages/group/shop","pages/public/share","pages/my/friend","pages/my/marks","pages/my/address","pages/my/address-manager","pages/my/invest","pages/my/transfer","pages/my/take-cash","pages/index/best-user","pages/my/baby-money","pages/my/dig-money","pages/index/sign-std-log","pages/study/book","pages/study/book_question","pages/my/money-book"],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"颖超教育","navigationBarBackgroundColor":"#6ebcff","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#7A7E83","selectedColor":"#7A7E83","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/index/index","iconPath":"static/tabbar/home.png","selectedIconPath":"static/tabbar/home_cur.png","text":"首页"},{"pagePath":"pages/study/study","iconPath":"static/tabbar/study.png","selectedIconPath":"static/tabbar/study_cur.png","text":"学习"},{"pagePath":"pages/group/group","iconPath":"static/tabbar/group.png","selectedIconPath":"static/tabbar/group_cur.png","text":"圈子"},{"pagePath":"pages/my/my","iconPath":"static/tabbar/my.png","selectedIconPath":"static/tabbar/my_cur.png","text":"我的"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"颖超教育","compilerVersion":"2.8.11","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"颖超教育"}},{"path":"/pages/study/study","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"学习","navigationBarBackgroundColor":"#6739b6"}},{"path":"/pages/group/group","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"圈子","enablePullDownRefresh":true,"navigationBarBackgroundColor":"#39b54a","navigationStyle":"custom"}},{"path":"/pages/my/my","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的","navigationBarBackgroundColor":"#1cbbb4","navigationStyle":"custom"}},{"path":"/pages/index/guid-btn-set","meta":{},"window":{"navigationBarTitleText":"常用功能设置"}},{"path":"/pages/index/sign-std-school","meta":{},"window":{"navigationBarTitleText":"到校签到"}},{"path":"/pages/index/sign-std-home","meta":{},"window":{"navigationBarTitleText":"离校签到"}},{"path":"/pages/study/course-table","meta":{},"window":{"navigationBarTitleText":"课程表"}},{"path":"/pages/study/course-plan","meta":{},"window":{"navigationBarTitleText":"课堂计划"}},{"path":"/pages/study/course-comment","meta":{},"window":{"navigationBarTitleText":"课堂点评"}},{"path":"/pages/study/course-view","meta":{},"window":{"navigationBarTitleText":"课堂一览"}},{"path":"/pages/my/moneybag","meta":{},"window":{"navigationBarTitleText":"钱包","navigationBarBackgroundColor":"#fce3cc"}},{"path":"/pages/public/icon-all","meta":{},"window":{"navigationBarTitleText":"所有图标","navigationBarBackgroundColor":"#fce3cc"}},{"path":"/pages/public/content","meta":{},"window":{"navigationBarTitleText":"详情"}},{"path":"/pages/public/card-detail","meta":{},"window":{"navigationBarTitleText":"动态"}},{"path":"/pages/public/login","meta":{},"window":{"navigationBarTitleText":"登录","navigationStyle":"custom"}},{"path":"/pages/public/help","meta":{},"window":{"navigationBarTitleText":"帮助"}},{"path":"/pages/my/set","meta":{},"window":{"navigationBarTitleText":"设置"}},{"path":"/pages/public/about","meta":{},"window":{"navigationBarTitleText":"关于我们"}},{"path":"/pages/group/center","meta":{},"window":{"navigationBarTitleText":"我的圈子","navigationStyle":"custom"}},{"path":"/pages/my/money-log","meta":{},"window":{"navigationBarTitleText":"收支记录","enablePullDownRefresh":true}},{"path":"/pages/my/money-detail","meta":{},"window":{"navigationBarTitleText":"钱包详情","navigationBarBackgroundColor":"#fce3cc"}},{"path":"/pages/study/bad-notice","meta":{},"window":{"navigationBarTitleText":"错题本"}},{"path":"/pages/my/bind","meta":{},"window":{"navigationBarTitleText":"绑定"}},{"path":"/pages/my/msg-list","meta":{},"window":{"navigationBarTitleText":"消息列表"}},{"path":"/pages/my/make-join","meta":{},"window":{"navigationBarTitleText":"邀请"}},{"path":"/pages/group/new-speak","meta":{},"window":{"navigationBarTitleText":"发布"}},{"path":"/pages/group/shop","meta":{},"window":{"navigationBarTitleText":"铺子","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#FFFFFF","backgroundColor":"#F8F8F8","titleNView":{"type":"transparent"}}},{"path":"/pages/public/share","meta":{},"window":{"navigationBarTitleText":"分享"}},{"path":"/pages/my/friend","meta":{},"window":{"navigationBarTitleText":"好友"}},{"path":"/pages/my/marks","meta":{},"window":{"navigationBarTitleText":"标签"}},{"path":"/pages/my/address","meta":{},"window":{"navigationBarTitleText":"地址"}},{"path":"/pages/my/address-manager","meta":{},"window":{"navigationBarTitleText":"地址管理"}},{"path":"/pages/my/invest","meta":{},"window":{"navigationBarTitleText":"投资"}},{"path":"/pages/my/transfer","meta":{},"window":{"navigationBarTitleText":"转账"}},{"path":"/pages/my/take-cash","meta":{},"window":{"navigationBarTitleText":"提现"}},{"path":"/pages/index/best-user","meta":{},"window":{"navigationBarTitleText":"龙虎榜","enablePullDownRefresh":true}},{"path":"/pages/my/baby-money","meta":{},"window":{"navigationBarTitleText":"神兽红包"}},{"path":"/pages/my/dig-money","meta":{},"window":{"navigationBarTitleText":"挖宝"}},{"path":"/pages/index/sign-std-log","meta":{},"window":{"navigationBarTitleText":"签到记录"}},{"path":"/pages/study/book","meta":{},"window":{"navigationBarTitleText":"课本"}},{"path":"/pages/study/book_question","meta":{},"window":{"navigationBarTitleText":"课后习题"}},{"path":"/pages/my/money-book","meta":{},"window":{"navigationBarTitleText":"记账本"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
