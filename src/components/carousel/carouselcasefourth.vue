<template>
  <div>
    <div class="flex">
      <div class="dark:text-white my-2 flex-1 text-lg font-bold">
        Golden Bear Award-Winning 1950 Movies
      </div>
      <div class="dark:text-white mb-1 mt-2 flex">
        <a href="/whole-show">
          <see-all />
        </a>
      </div>
    </div>
    <swiper :options="swiperOptions">
      <swiper-slide v-for="movie in trendingMovies" :key="movie.id">
        <add-modal
          :show="movie.id === eyeVisibleId"
          @close="onToggleEye(movie.id)"
        ></add-modal>
        <button
          v-if="movie.id !== eyeVisibleId"
          @click="onToggleEye(movie.id)"
          @mouseover="mouseover(movie.id)"
          style="float: right; margin-right: 27px"
          class="awards"
        >
          <font-awesome-icon
            :icon="['fas', 'ellipsis-h']"
            class="add-selection"
          />
          <lottie
            :width="18"
            :height="20"
            :options="lottieOptions"
            class="add-hover"
            style="
              width: 18px;
              height: 20px;
              overflow: hidden;
              margin: 0px auto;
              margin-top: 4px;
              margin-left: 4px;
            "
            v-on:animCreated="(a) => handleAnimation(a, movie.id)"
          />
        </button>
        <img
          :src="movie.info.image"
          alt=""
          class="rounded-xl shadow-md w-full"
          data-v-2a183b29=""
        />
        <div class="pt-2" data-v-2a183b29="">
          <h1 class="dark:text-white text-xs" data-v-2a183b29="">
            {{ movie.title }}
          </h1>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import AddModal from "@/components/modal/add";
import "swiper/swiper-bundle.css";
import SeeAll from "../buttons/seeall";
import lottie from "vue-lottie/src/lottie.vue";
import * as animationData from "~/assets/lottie/threePoint.json";

export default {
  components: {
    AddModal,
    SeeAll,
    lottie,
  },
  data() {
    return {
      trendingMovies: [],
      eyeVisibleId: "",
      swiperOptions: {
        slidesPerView: 9,
        spaceBetween: 30,
        breakpoints: {
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1224: {
            slidesPerView: 6,
            spaceBetween: 20,
          },

          1424: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
        },
      },
      anim: null, // for saving the reference to the animation
      lottieOptions: {
        animationData: animationData.default,
        loop: false,
        autoplay: false,
      },
      dropdownAnimation: {},
    };
  },
  methods: {
    onToggleEye(movieId) {
      this.eyeVisibleId = this.eyeVisibleId === movieId ? "" : movieId;
    },
    handleAnimation: function (anim, movieId) {
      this.dropdownAnimation[movieId] = anim;
    },
    mouseover: function (movieId) {
      this.dropdownAnimation[movieId].stop();
      this.dropdownAnimation[movieId].play();
    },
  },
  created() {
    setTimeout(() => {
      // this.trendingMovies = this.$store.state.AllOfTrendingMovies;
      this.trendingMovies = [
        {
          id: "1",
          title: "Test1",
          info: { image: "/_nuxt/src/assets/image/Group 286.png" },
        },
        {
          id: "2",
          title: "Test1",
          info: { image: "/_nuxt/src/assets/image/Group 286.png" },
        },
        {
          id: "3",
          title: "Test1",
          info: { image: "/_nuxt/src/assets/image/Group 286.png" },
        },
        {
          id: "4",
          title: "Test1",
          info: { image: "/_nuxt/src/assets/image/Group 286.png" },
        },
        {
          id: "5",
          title: "Test1",
          info: { image: "/_nuxt/src/assets/image/Group 286.png" },
        },
        {
          id: "6",
          title: "Test1",
          info: { image: "/_nuxt/src/assets/image/Group 286.png" },
        },
        {
          id: "7",
          title: "Test1",
          info: { image: "/_nuxt/src/assets/image/Group 286.png" },
        },
        {
          id: "8",
          title: "Test1",
          info: { image: "/_nuxt/src/assets/image/Group 286.png" },
        },
        {
          id: "9",
          title: "Test1",
          info: { image: "/_nuxt/src/assets/image/Group 286.png" },
        },
      ];
    }, 1000);
  },
};
</script>
<style>
.add-selection {
  width: 16px;
  outline: none;
  background: white;
  border-radius: 11px;
  height: 16px;
  position: absolute;
  margin-top: 6px;
  padding: 2px;
  margin-left: 5px;
  display: block;
}
.add-hover {
  outline: none;
  border-radius: 11px;
  position: absolute;
}
</style>
