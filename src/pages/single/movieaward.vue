<template>
  <div>
    <movie-drop />
    <six-star />
    <six-star />
    <load-more />
    <six-star />
    <six-star />
    <load-more />
  </div>
</template>
<script>
import MovieDrop from "@/components/single/moviebackdrop";
import SixStar from "@/components/single/award/sixstar";
import LoadMore from "@/components/buttons/loadmore";

export default {
  components: {
    MovieDrop,
    SixStar,
    LoadMore,
  },
  mounted() {},
};
</script>
<style scoped>
</style>