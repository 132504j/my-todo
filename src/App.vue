<template>
  <div id="app">
    <todo-background v-if='!showBackground'></todo-background>
    <todo-view></todo-view>
    <!-- <todo-logo-animation></todo-logo-animation> -->
  </div>
</template>

<script>
import todoView from "@/views/view.vue";
import todoLogoAnimation from "@/components/todo-logo-animation.vue";
import todoBackground from "@/components/todo-background.vue";
export default {
  name: "app",
  data(){
    return{
      showBackground: false
    }
  },
  components: {
    todoView,
    todoLogoAnimation,
    todoBackground,
  },
  mounted() {
    this.showBackground = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
    // 如果是第一次使用，将初始化todo
    if (!localStorage.getItem("todoList")) {
      localStorage.setItem("todoList", JSON.stringify([]));
    }
    if (!localStorage.getItem("todoShow")) {
      localStorage.setItem("todoShow", JSON.stringify([]));
    }
    // 将todo列表初始化到vuex
    this.$store.commit("initTodoList");
    // 将todoshow初始化到vuex
    this.$store.commit("initTodoShow");
  }
  
};
</script>

<style scopeds>
html {
  position: relative;
  height: 100%;
}
#app {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
@media screen and (max-width: 768px) {
  #app {
    overflow: auto;
    background-image: none
  }
}
</style>
