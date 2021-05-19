<template>
  <div class="d-flex justify-content-start" @click="ToggleClick('twitterAnim')">
    <lottie
      v-show="isDark === true"
      :width="18"
      :height="18"
      :options="lottieOptions.twitter_dark"
      v-on:animCreated="(a) => handleAnimation(a, 'twitterAnim', 'black')"
      class="m-0"
    />
    <lottie
      v-show="isDark === false"
      :width="18"
      :height="18"
      :options="lottieOptions.twitter_light"
      v-on:animCreated="(a) => handleAnimation(a, 'twitterAnim', 'white')"
      class="m-0"
    />
    <label class="checkbox-container pl-2">{{ title }}</label>
  </div>
</template>

<script>
import Lottie from "vue-lottie/src/lottie.vue";
import * as twitterDarkAnim from "~/assets/lottie/Twitter/Twitter_dark.json";
import * as twitterLightAnim from "~/assets/lottie/Twitter/Twitter_light.json";

export default {
  //   props: {
  //     title: {
  //       type: String,
  //     },
  //   },
  components: {
    Lottie,
  },
  data() {
    return {
      toggles: {
        twitterAnim: false,
      },
      lottieOptions: {
        twitter_light: {
          animationData: twitterLightAnim.default,
          loop: false,
          autoplay: false,
        },
        twitter_dark: {
          animationData: twitterDarkAnim.default,
          loop: false,
          autoplay: false,
        },
      },
      dropdownAnimation: { twitterAnim: {} },
    };
  },
  computed: {
    isDark() {
      return this.$store.state.darkMode;
    },
  },
  created() {
    console.log(this.isDark);
  },
  methods: {
    handleAnimation: function (anim, key, type) {
      this.dropdownAnimation = {
        twitterAnim: {
          ...this.dropdownAnimation.twitterAnim,
          [type]: anim,
        },
      };
    },
    ToggleClick: function (key, type) {
      this.dropdownAnimation[key]?.white?.stop();
      this.dropdownAnimation[key].black?.stop();
      this.dropdownAnimation[key].black?.playSegments([220, 2], true);
      this.dropdownAnimation[key].white?.playSegments([140, 10], true);
      this.toggles[key] = !this.toggles[key];
    },
  },
};
</script>

<style>
</style>