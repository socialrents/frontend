<template>
  <div>
    <ClientNavBar />
    <div class="selectPlaceForm">
    <div class="selectPlace">
        <h2 class="title">Escolha um imóvel para realizar seu evento</h2> 
        <div class="places" v-for="(item, index) in this.places" v-bind:key="index">
            <PlaceCard :place='item' />  
        </div> 
    </div>
    </div>
  </div>
</template>

<script>

import ClientNavBar from '../ClientNavBar.vue';
import PlaceCard from '../../owner/PlaceCard.vue';
import Api from '../../../../../services/api.js'

export default {
    name: "SelectPlaceForm",
    components: { ClientNavBar, PlaceCard },
    data() {
        return {
            places: []
        }
    },
    async mounted() {
        const city = this.$route.params.city;
        const response = await Api.get(`/allPlaces/${city}`);
        console.log(response.data);
        this.places = response.data;
    }
}
</script>

<style scoped>
.title {
  color: #585858;
  margin-bottom: 50px;
}
.selectPlaceForm {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
} 

</style>
