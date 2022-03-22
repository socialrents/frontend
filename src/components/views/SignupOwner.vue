<template>
  <div>
    <div class="login-container">
      <div class="login-card">
        <div class="card-title">Cadastre-se na plataforma</div>
        <div class="form-container">
          <div class="input-container">
            <input class="email" type="email" placeholder="E-mail" v-model="userLogged.email"/>
            <br>
            <input class="username" type="text" placeholder="Nome de usuário" v-model="userLogged.username"/>
            <br>
            <input class="password" type="password" placeholder="Senha" v-model="userLogged.password1"/>
            <br>
            <input class="password" type="password" placeholder="Repita sua senha" v-model="userLogged.password2"/>
            <br>
            <div class="location-container">
              <input class="city" type="text" placeholder="Cidade" v-model="userLogged.location.city">
              <input class="district" type="text" placeholder="Bairro" v-model="userLogged.location.district">
            </div>
          </div>
            <MainButton class="signup-btn" msg="Cadastre-se como proprietário" v-on:click="signup"/>
        </div>
      </div>
      <div class="line"></div>
      <img class="img-home" src="../../assets/owner.jpeg">
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
        email: "",
        username: "",
        password1: "",
        password2: "",
        location: {
          city: "",
          district: ""
        }
      }
    }
  },
  methods: {
    async signup() {
        if (this.userLogged.email == "" || this.userLogged.username == "" || this.userLogged.password1 == "" || this.userLogged.password2 == "") {
          this.$notify({ type: "error", text: "Preencha todos os campos!" });
        } else if(this.userLogged.password1 != this.userLogged.password2) {
          this.$notify({ type: "warn", text: "Senhas não são iguais!" });
        } else {
          this.$router.go(-1)
        }
    }
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  margin-left: 60px;
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
input:focus {
  outline: 0;
}
.city {
  width: 137px;
}
.district {
  margin-left: 20px;
  width: 137px;
}
.login-card {
  margin-top: 150px;
  margin-right: 50px;
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
  width: 550px;
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
.signup-btn {
	background: #4661ED;
  margin-right: 10px;
	width: 295px;
}
.signup-btn:hover {
  background: #2d46c2;
}

</style>