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
            <div class="logon-btn">
              <MainButton class="login-btn" msg="Entrar" v-on:click="login"/>
              <RouterLink to="/"><MainButton class="signup-btn" msg="Cadatre-se"/> </RouterLink>
            </div>
            <div class="google-container">
              <MainButton class="google-button" msg="Entre com o Gmail" />
            </div>
          </div>
        </div>
      </div>
      <div class="line"></div>
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
  },
  methods: {
    async login() {
        if (this.userLogged.username == "" || this.userLogged.password == "") {
          this.$notify({ type: "error", text: "Preencha todos os campos!" });
        } else {
          this.$notify({ type: "success", text: "Ok" })
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
input {
  background: #F3F3F3;
  border: 1px solid #838383;
  box-sizing: border-box;
  border-radius: 3px;
  padding: 10px;
  margin: 6px;
  width: 295px;
}
.login-card {
  margin-top: 150px;
  margin-right: 100px;
}
.card-title {
  font-weight: bold;
	font-size: 30px;
	margin-bottom: 20px;
  margin-right: 100px;
	color: #2f2f2f;
}
.form-container {
  padding: 30px;
}
.google-container {
  margin-top: 30px;
}
.google-button {
  background: #E94747;
  color: #f3f3f3;
  width: 295px;
}
.img-home {
  width: 350px;
  height: 400px;
  margin-top: 100px;
  margin-left: 50px;
}
.line {
  height: 420px;
  border-left: 2px solid;
  margin-top: 120px;
	opacity: 0.2;
}
.btn-container {
  margin-top: 20px;
}
.login-btn {
	background: #4661ED;
  margin-right: 10px;
}
.login-btn:hover {
  background: #2d46c2;
}
.signup-btn {
  background: #f3f3f3;
  margin-left: 10px;
  color: #4661ED;
}
.signup-btn:hover {
  background: #dfdfdf;
}

</style>