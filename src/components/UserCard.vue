<template>
  <div id="card">
    <vue-feather class='editProfile' vue-feather type="edit" v-on:click="editProfile()"/>
    <div class="userInfo">
      <img id="user-img" src="../assets/user.jpg" alt="">
      <div class="line"></div>
      <h4 id="user-name">{{ user.login }}</h4>
    </div>
  </div>
</template>

<script>

export default {
  name: 'UserCard',
  props: {
    user: Object
  },
  methods: {
    async editProfile() {
      this.$router.push("editUser");
    }
  }
}
</script>

<style>
#card {
  margin-left: 50px;
  background: #F6F6F6;
  width: 250px;
  height: 120px;
}
.userInfo {
  display: flex;
}
#user-img {
  margin-left: 15px;
  width: 60px;
  height: 60px;
}
.editProfile {
  margin-left: 90%;
  margin-top: 10px;
  width: 20Px;
  height: 20px;
  cursor: pointer;
}
.line {
	height: 40px;
	border-left: 2px solid;
	opacity: 0.2;
	margin-right: 15px;
  margin-left: 20px;
  margin-top: 10px;
}
#user-name {
  margin-top: 20px;
}
</style>