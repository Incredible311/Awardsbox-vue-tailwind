<template>
  <div @mouseover="toggleClick('copyAnim')">
    <lottie
      :width="15"
      :height="15"
      style="margin: 1px 3px 0px 2px"
      :options="lottieOptions.copy_Dark"
      v-on:animCreated="(a) => handleAnimation(a, 'copyAnim')"
    />
  </div>
</template>
<script>
import lottie from "vue-lottie/src/lottie.vue";
import * as copyDarkAnim from "~/assets/lottie/Copy/copy_dark.json";
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
        copydarkAnim: null,
      },
      dropdownAnimation: {},
      lottieOptions: {
        copy_Dark: {
          animationData: copyDarkAnim.default,
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
      this.dropdownAnimation[key].playSegments([0, 28], true);
      this.toggles[key] = !this.toggles[key];
    },
  },
};
</script>

