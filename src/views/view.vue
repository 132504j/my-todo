<template>
<!-- 项目的容器框架 -->
    <el-container direction='horizontal' class="todo-view">
        <el-aside class="todo-view-aside" width="40px">
            <todo-nav></todo-nav>
        </el-aside>
        <el-main class="todo-view-main">
            <todo-add></todo-add>
            <todo-list></todo-list>
        </el-main>
    </el-container>
</template>

<script>
import todoNav from '@/components/todo-nav.vue'
import todoAdd from '@/components/todo-add.vue'
import todoList from '@/components/todo-list.vue'
export default {
    name: 'todoView',
    components: {
        todoNav,
        todoAdd,
        todoList
    }
}
</script>
