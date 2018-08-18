<template>
  <div class="container-fluid py-4">
    <div class="container">
      <h1>Projects</h1>

      <hr class="mb-4">

      <div class="row text-center">
        <div
          v-for="(item, index) in sortedProjects"
          v-bind:key="index"
          class="col-md-6 col-lg-4">
          <div class="border-0 card hvr-shadow mb-4 w-100">
            <a v-bind:href="item.link">
              <div
                data-aos="flip-right"
                class="img-wrapper">
                <img
                  v-lazy="require('../assets/img/projects/' + item.img)"
                  v-bind:alt="item.title"
                  class="card-img-top hvr-grow">
              </div>

              <div
                data-aos="flip-left"
                class="card-body">
                <small class="text-muted">{{ item.type }}</small>
                <h5 class="card-title">{{ item.title }}</h5>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { projects } from "@/assets/js/data";

export default {
  data() {
    return {
      projects
    };
  },
  computed: {
    sortedProjects() {
      return projects.reverse();
    }
  }
};
</script>
