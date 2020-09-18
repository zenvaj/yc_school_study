<template>
	<view>
		
		<view class="cu-form-group margin-bottom-sm">
			<view class="title">课本选择</view>
			<picker mode="multiSelector" @change="sourceChoiceRe" @columnchange="bindMultiPickerColumnChange" :value="multiIndex" :range="multiArray">
				<view class="picker">
					{{multiArray[0][multiIndex[0]]}}，{{multiArray[1][multiIndex[1]]}}，{{multiArray[2][multiIndex[2]]}}
				</view>
			</picker>
		</view>
		<menuGrid 
			:cuIconList="paraMenuGrid.cuIconList" 
			:gridCol="paraMenuGrid.gridCol" 
			:gridBorder="paraMenuGrid.gridBorder" 
			@menuClick="navigeteMenuGrid"></menuGrid>
		
		
		
		<view class="qiun-bg-white qiun-title-bar qiun-common-mt" >
			<view class="qiun-title-dot-light">学习进度 <text @tap="changeGaugeData()" class="cuIcon-refresh" style="margin-left: 40rpx;"></text></view>
		</view>
		<view class="qiun-charts">
			<!--#ifdef MP-ALIPAY -->
			<canvas canvas-id="canvasGauge" id="canvasGauge" class="charts" :width="cWidth*pixelRatio" :height="cHeight*pixelRatio" :style="{'width':cWidth+'px','height':cHeight+'px'}"></canvas>
			<!--#endif-->
			<!--#ifndef MP-ALIPAY -->
			<canvas canvas-id="canvasGauge" id="canvasGauge" class="charts"></canvas>
			<!--#endif-->
		</view>
		<view class="qiun-bg-white qiun-title-bar qiun-common-mt" >
			<view class="qiun-title-dot-light">做题成效</view>
		</view>
		<view class="qiun-charts3">
			<!--#ifdef MP-ALIPAY -->
			<canvas canvas-id="canvasArcbar1" id="canvasArcbar1" class="charts3" :style="{'width':cWidth3*pixelRatio+'px','height':cHeight3*pixelRatio+'px', 'transform': 'scale('+(1/pixelRatio)+')','margin-left':-cWidth3*(pixelRatio-1)/2+'px','margin-top':-cHeight3*(pixelRatio-1)/2+'px'}"></canvas>
			<canvas canvas-id="canvasArcbar2" id="canvasArcbar2" class="charts3" :style="{'width':cWidth3*pixelRatio+'px','height':cHeight3*pixelRatio+'px', 'transform': 'scale('+(1/pixelRatio)+')','margin-left':cWidth3-cWidth3*(pixelRatio-1)/2+'px','margin-top':-cHeight3*(pixelRatio-1)/2+'px'}"></canvas>
			<canvas canvas-id="canvasArcbar3" id="canvasArcbar3" class="charts3" :style="{'width':cWidth3*pixelRatio+'px','height':cHeight3*pixelRatio+'px', 'transform': 'scale('+(1/pixelRatio)+')','margin-left':cWidth3*2-cWidth3*(pixelRatio-1)/2+'px','margin-top':-cHeight3*(pixelRatio-1)/2+'px'}"></canvas>
			<!--#endif-->
			<!--#ifndef MP-ALIPAY -->
			<canvas canvas-id="canvasArcbar1" id="canvasArcbar1" class="charts3"></canvas>
			<canvas canvas-id="canvasArcbar2" id="canvasArcbar2" class="charts3" style="margin-left: 250rpx;"></canvas>
			<canvas canvas-id="canvasArcbar3" id="canvasArcbar3" class="charts3" style="margin-left: 500rpx;"></canvas>
			<!--#endif-->
		</view>
		<view class="qiun-bg-white qiun-title-bar qiun-common-mt" >
			<view class="qiun-title-dot-light">雷达图</view>
		</view>
		<view class="qiun-charts">
			<!--#ifdef MP-ALIPAY -->
			<canvas canvas-id="canvasRadar" id="canvasRadar" class="charts" :width="cWidth*pixelRatio" :height="cHeight*pixelRatio" :style="{'width':cWidth+'px','height':cHeight+'px'}" @touchstart="touchPie($event,'canvasRadar')"></canvas>
			<!--#endif-->
			<!--#ifndef MP-ALIPAY -->
			<canvas canvas-id="canvasRadar" id="canvasRadar" class="charts" @touchstart="touchPie($event,'canvasRadar')"></canvas>
			<!--#endif-->
		</view>
		<view class="qiun-bg-white qiun-title-bar qiun-common-mt" >
			<view class="qiun-title-dot-light">温度计式图表</view>
		</view>
		<view class="qiun-charts" >
			<!--#ifdef MP-ALIPAY -->
			<canvas canvas-id="canvasColumnMeter" id="canvasColumnMeter" class="charts" :width="cWidth*pixelRatio" :height="cHeight*pixelRatio" :style="{'width':cWidth+'px','height':cHeight+'px'}" @touchstart="touchIt($event,'canvasColumnMeter')"></canvas>
			<!--#endif-->
			<!--#ifndef MP-ALIPAY -->
			<canvas canvas-id="canvasColumnMeter" id="canvasColumnMeter" class="charts" @touchstart="touchIt($event,'canvasColumnMeter')"></canvas>
			<!--#endif-->
		</view>
	</view>
	
</template>

<script>
	import menuGrid from '../../components/menu/menu-grid.vue'
	import uCharts from '../../components/u-charts/u-charts.js';
	var _self;
	var canvasObj = {};
	export default {
		components:{
			menuGrid
		},
		data() {
			return { 
				//课程数据
				multiArray: [
					['课程','语文', '数学', '英语', '物理', '化学', '生物', '政治', '历史', '地理'],
					['年级','小4', '小5', '小6', '初1', '初2', '初3'],
					['版本','济南版', '青岛版', '人教版', '外研社']
				],
				multiIndex: [0, 0, 0],
				//菜单数据
				paraMenuGrid:{
					cuIconList: [{
						cuIcon: 'cardboardfill',
						color: 'red',
						badge: 0,
						name: '课本学习',
						path: '/pages/study/book'
					}, {
						cuIcon: 'recordfill',
						color: 'orange',
						badge: 0,
						name: '课后习题',
						path: '/pages/study/book_question'
					}, {
						cuIcon: 'picfill',
						color: 'yellow',
						badge: 0,
						name: '同步练习',
						path: '/pages/study/book_question'
					}, {
						cuIcon: 'noticefill',
						color: 'olive',
						badge: 0,
						name: '单元测试',
						path: '/pages/study/book_question'
					}, {
						cuIcon: 'upstagefill',
						color: 'cyan',
						badge: 0,
						name: '错题本',
						path: '/pages/study/book_question'
					},{
						cuIcon: 'questionfill',
						color: 'mauve',
						badge: 0,
						name: '复习',
						path: '/pages/study/book'
					},{
						cuIcon: 'discoverfill',
						color: 'purple',
						badge: 0,
						name: '课程表',
						path: '/pages/study/course-show'
					},{
						cuIcon: 'clothesfill',
						color: 'blue',
						badge: 0,
						name: '签到记录',
						path: '/pages/index/sign-std-log'
					},{
						cuIcon: 'brandfill',
						color: 'mauve',
						badge: 0,
						name: '刁难老师',
						path: '/pages/public/content'
					}],
					gridCol: 3,
					gridBorder: 0
				},
				//图表数据
				cWidth: '',
				cHeight: '',
				pixelRatio: 1,
				arcbarWidth: '', //圆弧进度图，进度条宽度,此设置可使各端宽度一致
				gaugeWidth: '', //仪表盘宽度,此设置可使各端宽度一致
				Gauge: {
					categories: [{
						value: 0.2,
						color: "#1890ff"
					}, {
						value: 0.8,
						color: "#2fc25b"
					}, {
						value: 1,
						color: "#f04864"
					}],
					series: [{
						name: "完成率",
						data: 0.66
					}]
				},
				"Arcbar1": {
					"series": [{
						"name": "正确率",
						"data": 0.29,
						"color": "#2fc25b"
					}]
				},
				"Arcbar2": {
					"series": [{
						"name": "错误率",
						"data": 0.65,
						"color": "#f04864"
					}]
				},
				"Arcbar3": {
					"series": [{
						"name": "完成率",
						"data": 0.85,
						"color": "#1890ff"
					}]
				},
				"Radar": {
					"categories": ["维度1", "维度2", "维度3", "维度4", "维度5", "维度6", "维度7", "维度8"],
					"series": [{
						"name": "成交量1",
						"data": [90, 110, 165, 195, 187, 172, 187, 172]
					}, {
						"name": "成交量2",
						"data": [190, 210, 105, 35, 27, 102, 27, 102]
					}]
				},
				"ColumnMeter": {
						"categories": ["2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"],
						"series": [{
							"name": "目标值",
							"data": [35, 36, 31, 33, 13, 34, 13, 34, 13, 34],
							"color": "#2fc25b"
						}, {
							"name": "完成量",
							"data": [18, 27, 21, 24, 6, 28, 6, 28, 6, 28],
							"color": "#1890ff"
						}]
					},
			}
		},
		methods: {
			onLoad(){
				_self = this;
				//#ifdef MP-ALIPAY
				uni.getSystemInfo({
					success: function(res) {
						if (res.pixelRatio > 1) {
							//正常这里给2就行，如果pixelRatio=3性能会降低一点
							//_self.pixelRatio =res.pixelRatio;
							_self.pixelRatio = 2;
						}
					}
				});
				//#endif
				this.cWidth = uni.upx2px(750);
				this.cHeight = uni.upx2px(500);
				this.cWidth3 = uni.upx2px(250);
				this.cHeight3 = uni.upx2px(250);
				this.arcbarWidth = uni.upx2px(24);
				this.gaugeWidth = uni.upx2px(30);
				this.showGauge("canvasGauge", this.Gauge);
				
				this.showArcbar("canvasArcbar1", this.Arcbar1);
				this.showArcbar2("canvasArcbar2",this.Arcbar2);
				this.showArcbar3("canvasArcbar3",this.Arcbar3);
				
				this.showRadar("canvasRadar", this.Radar);
				
				this.showColumnMeter("canvasColumnMeter", this.ColumnMeter);
			},
			choiceCourse(){
				console.log("选择课程")
				this.$refs.coursePicker.$el.click();
			},
			sourceChoiceRe(e){
				console.log(e)
				//课程数据
				
			},
			//九宫格点击方法
			navigeteMenuGrid(name,type){
				console.log('navigeteMenuGrid',name,type)
				uni.navigateTo({
					url:type
				})
			},
			bindMultiPickerColumnChange: function(e) {
				console.log('修改的列为：' + e.detail.column + '，值为：' + e.detail.value)
				this.multiIndex[e.detail.column] = e.detail.value
				switch (e.detail.column) {
					case 0: //拖动第1列
						this.multiIndex.splice(1, 1, 0)
						this.multiIndex.splice(2, 1, 0)
						break
					case 1: //拖动第2列 
						this.multiIndex.splice(2, 1, 0)
						break
				}
				this.$forceUpdate()
			},
			//图表数据
			showGauge(canvasId, chartData) {
				//console.log(canvasId, chartData)
				canvasObj[canvasId] = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'gauge',
					fontSize: 11,
					title: {
						name: Math.round(chartData.series[0].data * 100) + '%',
						color: chartData.categories[1].color,
						fontSize: 25 * _self.pixelRatio,
						offsetY: 50 * _self.pixelRatio, //新增参数，自定义调整Y轴文案距离
					},
					subtitle: {
						name: chartData.series[0].name,
						color: '#666666',
						fontSize: 15 * _self.pixelRatio,
						offsetY: -50 * _self.pixelRatio, //新增参数，自定义调整Y轴文案距离
					},
					extra: {
						gauge: {
							type: 'default',
							width: _self.gaugeWidth * _self.pixelRatio, //仪表盘背景的宽度
							startAngle: 0.75,
							endAngle: 0.25,
							startNumber: 0,
							endNumber: 100,
							splitLine: {
								fixRadius: 0,
								splitNumber: 10,
								width: _self.gaugeWidth * _self.pixelRatio, //仪表盘背景的宽度
								color: '#FFFFFF',
								childNumber: 5,
								childWidth: _self.gaugeWidth * 0.4 * _self.pixelRatio, //仪表盘背景的宽度
							},
							pointer: {
								width: _self.gaugeWidth * 0.8 * _self.pixelRatio, //指针宽度
								color: 'auto'
							}
						}
					},
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					categories: chartData.categories,
					series: chartData.series,
					animation: true,
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					dataLabel: true,
				});
			},
			changeGaugeData() {
				let series = [{
					name: "完成率",
					data: Math.random()
				}]; //这里是随机数据，生产环境请从服务器获取，注意series数据类型为数组
				//这里我借用之前的categories数据，判断一下新数据的title.color，没有写死在程序里，以便于自定义
				let newTitleColor;
				for (let i = 0; i < _self.Gauge.categories.length; i++) {
					if (series[0].data <= _self.Gauge.categories[i].value) {
						newTitleColor = _self.Gauge.categories[i].color;
						break;
					}
				}
			
				canvasObj['canvasGauge'].updateData({
					series: series, //这里给了新数值
					categories: _self.Gauge.categories,
					title: {
						name: Math.round(series[0].data * 100) + '%',
						color: newTitleColor,
						fontSize: 25 * _self.pixelRatio,
						offsetY: 50 * _self.pixelRatio, //新增参数，自定义调整Y轴文案距离
					},
					subtitle: {
						name: '更新数据',
						color: '#666666',
						fontSize: 15 * _self.pixelRatio,
						offsetY: -50 * _self.pixelRatio, //新增参数，自定义调整Y轴文案距离
					}
				});
			},
			showArcbar(canvasId, chartData) {
				//console.log(canvasId, chartData)
				new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'arcbar',
					fontSize: 11,
					title: {
						name: Math.round(chartData.series[0].data * 100) + '%',
						color: chartData.series[0].color,
						fontSize: 25 * _self.pixelRatio
					},
					subtitle: {
						name: chartData.series[0].name,
						color: '#666666',
						fontSize: 15 * _self.pixelRatio
					},
					extra: {
						arcbar: {
							type: 'default',
							width: _self.arcbarWidth * _self.pixelRatio, //圆弧的宽度
						}
					},
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					series: chartData.series,
					animation: false,
					width: _self.cWidth3 * _self.pixelRatio,
					height: _self.cHeight3 * _self.pixelRatio,
					dataLabel: true,
				});
			
			},
			showArcbar2(canvasId, chartData) {
				new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'arcbar',
					fontSize: 11,
					title: {
						name: Math.round(chartData.series[0].data * 100) + '%',
						color: chartData.series[0].color,
						fontSize: 25 * _self.pixelRatio
					},
					subtitle: {
						name: chartData.series[0].name,
						color: '#666666',
						fontSize: 15 * _self.pixelRatio
					},
					extra: {
						arcbar: {
							type: 'default',
							width: _self.arcbarWidth * _self.pixelRatio, //圆弧的宽度
							backgroundColor: '#ffe3e8',
							startAngle: 1.25,
							endAngle: 0.75
						}
					},
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					series: chartData.series,
					animation: false,
					width: _self.cWidth3 * _self.pixelRatio,
					height: _self.cHeight3 * _self.pixelRatio,
					dataLabel: true,
				});
			
			},
			showArcbar3(canvasId, chartData) {
				new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'arcbar',
					fontSize: 11,
					title: {
						name: Math.round(chartData.series[0].data * 100) + '%',
						color: chartData.series[0].color,
						fontSize: 25 * _self.pixelRatio
					},
					subtitle: {
						name: chartData.series[0].name,
						color: '#666666',
						fontSize: 15 * _self.pixelRatio
					},
					extra: {
						arcbar: {
							type: 'circle', //整圆类型进度条图
							width: _self.arcbarWidth * _self.pixelRatio, //圆弧的宽度
							startAngle: 0.5 //整圆类型只需配置起始角度即可
						}
					},
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					series: chartData.series,
					animation: false,
					width: _self.cWidth3 * _self.pixelRatio,
					height: _self.cHeight3 * _self.pixelRatio,
					dataLabel: true,
				});
			
			},
			
			showRadar(canvasId, chartData) {
				canvasObj[canvasId] = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'radar',
					fontSize: 11,
					padding:[15,15,0,15],
					legend:{
						show:true,
						padding:5,
						lineHeight:11,
						margin:0,
					},
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					animation: false,
					dataLabel: true,
					categories: chartData.categories,
					series: chartData.series,
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					extra: {
						radar: {
							max: 200 //雷达数值的最大值
						}
					}
				});
			},
			showColumnMeter(canvasId, chartData) {
				canvasObj[canvasId] = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'column',
					padding:[15,15,0,15],
					legend:{
						show:true,
						padding:5,
						lineHeight:11,
						margin:0,
					},
					fontSize: 11,
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					animation: false,
					categories: chartData.categories,
					series: chartData.series,
					xAxis: {
						disableGrid: true,
					},
					yAxis: {
						//disabled:true
					},
					dataLabel: true,
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					extra: {
						column: {
							type: 'meter',
							width: _self.cWidth * _self.pixelRatio * 0.45 / chartData.categories.length,
							meter: {
								border: 4,
								fillColor: '#E5FDC3'
							}
						}
					}
				});
			
			},
			touchPie(e,id) {
			  canvasObj[id].showToolTip(e, {
			      format: function(item) {
			          return item.name + ':' + item.data
			      }
			  });
			},
			touchIt(e,id) {
				canvasObj[id].touchLegend(e, {
					animation : false
				});
				canvasObj[id].showToolTip(e, {
					format: function (item, category) {
						if(typeof item.data === 'object'){
							return category + ' ' + item.name + ':' + item.data.value 
						}else{
							return category + ' ' + item.name + ':' + item.data 
						}
					}
				});
			},
		}
	}
</script>
	
<style lang="scss">
	.choice-course{
		font-size: 32rpx;
		padding-left: 30rpx;
		display: flex;
		.book-mark{
			top: 4rpx;
			height:40rpx;
			width: 50rpx;
		}
	}
	
	
	.qiun-wrap {
		display: flex;
		flex-wrap: wrap;
	}
	
	.qiun-rows {
		display: flex;
		flex-direction: row !important;
	}
	
	.qiun-columns {
		display: flex;
		flex-direction: column !important;
	}
	
	.qiun-common-mt {
		margin-top: 10rpx;
	}
	
	.qiun-bg-white {
		background: #FFFFFF;
	}
	
	.qiun-title-bar {
		width: 96%;
		padding: 10rpx 2%;
		flex-wrap: nowrap;
	}
	
	.qiun-title-dot-light {
		border-left: 10rpx solid #0ea391;
		padding-left: 10rpx;
		font-size: 32rpx;
		color: #000000
	}
	
	/* 通用样式 */
	.qiun-charts {
		width: 750rpx;
		height: 500rpx;
		background-color: #FFFFFF;
	}
	
	.charts {
		width: 750rpx;
		height: 500rpx;
		background-color: #FFFFFF;
	}
	
	/* 横屏样式 */
	.qiun-charts-rotate {
		width: 700rpx;
		height: 1100rpx;
		background-color: #FFFFFF;
		padding: 25rpx;
	}
	
	.charts-rotate {
		width: 700rpx;
		height: 1100rpx;
		background-color: #FFFFFF;
	}
	
	/* 圆弧进度样式 */
	.qiun-charts3 {
		width: 750rpx;
		height: 250rpx;
		background-color: #FFFFFF;
		position: relative;
	}
	
	.charts3 {
		position: absolute;
		width: 250rpx;
		height: 250rpx;
		background-color: #FFFFFF;
	}
	
</style>
