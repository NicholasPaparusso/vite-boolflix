<script>
import { store } from '../data/store';
export default {
name: 'AppMain',

data(){
  return{
    store,
  }
},

methods:{

}
}
</script>

<template>
  
<div class="me-3 d-flex w-100 d-flex align-items-center justify-content-end">
  <i @click="(store.isInputOn = true) && (store.ObjToSearch = '')" :class="{'hide': store.isInputOn}" class="fa-solid fa-magnifying-glass"></i>
  <i class="fa-solid fa-magnifying-glass" :class="{'active': store.isInputOn}"  v-show="store.isInputOn" ></i>
  <input @keyup.enter="$emit('startSearch')"   v-model.trim="store.ObjToSearch" :class="{'active': store.isInputOn}" type="text" placeholder="Titoli, Persone, Generi">
  <select v-model="store.type" name="" id="">
    <option selected value="">cerca</option>
    <option value="movie">Film</option>
    <option value="tv">Serie Tv</option>
    <option value="multi">All</option>
  </select>
</div>

</template>


<style lang="scss" scoped>

@import '../style/partials/vars' ;

div{
  position: relative;
  top: 0;
}

i{
  height: 30px;
  line-height: 30px;
  padding: 0 5px;
  cursor: pointer;
  transition: all .3s linear;
  z-index: 2;
  &.active{
    position: absolute;
    left: 0px;
    opacity: 1;
    animation: slide 1s;
  }
  &.hide{
    display: none;
  }


  &:hover{
    transform: scale(1.2);
  }
}

input{
  display: block;
  width: 70%;
  height: 30px  ;
  border: 1px solid $text-color;
  border-radius: 5px;
  min-width: 150px;
  height: 30px  ;
  outline: none;
  background-color: transparent ;
  padding: .5em 2em ;
  color: $text-color;
  font-size: .9em;
  position: absolute;
  left: 0;
  animation-name: slide;
  animation-duration: 1s;
  display: none;
 

  &.active{
    display: block;
  }

  &::placeholder{
    color: $text-color;
  }
}

@keyframes slide{
  from{ left: 15%; opacity: 0;}
  to {left: 0%; opacity: 1;}
  
}
      
select{
 background-color: $bg-color;
  width: 20%;
  min-width: 115px;
  border-radius: 5px ;
  color: $text-color;
  cursor: pointer;
  height: 30px;
  padding: 0 10px;
}
    

</style>