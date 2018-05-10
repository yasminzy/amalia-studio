<template>
<div>
  <component v-bind:is="title" v-cloak/></div>
</template>

<script>
import LoremIpsumDolorSitAmet from "@/posts/lorem-ipsum-dolor-sit-amet";

export default {
  name: "PostItem",
  components: {
    LoremIpsumDolorSitAmet
  },
  data() {
    return {
      title: this.$route.params.title
    };
  }
};
</script>

<style scoped>
</style>
