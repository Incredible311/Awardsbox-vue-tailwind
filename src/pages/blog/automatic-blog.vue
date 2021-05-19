<template>
  <div>
    <div class="mx-3">
      <p class="dark:text-white my-2 mt-2 text-xl">
        Academy Award-Winning 1950 Movies
      </p>
    </div>
    <div class="flex flex-wrap overflow-hidden mx-2">
      <automatic-blog />
      <automatic-blog />
      <automatic-blog />
      <automatic-blog />
      <automatic-blog />
      <automatic-blog />
      <automatic-blog />
      <automatic-blog />
      <automatic-blog />
      <automatic-blog />
      <automatic-blog />
      <automatic-blog />
    </div>
    <load-more />
  </div>
</template>	
<script>
import AutomaticBlog from "@/components/blog/automatic-blog";
import LoadMore from "@/components/buttons/loadmore";

export default {
  components: {
    AutomaticBlog,
    LoadMore,
  },
  mounted() {},
  data() {
    return {};
  },
};
</script>
<style>
</style>
