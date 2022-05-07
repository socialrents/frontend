<template>
  <div>
    <div id="nav-bar">
      <OwnerNavBar />
    </div>
    <div class="pageCenter">
      <div class="header">
        <h2 class="title">Seus imóveis</h2>
        <MainButton class="add-house-btn" :msg="'Cadastrar novo imóvel'" v-on:click="newHouse" />
      </div>
      <div class="main-page">
      
      <h2 class="noPlacesTitle" v-if="this.places.length == 0">Nenhum imóvel cadastrado!</h2>
      <div class="places" v-for="(item, index) in this.places" v-bind:key="index">
          <PlaceCard :place='item' />
      </div>
    </div>
    </div>
  </div>
</template>

<script>

import OwnerNavBar from './OwnerNavBar.vue';
import MainButton from '../../../buttons/MainButton.vue';
import PlaceCard from './PlaceCard.vue';
import Api from '../../../../services/api';

export default {
  name: 'HousesPage',
  components: { OwnerNavBar, MainButton, PlaceCard },
  data() {
    return {
      places: [
        { city: "teste", district: 'teste', price: 'teste', description: 'teste' }
      ]
    }
  },
  methods: {
      newHouse() {
        this.$router.push('/newHouse');
      }
  },
  async mounted() {
    const user = JSON.parse(localStorage.getItem("socialrents-user"))

    const response = await Api.get(`/places/${user.id}`);
    this.places = response.data;
    console.log(response.data)
  },
}

</script>

<style scoped>
.pageCenter {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.header {
  display: flex;
}
.pageCenter .header .title {
  margin-top: 30px;
  margin-right: 390px;
}
.add-house-btn {
  background: #4661ED;
  margin-top: 30px;
  width: 170px;
}

.noPlacesTitle {
  margin-top: 20px;
  color: #919191;
}
.main-page {
  display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
  /* margin-left: 300px; */
  margin-top: 20px;
}
</style>