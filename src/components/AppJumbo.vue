<script>

import { store } from '../data/store'

export default {
  name: 'AppJumbo',
  props:{
    item: Object,
  },

  data(){
    return{
      store,
    }
  },

  methods:{
      getImage(){
    return `https://image.tmdb.org/t/p/w1920/${this.store.trendData.poster_path}`
  }
  },
}
</script>

<template>
    <div class="carousel">
      <div v-for="(movie ,index ) in store.trendData" in :key="index" class="item">
        <div class="content d-flex">
          <img :src="'https://image.tmdb.org/t/p/w780/'+movie.poster_path" alt="">
          <div class="info p-5">
            <h1>
              {{movie.title || movie.name}}
            </h1>
            <p class="description">{{movie.overview}}</p>

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
      margin: 0 auto;
      width: 100%;
      height: 100%;
      background-color: $bg-color;
      z-index: 3;
      display: none;

      &:first-of-type{
        display: block;
      }

      img{
        height: 100%;
        width: 65%;
        object-position: top;
        object-fit: cover;
      }
    }

    .info{
      width: 35%;
      background-color: rgba($color: #000000, $alpha: .6);
    }

    .description{
      height: 200px;
      overflow: auto;
     margin-top: 50px;
    }

    .cta{
      margin-top: 50px;
      display: flex;
      gap: 50px;

      .np-btn{
        width: 200px;
        height: 60px;
        border-radius: 10px;
        text-align: center;
        line-height: 60px;
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
          font-size: 1.5em;
          margin-left: 5px;
        }

        &:first-of-type i{
          
        }
      }
    }
  }

</style>