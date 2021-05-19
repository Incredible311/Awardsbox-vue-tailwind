<template>
  <div @mouseenter="toggleClick('facebookAnim')">
    <lottie
      :width="20"
      :height="20"
      style="margin: 1px 3px 0px 2px"
      :options="lottieOptions.facebook"
      v-on:animCreated="(a) => handleAnimation(a, 'facebookAnim')"
    />
  </div>
</template>
<script>
import lottie from "vue-lottie/src/lottie.vue";
import * as FacebookAnim from "~/assets/lottie/Facebook/Facebook_Dark.json";
export default {
  components: {
    lottie,
  },
  data() {
    return {
      readMore: false,
      toggles: {
        copy: false,
      },
      anim: {
        facebookAnim: null,
      },
      dropdownAnimation: {},
      lottieOptions: {
        facebook: {
          animationData: FacebookAnim.default,
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
      //   const segments = this.toggles[key] ? [0, 5] : [25, 60];
      this.dropdownAnimation[key].stop();
      this.dropdownAnimation[key].playSegments([180, 90], true);
      this.toggles[key] = !this.toggles[key];
    },
  },
};
</script>

