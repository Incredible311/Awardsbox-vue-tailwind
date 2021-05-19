<template>
  <div class="flex flex-wrap overflow-hidden mx-3 mt-4">
    <div class="bg-black w-full rounded-xl" style="height: 24em">
      <div
        class="flex flex-wrap overflow-hidden"
        style="display: flex; justify-content: center"
      >
        <div class="p-2">
          <lottie
            :width="320"
            :height="320"
            :options="lottieOptions.awards"
            v-on:animCreated="handleAnimation($event, 'awardsAnim')"
          />
          <p class="text-white text-xl blog_p">Blog</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import lottie from "vue-lottie/src/lottie.vue";
import * as awardsAnimationData from "~/assets/lottie/logo.json";
import * as awardsLogoData from "~/assets/lottie/awardLogo.json";

export default {
  components: {
    lottie,
  },
  data() {
    return {
      anim: {
        awardsAnim: null,
        awardLogo: null,
      },
      lottieOptions: {
        awards: { animationData: awardsAnimationData.default },
        logo: { animationData: awardsLogoData.default },
      },
    };
  },
  methods: {
    handleAnimation: function (anim, type) {
      this.anim[type] = anim;
    },
  },

  mounted() {},
};
</script>
<style>
.blog_p {
  font-size: 38px;
  display: flex;
  justify-content: center;
  margin-top: -58px;
}
@media only screen and (max-width: 770px) {
  /* .displayNone {
    display: none;
  } */
}
</style>
