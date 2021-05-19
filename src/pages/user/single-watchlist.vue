<template>
  <div class="">
    <div class="flex flex-wrap overflow-hidden mx-4 mt-4">
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
      <h1 class="my-2 pt-1 dark:text-white text-md font-bold">
        Millie Bobby Brown
      </h1>

      <div class="m-2">
        <font-awesome-icon
          :icon="['fab', 'instagram']"
          class="dark:text-white"
          style="margin-top: 7px"
        />
      </div>
      <div class="m-2">
        <lottie
          :width="20"
          :height="20"
          :options="lottieOptions.twitter"
          v-on:animCreated="handleAnimation($event, 'TwitterAnim')"
        />
      </div>
    </div>
    <div class="dark:text-white px-2 mt-3 text-xl ml-2">Watchlist - 1</div>

    <div class="">
      <!-- <person-top /> -->
      <div class="flex flex-wrap overflow-hidden justify-center">
        <div class="md:w-1/6 p-2 width50">
          <img src="@/assets/image/permovie-test-1.png" alt="" class="w-full" />
          <h1 class="dark:text-white text-sm" data-v-2a183b29="">
            Eternal Sunshine of the Spotless Mind(2014)
          </h1>
        </div>
        <div class="md:w-1/6 p-2 width50">
          <img src="@/assets/image/permovie-test-1.png" alt="" class="w-full" />
          <h1 class="dark:text-white text-sm" data-v-2a183b29="">
            Eternal Sunshine of the Spotless Mind(2014)
          </h1>
        </div>
        <div class="md:w-1/6 p-2 width50">
          <img src="@/assets/image/permovie-test-1.png" alt="" class="w-full" />
          <h1 class="dark:text-white text-sm" data-v-2a183b29="">
            Eternal Sunshine of the Spotless Mind(2014)
          </h1>
        </div>
        <div class="md:w-1/6 p-2 width50">
          <img src="@/assets/image/permovie-test-1.png" alt="" class="w-full" />
          <h1 class="dark:text-white text-sm" data-v-2a183b29="">
            Eternal Sunshine of the Spotless Mind(2014)
          </h1>
        </div>
        <div class="md:w-1/6 p-2 width50">
          <img src="@/assets/image/permovie-test-1.png" alt="" class="w-full" />
          <h1 class="dark:text-white text-sm" data-v-2a183b29="">
            Eternal Sunshine of the Spotless Mind(2014)
          </h1>
        </div>
        <div class="md:w-1/6 p-2 width50">
          <img src="@/assets/image/permovie-test-1.png" alt="" class="w-full" />
          <h1 class="dark:text-white text-sm" data-v-2a183b29="">
            Eternal Sunshine of the Spotless Mind(2014)
          </h1>
        </div>
        <div class="md:w-1/6 p-2 width50">
          <img src="@/assets/image/permovie-test-1.png" alt="" class="w-full" />
          <h1 class="dark:text-white text-sm" data-v-2a183b29="">
            Eternal Sunshine of the Spotless Mind(2014)
          </h1>
        </div>
        <div class="md:w-1/6 p-2 width50">
          <img src="@/assets/image/permovie-test-1.png" alt="" class="w-full" />
          <h1 class="dark:text-white text-sm" data-v-2a183b29="">
            Eternal Sunshine of the Spotless Mind(2014)
          </h1>
        </div>
        <div class="md:w-1/6 p-2 width50">
          <img src="@/assets/image/permovie-test-1.png" alt="" class="w-full" />
          <h1 class="dark:text-white text-sm" data-v-2a183b29="">
            Eternal Sunshine of the Spotless Mind(2014)
          </h1>
        </div>
        <div class="md:w-1/6 p-2 width50">
          <img src="@/assets/image/permovie-test-1.png" alt="" class="w-full" />
          <h1 class="dark:text-white text-sm" data-v-2a183b29="">
            Eternal Sunshine of the Spotless Mind(2014)
          </h1>
        </div>
        <div class="md:w-1/6 p-2 width50">
          <img src="@/assets/image/permovie-test-1.png" alt="" class="w-full" />
          <h1 class="dark:text-white text-sm" data-v-2a183b29="">
            Eternal Sunshine of the Spotless Mind(2014)
          </h1>
        </div>
        <div class="md:w-1/6 p-2 width50">
          <img src="@/assets/image/permovie-test-1.png" alt="" class="w-full" />
          <h1 class="dark:text-white text-sm" data-v-2a183b29="">
            Eternal Sunshine of the Spotless Mind(2014)
          </h1>
        </div>
        <div class="md:w-1/6 p-2 width50">
          <img src="@/assets/image/permovie-test-1.png" alt="" class="w-full" />
          <h1 class="dark:text-white text-sm" data-v-2a183b29="">
            Eternal Sunshine of the Spotless Mind(2014)
          </h1>
        </div>
        <div class="md:w-1/6 p-2 width50">
          <img src="@/assets/image/permovie-test-1.png" alt="" class="w-full" />
          <h1 class="dark:text-white text-sm" data-v-2a183b29="">
            Eternal Sunshine of the Spotless Mind(2014)
          </h1>
        </div>
        <div class="md:w-1/6 p-2 width50">
          <img src="@/assets/image/permovie-test-1.png" alt="" class="w-full" />
          <h1 class="dark:text-white text-sm" data-v-2a183b29="">
            Eternal Sunshine of the Spotless Mind(2014)
          </h1>
        </div>
        <div class="md:w-1/6 p-2 width50">
          <img src="@/assets/image/permovie-test-1.png" alt="" class="w-full" />
          <h1 class="dark:text-white text-sm" data-v-2a183b29="">
            Eternal Sunshine of the Spotless Mind(2014)
          </h1>
        </div>
        <div class="md:w-1/6 p-2 width50">
          <img src="@/assets/image/permovie-test-1.png" alt="" class="w-full" />
          <h1 class="dark:text-white text-sm" data-v-2a183b29="">
            Eternal Sunshine of the Spotless Mind(2014)
          </h1>
        </div>
        <div class="md:w-1/6 p-2 width50">
          <img src="@/assets/image/permovie-test-1.png" alt="" class="w-full" />
          <h1 class="dark:text-white text-sm" data-v-2a183b29="">
            Eternal Sunshine of the Spotless Mind(2014)
          </h1>
        </div>
        <div class="md:w-1/6 p-2 width50">
          <img src="@/assets/image/permovie-test-1.png" alt="" class="w-full" />
          <h1 class="dark:text-white text-sm" data-v-2a183b29="">
            Eternal Sunshine of the Spotless Mind(2014)
          </h1>
        </div>
        <div class="md:w-1/6 p-2 width50">
          <img src="@/assets/image/permovie-test-1.png" alt="" class="w-full" />
          <h1 class="dark:text-white text-sm" data-v-2a183b29="">
            Eternal Sunshine of the Spotless Mind(2014)
          </h1>
        </div>
        <div class="md:w-1/6 p-2 width50">
          <img src="@/assets/image/permovie-test-1.png" alt="" class="w-full" />
          <h1 class="dark:text-white text-sm" data-v-2a183b29="">
            Eternal Sunshine of the Spotless Mind(2014)
          </h1>
        </div>
        <div class="md:w-1/6 p-2 width50">
          <img src="@/assets/image/permovie-test-1.png" alt="" class="w-full" />
          <h1 class="dark:text-white text-sm" data-v-2a183b29="">
            Eternal Sunshine of the Spotless Mind(2014)
          </h1>
        </div>
        <div class="md:w-1/6 p-2 width50">
          <img src="@/assets/image/permovie-test-1.png" alt="" class="w-full" />
          <h1 class="dark:text-white text-sm" data-v-2a183b29="">
            Eternal Sunshine of the Spotless Mind(2014)
          </h1>
        </div>
        <div class="md:w-1/6 p-2 width50">
          <img src="@/assets/image/permovie-test-1.png" alt="" class="w-full" />
          <h1 class="dark:text-white text-sm" data-v-2a183b29="">
            Eternal Sunshine of the Spotless Mind(2014)
          </h1>
        </div>
      </div>
      <load-more />
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
import PersonTop from "@/components/single/person/top";
import PerMovie from "@/components/searchfilter/movie/per-movie";
import LoadMore from "@/components/buttons/loadmore";
import lottie from "vue-lottie/src/lottie.vue";
import * as Twitter from "~/assets/lottie/twitter.json";

export default {
  components: {
    PersonTop,
    PerMovie,
    LoadMore,
    lottie,
    Swiper,
    SwiperSlide,
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
      anim: {
        TwitterAnim: null,
        // secondAnim: null
      },
      lottieOptions: {
        twitter: { animationData: Twitter.default },
        // second: { animationData: secondAnimationData.default },
      },
    };
  },
  methods: {
    handleAnimation: function (anim, type) {
      this.anim[type] = anim;
    },
  },
  mounted() {},
};
</script>
<style scoped>
@import "~/assets/css/styles.css";
@media only screen and (max-width: 768px) {
  .width50 {
    width: 33.3%;
  }
}
@media only screen and (max-width: 569px) {
  .width50 {
    width: 50%;
  }
}
</style>