<template>
  <div class="bg-black rounded-xl mx-3 pb50">
    <div class="flex flex-wrap overflow-hidden">
      <div class="md:w-2/5 p-4 width100_1">
        <div class="flex flex-wrap overflow-hidden w-full justifyAround">
          <div class="md:w-1/3 width100_center mr10">
            <h1 class="text-white font-bold">AWARDS</h1>
            <div class="mt-3">
              <h1 class="text-gray-200 text-sm py-1">Academy Awards</h1>
              <h1 class="text-white text-sm py-1">Emmy Awards</h1>
              <h1 class="text-white text-sm py-1">BAFTA Awards</h1>
            </div>
          </div>
          <div class="md:w-1/3 width100_center mr10">
            <h1 class="text-white font-bold">COMPANY</h1>
            <div class="mt-3">
              <h1 class="text-gray-200 text-sm py-1">About</h1>
              <h1 class="text-white text-sm py-1">Contact</h1>
              <h1 class="text-white text-sm py-1">F.A.Q</h1>
              <h1 class="text-white text-sm py-1">Donate</h1>
              <h1 class="text-white text-sm py-1">Sitemap</h1>
            </div>
          </div>
          <div class="md:w-1/3 width100_center">
            <h1 class="text-white font-bold">LEGAL</h1>
            <div class="mt-3">
              <h1 class="text-gray-200 text-sm py-1">Privacy</h1>
              <h1 class="text-white text-sm py-1">Terms</h1>
            </div>
          </div>
        </div>
      </div>
      <div class="md:w-3/5 p-4 width100_1">
        <div class="flex flex-wrap overflow-hidden w-full">
          <div class="md:w-1/2 width100-footer">
            <h1 class="text-white font-bold">SUBSCRIBE TO OUR NEWSLETTER</h1>
            <div class="mt-3">
              <h1 class="text-gray-200 text-sm py-1">
                The latest news and articles sent to your inbox weekly
              </h1>
              <form action="/" class="email-subscribe mb-2 flex-center">
                <div class="flex displayGrid">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                  />
                  <input type="submit" value="subscribe" />
                </div>
              </form>
            </div>
          </div>
          <div class="md:w-1/2 width100-footer">
            <h1 class="text-white font-bold mb-3">
              EVERYWHERE AT ANY TIME YOU LIKE
            </h1>
            <div class="flex flex-wrap overflow-hidden justify-center">
              <div class="md:w-1/3 p-1 flex justify-center">
                <img src="@/assets/image/google-play.png" class="h-10" alt="" />
              </div>
              <div class="md:w-1/3 p-1 flex justify-center">
                <img src="@/assets/image/apple-tv.png" class="h-10" alt="" />
              </div>
              <div class="md:w-1/3 p-1 flex justify-center">
                <img
                  src="@/assets/image/mac-app-store.png"
                  class="h-10"
                  alt=""
                />
              </div>
            </div>
            <div class="flex flex-wrap overflow-hidden justify-center">
              <div class="md:w-1/3 p-1 flex justify-center">
                <img src="@/assets/image/apple-tv.png" class="h-10" alt="" />
              </div>
              <div class="md:w-1/3 p-1 flex justify-center">
                <img src="@/assets/image/microsoft.png" class="h-10" alt="" />
              </div>
              <div class="md:w-1/3 p-1 flex justify-center">
                <img
                  src="@/assets/image/amazon-appstore.png"
                  class="h-10"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <hr class="bg-white mx-4" />
    <div class="flex px-4 mb-3">
      <logo class="logoNone" />
      <div class="flex justify-between" style="width: 100%">
        <p class="text-white text-sm mt-4 ml-3">
          © 2021 Awards Box, All rights reserved.Film data from TMDb & Wikipedia
        </p>
        <div class="flex mt-4">
          <div @mouseover="mouseover('Twitter')">
            <lottie
              :width="20"
              :height="20"
              :options="lottieOptions.twitter"
              v-on:animCreated="(a) => handleAnimation(a, 'Twitter')"
              style="margin: 0 !important"
            />
          </div>

          <div @mouseover="mouseover('Facebook')">
            <lottie
              :width="20"
              :height="20"
              :options="lottieOptions.face"
              v-on:animCreated="(a) => handleAnimation(a, 'Facebook')"
              style="margin: 0 !important"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import lottie from "vue-lottie/src/lottie.vue";
import * as FacebookAnim from "~/assets/lottie/Facebook/Facebook_Dark.json";
import * as TwitterAnim from "~/assets/lottie/Twitter/Twitter_Dark.json";

export default {
  components: {
    lottie,
  },
  data() {
    return {
      anim: {},
      toggles: {
        Twitter: false,
        Facebook: false,
      },
      lottieOptions: {
        face: {
          animationData: FacebookAnim.default,
          loop: false,
          autoplay: false,
        },
        twitter: {
          animationData: TwitterAnim.default,
          loop: false,
          autoplay: false,
        },
      },
    };
  },
  methods: {
    handleAnimation: function (anim, key) {
      this.anim[key] = anim;
    },
    mouseover: function (key) {
      const segments = this.toggles[key] ? [20, 68] : [0, 0];
      this.anim[key].stop();
      this.anim[key].playSegments(segments, true);
      this.toggles[key] = !this.toggles[key];
    },
  },
};
</script>

<style>
@media only screen and (max-width: 425px) {
  .displayGrid {
    display: grid;
  }
  .justifyAround {
    justify-content: space-around;
  }
  .mr10 {
    margin-right: 10px;
  }
  .width100_1 {
    width: 100%;
  }
}

@media only screen and (max-width: 329px) {
  .width100_center {
    width: 100%;
    text-align: center;
    margin-top: 20px;
  }
  .logoNone {
    display: none;
  }
}

@media only screen and (max-width: 438px) {
  .pb50 {
    padding-bottom: 50px;
  }
}

@media only screen and (max-width: 970px) {
  .width100_1 {
    width: 100%;
    text-align: center;
  }
  .justifyAround {
    justify-content: space-around;
  }
  .flex-center {
    display: flex;
    justify-content: center;
  }
}

@media only screen and (max-width: 1342px) {
  .width100-footer {
    width: 100%;
    margin-bottom: 10px;
  }
}
</style>
