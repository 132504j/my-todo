<template>
  <div class="todo-list todo-list-mobile">
    <p class="todo-no" v-if="getTodoList.length == 0">你还没创建一个事务，点击输入框输入事务描述再按enter键添加</p>
    <!-- 一个todo实例 -->
    <div
      class="todo-item"
      v-for="(data, index) in getTodoList"
      :key="index"
      :style="
      data.todotype === '重要-紧急' ? {'border-color': '#F56C6C'}
      : data.todotype === '重要-不紧急' ? {'border-color': '#E6A23C'}
      : data.todotype === '不重要-紧急' ? {'border-color': '#909399'} : {'border-color': '#67C23A'}"
    >
      <!-- 事务说明 -->
      <p class="text">{{ data.todo }}</p>

      <div class="globa">
        <!-- 事务创建时间 -->
        <span
          class="date hidden-xs-only"
        >计划于{{ data.date.year + '年' + data.date.mouth + '月' + data.date.day + '日' + data.date.hour + '时' + data.date.minute + '分'}} ~{{data.todotype}}</span>
        <span
          class="date hidden-sm-and-up"
        >{{ data.date.year + '-' + data.date.mouth + '-' + data.date.day + ' ' + data.date.hour + '-' + data.date.minute }} ~{{data.todotype}}</span>
        <!-- 完成按钮与删除按钮 -->
        <div class="button">
          <el-button-group>
            <!-- 修改完成状态 -->
            <el-button
              size="mini"
              :type="data.finish ? 'success' : 'default'"
              @click="$store.commit('setFinish', data)"
              :icon="data.finish ? 'el-icon-success' : 'el-icon-error'"
            ></el-button>
            <!-- 删除事务 -->
            <el-button size="mini" type="danger" @click=" $store.commit('deleteTodo', data)" icon="el-icon-delete"></el-button>
          </el-button-group>
        </div>
      </div>
    </div>
    <div class="footer">
      <span>作者：江震泳</span> ---
      <a href="https://github.com/132504j/my-todo.git" target="_brock">
        <span>github：https://github.com/132504j/my-todo.git</span>
      </a>
      <p>
        <span>
          <iframe
            src="https://ghbtns.com/github-btn.html?user=132504j&repo=my-todo&type=star&count=true&size=large"
            frameborder="0"
            scrolling="0"
            width="160px"
            height="30px"
          ></iframe>
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "todoList",
  // watch: {
  //   getTodoList: {
  //     handler: function(todo) {
  //       console.log("a");
  //     },
  //     deep: true
  //   }
  // },
  computed: {
    getTodoList() {
      return this.$store.getters.getTodoList;
    }
  }
};
</script>
