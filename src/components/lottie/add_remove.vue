<template>
  <div @click="toggleClick('addAnim')">
    <lottie
      :width="15"
      :height="15"
      style="margin-top: 4px; margin-left: 5px; margin-right: 8px"
      :options="lottieOptions.add_Dark"
      v-on:animCreated="(a) => handleAnimation(a, 'addAnim')"
    />
  </div>
</template>
<script>
import lottie from "vue-lottie/src/lottie.vue";
import * as addDarkAnim from "~/assets/lottie/Add_Remove/add_remove_dark.json";
// import * as heartLightAnim from "~/assets/lottie/Add_to_fav/add_to_fav_light.json";

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
      },
      dropdownAnimation: {},
      lottieOptions: {
        add_Dark: {
          animationData: addDarkAnim.default,
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

