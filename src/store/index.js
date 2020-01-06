import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [
      {
        label: 'Лист 1'
      },
      {
        label: 'Лист 2'
      },
      {
        label: 'Лист 3'
      },
      {
        label: 'Лист 4'
      },
      {
        label: 'Лист 21'
      },
      {
        label: 'Лист 32'
      },
      {
        label: 'Лист 10'
      },
    ]
  },
  getters: {
    allList(state) {
      return state.list;
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
