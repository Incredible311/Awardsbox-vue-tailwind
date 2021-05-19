<template>
  <div class="xl:w-1/5 academy">
    <div
      class="flex flex-wrap overflow-hidden shadow-md rounded-lg mr-2 px-3 pt-2 bg-back-white dark:bg-black mb-2"
    >
      <div class="w-1/5">
        <flag-lottie />
      </div>
      <div class="w-4/5">
        <p class="font-bold dark:text-white">5 Academy Awards</p>
        <div>
          <div>
            <p class="dark:text-white">Best Actor</p>
            <p class="dark:text-white">Best Director</p>
            <p class="dark:text-white">Best Picture</p>
          </div>

          <div v-show="readMore">
            <p class="dark:text-white">Best Picture</p>
          </div>
          <button
            class="text-custom-gray rounded-full px-1 py-1 text-sm"
            @click="readMore = !readMore"
          >
            <span v-if="readMore">
              <a
                data-show="Readmore"
                Readmore-collapse="false"
                class="showReadmores"
                style="color: #6d7380"
                >...</a
              >
            </span>
            <span v-else>
              <a
                data-show="Readmore"
                Readmore-collapse="false"
                class="showReadmores"
                style="color: #6d7380"
                >...</a
              >
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FlagLottie from "~/components/lottie/flag.vue";
export default {
  components: {
    FlagLottie,
  },
  data() {
    return {
      readMore: false,
    };
  },
};
</script>
<style scoped>
</style>