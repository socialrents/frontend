<template>
  <div id="nav">
    <div class="logo" v-on:click="homePage">SocialRents</div>
    <div class="icons">
      <div class="profile">
        <vue-feather type="user" />
      </div>
      <div class="previous">
        <vue-feather type="corner-up-left" v-on:click="previousPage" />
      </div>
      <div class="logout">
        <vue-feather type="log-out" v-on:click="logout" />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'NavBar',
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
    homePage() {
      this.$router.push('/clientPage');
    }
  }
}
</script>
<style>

 #nav {
  padding:30px;
  background: #24A7F1;
  display: flex;
}
.logo {
  color: white;
  font-weight: bold;
  font-size: 20px;
}
.logo:hover {
  cursor: pointer;
}
.icons {
  width: 100px;
  color: white;
  margin-left: 85%;
  display: flex;
  justify-content: space-between;
} 
</style>