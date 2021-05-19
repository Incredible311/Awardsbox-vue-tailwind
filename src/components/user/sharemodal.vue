<template>
  <div class="modal-container">
    <div class="flex">
      <div class="flex-1">
        <lottie
          :width="300"
          :height="300"
          :options="lottieOptions"
          v-on:animCreated="handleAnimation"
        />
        <p class="font-bold">Share It</p>
      </div>
    </div>
    <div class="flex flex-wrapper overflow-hidden">
      <div class="w-1/3 mr-1">
        <div
          class="flex bg-custom-gray text-white rounded-full px-1 py-1"
          @mouseover="mouseover('faceAnim')"
        >
          <lottie
            :width="20"
            :height="20"
            style="margin: 0"
            :options="lottieOptions.facebook"
            v-on:animCreated="(a) => handleAnimation(a, 'faceAnim')"
          />
          <p style="font-size: 13px">Share on Facebook</p>
        </div>
      </div>
      <div class="w-1/3 mr-1">
        <div
          class="flex bg-custom-gray text-white rounded-full px-1 py-1"
          @mouseover="mouseover('twitterAnim')"
        >
          <lottie
            :width="20"
            :height="20"
            style="margin: 0"
            :options="lottieOptions.twitter"
            v-on:animCreated="(a) => handleAnimation(a, 'twitterAnim')"
          />
          <p style="font-size: 13px">Share on Twitter</p>
        </div>
      </div>
      <div class="w-1/3">
        <div class="flex bg-custom-gray text-white rounded-full px-1 py-1">
          <div>
            <reddit-lottie />
          </div>

          <p style="font-size: 13px">Share on Reddit</p>
        </div>
      </div>
    </div>
    <div class="flex flex-wrapper overflow-hidden mt-2">
      <div class="w-1/3 mr-1">
        <div class="flex bg-custom-gray text-white rounded-full px-1 py-1">
          <font-awesome-icon
            :icon="['fab', 'facebook-messenger']"
            style="margin-top: 4px; margin-right: 2px"
          />
          <p style="font-size: 13px">Share on Messenger</p>
        </div>
      </div>
      <div class="w-1/3 mr-1">
        <div
          class="flex bg-custom-gray text-white rounded-full px-1 py-1"
          @mouseover="mouseover('pinterestAnim')"
        >
          <lottie
            :width="20"
            :height="20"
            style="margin: 0"
            :options="lottieOptions.pinterest"
            v-on:animCreated="(a) => handleAnimation(a, 'pinterestAnim')"
          />
          <p style="font-size: 13px">Share on Pinterest</p>
        </div>
      </div>
      <div class="w-1/3">
        <div
          class="flex bg-custom-gray text-white rounded-full px-1 py-1"
          @mouseover="mouseover('telegramAnim')"
        >
          <lottie
            :width="20"
            :height="20"
            style="margin: 0"
            :options="lottieOptions.telegram"
            v-on:animCreated="(a) => handleAnimation(a, 'telegramAnim')"
          />
          <p style="font-size: 13px">Share on Telegram</p>
        </div>
      </div>
    </div>
    <div class="flex flex-wrapper overflow-hidden mt-2">
      <div class="w-1/3 mr-1">
        <div
          class="flex bg-custom-gray text-white rounded-full px-1 py-1"
          @mouseover="mouseover('whatsappAnim')"
        >
          <lottie
            :width="20"
            :height="20"
            style="margin: 0"
            :options="lottieOptions.whatsapp"
            v-on:animCreated="(a) => handleAnimation(a, 'whatsappAnim')"
          />
          <p style="font-size: 13px">Share on WhatsApp</p>
        </div>
      </div>
      <div class="w-1/3 mr-1">
        <div
          class="flex bg-custom-gray text-white rounded-full px-1 py-1"
          @mouseover="mouseover('linkedinAnim')"
        >
          <lottie
            :width="18"
            :height="18"
            style="margin: 0"
            :options="lottieOptions.linkedin"
            v-on:animCreated="(a) => handleAnimation(a, 'linkedinAnim')"
          />
          <p style="font-size: 13px">Share on LinkedIn</p>
        </div>
      </div>
    </div>
    <div class="flex-1 mt-2">
      <p class="font-bold">Page Link</p>
    </div>
    <div class="flex">
      <div class="flex-1">
        <input
          type="text"
          value="https://awardsbox.com/"
          id="data"
          style="width: 100%; border: 1px solid; border-radius: 5px"
        />
      </div>
      <div class="flex bg-custom-gray text-white rounded-full px-1 py-1 mx-2">
        <copy-lottie />
        <p style="font-size: 13px">Copy Link</p>
      </div>
    </div>
    <!-- <button @click="hide"  type="submit" value="Submit" class="create-btn" style="">Create</button> -->
  </div>
</template>

<script>
import lottie from "vue-lottie/src/lottie.vue";
import * as animationData from "~/assets/lottie/thanks-you.json";
import * as facebookAnim from "~/assets/lottie/Facebook/Facebook_Dark.json";
import * as twitterAnim from "~/assets/lottie/Twitter/Twitter_dark.json";
import * as redditAnim from "~/assets/lottie/Reddit/Reddit_dark.json";
import * as pinterestAnim from "~/assets/lottie/Pinterest/Pinterest_dark.json";
import * as telegramAnim from "~/assets/lottie/Telegram/Telegram_dark.json";
import * as whatsappAnim from "~/assets/lottie/Whatsapp/Whatsapp_dark.json";
import * as linkedinAnim from "~/assets/lottie/Linkedin/Linkedin_dark.json";
import * as copyAnim from "~/assets/lottie/Copy/copy_dark.json";
import CopyLottie from "~/components/lottie/copy.vue";
import RedditLottie from "~/components/lottie/reddit.vue";
export default {
  components: {
    lottie,
    CopyLottie,
    RedditLottie,
  },
  data() {
    return {
      showModal: false,
      anim: {
        faceAnim: null,
        twitterAnim: null,
        redditAnim: null,
        pinterestAnim: null,
        telegramAnim: null,
      },
      lottieOptions: {
        animationData: animationData.default,
        facebook: {
          animationData: facebookAnim.default,
          loop: false,
          autoplay: false,
        },
        twitter: {
          animationData: twitterAnim.default,
          loop: false,
          autoplay: false,
        },
        reddit: {
          animationData: redditAnim.default,
          loop: false,
          autoplay: false,
        },
        pinterest: {
          animationData: pinterestAnim.default,
          loop: false,
          autoplay: false,
        },
        telegram: {
          animationData: telegramAnim.default,
          loop: false,
          autoplay: false,
        },
        whatsapp: {
          animationData: whatsappAnim.default,
          loop: false,
          autoplay: false,
        },
        linkedin: {
          animationData: linkedinAnim.default,
          loop: false,
          autoplay: false,
        },
        copy: {
          animationData: copyAnim.default,
          loop: false,
          autoplay: false,
        },
      },
    };
  },
  mounted() {},
  methods: {
    show() {
      this.showModal = true;
    },
    hide() {
      this.showModal = false;
    },
    handleAnimation: function (anim, type) {
      this.anim[type] = anim;
    },
    mouseover: function (key) {
      this.anim[key].stop();
      // this.anim[key].play();
      this.anim[key].playSegments([0, 55], true);
    },
  },
};
</script>
