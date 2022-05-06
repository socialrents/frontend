<template lang="html">
  <div class="party-card">
	<div class='cardButtons'>	
			<vue-feather class='editar' vue-feather type="edit-3" />
	
			<vue-feather class='remover' vue-feather type="trash-2" v-on:click="deleteParty(party.id)" />
	</div>
    <div class="location">
		<img class="houseImg" src="../../../../assets/house.jpg">
		<div class='address'>
		Cidade: {{ party.city }} <br>
		Bairro {{ party.district }} <br>
		Valor total: {{party.total }} <br>
		</div>
    </div>
    <div class="description">
      Descrição: {{ party.description }} 
    </div> 
  </div>
</template>

<script>

import Api from '../../../../services/api';

export default {
  name: 'PartyCard',
  props: {
    party: Object
  },
  methods: {
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
.party-card .cardButtons {
	margin-left: 96%;
	width: 50px;
	margin-top: -30px;
	height: 20px;
	display: flex;
}
.party-card .cardButtons .editar {
	background: #24A7F1;
	border-radius: 3px 0px 0px 3px;
	height: 15px;
	color: white;
	padding: 3px;
}
.party-card .cardButtons .remover {
	background: #E94747;
	border-radius: 0px 3px 3px 0px;
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