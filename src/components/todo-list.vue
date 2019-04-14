<template>
  <div class="todo-list">
    <p class="todo-no" v-if="getTodoList.length == 0">你还没创建一个事务，点击输入框输入事务描述再按enter键添加</p>
    <!-- 一个todo实例 -->
    <div class="todo-item" v-for="(data, index) in getTodoList" :key="index">
      <!-- 事务说明 -->
      <p class="text">{{ data.todo }}</p>

      <div class="globa">
        <!-- 事务创建时间 -->
        <span
          class="date"
        >计划于{{ data.date.year + '年' + data.date.mouth + '月' + data.date.day + '日' + data.date.hour + '时' + data.date.minute + '分'}}</span>
        <!-- 完成按钮与删除按钮 -->
        <div class="button">
          <el-button-group>
            <!-- 修改完成状态 -->
            <el-button
              size="mini"
              :type="data.finish ? 'success' : 'default'"
              @click="setFinish(index, !data.finish)"
            >{{ data.finish ? '已完成' : '未完成' }}</el-button>
            <!-- 删除事务 -->
            <el-button size="mini" type="danger" @click="deleteTodo(index)">删除事务</el-button>
          </el-button-group>
        </div>
      </div>
    </div>
    <div class="footer">
      <span>作者：江震泳</span> ---
      <a href="https://github.com/132504j/my-todo.git" target="_brock">
        <span>github：https://github.com/132504j/my-todo.git</span>
      </a>
      <p><span><iframe src="https://ghbtns.com/github-btn.html?user=132504j&repo=my-todo&type=star&count=true&size=large" frameborder="0" scrolling="0" width="160px" height="30px"></iframe></span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "todoList",
  data() {
    return {
      todoList: []
    };
  },
  methods: {
    setFinish(target, isFinish) {
      this.$store.commit("setFinish", { target, isFinish });
      localStorage.setItem("todoList", JSON.stringify(this.getTodoList));
    },
    deleteTodo(target) {
      this.$store.commit("deleteTodo", target);
      localStorage.setItem("todoList", JSON.stringify(this.getTodoList));
    }
  },
  computed: {
    getTodoList() {
      return this.$store.getters.getTodoList;
    }
  }
};
</script>
