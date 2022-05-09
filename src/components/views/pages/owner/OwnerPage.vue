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
      
      <h2 class="noPartiesTitle" v-if="this.parties.length == 0">Nenhum imóvel reservado!</h2>
      <div class="parties" v-for="(item, index) in this.parties" v-bind:key="index">
          <!-- <PartyCard :party='item' /> -->
      </div>
    </div>
  </div>
</template>

<script>

import OwnerNavBar from './OwnerNavBar.vue';
import UserCard from '../../../UserCard.vue';

export default {
  name: 'OwnerPage',
  components: { OwnerNavBar, UserCard },
  data() {
    return {
      parties: []
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
  margin-top: 20px;
}
</style>