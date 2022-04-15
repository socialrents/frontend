<template>
  <div>
    <div id="nav-bar">
      <ClientNavBar />
    </div>
    <div class="header">
      <UserCard />
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
import MainButton from '../../../buttons/MainButton.vue'

export default {
  name: 'OwnerPage',
  components: { ClientNavBar, UserCard, PartyCard, MainButton },
  data() {
    return {
      parties: [
        {
          city: 'Barra do corda - MA',
          district: 'Altamira',
          total: 450.00,
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Proin nec nisi tincidunt nulla porta lacinia consequat at tellus. 
                        Suspendisse vestibulum fermentum purus`,
          startDate: '20/04/2022',
          endDate: '24/04/2022'
        },
        {
          city: 'Barra do corda - MA',
          district: 'Tresidela',
          total: 300.00,
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Proin nec nisi tincidunt nulla porta lacinia consequat at tellus. 
                        Suspendisse vestibulum fermentum purus`,
          startDate: '20/04/2022',
          endDate: '24/04/2022'
        }
      ]
    }
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
.add-button {
  margin-left: 600px;
  margin-top: 30px;
}
.main-page {
  margin-left: 300px;
  margin-top: 20px;
}
.add-party-btn {
  background: #4661ED;
  margin-top: 30px;
  margin-left: 49%;
}
.add-party-btn:hover {
  background: #24A7F1;
}
</style>