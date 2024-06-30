<template>
  <div id="dr-site" style="width: 100%; height: 100%"></div>
</template>
<script>
import * as echarts from 'echarts'
import china from '../utils/china.json'
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
      echarts.registerMap('china', china)
      let chartDom = document.getElementById('dr-site')
      let myChart = echarts.init(chartDom)
      let option = {
        series: [
          {
            type: 'map',
            roam: true,
            label: {
              normal: {
                show: true,
                textStyle: {
                  color: '#1DE9B6',
                  fontSize: this.$fitChartSize(12),
                },
              },
            },

            itemStyle: {
              normal: {
                borderColor: 'rgb(147, 235, 248)',
                borderWidth: this.$fitChartSize(1),
                areaColor: {
                  type: 'radial',
                  x: 0.5,
                  y: 0.5,
                  r: 0.8,
                  colorStops: [
                    {
                      offset: 0,
                      color: '#09132c', // 0% 处的颜色
                    },
                    {
                      offset: this.$fitChartSize(1),
                      color: '#274d68', // 100% 处的颜色
                    },
                  ],
                  globalCoord: true, // 缺省为 false
                },
              },
            },
            zoom: 1.1,
            map: 'china', //使用
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
