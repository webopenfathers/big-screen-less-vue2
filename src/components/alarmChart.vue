<template>
  <div id="alarm-scatter" style="width: 100%; height: 100%"></div>
</template>
<script>
import scatterData from './scatter'
import * as echarts from 'echarts'
export default {
  data() {
    return {}
  },
  mounted() {
    this.renderChart()
    // window.addEventListener('resize', () => {
    //   this.renderChart()
    // })
  },
  methods: {
    getSeries(scatterData) {
      let seriesData = []
      const colorList = ['#59B2FF', '#02B84B', '#FF7031', '#FC2457']
      scatterData.forEach((item, index) => {
        seriesData.push({
          name: item.name,
          symbolSize: this.$fitChartSize(10),
          label: {
            show: false,
          },
          data: item.data,
          itemStyle: {
            color: colorList[index],
          },
          type: 'scatter',
        })
      })
      return seriesData
    },
    renderChart() {
      let chartDom = document.getElementById('alarm-scatter')
      let myChart = echarts.init(chartDom)
      let option = {
        legend: {
          y: 'bottom', //延Y轴居中
          x: 'center', //居右显示
          data: scatterData.map((item) => item.name),
          itemWidth: this.$fitChartSize(10), // 设置宽度
          itemHeight: this.$fitChartSize(10), // 设置高度
          itemGap: this.$fitChartSize(20), // 设置间距
          textStyle: {
            //图例文字的样式
            color: '#fff',
            fontSize: this.$fitChartSize(14),
          },
        },
        tooltip: {
          showContent: true,
          trigger: 'axis',
          backgroundColor: 'rgba(8,36,68,.7)',
          color: '#fff',
          textStyle: {
            color: '#fff',
          },
        },
        grid: {
          top: this.$fitChartSize(40),
          bottom: this.$fitChartSize(70),
        },
        xAxis: {
          axisTick: false,
          axisLine: {
            show: false,
          },
          axisLabel: {
            interval: 0,
            margin: this.$fitChartSize(10),
            textStyle: {
              fontSize: this.$fitChartSize(14),
            },
          },
          data: ['一月', '二月', '三月', '四月', '五月', '六月'],
        },
        yAxis: {
          scale: false,
          axisTick: {
            show: false,
            alignWithLabel: true,
          },
          axisLine: {
            show: false,
          },
          axisLabel: {
            interval: 0,
            margin: this.$fitChartSize(10),
            textStyle: {
              fontSize: this.$fitChartSize(14),
            },
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: 'dashed',
              width: this.$fitChartSize(1),
              // color: 'rgba(59, 102, 132, 0.5)',
            },
            alignWithLabel: true,
          },
        },
        series: this.getSeries(scatterData),
      }
      myChart.setOption(option)
      window.addEventListener('resize', () => {
        myChart.resize()
      })
    },
  },
}
</script>
