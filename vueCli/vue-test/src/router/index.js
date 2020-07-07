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
import params from '../components/params.vue'
import Error from '../components/Error.vue'



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
  },
  {
    // 用url传递参数,需要用:进行绑定,()内表示正则，如(\\d+)限制其为数字
    path:'/params/:newsId(\\d+)/:newsTitle',
    component:params,
    // index文件中配置钩子函数,要使用钩子函数，也可以在模板中使用（见test1）
    beforeEnter:(to,from,next)=>{
      console.log('To: ');
      console.log(to); // 跳转后的页面
      console.log('From: ');
      console.log(from); // 跳转前的页面
      next(); // 如果不写next则不会跳转，相当于在此处拦截
      // next(false); // next第二种用法，用false or true值
      // next({path:'/'}) // next第三种用法，可以跳转
    }
  },
  {
    // 重定向，多个路由转到相同路径
    path:'/goHome',
    redirect:'/',
    // 使用别名,两者的区别:重定向会改变路径而别名则不会
    alias:'/letsGoHomeBaby'
  },
  {
    // 路径传递参数的重定向
    path:'/goParams/:newsID(\\d+)/:newsTitle',
    redirect:'/params/:newsID(\\d+)/:newsTitle'
  },
  // 404页面
  {
    // 注意此处path
    path:'*',
    component:Error
  }
]

const router = new VueRouter({
  routes,
  mode:'history' // 默认为hash,history去掉“#”,更好看,但部署可能会有坑
})

export default router
