<template>
  <div id="app">

    <!-- 做一个导航栏 -->
    <div id="nav">
      <!-- 类似于a标签 -->
      <router-link to='/'>首页</router-link> |
      <router-link to='/dazha'>dazha</router-link>|
      <!-- 两个隶属于dazha的子路由 -->
      <router-link to='/dazha/test1'>test1</router-link>|
      <!-- 用：绑定to,通过参数传递给router-link标签,填对应index.js中的页面name,这里的params在对应模板里面接受 -->
      <router-link :to="{name:'test2',params:{username:'xiaozhazha',id:1}}">test2</router-link>
    </div>
      <!-- 使用name传递参数,获取当前页面的name字段 -->
      <p>{{ $route.name }}</p>
    <!-- 注意其他vue页面只会改变router-view的内容 -->
    <router-view></router-view>
    <!-- 多个router-view,只能有一个默认的不需要name属性 -->
    <router-view name="left" style="float:left;width:50%;height:300px;background-color:#ccc"></router-view>
    <router-view name="right" style="float:left;width:50%;height:300px;background-color:#c6c"></router-view>
  </div>
</template>

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
</style>
