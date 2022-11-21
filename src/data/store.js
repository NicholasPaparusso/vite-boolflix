import { reactive } from "vue";

export const store = reactive({
  trendApi: 'https://api.themoviedb.org/3/trending/all/day?api_key=eb176afe1a12790e8da0dee303e225fd&language=it-IT' ,
  ObjToSearch:"",
  isInputOn : false,
  filmApi: 'https://api.themoviedb.org/3/search/movie?api_key=eb176afe1a12790e8da0dee303e225fd&language=it-IT',
  multiApi: 'https://api.themoviedb.org/3/search/keyword?api_key=eb176afe1a12790e8da0dee303e225fd&language=it-IT&page=1&include_adult=true',
  tvApi: 'https://api.themoviedb.org/3/search/tv?api_key=eb176afe1a12790e8da0dee303e225fd&language=it-IT&page=1&include_adult=true'
})


/* film generali https://api.themoviedb.org/3/search/movie?api_key=eb176afe1a12790e8da0dee303e225fd&language=it-IT*/ 
/* multi-ricerca https://api.themoviedb.org/3/search/keyword?api_key=eb176afe1a12790e8da0dee303e225fd&language=it-IT&page=1&include_adult=true*/ 
/* serie tv https://api.themoviedb.org/3/search/tv?api_key=eb176afe1a12790e8da0dee303e225fd&language=it-IT&page=1&include_adult=true */ 
/**/ 
/**/ 
/**/ 
/**/ 