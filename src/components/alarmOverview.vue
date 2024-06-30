<template>
  <div class="alarm-overview">
    <div class="top">
      <div class="bg">
        <p class="item-title">告警总数</p>
        <p class="item-num">78</p>
      </div>
    </div>

    <div class="center-box">
      <div class="bg mr-10">
        <p class="item-title">致命告警</p>
        <p class="item-num">78888888</p>
      </div>
      <div slot="" class="bg">
        <p class="item-title">严重告警</p>
        <p class="item-num">78</p>
      </div>
    </div>

    <div class="footer">
      <div class="bg mr-10">
        <p class="item-title">普通告警</p>
        <p class="item-num">78</p>
      </div>
      <div class="bg">
        <p class="item-title">提示告警</p>
        <p class="item-num">78</p>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import url('../styles/utils.less');

.alarm-overview {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.top {
  .px2vw(padding,10);
  flex: 1;
}

.center-box {
  .px2vw(padding,10);
  flex: 1;
  display: flex;
}

.footer {
  .px2vw(padding,10);
  flex: 1;
  display: flex;
}

.bg {
  width: 100%;
  height: 100%;
  background: url('../assets/ksh39.png') no-repeat center center;
  background-size: 100% 100%;
}

.mr-10 {
  .px2vw(margin-right,10);
}

.item-title {
  .px2vw(padding-right,25);
  .px2vw(padding-left,25);
  .px2vh(padding-top,10);
  .px2vh(padding-bottom,10);
}

.item-num {
  text-align: center;
  .px2font(20);
  .px2vh(height,50);
  .px2vh(line-height,50);
}
</style>
