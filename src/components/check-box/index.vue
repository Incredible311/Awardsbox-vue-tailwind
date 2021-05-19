<template>
  <label
    class="container d-flex justify-content-center align-items-start"
    @click="toggleDropdownAnimation('filters')"
  >
    <lottie-invert
      :whiteOptions="{
        animationData: RadioButtonWhite.default,
        loop: false,
        autoplay: false,
      }"
      :options="{
        animationData: RadioButtonDark.default,
        loop: false,
        autoplay: false,
      }"
      :animCreated="(a) => handleDropdownAnimation(a, 'filters', 'black')"
      :animCreatedWhite="(a) => handleDropdownAnimation(a, 'filters', 'white')"
    />
    <span v-html="title" class="ml-2" style="line-height: 1.1" />
  </label>
</template>

<script>
import lottieInvert from "~/components/lottie-dynamic/lottie-invert";
import * as RadioButtonDark from "~/assets/lottie/Check_box/check_box_dark.json";
import * as RadioButtonWhite from "~/assets/lottie/Check_box/check_box_light.json";

export default {
  props: {
    title: {
      type: String,
    },
  },
  data() {
    return {
      RadioButtonDark,
      RadioButtonWhite,
      toggles: {
        filters: false,
      },
      dropdownAnimation: { filters: {} },
    };
  },
  components: {
    lottieInvert,
  },
  computed: {
    isDark() {
      return this.$store.state.darkMode;
    },
  },
  methods: {
    handleDropdownAnimation: function (anim, key, type) {
      this.dropdownAnimation = {
        filters: {
          ...this.dropdownAnimation.filters,
          [type]: anim,
        },
      };
    },
    toggleDropdownAnimation: function (key, type) {
      const segments = this.toggles[key] ? [] : [];
      if (this.toggles[key]) {
        this.dropdownAnimation[key]?.white?.stop();
        this.dropdownAnimation[key].black?.stop();
      } else {
        this.dropdownAnimation[key].black?.play();
        this.dropdownAnimation[key].white?.play();
      }
      //   this.dropdownAnimation[key].black?.playSegments(segments, true);
      //   this.dropdownAnimation[key].white?.playSegments(segments, true);
      this.toggles[key] = !this.toggles[key];
    },
  },
};
</script>

<style>
</style>