<template>
  <section class="container">
    <div>
      <h1 class="title">
        T-WEB
      </h1>
      <div id="AppLogin">
        <h2 class="subtitle">
          Login
        </h2>
        <ul>
          <li>
            <b class="label">UserName</b>
            <input
              v-model="loginUserName"
              class="input"
              type="text"
              placeholder="login" >
          </li>
          <li>
            <b class="label">Password</b>
            <input
              v-model="loginPassword"
              class="input"
              type="password"
              placeholder="password" >
          </li>
          <li>
            <button
              class="button"
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
            <b class="label">UserName </b>
            <input
              v-model="signinUserName"
              class="input"
              type="text"
              minlength="5"
              maxlength="64"
              placeholder="login" >
          </li>
          <li>
            <b class="label">Password </b>
            <input
              v-model="signinPassword"
              class="input"
              type="password"
              minlength="5"
              maxlength="64"
              placeholder="password" >
          </li>
          <li>
            <b class="label">E-mail</b>
            <input
              v-model="signinMail"
              class="input"
              type="email"
              placeholder="truc@machin.fr" >
          </li>
          <li>
            <b>Grade </b>
            <select
              v-model="signinGrade"
              class="select">
              <option value="4">Agent</option>
              <option value="3">Détective</option>
              <option value="2">Master chief</option>
            </select>
          </li>
          <li>
            <button
              class="button"
              @click="handleSignin">SignIn
            </button>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      signinUserName: '',
      signinPassword: '',
      loginUserName: '',
      loginPassword: '',
      signinMail: '',
      signinGrade: ''
    }
  },
  computed: {
    ...mapState({
      perm: state => state.perm
    })
  },
  methods: {
    ...mapMutations(['login', 'signin']),
    handleLogin() {
      if (!this.loginUserName || !this.loginPassword) {
        alert('Some field(s) are empty')
      } else {
        this.login([this.loginUserName, this.loginPassword])
        if (this.$store.state.token) this.$router.push('home')
      }
    },
    handleSignin() {
      if (
        !this.signinPassword ||
        !this.signinUserName ||
        !this.signinGrade ||
        !this.signinMail
      ) {
        alert('Some field(s) are empty')
      } else {
        this.signin([
          this.signinUserName,
          this.signinPassword,
          parseInt(this.signinGrade),
          this.signinMail
        ])
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
