<script>
export default {
name: 'AppCard',
props:{
  obj: Object
},

data(){
  return
},

methods:{

  getVote(){
   return Math.ceil(this.obj.vote_average / 2)
  },

  getFlag(){
    if(this.obj.original_language === 'en'){
      return  `fi fi-gb`
    }else if(this.obj.original_language === 'it'){
      return `fi fi-it`
    }else if(this.obj.original_language === 'ja'){
      return `fi fi-jp`
    }else if(this.obj.original_language === 'ko'){
      return `fi fi-kr`
    }else if(this.obj.original_language === 'es'){
      return `fi fi-es`
    }
    
    else {return false}
    
  }
}

}
</script>

<template>
  <div class="np-card"></div>
  <img src="" alt="">
  <ul>
    <li>{{obj.original_title || obj.name}}</li>
    <li v-if="obj.title !== obj.original_title">{{obj.title}}</li>
    <li>{{obj.overview}}</li>
    <li>{{getVote()}}</li>
    <li><span v-if="getFlag()" :class="getFlag()"></span> <span v-else>{{obj.original_language}}</span></li>
 
  </ul>
  
</template>

<style lang="scss" scoped>
  .fi{
    position: unset;
  }
</style>

<!--  <span class="fi fi-it"></span>
  <span class="fi fi-gb"></span> 
  <span class="fi fi-ja"></span> 
  <span class="fi fi-ko"></span>  -->