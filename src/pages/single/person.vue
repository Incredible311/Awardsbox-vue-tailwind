<template>
  <div>
    <person-top />
    <text-part />
    <div class="flex flex-wrap overflow-hidden mx-3 my-3">
      <div class="flex-1">
        <div class="text-xl dark:text-white">
          What <span class="font-bold">Awards</span> has Millie Bobby Brown won?
        </div>
      </div>
      <div class="flex">
        <a href="/single/personaward">
          <see-all />
        </a>
      </div>
    </div>
    <div class="flex flex-wrap overflow-hidden mx-3 pb-3 justify-center">
      <five-academy />
      <five-academy />
      <five-academy />
      <five-academy />
      <five-academy />
    </div>
    <div class="flex flex-wrap overflow-hidden mx-3 my-3">
      <div class="flex-1">
        <div class="text-xl dark:text-white">
          What Nominations has Millie Bobby Brown got?
        </div>
      </div>
      <div class="flex">
        <a href="/single/personaward">
          <see-all />
        </a>
      </div>
    </div>
    <div class="flex flex-wrap overflow-hidden mx-3 pb-3 justify-center">
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
      <award-box />
      <award-box />
    </div>
    <load-more />
  </div>
</template>	
<script>
import PersonTop from "@/components/single/person/top";
import FiveAcademy from "@/components/single/fiveacademy";
import TextPart from "@/components/single/person/text";
import SeeAll from "@/components/buttons/seeall";
import AwardBox from "@/components/single/person/award";
import LoadMore from "@/components/buttons/loadmore";

export default {
  components: {
    PersonTop,
    FiveAcademy,
    TextPart,
    SeeAll,
    AwardBox,
    LoadMore,
  },
  mounted() {},
};
</script>
<style scoped>
@media only screen and (max-width: 640px) {
  .academy {
    width: 100%;
    margin-bottom: 10px;
  }
}
</style>

