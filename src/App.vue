<script>
import axios from 'axios';
import { store } from './data/store'
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppSearch from './components/AppSearch.vue';
export default {
  name: 'App',

  components:{
    AppHeader,
    AppMain,
    AppSearch,
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
         store.filmListData = result.data.results
         console.log(store.filmListData);
         store.isApiLoaded = true
       })

       .catch(error=>{
         store.isApiLoaded = true;
         console.log('errore');
       })
      },

      Search(){
        this.getApi(store.multiApi)
        
      }
  },
  mounted(){
    this.getApi(store.trendApi, store, axios)
  }

}
</script>

<template>
  <AppHeader/>
  <AppSearch @startSearch="Search()" />
  <AppMain/>
</template>

<style lang="scss">

@import './style/general.scss' ;

</style>