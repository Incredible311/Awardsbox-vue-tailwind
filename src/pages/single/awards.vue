<template>
  <div>
    <div class="flex flex-wrap overflow-hidden mx-2 mt-4">
      <div class="bg-black w-full rounded-xl mx-2" style="height: 24em">
        <div class="flex flex-wrap overflow-hidden">
          <div class="md:w-1/2" style="padding: 9%">
            <p class="text-white text-xl">Discover Awards in the World!</p>
            <p class="text-white text-xl mt-4">
              Academy Awards, Emmy Awards, Cannes Film Festival and more ...
            </p>
          </div>
          <div class="md:w-1/2 p-2">
            <lottie
              :width="350"
              :height="350"
              :options="lottieOptions.awards"
              class="w-full displayNone"
            />
          </div>
        </div>
      </div>
      <div class="">
        <lottie
          :options="lottieOptions.logo"
          class="w-full rounded-full w-32 h-32 -mt-20 ml-20 person-img"
          style="
            width: 100px;
            height: 100px;
            overflow: hidden;
            margin: 0px auto;
            border: 1px solid white;
            padding: 15%;
            margin-top: -56%;
            margin-left: 34%;
            background: #181818;
          "
        />
      </div>
    </div>
    <div class="flex flex-wrap overflow-hidden moreflex mx-2 justify-center">
      <per-award-black />
      <per-award-white />
      <per-award-black />
      <per-award-white />
      <per-award-white />
      <per-award-black />
      <per-award-white />
      <per-award-black />
      <per-award-black />
      <per-award-white />
      <per-award-black />
      <per-award-white />
      <per-award-white />
      <per-award-black />
      <per-award-white />
      <per-award-black />
    </div>
    <load-more />
  </div>
</template>	
<script>
import AwardTop from "@/components/single/award/awardtop";
import PerAwardBlack from "@/components/single/award/peraward-black";
import PerAwardWhite from "@/components/single/award/peraward-white";
import LoadMore from "@/components/buttons/loadmore";
import lottie from "vue-lottie/src/lottie.vue";
import * as awardsAnimationData from "~/assets/lottie/Awards.json";
import * as awardsLogoData from "~/assets/lottie/awardLogo.json";

export default {
  components: {
    AwardTop,
    PerAwardBlack,
    PerAwardWhite,
    LoadMore,
    lottie,
  },
  data() {
    return {
      anim: {
        awardsAnim: null,
        awardLogo: null,
      },
      lottieOptions: {
        awards: { animationData: awardsAnimationData.default },
        logo: { animationData: awardsLogoData.default },
      },
    };
  },
  methods: {},

  mounted() {},
};
</script>
<style scoped>
@media only screen and (max-width: 770px) {
  .displayNone {
    display: none;
  }
}
</style>
