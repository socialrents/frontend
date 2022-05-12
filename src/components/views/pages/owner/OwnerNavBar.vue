<template>
  <div id="nav">
    <div class="logo" v-on:click="homePage">SocialRents</div>
    <div class="icons">
      <!-- <div class="profile">
        <vue-feather type="user" />
      </div> -->
      <div class="previous">
        <vue-feather type="corner-up-left" v-on:click="previousPage" />
      </div>
      <div class="notifications">
        <!-- <vue-feather type="bell" v-on:click="bellClick" /> -->
        <NotificationButton />
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
import NotificationButton from '../../../buttons/NotificationButton.vue';

export default {
  name: 'OwnerNavBar',
  components: { NotificationButton },
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
    },
    homePage() {
      this.$router.push('/ownerPage');
    },
    bellClick() {
      this.$router.push('/notifications');
    }
  }
}
</script>
<style scoped>

#nav {
  width: 100%;
  padding:30px;
  background: #4661ED;
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
  width: 150px;
  color: white;
  margin-left: 78%;
  display: flex;
  justify-content: space-between;
} 
</style>