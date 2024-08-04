<template>
  <div id="app">
    <div class="screen-content">
      <!-- 头部 -->
      <div class="header">
        <div class="header-left">
          <!-- <div>资源伙伴</div> -->
          <img src="./assets/ksh32.png" alt="" />
          <img src="./assets/ksh32.png" alt="" />
        </div>
        <div class="header-center text-gradient">DR作战大厅</div>
        <div class="header-right">
          <img src="./assets/ksh32.png" alt="" />
          <!-- 年月日 -->
          <span> {{ YearMonthDay }} </span>
          <!-- 时分秒 -->
          <span>{{ HourMiniterSeconds }}</span
          >&nbsp;&nbsp;
          <!-- 星期几 -->
          <span>{{ weekDay }}</span>
        </div>
      </div>
      <!-- 底部 -->
      <div class="footer">
        <!-- 容灾监控 -->
        <div class="left" style="color: red">
          <div class="left-top">容灾监控</div>
          <div class="left-chart">
            <!-- 同步链路 -->
            <div class="chart">
              <sync-link></sync-link>
            </div>
            <!-- 数据库监控 -->
            <div class="chart">
              <db-monitor></db-monitor>
            </div>
          </div>
        </div>
        <!-- 容灾站点地图 -->
        <div class="center" style="color: red">
          <div class="center-top">容灾站点地图</div>
          <div class="center-chart">
            <div class="map-chart">
              <dr-site-map></dr-site-map>
            </div>
            <div
              class="center-drill-module text-gradient"
              @click="isShow = true"
            >
              >>> 应用演练模块
            </div>
          </div>
        </div>
        <!-- 容灾告警 -->
        <div class="right" style="color: red">
          <div class="right-top">容灾告警</div>
          <div class="right-chart">
            <!-- 同步链路 -->
            <div class="chart">
              <alarm-overview></alarm-overview>
            </div>
            <!-- 数据库监控 -->
            <div class="chart">
              <alarm-chart></alarm-chart>
            </div>
          </div>
        </div>
      </div>
      <alertAlarm :show="isShow" @close="isShow = false"></alertAlarm>
    </div>
  </div>
</template>

<script>
import dbMonitor from './components/dbMonitor.vue'
import syncLink from './components/syncLink.vue'
import alarmOverview from './components/alarmOverview.vue'
import alarmChart from './components/alarmChart.vue'
import drSiteMap from './components/drSiteMap.vue'
import alertAlarm from './components/alertAlarm.vue'
export default {
  name: 'App',
  components: {
    dbMonitor,
    syncLink,
    alarmOverview,
    alarmChart,
    drSiteMap,
    alertAlarm,
  },
  data() {
    return {
      YearMonthDay: '', //年月日数据
      HourMiniterSeconds: '', //时分秒数据
      isShow: false,
    }
  },
  computed: {
    weekDay() {
      let days = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
      let today = new Date()
      let weekday = today.getDay()
      return days[weekday]
    },
  },
  mounted() {
    setInterval(() => {
      //年月日
      this.getYearMonthDay()
      //时分秒
      this.currentDate()
    }, 1000)
  },
  methods: {
    changeShow() {
      this.isShow = true
    },
    //获取年月日的方法
    getYearMonthDay() {
      const today = new Date()
      // 获取当前时间(today)的年份
      const year = today.getFullYear()
      // 获取月份
      const month = String(today.getMonth() + 1).padStart(2, '0')
      // 获取当前日
      const day = String(today.getDate()).padStart(2, '0')
      // 得到年月日
      this.YearMonthDay = `${year}-${month}-${day}` //打印当前日期
    },
    //获取时分秒的方法
    currentDate() {
      let d = new Date()
      let hour = d.getHours()
      hour = hour > 9 ? hour : '0' + hour.toString()
      let minute = d.getMinutes()
      minute = minute > 9 ? minute : '0' + minute.toString()
      let second = d.getSeconds()
      second = second > 9 ? second : '0' + second.toString()
      this.HourMiniterSeconds = `${hour}:${minute}:${second}`
    },
  },
}
</script>

<style lang="less">
@import url('./styles/utils.less');
* {
  padding: 0;
  margin: 0;
}
html,
body {
  padding: 0;
  margin: 0;
}

.screen-content {
  width: 100vw;
  height: 100vh;
  background: url('./assets/bg.png') no-repeat center;
  background-size: cover;
}

.header {
  color: red;
  display: flex;
  .px2vh(height, 100);
  .px2vw(border-width,1);
  border-style: solid;
  border-color: red;
  .header-left {
    flex: 1;
    margin: auto;
    text-align: right;
    .px2font(16);
    .px2vw(border-width,1);
    border-style: solid;
    border-color: red;
  }
  .header-center {
    flex: 1;
    .px2font(30);
    font-weight: 900;
    display: flex;
    justify-content: center;
    align-items: center;
    .px2vw(border-width,1);
    border-style: solid;
    border-color: red;
  }
  .header-right {
    flex: 1;
    margin: auto;
    .px2font(16);
    .px2vw(border-width,1);
    border-style: solid;
    border-color: red;
  }
}

.footer {
  display: flex;
  .px2vh(height,970);
  .px2vw(border-width,1);
  border-style: solid;
  border-color: red;
  .left {
    .px2vw(width,478);
    display: flex;
    flex-direction: column;
    .px2font(16);
    .px2vw(border-width,1);
    border-style: solid;
    border-color: pink;
    .left-top {
      .px2font(20);
      color: #fff;
      .px2vw(border-width,1);
      border-style: solid;
      border-color: red;
      .px2vh(height,60);
      background: url('./assets/ksh33.png') no-repeat center center;
      background-size: contain;
    }
    .left-chart {
      flex: 1;
      display: flex;
      flex-direction: column;
      .chart {
        flex: 1;
        .px2vw(border-width, 1);
        border-style: solid;
        border-color: red;
      }
    }
  }

  .center {
    flex: 2;
    display: flex;
    .px2vw(margin-left, 20);
    .px2vw(margin-right, 20);
    flex-direction: column;
    .px2vw(border-width, 1);
    .px2font(16);
    border-style: solid;
    border-color: pink;
    .center-top {
      .px2font(20);
      color: #fff;
      .px2vw(border-width,1);
      border-style: solid;
      border-color: red;
      .px2vh(height,60);
      .px2vw(width,478);
      background: url('./assets/ksh33.png') no-repeat center center;
      background-size: contain;
    }
    .center-chart {
      flex: 1;
      display: flex;
      flex-direction: column;
      .px2vw(border-width, 1);
      border-style: solid;
      border-color: red;
      .map-chart {
        flex: 1;
        .px2vw(border-width, 1);
        border-style: solid;
        border-color: red;
      }
      .center-drill-module {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        font-weight: 900;
        .px2font(25);
        .px2vh(height, 80);
        .px2vw(border-width, 1);
        border-style: solid;
        border-color: red;
      }
    }
  }

  .right {
    .px2vw(width,478);
    display: flex;
    flex-direction: column;
    .px2vw(border-width, 1);
    .px2font(16);
    border-style: solid;
    border-color: pink;
    .right-top {
      .px2font(20);
      color: #fff;
      .px2vw(border-width,1);
      border-style: solid;
      border-color: red;
      .px2vh(height,60);
      background: url('./assets/ksh33.png') no-repeat center center;
      background-size: contain;
    }
    .right-chart {
      flex: 1;
      display: flex;
      flex-direction: column;
      flex-direction: 1;
      .chart {
        flex: 1;
        .px2vw(border-width, 1);
        border-style: solid;
        border-color: red;
      }
    }
  }
}

.text-gradient {
  background-image: linear-gradient(to right, #f6e58d, #4834d4, #eb4d4b);
  background-size: 300% 100%;
  background-clip: text;
  color: transparent;
  animation-name: identifier;
  animation-iteration-count: infinite;
  animation-duration: 2s;
  animation-direction: alternate;
}

@keyframes identifier {
  from {
    background-position: left top;
  }

  to {
    background-position: right bottom;
  }
}

img {
  .px2vw(width, 310);
}
</style>
