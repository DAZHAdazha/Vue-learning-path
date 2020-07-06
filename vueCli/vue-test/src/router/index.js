import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入页面
import Home from '../views/Home.vue'
// 引入新的页面
import dazha from '../components/dazha.vue'
import test1 from '../components/test1.vue'
import test2 from '../components/test2.vue'
import left from '../components/left.vue'
import right from '../components/right.vue'



// 全局使用router组件
Vue.use(VueRouter)

// 数组，可配置多个，每一个为对象
  const routes = [
  {
    path: '/',
    name: 'Home',
    // 注意有多个时，component需要加s!!!
    components: {
      // 单个页面配置多个router-view
      default:Home,
      left:left,
      right:right,
    }
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
    // 有子路由的情况下这里的name没有作用，需要在children里面设置
    name:'DAZHA',
    component:dazha,
    // 在此处添加子路由，用数组对象形式配置
    children:[
      {path:'/',name:'dazha/DAZHA',component:dazha},
      // 注意这里不要加'/'!!!
      {path:'test1',name:'test1',component:test1},
      {path:'test2',name:'test2',component:test2}
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
