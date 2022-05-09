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
        <MainButton class="showAll" :msg="'Mostrar tudo'" v-on:click="showAllPlaces" />
        </div>
        <div v-if="this.places.length === 0">
          <h3 class="noPlacesTitle">Nenhum imóvel encontrado!</h3>
        </div>
        <div v-else>
          <div class="places" v-for="(item, index) in this.places" v-bind:key="index">
            <PlaceCardSelect :place='item' />  
          </div>
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
import MainButton from '../../../../buttons/MainButton.vue'

export default {
    name: "SelectPlaceForm",
    components: { ClientNavBar, PlaceCardSelect, 'dropdown': dropdown, MainButton },
    data() {
        return {
            places: [],
            placesFiltered: [],
            loadingPlaces: true,
            districts: [],
            districtSelected: {
              name: "Selecione um bairro"
            }
        }
    },
    methods: {
      async selectDistrict(payload) {
        const district = {...payload}
        this.districtSelected.name = district.name;

        const response = await Api.get(`allPlaces/${this.$route.params.city}/${district.name}`);
        this.places = []
        for (const place of response.data) {
          this.places.push(place);
        }
        console.log(this.places);
        // this.places = await this.places.filter((place) => place.district === district.name)
      },
      async showAllPlaces() {
        const response = await Api.get(`/allPlaces/${this.$route.params.city}`);
        this.places = response.data;
      }
    },
    async mounted() {
        const cityName = this.$route.params.city;
        // const responsePlaces = await Api.get(`/allPlaces/${cityName}`);
        // this.places = responsePlaces.data;
        this.loadingPlaces = false;

        const responseDistricts = await Api.get(`/allDistricts/${cityName}`)

        this.districts = [];
        for (const district of responseDistricts.data) {
          this.districts.push(district);
        }
    }
}
</script>

<style scoped>
.showAll {
  background: #24A7F1;
  margin-top: 10px;
  margin-left: 20px;
}
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
  margin-top: 100px;
  margin-left: 20%;
  color: #919191;
}

</style>
