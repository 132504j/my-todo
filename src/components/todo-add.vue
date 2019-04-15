<template>
  <div class="todo-add">
    <p class="desc hidden-xs-only">my-todo 比简单还简单的事务管理</p>
    <div class="group">

      <el-input
        v-model="todoText"
        class="todo-input"
        placeholder="写下你将要做的事情，按enter键 / 添加按钮确定"
        @keydown.native.enter="addTodo()"
      ></el-input>

      <el-button type="primary" class="todo-button" size="mini" @click="addTodo()">添加</el-button>

      <el-select v-model="todotype" class="todo-select" size="mini">
        <el-option v-for="(data, index) in totyprList" :key="index" :value="data"></el-option>
      </el-select>

    </div>
  </div>
</template>

<script>
export default {
  name: "todoAdd",
  data() {
    return {
      todoText: "",
      todotype: "重要-紧急",
      totyprList: ["重要-紧急", "重要-不紧急", "不重要-紧急", "不重要-不紧急"]
    };
  },
  methods: {
    addTodo() {
      // 获取添加时间
      const date = new Date();
      // 加个成一个事务对象
      const todo = {
        todo: this.todoText,
        todotype: this.todotype,
        date: {
          year: date.getFullYear(),
          mouth: date.getMonth() + 1,
          day: date.getDate(),
          hour: date.getDate(),
          minute: date.getMinutes(),
          second: date.getSeconds()
        },
        id: `${date.getFullYear()}${date.getMonth() + 1}${date.getDate()}${date.getDate()}${date.getMinutes()}${date.getSeconds()}`,
        finish: false
      };
      // 更新todoList
      let newTodoList = JSON.parse(localStorage.getItem("todoList"));
      newTodoList.push(todo);

      if (this.todoText.trim().length < 2) {
        this.$message({
          title: "提示",
          message: "至少需要两个字描述你的事务！",
          type: "error"
        });
        return;
      }
      // 提交到vuex
      this.$store.commit("addTodoList", todo);
      this.todoText = "";
    }
  }
};
</script>

