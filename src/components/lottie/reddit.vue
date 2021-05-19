<template>
  <div @mouseover="toggleClick('redditAnim')">
    <lottie
      :width="18"
      :height="18"
      style="margin: 0px 5px 0px 1px"
      :options="lottieOptions.reddit_Dark"
      v-on:animCreated="(a) => handleAnimation(a, 'redditAnim')"
    />
  </div>
</template>
<script>
import lottie from "vue-lottie/src/lottie.vue";
import * as redditDarkAnim from "~/assets/lottie/Reddit/Reddit_dark.json";
export default {
  components: {
    lottie,
  },
  data() {
    return {
      readMore: false,
      toggles: {
        reddit: false,
      },
      anim: {
        redditdarkAnim: null,
      },
      dropdownAnimation: {},
      lottieOptions: {
        reddit_Dark: {
          animationData: redditDarkAnim.default,
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

