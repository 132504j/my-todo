import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoList: []
  },
  mutations: {
    /**
     * 初始化todoList，只能调用一次
     * @param {Object} state vuex.state
     */
    initTodoList(state){
      state.todoList = JSON.parse(localStorage.getItem('todoList'))
    },
    /**
     * 添加一个事务
     * @param {Object} state vuex.state
     * @param {Object} value 需要加入的事务对象
     */
    addTodoList(state, value){
      state.todoList.push(value)
    },
    /**
     * 修改一个事务的完成状态
     * @param {Object} state vuex.state
     * @param {Objec} value {target: Number 目标事务的索引, value: Boolean 目标新值}
     */
    setFinish(state, value){
      state.todoList[value.target].finish = value.isFinish
    },
    /**
     * 
     * @param {Object} state vuex.state
     * @param {Number} target 要删除的目标事务
     */
    deleteTodo(state, target){
      state.todoList.splice(target, 1)
    }
  },
  getters: {
    /**
     * 获取todoList
     * @param {Object} state vuex.state
     */
    getTodoList(state){
      return state.todoList
    }
  },
  actions: {

  }
})
