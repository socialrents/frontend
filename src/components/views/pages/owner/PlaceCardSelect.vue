<template>
    <div class="place-card">
        <div class='cardButtons'>
            <MainButton class="select-place" :msg="'Selecionar'" v-on:click="selectPlace(place.id)" />
        </div>
        <div class="location">
            <img class="houseImg" src="../../../../assets/house.jpg">
            <div class='address'>
            Cidade: {{ place.city }} <br>
            Bairro: {{ place.district }} <br>
            Valor da diária: {{ place.price }} <br>
            Metros quadrados: {{ place.sqrmeters }} <br>
            Proprietário: {{ place.owner }} <br>
            </div>
        </div>
        <div class="description">
        Descrição: {{ place.description }} 
        </div>
        <div class="total">
          <div class="totalPrice">Total: R$ {{ total }}</div>
        </div> 
    </div>
</template>

<script>

import MainButton from '../../../buttons/MainButton.vue';
import Api from '../../../../services/api';

export default {
  name: 'PlaceCardSelect',
  components: { MainButton },
  props: {
    place: Object
  },
  data() {
    return {
      total: 0
    }
  },
  methods: {
    async selectPlace(id) {
        console.log(this.place)
        this.$swal.fire({
        title: 'Confirmar seleção de imóvel?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Não',
        confirmButtonText: 'Sim'
      }).then(async (result) => {
        if (result.isConfirmed) {

          console.log(this.place);
          
          const responseParty = await Api.get('/lastPartyId');
          var partyId = responseParty.data

          partyId = {...partyId}.partyId;
          
          const reservation = {
            id_party: partyId,
            id_house: id,
            total: this.total
          }
          console.log(reservation);
          const response = await Api.post('/createReservation', reservation);
          if (response.status === 200) {
            const notification = {
              id_house: this.place.id,
              id_party: partyId,
              id_owner: this.place.id_owner
            }
            // Criar notificação no BD
            console.log(notification);

						this.$swal.fire({
							title: 'solicitação enviada com sucesso!',
							icon: 'success'
						})
            this.$router.push('/clientPage');
					} else {
						this.$swal.fire({
							title: 'Erro ao enviar solicitação!',
							icon: 'error'
						})
					}
        }
      })
    }
  },
  mounted() {
    const totalPrice = this.place.price.substring(3);
    const formatter = new Intl.NumberFormat("en-US", {
      style: 'currency',
      currency: 'BRL'
    })
    
    this.total = parseFloat(totalPrice) * parseInt(this.$route.params.nOfDays);
    // alert(formatter.format(this.total))
    this.total = formatter.format(this.total);
  }
}
</script>
<style lang="css">
.total {
  margin-top: 60px;
  margin-left: 80%;
  color: white;
}
.totalPrice {
  background: #E94747;
  width: 150px;
	height: 20px;
	border-radius: 3px;
	border: 0 none;
	color: #ffff;
  text-align: center;
}
  .place-card {
  width: 600px;
  height:200px;
  background: #f3f3f3;
  margin: 10px;
  padding: 50px;
}

.place-card .houseImg {
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