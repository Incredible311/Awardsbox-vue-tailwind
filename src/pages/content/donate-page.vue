<template>
  <div>
    <div class="flex flex-wrap overflow-hidden mx-3 mt-4">
      <div class="bg-black w-full rounded-xl" style="height: 24em">
        <div class="flex flex-wrap overflow-hidden">
          <div class="md:w-1/2" style="padding-top: 7%; padding-left: 4%">
            <p class="text-white text-3xl">Support Awards Box On Patreon</p>
            <p class="text-white text-lg mt-4">
              Support us from £3 a month and fund new journalism on topics that
              matter to you
            </p>
            <button class="mt-3 bg-red-500 text-white p-3 rounded-full">
              BECOME A PATRON
            </button>
          </div>
          <div class="md:w-1/2 p-2 flex flex-wrap overflow-hidden">
            <div class="md:w-1/2">
              <h1
                class="text-white"
                style="font-size: 58px; font-weight: bold; margin-top: 25%"
              >
                PATRON |
              </h1>
            </div>
            <div class="md:w-1/2">
              <lottie
                :width="250"
                :height="250"
                style="margin: 0"
                :options="lottieOptions"
                v-on:animCreated="handleAnimation"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="rounded-xl shadow-md dark:bg-black bg-back-white dark:text-white mx-3 my-4 p-3"
    >
      <p class="text-md py-2">
        Main content will always be free, but if you want to go a bit deeper,
        then support us on Patreon.
      </p>
      <p class="text-md py-2">Benefits include:</p>
      <p class="text-md py-2">Exclusive stories</p>
      <p class="text-md py-2">First look access</p>
      <p class="text-md py-2">Special offers and discounts</p>
      <p class="text-md py-2">
        PLUS our Patreon subscribers also help us fund new journalism into
        environmental issues from a diverse range of freelancers and voices.
      </p>
      <p class="text-md py-2">
        50% of our Patreon revenue directly funds new features on some of the
        most important topics of our time.
      </p>
    </div>
  </div>
</template>
<script>
import lottie from "vue-lottie/src/lottie.vue";
import * as animationData from "~/assets/lottie/logo.json";

export default {
  components: {
    lottie,
  },
  data() {
    return {
      anim: null, // for saving the reference to the animation
      lottieOptions: { animationData: animationData.default },
    };
  },
  methods: {
    handleAnimation: function (anim) {
      this.anim = anim;
    },
  },
};
</script>
