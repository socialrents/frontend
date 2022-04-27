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
            <div class="qtdPeople">
              <label>Quantidade de pessoas</label>
              <br>
              <input type="number" name="qtdPeople" class="qtdPeopleInput" v-model="party.nOfPeople" />
            </div>
          </div>
          <div class="buttons">
            <MainButton id="addPartyBtn" :msg="'Cadatrar evento'" v-on:click='createParty'/>
            <MainButton id="houseBtn" :msg="'Escolher imóvel'"/>
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
				description: ""
			}
		}
  },
  methods: {
	async createParty() {
		await Api.post('/newParty', this.party).then(() => {
			alert('Imóvel cadastrado com sucesso!');
		}).catch(() => {
			alert('Erro ao cadastrar imóvel');
		})
	}
  }
}

</script>

<style>
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
.inputs .dateInput {
  width: 170px;
  height: 25px;
  margin-top: 15px;
}
.inputs .qtdPeopleInput {
  width: 170px;
  height: 25px;
  margin-top: 15px;
}
.buttons {
  margin-top: 70px;
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