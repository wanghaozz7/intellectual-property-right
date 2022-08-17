import Vue from 'vue'
import Vuex from 'vuex'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { login } from '@/api/user'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    token: '',
    name: ''
  },
  getters: {

  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;

    },
    SET_NAME: (state, name) => {
      state.name = name;
    }
  },
  actions: {
    login({ commit }, userInfo) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        login({ username: username.trim(), password: password }).then(response => {
          const { name, response_data } = response.data;
          const token = response_data.token;
          commit('SET_TOKEN', token)
          setToken(token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  },
  modules: {

  }
})
