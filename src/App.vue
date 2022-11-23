<script>
import axios from 'axios';
import { store } from './data/store'
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppJumbo from './components/AppJumbo.vue';
export default {
  name: 'App',

  components:{
    AppHeader,
    AppMain,
    AppJumbo
  },

  data(){
    return{
      store,
    }
  },

  methods: {

     getApi(api){
       store.isApiLoaded = false ;
       axios.get(api, {
         params:{
          adult: true,
          query: store.ObjToSearch,
         }
       })
       .then(result => {
         store.trendData = result.data.results
         console.log(store.trendtData);
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
    this.getApi(store.trendApi)
  }

}
</script>

<template>

  <AppHeader @startSearch ='search()'/>
  <AppJumbo/>
  <AppMain/>
</template>

<style lang="scss">

@import './style/general.scss' ;

</style>