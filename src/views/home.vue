<template>
  <div>
    <IndexHeader />
    <IndexAbout />
    <IndexProjects />
    <IndexTestimonials />
    <IndexPosts />
    <IndexLogos />
  </div>
</template>

<script>
import IndexAbout from "@/components/index-about";
import IndexHeader from "@/components/index-header";
import IndexLogos from "@/components/index-logos";
import IndexPosts from "@/components/index-posts";
import IndexProjects from "@/components/index-projects";
import IndexTestimonials from "@/components/index-testimonials";

export default {
  components: {
    IndexAbout,
    IndexHeader,
    IndexLogos,
    IndexPosts,
    IndexProjects,
    IndexTestimonials
  }
};
</script>
