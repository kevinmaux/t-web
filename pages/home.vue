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
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState({
      token: state => state.token,
      perm: state => state.perm
    })
  },
  created: function() {
    console.info(this.$store.state.token)
    console.info(this.$store.state.perm)
    if (this.$store.state.perm <= 0) this.$router.push('index')
  },
  methods: {
    ...mapMutations(['removeToken']),
    logout() {
      this.removeToken()
      this.$router.push('home')
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
