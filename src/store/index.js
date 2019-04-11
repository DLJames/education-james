//store.js
import Vue from 'vue'
import Vuex from 'vuex'

import * as types from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    name: 'James',
    totalNum: 2,
    delName: '',
    todos: [
      { namet: 'Vue', done: true },
      { name: 'Vuex', done: false }
    ]
  },
  getters: {
    getGreetName (state) {
      return 'Hi ' + state.name;
    },
    todoDones: state => {
      state.todos.filter(todo => todo.done);
    }
  },
  actions: {
    handleSync (context, from) {
      setTimeout(() => {
        context.commit('CHANGE_DELNAME', from);
      }, 2000);
    },
    [types.SET_TOTALNUM] (context, from) {
      context.commit(types.SET_TOTALNUM, from);
    },
    [types.CHANGE_DELNAME] (context, from) {
      context.commit(types.CHANGE_DELNAME, from);
    }
  },
  mutations: {
    [types.SET_TOTALNUM] (state, from) {
      state.totalNum = from;
    },

    [types.CHANGE_DELNAME] (state, from) {
      state.delName = from;
    }
  }
})
