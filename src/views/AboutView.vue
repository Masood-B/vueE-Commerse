<template>
  <div class="container">
    <section id="about">
    <h1 class="display-1">About</h1>
    
    <p class="lead" v-for="a,i in dataContent" :key="i+1">{{a}}</p>
    <div class="contactLink">
      <a href="#contact" id="go_down_CP">Contact Me</a>
    </div>
  </section>
  <section class="container" id="contact">
  <h2 class="display-2">Contact Us</h2>
    <form class="content-move" action="https://formspree.io/f/xbjewvba" method="post">
      
      <div class="container widespread">
        <form action="action_page.php">
          
          <label for="fname">First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your name.." required>
          
          <label for="lname">Last Name</label>
          <input type="text" id="lname" name="lastname" placeholder="Your last name.." required>
          
          <label for="Email">Email Address</label>
          <input type="text" id="Email" name="email" placeholder="Your email.." required>
          
        <label for="subject">Message</label>
        <textarea id="subject" name="subject" placeholder="Write something.." style="height:100px" required></textarea>
    
        <input type="submit" value="Submit" required></form>
        </div>
      </form>

    <h2>Contact ME Directly</h2>

<p>Email: masoodbasardien123@gmail.com</p>

<p>Cellphone: 079 298 0631</p>

<p>Address: 14 Chapel Road, Harmony Village, Mitchell's Plain, 7785</p>
</section>
  </div>

</template>

<script>
   export default{
      
      computed: {
        dataContent() {
            return this.$store.state.about    
        }
    },
    mounted() {
        this.$store.dispatch('jsData1')
    }

  }
</script>

<style scoped>

</style>