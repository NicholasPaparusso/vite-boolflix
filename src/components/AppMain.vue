<script>

import { store } from '../data/store';
import AppCard from './AppCard.vue';

export default {
  name: 'AppMain',

  props:{
    title: String,
    type: String
  },

  components:{
    AppCard,
  }, 

  data(){
    return{
      store,
    }
  }
}
</script>

<template>
  <h2>{{title}}</h2>
  <div class="container-fluid np">
    <div class="row">
      <AppCard
      v-for="(item, index) in store[type]"
      :key="index"
      :obj="item" />
    </div>
  </div>

</template>


<style lang="scss" scoped>

h2{
  margin-top: 80px ;
  padding: 50px;
}
  .np{
    padding: 0 50px;
    margin-bottom: 80px;

    .row{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      row-gap: 40px;
    }
  }
</style>