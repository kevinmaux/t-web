<template>
  <section class="container">
    <div>
      <router-link :to="{name: 'home'}">
        <h1 class="title">
          T-WEB
        </h1>
      </router-link>
      <h2 class="subtitle">
        Admin
      </h2>
      <div/>
      <div>
        <ul>
          <li
            v-for="(item, index) in users"
            :key="index">
            <b class="label is-inline">
              {{ item['id'] }}
            </b>
            <b class="is-inline ">
              {{ item['name'] }}
            </b>
            <b class="is-inline">
              {{ item['group'] }}
            </b>
            <button
              id="validateButton"
              class="is-inline is-square" 
              @click="validateUser(item['id'])">OK
            </button>
            <button
              id="deniedButton"
              class="is-inline is-square"
              @click="deniedUser(item['id'])">X
            </button>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'
export default {
  data() {
    return {
      userList: {}
    }
  },
  computed: {
    ...mapState({
      token: state => state.token,
      perm: state => state.perm
    }),

    users: {
      set: function(newData) {
        this.userList = newData
      },
      get: function() {
        return this.userList
      }
    }
  },
  created: function() {
    if (!this.$store.state.perm || this.$store.state.perm <= 0)
      this.$router.push('identification')
    if (!this.$store.state.perm > 2) this.$router.push('home')
    this.getList()
  },
  methods: {
    async getList() {
      var token = this.$store.state.token
      const data = await axios({
        method: 'post',
        url: 'http://aetherion.fr:10005/user',
        data: {
          token: token
        }
      })
      if (data.data.state === 'error') {
        if (this.$store.state.perm <= 0) this.$router.push('identification')
        alert(data.data.data)
      } else {
        var temp = {}
        for (var key in data.data.data) {
          if (data.data.data[key]['active'] == 0) {
            temp[key] = {}
            temp[key]['id'] = data.data.data[key]['id']
            temp[key]['name'] = data.data.data[key]['name']
            temp[key]['group'] = data.data.data[key]['name_group']
          }
        }
        this.userList = temp
      }
    },
    async validateUser(id) {
      id = parseInt(id)
      var token = this.$store.state.token
      const data = await axios({
        method: 'post',
        url: 'http://aetherion.fr:10005/validate',
        data: {
          token: token,
          id_account: id
        }
      })
      if (data.data.state === 'error') {
        alert(data.data.data)
      } else {
        getList()
        alert('Account activated')
      }
    },
    deniedUser(id) {
      alert('Not implemented but denied ' + id)
    }
  }
}
</script>

<style>
</style>
