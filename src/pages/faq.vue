<template>
  <div>
    <div class="flex flex-wrap overflow-hidden mx-3 mt-4">
      <div class="bg-black w-full rounded-xl" style="height: 24em">
        <div class="flex flex-wrap overflow-hidden">
          <div class="md:w-1/2" style="padding: 9%">
            <p class="text-white text-2xl">FAQ PAGE</p>
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
    <div
      class="mx-3 rounded-xl my-5 bg-back-white dark:bg-black px-5 pt-3"
      style="margin: 0 auto"
    >
      <h1 class="text-2xl my-3 font-bold px-3 dark:text-white">
        Frequently asked questions
      </h1>
      <div class="accordion" role="tablist">
        <b-card
          no-body
          class="mb-1 w-full"
          style="background: none; border: none"
        >
          <b-card-header
            header-tag="header"
            class="p-1 flex justify-between p-3"
            role="tab"
          >
            <div
              block
              v-b-toggle.accordion-1
              variant="info"
              style="
                overflow-anchor: none;
                background: none;
                border: none;
                padding: 0;
                outline: none;
              "
              class="dark:text-white"
            >
              What’s the best thing about Switzerland?
            </div>
            <font-awesome-icon
              v-b-toggle.accordion-1
              :icon="['fas', 'chevron-down']"
              class="text-black chevron dark:text-white"
              style="outline: none; transform: rotate(360deg)"
            />
          </b-card-header>
          <b-collapse
            id="accordion-1"
            visible
            accordion="my-accordion"
            role="tabpanel"
          >
            <b-card-body>
              <b-card-text class="dark:text-white text-gray-500 text-sm"
                >I don't know, but the flag is a big plus. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Quas cupiditate laboriosam
                fugiat.
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
        <b-card
          no-body
          class="mb-1 w-full"
          style="background: none; border: none"
        >
          <b-card-header
            header-tag="header"
            class="p-1 flex justify-between p-3"
            role="tab"
          >
            <div
              block
              v-b-toggle.accordion-2
              variant="info"
              style="
                overflow-anchor: none;
                background: none;
                border: none;
                padding: 0;
                outline: none;
              "
              class="dark:text-white"
            >
              How do you make holy water?
            </div>
            <font-awesome-icon
              v-b-toggle.accordion-2
              :icon="['fas', 'chevron-down']"
              class="text-black chevron dark:text-white"
              style="outline: none; transform: rotate(360deg)"
            />
          </b-card-header>
          <b-collapse
            id="accordion-2"
            visible
            accordion="my-accordion"
            role="tabpanel"
          >
            <b-card-body>
              <b-card-text class="dark:text-white text-gray-500 text-sm"
                >I don't know, but the flag is a big plus. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Quas cupiditate laboriosam
                fugiat.
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card
          no-body
          class="mb-1 w-full"
          style="background: none; border: none"
        >
          <b-card-header
            header-tag="header"
            class="p-1 flex justify-between p-3"
            role="tab"
          >
            <div
              block
              v-b-toggle.accordion-3
              variant="info"
              style="
                overflow-anchor: none;
                background: none;
                border: none;
                padding: 0;
                outline: none;
              "
              class="dark:text-white"
            >
              What’s the best thing about Switzerland?
            </div>
            <font-awesome-icon
              v-b-toggle.accordion-3
              :icon="['fas', 'chevron-down']"
              class="text-black chevron dark:text-white"
              style="outline: none; transform: rotate(360deg)"
            />
          </b-card-header>
          <b-collapse
            id="accordion-3"
            visible
            accordion="my-accordion"
            role="tabpanel"
          >
            <b-card-body>
              <b-card-text class="dark:text-white text-gray-500 text-sm"
                >I don't know, but the flag is a big plus. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Quas cupiditate laboriosam
                fugiat.
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
        <b-card
          no-body
          class="mb-1 w-full"
          style="background: none; border: none"
        >
          <b-card-header
            header-tag="header"
            class="p-1 flex justify-between p-3"
            role="tab"
          >
            <div
              block
              v-b-toggle.accordion-4
              variant="info"
              style="
                overflow-anchor: none;
                background: none;
                border: none;
                padding: 0;
                outline: none;
              "
              class="dark:text-white"
            >
              Why do you never see elephants hiding in trees?
            </div>
            <font-awesome-icon
              v-b-toggle.accordion-4
              :icon="['fas', 'chevron-down']"
              class="text-black chevron dark:text-white"
              style="outline: none; transform: rotate(360deg)"
            />
          </b-card-header>
          <b-collapse
            id="accordion-4"
            visible
            accordion="my-accordion"
            role="tabpanel"
          >
            <b-card-body>
              <b-card-text class="dark:text-white text-gray-500 text-sm"
                >I don't know, but the flag is a big plus. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Quas cupiditate laboriosam
                fugiat.
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
        <b-card
          no-body
          class="mb-1 w-full"
          style="background: none; border: none"
        >
          <b-card-header
            header-tag="header"
            class="p-1 flex justify-between p-3"
            role="tab"
          >
            <div
              block
              v-b-toggle.accordion-5
              variant="info"
              style="
                overflow-anchor: none;
                background: none;
                border: none;
                padding: 0;
                outline: none;
              "
              class="dark:text-white"
            >
              Why can’t you hear a pterodactyl go to the bathroom?
            </div>
            <font-awesome-icon
              v-b-toggle.accordion-5
              :icon="['fas', 'chevron-down']"
              class="text-black chevron dark:text-white"
              style="outline: none; transform: rotate(360deg)"
            />
          </b-card-header>
          <b-collapse
            id="accordion-5"
            visible
            accordion="my-accordion"
            role="tabpanel"
          >
            <b-card-body>
              <b-card-text class="dark:text-white text-gray-500 text-sm"
                >I don't know, but the flag is a big plus. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Quas cupiditate laboriosam
                fugiat.
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
        <b-card
          no-body
          class="mb-1 w-full"
          style="background: none; border: none"
        >
          <b-card-header
            header-tag="header"
            class="p-1 flex justify-between p-3"
            role="tab"
          >
            <div
              block
              v-b-toggle.accordion-6
              variant="info"
              style="
                overflow-anchor: none;
                background: none;
                border: none;
                padding: 0;
                outline: none;
              "
              class="dark:text-white"
            >
              Why did the invisible man turn down the job offer?
            </div>
            <font-awesome-icon
              v-b-toggle.accordion-6
              :icon="['fas', 'chevron-down']"
              class="text-black chevron dark:text-white"
              style="outline: none; transform: rotate(360deg)"
            />
          </b-card-header>
          <b-collapse
            id="accordion-6"
            visible
            accordion="my-accordion"
            role="tabpanel"
          >
            <b-card-body>
              <b-card-text class="dark:text-white text-gray-500 text-sm"
                >I don't know, but the flag is a big plus. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Quas cupiditate laboriosam
                fugiat.
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
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
import VueFaqAccordion from "vue-faq-accordion";

export default {
  components: {
    AwardTop,
    PerAwardBlack,
    PerAwardWhite,
    lottie,
    VueFaqAccordion,
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
      myItems: [
        {
          title: "What’s the best thing about Switzerland?",
          value:
            "Given a 24-hour day and 360 degrees of longitude around the Earth",
          //   category: "Tab-2",
        },
        {
          title: "How long is a day and year on Venus?",
          value:
            "Venus takes 224.7 Earth days to complete one orbit around the Sun.",
          //   category: "Tab-2",
        },
        {
          title: "What animal smells like popcorn?",
          value: "Binturongs smell like popcorn.",
          //   category: "Tab-2",
        },
      ],
      borderColor: {
        type: String,
        default: "red",
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
/* .chevron:checked ~ {
  transform: rotate(360deg);
} */
.accordion > .card > .card-header {
  border-radius: 0;
  margin-bottom: 0px;
  background: none;
  border: none;
}
.accordion > .card:not(:last-of-type) {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-bottom: 1px solid #ccc !important;
}
.card-body {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1rem;
}
@media only screen and (max-width: 770px) {
  .displayNone {
    display: none;
  }
}
</style>
