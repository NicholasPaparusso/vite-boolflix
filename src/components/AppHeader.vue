<script>
import AppSearch from './AppSearch.vue';
export default {
name: 'AppHeader',

components:{
  AppSearch,
},

data(){
  return{
    ddActive: false,
  }
}
}
</script>

<template>
  <header>

    <div class="container-fluid">
     
     <div class="row">
 
       <div class="col-6 d-flex align-items-baseline pt-2">
         <div class="logo me-2">
           <img src="/boolflix.png" alt="">
         </div>

         <ul>
          <li><a class="active" href="#">Home</a></li>
          <li><a href="#">Serie TV</a></li>
          <li><a href="#">Film</a></li>
          <li><a href="#">Nuovi e popolari</a></li>
          <li><a href="#">Sfoglia per lingua</a></li>
          <li><a href="#">La mia lista</a></li>
         </ul>
       </div>
 
 
       <div class="col-3 offset-3 d-flex align-items-center">
        
        <AppSearch/>

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
  height: 80px;
  width: 100%;
  position: fixed;
  margin-bottom: 70px;
  transition: all .5s linear;
  padding: 10px 40px;
  &:hover{
    background-color: darken($bg-color, 10) ;
  }


  .logo{
    width: 120px;
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


</style>