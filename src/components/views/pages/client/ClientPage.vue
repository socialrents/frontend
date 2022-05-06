<template>
  <div>
    <div id="nav-bar">
      <ClientNavBar />
    </div>
    <div class="header">
      <UserCard :user="this.$store.state.user" />
      <h2 class="title">Seus eventos</h2>
      <MainButton class="add-party-btn" :msg="'Criar novo evento'" v-on:click="newParty"/>
    </div>
    <div class="main-page">
      <div class="parties" v-for="(item, index) in this.parties" v-bind:key="index">
          <PartyCard :party='item' />
      </div>
    </div>
  </div>
</template>

<script>

import ClientNavBar from './ClientNavBar.vue';
import UserCard from '../../../UserCard.vue';
import PartyCard from './Patycard.vue';
import MainButton from '../../../buttons/MainButton.vue';
import Api from '../../../../services/api';

export default {
  name: 'OwnerPage',
  components: { ClientNavBar, UserCard, PartyCard, MainButton },
  data() {
    return {
      parties: []
    }
  },
  async mounted() {
    const user = JSON.parse(localStorage.getItem("socialrents-user"))

    const response = await Api.get(`/parties/${user.id}`);
    this.parties = response.data;
  },
  methods: {
    newParty() {
      this.$router.push('/newParty')
    }
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

.main-page {
  display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
  /* margin-left: 300px; */
  margin-top: 20px;
}
.add-party-btn {
  background: #4661ED;
  margin-top: 30px;
  margin-left: 32%;
}
.add-party-btn:hover {
  background: #24A7F1;
}
</style>