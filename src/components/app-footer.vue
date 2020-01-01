<template>
  <footer class="mt-auto text-center">
    <div class="bg-dark container-fluid py-5 text-white">
      <div class="container">
        <div data-aos="fade">
          <span class="cursive font-weight-bold text-primary"
            >get in touch</span
          >

          <h2 class="mb-5">- CONTACT -</h2>
        </div>

        <div data-aos="slide-left">
          <ul class="list-unstyled">
            <li class="mb-2">
              <a class="text-light" href="mailto:hi@amalia.com"
                >hi@amalia.com</a
              >
            </li>

            <li class="mb-4">
              <a class="text-light" href="tel:7884112423">(788) 411-2423</a>
            </li>

            <li>
              <ul class="list-unstyled d-flex justify-content-center">
                <li v-for="(item, index) in accounts" :key="index">
                  <a :href="item.link" class="text-light">
                    <span :class="'h5 px-3 typcn typcn-' + item.icon" />
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
        <small class="text-muted">&copy; 2018-2020 All Rights Reserved</small>
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
          icon: "social-facebook",
          link: "https://www.facebook.com"
        },
        {
          icon: "social-instagram",
          link: "https://www.instagram.com"
        },
        {
          icon: "social-pinterest",
          link: "https://www.youtube.com"
        },
        {
          icon: "social-twitter",
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
