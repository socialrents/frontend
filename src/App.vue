<template>
  <notifications position="top right" class="my-notification" />
  <router-view />
</template>

<script>

export default {
  name: 'App',
  data() {
    return { loaded: false };
  },
  async mounted() {
    await this.$store.dispatch("initialCredentialCheck");
    this.loaded = true;
  }
}
</script>

<style global>
*{
  margin: 0;
  padding: 0;
  font-family: Roboto;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.my-notification {
  margin-top: 120px;
}
</style>
