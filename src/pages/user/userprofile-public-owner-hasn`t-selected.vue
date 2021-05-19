<template>
  <div class="mx-3">
    <div class="flex flex-wrap overflow-hidden mx-3 mt-4">
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
        src="~/assets/image/Group 161.png"
        class="rounded-full w-32 h-32 -mt-20 ml-20 person-img"
        style="z-index: 10"
      />
      <h1 class="my-3 pt-1 dark:text-white text-md font-bold">
        Millie Bobby Brown
      </h1>

      <div class="m-3">
        <font-awesome-icon
          :icon="['fab', 'instagram']"
          class="dark:text-white"
          style="margin-top: 7px"
        />
      </div>
      <div class="m-3">
        <font-awesome-icon
          :icon="['fab', 'twitter']"
          class="dark:text-white"
          style="margin-top: 7px"
        />
      </div>
    </div>

    <b-modal id="modal-1" hide-footer hide-header>
      <!-- <img
        src="@/assets/image/image 30.png"
        alt=""
        style="display: block; margin-left: auto; margin-right: auto"
      /> -->
      <lottie
        :options="lottieOptions.Modal"
        v-on:animCreated="handleAnimation($event, 'Modal')"
      />
      <label for="" class="font-bold">Name of list</label>
      <br />
      <input
        type="text"
        style="border: 1px solid; width: 100%; border-radius: 5px"
      />
      <label for="" class="font-bold mt-3"
        >Watchlist description (optional)</label
      >
      <br />
      <input
        type="text"
        style="border: 1px solid; width: 100%; border-radius: 5px"
      />
      <label for="" class="font-bold mt-3">Tags(optional)</label>
      <br />
      <input
        type="text"
        style="border: 1px solid; width: 100%; border-radius: 5px"
        placeholder="Enter tags - example. top 20"
      />
      <button
        v-b-modal.modal-center
        class="font-bold bg-yellow-400 my-3 px-3 p-2 rounded-full"
        style="display: block; margin-left: auto; margin-right: auto"
      >
        Create
      </button>
    </b-modal>
    <per-tv-gray-modal ref="modalfor" />
    <div class="flex flex-wrap overflow-hidden">
      <div class="xl:w-1/2 md:w-1/2 sm:w-1/1 px-2">
        <div class="flex my-3 pl-1">
          <div class="text-lg dark:text-white" style="">Watchlists</div>
          <div
            v-b-modal.modal-1
            class="text-sm bg-black rounded-full text-white py-1 px-2 mx-2 smallFont"
            style="outline: none"
          >
            <font-awesome-icon :icon="['fas', 'plus-circle']" style="" />
            Create Watchlist
          </div>
        </div>
        <div class="flex flex-wrap overflow-hidden">
          <div class="w-1/2">
            <div class="p-0" style="background: none; border: none; padding: 0">
              <per-watchlist />
            </div>
          </div>
          <div class="w-1/2">
            <per-watchlist />
          </div>
        </div>
        <div class="flex my-2 pl-1 mt-5">
          <div v-b-modal.modal-center class="text-lg dark:text-white" style="">
            Favourite TV-Shows
          </div>
          <div
            v-b-modal.modal-center
            class="text-sm bg-black rounded-full text-white py-1 px-2 mx-2 text-center smallFont"
            style="outline: none"
          >
            <font-awesome-icon :icon="['fas', 'plus-circle']" style="" />
            Add favourite TV-Shows
          </div>
        </div>
        <div class="flex flex-wrap overflow-hidden rounded-lg">
          <div class="w-1/3 px-1 my-2">
            <div style="padding: 0px; border: none; background: none">
              <per-tv-gray />
            </div>
            <b-modal
              id="modal-center"
              hide-footer
              hide-header
              centered
              title="BootstrapVue"
            >
              <lottie
                :options="lottieOptions.Modal"
                v-on:animCreated="handleAnimation($event, 'Modal')"
              />
              <label for="">Add Movies or TV-Shows(Max. 50)</label>
              <input
                type="text"
                name=""
                id=""
                style="width: 100%; border: 1px solid; border-radius: 5px"
              />
              <div class="flex flex-wrap overflow-hidden my-2">
                <div class="w-1/4">
                  <img src="@/assets/image/permovie-test.png" alt="" />
                  <div class="pt-2" data-v-2a183b29="">
                    <h1 class="text-xs" data-v-2a183b29="">
                      Eternal Sunshine of the Spotless Mind(2014)
                    </h1>
                  </div>
                </div>
                <div class="w-1/4">
                  <img src="@/assets/image/permovie-test.png" alt="" />
                  <div class="pt-2" data-v-2a183b29="">
                    <h1 class="text-xs" data-v-2a183b29="">
                      Eternal Sunshine of the Spotless Mind(2014)
                    </h1>
                  </div>
                </div>
                <div class="w-1/4">
                  <img src="@/assets/image/permovie-test.png" alt="" />
                  <div class="pt-2" data-v-2a183b29="">
                    <h1 class="text-xs" data-v-2a183b29="">
                      Eternal Sunshine of the Spotless Mind(2014)
                    </h1>
                  </div>
                </div>
                <div class="w-1/4">
                  <img src="@/assets/image/permovie-test.png" alt="" />
                  <div class="pt-2" data-v-2a183b29="">
                    <h1 class="text-xs" data-v-2a183b29="">
                      Eternal Sunshine of the Spotless Mind(2014)
                    </h1>
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap overflow-hidden my-2">
                <div class="w-1/4">
                  <img src="@/assets/image/permovie-test.png" alt="" />
                  <div class="pt-2" data-v-2a183b29="">
                    <h1 class="text-xs" data-v-2a183b29="">
                      Eternal Sunshine of the Spotless Mind(2014)
                    </h1>
                  </div>
                </div>
                <div class="w-1/4">
                  <img src="@/assets/image/permovie-test.png" alt="" />
                  <div class="pt-2" data-v-2a183b29="">
                    <h1 class="text-xs" data-v-2a183b29="">
                      Eternal Sunshine of the Spotless Mind(2014)
                    </h1>
                  </div>
                </div>
                <div class="w-1/4">
                  <img src="@/assets/image/permovie-test.png" alt="" />
                  <div class="pt-2" data-v-2a183b29="">
                    <h1 class="text-xs" data-v-2a183b29="">
                      Eternal Sunshine of the Spotless Mind(2014)
                    </h1>
                  </div>
                </div>
                <div class="w-1/4">
                  <img src="@/assets/image/permovie-test.png" alt="" />
                  <div class="pt-2" data-v-2a183b29="">
                    <h1 class="text-xs" data-v-2a183b29="">
                      Eternal Sunshine of the Spotless Mind(2014)
                    </h1>
                  </div>
                </div>
              </div>
              <load-more />
              <button
                class="bg-yellow-400 rounded-full font-bold p-2 px-3"
                style="display: block; margin-left: auto; margin-right: auto"
              >
                Save
              </button>
            </b-modal>
          </div>
          <div class="w-1/3 px-1 my-2">
            <per-tv-gray />
          </div>
          <div class="w-1/3 px-1 my-2">
            <per-tv-gray />
          </div>
        </div>
        <div class="flex mt-4 mb-2 pl-1">
          <div class="text-lg dark:text-white" style="">Favourite Actors</div>
          <div
            v-b-modal.modal-center
            class="text-sm bg-black rounded-full text-white py-1 px-2 mx-2 text-center smallFont"
            style="outline: none"
          >
            <font-awesome-icon :icon="['fas', 'plus-circle']" style="" />
            Add favourite Actors
          </div>
        </div>
        <div class="flex flex-wrap overflow-hidden">
          <div class="w-1/5 p-2">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
          <div class="w-1/5 p-2">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
          <div class="w-1/5 p-2">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
          <div class="w-1/5 p-2">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
          <div class="w-1/5 p-2">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
          <div class="w-1/5 p-2">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
          <div class="w-1/5 p-2">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
          <div class="w-1/5 p-2">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
          <div class="w-1/5 p-2">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
          <div class="w-1/5 p-2">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
        </div>
        <div class="flex mt-4 mb-2">
          <div class="text-lg dark:text-white" style="">Favourite Editors</div>
          <div
            v-b-modal.modal-center
            class="text-sm bg-black rounded-full text-white py-1 px-2 mx-2 text-center smallFont"
            style="outline: none"
          >
            <font-awesome-icon :icon="['fas', 'plus-circle']" style="" />
            Add favourite Writers
          </div>
        </div>

        <div class="flex flex-wrap overflow-hidden">
          <div class="w-1/5 p-2 s">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
          <div class="w-1/5 p-2 s">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
          <div class="w-1/5 p-2 s">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
          <div class="w-1/5 p-2 s">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
          <div class="w-1/5 p-2 s">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
          <div class="w-1/5 p-2 s">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
          <div class="w-1/5 p-2 s">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
          <div class="w-1/5 p-2 s">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
          <div class="w-1/5 p-2 s">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
          <div class="w-1/5 p-2 s">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
        </div>
        <div class="flex mt-4 mb-2">
          <div class="text-lg dark:text-white" style="">Favourite Editors</div>
          <div
            v-b-modal.modal-center
            class="text-sm bg-black rounded-full text-white py-1 px-2 mx-2 text-center smallFont"
            style="outline: none"
          >
            <font-awesome-icon :icon="['fas', 'plus-circle']" style="" />
            Add favourite Editors
          </div>
        </div>

        <div class="flex flex-wrap overflow-hidden">
          <div class="w-1/5 p-2 s">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
          <div class="w-1/5 p-2 s">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
          <div class="w-1/5 p-2 s">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
          <div class="w-1/5 p-2 s">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
          <div class="w-1/5 p-2 s">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
          <div class="w-1/5 p-2 s">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
          <div class="w-1/5 p-2 s">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
          <div class="w-1/5 p-2 s">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
          <div class="w-1/5 p-2 s">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
          <div class="w-1/5 p-2 s">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
        </div>
      </div>
      <div class="xl:w-1/2 md:w-1/2 sm:w-1/1 px-2">
        <div class="flex my-2">
          <div class="text-lg dark:text-white" style="">Favourite Movies</div>
          <div
            v-b-modal.modal-centertwo
            class="text-sm bg-black rounded-full text-white py-1 px-2 mx-2 text-center smallFont"
            style="outline: none"
          >
            <font-awesome-icon :icon="['fas', 'plus-circle']" style="" />
            Add favourite Movies
          </div>
        </div>

        <div class="flex flex-wrap overflow-hidden rounded-lg">
          <div class="w-1/3 px-1 my-2">
            <div style="padding: 0px; border: none; background: none">
              <per-tv-gray />
            </div>
            <b-modal
              id="modal-centertwo"
              hide-footer
              hide-header
              centered
              title="BootstrapVue"
            >
              <!-- <img
                src="@/assets/image/image 30.png"
                alt=""
                style="display: block; margin-left: auto; margin-right: auto"
              /> -->
              <lottie
                :options="lottieOptions.Modal"
                v-on:animCreated="handleAnimation($event, 'Modal')"
              />
              <label for="">Add Movies or TV-Shows(Max. 50)</label>
              <input
                type="text"
                name=""
                id=""
                style="width: 100%; border: 1px solid; border-radius: 5px"
              />
              <div class="flex flex-wrap overflow-hidden my-2">
                <div class="w-1/4">
                  <img src="@/assets/image/permovie-test.png" alt="" />
                  <div class="pt-2" data-v-2a183b29="">
                    <h1 class="text-xs" data-v-2a183b29="">
                      Eternal Sunshine of the Spotless Mind(2014)
                    </h1>
                  </div>
                </div>
                <div class="w-1/4">
                  <img src="@/assets/image/permovie-test.png" alt="" />
                  <div class="pt-2" data-v-2a183b29="">
                    <h1 class="text-xs" data-v-2a183b29="">
                      Eternal Sunshine of the Spotless Mind(2014)
                    </h1>
                  </div>
                </div>
                <div class="w-1/4">
                  <img src="@/assets/image/permovie-test.png" alt="" />
                  <div class="pt-2" data-v-2a183b29="">
                    <h1 class="text-xs" data-v-2a183b29="">
                      Eternal Sunshine of the Spotless Mind(2014)
                    </h1>
                  </div>
                </div>
                <div class="w-1/4">
                  <img src="@/assets/image/permovie-test.png" alt="" />
                  <div class="pt-2" data-v-2a183b29="">
                    <h1 class="text-xs" data-v-2a183b29="">
                      Eternal Sunshine of the Spotless Mind(2014)
                    </h1>
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap overflow-hidden my-2">
                <div class="w-1/4">
                  <img src="@/assets/image/permovie-test.png" alt="" />
                  <div class="pt-2" data-v-2a183b29="">
                    <h1 class="text-xs" data-v-2a183b29="">
                      Eternal Sunshine of the Spotless Mind(2014)
                    </h1>
                  </div>
                </div>
                <div class="w-1/4">
                  <img src="@/assets/image/permovie-test.png" alt="" />
                  <div class="pt-2" data-v-2a183b29="">
                    <h1 class="text-xs" data-v-2a183b29="">
                      Eternal Sunshine of the Spotless Mind(2014)
                    </h1>
                  </div>
                </div>
                <div class="w-1/4">
                  <img src="@/assets/image/permovie-test.png" alt="" />
                  <div class="pt-2" data-v-2a183b29="">
                    <h1 class="text-xs" data-v-2a183b29="">
                      Eternal Sunshine of the Spotless Mind(2014)
                    </h1>
                  </div>
                </div>
                <div class="w-1/4">
                  <img src="@/assets/image/permovie-test.png" alt="" />
                  <div class="pt-2" data-v-2a183b29="">
                    <h1 class="text-xs" data-v-2a183b29="">
                      Eternal Sunshine of the Spotless Mind(2014)
                    </h1>
                  </div>
                </div>
              </div>
              <load-more />
              <button
                class="bg-yellow-400 rounded-full font-bold p-2 px-3"
                style="display: block; margin-left: auto; margin-right: auto"
              >
                Save
              </button>
            </b-modal>
          </div>
          <div class="w-1/3 px-1 my-2">
            <per-tv-gray />
          </div>
          <div class="w-1/3 px-1 my-2">
            <per-tv-gray />
          </div>
        </div>
        <load-more />
        <div class="flex mt-4 mb-2">
          <div class="text-lg dark:text-white" style="">Seen It</div>
          <div
            v-b-modal.modal-center
            class="text-sm bg-black rounded-full text-white py-1 px-2 mx-2 smallSeen"
            style="outline: none"
          >
            <font-awesome-icon :icon="['fas', 'plus-circle']" style="" />
            Add Seen It
          </div>
        </div>
        <div class="flex flex-wrap overflow-hidden">
          <div class="w-1/3">
            <div class="flex flex-wrap overflow-hidden px-1">
              <per-tv-gray />
            </div>
          </div>
          <div class="w-1/3">
            <div class="flex flex-wrap overflow-hidden px-1">
              <per-tv-gray />
            </div>
          </div>
          <div class="w-1/3">
            <div class="flex flex-wrap overflow-hidden px-1">
              <per-tv-gray />
            </div>
          </div>
        </div>
        <load-more />
        <div class="flex mt-4 mb-2">
          <div class="text-lg dark:text-white" style="">
            Favourite Directors
          </div>
          <div
            v-b-modal.modal-center
            class="text-sm bg-black rounded-full text-white py-1 px-2 mx-2 text-center smallFont"
            style="outline: none"
          >
            <font-awesome-icon :icon="['fas', 'plus-circle']" style="" />
            Add favourite Directors
          </div>
        </div>
        <div class="flex flex-wrap overflow-hidden">
          <div class="w-1/5 p-2 four">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
          <div class="w-1/5 p-2 four">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
          <div class="w-1/5 p-2 four">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
          <div class="w-1/5 p-2 four">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
          <div class="w-1/5 p-2 four">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
          <div class="w-1/5 p-2 four">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
          <div class="w-1/5 p-2 four">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
          <div class="w-1/5 p-2 four">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
          <div class="w-1/5 p-2 four">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
          <div class="w-1/5 p-2 four">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
        </div>
        <load-more />
        <div class="flex mt-4 mb-2">
          <div class="text-lg dark:text-white" style="">Favourite Awards</div>
          <div
            v-b-modal.modal-center
            class="text-sm bg-black rounded-full text-white py-1 px-2 mx-2 text-center smallFont"
            style="outline: none"
          >
            <font-awesome-icon :icon="['fas', 'plus-circle']" style="" />
            Add favourite Awards
          </div>
        </div>

        <div class="flex flex-wrap overflow-hidden">
          <div class="w-1/2">
            <per-watchlist />
          </div>
          <div class="w-1/2">
            <per-watchlist />
          </div>
          <div class="w-1/2">
            <per-watchlist />
          </div>
          <div class="w-1/2">
            <per-watchlist />
          </div>
        </div>
        <load-more />
      </div>
    </div>
  </div>
</template>	
<script>
import Vue from "vue";
import {
  Swiper as SwiperClass,
  Pagination,
  Mousewheel,
  Autoplay,
} from "swiper/swiper.esm";
import getAwesomeSwiper from "vue-awesome-swiper/dist/exporter";
SwiperClass.use([Pagination, Mousewheel, Autoplay]);
Vue.use(getAwesomeSwiper(SwiperClass));
const { Swiper, SwiperSlide } = getAwesomeSwiper(SwiperClass);
import "swiper/swiper-bundle.css";
import PersonTop from "@/components/single/person/top";
import WatchList from "@/components/user/watchlist";
import PerWatchlist from "@/components/user/perwatchlist";
import Modal from "@/components/user/modal";
import PerTvGrayModal from "@/components/user/per-tvshow-gray-modal";
import PerTvGray from "@/components/user/per-tvshow-gray";
import LoadMore from "@/components/buttons/loadmore";
import lottie from "vue-lottie/src/lottie.vue";
import * as ModalLogo from "~/assets/lottie/modallottie.json";

export default {
  components: {
    PersonTop,
    WatchList,
    PerWatchlist,
    Modal,
    PerTvGrayModal,
    PerTvGray,
    LoadMore,
    lottie,
  },
  data() {
    return {
      swiperOptions: {
        effect: "slide",
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        centeredSlides: true,
        speed: 1000,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
      },
      anim: {
        ModalLogo: null,
        // secondAnim: null
      },
      lottieOptions: {
        Modal: { animationData: ModalLogo.default },
        // second: { animationData: secondAnimationData.default },
      },
    };
  },
  methods: {
    openModal() {
      this.$refs.modal.show();
    },
    openModalfortv() {
      this.$refs.modalfor.show();
    },
    handleAnimation: function (anim, type) {
      this.anim[type] = anim;
    },
  },
  mounted() {},
};
</script>
<style scoped>
.modal-header {
  border-bottom: none !important;
}
.modal-footer {
  display: none;
}

@media only screen and (max-width: 450px) {
  .smallFont {
    outline: none;
    font-size: 10px;
    width: 100%;
    height: 27px;
    margin-top: 3px;
  }
  .smallSeen {
    outline: none;
    font-size: 10px;
    width: 37%;
    height: 27px;
    margin-top: 3px;
  }
}
</style>
