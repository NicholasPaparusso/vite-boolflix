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
    
  },

  getImage(){
    return `https://image.tmdb.org/t/p/w300/${this.obj.poster_path}`
  }
}

}
</script>

<template>

  
    <div class="np-card">
      <img :src="getImage()" alt="">

      <div class="info">
   
          <span>{{obj.original_title || obj.name}}</span>
          <span v-if="getFlag()" :class="getFlag()"></span> <span v-else>{{obj.original_language}}</span>
          <h6 v-if="obj.title !== obj.original_title">{{obj.title}}</h6>

          <div class="vote">
            <div class="e-star">
               <i v-for="(n, index) in 5" :key="index" class="fa-regular fa-star"></i>
            </div>

          <div class="f-star">
            <i v-for="(n , index) in getVote()" :key="index" class="fa-solid fa-star"></i>
          </div>
          </div>
         
          
          <div class="description">
            <p>
              {{obj.overview}}
            </p>
          </div>
     
      </div>

  </div>

</template>

<style lang="scss" scoped>

@import '../style/partials/vars' ;
  .np-card{
    max-width: calc((100% / 5) - 30px);
    margin-right: 30px;
    cursor: pointer;
    position: relative;
    top: 0;
    border-radius: 10px;
    transition: all .3s ;

    &:hover .info{
      display: block;
    }
    
    &:hover{
      transform: scale(1.15);
      z-index: 2;
    }

    img{
      border-radius: 10px;
    }
  }
  .fi{
    position: unset;
  }


  .info{
    padding: 10px;

    position: absolute;
    background-color: $bg-color ;
    bottom: 0px;
    padding-top: 20px ;
    font-size: 0.8em;
    display: none;
    animation: slide-up 1s ;

    @keyframes slide-up {
      from{bottom: -20%}
      to{bottom: 0px;}
    }
    
    background: rgba($color: #000000, $alpha: .7);
    span{
      margin-right: 5px;

      &:first-child{
        font-size: 1.3em;
      }
    }
    .vote{
      height: 25px;
      position: relative;
      top: 0;
    }
    .e-star, .f-star{
      position: absolute;
      top: 0;
    }
    .description{
      overflow-y: auto;
      height: 80px;
      scrollbar-width: thin;
    }
  }
</style>
