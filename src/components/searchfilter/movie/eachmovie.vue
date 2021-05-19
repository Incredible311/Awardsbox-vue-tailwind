<template>
  <div class="swiper-slide flex flex-col my-1 overflow-hidden">
    <add-modal ref="AddModal" @close="onToggleEye"></add-modal>
    <button @click="openAdd">
      <font-awesome-icon
        v-if="eyeVisible"
        :icon="['fas', 'ellipsis-h']"
        class="add-selection"
        @click="onToggleEye"
      />
    </button>
    <img
      src="~/assets/images/Homepage/firstpage image for the test.png"
      alt=""
      class="rounded-xl shadow-md w-full"
      data-v-2a183b29=""
    />
    <div class="pt-2" data-v-2a183b29="">
      <h1 class="dark:text-white text-xs" data-v-2a183b29="">
        Eternal Sunshine of the Spotless Mind(2014)
      </h1>
    </div>
  </div>
</template>
<script>
import AddModal from "@/components/modal/add";
import { faBorderNone } from "@fortawesome/free-solid-svg-icons";
export default {
  components: {
    AddModal,
  },
  data() {
    return {
      eyeVisible: true,
    };
  },
  methods: {
    openAdd() {
      this.$refs.AddModal.show();
    },
    onToggleEye() {
      this.eyeVisible = !this.eyeVisible;
    },
  },
};
</script>
<style scoped>
@import "~/assets/css/styles.css";
</style>