<template>
  <section class="container">
    <div>
      <h1 class="title">
        T-WEB
      </h1>
      <h2 class="subtitle">
        Home
      </h2>
      <div class="links">
        <ul>
          <li v-if="perm < 4 && perm > 0">
            <router-link :to="{name: 'add'}">
              <button
                id="addButton"
                class="button is-large">Add
              </button>
            </router-link>
          </li>
          <li v-if="perm > 0">
            <router-link :to="{name: 'search'}">
              <button
                id="searchButton"
                class="button is-large">Search
              </button>
            </router-link>
          </li>
          <li v-if="perm <= 2 && perm > 0">
            <router-link :to="{name: 'admin'}">
              <button
                id="adminButton"
                class="button is-large">Admin
              </button>
            </router-link>
          </li>
          <li>
            <router-link :to="{name: 'index'}">
              <button
                id="disconnectButton"
                class="button is-large"
                @click="logout">Disconnect
              </button>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      perm: 0
    }
  },
  ...mapActions(['getToken', 'removeToken']),
  created: function() {
    this.perm = 2
    if (this.perm <= 0) this.$router.push('index')
  },
  methods: {
    logout() {
      this.removeToken()
      this.$router.push('home')
    },
    isConnected() {
      this.getToken()
    }
  }
}
</script>
<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  text-align: center;
  vertical-align: top;
}

.links {
  padding-top: 15px;
}
</style>
