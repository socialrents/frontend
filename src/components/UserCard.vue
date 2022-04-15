<template>
  <div id="card">
    <img id="user-img" src="../assets/user.jpg" alt="">
    <div class="line"></div>
    <h4 id="user-name">{{ user.login }}</h4>
  </div>
</template>

<script>
export default {
  name: 'UserCard',
  props: {
    user: Object
  }
}
</script>

<style>
#card {
  margin-left: 50px;
  background: #F6F6F6;
  width: 250px;
  height: 100px;
  display: flex;
}
#user-img {
  margin-top: 15px;
  margin-left: 15px;
  width: 60px;
  height: 60px;
}
.line {
	height: 40px;
	margin-top: 5px;
	border-left: 2px solid;
	opacity: 0.2;
	margin-right: 15px;
  margin-left: 20px;
  margin-top: 25px;
}
#user-name {
  margin-top: 35px;
}
</style>