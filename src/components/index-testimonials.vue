<template>
<div class="container-fluid py-5 text-center">
  <div class="container">
    <div data-aos="fade">
      <span class="cursive font-weight-bold text-primary">people say</span>
      <h2 class="mb-5">- TESTIMONIALS -</h2>
    </div>

    <div class="carousel slide" id="controls" data-ride="carousel" v-cloak data-aos="zoom-in-down">
      <div class="carousel-inner mx-auto w-75">
        <div class="carousel-item" v-for="(item, index) in testimonials" v-bind:key="index">
          <img class="avatar hvr-grow img-fluid my-5 rounded-circle" v-lazy="'img/testimonials/' + urlize(item.name) + '.jpeg'" v-bind:alt="item.name">

          <blockquote class="blockquote mb-5 px-sm-5">
            <p class="font-italic">{{ item.content }}</p>

            <footer class="blockquote-footer mt-5">
              <cite>
                {{ item.name }}<br>
                <small>{{ item.position }}</small>
              </cite>
            </footer>
          </blockquote>
        </div>
      </div>

      <a class="carousel-control-prev d-none d-sm-flex" href="#controls" role="button" data-slide="prev">
        <i class="h3 icon ion-chevron-left text-dark"/>
        <span class="sr-only">Previous</span>
      </a>

      <a class="carousel-control-next d-none d-sm-flex" href="#controls" role="button" data-slide="next">
        <i class="h3 icon ion-chevron-right text-dark"/>
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
