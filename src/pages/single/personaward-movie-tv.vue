<template>
  <div>
    <person-top />
    <six-star />
    <six-star />
    <load-more />
    <six-star />
    <six-star />
    <load-more />
  </div>
</template>
<script>
import PersonTop from "@/components/single/person/top";
import SixStar from "@/components/single/award/sixstar";
import LoadMore from "@/components/buttons/loadmore";

export default {
  components: {
    PersonTop,
    SixStar,
    LoadMore,
  },
};
</script>
