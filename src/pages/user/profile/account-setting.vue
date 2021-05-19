<template>
  <div class="mx-4 mt-4">
    <div class="flex flex-wrap overflow-hidden">
      <swiper :options="swiperOptions">
        <swiper-slide>
          <img src="@/assets/image/image 25.png" alt="" class="w-full" />
          <div class="pt-2 my-1" data-v-2a183b29=""></div>
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/image/image 25 (2).png" alt="" class="w-full" />
          <div class="pt-2 my-1" data-v-2a183b29=""></div>
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/image/image 25.png" alt="" class="w-full" />
          <div class="pt-2 my-1" data-v-2a183b29=""></div>
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/image/image 25.png" alt="" class="w-full" />
          <div class="pt-2 my-1" data-v-2a183b29=""></div>
        </swiper-slide>
      </swiper>
      <img
        src="~/assets/image/Group 234.png"
        class="rounded-full w-32 h-32 -mt-20 ml-20 person-img"
        style="z-index: 10"
      />
      <h1 class="my-3 pt-1 dark:text-white">Millie Bobby Brown</h1>
      <div class="flex flex-wrap justify-center width100">
        <div
          class="flex flex-wrap overflow text-xs bg-black rounded-full text-white my-3 mx-2 py-1 px-2"
        >
          <p class="">Change Avatar</p>
        </div>
      </div>
    </div>
    <div
      class="flex flex-wrap overflow bg-black rounded-xl mt-2"
      v-if="!isHidden"
    >
      <div class="w-full">
        <font-awesome-icon
          :icon="['fas', 'times-circle']"
          style="
            float: right;
            margin-right: 1%;
            margin-top: 1%;
            font-size: 28px;
            color: white;
          "
          v-on:click="isHidden = true"
        />
      </div>
      <div class="lg:w-2/4">
        <h1
          class="text-4xl text-white p-3"
          style="margin-top: 11%; margin-left: 6%"
        >
          Are You <span class="font-bold">Watcher</span> or
          <span class="font-bold" style="color: #fee123">Creator</span>
          <span class="" style="color: #fee123">What Type of</span>
          <span class="font-bold" style="color: #fee123">Creator</span>
          <span class="" style="color: #fee123">Are You?</span>
        </h1>
        <button
          v-b-modal.modal-center
          class="bg-yellow-400 text-black font-bold text-lg p-2 px-3 rounded-full my-4"
          style="margin-left: 8%; background: #fee123"
          href="https://www.typeform.com/"
        >
          Join Us
        </button>

        <b-modal
          id="modal-center"
          centered
          :hide-headers="true"
          :hide-footer="true"
        >
          <Typeform
            url="https://8p7xjuds0tm.typeform.com/to/Af9p92oX"
            :hide-headers="true"
            :hide-footer="true"
            :on-submit="onSubmit"
            style="width: 100%; height: 500px; opacity: 0.9"
          />
        </b-modal>
      </div>

      <div class="lg:w-2/4 justify-between">
        <lottie
          :width="350"
          :height="350"
          :options="lottieOptions.Thanks"
          v-on:animCreated="(a) => handleAnimation(a, 'Thanks')"
          class="thanksAnim"
        />
      </div>
    </div>
    <div class="flex mt-3">
      <p class="font-bold text-xl dark:text-white my-2">Settings</p>
    </div>
    <div class="">
      <nav class="tabs flex flex-col md:flex-row md:text-sm">
        <button
          data-target="accountSettings"
          class="tab text-white bg-black my-1 rounded-full py-2 blockfocus:outline-none yellow px-3 mr-1"
        >
          Account Settings
        </button>
        <button
          data-target="Password"
          class="tab text-white bg-black my-1 rounded-full py-2 blockfocus:outline-none yellow px-3 mr-1"
        >
          Password
        </button>
        <button
          data-target="socialProfiles"
          class="tab text-white bg-black my-1 rounded-full py-2 blockfocus:outline-none yellow px-3 mr-1"
        >
          Social Profiles
        </button>
        <button
          data-target="Notifications"
          class="tab text-white bg-black my-1 rounded-full py-2 blockfocus:outline-none yellow px-3 mr-1"
        >
          Notifications
        </button>
        <button
          data-target="editProfile"
          class="tab text-white bg-black my-1 rounded-full py-2 blockfocus:outline-none yellow px-3 mr-1"
        >
          Edit Profile
        </button>
        <button
          data-target="Creator"
          class="tab text-white bg-black my-1 rounded-full py-2 blockfocus:outline-none yellow px-3 mr-1"
        >
          Creator
        </button>
      </nav>
    </div>

    <div id="panels" class="">
      <div class="accountSettings tab-content active py-5">
        <form action="/action_page.php">
          <label for="fname" class="dark:text-white font-bold text-lg"
            >Name</label
          ><br />
          <input
            type="text"
            id="name"
            name="name"
            class="w-full py-1"
            style="width: 100%; border: 1px solid; border-radius: 5px"
          /><br /><br />
          <label for="fname" class="dark:text-white font-bold"
            >Email address</label
          ><br />
          <input
            type="email"
            id="email"
            name="email"
            class="w-full py-1"
            style="width: 100%; border: 1px solid; border-radius: 5px"
          /><br /><br />
          <button class="bg-black text-white p-1 rounded-full px-3">
            Verify E-mail
          </button>
          <br />
          <label for="fname" class="mt-2 dark:text-white font-bold mt-4"
            >Username</label
          ><br />
          <input
            type="text"
            id="name"
            name="username"
            class="w-full py-1"
            style="width: 100%; border: 1px solid; border-radius: 5px"
          /><br /><br />
          <p class="dark:text-white">
            Your Profile URL: https://awardsbox.com/mickymouse
          </p>
          <br />
          <div class="flex">
            <div class="flex-1">
              <div class="flex justify-between">
                <p class="font-bold dark:text-white">Public Profile</p>
                <div @click="toggleClick('TogglePublicProfile')">
                  <lottie
                    :width="50"
                    :height="36"
                    :options="lottieOptions.Toggle"
                    v-on:animCreated="
                      (a) => handleAnimation(a, 'TogglePublicProfile')
                    "
                    style="margin: 0 !important"
                  />
                </div>
              </div>
              <br />
              <p class="dark:text-white">Visiable to everyone</p>
            </div>
            <div class="flex"></div>
          </div>
          <label for="fname" class="font-bold mt-3 dark:text-white"
            >Location</label
          ><br />
          <input
            type="text"
            id="fname"
            name="fname"
            class="w-full py-1"
            style="width: 100%; border: 1px solid; border-radius: 5px"
          /><br /><br />
          <div class="flex">
            <div class="flex-1">
              <div class="flex justify-between">
                <p class="dark:text-white text-lg font-bold my-3">
                  Privacy Prefences
                </p>
                <div
                  class="flex bg-black my-3 p-1 text-white rounded-full px-2"
                  v-b-toggle.collapse-3
                  style="outline: none"
                >
                  <span class="px-1"
                    ><font-awesome-icon :icon="['fas', 'chevron-down']"
                  /></span>
                  <p>Expand</p>
                </div>
              </div>

              <b-collapse
                class="dark:text-white text-sm my-1"
                visible
                id="collapse-3"
              >
                When you visit our website, it may store information through
                your browser from specific services, usually in the form of
                cookies. Here you can change your Privacy preferences. It is
                worth noting that blocking some types of cookies may impact your
                experience on our website and the services we are able to offer.
              </b-collapse>

              <div class="flex justify-between">
                <p class="dark:dark:text-white my-2 text-md dark:text-white">
                  Click to enable/disable Google Analytics tracking code.
                </p>
                <div @click="toggleClick('ToggleGAN')">
                  <lottie
                    :width="50"
                    :height="36"
                    :options="lottieOptions.Toggle"
                    v-on:animCreated="(a) => handleAnimation(a, 'ToggleGAN')"
                    style="margin: 0 !important"
                  />
                </div>
              </div>
              <div class="flex justify-between">
                <p class="dark:dark:text-white my-2 text-md dark:text-white">
                  Click to enable/disable Google Fonts.
                </p>
                <div @click="toggleClick('ToggleGFonts')">
                  <lottie
                    :width="50"
                    :height="36"
                    :options="lottieOptions.Toggle"
                    v-on:animCreated="(a) => handleAnimation(a, 'ToggleGFonts')"
                    style="margin: 0 !important"
                  />
                </div>
              </div>
              <div class="flex justify-between">
                <p class="dark:dark:text-white my-2 text-md dark:text-white">
                  Click to enable/disable Google Maps.
                </p>
                <div @click="toggleClick('ToggleGMaps')">
                  <lottie
                    :width="50"
                    :height="36"
                    :options="lottieOptions.Toggle"
                    v-on:animCreated="(a) => handleAnimation(a, 'ToggleGMaps')"
                    style="margin: 0 !important"
                  />
                </div>
              </div>
              <div class="flex justify-between">
                <p class="dark:dark:text-white my-2 text-md dark:text-white">
                  Click to enable/disable video embeds.
                </p>
                <div @click="toggleClick('ToggleVideo')">
                  <lottie
                    :width="50"
                    :height="36"
                    :options="lottieOptions.Toggle"
                    v-on:animCreated="(a) => handleAnimation(a, 'ToggleVideo')"
                    style="margin: 0 !important"
                  />
                </div>
              </div>
              <div class="flex justify-between">
                <p class="dark:dark:text-white my-2 text-md dark:text-white">
                  Delete your account and account data
                </p>
                <div @click="toggleClick('ToggleDelete')">
                  <lottie
                    :width="50"
                    :height="36"
                    :options="lottieOptions.Toggle"
                    v-on:animCreated="(a) => handleAnimation(a, 'ToggleDelete')"
                    style="margin: 0 !important"
                  />
                </div>
              </div>
              <div class="flex justify-between">
                <p
                  class="dark:dark:text-white my-2 text-md font-bold dark:text-white"
                >
                  Dark Mode
                </p>
                <div @click="toggleClick('ToggleDark')">
                  <lottie
                    :width="50"
                    :height="36"
                    :options="lottieOptions.Toggle"
                    v-on:animCreated="(a) => handleAnimation(a, 'ToggleDark')"
                    style="margin: 0 !important"
                  />
                </div>
              </div>
              <div class="flex justify-between">
                <p
                  class="dark:dark:text-white my-2 text-md font-bold dark:text-white"
                >
                  Close Account
                </p>
                <button class="bg-black p-2 my-2 rounded-full text-white">
                  Close Account
                </button>
              </div>
              <br />
            </div>
          </div>
          <div class="flex">
            <div class="flex-1">
              <button
                type="submit"
                class="p-2 my-2 rounded-full font-bold save"
                style="backgrounnd: #fee123"
              >
                Save Change
              </button>
            </div>
            <div class="flex"></div>
          </div>
        </form>
      </div>
      <div class="Password tab-content py-5">
        <form action="/action_page.php">
          <label for="fname" class="dark:text-white font-bold"
            >New Password</label
          ><br />

          <input
            type="password"
            id="name"
            name="name"
            class="w-full py-1 px-2"
            style="width: 100%; border: 1px solid; border-radius: 5px"
          /><br /><br />
          <p class="dark:text-white text-sm">Minimum 6 characters</p>
          <label for="fname" class="dark:text-white font-bold mt-3"
            >Confirm New Password</label
          ><br />
          <input
            type="password"
            id="email"
            name="email"
            class="w-full py-1 px-2"
            style="width: 100%; border: 1px solid; border-radius: 5px"
          />

          <button
            type="submit"
            class="p-2 my-2 rounded-full font-bold mt-3"
            style="background: #fee123"
          >
            Change
          </button>
        </form>
      </div>
      <div class="socialProfiles tab-content py-5">
        <form action="/action_page.php">
          <label for="fname" class="dark:text-white font-bold">Twitter</label
          ><br />

          <input
            type="text"
            id="name"
            name="name"
            class="w-full py-1 px-2"
            style="width: 100%; border: 1px solid; border-radius: 5px"
          /><br />
          <p class="dark:text-white text-sm my-1">One-click sign in</p>
          <div class="flex my-1">
            <button
              class="flex bg-black text-white rounded-full px-1 py-1 px-2"
            >
              <!-- <lottie
                :width="20"
                :height="20"
                :options="lottieOptions.Twitter"
                v-on:animCreated="(a) => handleAnimation(a, 'Twitter')"
                style="margin: 3px 2px 2px 2px"
              /> -->
              <font-awesome-icon
                :icon="['fab', 'twitter']"
                style="margin: 3px 2px 2px 2px"
              />
              <p style="font-size: 14px">Connect to Twitter</p>
            </button>
            <button
              class="flex bg-black text-white rounded-full px-1 py-1 mx-2 px-2"
            >
              <font-awesome-icon
                :icon="['fab', 'twitter']"
                style="margin: 3px 2px 2px 2px"
              />
              <p class="displayNone" style="font-size: 14px">Twitter</p>
            </button>
          </div>

          <label for="fname" class="dark:text-white font-bold mt-3"
            >Facebook</label
          ><br />

          <input
            type="text"
            id="name"
            name="name"
            class="w-full py-1 px-2"
            style="width: 100%; border: 1px solid; border-radius: 5px"
          /><br />
          <p class="dark:text-white text-sm my-1">One-click sign in</p>
          <div class="flex my-1">
            <button
              class="flex bg-black text-white rounded-full px-1 py-1 px-2"
            >
              <font-awesome-icon
                :icon="['fab', 'facebook']"
                style="margin: 3px 2px 2px 2px"
              />
              <p style="font-size: 14px">Connect to Facebook</p>
            </button>
            <button
              class="flex bg-black text-white rounded-full px-1 py-1 mx-2 px-2"
            >
              <font-awesome-icon
                :icon="['fab', 'facebook']"
                style="margin: 3px 2px 2px 2px"
              />
              <p class="displayNone" style="font-size: 14px">Facebook</p>
            </button>
          </div>

          <label for="fname" class="dark:text-white font-bold mt-3"
            >Google</label
          ><br />

          <input
            type="text"
            id="name"
            name="name"
            class="w-full py-1 px-2"
            style="width: 100%; border: 1px solid; border-radius: 5px"
          /><br />
          <p class="dark:text-white text-sm my-1">
            One-click sign in only (not shown on profile)
          </p>
          <div class="flex my-1">
            <button class="flex bg-black text-white rounded-full py-1 px-2">
              <font-awesome-icon
                :icon="['fab', 'google']"
                style="margin: 3px 2px 2px 2px"
              />
              <p style="font-size: 14px">Connect to Google</p>
            </button>
            <button
              class="flex bg-black text-white rounded-full px-2 py-1 mx-2"
            >
              <font-awesome-icon
                :icon="['fab', 'google']"
                style="margin: 3px 4px 2px 4px"
              />
              <p class="displayNone" style="font-size: 14px">Google</p>
            </button>
          </div>

          <label for="fname" class="dark:text-white font-bold mt-3">Apple</label
          ><br />

          <input
            type="text"
            id="name"
            name="name"
            class="w-full py-1 px-2"
            style="width: 100%; border: 1px solid; border-radius: 5px"
          /><br />
          <p class="dark:text-white text-sm my-1">
            One-click sign in only (not shown on profile)
          </p>
          <div class="flex my-1">
            <button class="flex bg-black text-white rounded-full py-1 px-2">
              <font-awesome-icon
                :icon="['fab', 'apple']"
                style="margin: 3px 2px 2px 2px"
              />
              <p style="font-size: 14px">Connect to Apple</p>
            </button>
            <button
              class="flex bg-black text-white rounded-full px-2 py-1 mx-2"
            >
              <font-awesome-icon
                :icon="['fab', 'apple']"
                style="margin: 3px 4px 2px 4px"
              />
              <p class="displayNone" style="font-size: 14px">Apple</p>
            </button>
          </div>
          <label for="fname" class="dark:text-white font-bold mt-3"
            >Instagram</label
          ><br />

          <input
            type="text"
            id="name"
            name="name"
            class="w-full py-1 px-2"
            style="width: 100%; border: 1px solid; border-radius: 5px"
          /><br />
          <label for="fname" class="dark:text-white font-bold mt-3"
            >Medium</label
          ><br />

          <input
            type="text"
            id="name"
            name="name"
            class="w-full py-1 px-2"
            style="width: 100%; border: 1px solid; border-radius: 5px"
          /><br />
          <button
            type="submit"
            class="p-2 my-2 rounded-full font-bold"
            style="background: #fee123"
          >
            Update Social Profiles
          </button>
        </form>
      </div>
      <div class="Notifications tab-content py-5">
        <p class="font-bold dark:text-white">Alerts & Notifications</p>
        <p class="dark:text-white">Send me:</p>
        <p class="font-bold mt-4 dark:text-white">Awards Box Communication</p>
        <p class="dark:text-white">
          Get Awards Box news, announcements, and product updates
        </p>
        <p class="font-bold mt-4 dark:text-white">Awards Box Activity</p>
        <p class="dark:text-white">
          Get important notifications about you or activity you've missed
        </p>
        <p class="font-bold mt-4 dark:text-white">Weekly Newsletters</p>
        <p class="dark:text-white">Subscribe me to:</p>
        <p class="font-bold mt-4 dark:text-white">Recommendations</p>
        <p class="dark:text-white">
          Award Wnning Movies, TV-Shows recommendations
        </p>
        <button
          type="submit"
          class="p-2 my-2 rounded-full font-bold"
          style="background: #fee123"
        >
          Update Notifications
        </button>
      </div>
      <div class="editProfile tab-content py-5">other info</div>
      <div class="Creator tab-content py-5">
        <Typeform
          url="https://8p7xjuds0tm.typeform.com/to/Af9p92oX"
          :hide-headers="true"
          :hide-footer="true"
          :on-submit="onSubmit"
          style="width: 100%; height: 500px; opacity: 0.9"
        />
      </div>
    </div>
  </div>
</template>

<script>
import "swiper/swiper-bundle.css";
import lottie from "vue-lottie/src/lottie.vue";
import * as ThanksAnim from "~/assets/lottie/thanks-you.json";
import * as ToggleYellow from "~/assets/lottie/toggleyellow.json";
import * as Twitter from "~/assets/lottie/twitter.json";

export default {
  components: {
    lottie,
  },
  data() {
    return {
      isHidden: false,
      swiperOptions: {
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
      },
      anim: {},
      toggles: {
        TogglePublicProfile: false,
        ToggleGAN: false,
        ToggleGFonts: false,
        ToggleGMaps: false,
        ToggleVideo: false,
        ToggleDelete: false,
        ToggleDark: false,
      },
      lottieOptions: {
        Thanks: { animationData: ThanksAnim.default },
        Toggle: {
          animationData: ToggleYellow.default,
          loop: false,
          autoplay: false,
        },
        Twitter: { animationData: Twitter.default },
      },
    };
  },
  methods: {
    handleAnimation: function (anim, key) {
      this.anim[key] = anim;
      if (this.toggles[key]) {
        anim.playSegments([59, 60], true);
      }
    },
    toggleClick: function (key) {
      const segments = this.toggles[key] ? [25, 48] : [0, 24];
      this.anim[key].stop();
      this.anim[key].playSegments(segments, true);
      this.toggles[key] = !this.toggles[key];
    },

    onSubmit: function () {
      console.log("Typeform successfully submitted");
    },
  },
  mounted() {
    const tabs = document.querySelectorAll(".tabs");
    const tab = document.querySelectorAll(".tab");
    const panel = document.querySelectorAll(".tab-content");

    function onTabClick(event) {
      // deactivate existing active tabs and panel

      for (let i = 0; i < tab.length; i++) {
        tab[i].classList.remove("active");
      }

      for (let i = 0; i < panel.length; i++) {
        panel[i].classList.remove("active");
      }

      // activate new tabs and panel
      event.target.classList.add("active");
      let classString = event.target.getAttribute("data-target");
      console.log(classString);
      document
        .getElementById("panels")
        .getElementsByClassName(classString)[0]
        .classList.add("active");
    }

    for (let i = 0; i < tab.length; i++) {
      tab[i].addEventListener("click", onTabClick, false);
    }
  },
};
</script>
<style scoped>
.tab-content {
  display: none;
}

.tab-content.active {
  display: block;
}

.yellow:hover {
  color: #fee123 !important;
}
.save {
  background: #fee123;
}
@media only screen and (max-width: 926px) {
  .thanksAnim {
    display: none;
  }
}
@media only screen and (max-width: 557px) {
  .width100 {
    width: 100%;
  }
}

@media only screen and (max-width: 350px) {
  .displayNone {
    display: none;
  }
}
</style>