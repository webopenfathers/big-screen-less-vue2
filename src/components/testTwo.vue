<template>
  <div>
    777---模拟演练大屏页面
    <div @click="next">跳转演练大厅页面</div>
  </div>
</template>
<script>
export default {
  mounted() {
    console.log('777---模拟演练大屏页面')
  },
  methods: {
    next() {
      const routerLink = this.$router.resolve({
        path: '/666',
      })
      const examplePage = window.open(routerLink.href, '666')
      if (examplePage) {
        examplePage.focus() // 如果页面已经存在，‌则聚焦到该页面
      } else {
        // 如果页面不存在，‌则打开新页面
        window.open(routerLink.href, '666')
      }
    },
  },
}
</script>
