<template>
  <div class="todo-show">
    <div class="todo-checkbox">
      <el-checkbox-group v-model="todoShowList" size="mini" fill="#323232" @change="todoshowChange">
        <el-checkbox-button label="已完成" :checked="todoShowList.indexOf('已完成') >= 0">已完成</el-checkbox-button>
        <el-checkbox-button label="未完成" :checked="todoShowList.indexOf('未完成') >= 0">未完成</el-checkbox-button>
      </el-checkbox-group>
    </div>

    <div class="todo-checkbox">
      <el-checkbox-group
        v-model="todoShowList"
        size="mini"
        class="todo-checkbox hidden-xs-only"
        fill="#323232"
        @change="todoshowChange"
      >
        <el-checkbox-button label="重要-紧急" :checked="todoShowList.indexOf('重要-紧急') >= 0">重要-紧急</el-checkbox-button>
        <el-checkbox-button label="重要-不紧急" :checked="todoShowList.indexOf('重要-不紧急') >= 0">重要-不紧急</el-checkbox-button>
        <el-checkbox-button label="不重要-紧急" :checked="todoShowList.indexOf('不重要-紧急') >= 0">不重要-紧急</el-checkbox-button>
        <el-checkbox-button label="不重要-不紧急" :checked="todoShowList.indexOf('不重要-不紧急') >= 0">不重要-不紧急</el-checkbox-button>
      </el-checkbox-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "todoShow",
  data() {
    return {
      todoShowList: []
    };
  },
  methods: {
    todoshowChange(newValue) {
      this.$store.commit("setTodoShow", newValue);
    }
  },
  mounted(){
    this.todoShowList = JSON.parse(localStorage.getItem('todoShow'))
  }
};
</script>
