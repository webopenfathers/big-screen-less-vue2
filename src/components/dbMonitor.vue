<template>
  <div id="db-montaior" style="width: 100%; height: 100%"></div>
</template>
<script>
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
    renderChart() {
      let chartDom = document.getElementById('db-montaior')
      let myChart = echarts.init(chartDom)
      myChart.clear()
      let dataList = [
        {
          value: 31,
          name: '数据库一致',
        },
        {
          value: 23,
          name: '数据库不一致',
        },
      ]

      let option = {
        title: {
          text: '数据库监控',
          top: 0,
          left: 0,
          textStyle: {
            fontSize: this.$fitChartSize(20),
            color: '#fff', // 这里设置标题的字体颜色为红色
          },
        },
        legend: {
          y: 'bottom', //延Y轴居中
          x: 'center', //居右显示
          data: ['数据库一致', '数据库不一致'],
          itemWidth: this.$fitChartSize(20), // 设置宽度
          itemHeight: this.$fitChartSize(10), // 设置高度
          itemGap: this.$fitChartSize(20), // 设置间距
          textStyle: {
            //图例文字的样式
            color: '#fff',
            fontSize: this.$fitChartSize(14),
          },
        },
        series: [
          {
            type: 'pie',
            radius: ['50%', '60%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: true,
                color: '#fff',
                fontSize: this.$fitChartSize(16),
                formatter: (params) => {
                  return params.value
                },
              },
            },
            emphasis: {
              label: {
                show: true,
                fontSize: this.$fitChartSize(16),
                fontWeight: 'bold',
              },
            },
            labelLine: {
              show: true,
              length: this.$fitChartSize(38),
            },
            data: dataList,
          },
        ],
      }
      myChart.setOption(option)
      window.addEventListener('resize', () => {
        myChart.resize()
      })
    },
  },
}
</script>
