<template>
  <div>
    <movie-drop />
    <b-modal id="bv-modal-example" hide-footer hide-header>
      <div class="d-block text-center"></div>
      <img
        src="@/assets/image/image 30.png"
        alt=""
        style="display: block; margin-left: auto; margin-right: auto"
      />
      <share-modal />
    </b-modal>
    <div class="flex flex-wrap overflow-hidden content-center mx-3 pb-3">
      <div class="xl:w-3/6 width100_tv">
        <sponge-bob />
      </div>
      <div
        class="xl:w-1/6 bg-back-white dark:bg-black shadow-md rounded-xl px-3 pb-2 width33_tv"
      >
        <div class="overflow-hidden px-3 pb-2">
          <h1 class="text-xl pt-2 dark:text-white">Where to Watch</h1>
          <div class="flex flex-wrap overflow0-hidden content-conter pt-3">
            <div class="w-1/3 p-1 overflow-hidden">
              <img src="~/assets/image/watch/Rectangle.png" />
            </div>
            <div class="w-1/3 p-1 overflow-hidden">
              <img src="~/assets/image/watch/Rectangle (0).png" />
            </div>
            <div class="w-1/3 p-1 overflow-hidden">
              <img src="~/assets/image/watch/Rectangle (7).png" />
            </div>
            <div class="w-1/3 p-1 overflow-hidden">
              <img src="~/assets/image/watch/Rectangle (11).png" />
            </div>
            <div class="w-1/3 p-1 overflow-hidden">
              <img src="~/assets/image/watch/Reactangle-hulu.png" />
            </div>
            <div class="w-1/3 p-1 overflow-hidden">
              <img src="~/assets/image/watch/Rectangle (8).png" />
            </div>
          </div>
        </div>
      </div>
      <div
        class="xl:w-1/6 pl-1 shadow-md rounded-xl px-3 bg-back-white dark:bg-black py-3 w-full flex justify-center width33_tv"
      >
        <div class="overflow-hidden">
          <div @click="buttonsData[0].text==='Add'?buttonsData[0].text='Remove':buttonsData[0].text='Add'" class="w-1/1 overflow-hidden cursor-pointer my-2 mx-3">
            <div class="flex bg-custom-gray text-white rounded-full p-1">
              <font-awesome-icon :icon="['fas', 'heart']" class="pt-1" />
              <h1
                class="text-base rounded-full dark:text-white transition duration-300 ease-in-out pl-1"
              >
                {{buttonsData[0].text}} to Favourites
              </h1>
            </div>
          </div>
          <div @click="buttonsData[1].text==='Add'?buttonsData[1].text='Remove':buttonsData[1].text='Add'" class="w-1/1 overflow-hidden my-2 mx-3 cursor-pointer">
            <div class="flex bg-custom-gray text-white rounded-full p-1">
              <font-awesome-icon :icon="['fas', 'plus']" class="pt-1" />
              <h1
                class="text-base rounded-full dark:text-white transition duration-300 ease-in-out pl-1"
              >
               {{buttonsData[1].text}} to Watchlist
              </h1>
            </div>
          </div>
          <div @click="buttonsData[2].text==='Add'?buttonsData[2].text='Remove':buttonsData[2].text='Add'" class="w-1/1 overflow-hidden my-2 mx-3 cursor-pointer">
            <div class="flex bg-custom-gray text-white rounded-full p-1">
              <font-awesome-icon :icon="['fas', 'check']" class="pt-1" />
              <h1
                class="text-base rounded-full dark:text-white transition duration-300 ease-in-out pl-1"
              >
               {{buttonsData[2].text}} Seen it
              </h1>
            </div>
          </div>
          <div @click="buttonsData[3].text==='Add'?buttonsData[3].text='Remove':buttonsData[3].text='Add'" class="w-1/1 overflow-hidden mt-2 mb-1 mx-3 cursor-pointer">
            <div
              id="show-btn"
              @click="$bvModal.show('bv-modal-example')"
              style="background: none; border: none; padding: 0"
            >
              <div class="flex bg-custom-gray text-white rounded-full p-1">
                <font-awesome-icon :icon="['fas', 'share-alt']" class="pt-1" />
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
      <div
        class="xl:w-1/6 shadow-md rounded-xl px-3 bg-back-white dark:bg-black py-3 w-full width33_tv"
      >
        <h1 class="text-xl dark:text-white font-bold">Ratings</h1>
        <h1 class="text-3xl dark:text-white">8.5/10</h1>
      </div>
    </div>
    <div
      class="flex flex-wrap overflow-hidden mx-3 bg-back-white text-black dark:bg-black shadow-md rounded-xl p-2"
    >
      <div class="lg:w-1/6 md:w-1/3 sm:w-1/2 xs:w-full">
        <img src="@/assets/image/Rectangle 10.png" class="w-full" alt="" />
      </div>

      <div
        class="lg:w-5/6 md:w-2/3 sm:w-1/2 xs:w-full justify-between text-black dark:text-white px-2"
      >
        <p class="text-lg font-bold">Season 4</p>
        <see-all />
        <div class="">
          <p class="">2020 | 10 Episodes</p>
          <p class="text-md mt-4">
            Dr. Shaun Murphy continues to use his extraordinary medical gifts at
            St. Bonaventure Hospital’s surgical unit. As his romantic
            relationship with Lea deepens, he will also face new
            responsibilities as a fourth-year resident when he is put in charge
            of supervising a new set of residents that will test him in ways he
            cannot predict. Meanwhile, the team must deal with the uncertainty
            and pressure that the COVID-19 pandemic brings now that it has hit
            their hospital.
          </p>
        </div>
        <div class="flex mt-3">
          <img src="@/assets/image/watch/Rectangle.png" alt="" class="p-1" />
          <img
            src="@/assets/image/watch/Rectangle (0).png"
            alt=""
            class="p-1"
          />
          <img
            src="@/assets/image/watch/Rectangle (1).png"
            alt=""
            class="p-1"
          />
        </div>
      </div>
    </div>

    <div class="flex flex-wrap overflow-hidden mx-3 my-3">
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

    <div class="flex flex-wrap overflow-hidden mx-3 my-3">
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
        <div class="flex flex-wrap overflow-hidden mx-2 my-3">
          <div class="xl:w-4/5">
            <div class="text-xl dark:text-white">Cast & Crew</div>
          </div>
          <div class="xl:w-1/5">
            <see-all />
          </div>
        </div>
        <div
          class="flex flex-wrap overflow-hidden shadow-md rounded-lg mr-2 px-3 py-4 bg-back-white dark:bg-black"
        >
          <actor-eight />
          <actor-eight />
        </div>
      </div>

      <div class="xl:w-3/5">
        <div class="flex flex-wrap overflow-hidden mx-2 my-3">
          <div class="xl:w-4/5">
            <div class="text-xl dark:text-white">
              Related Award Winning Movies
            </div>
          </div>
          <div class="xl:w-1/5">
            <see-all />
          </div>
        </div>
        <div
          class="flex flex-wrap overflow-hidden rounded-lg mr-2 px-3 pt-2 justify-center"
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
    ShareModal
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
    }
  },
  mounted() {}
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

@media only screen and (max-width: 1552px) {
  .width100_tv {
    width: 100%;
  }
  .width33_tv {
    width: 33.333%;
  }
}

@media only screen and (max-width: 876px) {
  .width100_tv {
    width: 100%;
  }
  .width33_tv {
    width: 100%;
  }
}
</style>
