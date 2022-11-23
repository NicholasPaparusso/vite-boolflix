<script>
import { store } from '../data/store';
import AppCard from './AppCard.vue';

export default {
name: 'AppMain',

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

  <div class="container-fluid np">
    <AppCard
      v-for="(item, index) in store.trendData"
      :key="index"
      :obj="item" />
  </div>

</template>


<style lang="scss" scoped>
  .np{

    padding: 50px 100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 40px;
  }
</style>