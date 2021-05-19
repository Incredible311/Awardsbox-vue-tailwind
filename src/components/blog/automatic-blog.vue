<template>
  <div
    class="md:w-1/4 sm:w-1/2 overflow-hidden rounded-lg overflow-hidden mb-3 width-auto-blog"
  >
    <div class="mx-2">
      <a href="/single/movie"
        ><img src="@/assets/image/Image (1).png" class="w-full"
      /></a>

      <div
        class="px-3 bg-back-white dark:bg-black"
        style="border-radius: 0px 0px 15px 15px"
      >
        <a href="/single/movie"
          ><div class="text-xl py-2 dark:text-white">The Coldest Sunset</div></a
        >

        <div class="dark:text-white text-sm">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Venenatis lectus magna fringilla urna. Etiam tempor orci eu
            lobortis. Integer quis auctor elit sed vulputate mi sit. Lacinia
            <span v-if="readMore"></span>
            <span v-else>...</span>
          </p>

          <p v-show="readMore">
            Ligula ullamcorper malesuada proin libero nunc consequat interdum
            varius. Turpis egestas pretium aenean pharetra magna ac placerat.
            Sed egestas egestas fringilla phasellus faucibus scelerisque
            eleifend donec. Sed cras ornare arcu dui. Aliquam vestibulum morbi
            blandit cursus. Adipiscing elit ut aliquam purus sit amet. Aenean
            sed adipiscing diam donec adipiscing tristique risus nec. Ut etiam
            sit amet nisl purus
          </p>
          <a href="/single/movie" class="readMore"> Link to related movie </a>
        </div>
        <div class="mt-2 flex">
          <button
            class="flex flex-wrap overflow-hidden bg-custom-gray rounded-full px-2 py-1 text-sm text-white mb-2 font15"
            style="font-size: 11px"
            @mouseover="mouseover('starAnim')"
          >
            <lottie
              :width="13"
              :height="13"
              :options="lottieOptions.star"
              style="margin: 0; margin-top: 3px"
              v-on:animCreated="(a) => handleAnimation(a, 'starAnim')"
            />

            <div class="ml-1" style="font-size: 11px">Won 14 Awards</div>
          </button>
          <button
            class="flex flex-wrap overflow-hidden bg-custom-gray rounded-full px-2 py-1 text-sm text-white mb-2 font15 ml-1"
            style="font-size: 11px"
            @mouseover="mouseover('flagAnim')"
          >
            <lottie
              :width="13"
              :height="13"
              :options="lottieOptions.flag"
              style="margin: 0; margin-top: 4px"
              v-on:animCreated="(a) => handleAnimation(a, 'flagAnim')"
            />

            <div class="ml-1" style="font-size: 11px">20 Nominations</div>
          </button>
        </div>
        <div class="pt-1 pb-2 dark:text-white py-1">
          Where to Watch
          <div class="flex flex-wrap overflow-hidden pr-4">
            <div class="w-1/5 overflow-hidden p-1">
              <img src="@/assets/image/image 22.png" class="w-full" />
            </div>
            <div class="w-1/5 overflow-hidden p-1">
              <img src="@/assets/image/image 23.png" class="w-full" />
            </div>
            <div class="w-1/5 overflow-hidden p-1">
              <img src="@/assets/image/image 21.png" class="w-full" />
            </div>
            <div class="w-1/5 overflow-hidden p-1">
              <img src="@/assets/image/Group 105.png" class="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import lottie from "vue-lottie/src/lottie.vue";
import * as starAnim from "~/assets/lottie/Star/Star_Dark_Mode.json";
import * as flagAnim from "~/assets/lottie/Flag/Flag_Dark_Mode.json";
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
        flagAnim: null,
      },
      lottieOptions: {
        star: {
          animationData: starAnim.default,
          loop: false,
          autoplay: false,
        },
        flag: {
          animationData: flagAnim.default,
          loop: false,
          autoplay: false,
        },
      },
    };
  },
  methods: {
    handleAnimation: function (anim, type) {
      this.anim[type] = anim;
    },
    mouseover: function (key) {
      this.anim[key].stop();
      this.anim[key].playSegments([48, 10], true);
      this.toggles[key] = !this.toggles[key];
    },
  },
};
</script>
<style scoped>
.readMore {
  font-weight: bold;
}

@media only screen and (max-width: 430px) {
  .font15 {
    font-size: 15px !important;
  }
}

@media only screen and (max-width: 1224px) {
  .width-auto-blog {
    width: 50%;
  }
}

@media only screen and (max-width: 540px) {
  .width-auto-blog {
    width: 100%;
  }
}
</style>
