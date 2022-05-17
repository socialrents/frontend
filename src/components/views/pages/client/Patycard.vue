<template lang="html">
  <div class="party-card">
	<div class='cardButtons'>	
			<!-- <vue-feather class='editar' vue-feather type="edit-3" v-on:click="editParty()"/> -->
			<vue-feather class='remover' vue-feather type="trash-2" v-on:click="deleteParty(party.id)" />
	</div>
    <div class="location">
		<img class="houseImg" src="../../../../assets/house.jpg">
		<div class='address'>
			Cidade: {{ party.city }} <br>
			Bairro: {{ party.district }} <br>
			Data de início: {{ startdate }} <br>
			Data de finalização: {{ enddate }} <br>
			Valor total: {{party.total }} <br>
		</div>
    </div>
    <div class="description">
      Descrição: {{ party.description }} 
    </div> 
	<div class="status">
		<div v-if="party.status === 'denied'" class="denied">Negado</div>
		<div v-else-if="party.status === 'confirmed'" class="confirmed">Confirmado</div>
		<div v-else class="waiting">Aguardando</div>
    </div>
  </div>
</template>

<script>

import Api from '../../../../services/api';
import moment from 'moment';

export default {
  name: 'PartyCard',
  props: {
    party: Object
  },
	data() {
		return {
			startdate: moment(this.party.startdate).format("DD/MM/YYYY"),
			enddate: moment(this.party.enddate).format("DD/MM/YYYY"),
			showEditModal: false
		}
	},
  methods: {
		async editParty() {
			this.ShowEditModal = false;
		},
		async deleteParty(id) {
			this.$swal.fire({
        title: 'Confirmar cancelamento de evento?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				cancelButtonText: 'Não',
				confirmButtonText: 'Sim'
      }).then(async (result) => {
        if (result.isConfirmed) {
          const response = await Api.delete(`/deleteParty/${id}`)
          console.log(response)
          if (response.status === 200) {
						this.$swal.fire({
							title: 'Evento cancelado com sucesso!',
							icon: 'success'
						})
					} else {
						this.$swal.fire({
							title: 'Erro ao cancelar Evento!',
							icon: 'error'
						})
					}
        }
      })
		}
  }
}
</script>
<style lang="css">
  .party-card {
  width: 600px;
  height:200px;
  background: #f3f3f3;
  margin: 10px;
  padding: 50px;
}

.party-card .houseImg {
  width: 200px;
  height: 120px;
}
.status {
  margin-top: 40px;
  margin-left: 85%;
  color: white;
}
.denied {
  background: #E94747;
  width: 100px;
	height: 20px;
	border-radius: 3px;
	border: 0 none;
	color: #ffff;
  text-align: center;
}
.confirmed {
  text-align: center;
  background: #1cc738;
  width: 100px;
	height: 20px;
	border-radius: 3px;
	border: 0 none;
	color: #ffff;
}
.waiting {
  text-align: center;
  background: #ffb004;
  width: 100px;
	height: 20px;
	border-radius: 3px;
	border: 0 none;
	color: #ffff;
}
.party-card .cardButtons {
	margin-left: 96%;
	width: 50px;
	margin-top: -30px;
	height: 20px;
	display: flex;
	cursor: pointer;
}

.party-card .cardButtons .remover {
	background: #E94747;
	border-radius: 3px;
	height: 15px;
	color: white;
	padding: 3px;
}
.party-card .location {
	display: flex;
}
.party-card .location .address {
	margin-left: 30px;
}
.description {
  width: 400px;
  margin-top: 50px;
}
</style>