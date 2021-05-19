<template>
  <div>
    <award-top />
    <award-des />
    <div class="flex justify-center" style="justify-content: center">
      <button
        class="flex bg-black text-white rounded-full px-2 text-xl py-1 mx-1"
        @mouseover="mouseover('starAnim_one')"
      >
        <div>
          <lottie
            v-show="isDark === true"
            :width="20"
            :height="20"
            :options="lottieOptions.star_light"
            style="margin: 3px 3px 0px"
            v-on:animCreated="
              (a) => handleAnimation(a, 'starAnim_one', 'black')
            "
          />
          <lottie
            v-show="isDark === false"
            :width="30"
            :height="30"
            :options="lottieOptions.star_dark"
            style="margin: 3px 3px 0px"
            v-on:animCreated="
              (a) => handleAnimation(a, 'starAnim_one', 'white')
            "
          />
        </div>
        Palme d'Or
      </button>
      <button
        class="flex bg-black text-white rounded-full px-2 text-xl py-1 mx-1"
        @mouseover="mouseover('starAnim_two')"
      >
        <div>
          <lottie
            v-show="isDark === true"
            :width="20"
            :height="20"
            :options="lottieOptions.star_light"
            style="margin: 3px 3px 0px"
            v-on:animCreated="
              (a) => handleAnimation(a, 'starAnim_two', 'black')
            "
          />
          <lottie
            v-show="isDark === false"
            :width="30"
            :height="30"
            :options="lottieOptions.star_dark"
            style="margin: 3px 3px 0px"
            v-on:animCreated="
              (a) => handleAnimation(a, 'starAnim_two', 'white')
            "
          />
        </div>
        Grand Prix
      </button>
    </div>
    <award-case />
    <award-case />
    <award-case />
    <award-case />
    <award-case />
    <load-more />
  </div>
</template>	
<script>
import AwardTop from "@/components/single/award/awardtop";
import AwardDes from "@/components/single/award/description";
import AwardCase from "@/components/carousel/award";
import LoadMore from "@/components/buttons/loadmore";
import "swiper/swiper-bundle.css";
import lottie from "vue-lottie/src/lottie.vue";
import * as starAnim from "~/assets/lottie/Star/Star_Dark_Mode.json";
import * as starDarkAnim from "~/assets/lottie/Star/Star_Light_Mode.json";

export default {
  components: {
    AwardTop,
    AwardDes,
    AwardCase,
    LoadMore,
    lottie,
  },
  data() {
    return {
      trendingMovies: [],
      eyeVisibleId: "",
      swiperOptions: {
        slidesPerView: 5,
        spaceBetween: 30,
        breakpoints: {
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
      toggles: {
        star: false,
      },
      anim: {
        starAnim: null,
        starDarkAnim: null,
      },
      dropdownAnimation: {},
      lottieOptions: {
        star_light: {
          animationData: starAnim.default,
          loop: false,
          autoplay: false,
        },
        star_dark: {
          animationData: starDarkAnim.default,
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
      if (!this.dropdownAnimation[key]) {
        this.dropdownAnimation[key] = {};
      }
      this.dropdownAnimation[key][type] = anim;
    },
    mouseover: function (key, type) {
      // const segments = this.toggles[key] ? [60, 96] : [0, 36];
      this.dropdownAnimation[key].black.stop();
      this.dropdownAnimation[key].white.stop();
      this.dropdownAnimation[key].black.playSegments([60, 5], true);
      this.dropdownAnimation[key].white.playSegments([60, 5], true);
      this.toggles[key] = !this.toggles[key];
    },
  },
};
</script>
<style scoped>
/* @import "~/assets/css/styles.css"; */
</style>
