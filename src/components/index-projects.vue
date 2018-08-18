<template>
  <div class="container-fluid mh-100 py-5 text-center">
    <div data-aos="fade">
      <span class="cursive font-weight-bold text-primary">some works</span>
      <h2 class="mb-5">- OUR PROJECTS -</h2>
    </div>

    <div class="row">
      <div
        v-for="(item, index) in filter(projects, 6)"
        v-bind:key="index"
        class="col-md-6 col-lg-4">
        <div class="border-0 card hvr-shadow mb-4 w-100">
          <a v-bind:href="item.link">
            <div
              data-aos="zoom-in-right"
              class="img-wrapper">
              <img
                v-lazy="require('../assets/img/projects/' + item.img)"
                v-bind:alt="item.title"
                class="card-img-top hvr-grow">
            </div>

            <div
              data-aos="zoom-in-left"
              class="card-body">
              <small class="text-muted">{{ item.type }}</small>
              <h5 class="card-title">{{ item.title }}</h5>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { filter } from "@/assets/js/functions";
import { projects } from "@/assets/js/data";

export default {
  data() {
    return {
      projects
    };
  },
  methods: {
    filter
  }
};
</script>
