<template>
  <div v-if="showModal" class="">
    <div id="modal">
      <div class="modal-wrapper">
        <div class="modal-container">
          <img src="~/assets/images/pig.png" class="px-20" />
          <label for="fname" class="font-bold"
            >Add Movies or TV-Shows(Max. 50)</label
          ><br />
          <input type="search" class="" placeholder="Search by name..." />
          <div class="flew flex-wrap overflow-hidden">
            <whole-tv-show />
          </div>
          <button
            @click="hide"
            type="submit"
            value="Submit"
            class="create-btn"
            style=""
          >
            Create
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WholeTvShow from "@/components/user/tvshow/whole-tv-show";
export default {
  components: {
    WholeTvShow,
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    show() {
      this.showModal = true;
    },
    hide() {
      this.showModal = false;
    },
  },
};
</script>
<style scoped>
@import "~/assets/css/styles.css";
</style>