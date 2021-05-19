<template>
  <div
    class="seeall text-sm text-white bg-black rounded-full px-2 awards"
    style="height: 27px; padding-top: 2px"
    @mouseover="mouseover"
  >
    <lottie
      :width="20"
      :height="20"
      :options="lottieOptions"
      style=" auto"
      v-on:animCreated="handleAnimation"
    />
    <p class="pl-1" style="margin-top: 1px; margin-right: 7px">See all</p>
  </div>
</template>
<script>
import lottie from "vue-lottie/src/lottie.vue";
import * as animationData from "~/assets/lottie/eye.json";
export default {
  components: {
    lottie,
  },
  data() {
    return {
      anim: null,
      lottieOptions: {
        animationData: animationData.default,
        loop: false,
        autoplay: false,
      },
      dropdownAnimation: {},
    };
  },
  methods: {
    handleAnimation: function (anim) {
      this.dropdownAnimation = anim;
    },
    mouseover: function () {
      this.dropdownAnimation.stop();
      this.dropdownAnimation.play();
    },
  },
};
</script>

<style>
</style>
