<template>
<div class="bg container-fluid px-0">
  <div class="content container-fluid d-flex flex-column justify-content-center mh-100" id="header">
    <div class="container" data-aos="zoom-out-left" data-aos-duration="800" data-aos-delay="400">
      <p class="h4"><u>HI</u></p>

      <h1 class="display-3">WE'RE<br>
        <span class="font-weight-bold text-primary">
          AMALIA DIGITAL STUDIO
        </span>
      </h1>

      <p>WE CRAFT DIGITAL PRODUCTS THAT GROW BUSINESSES</p>
    </div>
  </div>
</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.bg.container-fluid {
  background: url("../assets/img/header.jpg") center center no-repeat;
  background-size: cover;
}

.content {
  background-color: rgba(255, 255, 255, 0.5);

  @media (min-width: 992px) {
    background-color: transparent;
  }
}

u {
  text-decoration-color: #e91e63;
}
</style>
