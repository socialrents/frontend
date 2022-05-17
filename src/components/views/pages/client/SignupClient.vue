<template>
  <div>
    <div class="login-container">
      <div class="login-card">
        <div class="card-title">Cadastre-se na plataforma</div>
        <div class="form-container">
          <div class="input-container">
            <input class="email" required type="email" placeholder="E-mail" maxlength="30" v-model="userCreated.email"/>
            <br>
            <input class="username" required type="text" placeholder="Nome de usuário" maxlength="20" v-model="userCreated.login"/>
            <br>
            <input class="password" required type="password" placeholder="Senha" maxlength="20" v-model="userCreated.password"/>
            <br>
            <input class="password" required type="password" placeholder="Repita sua senha" maxlength="20" v-model="passwordCheck"/>
          </div>
            <MainButton class="signup-btn" msg="Cadastre-se como cliente" v-on:click="signup"/>
            <router-link to="/"> <MainButton class="return-btn" :msg="'Voltar'"/> </router-link>
        </div>
      </div>
      <div class="line"></div>
      <img class="img-home" src="../../../../assets/client.jpeg">
    </div>
  </div>
</template>
<script>

import MainButton  from '../../../buttons/MainButton.vue'
import Api from '../../../../services/api'
import md5 from 'blueimp-md5'

export default {
  name: "LoginPage",
  components: { MainButton },
  data() {
    return {
      userCreated: {
        email: "",
        login: "",
        password: ""
      },
      passwordCheck: ""
    }
  },
  methods: {
    async signup() {
      if (this.userCreated.email == "" || this.userCreated.login == "" || this.userCreated.password == "" || this.passwordCheck == "") {
        this.$notify({ type: "error", text: "Preencha todos os campos!" });
      } else if(this.userCreated.password != this.passwordCheck) {
        this.$notify({ type: "warn", text: "Senhas não são iguais!" });
      } else {
        this.userCreated.password = md5(this.userCreated.password);
        Api.post('/signupClient', this.userCreated).then((response) => {
          console.log(response.status);
          this.$notify({ type: "success", text: "Usuário cadastrado com sucesso!"})
          this.$router.push('/login');
        }).catch((error) => {
          console.log(error);
          this.$notify({ type: 'error', text: 'Usuário já existe!' })
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
input:focus {
  outline: 0;
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
  background: #24A7F1;;
  margin-right: 10px;
  width: 220px;
}
.signup-btn:hover {
  background: #1381c0;
}

.return-btn {
  width: 60px;
  color: #757575;
  border: 1px solid #838383;
}

</style>