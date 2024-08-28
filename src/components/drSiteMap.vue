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
      let scatterData = [
        { name: '贵阳', value: [106.42, 26.35, 100] },
        { name: '乌兰察布', value: [113.1384, 40.9923, 200] },
        { name: '东莞', value: [113.8009, 22.9589, 400] },
      ]
      console.log(scatterData, 'scatterData')
      let size = this.getSize(scatterData)
      let option = {
        geo: {
          map: 'china',
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
        },
        series: [
          {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            symbolSize: function (rawValue, params) {
              console.log(params, 'params')

              params.symbolSize = size[params.dataIndex]
              // console.log(params, 'params')
              // const a = []
              // a.push(params.data.value[2])
              // console.log(a)
              // console.log(params.symbolSize)

              //此处数字可调整散点大小
              return params.symbolSize / 2
            },
            showEffectOn: 'render',
            rippleEffect: {
              brushType: 'stroke',
            },
            hoverAnimation: false,
            itemStyle: {
              normal: {
                color: '#1DE9B6',
                shadowBlur: 10,
                shadowColor: '#1DE9B6',
              },
            },
            zlevel: 1,
            //此处data渲染的就是地图的点位数据
            data: scatterData,
          },
        ],
      }
      myChart.setOption(option)
      window.addEventListener('resize', () => {
        myChart.resize()
      })
    },

    getSize(data) {
      // 1.排序
      const seriesData = data.sort((a, b) => a.value[2] - b.value[2])
      // 2.获取值
      const val = seriesData.map((item) => item.value[2])
      // 3.去重
      const uniqueArr = Array.from(new Set(val))
      // 三个值都不一样，则三个圆环大小都不一样
      if (uniqueArr.length === 3) {
        return [20, 30, 40]
      }

      console.log(val[0])
      console.log(val[2])

      // 两个值一样，则后两个圆环大小一样
      if (uniqueArr.length === 2) {
        if (val[0] === val[2]) {
          // 例如：[100, 200, 100]
          return [20, 40, 20]
        } else if (val[1] > val[0]) {
          // 例如：[100, 200, 200]
          return [20, 40, 40]
        } else {
          // 例如：[100, 100, 200]
          return [20, 20, 40]
        }
      }

      // 三个值都一样，则圆环大小一样
      if (uniqueArr.length === 1) {
        return [40, 40, 40]
      }
    },
  },
}
</script>
