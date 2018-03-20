<template>
<nav class="navbar fixed-top navbar-expand-md navbar-light w-100" data-aos="zoom-out-right" data-aos-duration="800">
  <router-link class="navbar-brand" to="/">
    <img class="d-inline-block align-top mr-2" src="../assets/img/logo.png" alt="Logo" width="30" height="30"/>
    <span class="cursive">Amalia</span>
  </router-link>

  <button class="border-0 navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto w-auto">
      <li class="nav-item" v-for="(item, index) in menu" v-bind:key="index">
        <router-link class="nav-link" v-bind:to="to(item)">
          {{ item.label || item }}
        </router-link>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          to: "/",
          label: "Home"
        },
        "About",
        "Projects",
        "Posts",
        "Contact"
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
nav {
  background-color: rgba(255, 255, 255, 0.75) !important;
}
</style>
