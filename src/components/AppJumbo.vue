<script>

import { store } from '../data/store'

export default {
  name: 'AppJumbo',

  data(){
    return{
      store,
      counter: 0,
      clock : null,
    }
  },

  methods:{
    changeImg(isNext){
      isNext ? this.counter++ : this.counter-- ;
      if(this.counter === this.store.trendData.length) this.counter = 0 ;
      if(this.counter < 0)this.counter = this.store.trendData.length -1;
    },

    autoplay(isPause,isNext){
      if(isPause) {
        clearInterval(this.clock);
        return;
      }

      this.clock = setInterval(()=>{
        this.changeImg(isNext)
      }, 4000);
    },
  },

  mounted(){
    this.autoplay(false, true)
    console.log(this.isPause);
  },
}
</script>

<template>
    <div class="carousel"  @mouseenter="autoplay(true,true)" @mouseleave="autoplay(false,true)">
      <div v-for="(movie ,index ) in store.trendData" in :key="index" class="item" v-show="index === counter" >
        <div class="content d-flex">
          <img :src="'https://image.tmdb.org/t/p/w1280/'+movie.poster_path" alt="">
          <div class="info p-5">
            <h1>
              {{movie.title || movie.name}}
            </h1>
            <p class="description d-none d-xl-block">{{movie.overview}}</p>

            <div class="cta">
              <div class="np-btn"><span>Riproduci</span> <i class="fa-solid fa-play"></i></div>
            <div class="np-btn"> <span>Altre info </span> <i class="fa-solid fa-info"></i></div>
            </div>

          </div>
        </div>
      </div>
    </div>
</template>

<style lang="scss" scoped>

@import '../style/partials/vars' ;
  .carousel{
    margin-top: 80px ;
    height: 80vh;
    overflow: hidden;
    .item{
      position: relative;
      top: 0;
      margin: 0 auto;
      width: 100%;
      height: 100%;
      background-color: $bg-color;
      z-index: 3;

      img{
        width: 100%;
        object-position: 0 -200px;
        object-fit: cover;
      }
    }

    .info{
     position: absolute;
     bottom:  1%; 
     left: 1%;
     width: 35%;
     min-width: 420px;
     background-color: rgba($color: #000000, $alpha: .3);
     transition: all .3s;
     &:hover{
      background-color: rgba(0,0,0, .5)
    }
    }
  

    .description{
       margin-top: 30px;
       max-height: 300px;
       overflow: auto;
       overflow-x: hidden;
    }

    .cta{
      margin-top: 10px;
      display: flex;
      gap: 50px;

      .np-btn{
        flex-shrink: 0;
        width: 150px;
        height: 50px;
        border-radius: 10px;
        text-align: center;
        line-height: 50px;
        background-color: lightgrey;
        color: black;
        font-size: 1.2em;
        cursor: pointer;
        transition: all .2s linear;
        &:hover{
          transform: scale(1.1);
          background-color: whitesmoke;
        }

        & i{
          font-size: 1.3em;
          margin-left: .5em;
        }
      }
    }
  }

</style>