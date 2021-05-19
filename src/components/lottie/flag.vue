<template>
  <div @mouseover="mouseover('flagAnim')">
    <lottie
      v-show="isDark === true"
      :width="16"
      :height="16"
      :options="lottieOptions.flag_Dark"
      style="margin: 3px 3px 0px"
      v-on:animCreated="(a) => handleAnimation(a, 'flagAnim', 'black')"
    />
    <lottie
      v-show="isDark === false"
      :width="16"
      :height="16"
      :options="lottieOptions.flag_Light"
      style="margin: 3px 3px 0px"
      v-on:animCreated="(a) => handleAnimation(a, 'flagAnim', 'white')"
    />
  </div>
</template>
<script>
import lottie from "vue-lottie/src/lottie.vue";
import * as flagDarkAnim from "~/assets/lottie/Flag/Flag_Dark_Mode.json";
import * as flagLightAnim from "~/assets/lottie/Flag/Flag_Light_Mode.json";

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
        flagdarkAnim: null,
        flaglightAnim: null,
      },
      dropdownAnimation: {},
      lottieOptions: {
        flag_Dark: {
          animationData: flagDarkAnim.default,
          loop: false,
          autoplay: false,
        },
        flag_Light: {
          animationData: flagLightAnim.default,
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
      this.dropdownAnimation[key].black.playSegments([37, 25], true);
      this.dropdownAnimation[key].white.playSegments([37, 25], true);
      this.toggles[key] = !this.toggles[key];
    },
  },
};
</script>

