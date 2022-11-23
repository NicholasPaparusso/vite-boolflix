import { reactive } from "vue";

export const store = reactive({
  trendApi: 'https://api.themoviedb.org/3/trending/all/day?api_key=eb176afe1a12790e8da0dee303e225fd&language=it-IT' ,
  generalApi: 'https://api.themoviedb.org/3/search/',
  apiPar: {
    api_key : 'eb176afe1a12790e8da0dee303e225fd',
    query: 'matrix',
    language: 'it-IT',
  },
  ObjToSearch:"",
  type : "",
  trendData: [],
  isApiLoaded: false,
  isInputOn : false,
  tv:[],
  movie:[],
})

