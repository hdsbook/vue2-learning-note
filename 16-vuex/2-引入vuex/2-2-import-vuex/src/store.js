import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
    todos: [],
  },
  mutations: {
    addCount(state) {
      state.count++;
      // 註：mutation中只能做同步的操作
    }
  },
  // getters 就像 vuex 中的 computed
  getters: {
    todosNotDone(state) {
      return state.todos.filter(todo => !todo.done);
    },
    todosNotDoneLength(state, getters) {
      return getters.todosNotDone.length;
    },

    // 可以回傳 一個函式
    todoWithID(state) {
      return (id) => {
        return state.todos.filter(todo => todo.id === id);
      };
    },
    // 上式可簡寫如下
    todoWithIDsimplified: state =>
      id => state.todos.filter(todo => todo.id === id),

  }
});

export default store;
