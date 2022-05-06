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
            <textarea name="description" id="description" cols="80" rows="10" placeholder="Digite aqui uma descrição detalhada do evento" v-model="party.description"/>
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
                <input type="text" name="city" class="cityInput" v-model="party.city">
              </div>
              <div class="qtdPeople">
                <label>Quantidade de pessoas</label>
                <br>
                <input type="number" name="qtdPeople" class="qtdPeopleInput" v-model="party.nOfPeople" />
              </div>
            </div>
          </div>
          <div class="buttons">
            <MainButton id="addPartyBtn" :msg="'Cadatrar evento'" v-on:click='createParty'/>
            <MainButton id="houseBtn" :msg="'Escolher imóvel'" v-on:click='showPlaces(party.city)' />
          </div>
        </div> 
      </div>
    </div>
  </div>
</template>

<script>

import ClientNavBar from '../ClientNavBar.vue';
import MainButton from '../../../../buttons/MainButton.vue'
import Api from '../../../../../services/api.js'

export default {
  name: 'NewPartyForm',
  components: { ClientNavBar, MainButton },
  data() {
		return {
			party: {
				startDate: "",
				endDate: "",
				nOfDays: 3,
				nOfPeople: 0,
        city: "",
				description: "",
        clientKey: JSON.parse(localStorage.getItem("socialrents-user")).id
      }
		}
  },
  methods: {
    async createParty() {
      console.log(this.party);
      this.$swal.fire({
        title: 'Confirmar agendamento de evento?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				cancelButtonText: 'Não',
				confirmButtonText: 'Sim'
      }).then((result) => {
        if (result.isConfirmed) {
          const response = Api.post('/newParty', this.party)
          if (response.status === 200) {
						this.$notify({ type: "success", text: "Solicitação enviada com sucesso!" });
					} else {
						this.$notify({ type: "error", text: "Erro ao enviar solicitação!" });
					}
        }
      })
    },
    showPlaces(city) {
      if (city === "") alert('Preencha o campo da cidade!');
      else this.$router.push(`/allPlaces/${city}`);
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
.partyForm {
  margin-top: 50px;
}
.descriptionInput textarea#description {
  padding: 15px;
  border: 3px solid #838383;
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
  border: 3px solid #838383;
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

#houseBtn {
  background: #FBA31F;
  margin-right: 20px;
}
#addPartyBtn {
  background: #24A7F1;
}

</style>