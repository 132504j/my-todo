<template>
  <div id="app">
    <todo-view></todo-view>
    <todo-logo-animation></todo-logo-animation>
  </div>
</template>

<script>
import todoView from "@/views/view.vue";
import todoLogoAnimation from "@/components/todo-logo-animation.vue";
export default {
  name: "app",
  components: {
    todoView,
    todoLogoAnimation
  },
  mounted() {
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
  }
}
</style>
