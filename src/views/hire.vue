<template>
  <div class="container-fluid py-4">
    <div class="container">
      <h1>Let’s work together</h1>
      <p class="text-muted">Tell us about your project.</p>

      <hr class="mb-4">

      <form
        action="https://formspree.io/yzyusrina@ymail.com"
        method="POST"
        name="hire"
        data-aos="fade-up-left"
      >
        <div class="form-group">
          <label for="name">Name*</label>
          <input id="name" class="form-control" name="name" type="text" required>
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
          >
          <small
            id="emailHelp"
            class="form-text text-muted"
          >We'll never share your email with anyone else.</small>
        </div>

        <div class="form-group">
          <label for="website">Website</label>
          <input id="website" class="form-control" name="website" type="text">
        </div>

        <div class="form-row">
          <legend class="col-form-label col-sm-12 pt-0">Budget*</legend>
          <div class="form-group col-4 col-sm-2">
            <select id="currency" class="form-control" name="currency">
              <option selected>USD $</option>
              <option>IDR Rp</option>
            </select>
          </div>
          <div class="form-group col-8 col-sm-10">
            <input id="budget" class="form-control" name="budget" type="number" required>
          </div>
        </div>

        <div class="form-group">
          <legend class="col-form-label pl-0">Target Project Length*</legend>
          <div class="form-check">
            <input
              id="option1"
              class="form-check-input"
              name="projectLength"
              type="radio"
              value="Less than 1 week"
            >
            
            <label class="form-check-label" for="option1">Less than 1 week</label>
          </div>

          <div class="form-check">
            <input
              id="option2"
              class="form-check-input"
              name="projectLength"
              type="radio"
              value="1 to 2 weeks"
              checked
            >
            
            <label class="form-check-label" for="option2">1 to 2 weeks</label>
          </div>

          <div class="form-check">
            <input
              id="option3"
              class="form-check-input"
              name="projectLength"
              type="radio"
              value="Less than 1 month"
            >
            
            <label class="form-check-label" for="option3">Less than 1 month</label>
          </div>

          <div class="form-check">
            <input
              id="option4"
              class="form-check-input"
              name="projectLength"
              type="radio"
              value="More than 1 month"
            >
            
            <label class="form-check-label" for="option4">More than 1 month</label>
          </div>
        </div>

        <div class="form-group">
          <label for="details">Details*</label>
          <textarea id="details" class="form-control" name="details" rows="3" required/>
        </div>

        <p class="small text-muted">* Required</p>

        <input name="_subject" type="hidden" value="Amalia - Hire">
        <input name="_next" type="hidden" value="https://amalia.netlify.com/sent">
        
        <button class="btn btn-primary" type="submit" data-aos="fade-up-right" data-aos-delay="400">
          <ion-icon name="paper-plane" />SEND
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
