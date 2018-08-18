<template>
  <div class="d-flex flex-column mh-100">
    <AppNav/>
    <router-view data-aos="fade"/>
    <AppFooter/>
  </div>
</template>

<script>
import AppFooter from "@/components/app-footer";
import AppNav from "@/components/app-nav";

export default {
  components: {
    AppFooter,
    AppNav
  }
};
</script>

<style lang="scss">
@import "./assets/scss/custom-bootstrap";

[v-cloak] {
  display: none;
}

::selection {
  background-color: $primary;
  color: white;
}

body {
  font-family: "Roboto", sans-serif;
  overflow-x: hidden;
  padding-top: 56px;
}

.cursive {
  font-family: "Shadows Into Light", cursive;
  letter-spacing: 0.125rem;
}

.img-wrapper {
  display: inline-block;
  overflow: hidden;
}

.mh-100 {
  min-height: calc(100vh - 56px);
}

.hvr-grow {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px transparent;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
}

.hvr-grow:hover,
.hvr-grow:focus,
.hvr-grow:active {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.hvr-shadow {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px transparent;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: box-shadow;
  transition-property: box-shadow;
}

.hvr-shadow:hover,
.hvr-shadow:focus,
.hvr-shadow:active {
  box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
}
</style>
