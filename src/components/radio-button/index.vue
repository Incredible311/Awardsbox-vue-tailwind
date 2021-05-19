<template>
  <div
    class="d-flex justify-content-start"
    @click="toggleDropdownAnimation('filters')"
  >
    <lottie
      v-show="isDark === true"
      :width="15"
      :height="15"
      :options="blackAnim"
      v-on:animCreated="(a) => handleDropdownAnimation(a, 'filters', 'black')"
      class="m-0"
    />
    <lottie
      v-show="isDark === false"
      :width="15"
      :height="15"
      :options="whiteAnim"
      v-on:animCreated="(a) => handleDropdownAnimation(a, 'filters', 'white')"
      class="m-0"
    />
    <label class="checkbox-container pl-2">{{ title }}</label>
  </div>
</template>

<script>
import Lottie from "vue-lottie/src/lottie.vue";
import whiteLottie from "~/assets/lottie/Radio_button_light.json";
import blackLottie from "~/assets/lottie/Radio_button_dark.json";

export default {
  props: {
    title: {
      type: String,
    },
  },
  components: {
    Lottie,
  },
  data() {
    return {
      toggles: {
        filters: false,
      },
      blackAnim: {
        animationData: blackLottie,
        loop: false,
        autoplay: false,
      },
      whiteAnim: {
        animationData: whiteLottie,
        loop: false,
        autoplay: false,
      },
      dropdownAnimation: { filters: {} },
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
    handleDropdownAnimation: function (anim, key, type) {
      this.dropdownAnimation = {
        filters: {
          ...this.dropdownAnimation.filters,
          [type]: anim,
        },
      };
    },
    toggleDropdownAnimation: function (key, type) {
      const segments = this.toggles[key] ? [40, 50] : [0, 36];
      this.dropdownAnimation[key]?.white?.stop();
      this.dropdownAnimation[key].black?.stop();
      this.dropdownAnimation[key].black?.playSegments(segments, true);
      this.dropdownAnimation[key].white?.playSegments(segments, true);
      this.toggles[key] = !this.toggles[key];
    },
  },
};
</script>

<style>
</style>