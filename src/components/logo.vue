<template>
  <div class="">
    <!-- <lottie
      :width="130"
      :height="100"
      :options="lottieOptions"
      v-on:animCreated="handleAnimation"
    /> -->
    <lottie
      :width="130"
      :height="100"
      :options="lottieOptions"
    />
  </div>
</template>
<script>
import lottie from "vue-lottie/src/lottie.vue";
import * as animationData from "~/assets/logo-new.json";

export default {
  components: {
    lottie,
  },
  data() {
    return {
      anim: null, // for saving the reference to the animation
      lottieOptions: { animationData: animationData.default },
    };
  },
  methods: {
    // handleAnimation: function (anim) {
    //   this.anim = anim;
    // },
  },
};
</script>

<style scoped>
/* @import "~/assets/css/styles.css"; */
</style>