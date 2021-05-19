<template>
  <div class="mx-3">
    <div class="flex my-1 justify-between">
      <p class="text-md dark:text-white">Best Picture</p>
      <see-all />
    </div>
    <swiper :options="swiperOptions">
      <swiper-slide>
        <img src="@/assets/image/permovie-test.png" alt="" class="w-full" />
        <div class="pt-2 my-1" data-v-2a183b29="">
          <h1 class="dark:text-white text-xs" data-v-2a183b29="">
            Eternal Sunshine of the Spotless Mind(2014)
          </h1>
        </div>
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/image/permovie-test-1.png" alt="" class="w-full" />
        <div class="pt-2 my-1" data-v-2a183b29="">
          <h1 class="dark:text-white text-xs" data-v-2a183b29="">
            Eternal Sunshine of the Spotless Mind(2014)
          </h1>
        </div>
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/image/permovie-test.png" alt="" class="w-full" />
        <div class="pt-2 my-1" data-v-2a183b29="">
          <h1 class="dark:text-white text-xs" data-v-2a183b29="">
            Eternal Sunshine of the Spotless Mind(2014)
          </h1>
        </div>
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/image/permovie-test-1.png" alt="" class="w-full" />
        <div class="pt-2 my-1" data-v-2a183b29="">
          <h1 class="dark:text-white text-xs" data-v-2a183b29="">
            Eternal Sunshine of the Spotless Mind(2014)
          </h1>
        </div>
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/image/permovie-test.png" alt="" class="w-full" />
        <div class="pt-2 my-1" data-v-2a183b29="">
          <h1 class="dark:text-white text-xs" data-v-2a183b29="">
            Eternal Sunshine of the Spotless Mind(2014)
          </h1>
        </div>
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/image/permovie-test-1.png" alt="" class="w-full" />
        <div class="pt-2 my-1" data-v-2a183b29="">
          <h1 class="dark:text-white text-xs" data-v-2a183b29="">
            Eternal Sunshine of the Spotless Mind(2014)
          </h1>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import "swiper/swiper-bundle.css";
import SeeAll from "@/components/buttons/seeall";
export default {
  components: {
    SeeAll,
  },
  data() {
    return {
      trendingMovies: [],
      eyeVisibleId: "",
      swiperOptions: {
        slidesPerView: 5,
        spaceBetween: 30,
        breakpoints: {
          280: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1224: {
            slidesPerView: 4,
            spaceBetween: 20,
          },

          1424: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        },
      },
    };
  },
};
</script>