<template>
    <div class="room">
    <div class="container">
        <div class="card" style="width: 18rem">
            <img :src="$route.query.picture" :alt="$route.query.name" loading="lazy">
            <div class="card-body">
                <h5 class="card-title"><strong>{{$route.query.name}}</strong></h5>
                <div class="overflow-auto"><p class="lead card-text">{{$route.query.description}}</p></div>
                <p class="lead card-text">Price: R{{$route.query.price}}</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.container{
    display: flex;
    justify-content: center;
    align-content: center;
}
.room{
    height:86.7vh
}
.card{
  margin-top: 3rem;
}
</style>