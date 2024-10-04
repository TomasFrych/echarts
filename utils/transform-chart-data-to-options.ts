import { EChartsOption } from 'echarts'

export function transformChartDataToOptions(
	data: {
		total: number
		reported: number
		readyToReport: number
	} = { total: 0, reported: 0, readyToReport: 0 }
): EChartsOption {
	const { total, reported, readyToReport } = data
	return {
		legend: {
			show: !(reported === 0 && readyToReport === 0),
			top: '7%',
			left: '0',
			orient: 'vertical',
			textStyle: {
				fontFamily: 'Lato',
				color: '#252A36'
			}
			// selectedMode: false,
		},
		series: [
			{
				type: 'gauge',
				center: ['50%', '60%'],
				startAngle: 180,
				endAngle: 0,
				min: 0,
				max: total,
				splitNumber: 1,
				itemStyle: {
					color: 'red'
				},
				progress: {
					show: true,
					width: 30
				},
				pointer: {
					show: false
				},
				axisLine: {
					lineStyle: {
						width: 30,
						color: [[1, '#A4AEC1']]
					}
				},
				axisTick: {
					show: false
				},
				splitLine: {
					show: false,
					distance: -42,
					length: 42,
					lineStyle: {
						width: 1,
						color: '#263558'
					}
				},
				axisLabel: {
					distance: 8,
					color: '#263558',
					fontSize: 14,
					lineHeight: 16.8,
					fontFamily: 'Lato',
					fontWeight: 'bolder',
					rotate: 0,
					formatter: function (value) {
						return ['', '', value + ''].join('\n')
					}
				},
				anchor: {
					show: false
				},
				title: {
					show: false
				},
				detail: {
					show: false,
					valueAnimation: true,
					fontFamily: 'Lato',
					lineHeight: 48,
					borderRadius: 8,
					offsetCenter: [0, '-22%'],
					fontSize: 40,
					fontWeight: 900,
					formatter: ['{value}', '{minSaved|Min Saved}'].join('\n'),
					color: reported > 0 ? '#263558' : '#A4AEC1',
					rich: {
						minSaved: {
							color: reported > 0 ? '#263558' : '#A4AEC1',
							fontSize: 24,
							lineHeight: 28.8,
							fontWeight: 900,
							fontFamily: 'Lato'
						}
					}
				},
				data: [
					{
						value: reported * 2,
						itemStyle: {
							color: 'transparent'
						}
					}
				]
			},
			{
				type: 'gauge',
				name: 'Reported to EMR',
				center: ['50%', '60%'],
				startAngle: 180,
				endAngle: 0,
				min: 0,
				max: total,
				zlevel: 2,
				itemStyle: {
					color: '#00B607'
				},
				progress: {
					show: true,
					width: 30
				},
				pointer: {
					show: false
				},
				axisLine: {
					show: false
				},
				axisTick: {
					show: false,
					length: 42,
					distance: -22
				},
				splitLine: {
					show: false
				},
				axisLabel: {
					show: true,
					distance: -52,
					color: '#263558',
					fontSize: 14,
					lineHeight: 16.8,
					fontFamily: 'Lato',
					fontWeight: 'bolder',
					formatter: function (value) {
						return reported === readyToReport
							? ''
							: value === reported && value !== 0
							? reported + ''
							: ''
					}
				},
				detail: {
					show: false
				},
				data: [
					{
						value: reported
					}
				]
			},
			{
				type: 'gauge',
				name: 'Ready to report to EMR',
				center: ['50%', '60%'],
				startAngle: 180,
				endAngle: 0,
				min: 0,
				max: total,
				itemStyle: {
					color: '#00B6AD'
				},
				progress: {
					show: true,
					width: 30
				},
				pointer: {
					show: false
				},
				axisLine: {
					show: false
				},
				axisTick: {
					show: false
				},
				splitLine: {
					show: false
				},
				axisLabel: {
					show: true,
					distance: -52,
					color: '#263558',
					fontSize: 14,
					lineHeight: 16.8,
					fontFamily: 'Lato',
					fontWeight: 'bolder',
					formatter: function (value) {
						return reported === readyToReport
							? ''
							: value === readyToReport && value !== 0
							? readyToReport + ''
							: ''
					}
				},
				detail: {
					show: false
				},
				data: [
					{
						value: readyToReport
					}
				]
			},
			{
				type: 'gauge',
				// name: 'Ticks Reported',
				center: ['50%', '60%'],
				startAngle: 180 - (180 / total) * reported,
				endAngle: 180 - (180 / total) * reported,
				splitNumber: 1,
				zlevel: 5,
				itemStyle: {
					color: '#00B6AD'
				},
				progress: {
					show: true,
					width: 30
				},
				pointer: {
					show: false
				},
				axisLine: {
					show: false
				},
				axisTick: {
					show: reported !== 0,
					length: 40,
					distance: -20,
					lineStyle: {
						opacity: 0
					}
				},
				splitLine: {
					show: reported !== 0,
					length: 40,
					distance: -20,
					lineStyle: {
						width: 1,
						color: '#263558'
					}
				},
				axisLabel: {
					show: reported !== 0,
					distance: -52,
					formatter: function (value) {
						return value === 0 ? reported + '' : ''
					}
				}
			},
			{
				type: 'gauge',
				center: ['50%', '60%'],
				startAngle: 180 - (180 / total) * readyToReport,
				endAngle: 180 - (180 / total) * readyToReport,
				splitNumber: 1,
				zlevel: 5,
				itemStyle: {
					color: '#00B6AD'
				},
				progress: {
					show: true,
					width: 30
				},
				pointer: {
					show: false
				},
				axisLine: {
					show: false
				},
				axisTick: {
					show: readyToReport !== 0,
					length: 40,
					distance: -20,
					lineStyle: {
						opacity: 0
					}
				},
				splitLine: {
					show: readyToReport !== 0,
					length: 40,
					distance: -20,
					lineStyle: {
						width: 1,
						color: '#263558'
					}
				},
				axisLabel: {
					show: readyToReport !== 0,
					distance: -52,
					formatter: function (value) {
						return value === 0 ? readyToReport + '' : ''
					}
				}
			}
		]
	}
}
