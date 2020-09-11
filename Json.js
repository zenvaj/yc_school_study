/* 用户 */
const userInfo = {
	status: 1,
	data: {
		id: 1,
		mobile: 18888888888,
		nickname: 'Leo yo',
		portrait: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2691146630,2165926318&fm=26&gp=0.jpg'
	},
	msg: '提示'
}
//轮播数据
const swiperList = [{
	id: 0,
	type: 'image',
	url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg',
},{
	id: 5,
	type: 'image',
	url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99007.jpg'
},{
	id: 6,
	type: 'image',
	url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
}]
//九宫格按钮数据
const menuGridList =  [{
		cuIcon: 'location',
		color: 'red',
		badge: 0,
		name: '签到记录',
		path: '/pages/index/sign-std-log'
	},{
		cuIcon: 'location',
		color: 'red',
		badge: 0,
		name: '到校签到',
		path: '/pages/index/sign-std-school'
	},{
		cuIcon: 'locationfill',
		color: 'orange',
		badge: 0,
		name: '离校签到',
		path: '/pages/index/sign-std-home'
	},{
		cuIcon: 'form',
		color: 'yellow',
		badge: 0,
		name: '课表',
		path: '/pages/study/course-table'
	},{
		cuIcon: 'attention',
		color: 'blue',
		badge: 0,
		name: '课堂一览',
		path: '/pages/study/course-view'
	},{
		cuIcon: 'time',
		color: 'olive',
		badge: 3,
		name: '课堂任务',
		path: '/pages/study/course-plan'
	}, {
		cuIcon: 'write',
		color: 'cyan',
		badge: 0,
		name: '课堂点评',
		path: '/pages/study/course-comment'
	},{
		cuIcon: 'moneybag',
		color: 'purple',
		badge: 0,
		name: '钱包',
		path: '/pages/my/moneybag'
	}, {
		cuIcon: 'question',
		color: 'mauve',
		badge: 0,
		name: '帮助',
		path: '/pages/public/help'
	}, {
		cuIcon: 'selection',
		color: 'purple',
		badge: 0,
		name: '学习',
		path: '/pages/study/study'
	},{
		cuIcon: 'group',
		color: 'purple',
		badge: 0,
		name: '圈子',
		path: '/pages/group/center'
	},{
		cuIcon: 'list',
		color: 'purple',
		badge: 0,
		name: '收支记录',
		path: '/pages/my/money-log'
	},{
		cuIcon: 'settings',
		color: 'purple',
		badge: 0,
		name: '设置',
		path: '/pages/my/set'
	},{
		cuIcon: 'close',
		color: 'purple',
		badge: 0,
		name: '错题本',
		path: '/pages/study/bad-notice'
	},{
		cuIcon: 'addressbook',
		color: 'purple',
		badge: 0,
		name: '绑定用户',
		path: '/pages/my/bind'
	},{
		cuIcon: 'profile',
		color: 'purple',
		badge: 0,
		name: '邀请',
		path: '/pages/my/make-join'
	},{
		cuIcon: 'forward',
		color: 'purple',
		badge: 0,
		name: '发布动态',
		path: '/pages/group/new-speak'
	},{
		cuIcon: 'shop',
		color: 'purple',
		badge: 0,
		name: '商圈',
		path: '/pages/group/shop'
	},{
		cuIcon: 'share',
		color: 'purple',
		badge: 0,
		name: '分享',
		path: '/pages/public/share'
	},{
		cuIcon: 'friend',
		color: 'purple',
		badge: 0,
		name: '好友',
		path: '/pages/my/friend'
	},{
		cuIcon: 'friend',
		color: 'purple',
		badge: 0,
		name: '标签',
		path: '/pages/my/marks'
	},{
		cuIcon: 'friend',
		color: 'purple',
		badge: 0,
		name: '地址',
		path: '/pages/my/address'
	},{
		cuIcon: 'friend',
		color: 'purple',
		badge: 0,
		name: '帮半帮',
		path: '/pages/group/ask-help'
	},{
		cuIcon: 'friend',
		color: 'purple',
		badge: 0,
		name: '投资',
		path: '/pages/my/invest'
	},{
		cuIcon: 'friend',
		color: 'purple',
		badge: 0,
		name: '转账',
		path: '/pages/my/transfer'
	},{
		cuIcon: 'friend',
		color: 'purple',
		badge: 0,
		name: '提现',
		path: '/pages/my/take-cash'
	},{
		cuIcon: 'friend',
		color: 'purple',
		badge: 0,
		name: '龙虎榜',
		path: '/pages/index/best-user'
	},{
		cuIcon: 'friend',
		color: 'purple',
		badge: 0,
		name: '孩子红包',
		path: '/pages/my/baby-money'
	},{
		cuIcon: 'friend',
		color: 'purple',
		badge: 0,
		name: '挖宝',
		path: '/pages/my/dig-money'
	},{
		cuIcon: 'friend',
		color: 'purple',
		badge: 0,
		name: '课本',
		path: '/pages/study/book'
	},{
		cuIcon: 'more',
		color: 'mauve',
		badge: 0,
		name: '更多',
		path: '/pages/index/guid-btn-set'
	}]
//推荐话题数据
const hotNewsList = [{
	id:1,
	imgurl:'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
	mark:'史诗',
	title:'1我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。',
	headpic:'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
	nickname:'1正义天使 凯尔',
	time:'十天前',
	num:{
		view:1999999,
		up:155,
		comment:41
	}
}]
//热门话题数据
const newNewsList = [{
	id:1,
	imgurl:'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
	mark:'史诗',
	title:'1我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。',
	headpic:'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
	nickname:'1正义天使 凯尔',
	time:'十天前',
	num:{
		view:1999999,
		up:155,
		comment:41
	}
},{
	id:2,
	imgurl:'https://ossweb-img.qq.com/images/lol/web201310/skin/big10005.jpg',
	mark:'神话',
	title:'2我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。',
	headpic:'https://ossweb-img.qq.com/images/lol/web201310/skin/big10005.jpg',
	nickname:'3正义天使 凯尔',
	time:'十一天前',
	num:{
		view:1999999,
		up:155,
		comment:41
	}
},{
	id:3,
	imgurl:'https://ossweb-img.qq.com/images/lol/web201310/skin/big10004.jpg',
	mark:'神仙打架',
	title:'3我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。',
	headpic:'https://ossweb-img.qq.com/images/lol/web201310/skin/big10004.jpg',
	nickname:'2正义天使 凯尔',
	time:'十二天前',
	num:{
		view:19999,
		up:155,
		comment:41
	}
},{
	id:4,
	imgurl:'https://ossweb-img.qq.com/images/lol/web201310/skin/big10004.jpg',
	mark:'神仙打架',
	title:'4我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。',
	headpic:'https://ossweb-img.qq.com/images/lol/web201310/skin/big10004.jpg',
	nickname:'4正义天使 凯尔',
	time:'十二天前',
	num:{
		view:19999,
		up:155,
		comment:41
	}
}]
//常用菜单
const ofenUseMenuList = [
	{
		icon:"location",
		name:"到校签到",
		id:"1",
		path:"/pages/index/sign-std-school"
	},
	{
		icon:"locationfill",
		name:"离校签到",
		id:"2",
		path:"/pages/index/sign-std-home"
	},
	{
		icon:"form",
		name:"课表",
		id:"3",
		path:"/pages/study/course-table"
	},
	{
		icon:"time",
		name:"课堂任务",
		id:"3",
		path:"/pages/study/course-plan"
	},
	{
		icon:"write",
		name:"课堂点评",
		id:"3",
		path:"/pages/study/course-comment"
	},
	{
		icon:"attention",
		name:"课堂一览",
		id:"3",
		path:"/pages/study/course-comment"
	},
	{
		icon:"moneybag",
		name:"钱包",
		id:"3",
		path:"/pages/my/moneybag"
	},
	{
		icon:"question",
		name:"帮助",
		id:"3",
		path:"/pages/study/course-comment"
	},
]
//所有菜单
const allMenuGridList = [
	{
		icon:"",
		title:"通用功能",
		menuList:[
			{
				icon:"location",
				name:"到校签到",
				id:"1",
				path:"/pages/index/sign-std-school"
			},
			{
				icon:"locationfill",
				name:"离校签到",
				id:"2",
				path:"/pages/index/sign-std-home"
			},
			{
				icon:"form",
				name:"课表",
				id:"3",
				path:"/pages/study/course-table"
			},
			{
				icon:"time",
				name:"课堂任务",
				id:"3",
				path:"/pages/study/course-plan"
			},
			{
				icon:"write",
				name:"课堂点评",
				id:"3",
				path:"/pages/study/course-comment"
			},
			{
				icon:"attention",
				name:"课堂一览",
				id:"3",
				path:"/pages/study/course-comment"
			},
			{
				icon:"moneybag",
				name:"钱包",
				id:"3",
				path:"/pages/study/course-comment"
			},
			{
				icon:"question",
				name:"帮助",
				id:"3",
				path:"/pages/study/course-comment"
			},
			{
				icon:"selection",
				name:"学习",
				id:"3",
				path:"/pages/study/course-comment"
			},
			{
				icon:"group",
				name:"圈子",
				id:"3",
				path:"/pages/study/course-comment"
			},
			{
				icon:"list",
				name:"交易记录",
				id:"3",
				path:"/pages/study/course-comment"
			},
			{
				icon:"settings",
				name:"设置",
				id:"3",
				path:"/pages/study/course-comment"
			},
			{
				icon:"close",
				name:"错题本",
				id:"3",
				path:"/pages/study/course-comment"
			},
			{
				icon:"addressbook",
				name:"绑定",
				id:"3",
				path:"/pages/study/course-comment"
			},
			{
				icon:"profile",
				name:"邀请",
				id:"3",
				path:"/pages/study/course-comment"
			},
			{
				icon:"forward",
				name:"邀请",
				id:"3",
				path:"/pages/study/course-comment"
			},
			{
				icon:"shop",
				name:"本地商圈",
				id:"3",
				path:"/pages/study/course-comment"
			},
			{
				icon:"share",
				name:"分享",
				id:"3",
				path:"/pages/study/course-comment"
			},
			{
				icon:"friend",
				name:"社交",
				id:"3",
				path:"/pages/study/course-comment"
			},
		]
	},
	{
		icon:"",
		title:"学习功能",
		menuList:[
			{
				icon:"location",
				name:"到校签到",
				id:"1",
				path:"/pages/index/sign-std-school"
			},
			{
				icon:"locationfill",
				name:"离校签到",
				id:"2",
				path:"/pages/index/sign-std-home"
			},
			{
				icon:"form",
				name:"课表",
				id:"3",
				path:"/pages/study/course-table"
			},
			{
				icon:"time",
				name:"课堂任务",
				id:"3",
				path:"/pages/study/course-plan"
			},
			{
				icon:"write",
				name:"课堂点评",
				id:"3",
				path:"/pages/study/course-comment"
			},
			{
				icon:"attention",
				name:"课堂一览",
				id:"3",
				path:"/pages/study/course-comment"
			},
			{
				icon:"moneybag",
				name:"钱包",
				id:"3",
				path:"/pages/study/course-comment"
			},
			{
				icon:"question",
				name:"帮助",
				id:"3",
				path:"/pages/study/course-comment"
			},
			{
				icon:"selection",
				name:"学习",
				id:"3",
				path:"/pages/study/course-comment"
			},
			{
				icon:"group",
				name:"圈子",
				id:"3",
				path:"/pages/study/course-comment"
			},
			{
				icon:"list",
				name:"交易记录",
				id:"3",
				path:"/pages/study/course-comment"
			},
			{
				icon:"settings",
				name:"设置",
				id:"3",
				path:"/pages/study/course-comment"
			},
			{
				icon:"close",
				name:"错题本",
				id:"3",
				path:"/pages/study/course-comment"
			},
			{
				icon:"addressbook",
				name:"绑定",
				id:"3",
				path:"/pages/study/course-comment"
			},
			{
				icon:"profile",
				name:"邀请",
				id:"3",
				path:"/pages/study/course-comment"
			},
			{
				icon:"forward",
				name:"邀请",
				id:"3",
				path:"/pages/study/course-comment"
			},
			{
				icon:"shop",
				name:"本地商圈",
				id:"3",
				path:"/pages/study/course-comment"
			},
			{
				icon:"share",
				name:"分享",
				id:"3",
				path:"/pages/study/course-comment"
			},
			{
				icon:"friend",
				name:"社交",
				id:"3",
				path:"/pages/study/course-comment"
			},
		]
	},
	{
		icon:"",
		title:"圈子功能",
		menuList:[
			{
				icon:"location",
				name:"到校签到",
				id:"1",
				path:"/pages/index/sign-std-school"
			},
			{
				icon:"locationfill",
				name:"离校签到",
				id:"2",
				path:"/pages/index/sign-std-home"
			},
			{
				icon:"form",
				name:"课表",
				id:"3",
				path:"/pages/study/course-table"
			},
			{
				icon:"time",
				name:"课堂任务",
				id:"3",
				path:"/pages/study/course-plan"
			},
			{
				icon:"write",
				name:"课堂点评",
				id:"3",
				path:"/pages/study/course-comment"
			},
			{
				icon:"attention",
				name:"课堂一览",
				id:"3",
				path:"/pages/study/course-comment"
			},
			{
				icon:"moneybag",
				name:"钱包",
				id:"3",
				path:"/pages/study/course-comment"
			},
			{
				icon:"question",
				name:"帮助",
				id:"3",
				path:"/pages/study/course-comment"
			},
			{
				icon:"selection",
				name:"学习",
				id:"3",
				path:"/pages/study/course-comment"
			},
			{
				icon:"group",
				name:"圈子",
				id:"3",
				path:"/pages/study/course-comment"
			},
			{
				icon:"list",
				name:"交易记录",
				id:"3",
				path:"/pages/study/course-comment"
			},
			{
				icon:"settings",
				name:"设置",
				id:"3",
				path:"/pages/study/course-comment"
			},
			{
				icon:"close",
				name:"错题本",
				id:"3",
				path:"/pages/study/course-comment"
			},
			{
				icon:"addressbook",
				name:"绑定",
				id:"3",
				path:"/pages/study/course-comment"
			},
			{
				icon:"profile",
				name:"邀请",
				id:"3",
				path:"/pages/study/course-comment"
			},
			{
				icon:"forward",
				name:"邀请",
				id:"3",
				path:"/pages/study/course-comment"
			},
			{
				icon:"shop",
				name:"本地商圈",
				id:"3",
				path:"/pages/study/course-comment"
			},
			{
				icon:"share",
				name:"分享",
				id:"3",
				path:"/pages/study/course-comment"
			},
			{
				icon:"friend",
				name:"社交",
				id:"3",
				path:"/pages/study/course-comment"
			},
		]
	},
	{
		icon:"",
		title:"管理功能",
		menuList:[
			{
				icon:"location",
				name:"到校",
				id:"1",
				path:"/pages/index/sign-std-school"
			},
			{
				icon:"locationfill",
				name:"离校",
				id:"2",
				path:"/pages/index/sign-std-home"
			},
			{
				icon:"form",
				name:"课表",
				id:"3",
				path:"/pages/study/course-table"
			},
			{
				icon:"time",
				name:"任务",
				id:"3",
				path:"/pages/study/course-plan"
			},
			{
				icon:"write",
				name:"点评",
				id:"3",
				path:"/pages/study/course-comment"
			},
			{
				icon:"attention",
				name:"一览",
				id:"3",
				path:"/pages/study/course-comment"
			},
			{
				icon:"moneybag",
				name:"钱包",
				id:"3",
				path:"/pages/study/course-comment"
			},
			{
				icon:"question",
				name:"帮助",
				id:"3",
				path:"/pages/study/course-comment"
			},
			{
				icon:"selection",
				name:"学习",
				id:"3",
				path:"/pages/study/course-comment"
			},
			{
				icon:"group",
				name:"圈子",
				id:"3",
				path:"/pages/study/course-comment"
			},
			{
				icon:"list",
				name:"交易记录",
				id:"3",
				path:"/pages/study/course-comment"
			},
			{
				icon:"settings",
				name:"设置",
				id:"3",
				path:"/pages/study/course-comment"
			},
			{
				icon:"close",
				name:"错题本",
				id:"3",
				path:"/pages/study/course-comment"
			},
			{
				icon:"addressbook",
				name:"绑定",
				id:"3",
				path:"/pages/study/course-comment"
			},
			{
				icon:"profile",
				name:"邀请",
				id:"3",
				path:"/pages/study/course-comment"
			},
			{
				icon:"forward",
				name:"邀请",
				id:"3",
				path:"/pages/study/course-comment"
			},
			{
				icon:"shop",
				name:"本地商圈",
				id:"3",
				path:"/pages/study/course-comment"
			},
			{
				icon:"share",
				name:"分享",
				id:"3",
				path:"/pages/study/course-comment"
			},
			{
				icon:"friend",
				name:"社交",
				id:"3",
				path:"/pages/study/course-comment"
			},
		]
	},
]
//班级数据
const allClassList = [
	'四年级',
	'五年级',
	'六年级',
	'七年级1',
	'七年级2',
	'八年级1',
	'八年级2',
	'九年级1',
	'九年级2',
]
//课表数据
const courseTableList = [
	{
		table_id:1,
		table_date:"2020年9月8日",
		table_class:"四年级",
		courseList:[
			[
				{course_id:1,title:'上午第一节',name:"英语",teacher_:5,teacher_name:"刘老师"},
				{course_id:2,title:'上午第二节',name:"数学",teacher_:5,teacher_name:"林老师"},
				{course_id:3,title:'上午第三节',name:"语文",teacher_:5,teacher_name:"姜老师"},
				{course_id:3,title:'上午第四节',name:"语文",teacher_:5,teacher_name:"姜老师"},
			],
			[
				{course_id:1,title:'下午第一节',name:"物理",teacher_:5,teacher_name:"刘老师"},
				{course_id:2,title:'下午第二节',name:"化学",teacher_:5,teacher_name:"林老师"},
				{course_id:3,title:'下午第三节',name:"生物",teacher_:5,teacher_name:"姜老师"},
				{course_id:3,title:'下午第四节',name:"单词突击",teacher_:5,teacher_name:"姜老师"},
			],
			[
				{course_id:1,title:'晚辅第一节',name:"政治",teacher_:5,teacher_name:"刘老师"},
				{course_id:2,title:'晚辅第二节',name:"历史",teacher_:5,teacher_name:"林老师"},
				{course_id:3,title:'晚辅第三节',name:"地理",teacher_:5,teacher_name:"姜老师"},
			],
			
		]
	},
	{
		table_id:1,
		table_date:"2020年9月8日",
		table_class:"四年级",
		courseList:[
			[
				{course_id:1,title:'上午第一节',name:"英语",teacher_:5,teacher_name:"刘老师"},
				{course_id:2,title:'上午第二节',name:"数学",teacher_:5,teacher_name:"林老师"},
				{course_id:3,title:'上午第三节',name:"语文",teacher_:5,teacher_name:"姜老师"},
			],
			[
				{course_id:1,title:'下午第一节',name:"物理",teacher_:5,teacher_name:"刘老师"},
				{course_id:2,title:'下午第二节',name:"化学",teacher_:5,teacher_name:"林老师"},
				{course_id:3,title:'下午第三节',name:"生物",teacher_:5,teacher_name:"姜老师"},
				{course_id:3,title:'下午第四节',name:"单词突击",teacher_:5,teacher_name:"姜老师"},
			],
			[
				{course_id:1,title:'晚辅第一节',name:"政治",teacher_:5,teacher_name:"刘老师"},
				{course_id:2,title:'晚辅第二节',name:"历史",teacher_:5,teacher_name:"林老师"},
				{course_id:3,title:'晚辅第三节',name:"地理",teacher_:5,teacher_name:"姜老师"},
			],
			
		]
	},
	{
		table_id:1,
		table_date:"2020年9月8日",
		table_class:"四年级",
		courseList:[
			[
				{course_id:1,title:'上午第一节',name:"英语",teacher_:5,teacher_name:"刘老师"},
				{course_id:2,title:'上午第二节',name:"数学",teacher_:5,teacher_name:"林老师"},
				{course_id:3,title:'上午第三节',name:"语文",teacher_:5,teacher_name:"姜老师"},
			],
			[
				{course_id:1,title:'下午第一节',name:"物理",teacher_:5,teacher_name:"刘老师"},
				{course_id:2,title:'下午第二节',name:"化学",teacher_:5,teacher_name:"林老师"},
				{course_id:3,title:'下午第三节',name:"生物",teacher_:5,teacher_name:"姜老师"},
				{course_id:3,title:'下午第四节',name:"单词突击",teacher_:5,teacher_name:"姜老师"},
			],
			[
				{course_id:1,title:'晚辅第一节',name:"政治",teacher_:5,teacher_name:"刘老师"},
				{course_id:2,title:'晚辅第二节',name:"历史",teacher_:5,teacher_name:"林老师"},
				{course_id:3,title:'晚辅第三节',name:"地理",teacher_:5,teacher_name:"姜老师"},
			],
			
		]
	}
]
//所有课程
const allCourseList = [
	'选择课程',
	'语文',
	'数学',
	'英语',
	'物理',
	'化学',
	'生物',
	'地理',
	'政治',
	'历史',
	'智能单词',
	'作业',
	'多媒体',
	'不安排'
]
//所有教师
const allTeacherList = [
	{id:0,teacher_name:'选择老师'},
	{id:1,teacher_name:'刘老师'},
	{id:2,teacher_name:'姜老师'},
	{id:3,teacher_name:'林老师'},
	{id:4,teacher_name:'王老师'},
	{id:5,teacher_name:'薛老师'},
	{id:6,teacher_name:'赵老师'},
	{id:7,teacher_name:'蒙老师'},
	{id:8,teacher_name:'屈老师'},
	{id:0,teacher_name:'不安排'},
]
//学生数据
const allStudentList = [
	{
		id:1,name:'张三',
		headpic:"https://ossweb-img.qq.com/images/lol/web201310/skin/big21002.jpg",
		area:"大宋",gradeClass:"8年级4班",signStatus:0
	},
	{
		id:2,name:'李四',
		headpic:"https://ossweb-img.qq.com/images/lol/web201310/skin/big21003.jpg",
		area:"陆河",gradeClass:"8年级4班",signStatus:1
	},
	{
		id:3,name:'赵五',
		headpic:"https://ossweb-img.qq.com/images/lol/web201310/skin/big21004.jpg",
		area:"华昌",gradeClass:"8年级4班",signStatus:1
	},
	{
		id:4,name:'王二麻子',
		headpic:"https://ossweb-img.qq.com/images/lol/web201310/skin/big21005.jpg",
		area:"西老庄",gradeClass:"8年级4班",signStatus:0
	},
	{
		id:5,name:'小乔',
		headpic:"https://ossweb-img.qq.com/images/lol/web201310/skin/big21006.jpg",
		area:"淮安",gradeClass:"8年级4班",signStatus:0
	},
]
const courseInfo = {
	code:'0000',
	msg:'success',
	data:{
		id:1,
		course_name:'语文',
		teacher_id:1,
		teacher_name:'刘老师',
		date:"2020-9-9",
		class_no:"上午第四节",
		class_name:'7年纪',
		plan_list:[
			{id:1,title:'古诗四首背过',num_4_comment:4},
			{id:2,title:'古诗四首默写',num_4_comment:4},
			{id:3,title:'散文理解',num_4_comment:10},
		],
		comment_list:[
			
		],
		student_list:[
			{
				id:1,name:'张三',
				headpic:"https://ossweb-img.qq.com/images/lol/web201310/skin/big21002.jpg",
				area:"大宋",gradeClass:"8年级4班",signStatus:0
			},
			{
				id:2,name:'李四',
				headpic:"https://ossweb-img.qq.com/images/lol/web201310/skin/big21003.jpg",
				area:"陆河",gradeClass:"8年级4班",signStatus:1
			},
			{
				id:3,name:'赵五',
				headpic:"https://ossweb-img.qq.com/images/lol/web201310/skin/big21004.jpg",
				area:"华昌",gradeClass:"8年级4班",signStatus:1
			},
			{
				id:4,name:'王二麻子',
				headpic:"https://ossweb-img.qq.com/images/lol/web201310/skin/big21005.jpg",
				area:"西老庄",gradeClass:"8年级4班",signStatus:0
			},
			{
				id:5,name:'小乔',
				headpic:"https://ossweb-img.qq.com/images/lol/web201310/skin/big21006.jpg",
				area:"淮安",gradeClass:"8年级4班",signStatus:0
			},
		],
	}
}
//课本知识点目录
const bookMenus = {
	id:1,
	name:"语文",
	title:"",
	menu_list:[
		{id:2,name:"英语",title:""},
		{id:3,name:"数学",title:""},
		{id:4,name:"物理",title:""},
		{id:5,name:"化学",title:""},
		{id:6,name:"地理",title:""}
	]
}

//用法  const result = await this.$api.json('userInfo');
export default {
	userInfo,
	swiperList,
	menuGridList,
	hotNewsList,
	newNewsList,
	allMenuGridList,
	ofenUseMenuList,
	allClassList,
	courseTableList,
	allCourseList,
	allTeacherList,
	allStudentList,
	courseInfo,
	bookMenus,
	
}
