<template>
  <div class="container-fluid py-5 text-center">
    <div class="container">
      <div data-aos="fade">
        <span class="cursive font-weight-bold text-primary">people say</span>
        <h2 class="mb-5">- TESTIMONIALS -</h2>
      </div>

      <div
        v-cloak
        id="controls"
        class="carousel slide"
        data-aos="zoom-in-down"
        data-ride="carousel"
      >
        <div class="carousel-inner mx-auto w-75">
          <div
            v-for="(item, index) in testimonials"
            :key="index"
            class="carousel-item"
          >
            <img
              v-lazy="
                require('../assets/img/testimonials/' +
                  urlize(item.name) +
                  '.jpeg')
              "
              :alt="item.name"
              class="avatar hvr-grow img-fluid my-5 rounded-circle"
            />

            <blockquote class="blockquote mb-5 px-sm-5">
              <p class="font-italic">{{ item.content }}</p>

              <footer class="blockquote-footer mt-5">
                <cite>
                  {{ item.name }}
                  <br />
                  <small>{{ item.position }}</small>
                </cite>
              </footer>
            </blockquote>
          </div>
        </div>

        <a
          class="carousel-control-prev d-none d-sm-flex"
          href="#controls"
          role="button"
          data-slide="prev"
        >
          <span class="h1 text-dark typcn typcn-chevron-left" />
          <span class="sr-only">Previous</span>
        </a>

        <a
          data-slide="next"
          href="#controls"
          role="button"
          class="carousel-control-next d-none d-sm-flex"
        >
          <span class="h1 text-dark typcn typcn-chevron-right" />
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { urlize } from "@/assets/js/functions";
import { testimonials } from "@/assets/js/data";

export default {
  data() {
    return {
      testimonials
    };
  },
  mounted() {
    document.querySelector(".carousel-item").className += " active";
  },
  methods: {
    urlize
  }
};
</script>

<style scoped>
.blockquote-footer::before {
  content: "";
}

p {
  font-weight: 100;
}

cite {
  font-style: normal;
}

.avatar {
  height: 4rem;
  width: 4rem;
}
</style>
