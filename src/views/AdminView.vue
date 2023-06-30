<template>
    <div class="container">
      <h1 >Admin</h1>
        <button class="btn" id="adminSort">sort</button>
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Add
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <p>Name</p>
      <input type="text" class="form-control" placeholder="Enter Title.." id="input1" aria-label="Title">
      <p>Price</p>
      <input type="number" class="form-control" placeholder="Enter Your Amount.." id="input2" aria-label="Title">
      <p>Picture</p>
      <input type="text" class="form-control" placeholder="Enter Image URL.." id="input3" aria-label="Title">
      <p>Despcription</p>
      <textarea class="form-control" placeholder="Enter Description.." id="input4" aria-label="With textarea"></textarea>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-dark" id="add-btn" data-bs-dismiss="modal">Add New Manga</button>
      </div>
    </div>
  </div>
</div>
<div class="row">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Picture</th>
          <th scope="col">Description</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in products" style="width: 18rem;" :key="data.id">
          <td>{{data.name}}</td>
          <td>R{{data.price}}</td>
          <td>
          <div class="flex-wrap">
          <img :src="data.picture" alt="..."  loading="lazy" class="img-fluid">
          </div>
          </td>
          <td>{{data.description}}</td>
          <td>
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target=''>Edit</button>
          <!-- Modal -->
          <div class="modal fade" id='' tabindex="-1" aria-labelledby="editProductLabel " aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="editProductLabel ">Edit</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <form>
                <div class="container">
                  <p>Name</p>
                  <input type="text" class="form-control" placeholder="Enter Title..." id='nameInput${stock.id}' value='${stock.name}' aria-label="Title" required>
                  <p>Price</p>
                  <input type="number" class="form-control" placeholder="Enter Your Amount..." id='priceInput${stock.id}' value='${stock.price}' aria-label="Price" required>
                  <p>Picture</p>
                  <input type="text" class="form-control" placeholder="Enter Image URL..." id='pictureInput${stock.id}' value='${stock.picture}' aria-label="Picture" required>
                  <p>Despcription</p>
                  <textarea class="form-control" placeholder="Enter Description..." id='descriptionInput${stock.id}' aria-label="Description" required>${stock.description}</textarea>
                  </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-dark" id="edit-btn" onclick='new EditItem(${JSON.stringify(stock)})' data-bs-dismiss="modal">Edit Manga</button>
                </div>
              </div>
            </div>
          </div></td>
          <td><button id="close-btn" class="close-btn">Delete</button></td>
      </tr>
      </tbody>
    </table>
  </div>
    </div>
</template>

<script>
    export default {
        computed: {
        products() {
            return this.$store.state.manga
        }
    },
    mounted() {
        this.$store.dispatch('jsData')
    }
    }
</script>

<style scoped>

</style>