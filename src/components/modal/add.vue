<template>
  <div id="add-modal" v-if="show">
    <div @click="$emit('close')">
      <div class="flex">
        <div class="flex-1">
          <svg viewBox="0 0 150 30">
            <text x="0" y="20" style="font-weight: bold">
              Stranger Things 3
            </text>
          </svg>
        </div>
        <div class="flex mt-1 mr-1">
          <font-awesome-icon :icon="['fas', 'times-circle']" />
        </div>
      </div>
    </div>
    <div
      class="flex bg-custom-gray rounded-full mb-1"
      @click="
        toggleclick('heart'),
          buttonsData[0].text === 'Add'
            ? (buttonsData[0].text = 'Remove')
            : (buttonsData[0].text = 'Add')
      "
    >
      <button>
        <lottie
          :width="40"
          :height="40"
          :options="lottieOptions.heart"
          v-on:animCreated="(a) => handleAnimation(a, 'heart')"
        />
      </button>
      <svg v-if="buttonsData[0].text === 'Add'" viewBox="0 0 150 30">
        <text
          x="0"
          y="20"
          color="#fff"
          style="font-weight: bold; fill: currentColor"
        >
          Add To Favourites
        </text>
      </svg>
      <svg v-else viewBox="0 0 200 30">
        <text
          x="0"
          y="20"
          color="#fff"
          style="font-weight: bold; fill: currentColor"
        >
          Remove From Favourites
        </text>
      </svg>
    </div>

    <div
      class="flex bg-custom-gray rounded-full mb-1"
      @click="
        toggleclick('plus'),
          buttonsData[1].text === 'Add'
            ? (buttonsData[1].text = 'Remove')
            : (buttonsData[1].text = 'Add')
      "
    >
      <button>
        <lottie
          :width="25"
          :height="25"
          class="p-1"
          :options="lottieOptions.plus"
          v-on:animCreated="(a) => handleAnimation(a, 'plus')"
          style="margin-left: 8px"
        />
      </button>
      <svg viewBox="0 0 200 30" style="margin-left: 8px">
        <text
          x="0"
          y="20"
          color="#fff"
          style="font-weight: bold; fill: currentColor"
        >
          {{ buttonsData[1].text }} to Watchlist
        </text>
      </svg>
    </div>

    <div
      class="flex bg-custom-gray rounded-full mb-1"
      @click="
        toggleclick('plus_two'),
          buttonsData[2].text === 'Add'
            ? (buttonsData[2].text = 'Remove')
            : (buttonsData[2].text = 'Add')
      "
    >
      <button>
        <lottie
          :width="25"
          :height="25"
          class="p-1"
          :options="lottieOptions.plus"
          v-on:animCreated="(a) => handleAnimation(a, 'plus_two')"
          style="margin-left: 8px"
        />
      </button>
      <svg viewBox="0 0 150 30" style="margin-left: 8px">
        <text
          x="0"
          y="20"
          color="#fff"
          style="font-weight: bold; fill: currentColor"
        >
          {{ buttonsData[2].text }} Seen It
        </text>
      </svg>
    </div>
  </div>
  <div v-else />
</template>

<script>
import lottie from "vue-lottie/src/lottie.vue";
import * as heartAnimData from "~/assets/lottie/heart.json";
import * as plusAnimData from "~/assets/lottie/Add_Remove/add_remove_dark.json";

export default {
  props: ["show"],
  components: {
    lottie,
  },

  data() {
    return {
      anim: {
        heartAnim: null,
        plusAnim: null,
      },
      toggles: {
        plus: false,
        plus_two: false,
      },
      toggleheart: {
        heart: false,
      },
      lottieOptions: {
        heart: {
          animationData: heartAnimData.default,
          loop: false,
          autoplay: false,
        },
        plus: {
          animationData: plusAnimData.default,
          loop: false,
          autoplay: false,
        },
      },
      buttonsData: [
        {
          text: "Add",
          value: "add",
        },
        {
          text: "Add",
          value: "add",
        },
        {
          text: "Add",
          value: "add",
        },
      ],
    };
  },
  watch: {
    show: function (newVal, oldVal) {},
  },
  methods: {
    handleAnimation: function (anim, key) {
      this.anim[key] = anim;
      // if (this.toggles[key]) {
      //   anim.playSegments([47, 48], true);
      // }
    },
    toggleclick: function (key) {
      const segments = this.toggles[key] ? [0, 5] : [25, 60];
      this.anim[key].stop();
      this.anim[key].playSegments(segments, true);
      this.toggles[key] = !this.toggles[key];
    },
  },
};
</script>
<style scoped>
/* @import "~/assets/css/styles.css"; */

@media only screen and (max-width: 640px) {
  .stranger {
    font-size: 18px;
  }
  .addSpell {
    font-size: 16px;
  }
  #add-modal {
    margin-top: 0px;
  }
}

.padding10 {
  padding: 10px;
}
</style>