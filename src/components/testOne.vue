<template>
  <div>
    666--模拟演练大厅页面

    <div @click="next">跳转演练大屏</div>
  </div>
</template>
<script>
export default {
  mounted() {
    console.log('666--模拟演练大厅页面')
  },

  methods: {
    next() {
      const routerLink = this.$router.resolve({
        path: '/777',
        query: { id: Math.random() },
      })
      const examplePage = window.open(routerLink.href, '777')

      if (examplePage) {
        examplePage.focus() // 如果页面已经存在，‌则聚焦到该页面
      } else {
        // 如果页面不存在，‌则打开新页面
        window.open(routerLink.href, '777')
      }
    },
  },
}
</script>
