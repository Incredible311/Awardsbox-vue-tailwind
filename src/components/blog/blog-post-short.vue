<template>
  <div class="lg:w-1/3 text-sm mb-3 width50">
    <div class="flex flex-wrap overflow-hidden justify-center">
      <div class="md:w-1/2 dark:text-white">
        <img src="@/assets/images/Rectangle 12.png" class="w-full" />
      </div>
      <div class="md:w-1/2 dark:text-white px-2">
        <p class="text-lg mb-2">Eternal Sunshine of the Spotless Mind(2014)</p>
        <p>
          qua. Venenatis lectus magna fringilla urna. Etiam tempor orci eu
          lobortis. Integer quis auctod vulputate mi sit. Lacinia utate mi sr
          elit se
          <span v-if="readMore"></span>
          <span v-else>...</span>
        </p>

        <p v-show="readMore">
          Ligula ullamcorper malesuada proin libero nunc consequat interdum
          varius. Turpis egestas pretium aenean pharetra magna ac placerat. Sed
          egestas egestas fringilla phasellus faucibus scelerisque eleifend
        </p>
        <button
          class="bg-black text-white rounded-full p-1 text-xs awards font18"
          @click="readMore = !readMore"
          @mouseover="mouseover"
        >
          <span v-if="readMore" class="flex">
            <lottie
              :width="18"
              :height="18"
              :options="lottieOptions"
              style=" auto"
              v-on:animCreated="handleAnimation"
            />
            Read Less
          </span>
          <span v-else class="flex">
            <lottie
              :width="18"
              :height="18"
              :options="lottieOptions"
              style=" auto"
              v-on:animCreated="handleAnimation"
            />
            <p style="margin-top: 1px; margin-left: 3px; margin-right: 4px">
              Read More
            </p>
          </span>
        </button>
      </div>
    </div>
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
      readMore: false,
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
.awards .eye-state,
.awards:hover .eye-active {
  display: block;
}
.awards .eye-active,
.awards:hover .eye-state {
  display: none;
}

@media only screen and (max-width: 767px) {
  .width50 {
    width: 50%;
  }

  .font18 {
    font-size: 18px;
  }
}

@media only screen and (max-width: 330px) {
  .width50 {
    width: 100%;
  }

  .font18 {
    font-size: 16px;
  }
}
</style>
