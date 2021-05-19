<template>
  <div class="flex flex-wrap overflow-hidden">
    <div
      class="block-left p-3 px-5"
      style="display: block; margin-left: auto; margin-right: auto"
    >
      <div class="signin">
        <div class="">
          <lottie
            :width="214"
            :options="lottieOptions.Logo"
            v-on:animCreated="handleAnimation($event, 'LogoAnim')"
          />
          <p class="text-2xl mt-3">Sign in to your account</p>
          <p>Continue with</p>
        </div>
        <signin-social />
        <form action="/action_page.php" class="mt-3 loginPart">
          <label for="lname">Username or Email address</label>
          <input
            type="text"
            id="lname"
            name="lname"
            class="inputs"
          /><br /><br />
          <div class="flex justify-between">
            <label for="lname">Password</label>
            <label for="" class="text-gray-700">Forget password?</label>
          </div>

          <input
            type="password"
            id="lname"
            name="lname"
            class="inputs"
          /><br /><br />

          <button
            class="flex justify-center w-full bg-black text-white py-1 rounded-full my-1"
            @mouseover="mouseover('signinAnim')"
          >
            <lottie
              :width="30"
              :height="30"
              style="margin: 0"
              :options="lottieOptions.Signin"
              v-on:animCreated="(a) => handleAnimation(a, 'signinAnim')"
            />

            <span style="margin-top: 5px; margin-bottom: 3px">Sign In</span>
          </button>
        </form>
        <div class="flex"></div>
      </div>
    </div>
    <div class="block-right">
      <lottie
        class="h-full"
        style="width: 146%; overflow: hidden; margin: 0 auto; margin-left: -21%"
        :options="lottieOptions.Back"
        v-on:animCreated="handleAnimation($event, 'BackAnim')"
      />
    </div>
  </div>
</template>
<script>
import lottie from "vue-lottie/src/lottie.vue";
import * as FacebookAnim from "~/assets/lottie/facebook.json";
import * as TwitterAnim from "~/assets/lottie/twitter.json";
import * as LogoAnim from "~/assets/lottie/logo.json";
import * as BackAnim from "~/assets/lottie/signupback.json";
import lottieDynamic from "~/components/lottie-dynamic";
import * as facebookLottieBlack from "~/assets/lottie/social/Facebook/Facebook_Dark.json";
import * as facebookLottieWhite from "~/assets/lottie/social/Facebook/Facebook_light.json";
import * as googleAnim from "~/assets/lottie/social/Google/Google_light.json";
import * as twitterAnim from "~/assets/lottie/social/Twitter/Twitter_dark.json";
import * as appleAnim from "~/assets/lottie/social/Apple/Apple_light.json";
import * as githubAnim from "~/assets/lottie/social/Github/Github_dark.json";
import * as microsoftAnim from "~/assets/lottie/social/Microsoft/Microsoft_dark.json";
import * as yahooAnim from "~/assets/lottie/social/Yahoo/Yahoo_dark.json";
import * as signinAnim from "~/assets/lottie/Sign_in/Sign_In_Dark.json";
import FacebookLottie from "~/components/lottie/facebook-one.vue";
import signinSocial from "~/components/social-buttons";
export default {
  components: {
    lottie,
    lottieDynamic,
    FacebookLottie,
    signinSocial,
  },
  layout: "signin",
  data() {
    return {
      facebookLottieWhite,
      facebookLottieBlack,
      FacebookAnim,
      googleAnim,
      twitterAnim,
      appleAnim,
      githubAnim,
      microsoftAnim,
      yahooAnim,
      signinSocial,
      anim: {
        FacebookAnim: null,
        TwitterAnim: null,
        LogoAnim: null,
        BackAnim: null,
      },
      lottieOptions: {
        Facebook: { animationData: FacebookAnim.default },
        Twitter: { animationData: TwitterAnim.default },
        Logo: {
          animationData: LogoAnim.default,
        },
        Back: {
          animationData: BackAnim.default,
        },
        Signin: {
          animationData: signinAnim.default,
          loop: false,
          autoplay: false,
        },

        // second: { animationData: secondAnimationData.default },
      },
    };
  },
  computed: {
    isDark() {
      return this.$store.state.darkMode;
    },
  },
  methods: {
    handleAnimation: function (anim, type) {
      this.anim[type] = anim;
    },
    onLottieClick() {
      this.$refs.click.toggleDropdownAnimation("filters");
    },
    mouseover: function (key) {
      this.anim[key].stop();
      // this.anim[key].play();
      this.anim[key].playSegments([112, 22], true);
    },
  },
};
</script>
<style scoped>
.block-left {
  width: 40%;
  background-color: white;
  float: left;
  z-index: 14;
}
.block-right {
  width: 60%;
  float: left;
}

/* MEDIA QUERIES FOR 545px <= Resolutions */

@media (max-width: 1500px) {
  .block-left {
    display: block;
    width: 100%;
  }
  .block-right {
    display: none;
  }
}
.signin {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 6%;
}
.hand {
  text-align: center;
}
.hand p {
  display: inline-block;
  font-size: 60px;
  font-weight: bold;
  margin-top: 38px;
}

.hand img {
  display: inline-block;
  margin-top: -38px;
}
.hand h5 {
  margin-top: 30px;
}
.hand h1 {
  color: #ab0808;
  font-weight: bold;
  font-size: 29px;
  margin-top: 9%;
}
.inputs {
  width: 100%;
  border: 1px solid;
  border-radius: 7px;
  height: 33px;
}
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 3px;
  left: 2px;
  height: 18px;
  width: 18px;
  border-radius: 6px;
  border: 1px solid;
}

/* On mouse-over, add a grey background color */

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: black;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 7px;
  top: 3px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
.social p:hover {
  color: #fee123 !important;
}
@media only screen and (max-width: 650px) {
  .signin {
    width: 300px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 6%;
  }
}
@media only screen and (max-width: 320px) {
  .loginPart {
    width: 93%;
  }
}
</style>
