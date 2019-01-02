<template>
  <div class="container-fluid py-4">
    <div class="container">
      <h1>About Us</h1>
      <p class="text-muted">We are the best digital studio since 2016</p>

      <hr class="mb-4">

      <section class="mb-5" data-aos="slide-down">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint vel voluptatum tenetur temporibus, provident sed ullam
          nam similique id. Cum natus alias exercitationem consectetur atque voluptatibus sint dolorum reprehenderit perferendis!
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam dolores blanditiis nobis, modi corporis eos ducimus
          et nesciunt dolore assumenda ex provident culpa qui quas omnis sint architecto? Dolores, atque!
        </p>
      </section>

      <section data-aos="slide-up" data-aos-delay="400">
        <h2>Our Members</h2>

        <div class="row">
          <div v-for="(item, index) in members" v-bind:key="index" class="col-md-6 col-lg-3">
            <div class="border-0 card mb-4 text-center w-100">
              <a v-bind:href="item.link" class="d-sm-flex align-items-center d-md-block">
                <div class="img-wrapper">
                  <img
                    v-lazy="require('../assets/img/members/' + urlize(item.name) + '.jpeg')"
                    v-bind:alt="item.name"
                    class="card-img-top hvr-grow"
                  >
                </div>

                <div class="card-body">
                  <small class="text-muted">{{ item.position }}</small>
                  <h5 class="card-title">{{ item.name }}</h5>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { urlize } from "@/assets/js/functions";

export default {
  data() {
    return {
      members: [
        {
          name: "Ama Baelish",
          position: "CEO, Founder"
        },
        {
          name: "Lia Clegane",
          position: "Co-founder, Developer"
        },
        {
          name: "Riz Mormont",
          position: "Designer"
        },
        {
          name: "Ky Greyjoy",
          position: "Marketer"
        }
      ]
    };
  },
  methods: {
    urlize
  }
};
</script>
