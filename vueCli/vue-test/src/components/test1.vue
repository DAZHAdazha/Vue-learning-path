// 注意此处的模板只改变App.vue文件中的router-view标签的内容
<template>
  <!-- 单个div父容器 -->
    <div>
        <h1>
            {{ msg }}

            <router-view></router-view>

        </h1>
    </div>

</template>

<script>
export default {
  name: 'test1',
  data(){
      return{
          msg:'test1 is here'
      }
  },
//   在模板中配置钩子函数，也可以在index.js中配置
  beforeRouteEnter:(to,from,next) =>{
      console.log("entering");
      next();
  },
  beforeRouteLeave:(to,from,next) =>{
      console.log("leaving");
      next();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
