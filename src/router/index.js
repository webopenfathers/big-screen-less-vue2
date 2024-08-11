// 导入Vue和VueRouter包
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 创建路由的实例对象
const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/big-screen-less-vue2',
      component: () => import('../index.vue'),
    },
    {
      path: '/666',
      component: () => import('../components/testOne.vue'),
    },
    {
      path: '/777',
      component: () => import('../components/testTwo.vue'),
    },
  ],
})

// 向外共享路由的实例对象
export default router
