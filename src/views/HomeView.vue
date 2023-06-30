<template>
  <div class="container-fluid">
    

      <!-- section Home-->
      <section class="container" id="home">
        <div class="">
          <h2 class="display-2" id="home-title-1">Welcome to J-Worms</h2>
          <h4 class="display-4" id="home-title-2">You appear to be new; come <s>read</s> me.</h4>
          <a href="#featurePoducts" id="go_down_FP">Feature Products</a>
        </div>
      </section>

      <!-- Draw line -->
      <div id="line_through"></div>

          <!-- section Feature Products-->
      <section class="container" id="featurePoducts">
        <div class="row">
          <h2 class="display-2">Feature Products</h2>
        </div>
        <div class="row cards-feature flex-fill justify-content-around gap-2">
          <ProductComp/>
        </div>
        <div class="">
          <router-link to="/product">More Manga</router-link>
        </div>
      </section>
    
  </div>
</template>

<script>
  import ProductComp from '@/components/ProductComp.vue'
    export default {
       components: {
       ProductComp
       }
    }
    
</script>

<style scoped>

</style>
