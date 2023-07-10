<template>
    <div class="container">
      <div class="row justify-content-center gap-2 d-flex" >
          <div class="card" v-for="data in products" style="width: 18rem;" :key="data.id">
                <img :src="data.picture" class="card-img-top" alt="..."  loading="lazy" style="height:25rem">
                <div class="card-body">
                  <h5 class="card-title"><strong>{{data.name}}</strong></h5>
                  <div class="overflow-auto"><p class="lead card-text">{{data.description}}</p></div>
                  <p class="lead card-text">Price: R{{data.price}}</p>
                  <router-link :to="{ name: 'singlepage', params:{id: data.id}, query:{name: data.name, price: data.price, description: data.description, picture: data.picture} }"><button class="btn btn-primary">Read More</button></router-link>
                </div>
              </div>
          </div>
      </div>
  </template>
  
  <script>
  export default{
      
      computed: {
        products() {
            return this.$store.state.manga
        },
        portion() {
          return this.products.slice(1, 6)
        }
    },
    mounted() {
        this.$store.dispatch('jsData')
      },
      methods: {
        product(){
          this.$router.push({
            name: "singlepage",
            params: {id: 1},
            query: {name: "page"}
          })
        }
      }
    }

  
  </script>
  
  <style>
  .overflow-auto{
    height: 10rem;
    overflow-x: hidden;
    overflow-y: auto;
  }
  
  </style>
  