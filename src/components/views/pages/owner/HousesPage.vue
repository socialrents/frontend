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
    </div>
  </div>
</template>

<script>

import OwnerNavBar from './OwnerNavBar.vue';
import MainButton from '../../../buttons/MainButton.vue';

export default {
  name: 'HousesPage',
  components: { OwnerNavBar, MainButton },
  methods: {
      newHouse() {
        this.$router.push('/newHouse');
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
.header {
  display: flex;
}
.pageCenter .header .title {
  margin-top: 30px;
  margin-right: 450px;
}
.add-house-btn {
  background: #4661ED;
  margin-top: 30px;
  width: 170px;
}
</style>