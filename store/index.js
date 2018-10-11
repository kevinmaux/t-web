/* eslint-disable prettier/prettier */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = () => {
  token: ''
  perm: 4
}

const mutations = {
  async login(state, info) {
    const data = await axios({
      method: 'post',
      url: 'http://aetherion.fr:10005/login',
      data: { username: info[0], password: info[1] }
    })
    if (data.data.state === 'error') {
      state.perm = 0
      state.token = ''
      alert(data.data.data)
    } else {
      state.token = data.data.data
      const data2 = await axios({
        method: 'post',
        url: 'http://aetherion.fr:10005/tokenvalidation',
        data: { token: state.token }
      })
      state.perm = data2.data.data[0].id_group
      this.$router.push('home')
    }
  },
  removeToken(state) {
    state.perm = 0
    state.token = ''
  }
}

export { state, mutations }
