<template>
  <div
    class="overflow-hidden shadow-md rounded-lg mr-2 px-3 dark:bg-custom-gray py-3"
  >
    <!-- <share-modal /> -->
    <div class="w-1/1 overflow-hidden my-2 mx-4">
      <div class="flex bg-black text-white rounded-full p-1">
        <font-awesome-icon :icon="['fas', 'heart']" class="pt-1" />
        <h1
          class="text-base rounded-full dark:text-white transition duration-300 ease-in-out pl-1"
        >
          Add to Favourites
        </h1>
      </div>
    </div>
    <div class="w-1/1 overflow-hidden my-2 mx-4">
      <div class="flex bg-black text-white rounded-full p-1">
        <font-awesome-icon :icon="['fas', 'plus']" class="pt-1" />
        <h1
          class="text-base rounded-full dark:text-white transition duration-300 ease-in-out pl-1"
        >
          Add to Watchlist
        </h1>
      </div>
    </div>
    <div class="w-1/1 overflow-hidden my-2 mx-4">
      <div class="flex bg-black text-white rounded-full p-1">
        <font-awesome-icon :icon="['fas', 'check']" class="pt-1" />
        <h1
          class="text-base rounded-full dark:text-white transition duration-300 ease-in-out pl-1"
        >
          Seen it
        </h1>
      </div>
    </div>
    <div class="w-1/1 overflow-hidden mt-2 mb-1 mx-4">
      <div class="flex bg-black text-white rounded-full p-1">
        <font-awesome-icon :icon="['fas', 'share-alt']" class="pt-1" />
        <h1
          class="text-base rounded-full dark:text-white transition duration-300 ease-in-out pl-1"
          @click="openModal"
        >
          Share it
        </h1>
      </div>
    </div>
  </div>
</template>
<script>
import ShareModal from "@/components/user/sharemodal";
export default {
  components: {
    ShareModal,
  },
  methods: {
    openModal() {
      this.$refs.sharemodal.show();
    },
    sharemodal() {
      this.$refs.modalfor.show();
    },
  },
};
</script>