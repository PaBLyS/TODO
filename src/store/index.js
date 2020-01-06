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
    addList(state, elem) {
      state.list.push(elem)
    },
    removeList(state, id) {
      state.list.splice(id, 1);
    },
    editList(state, id, obj) {
      state.list[id] = obj;
    }
  },
  actions: {
  },
  modules: {
  }
})
