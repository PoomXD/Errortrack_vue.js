<template>
  <div class="about row">
    <h1>This is an about page</h1>
    <button class="btn btn-info" @click="getAirport">Get Airport</button>
  </div>
</template>

<script>
import AirportService from '@/services/api/airport.service';

export default {
  name:'about',
  methods:{
    getAirport(){
      console.log('getAirport')
      AirportService.examAirport()
      .then((result) => {
        console.log('result',result)
        
      }).catch((err) => {
        
      });
    }
  }
}
</script>