
const getApi = (api, store, axios) =>{
  store.isApiLoaded = false ;
  axios.get(api, {
    params:{
      adult: true,
      query: store.objToSearch,
      
    }
  })
  .then(result => {
    store.filmListData = result.data.results
    console.log(store.filmListData);
    store.isApiLoaded = true
  })

  .catch(error=>{
    store.isApiLoaded = true;
    console.log('errore');
  })
}

export { getApi }