<template>
<div class="bg-light container-fluid py-5 text-center">
  <div class="container">
    <ul class="d-flex justify-content-between list-unstyled mb-0">
      <li class="px-1 px-sm-2 px-md-3 px-lg-4 px-xl-5" v-for="(item, index) in logos" v-bind:key="index" data-aos="slide-right">
        <img class="img-fluid hvr-grow" v-lazy="'img/logos/' + urlize(item) + '.png'" v-bind:alt="item">
      </li>
    </ul>
  </div>
</div>
</template>

<script>
import { urlize } from "@/assets/js/functions";
import { logos } from "@/assets/js/data";

export default {
  data() {
    return {
      logos
    };
  },
  methods: {
    urlize
  }
};
</script>

<style scoped>
</style>
