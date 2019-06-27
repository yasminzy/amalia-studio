<template>
  <div class="container-fluid mh-75 py-5">
    <div class="container d-flex flex-column justify-content-between mh-100">
      <div class="mb-5 text-center">
        <div data-aos="fade">
          <span class="cursive font-weight-bold text-primary">who we are</span>
          <h2 class="mb-3">- ABOUT US -</h2>
        </div>

        <div data-aos="zoom-out-down">
          <p class="text-center mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            exercitationem possimus impedit facere porro voluptas cum dolorum
            quia quas, explicabo inventore error, nam eius maiores quibusdam
            neque sed unde. Quidem!
          </p>

          <p class="cursive mx-auto my-4 small">Amalia Digital Studio</p>
        </div>

        <div data-aos="zoom-out-up">
          <router-link class="btn btn-light mr-3" to="/about"
            >LEARN MORE</router-link
          >

          <router-link class="btn btn-primary mr-3" to="/contact"
            >CONTACT US</router-link
          >
        </div>
      </div>

      <div data-aos="zoom-out" class="row">
        <div class="col-md-6 col-xl-4 mt-lg-0 order-xl-1">
          <div class="border-0 card h-100 mb-4">
            <h3
              class="bg-transparent border-bottom-0 card-header h5"
              data-aos="fade"
            >
              WHAT WE DO
            </h3>

            <div class="card-body" data-aos="fade">
              <p class="mb-4 small text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                porro est non commodi corporis voluptas sapiente quod, optio
                quis nam saepe aut. Voluptates officia harum, odit commodi
                repudiandae iure. Aliquam.
              </p>

              <ul class="list-unstyled mb-4 row">
                <li
                  v-for="(item, index) in services"
                  :key="index"
                  class="col-sm-6 mb-3"
                >
                  <router-link
                    to="services"
                    class="d-flex align-items-center text-dark"
                  >
                    <span
                      :class="
                        'h4 mb-0 mr-3 text-primary typcn typcn-' + item.icon
                      "
                    />

                    <p class="mb-0">
                      {{ item.label }}
                      <br />

                      <small>{{ item.sublabel }}</small>
                    </p>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-xl-4 order-md-last order-xl-0">
          <div class="border-0 card h-100 mb-4">
            <h3
              class="bg-transparent border-bottom-0 card-header h5"
              data-aos="fade"
            >
              WORKING PROCESS
            </h3>

            <ul data-aos="fade" class="card-body list-unstyled">
              <li v-for="(item, index) in processes" :key="index" class="mb-4">
                <small>Lorem ipsum</small>
                <h4 class="card-title h6 mb-1 text-primary">{{ item }}</h4>
                <p class="card-text small text-muted">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-md-6 col-xl-4 order-xl-last">
          <div class="border-0 card h-100 mb-4">
            <h3
              class="bg-transparent border-bottom-0 card-header h5"
              data-aos="fade"
            >
              OUR SKILLS
            </h3>

            <div class="card-body" data-aos="fade">
              <ul class="list-unstyled">
                <li
                  v-for="(item, index) in skills"
                  :key="index"
                  class="mb-4 row"
                >
                  <span class="col-sm-5 small">{{ item.label }}</span>
                  <div class="col-sm-7">
                    <div class="progress">
                      <div
                        :aria-valuenow="item.value"
                        :style="{ width: item.value + '%' }"
                        class="progress-bar bg-primary"
                        role="progressbar"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          icon: "image",
          label: "Branding",
          sublabel: "All products"
        },
        {
          icon: "brush",
          label: "Design",
          sublabel: "Website"
        },
        {
          icon: "briefcase",
          label: "Marketing",
          sublabel: "All products"
        },
        {
          icon: "headphones",
          label: "Support",
          sublabel: "Fast & friendly"
        }
      ],
      processes: ["Plan & Design", "Development", "Deliver Project"],
      skills: [
        { label: "Animation", value: 85 },
        { label: "E-commerce", value: 85 },
        { label: "Photography", value: 80 },
        { label: "SEO & Marketing", value: 90 },
        { label: "Web Design", value: 85 },
        { label: "Web Development", value: 90 }
      ]
    };
  }
};
</script>

<style scoped>
img {
  max-height: 4rem;
}
</style>
