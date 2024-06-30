<template>
  <div id="sync-link"></div>
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
      let chartDom = document.getElementById('sync-link')
      let myChart = echarts.init(chartDom)
      let obj = {
        xData: [
          '洪雅县',
          '汶川县',
          '茂县松777777777777',
          '潘县',
          '九寨沟县',
          '崇州市',
          '大邑县',
          '彭州市',
          '都江堰市',
          '天全县',
          '宝兴县',
          '芦山县',
          '荥经县',
          '平武县',
          '安州区',
        ],
        yData: [
          1643, 1409, 1087, 532, 799, 74, 325, 492, 816, 325, 492, 816, 325, 82,
          81,
        ],
      }
      let option = {
        title: {
          text: '同步链路监控',
          top: 0,
          left: 0,
          textStyle: {
            fontSize: this.$fitChartSize(20),
            color: '#fff', // 这里设置标题的字体颜色为红色
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
        legend: {
          y: 'bottom', //延Y轴居中
          x: 'center', //居右显示
          data: ['同步链路领域排名'],
          icon: 'rect',
          itemWidth: this.$fitChartSize(20), // 设置宽度
          itemHeight: this.$fitChartSize(10), // 设置高度
          textStyle: {
            color: 'rgba(250,250,250,0.6)',
            fontSize: this.$fitChartSize(14),
          },
        },
        grid: {
          top: this.$fitChartSize(50),
          bottom: this.$fitChartSize(70),
          left: this.$fitChartSize(90),
        },
        xAxis: [
          {
            splitLine: {
              show: false,
            },
            axisLabel: {
              margin: this.$fitChartSize(10),
              textStyle: {
                fontSize: this.$fitChartSize(14),
              },
            },
            type: 'value',
            show: true,
          },
        ],
        yAxis: [
          {
            splitLine: {
              show: false,
            },
            axisLine: {
              //y轴
              show: false,
            },
            type: 'category',
            axisTick: {
              show: false,
            },
            inverse: true,
            data: obj.xData,
            axisLabel: {
              color: 'rgba(170, 233, 255, 1)',
              fontSize: this.$fitChartSize(14),
              fontFamily: 'SourceHanSansCN-Regular',
              margin: this.$fitChartSize(10),
              interval: 0,
              formatter: function (value) {
                if (value.length > 5) {
                  return value.substring(0, 5) + '...'
                } else {
                  return value
                }
              },
            },
          },
        ],
        series: [
          {
            name: '同步链路领域排名',
            type: 'bar',
            barWidth: this.$fitChartSize(14), // 柱子宽度
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(13, 59, 94, 0.7)',
            },
            label: {
              show: false,
            }, // 柱子上方的数值
            itemStyle: {
              color: new echarts.graphic.LinearGradient(
                1,
                0,
                0,
                0,
                [
                  {
                    offset: 0,
                    color: 'rgba(73, 210, 202, 1)',
                  },
                  {
                    offset: 1,
                    color: 'rgba(19, 156, 210, 1)',
                  },
                ],
                false
              ), // 渐变
            },
            data: obj.yData,
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
<style scoped lang="less">
@import url('../styles/utils.less');
#sync-link {
  width: 100%;
  height: 100%;
}
</style>
