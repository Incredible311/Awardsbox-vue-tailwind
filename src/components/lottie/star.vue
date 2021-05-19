<template>
  <div @mouseover="mouseover('starAnim_two')">
    <lottie
      v-show="isDark === true"
      :width="16"
      :height="16"
      :options="lottieOptions.star_light"
      style="margin: 3px 3px 0px"
      v-on:animCreated="(a) => handleAnimation(a, 'starAnim_two', 'black')"
    />
    <lottie
      v-show="isDark === false"
      :width="16"
      :height="16"
      :options="lottieOptions.star_dark"
      style="margin: 3px 3px 0px"
      v-on:animCreated="(a) => handleAnimation(a, 'starAnim_two', 'white')"
    />
  </div>
</template>
<script>
import lottie from "vue-lottie/src/lottie.vue";
import * as starAnim from "~/assets/lottie/Star/Star_Dark_Mode.json";
import * as starDarkAnim from "~/assets/lottie/Star/Star_Light_Mode.json";

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
        starAnim: null,
        starDarkAnim: null,
      },
      dropdownAnimation: {},
      lottieOptions: {
        star_light: {
          animationData: starAnim.default,
          loop: false,
          autoplay: false,
        },
        star_dark: {
          animationData: starDarkAnim.default,
          loop: false,
          autoplay: false,
        },
      },
    };
  },
  computed: {
    isDark() {
      return this.$store.state.darkMode;
    },
  },
  methods: {
    handleAnimation: function (anim, key, type) {
      if (!this.dropdownAnimation[key]) {
        this.dropdownAnimation[key] = {};
      }
      this.dropdownAnimation[key][type] = anim;
    },
    mouseover: function (key, type) {
      // const segments = this.toggles[key] ? [60, 96] : [0, 36];
      this.dropdownAnimation[key].black.stop();
      this.dropdownAnimation[key].white.stop();
      this.dropdownAnimation[key].black.playSegments([60, 5], true);
      this.dropdownAnimation[key].white.playSegments([60, 5], true);
      this.toggles[key] = !this.toggles[key];
    },
  },
};
</script>