<template>
    <div class="reservation-card">
        <div class='cardButtons'>
          <vue-feather class='remover' vue-feather type="x" />
        </div>
        <div class="location">
            <!-- <div class='houseImg' /> -->
            <div class='address'>
						<h3>Informações sobre o evento</h3> <br>
            Código do imóvel: {{ reservation.id_house }} <br>
            Cliente: {{ reservation.client }} <br>
            Data de início: {{ startdate }} <br>
						Data de término: {{ enddate }} <br>
            Qtd. de pessoas: {{reservation.nofpeople }} <br>
            </div>
        </div>
        <div class="description">
        Descrição do evento: {{ reservation.description }}
        </div> 
        <div class="total">
          <div class="totalPrice">Lucro total: {{ reservation.total }}</div>
        </div> 
    </div>
</template>

<script>

import Api from '../../../../services/api';
import moment from 'moment';

export default {
  name: 'ReservationCard',
  props: {
    reservation: Object
  },
	data() {
		return {
			startdate: moment(this.reservation.startdate).format("DD/MM/YYYY"),
			enddate: moment(this.reservation.enddate).format("DD/MM/YYYY"),
		}
	},
  methods: {
		async accept(id) {
			alert(id);
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
					const response = await Api.put(`/acceptParty/${this.reservation.id_notif}/${this.reservation.id_house}/${this.reservation.id_party}`);
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
					const response = await Api.put(`/denyParty/${this.reservation.id_notif}/${this.reservation.id_party}`);
					if (response.status === 200) {
						this.$swal.fire({
							title: 'Evento cancelado!',
							icon: 'success'
						})
					}
				}
			})
		},
    async deletereservation(id) {
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
          const response = await Api.delete(`/deletereservation/${id}`)
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
.total {
  margin-top: 70px;
  margin-left: 60%;
  color: white;
}
.totalPrice {
  background: #ffb004;
  width: 250px;
	height: 20px;
	border-radius: 3px;
	border: 0 none;
	color: #ffff;
  text-align: center;
}
.reservation-card {
  width: 600px;
  height: 250px;
  background: #f3f3f3;
  margin: 10px;
  padding: 50px;
}

.reservation-card .houseImg {
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
.reservation-card .cardButtons {
	margin-left: 100%;
	width: 100px;
	margin-top: -30px;
	height: 20px;
	display: flex;
}

.reservation-card .cardButtons .editar {
	background: #24A7F1;
	border-radius: 3px 0px 0px 3px;
	height: 15px;
	color: white;
	padding: 3px;
}
.reservation-card .cardButtons .remover {
	background: #E94747;
	border-radius: 3px;
	height: 15px;
	color: white;
	padding: 3px;
}
.reservation-card .location {
	display: flex;
}

.description {
  width: 400px;
  margin-top: 20px;
}
</style>