import { createStore } from 'vuex'
const dataURL = "https://masood-b.github.io/vueJsonE-Commerse/server.json"
export default createStore({
  state: {
    manga: null,
    about: null
  },
  getters: {
  },
  mutations: {
    setManga(state , products) {
      state.manga = products
    },
    setData(state, dataContent){
      state.about = dataContent
    },
  },
  actions: {
    async jsData (context){
     try{
      let res = await fetch(dataURL);
      let {Manga} = await res.json();
      if (Manga){
        context.commit("setManga", Manga);
      }
     }catch (event){
      console.log(event.message)
     }
    },
    async jsData1(context){
      try{
        let pes = await fetch(dataURL);
        let {About} = await pes.json();
      if (About){
        context.commit("setData", About);
      }
      }catch (event){
        console.log(event.message)
       }
    }
  },
  modules: {
  }
})
