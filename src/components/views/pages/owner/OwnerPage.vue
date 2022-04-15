<template>
  <div>
    <div id="nav-bar">
      <OwnerNavBar />
    </div>
    <div class="header">
      <UserCard />
      <h2 class="title">Imóveis reservados</h2>
    </div>
  </div>
</template>

<script>

import OwnerNavBar from './OwnerNavBar.vue';
import UserCard from '../../../UserCard.vue';

export default {
  name: 'OwnerPage',
  components: { OwnerNavBar, UserCard }  
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
</style>