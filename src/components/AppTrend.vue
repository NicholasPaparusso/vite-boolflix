<script>
import { store } from '../data/store';
import AppCard from './AppCard.vue';

export default {
name: 'AppTrend',

components:{
  AppCard,
},

data(){
  return{
    store,
  }
},

}
</script>

<template>
  <h2>In primo piano</h2>
  <div class="container-fluid np">
    
    <AppCard
      v-for="(item, index) in store.trendData"
      :key="index"
      :obj="item" />
  </div>

</template>


<style lang="scss" scoped>

h2{
  padding: 50px;
}
  .np{

    padding: 0 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 40px;
  }
</style>