<template lang="html">
  <div class="party-card">
	<div class='cardButtons'>
		<div class='editar'></div>
		<div class='remover'/>
	</div>
    <div class="location">
		<div class='houseImg' />
		<div class='address'>
		Cidade: {{ party.city }} <br>
		Bairro {{ party.district }} <br>
		Valor total: {{party.total }} <br>
		</div>
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
  width: 600px;
  height:200px;
  background: #f3f3f3;
  margin: 10px;
  padding: 50px;
}

.party-card .houseImg {
  border: 1px dashed red;
  width: 150px;
  height: 80px;
}
.party-card .cardButtons {
	margin-left: 96%;
	width: 50px;
	margin-top: -30px;
	height: 20px;
	display: flex;
}
.party-card .cardButtons .editar {
	background: #24A7F1;
	width: 100px;
	border-radius: 3px 0px 0px 3px;
}
.party-card .cardButtons .remover {
	background: #E94747;
	width: 100px;
	border-radius: 0px 3px 3px 0px;
}
.party-card .location {
	display: flex;
}
.party-card .location .address {
	margin-left: 30px;
}
.description {
  width: 400px;
  margin-top: 50px;
}
</style>