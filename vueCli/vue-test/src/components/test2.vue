// 注意此处的模板只改变App.vue文件中的router-view标签的内容
<template>
  <!-- 单个div父容器 -->
    <div>
        <h1>
            <!-- 在此处接受参数 -->
            {{ msg }} - {{ $route.params.username }} - {{ $route.params.id }}

            <router-view></router-view>

        </h1>
    </div>

</template>

<script>
export default {
  name: 'test2',
  data(){
      return{
          msg:'test2 is here'
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
