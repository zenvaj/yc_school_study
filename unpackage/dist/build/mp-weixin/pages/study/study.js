(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/study/study"],{"0985":function(e,a,t){"use strict";(function(e){t("de04");i(t("66fd"));var a=i(t("56fd"));function i(e){return e&&e.__esModule?e:{default:e}}e(a.default)}).call(this,t("543d")["createPage"])},"0d89":function(e,a,t){"use strict";var i=t("a651"),o=t.n(i);o.a},1501:function(e,a,t){"use strict";t.r(a);var i=t("a7ef"),o=t.n(i);for(var n in i)"default"!==n&&function(e){t.d(a,e,(function(){return i[e]}))}(n);a["default"]=o.a},"56fd":function(e,a,t){"use strict";t.r(a);var i=t("80cb"),o=t("1501");for(var n in o)"default"!==n&&function(e){t.d(a,e,(function(){return o[e]}))}(n);t("0d89");var r,c=t("f0c5"),l=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);a["default"]=l.exports},"80cb":function(e,a,t){"use strict";var i;t.d(a,"b",(function(){return o})),t.d(a,"c",(function(){return n})),t.d(a,"a",(function(){return i}));var o=function(){var e=this,a=e.$createElement;e._self._c},n=[]},a651:function(e,a,t){},a7ef:function(e,a,t){"use strict";(function(e){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=o(t("44d6"));function o(e){return e&&e.__esModule?e:{default:e}}var n,r=function(){t.e("components/menu/menu-grid").then(function(){return resolve(t("e5cb"))}.bind(null,t)).catch(t.oe)},c={},l={components:{menuGrid:r},data:function(){return{multiArray:[["课程","语文","数学","英语","物理","化学","生物","政治","历史","地理"],["年级","小4","小5","小6","初1","初2","初3"],["版本","济南版","青岛版","人教版","外研社"]],multiIndex:[0,0,0],paraMenuGrid:{cuIconList:[{cuIcon:"cardboardfill",color:"red",badge:0,name:"课本学习",path:"/pages/study/book"},{cuIcon:"recordfill",color:"orange",badge:0,name:"课后习题",path:"/pages/study/book_question"},{cuIcon:"picfill",color:"yellow",badge:0,name:"同步练习",path:"/pages/study/book_question"},{cuIcon:"noticefill",color:"olive",badge:0,name:"单元测试",path:"/pages/study/book_question"},{cuIcon:"upstagefill",color:"cyan",badge:0,name:"错题本",path:"/pages/study/book_question"},{cuIcon:"questionfill",color:"mauve",badge:0,name:"复习",path:"/pages/study/book"},{cuIcon:"discoverfill",color:"purple",badge:0,name:"课程表",path:"/pages/study/course-show"},{cuIcon:"clothesfill",color:"blue",badge:0,name:"签到记录",path:"/pages/index/sign-std-log"},{cuIcon:"brandfill",color:"mauve",badge:0,name:"刁难老师",path:"/pages/public/content"}],gridCol:3,gridBorder:0},cWidth:"",cHeight:"",pixelRatio:1,arcbarWidth:"",gaugeWidth:"",Gauge:{categories:[{value:.2,color:"#1890ff"},{value:.8,color:"#2fc25b"},{value:1,color:"#f04864"}],series:[{name:"完成率",data:.66}]},Arcbar1:{series:[{name:"正确率",data:.29,color:"#2fc25b"}]},Arcbar2:{series:[{name:"错误率",data:.65,color:"#f04864"}]},Arcbar3:{series:[{name:"完成率",data:.85,color:"#1890ff"}]},Radar:{categories:["维度1","维度2","维度3","维度4","维度5","维度6","维度7","维度8"],series:[{name:"成交量1",data:[90,110,165,195,187,172,187,172]},{name:"成交量2",data:[190,210,105,35,27,102,27,102]}]},ColumnMeter:{categories:["2013","2014","2015","2016","2017","2018","2019","2020","2021","2022"],series:[{name:"目标值",data:[35,36,31,33,13,34,13,34,13,34],color:"#2fc25b"},{name:"完成量",data:[18,27,21,24,6,28,6,28,6,28],color:"#1890ff"}]}}},methods:{onLoad:function(){n=this,this.cWidth=e.upx2px(750),this.cHeight=e.upx2px(500),this.cWidth3=e.upx2px(250),this.cHeight3=e.upx2px(250),this.arcbarWidth=e.upx2px(24),this.gaugeWidth=e.upx2px(30),this.showGauge("canvasGauge",this.Gauge),this.showArcbar("canvasArcbar1",this.Arcbar1),this.showArcbar2("canvasArcbar2",this.Arcbar2),this.showArcbar3("canvasArcbar3",this.Arcbar3),this.showRadar("canvasRadar",this.Radar),this.showColumnMeter("canvasColumnMeter",this.ColumnMeter)},choiceCourse:function(){console.log("选择课程"),this.$refs.coursePicker.$el.click()},sourceChoiceRe:function(e){console.log(e)},navigeteMenuGrid:function(a,t){console.log("navigeteMenuGrid",a,t),e.navigateTo({url:t})},bindMultiPickerColumnChange:function(e){switch(console.log("修改的列为："+e.detail.column+"，值为："+e.detail.value),this.multiIndex[e.detail.column]=e.detail.value,e.detail.column){case 0:this.multiIndex.splice(1,1,0),this.multiIndex.splice(2,1,0);break;case 1:this.multiIndex.splice(2,1,0);break}this.$forceUpdate()},showGauge:function(e,a){c[e]=new i.default({$this:n,canvasId:e,type:"gauge",fontSize:11,title:{name:Math.round(100*a.series[0].data)+"%",color:a.categories[1].color,fontSize:25*n.pixelRatio,offsetY:50*n.pixelRatio},subtitle:{name:a.series[0].name,color:"#666666",fontSize:15*n.pixelRatio,offsetY:-50*n.pixelRatio},extra:{gauge:{type:"default",width:n.gaugeWidth*n.pixelRatio,startAngle:.75,endAngle:.25,startNumber:0,endNumber:100,splitLine:{fixRadius:0,splitNumber:10,width:n.gaugeWidth*n.pixelRatio,color:"#FFFFFF",childNumber:5,childWidth:.4*n.gaugeWidth*n.pixelRatio},pointer:{width:.8*n.gaugeWidth*n.pixelRatio,color:"auto"}}},background:"#FFFFFF",pixelRatio:n.pixelRatio,categories:a.categories,series:a.series,animation:!0,width:n.cWidth*n.pixelRatio,height:n.cHeight*n.pixelRatio,dataLabel:!0})},changeGaugeData:function(){for(var e,a=[{name:"完成率",data:Math.random()}],t=0;t<n.Gauge.categories.length;t++)if(a[0].data<=n.Gauge.categories[t].value){e=n.Gauge.categories[t].color;break}c["canvasGauge"].updateData({series:a,categories:n.Gauge.categories,title:{name:Math.round(100*a[0].data)+"%",color:e,fontSize:25*n.pixelRatio,offsetY:50*n.pixelRatio},subtitle:{name:"更新数据",color:"#666666",fontSize:15*n.pixelRatio,offsetY:-50*n.pixelRatio}})},showArcbar:function(e,a){new i.default({$this:n,canvasId:e,type:"arcbar",fontSize:11,title:{name:Math.round(100*a.series[0].data)+"%",color:a.series[0].color,fontSize:25*n.pixelRatio},subtitle:{name:a.series[0].name,color:"#666666",fontSize:15*n.pixelRatio},extra:{arcbar:{type:"default",width:n.arcbarWidth*n.pixelRatio}},background:"#FFFFFF",pixelRatio:n.pixelRatio,series:a.series,animation:!1,width:n.cWidth3*n.pixelRatio,height:n.cHeight3*n.pixelRatio,dataLabel:!0})},showArcbar2:function(e,a){new i.default({$this:n,canvasId:e,type:"arcbar",fontSize:11,title:{name:Math.round(100*a.series[0].data)+"%",color:a.series[0].color,fontSize:25*n.pixelRatio},subtitle:{name:a.series[0].name,color:"#666666",fontSize:15*n.pixelRatio},extra:{arcbar:{type:"default",width:n.arcbarWidth*n.pixelRatio,backgroundColor:"#ffe3e8",startAngle:1.25,endAngle:.75}},background:"#FFFFFF",pixelRatio:n.pixelRatio,series:a.series,animation:!1,width:n.cWidth3*n.pixelRatio,height:n.cHeight3*n.pixelRatio,dataLabel:!0})},showArcbar3:function(e,a){new i.default({$this:n,canvasId:e,type:"arcbar",fontSize:11,title:{name:Math.round(100*a.series[0].data)+"%",color:a.series[0].color,fontSize:25*n.pixelRatio},subtitle:{name:a.series[0].name,color:"#666666",fontSize:15*n.pixelRatio},extra:{arcbar:{type:"circle",width:n.arcbarWidth*n.pixelRatio,startAngle:.5}},background:"#FFFFFF",pixelRatio:n.pixelRatio,series:a.series,animation:!1,width:n.cWidth3*n.pixelRatio,height:n.cHeight3*n.pixelRatio,dataLabel:!0})},showRadar:function(e,a){c[e]=new i.default({$this:n,canvasId:e,type:"radar",fontSize:11,padding:[15,15,0,15],legend:{show:!0,padding:5,lineHeight:11,margin:0},background:"#FFFFFF",pixelRatio:n.pixelRatio,animation:!1,dataLabel:!0,categories:a.categories,series:a.series,width:n.cWidth*n.pixelRatio,height:n.cHeight*n.pixelRatio,extra:{radar:{max:200}}})},showColumnMeter:function(e,a){c[e]=new i.default({$this:n,canvasId:e,type:"column",padding:[15,15,0,15],legend:{show:!0,padding:5,lineHeight:11,margin:0},fontSize:11,background:"#FFFFFF",pixelRatio:n.pixelRatio,animation:!1,categories:a.categories,series:a.series,xAxis:{disableGrid:!0},yAxis:{},dataLabel:!0,width:n.cWidth*n.pixelRatio,height:n.cHeight*n.pixelRatio,extra:{column:{type:"meter",width:n.cWidth*n.pixelRatio*.45/a.categories.length,meter:{border:4,fillColor:"#E5FDC3"}}}})},touchPie:function(e,a){c[a].showToolTip(e,{format:function(e){return e.name+":"+e.data}})},touchIt:function(e,a){c[a].touchLegend(e,{animation:!1}),c[a].showToolTip(e,{format:function(e,a){return"object"===typeof e.data?a+" "+e.name+":"+e.data.value:a+" "+e.name+":"+e.data}})}}};a.default=l}).call(this,t("543d")["default"])}},[["0985","common/runtime","common/vendor"]]]);