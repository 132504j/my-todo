<template>
  <div class="todo-add">
    <p class="desc">my-todo 比简单还简单的事务管理</p>
    <el-input
      v-model="todoText"
      placeholder="写下你将要做的事情，按enter键确定"
      @keydown.native.enter="addTodo()"
    ></el-input>
  </div>
</template>

<script>
export default {
  name: "todoAdd",
  data() {
    return {
      todoText: ""
    };
  },
  methods: {
    addTodo() {
      // 获取添加时间
      const date = new Date();
      // 加个成一个事务对象
      const todo = {
        todo: this.todoText,
        date: {
          year: date.getFullYear(),
          mouth: date.getMonth() + 1,
          day: date.getDate(),
          hour: date.getDate(),
          minute: date.getMinutes(),
          second: date.getSeconds()
        },
        finish: false
      };
      // 更新todoList
      let newTodoList = JSON.parse(localStorage.getItem("todoList"))
      newTodoList.push(todo);

      if (this.todoText.trim().length < 2) {
        this.$Notification({
          title: "提示",
          message: "至少需要两个字描述你的事务！",
          type: "error"
        });
        return;
      }
      // 提交到vuex
      this.$store.commit("addTodoList", todo);
      // 加到localStorage
      localStorage.setItem("todoList", JSON.stringify(newTodoList));

      this.todoText = "";
    }
  }
};
</script>

