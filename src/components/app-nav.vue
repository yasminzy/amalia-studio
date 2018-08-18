<template>
  <nav
    data-aos="zoom-out-right"
    data-aos-duration="800"
    class="navbar fixed-top navbar-expand-md navbar-light w-100">
    <router-link
      class="navbar-brand"
      to="/">
      <img
        src="../assets/img/logo.png"
        alt="Logo"
        class="d-inline-block align-top mr-2"
        height="30"
        width="30">
      <span class="cursive">Amalia</span>
    </router-link>

    <button
      data-target="#navbarSupportedContent"
      data-toggle="collapse"
      class="border-0 navbar-toggler"
      type="button"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation">

      <span class="navbar-toggler-icon"/>
    </button>

    <div
      id="navbarSupportedContent"
      class="collapse navbar-collapse">
      <ul class="navbar-nav ml-auto w-auto">
        <li
          v-for="(item, index) in menu"
          v-bind:key="index"
          class="nav-item">
          <router-link
            v-bind:to="to(item)"
            class="nav-link">
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
