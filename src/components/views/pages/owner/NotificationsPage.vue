<template>
  <div>
    <div id="nav-bar">
      <OwnerNavBar />
    </div>
     <div class="main-page">
      <div v-if="this.notifications.length == 0">
        <h2 class="noNotifTitle" >Nenhuma notificação no momento!</h2>
      </div>
      <div v-else>
        <h2>Suas notificações</h2>
        <div class="notifications" v-for="(item, index) in this.notifications" v-bind:key="index">
            <NotificationCard :notification='item' />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import OwnerNavBar from './OwnerNavBar.vue';
import NotificationCard from './NotificationCard.vue';
import Api from '../../../../services/api';

export default {
  name: 'NotificationsPage',
  components: { OwnerNavBar, NotificationCard },
  data() {
    return {
      notifications: [1, 2]
    }
  },
  async mounted() {
    const user = JSON.parse(localStorage.getItem("socialrents-user"))
    const response = await Api.get(`/notifications/${user.id}`);
    this.notifications = response.data;
    console.log(response.data)
  },
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
.noNotifTitle {
  margin-top: 150px;
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