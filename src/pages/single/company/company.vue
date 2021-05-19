<template>
  <div>
    <company-top />
    <div class="flex flex-wrap overflow-hidden mx-3 my-3">
      <div class="flex-1">
        <div class="text-xl dark:text-white">
          What <span class="font-bold">Awards</span> has Millie Bobby Brown won?
        </div>
      </div>
      <div class="flex">
        <a href="/single/company/company-award-seeall">
          <see-all />
        </a>
      </div>
    </div>
    <div class="flex flex-wrap overflow-hidden mx-3 pb-3">
      <five-academy />
      <five-academy />
      <five-academy />
      <five-academy />
      <five-academy />
    </div>
    <div class="flex flex-wrap overflow-hidden mx-3 my-3">
      <div class="flex-1">
        <div class="text-xl dark:text-white">
          What Nominations has Metro-Goldwyn-Mayer got?
        </div>
      </div>
      <div class="flex">
        <a href="/single/personaward">
          <see-all />
        </a>
      </div>
    </div>
    <div class="flex flex-wrap overflow-hidden mx-3 pb-3">
      <five-academy />
      <five-academy />
      <five-academy />
      <five-academy />
      <five-academy />
    </div>
    <div class="flex flex-wrap overflow-hidden mx-3 my-3">
      <div class="flex">
        <div class="text-xl dark:text-white">
          Millie Bobby Brown’s Awards and Nominations
        </div>
      </div>
    </div>
    <div class="flex flex-wrap overflow-hidden mx-3 pb-3 moreflex">
      <award-box />
      <award-box />
      <award-box />
      <award-box />
    </div>
    <load-more />
  </div>
</template>	
<script>
import CompanyTop from "@/components/single/award/company-top";
import FiveAcademy from "@/components/single/fiveacademy";
import SeeAll from "@/components/buttons/seeall";
import AwardBox from "@/components/single/person/award";
import LoadMore from "@/components/buttons/loadmore";

export default {
  components: {
    CompanyTop,
    FiveAcademy,
    SeeAll,
    AwardBox,
    LoadMore,
  },
  mounted() {},
};
</script>

