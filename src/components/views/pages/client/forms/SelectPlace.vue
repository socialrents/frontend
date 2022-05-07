<template>
  <div>
    <ClientNavBar />
    <div class="selectPlaceForm">
    <div class="selectPlace">
        <h2 class="title">Escolha um imóvel para realizar seu evento</h2> 
        <div class="locationFilter">
          <dropdown class="citySelection"
                  :options="districts"
                  :selected="districtSelected"
                  v-on:updateOption="selectDistrict"
                  :placeholder="'Selecione um bairro'"
        />
        </div>
        <div v-if="loadingPlaces">
          <h2 class="noPlacesTitle">Carregando imóveis...</h2>
        </div>
        <div v-else class="places" v-for="(item, index) in this.places" v-bind:key="index">
            <PlaceCardSelect :place='item' />  
        </div> 
    </div>
    </div>
  </div>
</template>

<script>

import dropdown from 'vue-dropdowns';
import ClientNavBar from '../ClientNavBar.vue';
import PlaceCardSelect from '../../owner/PlaceCardSelect.vue';
import Api from '../../../../../services/api.js'

export default {
    name: "SelectPlaceForm",
    components: { ClientNavBar, PlaceCardSelect, 'dropdown': dropdown },
    data() {
        return {
            places: [],
            loadingPlaces: true,
            districts: [
              {name: 'Barra do corda'},
              {name: 'Grajaú'}
            ],
            districtSelected: {
              name: "Selecione um bairro"
            }
        }
    },
    methods: {
      selectDistrict(payload) {
        this.districtSelected.name = payload;
      }
    },
    async mounted() {
        const response = await Api.get(`/allPlaces`);
        console.log(response.data);
        this.places = response.data;
        this.loadingPlaces = false;
    }
}
</script>

<style scoped>
.title {
  color: #585858;
  margin-bottom: 50px;
}
.locationFilter {
  margin: 15px;
  display: flex;
  justify-content: flex-end;
}
.locationFilter .citySelection {
  border: 2px solid #838383;
  border-radius: 3px;
  background: #f3f3f3;
}
.selectPlaceForm {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
} 
.noPlacesTitle {
  margin-top: 20px;
  color: #919191;
}

</style>
