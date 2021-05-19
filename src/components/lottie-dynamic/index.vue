<template>
  <fragment>
    <div @click="toggleDropdownAnimation('filters')" v-if="isOnClick">
      <lottie-invert
        :animCreated="(a) => handleDropdownAnimation(a, 'filters', 'black')"
        :options="options"
      />
    </div>
    <div
      class="d-flex text-white justify-content-center align-items-center"
      @mouseenter="toggleDropdownAnimation('filters')"
      @mouseleave="stopAnimation('filters')"
      v-if="isOnHover"
    >
      <lottie-invert
        :animCreated="(a) => handleDropdownAnimation(a, 'filters', 'black')"
        :options="options"
      />
      <span style="font-size: 14px" class="ml-2">{{ socialTitle }}</span>
    </div>
  </fragment>
</template>

<script>
import LottieInvert from "./lottie-invert";
import { Fragment } from "vue-fragment";

export default {
  components: {
    LottieInvert,
    Fragment,
  },
  props: {
    lottieOptionsBlack: {
      type: Object,
    },
    lottieOptionsWhite: {
      type: Object,
    },
    isOnClick: {
      type: Boolean,
      default: true,
    },
    isOnHover: {
      type: Boolean,
      default: false,
    },
    refClick: {
      type: String,
    },
    socialTitle: {
      type: String,
    },
    playSegment: {
      type: Boolean,
      default: false,
    },
    segments: {
      type: Array,
      default: () => [],
    },
    closeSegments: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      options: {
        animationData: this.lottieOptionsBlack,
        loop: false,
        autoplay: false,
      },
      dropdownAnimation: { filters: {} },
      toggles: {
        filters: false,
      },
      anim: {},
    };
  },
  computed: {
    isDark() {
      return this.$store.state.darkMode;
    },
  },
  methods: {
    handleAnimation(anim) {
      this.anim = anim;
    },
    stop() {
      this.anim.stop();
    },

    play() {
      this.anim.play();
    },
    pause() {
      this.anim.pause();
    },
    handleDropdownAnimation: function (anim, key, type) {
      this.dropdownAnimation = {
        filters: {
          ...this.dropdownAnimation.filters,
          [type]: anim,
        },
      };
    },
    toggleDropdownAnimation: function (key, type) {
      const segments = this.toggles[key] ? [60, 80] : [60, 80];

      this.dropdownAnimation[key]?.white?.stop();
      this.dropdownAnimation[key].black?.stop();
      if (this.playSegment) {
        this.dropdownAnimation[key]?.white?.playSegments(this.segments, true);
        this.dropdownAnimation[key].black?.playSegments(this.segments, true);
      } else {
        this.dropdownAnimation[key].black?.play();
        this.dropdownAnimation[key].white?.play();
      }
      this.toggles[key] = !this.toggles[key];
    },
    stopAnimation(key) {
      if (this.playSegment) {
        this.dropdownAnimation[key]?.white?.playSegments(
          this.closeSegments,
          true
        );
        this.dropdownAnimation[key].black?.playSegments(
          this.closeSegments,
          true
        );
      } else {
        this.dropdownAnimation[key]?.white?.stop();
        this.dropdownAnimation[key].black?.stop();
      }
    },
    onHoverAnimation(bool) {
      this.anim.playSegments([60, 80], true);
      // this.stop();
      // if (bool) {
      //   this.anim.playSegments([60, 80], true);
      // } else {
      //   this.anim.playSegments([60, 80], true);
      // }
      // console.log(this.anim);
    },
  },
};
</script>

<style>
</style>