<template>
  <fragment>
    <lottie
      v-show="isDark === false"
      :width="17"
      :height="17"
      :options="options"
      class="m-0"
      v-on:animCreated="animCreated"
    />
    <lottie
      v-show="isDark === true"
      v-if="whiteOptions"
      :width="17"
      :height="17"
      :options="whiteOptions"
      class="m-0"
      v-on:animCreated="animCreatedWhite"
    />
  </fragment>
</template>

<script>
import lottie from "vue-lottie/src/lottie.vue";
import { Fragment } from "vue-fragment";
export default {
  components: { Fragment, lottie },
  props: {
    options: {
      type: Object,
    },
    animCreated: { type: Function },
    animCreatedWhite: { type: Function },
    whiteOptions: {
      type: Object,
    },
  },
  computed: {
    isDark() {
      return this.$store.state.darkMode;
    },
  },
};
</script>

<style>
</style>