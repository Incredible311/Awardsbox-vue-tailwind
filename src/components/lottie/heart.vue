<template>
  <div @click="toggleClick('heartAnim')">
    <lottie
      :width="30"
      :height="30"
      :options="lottieOptions.heart_Light"
      v-on:animCreated="(a) => handleAnimation(a, 'heartAnim')"
      style="margin-left: -3px"
    />
  </div>
</template>
<script>
import lottie from "vue-lottie/src/lottie.vue";
import * as heartDarkAnim from "~/assets/lottie/Add_to_fav/add_to_fav_dark.json";
import * as heartLightAnim from "~/assets/lottie/Add_to_fav/add_to_fav_light.json";

export default {
  components: {
    lottie,
  },
  data() {
    return {
      readMore: false,
      toggles: {
        star: false,
      },
      anim: {
        heartdarkAnim: null,
        heartlightAnim: null,
      },
      dropdownAnimation: {},
      lottieOptions: {
        heart_Dark: {
          animationData: heartDarkAnim.default,
          loop: false,
          autoplay: false,
        },
        heart_Light: {
          animationData: heartLightAnim.default,
          loop: false,
          autoplay: false,
        },
      },
    };
  },
  methods: {
    handleAnimation: function (anim, type) {
      if (!this.dropdownAnimation) {
        this.dropdownAnimation = {};
      }
      this.dropdownAnimation[type] = anim;
    },
    toggleClick: function (key) {
      const segments = this.toggles[key] ? [0, 5] : [25, 60];
      this.dropdownAnimation[key].stop();
      this.dropdownAnimation[key].playSegments(segments, true);
      this.toggles[key] = !this.toggles[key];
    },
  },
};
</script>

