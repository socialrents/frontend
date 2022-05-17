<template>
  <div>
    <div class="pageCenter">
        <div class="userForm">
					<div class="inputs">
						<div class="others">
              <div class="inputContainer">
								<div class="header">
									<h2 class="title">Editar perfil</h2>
									<vue-feather type="corner-up-left" v-on:click="previousPage" />
								</div>
                <label>Email</label>
                <br>
								<input 
									type="text" 
									name="email" 
									class="emailInput" 
									maxlength="50"
									v-model="user.email"
								/>
              </div>
							<div class="inputContainer">
                <label>Nome de usuário</label>
                <br>
								<input 
									type="text" 
									name="name" 
									class="loginInput" 
									maxlength="15"
									v-model="user.login"
								/>
              </div>
							<div v-if="passChange">
							<div class="passwordChange">
								<div class="inputContainer">
									<label>Nova senha</label>
									<br>
									<input 
										type="password" 
										name="password" 
										class="passInput" 
										v-model="newPass"
										maxlength="20"
									/>
								</div>
								<div class="inputContainer">
									<label>Repita a nova senha</label>
									<br>
									<input 
										type="password" 
										name="passwordCheck" 
										class="loginInput" 
										v-model="passCheck"
										maxlength="20"
									/>
								</div>
							</div>
						</div>
						<div class="buttons">
							<MainButton id="updatePass" :msg="'Alterar Senha'" v-on:click="updatePass" />
							<MainButton id="saveChanges" :msg="'Salvar Alterações'" v-on:click="saveChanges" />
						</div>
            </div>
          </div>
        </div> 
    </div>
  </div>
</template>

<script>

import MainButton from '../components/buttons/MainButton.vue';
import Api from '../services/api';
import md5 from 'blueimp-md5'

export default {
  name: 'HousesPage',
  components: { MainButton },
	data() {
		return {
			user: JSON.parse(localStorage.getItem("socialrents-user")),
			passChange: false,
			newPass: "",
			passCheck: ""
		}
	},
	methods: {
		previousPage() {
			this.$router.go(-1);
		},
		async updatePass() {
			this.passChange = !this.passChange;
		},
		async saveChanges() {
			this.$swal.fire({
				title: 'Confirmar alteração de perfil?',
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				cancelButtonText: 'Não',
				confirmButtonText: 'Sim'
			}).then(async (result) => {
				if (result.isConfirmed) {
					if (this.passChange) {
						const userUpdated =  {
							id: this.user.id,
							email: this.user.email,
							login: this.user.login,
							type: this.user.type,
							password: md5(this.newPass)
						}
						if (this.newPass != this.passCheck) {
							this.$notify({type: "warn", text: "Senhas devem ser iguais!"});
						} else {
							const response = await Api.put('/editProfileAndPass', userUpdated);
							if (response.status === 200) {
							this.$swal.fire({
								title: 'Perfil alterado com sucesso!',
								icon: 'success'
							})
							this.$router.push('/login');
							} else {
								this.$swal.fire({
									title: 'Erro ao alterar perfil!',
									icon: 'error'
								})
							}
							return;
						}
					} else {
						const response = await Api.put('/editProfile', this.user);
						if (response.status === 200) {
							this.$swal.fire({
								title: 'Perfil alterado com sucesso!',
								icon: 'success'
							})
							this.$router.push('/login');
						} else if (response.status === 422) {
							this.$swal.fire({
								title: 'Erro ao alterar perfil!',
								icon: 'error'
							})
						}
					}
				}
			})
		}
	}
}

</script>

<style scoped>

.pageCenter {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.userForm {
  margin-top: 100px;
	width: 500px;
}

.header {
  color: #585858;
	margin-bottom: 40px;
	display: flex;
	justify-content: space-between;
}
.others {
	width: 400px;
}

.inputs {
  margin-top: 30px;
  display: flex;
	justify-content: space-around;
}
input {
  padding: 5px;
  border: 2px solid #838383;
  border-radius: 3px;
  background: #f3f3f3;
	height: 25px;
	width: 100%;
  height: 25px;
	margin-top: 15px;
}
.inputContainer {
	margin: 15px;
}
input:focus {
  outline: 0;
}

.buttons {
  margin-top: 25px;
  display: flex;
	justify-content: flex-end;
}
.passwordChange {
	display: flex;
}
#saveChanges {
  background: #4661ED;
}
#updatePass {
	background: #dfa70f;
	margin-right: 15px;
}
</style>