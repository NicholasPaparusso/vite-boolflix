<script>
import axios from 'axios';
import { store } from './data/store'
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
export default {
  name: 'App',

  components:{
    AppHeader,
    AppMain,
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
    this.getApi(store.trendApi)
  }

}
</script>

<template>

  <AppHeader/>
  <AppMain/>
</template>

<style lang="scss">

@import './style/general.scss' ;

</style>