<script>
export default {
name: 'AppCard',
props:{
  obj: Object
}

}
</script>

<template>
  <div class="np-card"></div>
  <img src="" alt="">
  <ul>
    <li>{{obj.original_title}}</li>
    <li>{{obj.title}}</li>
    <li>{{obj.overview}}</li>
    <li>{{obj.vote_average}}</li>
    <li>{{obj.original_language}}</li>

  </ul>
</template>


<style lang="scss" scoped>

</style>