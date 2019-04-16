<template>
  <!-- 项目的容器框架 -->
  <div style="height: 100%;">
    <!-- 移动端 -->
    <el-container direction="vertical" class="tudo-view-mobile hidden-sm-and-up">
      <el-header class="tudo-view-header-mobile" style="padding: 0" height="100px">
        <todo-nav></todo-nav>
      </el-header>
      <el-main class="todo-view-main-mobile">
        <todo-add></todo-add>
        <todo-list></todo-list>
      </el-main>
    </el-container>

    <!-- pc -->
    <el-container direction="horizontal" class="todo-view hidden-xs-only">
      <el-aside class="todo-view-aside" width="40px">
        <todo-nav></todo-nav>
      </el-aside>
      <el-main class="todo-view-main">
        <todo-add></todo-add>
        <todo-list></todo-list>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import todoNav from "@/components/todo-nav.vue";
import todoAdd from "@/components/todo-add.vue";
import todoList from "@/components/todo-list.vue";
export default {
  name: "todoView",
  components: {
    todoNav,
    todoAdd,
    todoList
  }
};
</script>
