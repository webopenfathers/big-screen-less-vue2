<template>
  <div
    class="contnet"
    style="
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100px;
    "
  >
    <div class="btn">>>>切换决策</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      autoScrollInterval: null,
      scrollTop: 0,
    }
  },
  mounted() {
    const scrollContainer = document.getElementById('scroll-container')

    // 监听鼠标移入事件
    scrollContainer.addEventListener('mouseenter', () => {
      // 清除自动滚动定时器
      this.scrollTop = scrollContainer.scrollTop
      clearInterval(this.autoScrollInterval)
    })

    // 监听鼠标移出事件
    scrollContainer.addEventListener('mouseleave', () => {
      // 恢复自动滚动
      this.startAutoScroll()
    })

    this.startAutoScroll()
  },
  methods: {
    startAutoScroll() {
      const scrollContainer = document.getElementById('scroll-container')
      // 清除之前的滚动定时器
      clearInterval(this.autoScrollInterval)

      // 设定滚动速度（像素/毫秒）
      const scrollSpeed = 2

      // 获取内容总高度和容器可见高度
      const scrollContent = scrollContainer.querySelector('.scroll-content')
      const scrollHeight = scrollContent.scrollHeight
      const containerHeight = scrollContainer.offsetHeight
      // console.log(scrollHeight, containerHeight);

      // 初始化滚动位置

      // 滚动函数
      this.autoScrollInterval = setInterval(() => {
        // 如果到达底部，则回到顶部
        if (this.scrollTop >= scrollHeight - containerHeight) {
          this.scrollTop = 0
        } else {
          this.scrollTop += scrollSpeed
        }

        // 设置滚动位置
        scrollContainer.scrollTop = this.scrollTop
      }, 100) // 设置滚动间隔时间（毫秒）
    },
  },
}
</script>
<style scoped>
.scroll-container {
  overflow: auto;
  height: 200px;
  /* 根据需要设置容器高度 */
  position: relative;
  border: 1px solid #ccc;
}

.scroll-container::-webkit-scrollbar {
  width: 0;
}

.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #43cccb;
  height: 50px;
  width: 200px;
  background: linear-gradient(to right, #f8fbf1, #23445f);
}
</style>
