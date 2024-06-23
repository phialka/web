import { createStore } from 'vuex'
// import mockProfileCreate from '../server-mock/profile'
import { mockAuth, mockAuthRefresh } from '@/server-mock/auth'


export default createStore({
  state () {
    return {
      auth: {}
    }
  },
  getters: {
    
  },
  mutations: {
    auth(state, payload) {
      state.auth = payload
    }
  },
  actions: {
    auth({ commit }, requestBody) {
      commit('auth', mockAuth(requestBody))
    },
    authRefresh({ commit }, requestBody) {
      commit('auth', mockAuthRefresh(requestBody))
    }
  }
})