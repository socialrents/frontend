<template>
  <div id="nav">
    <div class="icons">
      <div class="profile">
        <vue-feather type="user" />
      </div>
      <div class="previous">
        <vue-feather type="corner-up-left" v-on:click="previousPage" />
      </div>
      <div class="houses">
        <vue-feather type="home" v-on:click="houseClick" />
      </div>
      <div class="logout">
        <vue-feather type="log-out" v-on:click="logout" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OwnerNavBar',
  methods: {
    logout() {
      const store = this.$store;
      alert("Seção encerrada");
      store.commit("logout");
      this.$router.go("/login");
    },
    previousPage() {
      this.$router.go(-1);
    },
    houseClick() {
      this.$router.push('/houses');
    }
  }
}
</script>
<style>

#nav {
  width: 100%;
  padding:30px;
  background: #4661ED;
}

.icons {
  width: 120px;
  color: white;
  margin-left: 90%;
  display: flex;
  justify-content: space-between;
} 
</style>