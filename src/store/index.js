import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoged: false
  },
  getters: {
  },
  mutations: {
    login: (state) => {
      state.isLoged = true;
    }
  },
  actions: {
  },
  modules: {
  }
})
