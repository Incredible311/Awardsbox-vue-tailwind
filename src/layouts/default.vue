<template>
  <div class="h-screen flex overflow-hidden">
    <page-loader />
    <sidebar />
    <div class="flex-1 mx-auto w-0 flex flex-col xl:px-0 dark:bg-black">
      <top />
      <div
        class="flex-1 relative overflow-y-auto focus:outline-none bg-custom-white dark:bg-custom-gray"
      >
        <Nuxt />
        <Footer />
      </div>
      <div class="nav-bottom">
        <bottom />
      </div>
    </div>
  </div>
</template>
<script>
import PageLoader from "@/components/loadingspinner/page-loader";
export default {
  components: {
    PageLoader,
  },
};
</script>
<style>
@import "~/assets/css/styles.css";
#app {
  font-family: "Inter", sans-serif;
}
</style>
