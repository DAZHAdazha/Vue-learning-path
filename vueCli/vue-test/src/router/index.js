import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入页面
import Home from '../views/Home.vue'
// 引入新的页面
import dazha from '../components/dazha.vue'


// 全局使用router组件
Vue.use(VueRouter)

// 数组，可配置多个，每一个为对象
  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  // 配置路由页面
  {
    path:'/dazha',
    name:'dazha',
    component:dazha
  }
]

const router = new VueRouter({
  routes
})

export default router
