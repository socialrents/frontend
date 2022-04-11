<template>
  <div>
    <div id="nav-bar">
      <NavBar />
    </div>
    <div class="header">
      <UserCard />
      <h2 class="title">Imóveis reservados</h2>
    </div>
  </div>
</template>

<script>

import NavBar from '../../../NavBar.vue';
import UserCard from '../../../UserCard.vue';
import MainButton from '../../../buttons/MainButton.vue'

export default {
  name: 'OwnerPage',
  components: { NavBar, UserCard, MainButton }  
}

</script>

<style scoped>
.header {
  display: flex;
}
.add-button {
  background: #4661ED;
}
.header .title {
  margin-top: 30px;
  margin-left: 20px;
}
.add-button {
  margin-left: 600px;
  margin-top: 30px;
}
</style>