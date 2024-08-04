<template>
  <div class="main">
    <div class="carInfo">
      <!-- 关闭按钮 -->
      <a href="javascript:;" class="carClose" @click="$emit('close')"></a>
      <!--  -->
      <div class="danger" style="padding-top: 20px">
        <img
          src="../assets/危险_icon.png"
          class="animate-img"
          style="width: 300px"
          alt=""
        />
      </div>
      <p style="color: #fff; font-size: 23px; margin-top: 20px">
        我i先99999999999999999999
      </p>
    </div>
    <!-- 背景 -->
    <div class="filterbg"></div>
  </div>
</template>
<script>
import $ from 'jquery'
export default {
  data() {
    return {}
  },

  props: {
    show: Boolean,
    default: () => false,
  },

  watch: {
    show: {
      handler(val) {
        if (val) {
          this.$nextTick(() => {
            $('.filterbg').show()
            $('.carInfo').show()
            $('.carInfo').width('3px')
            $('.carInfo').animate({ height: '50%' }, 400, function () {
              $('.carInfo').animate({ width: '55%' }, 400)
            })
            setTimeout(function () {
              $('.infoBox').show()
              $('.carClose').css('display', 'block')
            }, 800)
          })
        } else {
          this.$nextTick(() => {
            $('.carClose').css('display', 'none')
            $('.infoBox').hide()
            $('.carInfo').animate({ width: '3px' }, 400, function () {
              $('.carInfo').animate({ height: 0 }, 400)
            })

            setTimeout(function () {
              $('.filterbg').hide()
              $('.carInfo').hide()
              $('.carInfo').width(0)
            }, 800)
          })
        }
      },
      immediate: true,
    },
  },
}
</script>
<style scoped lang="less">
.carInfo {
  width: 0;
  height: 0;
  background: #061f3e;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 999;
  border-radius: 8px;
  display: none;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}
.carInfo .carClose {
  display: block;
  width: 44px;
  height: 44px;
  background: url(../assets/s_ico3.png);
  background-size: 100% 100%;
  position: absolute;
  top: -22px;
  right: -22px;
  display: none;
  transition: 0.3s;
}

.carInfo .carClose:hover {
  transform: rotate(180deg);
}

.filterbg {
  width: 100%;
  height: 100%;
  background: rgba(30, 182, 254, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 998;
  display: none;
}

.animate-img {
  animation: identifier 1.2s linear 0.8s infinite alternate;
}

@keyframes identifier {
  0% {
    transform: scale(0.8);
    box-shadow: 0 0 8px 8px rgba(0, 0, 0, 0.7);
  }

  100% {
    transform: scale(1);
    box-shadow: 0 0 10px 10px red;
  }
}
</style>
