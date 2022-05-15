<template>
    <div class="place-card">
        <div v-if="editChange">
        <div class='cardButtons'>	
          <vue-feather class='cancelar' vue-feather type="x" v-on:click="editPlace" />
        </div>
          <h3>Editar imóvel</h3> <br>
          <EditPlaceCard :placeEdit="place" />
        </div>
        <div v-else>
          <div class='cardButtons'>	
            <vue-feather class='editar' vue-feather type="edit-3" v-on:click="editPlace" />
            <vue-feather class='remover' vue-feather type="trash-2" v-on:click="deletePlace(place.id)" />
          </div>
          <div class="location">
            <div class='address'>
              <h3>Dados do imóvel</h3> <br>
              Código: {{ place.id }} <br>
              Cidade: {{ place.city }} <br>
              Bairro: {{ place.district }} <br>
              Valor da diária: {{ place.price }} <br>
              Tamanho: {{ place.sqrmeters }} m² <br>
              <div class="description">
              Descrição: {{ place.description }}
              </div> 
        </div>
        </div>
        <div class="status">
          <div v-if="place.reserved" class="reserved">Reservado</div>
          <div v-else class="available">Disponível</div>
        </div>
        </div>
    </div>
</template>

<script>

import Api from '../../../../services/api';
import EditPlaceCard from './EditPlaceCard.vue';

export default {
  name: 'PlaceCard',
  components: { EditPlaceCard },
  props: {
    place: Object,
  },
  data() {
    return {
      editChange: false
    }
  },
  methods: {
    editPlace() {
      this.editChange = !this.editChange;
    },
    async deletePlace(id) {
			this.$swal.fire({
        title: 'Confirmar exclusão de imóvel?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				cancelButtonText: 'Não',
				confirmButtonText: 'Sim'
      }).then(async (result) => {
        if (result.isConfirmed) {
          const response = await Api.delete(`/deletePlace/${id}`)
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
<style lang="css">
  .place-card {
  width: 600px;
  height:250px;
  background: #f3f3f3;
  margin: 10px;
  padding: 50px;
}
.status {
  margin-top: 60px;
  margin-left: 85%;
  color: white;
}
.cancelar {
	background: #E94747;
	border-radius: 3px;
	height: 15px;
	color: white;
	padding: 3px;
}
.reserved {
  background: #E94747;
  width: 100px;
	height: 20px;
	border-radius: 3px;
	border: 0 none;
	color: #ffff;
  text-align: center;
}
.available {
  text-align: center;
  background: #1cc738;
  width: 100px;
	height: 20px;
	border-radius: 3px;
	border: 0 none;
	color: #ffff;
}
.place-card .cardButtons {
	margin-left: 96%;
	width: 100px;
	margin-top: -30px;
	height: 20px;
	display: flex;
}

.place-card .cardButtons .editar {
	background: #24A7F1;
	border-radius: 3px 0px 0px 3px;
	height: 15px;
	color: white;
	padding: 3px;
}
.place-card .cardButtons .remover {
	background: #E94747;
	border-radius: 0px 3px 3px 0px;
	height: 15px;
	color: white;
	padding: 3px;
}
.place-card .location {
	display: flex;
}

.description {
  width: 400px;
  margin-top: 30px;
}
</style>