<template>
  <div>
    <component :is="title" v-cloak />
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
