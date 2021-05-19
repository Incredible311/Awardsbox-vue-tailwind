S<template>
  <div class="flex flex-wrap overflow-hidden mx-3 mt-4">
    <swiper :options="swiperOptions">
      <swiper-slide>
        <img src="@/assets/image/image 25.png" alt="" class="w-full" />
        <div class="pt-2 my-1" data-v-2a183b29=""></div>
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/image/image 25 (2).png" alt="" class="w-full" />
        <div class="pt-2 my-1" data-v-2a183b29=""></div>
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/image/image 25.png" alt="" class="w-full" />
        <div class="pt-2 my-1" data-v-2a183b29=""></div>
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/image/image 25.png" alt="" class="w-full" />
        <div class="pt-2 my-1" data-v-2a183b29=""></div>
      </swiper-slide>
    </swiper>
    <img
      src="~/assets/image/Group 161.png"
      class="rounded-full w-32 h-32 -mt-20 ml-20 person-img"
      style="z-index: 10"
    />
    <h1 class="my-3 pt-1 dark:text-white text-md font-bold">
      Millie Bobby Brown
    </h1>
    <div
      class="flex flex-wrap overflow text-sm bg-black rounded-full text-white my-2 mx-2 py-1 px-2"
    >
      <heart-lottie />
      <p class="add_fav" style="margin-top: 4px">Add to Favourites</p>
    </div>
    <div class="m-2 mt-3" @click="ToggleClick('instagramAnim')">
      <lottie
        v-show="isDark === true"
        :width="16"
        :height="16"
        :options="lottieOptions.instagram_dark"
        style="margin: 3px 3px 0px"
        v-on:animCreated="(a) => handleAnimation(a, 'instagramAnim', 'black')"
      />
      <lottie
        v-show="isDark === false"
        :width="16"
        :height="16"
        :options="lottieOptions.instagram_light"
        style="margin: 3px 3px 0px"
        v-on:animCreated="(a) => handleAnimation(a, 'instagram', 'white')"
      />
    </div>
    <div class="m-2 mt-3">
      <twitter-lottie />
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import {
  Swiper as SwiperClass,
  Pagination,
  Mousewheel,
  Autoplay,
} from "swiper/swiper.esm";
import getAwesomeSwiper from "vue-awesome-swiper/dist/exporter";
SwiperClass.use([Pagination, Mousewheel, Autoplay]);
Vue.use(getAwesomeSwiper(SwiperClass));
const { Swiper, SwiperSlide } = getAwesomeSwiper(SwiperClass);
import "swiper/swiper-bundle.css";
import HeartLottie from "~/components/lottie/heart.vue";
import TwitterLottie from "~/components/lottie/twitterclick.vue";
import lottie from "vue-lottie/src/lottie.vue";
import * as instagramDarkAnim from "~/assets/lottie/Instagram/Instagram_dark.json";
import * as instagramLightAnim from "~/assets/lottie/Instagram/Instagram_light.json";

export default {
  components: {
    Swiper,
    SwiperSlide,
    HeartLottie,
    lottie,
    TwitterLottie,
  },

  data() {
    return {
      swiperOptions: {
        effect: "slide",
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        centeredSlides: true,
        speed: 1000,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
      },
      toggles: {
        instagramAnim: false,
      },
      anim: {
        instagramLightAnim: null,
        instagramDarkAnim: null,
      },
      dropdownAnimation: {},
      lottieOptions: {
        instagram_light: {
          animationData: instagramLightAnim.default,
          loop: false,
          autoplay: false,
        },
        instagram_dark: {
          animationData: instagramDarkAnim.default,
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
      this.dropdownAnimation = {
        instagramAnim: {
          ...this.dropdownAnimation.instagramAnim,
          [type]: anim,
        },
      };
    },
    ToggleClick: function (key, type) {
      this.dropdownAnimation[key]?.white?.stop();
      this.dropdownAnimation[key].black?.stop();
      this.dropdownAnimation[key].black?.playSegments([142, 1], true);
      this.dropdownAnimation[key].white?.playSegments([142, 1], true);
      this.toggles[key] = !this.toggles[key];
    },
  },

  mounted() {},
};
</script>

<style scoped>
@media only screen and (max-width: 500px) {
  .add_fav {
    font-size: 18px;
  }
  .svg_heart {
    width: 20px;
    height: 20px;
  }
}
@media only screen and (max-width: 338px) {
  .add_fav {
    font-size: 15px;
  }
  .svg_heart {
    width: 20px;
    height: 20px;
  }
}
</style>
