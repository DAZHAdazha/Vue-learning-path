<template>
  <div id="app">

    <!-- 做一个导航栏 -->
    <div id="nav">

      <!-- 编程式导航 -->
      <div>
        <button @click="back">后退</button>
        <button @click="forward">前进</button>
        <button @click="goHome">返回首页</button>
      </div>

      <!-- 类似于a标签 -->
      <router-link to='/'>首页</router-link> |
      <router-link to='/dazha'>dazha</router-link>|
      <!-- 两个隶属于dazha的子路由 -->
      <router-link to='/dazha/test1'>test1</router-link>|
      <!-- 用：绑定to,通过参数传递给router-link标签,填对应index.js中的页面name,这里的params在对应模板里面接受 -->
      <router-link :to="{name:'test2',params:{username:'xiaozhazha',id:1}}">test2</router-link>|
      <!-- 通过url传递参数 -->
      <router-link to='/params/999/xiaozha is here'>params</router-link>|
      <router-link to='/goHome'>goHome</router-link>|
      <router-link to='/goParams/563/muhaa'>goParams</router-link>|
      <router-link to='/letsGoHomeBaby'>letsGoHomeBaby</router-link>

    </div>
      <!-- 使用name传递参数,获取当前页面的name字段 -->
      <p>{{ $route.name }}</p>

    <!-- 路由动画需要将router-view包裹到里面 -->
    <!-- 之后有4个CSS类目fade-enter,fade-enter-active,fade-leave,fade-leave-active -->
    <!-- mode有in-out和out-in,前者是先进入退出，后者相反 -->
    <transition name="fade" mode="out-in">
      <!-- 注意其他vue页面只会改变router-view的内容 -->
      <router-view></router-view>
    </transition>

    <transition name="fade" mode="out-in">
      <!-- 多个router-view,只能有一个默认的不需要name属性 -->
      <router-view name="left" style="float:left;width:50%;height:300px;background-color:#ccc"></router-view>
    </transition>

    <transition name="fade" mode="out-in">
      <router-view name="right" style="float:left;width:50%;height:300px;background-color:#c6c"></router-view>
    </transition>

  </div>
</template>

<script>
export default {
  name:'app',
  // 编程式导航
  methods:{
    back(){
      // -1为后退
      this.$router.go(-1);
    },
    forward(){
      // 1为前进
      this.$router.go(1);
    },
    goHome(){
      // 跳转到任意页面，注意不是go而是push
      this.$router.push('/');
    }
  }
}
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

/* 路由动画中的4个类 */
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition:opacity .5s;
}
.fade-leave{
  opacity:1;
}
.fade-leave-active{
  opacity: 0;
  transition:opacity .5s;
}

</style>
