import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todo1_finish: [],
    todo2_finish: [],
    todo3_finish: [],
    todo4_finish: [],
    todo1_nofinish: [],
    todo2_nofinish: [],
    todo3_nofinish: [],
    todo4_nofinish: [],

  },
  mutations: {
    /**
     * 初始化todoList，只能调用一次
     * @param {Object} state vuex.state
     */
    initTodoList(state) {
      let todoList = JSON.parse(localStorage.getItem('todoList'))
      for (let count = 0; count < todoList.length; count++) {
        if (todoList[count].finish) {
          // 添加到重要-紧急-完成
          if (todoList[count].todotype === '重要-紧急') {
            state.todo1_finish.push(todoList[count])
          }
          // 添加到重要-不紧急-完成
          if (todoList[count].todotype === '重要-不紧急') {
            state.todo2_finish.push(todoList[count])
          }
          // 添加到不重要-紧急-完成
          if (todoList[count].todotype === '不重要-紧急') {
            state.todo3_finish.push(todoList[count])
          }
          // 添加到不重要-不紧急-完成
          if (todoList[count].todotype === '不重要-不紧急') {
            state.todo4_finish.push(todoList[count])
          }
        } else {
          // 添加到重要-紧急-未完成
          if (todoList[count].todotype === '重要-紧急') {
            state.todo1_nofinish.push(todoList[count])
          }
          // 添加到重要-不紧急-未完成
          if (todoList[count].todotype === '重要-不紧急') {
            state.todo2_nofinish.push(todoList[count])
          }
          // 添加到不重要-紧急-未完成
          if (todoList[count].todotype === '不重要-紧急') {
            state.todo3_nofinish.push(todoList[count])
          }
          // 添加到不重要-不紧急-未完成
          if (todoList[count].todotype === '不重要-不紧急') {
            state.todo4_nofinish.push(todoList[count])
          }
        }
      }
    },
    /**
     * 添加一个事务
     * @param {Object} state vuex.state
     * @param {Object} value 需要加入的事务对象
     */
    addTodoList(state, value) {
      if (value.finish) {
        // 添加到重要-紧急-完成
        if (value.todotype === '重要-紧急') {
          state.todo1_finish.push(value)
        }
        // 添加到重要-不紧急-完成
        if (value.todotype === '重要-不紧急') {
          state.todo2_finish.push(value)
        }
        // 添加到不重要-紧急-完成
        if (value.todotype === '不重要-紧急') {
          state.todo3_finish.push(value)
        }
        // 添加到不重要-不紧急-完成
        if (value.todotype === '不重要-不紧急') {
          state.todo4_finish.push(value)
        }
      } else {
        // 添加到重要-紧急-未完成
        if (value.todotype === '重要-紧急') {
          state.todo1_nofinish.push(value)
        }
        // 添加到重要-不紧急-未完成
        if (value.todotype === '重要-不紧急') {
          state.todo2_nofinish.push(value)
        }
        // 添加到不重要-紧急-未完成
        if (value.todotype === '不重要-紧急') {
          state.todo3_nofinish.push(value)
        }
        // 添加到不重要-不紧急-未完成
        if (value.todotype === '不重要-不紧急') {
          state.todo4_nofinish.push(value)
        }
      }
      localStorage.setItem(
        "todoList",
        JSON.stringify([
          ...state.todo1_nofinish,
          ...state.todo2_nofinish,
          ...state.todo3_nofinish,
          ...state.todo4_nofinish,
          ...state.todo1_finish,
          ...state.todo2_finish,
          ...state.todo3_finish,
          ...state.todo4_finish
        ]));
    },
    /**
     * 修改一个事务的完成状态
     * @param {Object} state vuex.state
     * @param {Objec} value {target: Number 目标事务的索引, value: Boolean 目标新值}
     */
    setFinish(state, value) {

      if (value.finish) {
        value.finish = false
        // 修改重要-紧急 finish:false
        if (value.todotype === '重要-紧急') {
          for (let count = 0; count < state.todo1_finish.length; count++) {
            if (state.todo1_finish[count].id === value.id) {
              state.todo1_nofinish.push(value)
              state.todo1_finish.splice(count, 1)
            }
          }
        }
        // 修改重要-不紧急 finish:false
        if (value.todotype === '重要-不紧急') {

          for (let count = 0; count < state.todo2_finish.length; count++) {
            if (state.todo2_finish[count].id === value.id) {
              state.todo2_nofinish.push(value)
              state.todo2_finish.splice(count, 1)
            }
          }
        }
        // 修改不重要-紧急 finish:false
        if (value.todotype === '不重要-紧急') {

          for (let count = 0; count < state.todo3_finish.length; count++) {
            if (state.todo3_finish[count].id === value.id) {
              state.todo3_nofinish.push(value)
              state.todo3_finish.splice(count, 1)
            }
          }
        }
        // 修改不重要-不紧急 finish:false
        if (value.todotype === '不重要-不紧急') {

          for (let count = 0; count < state.todo4_finish.length; count++) {
            if (state.todo4_finish[count].id === value.id) {
              state.todo4_nofinish.push(value)
              state.todo4_finish.splice(count, 1)
            }
          }
        }
      } else {
        value.finish = true
        // 修改重要-紧急 finish:true
        if (value.todotype === '重要-紧急') {

          for (let count = 0; count < state.todo1_nofinish.length; count++) {
            if (state.todo1_nofinish[count].id === value.id) {
              state.todo1_finish.push(value)
              state.todo1_nofinish.splice(count, 1)
            }
          }
        }
        // 修改重要-不紧急 finish:true
        if (value.todotype === '重要-不紧急') {

          for (let count = 0; count < state.todo2_nofinish.length; count++) {
            if (state.todo2_nofinish[count].id === value.id) {
              state.todo2_finish.push(value)
              state.todo2_nofinish.splice(count, 1)
            }
          }
        }
        // 修改不重要-紧急 finish:true
        if (value.todotype === '不重要-紧急') {
          for (let count = 0; count < state.todo3_nofinish.length; count++) {
            if (state.todo3_nofinish[count].id === value.id) {
              state.todo3_finish.push(value)
              state.todo3_nofinish.splice(count, 1)
            }
          }
        }
        // 修改不重要-不紧急 finish:true
        if (value.todotype === '不重要-不紧急') {
          for (let count = 0; count < state.todo4_nofinish.length; count++) {
            if (state.todo4_nofinish[count].id === value.id) {
              state.todo4_finish.push(value)
              state.todo4_nofinish.splice(count, 1)
            }
          }
        }
      }
      localStorage.setItem(
        "todoList",
        JSON.stringify([
          ...state.todo1_nofinish,
          ...state.todo2_nofinish,
          ...state.todo3_nofinish,
          ...state.todo4_nofinish,
          ...state.todo1_finish,
          ...state.todo2_finish,
          ...state.todo3_finish,
          ...state.todo4_finish
        ]));
    },
    /**
     * 
     * @param {Object} state vuex.state
     * @param {Number} value 要删除的目标
     */
    deleteTodo(state, value) {
      if (value.finish) {
        if (value.todotype === '重要-紧急') {
          for (let count = 0; count < state.todo1_finish.length; count++) {
            if (state.todo1_finish[count].id === value.id) {
              state.todo1_finish.splice(count, 1)
            }
          }
        }
        // 添加到重要-不紧急-完成
        if (value.todotype === '重要-不紧急') {
          for (let count = 0; count < state.todo2_finish.length; count++) {
            if (state.todo2_finish[count].id === value.id) {
              state.todo2_finish.splice(count, 1)
            }
          }
        }
        // 添加到不重要-紧急-完成
        if (value.todotype === '不重要-紧急') {
          for (let count = 0; count < state.todo3_finish.length; count++) {
            if (state.todo3_finish[count].id === value.id) {
              state.todo3_finish.splice(count, 1)
            }
          }
        }
        // 添加到不重要-不紧急-完成
        if (value.todotype === '不重要-不紧急') {
          for (let count = 0; count < state.todo4_finish.length; count++) {
            if (state.todo4_finish[count].id === value.id) {
              state.todo4_finish.splice(count, 1)
            }
          }
        }
      } else {
        if (value.todotype === '重要-紧急') {
          for (let count = 0; count < state.todo1_nofinish.length; count++) {
            if (state.todo1_nofinish[count].id === value.id) {
              state.todo1_nofinish.splice(count, 1)
            }
          }
        }
        // 添加到重要-不紧急-未完成
        if (value.todotype === '重要-不紧急') {
          for (let count = 0; count < state.todo2_nofinish.length; count++) {
            if (state.todo2_nofinish[count].id === value.id) {
              state.todo2_nofinish.splice(count, 1)
            }
          }
        }
        // 添加到不重要-紧急-未完成
        if (value.todotype === '不重要-紧急') {
          for (let count = 0; count < state.todo3_nofinish.length; count++) {
            if (state.todo3_nofinish[count].id === value.id) {
              state.todo3_nofinish.splice(count, 1)
            }
          }
        }
        // 添加到不重要-不紧急-未完成
        if (value.todotype === '不重要-不紧急') {
          for (let count = 0; count < state.todo4_nofinish.length; count++) {
            if (state.todo4_nofinish[count].id === value.id) {
              state.todo5_nofinish.splice(count, 1)
            }
          }
        }
      }
      localStorage.setItem(
        "todoList",
        JSON.stringify([
          ...state.todo1_nofinish,
          ...state.todo2_nofinish,
          ...state.todo3_nofinish,
          ...state.todo4_nofinish,
          ...state.todo1_finish,
          ...state.todo2_finish,
          ...state.todo3_finish,
          ...state.todo4_finish
        ]));
    }
  },
  getters: {
    /**
     * 获取todoList
     * @param {Object} state vuex.state
     */
    getTodoList(state) {
      return [
        ...state.todo1_nofinish,
        ...state.todo2_nofinish,
        ...state.todo3_nofinish,
        ...state.todo4_nofinish,
        ...state.todo1_finish,
        ...state.todo2_finish,
        ...state.todo3_finish,
        ...state.todo4_finish
      ]
    }
  },
  actions: {

  }
})
