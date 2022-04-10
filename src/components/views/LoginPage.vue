<template>
  <div>
    <div class="login-container">
      <div class="login-card">
        <div class="card-title">Faça seu login</div>
        <div class="form-container">
          <div class="input-container">
            <input class="username" type="text" placeholder="E-mail ou Nome de usuário" v-model="userLogged.login"/>
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

import MainButton  from '../buttons/MainButton.vue';
import Api from '../../services/api';

export default {
  name: "LoginPage",
  components: { MainButton },
  data() {
    return {
      userLogged: {
        login: "",
        password: ""
      }
    }
  },
  methods: {
    async login() {
      if (this.userLogged.login == "" || this.userLogged.password == "") {
        this.$notify({ type: "error", text: "Preencha todos os campos!" });
      } else {
        Api.post('/login', this.userLogged).then((response) => {
          console.log(response);
          this.userLogged = response.data;
        }).catch(() => {
          this.$notify({ type: "error", text: "Usuário não encontrado!" });
        })
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
  margin-bottom: 20px;
  width: 295px;
}
.login-card {
  margin-top: 150px;
  margin-right: 160px;
}
.card-title {
  font-weight: bold;
	font-size: 30px;
	margin-bottom: 20px;
	color: #2f2f2f;
  margin-left: 28px;
}
.form-container {
  padding: 30px;
}
.google-container {
  margin-top: 15px;
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
  margin-right: 40px;
	opacity: 0.2;
}
.btn-container {
  margin-top: 10px;
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
input:focus {
  outline: 0;
}
.signup-btn:hover {
  background: #dfdfdf;
}

</style>