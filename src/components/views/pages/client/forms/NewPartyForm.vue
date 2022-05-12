<template>
  <div>
    <ClientNavBar />
    <div class="newPartyCard">
      <div class="newPartyForm">
        <h2 class="title">Agendar novo evento</h2> 
        <div class="partyForm">
          <div class="descriptionInput">
            <label>Descrição do evento</label>
            <br>
            <textarea 
              name="description" 
              id="description" 
              cols="58" rows="8" 
              placeholder="Digite aqui uma descrição detalhada do evento" 
              v-model="party.description"
            />
          </div>
          <div class="inputs">
            <div class="dates">
              <div class="startDate">
                <label>Data de início</label>
                <br>
                <input type="date" name="startDate" class="dateInput" v-model="party.startDate" />
              </div>
              <div class="endDate">
                <label>Data de término</label>
                <br>
                <input type="date" name="endDate" class="dateInput" v-model="party.endDate" />
              </div>
            </div>
            <div class="others">
              <div class="city">
                <label>Cidade</label>
                <br>
                <dropdown class="citySelection"
                  :options="cities"
                  :selected="citySelected"
                  v-on:updateOption="selectCity"
                  :placeholder="'Selecione uma cidade'"
                />
              </div>
              <div class="qtdPeople">
                <label>Quantidade de pessoas</label>
                <br>
                <input type="number" name="qtdPeople" class="qtdPeopleInput" v-model="party.nOfPeople" />
              </div>
            </div>
          </div>
          <div class="buttons">
            <MainButton id="addPartyBtn" :msg="'Escolher imóvel'" v-on:click='createParty'/>
            <!-- <MainButton id="houseBtn" :msg="'Escolher imóvel'" v-on:click='showPlaces' /> -->
          </div>
        </div> 
      </div>
    </div>
  </div>
</template>

<script>

import dropdown from 'vue-dropdowns'
import ClientNavBar from '../ClientNavBar.vue';
import MainButton from '../../../../buttons/MainButton.vue'
import Api from '../../../../../services/api.js'
import moment from 'moment'

export default {
  name: 'NewPartyForm',
  components: { ClientNavBar, MainButton, 'dropdown': dropdown },
  data() {
		return {
			party: {
				startDate: "",
				endDate: "",
				nOfDays: 0,
				nOfPeople: 0,
        city: "",
				description: "",
        clientKey: JSON.parse(localStorage.getItem("socialrents-user")).id
      },
      cities: [],
      citySelected: {
        name: 'Selecione uma cidade'
      }
		}
  },
  async mounted() {
    const response = await Api.get('/allCities');

    for (const city of response.data) {
      console.log(city)
      this.cities.push(city)
    }
  },
  methods: {
    selectCity(payload) {
      this.citySelected.name = { ...payload }
      console.log({...payload})
    },
    async createParty() {

      if (this.party.startDate === "" || this.party.endDate === "" ||
          this.party.nOfPeople === 0 || this.party.description === "") {
            this.$notify({ type: 'warn', text: 'Preencha os campos!' })
      } else {     
        
        this.party.startDate = moment(this.party.startDate);
        this.party.endDate = moment(this.party.endDate);

        if (this.party.startDate > this.party.endDate) {
          this.$notify({ type: 'warn', text: 'Digite uma data válida!' })
        } else if (this.party.startDate < moment.now()){
          this.$notify({ type: 'warn', text: 'Data de início não pode ser menor que a data atual!' });
        } else {

          this.party.nOfDays = moment.duration(this.party.endDate.diff(this.party.startDate)).asDays();

          this.party.city = this.citySelected.name.name ;

          this.$swal.fire({
            title: 'Confirmar agendamento de evento?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Não',
            confirmButtonText: 'Sim'
          }).then(async (result) => {
            if (result.isConfirmed) {
              const response = await Api.post('/newParty', this.party)
              console.log(response)
              this.showPlaces();
            }
          })
        }
      }
    },
    showPlaces() {
      const city = { ...this.citySelected.name };

      this.party.startDate = moment(this.party.startDate);
      this.party.endDate = moment(this.party.endDate);

      this.party.nOfDays = moment.duration(this.party.endDate.diff(this.party.startDate)).asDays();
      
      this.$router.push(`/allPlaces/${city.name}/${this.party.nOfDays}`);
    }
  }
}

</script>

<style scoped>
.newPartyCard {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
} 
.citySelection {
  border: 2px solid #838383;
  border-radius: 3px;
  background: #f3f3f3;
  width: 250px;
}
.partyForm {
  margin-top: 50px;
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
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
}
.newPartyForm input {
  padding: 5px;
  border: 2px solid #838383;
  border-radius: 3px;
  background: #f3f3f3;
}
.newPartyForm input:focus {
  outline: 0;
}
.inputs input {
  width: 240px;
  height: 25px;
  margin-top: 15px;
  margin-bottom: 10px;
}

.buttons {
  margin-top: 50px;
  display: flex;
  flex-direction: row-reverse;
}

/* #houseBtn {
  background: #FBA31F;
  margin-right: 20px;
} */
#addPartyBtn {
  background: #24A7F1;
}

</style>