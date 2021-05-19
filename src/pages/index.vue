<template>
  <div class="mx-3">
    <carousel-case />
    <carousel-case-second />
    <carousel-case-third />
    <carousel-case-fourth />
    <carousel-case-fifth />
    <load-more />
    <div class="mt-8 mb-2">
      <div class="flex">
        <div class="dark:text-white text-lg mb-1 mt-2 flex-1 font-bold">
          Recent Blog Posts
        </div>
        <a href="/blog/automatic-blog" class="flex mt-3">
          <see-all />
        </a>
      </div>
    </div>
    <div class="flex flex-wrap overflow-hidden">
      <post-short />
      <post-short />
      <post-short />
      <post-short />
      <post-short />
      <post-short />
    </div>
    <div></div>
    <div>
      <b-button v-b-modal.modal-1 hide-footer hide-header
        >It will be changed after signed 20sec..</b-button
      >
      <b-modal id="modal-1" hide-footer hide-header>
        <create-profile />
      </b-modal>
    </div>
  </div>
</template>
<script>
import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import CarouselCase from "@/components/carousel/carouselcasefirst";
import CarouselCaseSecond from "@/components/carousel/carouselcasesecond";
import CarouselCaseThird from "@/components/carousel/carouselcasethird";
import CarouselCaseFourth from "@/components/carousel/carouselcasefourth";
import CarouselCaseFifth from "@/components/carousel/carouselcasefifth";
import ActorEight from "@/components/actorlist/actorforeight";
import SeeAll from "@/components/buttons/seeall";
import PerActor from "@/components/actorlist/actor";
import PostShort from "@/components/blog/blog-post-short";
import LoadMore from "@/components/buttons/loadmore";
import CreateProfile from "@/components/modal/profile";

export default {
  components: {
    CarouselCase,
    ActorEight,
    CarouselCaseSecond,
    CarouselCaseThird,
    CarouselCaseFourth,
    CarouselCaseFifth,
    SeeAll,
    PerActor,
    PostShort,
    LoadMore,
    CreateProfile,
  },
  data() {
    return {
      eyeVisible: true,
    };
  },
  methods: {
    openAdd() {
      this.$refs.AddModal.show();
    },
    onToggleEye() {
      this.eyeVisible = !this.eyeVisible;
    },
  },
  created() {
    this.$store.dispatch("getAllOfTrendingMovies");
    this.$store.dispatch("getAllOfPopularMovies");
    this.$store.dispatch("getAllOfPersonalMovies");
    this.$store.dispatch("getAllOfFantasyMovies");
  },
  mounted() {
    new Swiper(".carousel-9", {
      slidesPerView: 9,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
        1224: {
          slidesPerView: 7,
          spaceBetween: 20,
        },

        1424: {
          slidesPerView: 9,
          spaceBetween: 20,
        },
      },
    }),
      new Swiper(".carousel-6", {
        slidesPerView: 6,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
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
            slidesPerView: 4,
            spaceBetween: 20,
          },

          1424: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
        },
      }),
      new Swiper(".carousel-4", {
        slidesPerView: 4,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1424: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        },
      }),
      new Swiper(".carousel-7", {
        slidesPerView: 7,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          320: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
          1424: {
            slidesPerView: 7,
            spaceBetween: 20,
          },
        },
      }),
      new Swiper(".carousel-5", {
        slidesPerView: 5,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          320: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1424: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        },
      });
  },
};
</script>
<style>
.modal-body {
  margin: 0 auto;
}
</style>
