// 注意此处的模板只改变App.vue文件中的router-view标签的内容
<template>
  <!-- 单个div父容器 -->
    <div>
        <h1>
            {{ msg }}
        </h1>
    </div>

</template>

<script>
export default {
  name: 'dazha',
  data(){
      return{
          msg:'dazha is here'
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
