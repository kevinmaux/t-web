import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const actions = {
  removeToken() {
    sessionStorage.removeItem('user-token')
  },
  getToken() {
    return sessionStorage.getItem('user-token')
  }
}

export { actions }
