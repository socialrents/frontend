<template>
    <div class="notification-card">
        <!-- <div class='cardButtons'>
          <vue-feather class='remover' vue-feather type="x" v-on:click="deleteNotification(notification.id)" />
        </div> -->
        <div class="location">
            <!-- <div class='houseImg' /> -->
            <div class='address'>
						<h3>Informações sobre o evento</h3> <br>
            Código do imóvel: {{ notification.id_house }} <br>
            Cliente: {{ notification.client }} <br>
            Data de início: {{ startdate }} <br>
						Data de término: {{ enddate }} <br>
            Qtd. de pessoas: {{notification.nofpeople }} <br>
            </div>
        </div>
        <div class="description">
        Descrição do evento: {{ notification.description }}
        </div> 
        <div class="buttons">
          <MainButton class="accept" :msg="'Aceitar'" v-on:click="accept(notification.id_notif)"/>
          <MainButton class="deny" :msg="'Recusar'" v-on:click="deny(notification.id_party)" />
        </div>
    </div>
</template>

<script>

import Api from '../../../../services/api';
import MainButton from '../../../buttons/MainButton.vue';
import moment from 'moment';

export default {
  name: 'notificationCard',
  components: { MainButton },
  props: {
    notification: Object
  },
	data() {
		return {
			startdate: moment(this.notification.startdate).format("DD/MM/YYYY"),
			enddate: moment(this.notification.enddate).format("DD/MM/YYYY"),
		}
	},
  methods: {
		async accept() {
			this.$swal.fire({
				title: 'Confirmar autorização de evento?',
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#E94747',
				cancelButtonText: 'Não',
				confirmButtonText: 'Sim'
			}).then(async (result) => {
				if (result.isConfirmed) {
					console.log({...this.notification});
					const response = await Api.put(`/acceptParty`, {...this.notification});
					if (response.status === 200) {
						this.$swal.fire({
							title: 'Evento confirmado!',
							icon: 'success'
						})
					}
				}
			})
		},
		async deny() {
			this.$swal.fire({
				title: 'Cancelar solicitação de evento?',
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#E94747',
				cancelButtonText: 'Não',
				confirmButtonText: 'Sim'
			}).then(async (result) => {
				if (result.isConfirmed) {
					const response = await Api.put(`/denyParty/${this.notification.id_notif}/${this.notification.id_party}`);
					if (response.status === 200) {
						this.$swal.fire({
							title: 'Evento cancelado!',
							icon: 'success'
						})
					}
				}
			})
		},
    async deleteNotification(id) {
			
			this.$swal.fire({
        title: 'Confirmar exclusão de imóvel?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#4661ED',
				cancelButtonColor: '#d33',
				cancelButtonText: 'Não',
				confirmButtonText: 'Sim'
      }).then(async (result) => {
        if (result.isConfirmed) {
          const response = await Api.delete(`/deletenotification/${id}`)
          console.log(response)
          if (response.status === 200) {
						this.$swal.fire({
							title: 'Imóvel deletado com sucesso!',
							icon: 'success'
						})
					} else {
						this.$swal.fire({
							title: 'Erro ao deletar imóvel!',
							icon: 'error'
						})
					}
        }
      })
		}
  }
}
</script>
<style lang="css" scoped>
  .notification-card {
  width: 600px;
  height: 250px;
  background: #f3f3f3;
  margin: 10px;
  padding: 50px;
}

.notification-card .houseImg {
  border: 1px dashed red;
  width: 150px;
  height: 80px;
}
.buttons {
  margin-top: 60px;
  width: 300px;
  display: flex;
	margin-left: 55%;
	justify-content: space-evenly;
  color: white;
}
.deny {
	background: #E94747;
	width: 130px;
	border-radius: 3px;
	border: 0 none;
	color: #ffff;
	text-align: center;
}
.deny:hover {
	background: #b80f0f;
}
.accept {
  text-align: center;
  background: #1cc738;
  width: 130px;
	border-radius: 3px;
	border: 0 none;
	color: #ffff;
}
.accept:hover {
	background: #0ba324;
}
.notification-card .cardButtons {
	margin-left: 100%;
	width: 100px;
	margin-top: -30px;
	height: 20px;
	display: flex;
}

.notification-card .cardButtons .editar {
	background: #24A7F1;
	border-radius: 3px 0px 0px 3px;
	height: 15px;
	color: white;
	padding: 3px;
}
.notification-card .cardButtons .remover {
	background: #E94747;
	border-radius: 3px;
	height: 15px;
	color: white;
	padding: 3px;
}
.notification-card .location {
	display: flex;
}

.description {
  width: 400px;
  margin-top: 20px;
}
</style>