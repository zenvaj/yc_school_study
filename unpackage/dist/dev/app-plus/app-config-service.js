
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/index/guid-btn-set","pages/index/sign-std-school","pages/index/sign-std-home","pages/study/study","pages/study/course-table","pages/study/course-plan","pages/study/course-comment","pages/study/course-view","pages/group/group","pages/my/my","pages/my/moneybag","pages/public/content","pages/public/card-detail","pages/public/login","pages/public/help","pages/my/set"],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"颖超教育","navigationBarBackgroundColor":"#0081ff","backgroundColor":"#F8F8F8","navigationStyle":"custom"},"tabBar":{"color":"#7A7E83","selectedColor":"#3cc51f","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/index/index","iconPath":"static/tabbar/home.png","selectedIconPath":"static/tabbar/home_cur.png","text":""},{"pagePath":"pages/study/study","iconPath":"static/tabbar/study.png","selectedIconPath":"static/tabbar/study_cur.png","text":""},{"pagePath":"pages/group/group","iconPath":"static/tabbar/group.png","selectedIconPath":"static/tabbar/group_cur.png","text":""},{"pagePath":"pages/my/my","iconPath":"static/tabbar/my.png","selectedIconPath":"static/tabbar/my_cur.png","text":""}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"yc_school_study","compilerVersion":"2.8.8","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/index/guid-btn-set","meta":{},"window":{}},{"path":"/pages/index/sign-std-school","meta":{},"window":{}},{"path":"/pages/index/sign-std-home","meta":{},"window":{}},{"path":"/pages/study/study","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/study/course-table","meta":{},"window":{}},{"path":"/pages/study/course-plan","meta":{},"window":{}},{"path":"/pages/study/course-comment","meta":{},"window":{}},{"path":"/pages/study/course-view","meta":{},"window":{}},{"path":"/pages/group/group","meta":{"isQuit":true,"isTabBar":true},"window":{"enablePullDownRefresh":true}},{"path":"/pages/my/my","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/my/moneybag","meta":{},"window":{}},{"path":"/pages/public/content","meta":{},"window":{}},{"path":"/pages/public/card-detail","meta":{},"window":{}},{"path":"/pages/public/login","meta":{},"window":{}},{"path":"/pages/public/help","meta":{},"window":{}},{"path":"/pages/my/set","meta":{},"window":{}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
