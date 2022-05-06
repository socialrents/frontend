<template>
    <div class="place-card">
        <div class='cardButtons'>
            <MainButton class="select-place" :msg="'Selecionar'" />
        </div>
        <div class="location">
            <div class='houseImg' />
            <div class='address'>
            Cidade: {{ place.city }} <br>
            Bairro {{ place.district }} <br>
            Valor da diária: {{place.price }} <br>
            </div>
        </div>
        <div class="description">
        Descrição: {{ place.description }} 
        </div> 
    </div>
</template>

<script>

import MainButton from '../../../buttons/MainButton.vue';

export default {
  name: 'PlaceCard',
  components: { MainButton },
  props: {
    place: Object
  }
}
</script>
<style lang="css">
  .place-card {
  width: 600px;
  height:200px;
  background: #f3f3f3;
  margin: 10px;
  padding: 50px;
}

.place-card .houseImg {
  border: 1px dashed red;
  width: 150px;
  height: 80px;
}
.place-card .cardButtons {
	margin-left: 90%;
	width: 100px;
	margin-top: -30px;
	height: 20px;
	display: flex;
}

.place-card .cardButtons .select-place {
    background: #1cc738;
}

.place-card .location {
	display: flex;
}
.place-card .location .address {
	margin-left: 30px;
}
.description {
  width: 400px;
  margin-top: 50px;
}
</style>