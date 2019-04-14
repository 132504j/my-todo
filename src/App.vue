<template>
  <div id="app">
    <todo-view></todo-view>
  </div>
</template>

<script>
import todoView from '@/views/view.vue'
export default {
  name: 'app',
  components: {
    todoView
  },
  mounted(){
    // 如果是第一次使用，将初始化todo
    if(!localStorage.getItem('todoList')){
      localStorage.setItem('todoList', JSON.stringify([]))
    }
    // 将数据初始化到vuex
    this.$store.commit('initTodoList')
  }
}
</script>

<style scopeds>
html{
    position: relative;
    height: 100%;
}
#app{
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
</style>
