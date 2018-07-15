<template>
<div class="container-fluid py-4">
  <div class="container">
    <h1>Let’s work together</h1>
    <p class="text-muted">Tell us about your project.</p>

    <hr class="mb-4">

    <form name="hire" action="https://formspree.io/yzyusrina@ymail.com" method="POST" data-aos="fade-up-left">
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
        <label for="website">Website</label>
        <input class="form-control" id="website" type="text" name="website">
      </div>

      <div class="form-row">
        <legend class="col-form-label col-sm-12 pt-0">Budget*</legend>
        <div class="form-group col-4 col-sm-2">
          <select class="form-control" id="currency" name="currency">
            <option selected>USD $</option>
            <option>IDR Rp</option>
          </select>
        </div>
        <div class="form-group col-8 col-sm-10">
          <input class="form-control" id="budget" type="number" name="budget" required>
        </div>
      </div>

      <div class="form-group">
        <legend class="col-form-label pl-0">Target Project Length*</legend>
        <div class="form-check">
          <input class="form-check-input" id="option1" type="radio" name="projectLength" value="Less than 1 week">
          <label class="form-check-label" for="option1">
            Less than 1 week
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" id="option2" type="radio" name="projectLength" value="1 to 2 weeks" checked>
          <label class="form-check-label" for="option2">
            1 to 2 weeks
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" id="option3" type="radio" name="projectLength" value="Less than 1 month">
          <label class="form-check-label" for="option3">
            Less than 1 month
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="projectLength" id="option4" value="More than 1 month">
          <label class="form-check-label" for="option4">
            More than 1 month
          </label>
        </div>
      </div>

       <div class="form-group">
        <label for="details">Details*</label>
        <textarea class="form-control" id="details" rows="3" name="details" required></textarea>
      </div>

      <p class="small text-muted">* Required</p>

      <input type="hidden" name="_subject" value="Amalia - Hire"/>
      <input type="hidden" name="_next" value="https://amalia.netlify.com/sent"/>

      <button type="submit" class="btn btn-primary" data-aos="fade-up-right" data-aos-delay="400">
        <i class="icon ion-md-paper-plane"></i>
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
