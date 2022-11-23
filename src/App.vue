<script>
import axios from 'axios';
import { store } from './data/store'
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppJumbo from './components/AppJumbo.vue';
import AppTrend from './components/AppTrend.vue';
export default {
  name: 'App',

  components:{
    AppHeader,
    AppTrend,
    AppJumbo,
    AppMain,
  },

  data(){
    return{
      store,
    }
  },

  methods: {
    
    getTrendsApi(){
      axios.get(store.trendApi)
       .then(result => {
         store.trendData = result.data.results  
       })
       .catch(error=>{
         console.log('errore');
       })
    },

     getApi(type){
       store.isApiLoaded = false ;
       axios.get( store.generalApi + type, { params: store.apiPar})
       .then(result => {
         store[type] = result.data.results
         store.isApiLoaded = true
       })

       .catch(error=>{
         store.isApiLoaded = true;
         console.log('errore');
       })
      },

      search(){
        this.getApi(store.multiApi)
        
      }
  },
  mounted(){
    this.getTrendsApi()
    this.getApi('movie')
    this.getApi('tv')
  }

}
</script>

<template>

  <AppHeader @startSearch ='search()'/>
  <AppJumbo/>
  <AppTrend/>
  <AppMain title="Film" type="movie"/>
  <AppMain title="Serie Tv" type="tv"/>
</template>

<style lang="scss">

@import './style/general.scss' ;

</style>