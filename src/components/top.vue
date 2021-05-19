<template>
  <div class="flex overflow-hidden shadow-md">
    <div class="flex-1 mx-auto w-0 flex flex-col xl:px-0 dark:bg-black">
      <div class="relative flex-shrink-0 h-16 flex shadow-md">
        <div class="flex-1 flex justify-between md:px-0">
          <div class="flex-1 flex">
            <form class="w-full flex md:ml-0" action="#" method="GET">
              <label htmlFor="search_field" class="sr-only">Search</label>
              <div
                class="relative w-full text-gray-400 focus-within:text-white"
              >
                <div
                  class="pointer-events-none absolute inset-y-0 left-0 flex items-center ggLight"
                >
                  <lottie
                    v-show="isDark == false"
                    :width="40"
                    :height="40"
                    :options="lottieOptions.first"
                  />

                  <lottie
                    v-show="isDark == true"
                    :width="40"
                    :height="40"
                    :options="lottieOptions.second"
                  />
                </div>
                <input
                  id="search_field"
                  class="block h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-900 dark:text-gray-100 placeholder-gray-900 dark:white focus:outline-none focus:placeholder-gray-300 focus:ring-0 focus:border-transparent sm:text-sm dark:bg-black"
                  placeholder="Search for Award-Winning Movies & Tv-Shows"
                  type="search"
                  name="search"
                />
              </div>
            </form>
          </div>
          <div class="ml-4 flex items-center md:ml-6">
            <div class="mr-3 relative">
              <div>
                <button
                  class="max-w-xs flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  id="user-menu"
                  aria-haspopup="true"
                >
                  <span class="sr-only">Open user menu</span>
                  <font-awesome-icon
                    :icon="['fas', 'lock']"
                    class="bg-custom-gray text-white dark:bg-black dark:text-black h-8 w-8 mx-1 p-1 rounded-full w-full"
                    style="width: 26px; height: 26px"
                  />
                  <font-awesome-icon
                    :icon="['fas', 'user-plus']"
                    class="bg-black text-white dark:bg-black dark:text-black h-8 w-8 mx-1 p-1 rounded-full w-full"
                    style="width: 26px; height: 26px"
                  />
                </button>
              </div>
            </div>
            <label class="switch">
              <input type="checkbox" @click="toggle" />
              <span class="slider round"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
import lottie from "vue-lottie/src/lottie.vue";
import * as firstAnimationData from "~/assets/lottie/lightmodeSearch.json";
import * as secondAnimationData from "~/assets/lottie/darkmodeSearch.json";

export default {
  name: "swiper-example-multiple-slides-per-biew",
  title: "Multiple slides per view",
  components: {
    Swiper,
    SwiperSlide,
    lottie,
  },
  data() {
    return {
      anim: {
        firstAnim: null,
        secondAnim: null,
      },
      lottieOptions: {
        first: { animationData: firstAnimationData.default },
        second: { animationData: secondAnimationData.default },
      },
      isDark: false,
    };
  },
  beforeCreate() {},
  mounted() {
    setTimeout(() => this.initSetup(), 100);
  },
  methods: {
    initSetup() {
      this.isDark = this.$colorMode.value !== "light";
      this.$store.commit("setDarkMode", this.isDark);
    },
    toggle() {
      this.$colorMode.preference =
        this.$colorMode.value == "light" ? "dark" : "light";

      this.isDark = this.$colorMode.value === "light";
      this.$store.commit("setDarkMode", this.isDark);
      this.$forceUpdate();
    },
    play: function (type) {
      this.anim[type].play();
    },
    stop: function (type) {
      this.anim[type].stop();
    },
    handleAnimation: function (anim, type) {
      this.anim[type] = anim;
    },
  },
};
</script>
<style scoped>
@import "~/assets/css/styles.css";
</style>
