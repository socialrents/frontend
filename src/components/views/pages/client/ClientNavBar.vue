<template>
  <div id="nav">
    <div class="icons">
      <button>a</button>
      <button>b</button>
      <button>c</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'NavBar'
}
</script>
<style>

#nav {
  width: 100%;
  padding:30px;
  background: #24A7F1;
}

.icons {
  justify-content: space-around;
  margin-left: 90%;
}
.icons button {
  margin-left: 5px;
}
</style>