<template>
  <div>
    <div class="pageCenter">
        <div class="houseForm">

          <div class="descriptionInput">
            <label>Descrição do imóvel</label>
            <br>
            <textarea 
							name="description" 
							id="description" 
							cols="58" rows="3" 
							maxlength="80"
							placeholder="Digite aqui uma descrição detalhada contendo as características do imóvel." 
							v-model="place.description"
						/>
          </div>
          <div class="buttons">
						<MainButton id="addHouseBtn" :msg="'Salvar Alterações'" v-on:click="saveChanges"/>
						<div class="sqrmeters">
							<label>Metros quadrados</label>
              <br>
							<input type="number" name="sqrmeters" class="sqrmetersInput" placeholder="Metros quadrados" v-model="place.sqrmeters" />
						</div>
						<div class="price">
							<label>Preço da diária</label>
              <br>
							<input type="text" name="price" class="priceInput" v-model="place.price" />
						</div>
					</div>
        </div> 
    </div>
  </div>
</template>

<script>

import MainButton from '../../../buttons/MainButton.vue';
import Api from '../../../../services/api';

export default {
  name: 'EditPlaceCard',
	props: { placeEdit: Object },
	data() {
		return {
			place: this.placeEdit
		}
	},
  components: { MainButton},
  methods: {
    async saveChanges() {
			this.$swal.fire({
				title: 'Confirmar edição de imóvel?',
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				cancelButtonText: 'Não',
				confirmButtonText: 'Sim'
			}).then(async (result) => {
				if (result.isConfirmed) {
					this.place = {
						id: this.placeEdit.id,
						description: this.placeEdit.description,
						price: this.placeEdit.price,
						sqrmeters: this.placeEdit.sqrmeters
					}
					const response = await Api.put('/editPlace', this.place);
					console.log(response);
					if (response.status === 200) {
						this.$swal.fire({
							title: 'Imóvel atualizado com sucesso!',
							icon: 'success',
						})
					} else {
						this.$swal.fire({
							title: 'Erro ao atualizar imóvel',
							icon: 'error',
						})
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
.houseForm {
	width: 600px;
}
.descriptionInput {
	width: 500px;
}
.descriptionInput textarea#description {
  padding: 15px;
  border: 2px solid #838383;
  border-radius: 3px;
  margin-top: 15px;
  background: #f3f3f3;
}
.title {
  color: #585858;
}

.descriptionInput textarea#description:focus {
  outline: 0;
}
.inputs {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
}
input {
  padding: 5px;
  border: 2px solid #838383;
  border-radius: 3px;
  background: #f3f3f3;
	height: 25px;
	margin-top: 15px;
}
input:focus {
  outline: 0;
}
.inputs input {
  width: 270px;
  height: 25px;
  margin-top: 15px;
}
.others {
	display: flex;
}
.buttons {
  margin-top: 25px;
  display: flex;
  flex-direction: row-reverse;
	justify-content: space-between;
}
.district {
	margin-left: 32px;
}
#addHouseBtn {
	margin-top: 32px;
  background: #4661ED;
}
</style>