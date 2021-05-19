<template>
  <div>
    <company-top />
    <six-star />
    <six-star />
    <load-more />
    <six-star />
    <six-star />
    <load-more />
  </div>
</template> 
<script>
import CompanyTop from "@/components/single/award/company-top";
import FiveAcademy from "@/components/single/fiveacademy";
import SeeAll from "@/components/buttons/seeall";
import AwardBox from "@/components/single/person/award";
import SixStar from "@/components/single/award/sixstar";
import LoadMore from "@/components/buttons/loadmore";

export default {
  components: {
    CompanyTop,
    FiveAcademy,
    SeeAll,
    AwardBox,
    SixStar,
    LoadMore,
  },
  mounted() {},
};
</script>
<style scoped>
@import "~/assets/css/styles.css";
</style>
