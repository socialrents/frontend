<template>
  <notifications position="top right" class="my-notification" />
  <router-view />
</template>

<script>

export default {
  name: 'App'
}
</script>

<style global>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Roboto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.my-notification {
  margin-top: 80px;
}
</style>
