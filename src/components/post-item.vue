<template>
  <div>
    <component
      v-cloak
      v-bind:is="title"/>
  </div>
</template>

<script>
import LoremIpsumDolorSitAmet from "@/posts/lorem-ipsum-dolor-sit-amet";

export default {
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
