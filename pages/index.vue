<template>
  <section class="container">
    <div>
      <router-link :to="{name: 'index'}">
        <h1 class="title">
          T-WEB
        </h1>
      </router-link>
      <div id="AppLogin">
        <h2 class="subtitle">
          Login
        </h2>
        <ul>
          <li>
            <b>UserName </b>
            <input
              v-model="loginUserName"
              type="text"
              placeholder="login" >
          </li>
          <li>
            <b>Password </b>
            <input
              v-model="loginPassword"
              type="password"
              placeholder="password" >
          </li>
          <li>
            <button
              @click="handleLogin">Login
            </button>
        </li></ul>
      </div>
      <div>
        <h2 class="subtitle">
          SignIn
        </h2>
        <ul>
          <li>
            <b>UserName </b>
            <input
              v-model="signinUserName"
              type="text"
              placeholder="login" >
          </li>
          <li>
            <b>Password </b>
            <input
              v-model="signinPassword"
              type="password"
              placeholder="password" >
          </li>
          <li>
            <b>Grade </b>
            <select v-model="signinGrade">
              <option value="agent">Agent</option>
              <option value="detective">Détective</option>
            </select>
          </li>
          <li>
            <button
              @click="handleSignin">SignIn
            </button>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      signinUserName: '',
      signinPassword: '',
      loginUserName: '',
      loginPassword: '',
      signinGrade: ''
    }
  },
  methods: {
    setToken(token) {
      global.sessionStorage.setItem('user-token', token)
    },
    handleLogin() {
      if (!this.loginUserName || !this.loginPassword) {
        alert('Some field(s) are empty')
      } else {
        this.setToken(this.loginUserName + this.loginPassword)
        this.$router.push('home')
      }
    },
    handleSignin() {
      if (!this.signinPassword || !this.signinUserName || !this.signinGrade) {
        alert('Some field(s) are empty')
      } else {
        this.setToken(this.signinUserName + this.signinPassword)
        this.$router.push('home')
      }
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
</style>
