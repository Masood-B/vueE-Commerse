<template>
    <div class="container">
      <div class="row justify-content-center gap-2 d-flex" >
          <div class="card" v-for="data in products" style="width: 18rem;" :key="data.id">
                <img :src="data.picture" class="card-img-top" alt="..."  loading="lazy">
                <div class="card-body">
                  <h5 class="card-title">{{data.name}}</h5>
                  <div class="overflow-auto"><p class="lead card-text">{{data.description}}</p></div>
                  <p class="lead card-text">Price: R{{data.price}}</p>
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
  