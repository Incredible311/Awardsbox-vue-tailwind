<template>
  <div>
    <movie-drop />
    <b-modal id="bv-modal-example" hide-footer hide-header>
      <div class="d-block text-center"></div>
      <share-modal />
    </b-modal>
    <div class="flex flex-wrap overflow-hidden justify-center mx-3 mt-2 pb-3">
      <div class="xl:w-2/4 md:w-2/4 mb-2 width100_single">
        <sponge-bob class="h-full" />
      </div>
      <div class="xl:w-1/4 md:w-1/4 width100_single">
        <to-watch />
      </div>
      <div
        class="xl:w-1/4 md:w-1/4 pl-1 shadow-md rounded-xl px-3 bg-back-white dark:bg-black py-3 w-full mb-2 flex justify-center width100_single"
      >
        <div class="overflow-hidden">
          <div   @click="buttonsData[0].text==='Add'?buttonsData[0].text='Remove':buttonsData[0].text='Add'" class="w-1/1 overflow-hidden my-2 mx-4">
            <div class="flex bg-custom-gray text-white rounded-full p-2 py-2">
              <heart-lottie />
              <h1
                class="text-base rounded-full dark:text-white transition duration-300 ease-in-out pl-1"
              >
                {{buttonsData[0].text}} to Favourites
              </h1>
            </div>
          </div>
          <div  @click="buttonsData[1].text==='Add'?buttonsData[1].text='Remove':buttonsData[1].text='Add'" class="w-1/1 overflow-hidden my-2 mx-4">
            <div class="flex bg-custom-gray text-white rounded-full p-2 py-2">
              <add-lottie />
              <h1
                class="text-base rounded-full dark:text-white transition duration-300 ease-in-out pl-1"
              >
                {{buttonsData[1].text}} to Watchlist
              </h1>
            </div>
          </div>
          <div class="w-1/1 overflow-hidden my-2 mx-4"  @click="buttonsData[2].text==='Add'?buttonsData[2].text='Remove':buttonsData[2].text='Add'">
            <div class="flex bg-custom-gray text-white rounded-full p-2 py-2">
              <font-awesome-icon :icon="['fas', 'check']" class="pt-1" />
              <h1
                class="text-base rounded-full dark:text-white transition duration-300 ease-in-out pl-1"
              >
                {{buttonsData[2].text}} Seen it
              </h1>
            </div>
          </div>
          <div  @click="buttonsData[3].text==='Add'?buttonsData[3].text='Remove':buttonsData[3].text='Add'" class="w-1/1 overflow-hidden mt-2 mb-1 mx-4">
            <div
              id="show-btn"
              @click="$bvModal.show('bv-modal-example')"
              style="background: none; border: none; padding: 0"
            >
              <div class="flex bg-custom-gray text-white rounded-full p-2 py-2">
                <share-lottie />
                <h1
                  class="text-base rounded-full dark:text-white transition duration-300 ease-in-out pl-1"
                >
                 {{buttonsData[3].text}} Share it
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap overflow-hidden mx-3 my-2">
      <div class="xl:w-4/5">
        <div class="text-xl dark:text-white">
          What <span class="font-bold">Awards </span> have the The SpongeBob
          Movie: Sponge on the Run (2020)won?
        </div>
      </div>
      <div class="xl:w-1/5">
        <a href="/single/movieaward">
          <see-all />
        </a>
      </div>
    </div>
    <div class="flex flex-wrap overflow-hidden mx-3 pb-3 justify-center">
      <five-academy />
      <five-academy />
      <five-academy />
      <five-academy />
      <five-academy />
    </div>

    <div class="flex flex-wrap overflow-hidden mx-3 my-2">
      <div class="xl:w-4/5">
        <div class="text-xl dark:text-white">
          What <span class="font-bold">Nominations </span> have the The
          SpongeBob Movie: Sponge on the Run (2020)?
        </div>
      </div>
      <div class="xl:w-1/5">
        <a href="/single/movieaward">
          <see-all />
        </a>
      </div>
    </div>
    <div class="flex flex-wrap overflow-hidden mx-3 pb-3 justify-center">
      <flag-academy />
      <flag-academy />
      <flag-academy />
      <flag-academy />
      <flag-academy />
    </div>
    <div class="flex flex-wrap overflow-hidden mx-3 pb-3">
      <div class="xl:w-2/5">
        <div class="flex flex-wrap overflow-hidden justify-between mx-2 my-3">
          <div class="">
            <div class="text-xl dark:text-white">Cast & Crew</div>
          </div>
          <div class="xl:w-1/5" style="margin-left: auto">
            <see-all />
          </div>
        </div>
        <div
          class="flex flex-wrap overflow-hidden shadow-md rounded-lg mr-2 px-3 py-4 bg-back-white dark:bg-black justify-center"
        >
          <div class="md:w-1/4">
            <per-actor />
          </div>
          <div class="md:w-1/4">
            <per-actor />
          </div>
          <div class="md:w-1/4">
            <per-actor />
          </div>
          <div class="md:w-1/4">
            <per-actor />
          </div>
          <div class="md:w-1/4">
            <per-actor />
          </div>
          <div class="md:w-1/4">
            <per-actor />
          </div>
          <div class="md:w-1/4">
            <per-actor />
          </div>
          <div class="md:w-1/4">
            <per-actor />
          </div>
        </div>
      </div>

      <div class="xl:w-3/5">
        <div class="flex flex-wrap overflow-hidden justify-between mx-2 my-3">
          <div class="text-xl dark:text-white">
            Related Award Winning Movies
          </div>
          <div class="xl:w-1/5" style="margin-left: auto">
            <see-all />
          </div>
        </div>
        <div
          class="flex flex-wrap overflow-hidden rounded-lg px-3 pt-2 justify-center"
        >
          <div class="xl:w-1/3 px-1">
            <a href="/single/movie">
              <img
                src="~/assets/image/permovie-test.png"
                alt=""
                class="w-full"
                data-v-2a183b29=""
              />
              <div class="pt-2" data-v-2a183b29="">
                <h1 class="dark:text-white text-xs" data-v-2a183b29="">
                  Eternal Sunshine of the Spotless Mind(2014)
                </h1>
              </div>
            </a>
          </div>
          <div class="xl:w-1/3 px-1">
            <a href="/single/movie">
              <img
                src="~/assets/image/permovie-test.png"
                alt=""
                class="w-full"
                data-v-2a183b29=""
              />
              <div class="pt-2" data-v-2a183b29="">
                <h1 class="dark:text-white text-xs" data-v-2a183b29="">
                  Eternal Sunshine of the Spotless Mind(2014)
                </h1>
              </div>
            </a>
          </div>
          <div class="xl:w-1/3 px-1">
            <a href="/single/movie">
              <img
                src="~/assets/image/permovie-test.png"
                alt=""
                class="w-full"
                data-v-2a183b29=""
              />
              <div class="pt-2" data-v-2a183b29="">
                <h1 class="dark:text-white text-xs" data-v-2a183b29="">
                  Eternal Sunshine of the Spotless Mind(2014)
                </h1>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>	
<script>
import MovieDrop from "@/components/single/moviebackdrop";
import SpongeBob from "@/components/single/SpongeBobMovie";
import ToWatch from "@/components/single/wheretowatch";
import AddFavo from "@/components/single/addfavourite";
import FiveAcademy from "@/components/single/fiveacademy";
import SeeAll from "@/components/buttons/seeall";
import FlagAcademy from "@/components/single/flagacademy";
import ActorEight from "@/components/actorlist/actorforeight";
import PerMovie from "@/components/searchfilter/movie/per-movie";
import ShareModal from "@/components/user/sharemodal";
import PerActor from "@/components/actorlist/actor";
import HeartLottie from "@/components/lottie/heart";
import AddLottie from "@/components/lottie/add_remove";
import ShareLottie from "@/components/lottie/share";
export default {
  components: {
    MovieDrop,
    SpongeBob,
    ToWatch,
    AddFavo,
    FiveAcademy,
    SeeAll,
    FlagAcademy,
    ActorEight,
    PerMovie,
    ShareModal,
    PerActor,
    HeartLottie,
    AddLottie,
    ShareLottie,
  },
   data() {
      return {
        buttonsData: [
          {
            text: "Add",
            value: "add"
          },
          {
            text: "Add",
            value: "add"
          },
          {
            text: "Add",
            value: "add"
          },
          {
            text: "Add",
            value: "add"
          }
        ]
      };
    },
  methods: {
    openModal() {
      this.$refs.modal.show();
    },
    openModalshare() {
      this.$refs.modalshare.show();
    },
  },
  mounted() {},
};
</script>
<style scoped>
.modal-header {
  display: none;
}
.modal-footer {
  display: none;
}
@media only screen and (max-width: 640px) {
  .academy {
    width: 100%;
    margin-bottom: 10px;
  }
}

@media only screen and (max-width: 1222px) {
  .width100_single {
    width: 100% !important;
  }
}
</style>