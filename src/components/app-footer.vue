<template>
<footer class="mt-auto text-center">
  <div class="bg-dark container-fluid py-5 text-white">
    <div class="container">
      <div data-aos="fade">
        <span class="cursive font-weight-bold text-primary">get in touch</span>
        <h2 class="mb-5">- CONTACT -</h2>
      </div>

      <div data-aos="slide-left">
        <ul class="list-unstyled">
          <li class="mb-2">
            <a class="text-light" href="mailto:hi@amalia.com">hi@amalia.com</a>
          </li>
          <li class="mb-4">
            <a class="text-light" href="tel:7884112423">(788) 411-2423</a>
          </li>
          <li>
            <ul class="list-unstyled d-flex justify-content-center">
              <li v-for="(item, index) in accounts" v-bind:key="index">
                <a class="text-light" v-bind:href="item.link">
                  <i v-bind:class="'icon ion-' + item.icon + ' px-3'"></i>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="bg-black container-fluid py-1">
    <div class="container">
      <small class="text-muted">&copy; 2018 All Rights Reserved</small>
    </div>
  </div>
</footer>
</template>

<script>
export default {
  data() {
    return {
      accounts: [
        {
          icon: "logo-facebook",
          link: "https://www.facebook.com/yzyusrina"
        },
        {
          icon: "logo-instagram",
          link: "https://www.instagram.com"
        },
        {
          icon: "logo-pinterest",
          link: "https://www.youtube.com"
        },
        {
          icon: "logo-twitter",
          link: "https://twitter.com"
        }
      ]
    };
  },
  methods: {
    to(input) {
      if (input.label) {
        return input.to;
      } else {
        return `/${input.toLowerCase()}`;
      }
    }
  }
};
</script>

<style scoped>
.bg-black {
  background-color: #212529;
}
</style>
