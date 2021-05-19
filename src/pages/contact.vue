<template>
  <div>
    <div class="flex flex-wrap overflow-hidden mx-3 mt-4">
      <div class="bg-black w-full rounded-xl" style="height: 24em">
        <div class="flex flex-wrap overflow-hidden">
          <div class="md:w-1/2" style="padding: 9%">
            <p class="text-white text-2xl">Contact Page</p>
          </div>
          <div class="md:w-1/2 p-2">
            <lottie
              :width="350"
              :height="350"
              :options="lottieOptions.awards"
              class="w-full displayNone"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap overflow-hidden moreflex mx-3 rounded-xl my-5">
      <div class="md:w-1/3 w-full bg-black p-4 text-white">
        <p>Questions, Comments, or Concerns?</p>
        <div class="flex text-white mt-3">
          <span><font-awesome-icon :icon="['fas', 'envelope']" /></span>
          <p class="ml-2">hello@awardsbox.com</p>
        </div>

        <div class="flex mt-3">
          <font-awesome-icon
            :icon="['fab', 'facebook']"
            style="font-size: 25px"
            class="mr-4"
          />
          <font-awesome-icon
            :icon="['fab', 'github']"
            style="font-size: 25px"
            class="mr-4"
          />
          <font-awesome-icon
            :icon="['fab', 'twitter']"
            style="font-size: 25px"
          />
        </div>
        <div class="flex">
          <lottie
            :width="200"
            :height="200"
            :options="lottieOptions.logoa"
            style="margin: 0 !important"
          />
        </div>
      </div>
      <div class="md:w-2/3 w-full p-5 bg-white">
        <form action="/">
          <div class="flex flex-wrap overflow-hidden">
            <div class="md:w-1/2 w-full mt-2 px-3">
              <label for="fname">First Name</label>

              <input
                type="text"
                id="fname"
                name="firstname"
                class="namefield"
              />
            </div>
            <div class="md:w-1/2 w-full mt-2 px-3">
              <label for="fname">Last Name</label>

              <input type="text" id="fname" name="lastname" class="namefield" />
            </div>
            <div class="md:w-1/2 w-full mt-2 px-3">
              <label for="fname">Email</label>

              <input
                type="email"
                id="Email"
                name="Email"
                class="namefield w-full"
              />
            </div>

            <div class="md:w-1/2 w-full mt-2 px-3">
              <label class="flex justify-between" for="fname">
                <p>Phone</p>
                <p>Optional</p>
              </label>
              <input type="text" id="fname" name="lastname" class="namefield" />
            </div>
            <div class="px-3 w-full mt-2">
              <label for="fname">Subject</label>

              <input
                type="text"
                id="fname"
                name="firstname"
                class="namefield"
              />
            </div>
            <div class="px-3 w-full mt-2">
              <label class="flex justify-between" for="fname">
                <p>Message</p>
                <p>Max. 500 characters</p>
              </label>
              <textarea
                id="subject"
                name="subject"
                placeholder="Write something.."
                style=""
                class="message"
              ></textarea>
            </div>
            <div class="px-3 w-full mt-2">
              <input type="submit" value="Submit" style="" class="subButton" />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>	
<script>
import AwardTop from "@/components/single/award/awardtop";
import PerAwardBlack from "@/components/single/award/peraward-black";
import PerAwardWhite from "@/components/single/award/peraward-white";
import lottie from "vue-lottie/src/lottie.vue";
import * as awardsAnimationData from "~/assets/lottie/Awards.json";
import * as awardsLogoData from "~/assets/lottie/awardLogo.json";
import * as LogoAnim from "~/assets/lottie/logo.json";

export default {
  components: {
    AwardTop,
    PerAwardBlack,
    PerAwardWhite,
    lottie,
  },
  data() {
    return {
      anim: {
        awardsAnim: null,
        awardLogo: null,
        logoAni: null,
      },
      lottieOptions: {
        awards: { animationData: awardsAnimationData.default },
        logo: { animationData: awardsLogoData.default },
        logoa: { animationData: LogoAnim.default },
      },
    };
  },
  methods: {},

  mounted() {},
};
</script>
<style>
.namefield {
  width: 100%;
  border: 1px solid;
  border-radius: 7px;
  height: 34px;
  outline: none;
  padding-left: 10px;
}
.message {
  width: 100%;
  border: 1px solid;
  border-radius: 7px;
  height: 134px;
  outline: none;
  padding-left: 10px;
}
.subButton {
  float: right;
  background: black;
  color: white;
  padding: 10px 21px 10px 21px;
  border-radius: 7px;
  outline: none;
}
@media only screen and (max-width: 770px) {
  .displayNone {
    display: none;
  }
}
</style>
