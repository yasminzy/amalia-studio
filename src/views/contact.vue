<template>
  <div class="container-fluid py-4">
    <div class="container">
      <h1>Contact</h1>
      <p class="text-muted">
        This form is for general inquiry. Want to
        <router-link to="hire">hire us</router-link> instead?
      </p>

      <hr class="mb-4" />

      <form
        action="https://formspree.io/yzyusrina@ymail.com"
        method="POST"
        name="contact-yasminzy"
        data-aos="fade-down-left"
      >
        <div class="form-group">
          <label for="name">Name*</label>
          <input
            id="name"
            class="form-control"
            name="name"
            type="text"
            required
          />
        </div>

        <div class="form-group">
          <label for="email">Email*</label>
          <input
            id="email"
            class="form-control"
            name="_replyto"
            type="email"
            aria-describedby="emailHelp"
            required
          />
          <small id="emailHelp" class="form-text text-muted"
            >We'll never share your email with anyone else.</small
          >
        </div>

        <div class="form-group">
          <label for="message">Message*</label>

          <textarea
            id="message"
            class="form-control"
            name="message"
            rows="3"
            required
          />
        </div>

        <p class="small text-muted">* Required</p>

        <input name="_subject" type="hidden" value="Amalia - Contact" />

        <input
          name="_next"
          type="hidden"
          value="https://amalia.netlify.com/sent"
        />

        <button
          class="btn btn-primary"
          type="submit"
          data-aos="fade-down-right"
          data-aos-delay="400"
        >
          SEND <span class="typcn typcn-arrow-right-thick" />
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
form {
  max-width: 80ch;
}
</style>
