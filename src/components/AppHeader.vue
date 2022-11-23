<script>
import { store } from '../data/store';
import AppSearch from './AppSearch.vue';
export default {
name: 'AppHeader',

components:{
  AppSearch,
},

data(){
  return{
    ddActive: false,
    store,
  }
}
}
</script>

<template>
  <header >

    <div class="container-fluid">
     
     <div class="row d-flex  justify-items-center">
 
       <div class="col-2 col-md-4 col-lg-5 col-xl-6 col-xxl-8 d-flex align-items-baseline pt-2">
         <div class="logo me d-none d-md-block">
           <img src="/boolflix.png" alt="">
         </div>

         <ul class="nav">
          <li><a class="active" href="#">Home</a></li>
          <li class="d-none d-lg-block"><a href="#">Serie TV</a></li>
          <li class="d-none d-lg-block"><a href="#">Film</a></li>
          <li class="d-none d-xl-block"><a href="#">Nuovi e popolari</a></li>
          <li class="d-none d-xxl-block"><a href="#">Sfoglia per lingua</a></li>
          <li class="d-none d-xxl-block"><a href="#">La mia lista</a></li>
          <li  class="hamburger d-xxl-none"><i class="fa-solid fa-bars"></i>
            <ul class="hamburger-menu">
              <li class="d-block d-lg-none"><a href="#">Serie TV</a></li>
              <li class="d-block d-lg-none"><a href="#">Film</a></li>
              <li class="d-block d-xl-none"><a href="#">Nuovi e popolari</a></li>
              <li class="d-block d-xxl-none"><a href="#">Sfoglia per lingua</a></li>
               <li class="d-block d-xxl-none"><a href="#">La mia lista</a></li>
            </ul>
          </li>
         </ul>

       </div>
 
 
       <div class="col-10 col-md-8 col-lg-7 col-xl-6 col-xxl-4 d-flex align-items-center">
        
        <AppSearch @startSearch="$emit('startSearch')" /> 

        <div @mouseenter="ddActive = true" class="user-icon">
          <img src="../assets/img/user.png" alt="">
          <i class="fa-solid fa-chevron-down"></i>

          <div @mouseleave="ddActive = false" v-if="ddActive === true" class="dropdown d-flex flex-column">

            <div>
              <i class="fa-solid fa-chevron-up"></i>
            </div>
            
            <div class="mb-3">
              <img class="me-2" src="../assets/img/user.png" alt="user-logo">
              <a href="#">User-1</a>
            </div>

            <div class="mb-3">
              <img class="me-2" src="../assets/img/kid.png" alt="kid-logo">
              <a href="#">Bambini</a>
            </div>

            <div class="mb-3">
              <i class="fa-solid fa-pencil me-2"></i>
              <a href="#">Gestisci i profili</a>
            </div>

            <div class="mb-3">
              <i class="fa-solid fa-users-rectangle me-2"></i>
              <a href="#">Trasferisci profilo</a>
            </div>

            <div class="mb-3">
              <i class="fa-solid fa-user me-2"></i>
              <a href="#">Account</a>
            </div>

            <div class="mb-3">
              <i class="fa-regular fa-circle-question me-2"></i>
              <a href="#">Centro Assistenza</a>
            </div>

            <div class="logout">
              <a href="#">Esci da Boolflix</a>
            </div>

          </div>

        </div>
       </div>
 
     </div>
 
   </div>

  </header>
</template>


<style lang="scss" scoped>
@import '../style/partials/vars';

header{
  z-index: 99;
  background-color: $bg-color;
  height: 80px;
  width: 100%;
  position: fixed;
  top: 0;
  transition: all .5s linear;
  padding: 10px 40px;
  &:hover{
    background-color: darken($bg-color, 10) ;
  }


  .logo{
    margin-right: 20px;
    img{
      width: 120px;
    }
    
   flex-shrink: 0;
  }

  ul{
    display: flex;


    li{
      margin: 0 10px;

      a{
        font-size: .9em;
        &:hover, &.active{
        color: $text-color;
      }
      }

    }
  }

  .user-icon {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
    position: relative;
    top: 0;
      img{
        width: 30px;
        height: 30px;
        border-radius: 5px;
        cursor: pointer;
      }

    i{
      cursor: pointer;
      transition: all .5s linear;

    }

    &:hover .fa-chevron-down{
      transform: rotate(180deg);
    }
  }
}

.dropdown{
  position: absolute;
  top: 55px;
  right: 50%;
  width: 250px;
  background-color:  darken($bg-color, 10);
  padding: 15px 20px;
  font-size: 0.9em;
  
  & div:first-child{
    position: absolute;
    top: -20px;
    right: 0;
  }

  a{
    &:hover{
        color: $text-color;
      }
  }

  i{
    font-size: 1.3em;
    width: 30px;
    text-align: center;
  }

  .logout{
    text-align: center;

    &::before{
      content: "";
      display: block;
      margin-bottom: 10px;
      width: 100%;
      border-top: 1px solid $text-color;
    }
  }
}

.hamburger{
  position: relative;
  top: 0;
}

.hamburger-menu{
  display: flex;
  width: 166px;
  padding: 10px;
  flex-direction: column;
  position: absolute;
  left: 0;
  top: 53px;
  background-color: rgba($color: #000000, $alpha: .8); 
  a:hover{
    color: white;
  }
}

</style>