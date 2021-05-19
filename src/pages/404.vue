<template>
  <div class="">
    <div class="flex flex-wrapper sm:flex-row overflow-hidden">
      <lottie
        :width="200"
        :height="100"
        style="margin: 0"
        class="ml-5"
        :options="lottieOptions"
        v-on:animCreated="handleAnimation"
      />
    </div>
    <h1 class="whoop" style="">Whoops, that page is gone.</h1>
    <img
      src="@/assets/image/404.png"
      alt=""
      style="display: block; margin-left: auto; margin-right: auto; width: 39%"
    />
    <div class="flex justify-center items-center px-4 sm:px-6 lg:px-8 mb-3">
      <div class="relative">
        <div class="absolute left-3" style="margin-top: 4px">
          <font-awesome-icon :icon="['fas', 'search']" />
        </div>
        <input
          type="text"
          class="h-8 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none"
          placeholder="Search anything..."
          style="border: 1px solid"
        />
      </div>
    </div>
    <div class="bg-black py-2 mx-2 rounded-xl">
      <div class="sliders">
        <div class="my-3">
          <h1 class="text-white text-xl">18th Academy Award Winning Movies</h1>
        </div>

        <swiper :options="swiperOption">
          <swiper-slide
            ><img src="@/assets/image/Rectangle 10.png" alt="" />
            <h1 class="text-xs text-white" data-v-2a183b29="">
              Eternal Sunshine of the Spotless Mind(2014)
            </h1></swiper-slide
          >
          <swiper-slide
            ><img src="@/assets/image/Rectangle 11.png" alt="" />
            <h1 class="text-xs text-white" data-v-2a183b29="">
              Eternal Sunshine of the Spotless Mind(2014)
            </h1></swiper-slide
          >
          <swiper-slide
            ><img src="@/assets/image/Rectangle 12 (3).png" alt="" />
            <h1 class="text-xs text-white" data-v-2a183b29="">
              Eternal Sunshine of the Spotless Mind(2014)
            </h1></swiper-slide
          >
          <swiper-slide
            ><img src="@/assets/image/Rectangle 13 (1).png" alt="" />
            <h1 class="text-xs text-white" data-v-2a183b29="">
              Eternal Sunshine of the Spotless Mind(2014)
            </h1></swiper-slide
          >
          <swiper-slide
            ><img src="@/assets/image/Rectangle 10.png" alt="" />
            <h1 class="text-xs text-white" data-v-2a183b29="">
              Eternal Sunshine of the Spotless Mind(2014)
            </h1></swiper-slide
          >
        </swiper>
      </div>
    </div>
  </div>
</template>
<script>
import lottie from "vue-lottie/src/lottie.vue";
import * as animationData from "~/assets/logo.json";
export default {
  components: { lottie },
  layout: "signin",
  data() {
    return {
      swiperOption: {
        slidesPerView: 9,
        spaceBetween: 30,
        breakpoints: {
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          618: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1400: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        },
      },
      anim: null, // for saving the reference to the animation
      lottieOptions: { animationData: animationData.default },
    };
  },
  methods: {
    handleAnimation: function (anim) {
      this.anim = anim;
    },
  },
};
</script>
<style>
.sliders {
  width: 800px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.whoop {
  margin: 0 auto;
  font-weight: bold;
  font-size: 33px;
  margin-top: 15px;
}
@media only screen and (max-width: 900px) {
  .sliders {
    width: 618px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
}
@media only screen and (max-width: 618px) {
  .sliders {
    width: 290px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>