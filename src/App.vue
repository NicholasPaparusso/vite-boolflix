<script>
import axios from 'axios';
import { store } from './data/store'
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppJumbo from './components/AppJumbo.vue';
import AppTrend from './components/AppTrend.vue';
import AppNoResult from './components/AppNoResult.vue'
export default {
  name: 'App',

  components:{
    AppHeader,
    AppTrend,
    AppJumbo,
    AppMain,
    AppNoResult,
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
         console.log(store[type]);
         store.isApiLoaded = true
       })

       .catch(error=>{
         store.isApiLoaded = true;
         console.log('errore');
       })
      },

      search(){
        store.movie = [];
        store.tv = [];
        store.firstSearch = true
        if(store.type===''){
          this.getApi('movie')
          this.getApi('tv')
        }else{
          this.getApi(store.type)
        }

        
      }
  },
  mounted(){
    this.getTrendsApi()
  }

}
</script>

<template>

  <AppHeader @startSearch ='search()'/>
  <AppJumbo v-if="store.movie.length === 0 && store.tv.length === 0"/>
  <AppNoResult v-if="store.movie.length === 0 && store.tv.length === 0 && store.firstSearch === true"/>
  <AppTrend v-if="store.movie.length === 0 && store.tv.length === 0" />
  <AppMain v-if="store.movie.length > 0 && store.isApiLoaded === true"  title="Film" type="movie"/>
  <AppMain v-if="store.tv.length > 0 && store.isApiLoaded === true" title="Serie Tv" type="tv"/>
</template>

<style lang="scss">

@import './style/general.scss' ;

</style>