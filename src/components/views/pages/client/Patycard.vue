<template lang="html">
  <div class="party-card">
    <div class="location">
      Cidade: {{ party.city }} <br>
      Bairro {{ party.district }} <br>
      Valor total: {{party.total }} <br>
    </div>
    <div class="description">
      Descrição: {{ party.description }} 
    </div> 
  </div>
</template>
<script>
export default {
  name: 'PartyCard',
  props: {
    party: Object
  }
}
</script>
<style lang="css">
  .party-card {
  width: 900px;
  height:300px;
  background: #f3f3f3;
  margin: 20px;
  padding: 50px;
}
.party-card .location {
 margin-left: 200px;
}
.description {
  width: 400px;
  margin-top: 100px;
}
</style>