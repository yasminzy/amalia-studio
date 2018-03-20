<template>
<div class="container-fluid py-4">
  <div class="container">
    <h1>Contact</h1>
    <p class="text-muted">This form is for general inquiry. Want to <router-link to="hire">hire us</router-link> instead?</p>

    <hr class="mb-4">

    <form name="contact-yasminzy" action="https://formspree.io/yzyusrina@ymail.com" method="POST" data-aos="fade-down-left">
      <div class="form-group">
        <label for="name">Name*</label>
        <input class="form-control" id="name" type="text" name="name" required>
      </div>

      <div class="form-group">
        <label for="email">Email*</label>
        <input class="form-control" id="email" type="email" name="_replyto" aria-describedby="emailHelp" required>
        <small class="form-text text-muted" id="emailHelp">We'll never share your email with anyone else.</small>
      </div>

       <div class="form-group">
        <label for="message">Message*</label>
        <textarea class="form-control" id="message" rows="3" name="message" required></textarea>
      </div>

      <p class="small text-muted">* Required</p>

      <input type="hidden" name="_subject" value="Amalia - Contact"/>
      <input type="hidden" name="_next" value="https://amalia.netlify.com/sent"/>

      <button type="submit" class="btn btn-primary" data-aos="fade-down-right" data-aos-delay="400">
        <i class="icon ion-paper-airplane"></i>
        SEND
      </button>
    </form>
  </div>
</div>
</template>

<script>
export default {};
</script>

<style scoped>
form {
  max-width: 80ch;
}
</style>
