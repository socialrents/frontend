<template>
  <div>
    <div id="nav-bar">
      <OwnerNavBar />
    </div>
    <div class="header">
      <UserCard :user="this.$store.state.user"/>
      <h2 class="title">Imóveis reservados</h2>
    </div>
     <div class="main-page">
      
      <h2 class="noPartiesTitle" v-if="this.reservations.length == 0">Nenhum imóvel reservado!</h2>
      <div class="parties" v-for="(item, index) in this.reservations" v-bind:key="index">
          <ReservationCard :reservation='item' />
      </div>
    </div>
  </div>
</template>

<script>

import OwnerNavBar from './OwnerNavBar.vue';
import UserCard from '../../../UserCard.vue';
import ReservationCard from './ReservationCard.vue';
import Api from '../../../../services/api';

export default {
  name: 'OwnerPage',
  components: { OwnerNavBar, UserCard, ReservationCard },
  data() {
    return {
      reservations: []
    }
  },
  async mounted() {
    const user = JSON.parse(localStorage.getItem("socialrents-user"))

    const response = await Api.get(`/reservations/${user.id}`);
    this.reservations = response.data;
    console.log(response.data)
  }
}

</script>

<style scoped>
.header {
  display: flex;
}

.header .title {
  margin-top: 30px;
  margin-left: 20px;
}
.noPartiesTitle {
  margin-top: 50px;
  color: #919191;
}
.main-page {
  display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
  /* margin-left: 300px; */
}
</style>