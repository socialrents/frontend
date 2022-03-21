<template>
  <div>
    <div class="login-container">
      <div class="login-card">
        <div class="card-title">Faça seu login</div>
        <div class="form-container">
          <div class="input-container">
            <input class="username" type="text" placeholder="Nome de usuário" v-model="userLogged.username"/>
            <br>
            <input class="password" type="password" placeholder="Senha" v-model="userLogged.password"/>
          </div>
          <div class="btn-container">
            <MainButton class="login-btn" msg="Entrar" v-on:click="login"/>
            <RouterLink to="/"><MainButton class="signup-btn" msg="Cadatre-se"/> </RouterLink>
          </div>
        </div>
      </div>
      <img class="img-home" src="../../assets/login.jpeg">
    </div>
  </div>
</template>
<script>

import MainButton  from '../buttons/MainButton.vue'

export default {
  name: "LoginPage",
  components: { MainButton },
  data() {
    return {
      userLogged: {
        username: "",
        password: ""
      }
    }
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
}
.form-container {
  padding: 30px;
}
.login-btn {
	background: #4661ED;
}
.login-btn:hover {
  background: #2d46c2;
}
.signup-btn {
  background: #f3f3f3;
  color: #4661ED;
}
.signup-btn:hover {
  background: #dfdfdf;
}

</style>