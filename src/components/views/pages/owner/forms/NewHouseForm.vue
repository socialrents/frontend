<template>
  <div>
    <div id="nav-bar">
      <OwnerNavBar />
    </div>
    <div class="pageCenter">
        <div class="houseForm">
      <div class="header">
        <h2 class="title">Cadastrar novo imóvel</h2>
			</div>
					<div class="inputs">
						<div class="others">
              <div class="city">
                <label>Cidade</label>
                <br>
                <dropdown class="citySelection"
                  :options="cities"
                  :selected="citySelected"
                  v-on:updateOption="selectcity"
                  :placeholder="'Selecione um bairro'"
									v-model="newHouse.city"
								/>
              </div>
							
              <div class="district">
                <label>Bairro</label>
                <br>
                <dropdown class="citySelection"
                  :options="districts"
                  :selected="districtSelected"
                  v-on:updateOption="selectdistrict"
                  :placeholder="'Selecione um bairro'"
									v-model="newHouse.district"
								/>
              </div>
            </div>
          </div>
          <div class="descriptionInput">
            <label>Descrição do imóvel</label>
            <br>
            <textarea 
							name="description" 
							id="description" 
							cols="58" rows="8" 
							placeholder="Digite aqui uma descrição detalhada contendo as características do imóvel." 
							v-model="newHouse.description"
						/>
          </div>
          <div class="buttons">
						<MainButton id="addHouseBtn" :msg="'Cadastrar imóvel'" v-on:click="addHouse"/>
						<div class="sqrmeters">
							<label>Metros quadrados</label>
              <br>
							<input type="number" name="sqrmeters" class="sqrmetersInput" placeholder="Metros quadrados" v-model="newHouse.sqrmeters" />
						</div>
						<div class="price">
							<label>Preço da diária</label>
              <br>
							<input type="text" name="price" class="priceInput" v-model="newHouse.price" />
						</div>
					</div>
        </div> 
    </div>
  </div>
</template>

<script>

import dropdown from 'vue-dropdowns';
import OwnerNavBar from '../OwnerNavBar.vue';
import MainButton from '../../../../buttons/MainButton.vue';
import Api from '../../../../../services/api';

export default {
  name: 'HousesPage',
  components: { OwnerNavBar, MainButton, 'dropdown': dropdown },
	data() {
		return {
			cities: [],
			citySelected: {
				name: "Selecione uma cidade"
			},
			districts: [],
			districtSelected: {
				name: "Selecione um bairro"
			},
			newHouse: {
				description: "",
				sqrmeters: "",
				city: "",
				district: "",
				owner: JSON.parse(localStorage.getItem("socialrents-user")).id,
				price: "",
			}
		}
	},
	async mounted() {
		// configurar cidades do bd
		const response = await Api.get('/allCities');

		for (const city of response.data) {
			console.log(city)
			this.cities.push(city)
		}
	},
  methods: {
		async selectcity(payload) {
      this.citySelected.name = { ...payload }
      const city = {...payload}
			
			const response = await Api.get(`/allDistricts/${city.name}`)

			this.districts = [];
			for (const district of response.data) {
				this.districts.push(district);
			}

    },
		selectdistrict(payload) {
      this.districtSelected.name = { ...payload }
      console.log({...payload})
    },
    async addHouse() {
			this.$swal.fire({
				title: 'Confirmar cadastro de imóvel?',
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				cancelButtonText: 'Não',
				confirmButtonText: 'Sim'
			}).then(async (result) => {
				if (result.isConfirmed) {
					this.newHouse.city = {...this.citySelected.name};
					this.newHouse.district = {...this.districtSelected.name};
					const response = await Api.post('/newPlace', this.newHouse);
					console.log(this.newHouse)
					console.log(response);
					if (response.status === 200) {
						this.$swal.fire({
							title: 'Imóvel cadastrado com sucesso!',
							icon: 'success'
						})
					} else {
						this.$swal.fire({
							title: 'Erro ao cadastrar imóvel!',
							icon: 'error'
						})
					}
				}
			})
    }
  }
}

</script>

<style scoped>
.citySelection {
  border: 2px solid #838383;
  border-radius: 3px;
  background: #f3f3f3;
	width: 275px;
}
.pageCenter {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.swal-popup {
	font-family: Roboto;
}

.newPartyCard {
  margin-top: 30px;
} 
.houseForm {
  margin-top: 20px;
	width: 600px;
}
.descriptionInput {
	width: 500px;
	margin-top: 20px;
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