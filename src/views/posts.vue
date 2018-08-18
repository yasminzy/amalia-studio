<template>
  <div class="container">
    <h1>Posts</h1>
    <p class="text-muted"/>

    <hr class="mb-4">

    <div class="row">
      <div
        v-for="(item, index) in sortedPosts"
        v-bind:key="index"
        class="col-md-6 px-lg-5">
        <div class="border-left-0 border-right-0 border-top-0 card hvr-shadow mb-4 w-100">
          <router-link v-bind:to="'posts/' + urlize(item.title)">
            <div
              data-aos="flip-down"
              class="img-wrapper">
              <img
                v-lazy="require('../assets/img/posts/' + item.img)"
                v-bind:alt="item.title"
                class="card-img-top hvr-grow">
            </div>

            <div
              data-aos="flip-up"
              class="card-body d-flex flex-column text-left">
              <small>
                {{ item.date }} / {{ item.tag }}
              </small>
              <h3 class="card-title h5 text-dark">{{ item.title }}</h3>
              <p class="card-text small text-muted">{{ item.description }}</p>

              <router-link
                to="'posts/' + urlize(item.title)"
                class="d-flex align-items-center ml-auto small">
                Read more —
              </router-link>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { urlize } from "@/assets/js/functions";
import { posts } from "@/assets/js/data";

export default {
  data() {
    return {
      posts
    };
  },
  computed: {
    sortedPosts() {
      return posts.reverse();
    }
  },
  methods: {
    urlize
  }
};
</script>
