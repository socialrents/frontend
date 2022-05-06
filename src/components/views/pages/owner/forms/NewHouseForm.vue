<template>
  <div>
    <div id="nav-bar">
      <OwnerNavBar />
    </div>
    <div class="pageCenter">
      <div class="header">
        <h2 class="title">Cadastrar novo imóvel</h2>
			</div>
        <div class="partyForm">
					<div class="inputs">
						<div class="others">
              <div class="city">
                <label>Cidade</label>
                <br>
                <input type="text" name="city" class="cityInput" />
              </div>
							
              <div class="qtdPeople">
                <label>Bairro</label>
                <br>
                <input type="number" name="qtdPeople" class="qtdPeopleInput" />
              </div>
            </div>
          </div>
          <div class="descriptionInput">
            <label>Descrição do imóvel</label>
            <br>
            <textarea name="description" id="description" cols="70" rows="10" placeholder="Digite aqui uma descrição detalhada contendo as características do imóvel." />
          </div>
          <div class="buttons">
						<MainButton id="addPartyBtn" :msg="'Cadatrar evento'" />
					</div>
        </div> 
    </div>
  </div>
</template>

<script>

import OwnerNavBar from '../OwnerNavBar.vue';
import MainButton from '../../../../buttons/MainButton.vue';

export default {
  name: 'HousesPage',
  components: { OwnerNavBar, MainButton },
  methods: {
    newHouse() {
			alert('oi');
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
.pageCenter .header .title {
  margin-top: 30px;
  margin-right: 380px;
}

.newPartyCard {
  margin-top: 30px;
} 
.partyForm {
  margin-top: 50px;
	width: 600px;
}
.descriptionInput {
	width: 500px;
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
input {
  padding: 5px;
  border: 3px solid #838383;
  border-radius: 3px;
  background: #f3f3f3;
}
input:focus {
  outline: 0;
}
.inputs input {
  width: 270px;
  height: 25px;
  margin-top: 15px;
  margin: 10px;
}
.others {
	display: flex;
}
.buttons {
  margin-top: 50px;
  display: flex;
  flex-direction: row-reverse;
}
#addPartyBtn {
  background: #24A7F1;
}
</style>