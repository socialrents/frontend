<template>
  <vue-feather class="notification-container" :class="{ notify }" type="bell" v-on:click="bellClick" />
</template>

<script>
export default {
  name: "NotificationButton",
  props: {
    notify: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    bellClick() {
      this.$router.push("/notifications");
    },
  },
};
</script>

<style scoped>
.notification-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.notify::before {
  position: absolute;
  content: "";
  height: 7px;
  width: 7px;
  background-color: red;
  border-radius: 50%;
  left: 120%;
  top: 0px;
  transform: translateX(-15px);
}
</style>