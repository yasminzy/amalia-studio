<template>
  <div class="container-fluid py-4">
    <div class="container">
      <h1>Projects</h1>

      <hr class="mb-4" />

      <div class="row text-center">
        <div
          v-for="(item, index) in sortedProjects"
          :key="index"
          class="col-md-6 col-lg-4"
        >
          <div class="border-0 card hvr-shadow mb-4 w-100">
            <a :href="item.link">
              <div class="img-wrapper" data-aos="flip-right">
                <img
                  v-lazy="require('../assets/img/projects/' + item.img)"
                  :alt="item.title"
                  class="card-img-top hvr-grow"
                />
              </div>

              <div class="card-body" data-aos="flip-left">
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
