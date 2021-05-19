<template>
  <div class="flex flex-wrap overflow-hidden">
    <div class="lg:w-1/4 social">
      <div class="text-center bg-black m-1 p-1 px-2 rounded-full">
        <p class="text-white px-2" style="font-size: 14px">
          <lottie-dynamic
            :isOnHover="true"
            :isOnClick="false"
            :lottieOptionsBlack="facebookLottieBlack.default"
            :lottieOptionsWhite="facebookLottieBlack.default"
            socialTitle="Facebook"
            :playSegment="true"
            :segments="[180, 90]"
            :closeSegments="[70, 80]"
          />
        </p>
      </div>
    </div>
    <div class="lg:w-1/4 social">
      <div class="text-center bg-black m-1 p-1 px-2 rounded-full">
        <p class="text-white px-2" style="font-size: 14px">
          <lottie-dynamic
            :isOnHover="true"
            :isOnClick="false"
            :lottieOptionsBlack="googleAnim.default"
            :lottieOptionsWhite="googleAnim.default"
            socialTitle="Google"
          />
        </p>
      </div>
    </div>
    <div class="lg:w-1/4 social">
      <div class="text-center bg-black m-1 p-1 px-2 rounded-full">
        <p class="text-white px-2" style="font-size: 14px">
          <lottie-dynamic
            :isOnHover="true"
            :isOnClick="false"
            :lottieOptionsBlack="twitterAnim.default"
            :lottieOptionsWhite="twitterAnim.default"
            socialTitle="Twitter"
            :playSegment="true"
            :segments="[240, 120]"
            :closeSegments="[100, 110]"
          />
        </p>
      </div>
    </div>
    <div class="lg:w-1/4 social">
      <div class="text-center bg-black m-1 p-1 px-2 rounded-full">
        <p class="text-white px-2" style="font-size: 14px">
          <lottie-dynamic
            :isOnHover="true"
            :isOnClick="false"
            :lottieOptionsBlack="appleAnim.default"
            :lottieOptionsWhite="appleAnim.default"
            socialTitle="Apple"
          />
        </p>
      </div>
    </div>
    <div class="lg:w-1/4 social">
      <div class="text-center bg-black m-1 p-1 px-2 rounded-full">
        <p class="text-white px-2" style="font-size: 14px">
          <lottie-dynamic
            :isOnHover="true"
            :isOnClick="false"
            :lottieOptionsBlack="githubAnim.default"
            :lottieOptionsWhite="githubAnim.default"
            socialTitle="Github"
          />
        </p>
      </div>
    </div>
    <div class="lg:w-1/4 social">
      <div class="text-center bg-black m-1 p-1 rounded-full">
        <p class="text-white px-2" style="font-size: 14px">
          <lottie-dynamic
            :isOnHover="true"
            :isOnClick="false"
            :lottieOptionsBlack="microsoftAnim.default"
            :lottieOptionsWhite="microsoftAnim.default"
            socialTitle="Microsoft"
          />
        </p>
      </div>
    </div>
    <div class="lg:w-1/4 social">
      <div class="text-center bg-black m-1 p-1 rounded-full">
        <p class="text-white px-2" style="font-size: 14px">
          <lottie-dynamic
            :isOnHover="true"
            :isOnClick="false"
            :lottieOptionsBlack="yahooAnim.default"
            :lottieOptionsWhite="yahooAnim.default"
            socialTitle="Yahoo"
          />
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import * as facebookLottieBlack from "~/assets/lottie/social/Facebook/Facebook_Dark.json";
import * as facebookLottieWhite from "~/assets/lottie/social/Facebook/Facebook_light.json";
import * as googleAnim from "~/assets/lottie/social/Google/Google_light.json";
import * as twitterAnim from "~/assets/lottie/social/Twitter/Twitter_dark.json";
import * as appleAnim from "~/assets/lottie/social/Apple/Apple_light.json";
import * as githubAnim from "~/assets/lottie/social/Github/Github_dark.json";
import * as microsoftAnim from "~/assets/lottie/social/Microsoft/Microsoft_dark.json";
import * as yahooAnim from "~/assets/lottie/social/Yahoo/Yahoo_dark.json";
export default {
  data() {
    return {
      facebookLottieWhite,
      facebookLottieBlack,
      googleAnim,
      twitterAnim,
      appleAnim,
      githubAnim,
      microsoftAnim,
      yahooAnim,
    };
  },
};
</script>

<style>
</style>