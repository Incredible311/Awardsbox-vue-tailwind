<template>
  <div @mouseover="toggleClick('shareAnim')">
    <lottie
      :width="15"
      :height="15"
      style="margin-top: 4px; margin-left: 5px; margin-right: 8px"
      :options="lottieOptions.share_Dark"
      v-on:animCreated="(a) => handleAnimation(a, 'shareAnim')"
    />
  </div>
</template>
<script>
import lottie from "vue-lottie/src/lottie.vue";
import * as shareDarkAnim from "~/assets/lottie/Share/Share_dark.json";
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
        sharedarkAnim: null,
      },
      dropdownAnimation: {},
      lottieOptions: {
        share_Dark: {
          animationData: shareDarkAnim.default,
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
      this.dropdownAnimation[key].playSegments([0, 30], true);
      this.toggles[key] = !this.toggles[key];
    },
  },
};
</script>

