//store.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: 'James',
    totalNum: 2,
    delName: ''
  },
  mutations: {
    setTotalNum (state, from) {
      state.totalNum = from;
    },
    changeDelName (state, from) {
      state.delName = from;
    }
  },
  actions: {

  }
})
