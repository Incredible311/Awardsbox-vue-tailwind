<template>
  <div class="rounded-xl">
    <lottie
      :width="200"
      :height="150"
      :options="lottieOptions.logo"
      v-on:animCreated="(a) => handleDropdownAnimation(a, 'sort')"
    />
    <div class="text-sm" style="text-align: center">
      <p class="mt-2 text-lg font-bold">Hi Username</p>
      <p class="mb-3 text-lg font-bold">Welcome to Awards Box!</p>
      <p class="mt-4 mb-2">
        Fantastic that you have signed up for the Awards Box. We are going to
        walkthrough the basic settings and you are ready to go!
      </p>
    </div>
    <p class="text-lg font-bold">Complete your Profile</p>
    <div class="flex my-2 justify-between">
      <div class="flex">
        <p>Select your Avatar</p>
        <div>or click to upload</div>
      </div>
      <b-button
        v-b-toggle.accordion-3
        class="m-1"
        style="
          overflow-anchor: none;
          background: none;
          border: none;
          padding: 0;
        "
        ><font-awesome-icon :icon="['fas', 'chevron-down']" class="text-black"
      /></b-button>
    </div>
    <b-collapse id="accordion-3" visible accordion="my-accordion">
      <b-card style="border: none">
        <div class="flex" style="background: #f7f7f7">
          <div
            class="w-1/6 profileAvatar p-1"
            @click="toggleDropdownAnimation('Avatar_one')"
          >
            <img
              src="@/assets/image/Group 234.png"
              alt=""
              class="w-full image"
            />
            <div class="middle">
              <lottie
                :width="30"
                :height="30"
                :options="lottieOptions.heart"
                v-on:animCreated="
                  (a) => handleDropdownAnimation(a, 'Avatar_one')
                "
              />
            </div>
          </div>
          <div
            class="w-1/6 profileAvatar p-1"
            @click="toggleDropdownAnimation('Avatar_two')"
          >
            <img
              src="@/assets/image/Group 234.png"
              alt=""
              class="w-full image"
            />
            <div class="middle">
              <lottie
                :width="30"
                :height="30"
                :options="lottieOptions.heart"
                v-on:animCreated="
                  (a) => handleDropdownAnimation(a, 'Avatar_two')
                "
              />
            </div>
          </div>
          <div
            class="w-1/6 profileAvatar p-1"
            @click="toggleDropdownAnimation('Avatar_three')"
          >
            <img
              src="@/assets/image/Group 234.png"
              alt=""
              class="w-full image"
            />
            <div class="middle">
              <lottie
                :width="30"
                :height="30"
                :options="lottieOptions.heart"
                v-on:animCreated="
                  (a) => handleDropdownAnimation(a, 'Avatar_three')
                "
              />
            </div>
          </div>

          <div
            class="w-1/6 profileAvatar p-1"
            @click="toggleDropdownAnimation('Avatar_four')"
          >
            <img
              src="@/assets/image/Group 234.png"
              alt=""
              class="w-full image"
            />
            <div class="middle">
              <lottie
                :width="30"
                :height="30"
                :options="lottieOptions.heart"
                v-on:animCreated="
                  (a) => handleDropdownAnimation(a, 'Avatar_four')
                "
              />
            </div>
          </div>
          <div
            class="w-1/6 profileAvatar p-1"
            @click="toggleDropdownAnimation('Avatar_five')"
          >
            <img
              src="@/assets/image/Group 234.png"
              alt=""
              class="w-full image"
            />
            <div class="middle">
              <lottie
                :width="30"
                :height="30"
                :options="lottieOptions.heart"
                v-on:animCreated="
                  (a) => handleDropdownAnimation(a, 'Avatar_five')
                "
              />
            </div>
          </div>
          <div
            class="w-1/6 profileAvatar p-1"
            @click="toggleDropdownAnimation('Avatar_six')"
          >
            <img
              src="@/assets/image/Group 234.png"
              alt=""
              class="w-full image"
            />
            <div class="middle">
              <lottie
                :width="30"
                :height="30"
                :options="lottieOptions.heart"
                v-on:animCreated="
                  (a) => handleDropdownAnimation(a, 'Avatar_six')
                "
              />
            </div>
          </div>
        </div>
        <div class="flex" style="background: #f7f7f7">
          <div
            class="w-1/6 profileAvatar p-1"
            @click="toggleDropdownAnimation('Avatar_seven')"
          >
            <img
              src="@/assets/image/Group 234.png"
              alt=""
              class="w-full image"
            />
            <div class="middle">
              <lottie
                :width="30"
                :height="30"
                :options="lottieOptions.heart"
                v-on:animCreated="
                  (a) => handleDropdownAnimation(a, 'Avatar_seven')
                "
              />
            </div>
          </div>
          <div
            class="w-1/6 profileAvatar p-1"
            @click="toggleDropdownAnimation('Avatar_eight')"
          >
            <img
              src="@/assets/image/Group 234.png"
              alt=""
              class="w-full image"
            />
            <div class="middle">
              <lottie
                :width="30"
                :height="30"
                :options="lottieOptions.heart"
                v-on:animCreated="
                  (a) => handleDropdownAnimation(a, 'Avatar_eight')
                "
              />
            </div>
          </div>
          <div
            class="w-1/6 profileAvatar p-1"
            @click="toggleDropdownAnimation('Avatar_nine')"
          >
            <img
              src="@/assets/image/Group 234.png"
              alt=""
              class="w-full image"
            />
            <div class="middle">
              <lottie
                :width="30"
                :height="30"
                :options="lottieOptions.heart"
                v-on:animCreated="
                  (a) => handleDropdownAnimation(a, 'Avatar_nine')
                "
              />
            </div>
          </div>
          <div
            class="w-1/6 profileAvatar p-1"
            @click="toggleDropdownAnimation('Avatar_ten')"
          >
            <img
              src="@/assets/image/Group 234.png"
              alt=""
              class="w-full image"
            />
            <div class="middle">
              <lottie
                :width="30"
                :height="30"
                :options="lottieOptions.heart"
                v-on:animCreated="
                  (a) => handleDropdownAnimation(a, 'Avatar_ten')
                "
              />
            </div>
          </div>
          <div
            class="w-1/6 profileAvatar p-1"
            @click="toggleDropdownAnimation('Avatar_eleven')"
          >
            <img
              src="@/assets/image/Group 234.png"
              alt=""
              class="w-full image"
            />
            <div class="middle">
              <lottie
                :width="30"
                :height="30"
                :options="lottieOptions.heart"
                v-on:animCreated="
                  (a) => handleDropdownAnimation(a, 'Avatar_eleven')
                "
              />
            </div>
          </div>
          <div
            class="w-1/6 profileAvatar p-1"
            @click="toggleDropdownAnimation('Avatar_twelve')"
          >
            <img
              src="@/assets/image/Group 234.png"
              alt=""
              class="w-full image"
            />
            <div class="middle">
              <lottie
                :width="30"
                :height="30"
                :options="lottieOptions.heart"
                v-on:animCreated="
                  (a) => handleDropdownAnimation(a, 'Avatar_twelve')
                "
              />
            </div>
          </div>
        </div>
      </b-card>
    </b-collapse>

    <div class="flex my-2">
      <div class="flex-1">
        <div class="flex">
          <p>Choose Your Favourite Awards</p>
        </div>
      </div>
      <div class="flex">
        <b-button
          v-b-toggle.accordion-4
          class="m-1"
          style="
            overflow-anchor: none;
            background: none;
            border: none;
            padding: 0;
          "
          ><font-awesome-icon
            :icon="['fas', 'chevron-down']"
            class="text-black"
        /></b-button>
      </div>
    </div>
    <b-collapse id="accordion-4" accordion="my-accordion">
      <b-card style="border: none">
        <div class="flex">
          <!-- <div class="xl:w-1/4 md:w-1/2 sm:w-1/1">
            <div
              class="shadow-md bg-black rounded-xl text-center p-4 m-1 box font10"
            >
              <p class="pt-2 text-white">Emmy Awards</p>
            </div>
          </div> -->
          <div class="xl:w-1/4 md:w-1/2 sm:w-1/1">
            <div
              class="shadow-md bg-black rounded-xl text-center p-4 m-1 box font10"
              @click="toggleDropdownAnimation('Emmy_one')"
            >
              <p class="pt-2 text-white">Emmy Awards</p>
            </div>
            <div class="middle">
              <lottie
                :width="30"
                :height="30"
                :options="lottieOptions.heart"
                v-on:animCreated="(a) => handleDropdownAnimation(a, 'Emmy_one')"
              />
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 sm:w-1/1">
            <div
              class="shadow-md bg-white rounded-xl text-center p-4 m-1 box font10"
            >
              <p class="pt-2 text-black">Emmy Awards</p>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 sm:w-1/1">
            <div
              class="shadow-md bg-black rounded-xl text-center p-4 m-1 box font10"
            >
              <p class="pt-2 text-white">Emmy Awards</p>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 sm:w-1/1">
            <div
              class="shadow-md bg-white rounded-xl text-center p-4 m-1 box font10"
            >
              <p class="pt-2 text-black">Emmy Awards</p>
            </div>
          </div>
        </div>
        <div class="flex">
          <div class="xl:w-1/4 md:w-1/2 sm:w-1/1">
            <div
              class="shadow-md bg-white rounded-xl text-center p-4 m-1 box font10"
            >
              <p class="pt-2 text-black">Emmy Awards</p>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 sm:w-1/1">
            <div
              class="shadow-md bg-black rounded-xl text-center p-4 m-1 box font10"
            >
              <p class="pt-2 text-white">Emmy Awards</p>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 sm:w-1/1">
            <div
              class="shadow-md bg-white rounded-xl text-center p-4 m-1 box font10"
            >
              <p class="pt-2 text-black">Emmy Awards</p>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 sm:w-1/1">
            <div
              class="shadow-md bg-black rounded-xl text-center p-4 m-1 box font10"
            >
              <p class="pt-2 text-white">Emmy Awards</p>
            </div>
          </div>
        </div>
      </b-card>
    </b-collapse>
    <div class="flex my-2">
      <div class="flex-1">
        <div class="flex">
          <p>Select your Avatar</p>
        </div>
      </div>
      <div class="flex">
        <b-button
          v-b-toggle.accordion-5
          class="m-1"
          style="
            overflow-anchor: none;
            background: none;
            border: none;
            padding: 0;
          "
          ><font-awesome-icon
            :icon="['fas', 'chevron-down']"
            class="text-black"
        /></b-button>
      </div>
    </div>
    <b-collapse id="accordion-5" accordion="my-accordion">
      <b-card style="border: none; background: #f7f7f7">
        <div class="flex mb-2">
          <div
            class="w-1/4 profileAvatar text-center"
            @click="toggleDropdownAnimation('Select_one')"
          >
            <img
              src="@/assets/image/permovie-test-1.png"
              alt=""
              class="w-full box"
            />
            <h1 class="text-black text-xs" data-v-2a183b29="">
              Eternal Sunshine of the Spotless Mind(2014)
            </h1>
            <div class="middle-third">
              <lottie
                :width="30"
                :height="30"
                :options="lottieOptions.heart"
                v-on:animCreated="
                  (a) => handleDropdownAnimation(a, 'Select_one')
                "
              />
            </div>
          </div>

          <div
            class="w-1/4 profileAvatar text-center"
            @click="toggleDropdownAnimation('Select_two')"
          >
            <img
              src="@/assets/image/permovie-test-1.png"
              alt=""
              class="w-full box"
            />
            <h1 class="text-black text-xs" data-v-2a183b29="">
              Eternal Sunshine of the Spotless Mind(2014)
            </h1>
            <div class="middle-third">
              <lottie
                :width="30"
                :height="30"
                :options="lottieOptions.heart"
                v-on:animCreated="
                  (a) => handleDropdownAnimation(a, 'Select_two')
                "
              />
            </div>
          </div>
          <div
            class="w-1/4 profileAvatar text-center"
            @click="toggleDropdownAnimation('Select_three')"
          >
            <img
              src="@/assets/image/permovie-test-1.png"
              alt=""
              class="w-full box"
            />
            <h1 class="text-black text-xs" data-v-2a183b29="">
              Eternal Sunshine of the Spotless Mind(2014)
            </h1>
            <div class="middle-third">
              <lottie
                :width="30"
                :height="30"
                :options="lottieOptions.heart"
                v-on:animCreated="
                  (a) => handleDropdownAnimation(a, 'Select_three')
                "
              />
            </div>
          </div>
          <div
            class="w-1/4 profileAvatar text-center"
            @click="toggleDropdownAnimation('Select_four')"
          >
            <img
              src="@/assets/image/permovie-test-1.png"
              alt=""
              class="w-full box"
            />
            <h1 class="text-black text-xs" data-v-2a183b29="">
              Eternal Sunshine of the Spotless Mind(2014)
            </h1>
            <div class="middle-third">
              <lottie
                :width="30"
                :height="30"
                :options="lottieOptions.heart"
                v-on:animCreated="
                  (a) => handleDropdownAnimation(a, 'Select_four')
                "
              />
            </div>
          </div>
        </div>
        <div class="flex">
          <div
            class="w-1/4 profileAvatar text-center"
            @click="toggleDropdownAnimation('Select_five')"
          >
            <img
              src="@/assets/image/permovie-test-1.png"
              alt=""
              class="w-full box"
            />
            <h1 class="text-black text-xs" data-v-2a183b29="">
              Eternal Sunshine of the Spotless Mind(2014)
            </h1>
            <div class="middle-third">
              <lottie
                :width="30"
                :height="30"
                :options="lottieOptions.heart"
                v-on:animCreated="
                  (a) => handleDropdownAnimation(a, 'Select_five')
                "
              />
            </div>
          </div>
          <div
            class="w-1/4 profileAvatar text-center"
            @click="toggleDropdownAnimation('Select_six')"
          >
            <img
              src="@/assets/image/permovie-test-1.png"
              alt=""
              class="w-full box"
            />
            <h1 class="text-black text-xs" data-v-2a183b29="">
              Eternal Sunshine of the Spotless Mind(2014)
            </h1>
            <div class="middle-third">
              <lottie
                :width="30"
                :height="30"
                :options="lottieOptions.heart"
                v-on:animCreated="
                  (a) => handleDropdownAnimation(a, 'Select_six')
                "
              />
            </div>
          </div>
          <div
            class="w-1/4 profileAvatar text-center"
            @click="toggleDropdownAnimation('Select_seven')"
          >
            <img
              src="@/assets/image/permovie-test-1.png"
              alt=""
              class="w-full box"
            />
            <h1 class="text-black text-xs" data-v-2a183b29="">
              Eternal Sunshine of the Spotless Mind(2014)
            </h1>
            <div class="middle-third">
              <lottie
                :width="30"
                :height="30"
                :options="lottieOptions.heart"
                v-on:animCreated="
                  (a) => handleDropdownAnimation(a, 'Select_seven')
                "
              />
            </div>
          </div>
          <div
            class="w-1/4 profileAvatar text-center"
            @click="toggleDropdownAnimation('Select_eight')"
          >
            <img
              src="@/assets/image/permovie-test-1.png"
              alt=""
              class="w-full box"
            />
            <h1 class="text-black text-xs" data-v-2a183b29="">
              Eternal Sunshine of the Spotless Mind(2014)
            </h1>
            <div class="middle-third">
              <lottie
                :width="30"
                :height="30"
                :options="lottieOptions.heart"
                v-on:animCreated="
                  (a) => handleDropdownAnimation(a, 'Select_eight')
                "
              />
            </div>
          </div>
        </div>
        <load-more />
      </b-card>
    </b-collapse>
    <div class="flex">
      <div class="flex-1">
        <div class="flex">
          <p>Choose Your Favourite People</p>
        </div>
      </div>
      <div class="flex">
        <b-button
          v-b-toggle.accordion-6
          class="m-1"
          style="
            overflow-anchor: none;
            background: none;
            border: none;
            padding: 0;
          "
          ><font-awesome-icon
            :icon="['fas', 'chevron-down']"
            class="text-black"
        /></b-button>
      </div>
    </div>
    <b-collapse id="accordion-6" accordion="my-accordion">
      <b-card style="border: none; background: rgb(247, 247, 247)">
        <div class="flex">
          <div
            class="w-1/4 profileAvatar text-center p-1"
            @click="toggleDropdownAnimation('People_one')"
          >
            <img
              src="@/assets/image/Ellipse 32.png"
              alt=""
              class="w-full box"
            />
            <h1 class="text-black text-xs" data-v-2a183b29="">
              Millie Bobby Brown Acting
            </h1>
            <div class="middle-fourth">
              <lottie
                :width="30"
                :height="30"
                :options="lottieOptions.heart"
                v-on:animCreated="
                  (a) => handleDropdownAnimation(a, 'People_one')
                "
              />
            </div>
          </div>
          <div
            class="w-1/4 profileAvatar text-center p-1"
            @click="toggleDropdownAnimation('People_two')"
          >
            <img
              src="@/assets/image/Ellipse 32.png"
              alt=""
              class="w-full box"
            />
            <h1 class="text-black text-xs" data-v-2a183b29="">
              Millie Bobby Brown Acting
            </h1>
            <div class="middle-fourth">
              <lottie
                :width="30"
                :height="30"
                :options="lottieOptions.heart"
                v-on:animCreated="
                  (a) => handleDropdownAnimation(a, 'People_two')
                "
              />
            </div>
          </div>
          <div
            class="w-1/4 profileAvatar text-center p-1"
            @click="toggleDropdownAnimation('People_three')"
          >
            <img
              src="@/assets/image/Ellipse 32.png"
              alt=""
              class="w-full box"
            />
            <h1 class="text-black text-xs" data-v-2a183b29="">
              Millie Bobby Brown Acting
            </h1>
            <div class="middle-fourth">
              <lottie
                :width="30"
                :height="30"
                :options="lottieOptions.heart"
                v-on:animCreated="
                  (a) => handleDropdownAnimation(a, 'People_three')
                "
              />
            </div>
          </div>
          <div
            class="w-1/4 profileAvatar text-center p-1"
            @click="toggleDropdownAnimation('People_four')"
          >
            <img
              src="@/assets/image/Ellipse 32.png"
              alt=""
              class="w-full box"
            />
            <h1 class="text-black text-xs" data-v-2a183b29="">
              Millie Bobby Brown Acting
            </h1>
            <div class="middle-fourth">
              <lottie
                :width="30"
                :height="30"
                :options="lottieOptions.heart"
                v-on:animCreated="
                  (a) => handleDropdownAnimation(a, 'People_four')
                "
              />
            </div>
          </div>
        </div>
        <div class="flex text-center">
          <div
            class="w-1/4 profileAvatar text-center p-1"
            @click="toggleDropdownAnimation('People_five')"
          >
            <img
              src="@/assets/image/Ellipse 32.png"
              alt=""
              class="w-full box"
            />
            <h1 class="text-black text-xs" data-v-2a183b29="">
              Millie Bobby Brown Acting
            </h1>
            <div class="middle-fourth">
              <lottie
                :width="30"
                :height="30"
                :options="lottieOptions.heart"
                v-on:animCreated="
                  (a) => handleDropdownAnimation(a, 'People_five')
                "
              />
            </div>
          </div>
          <div
            class="w-1/4 profileAvatar text-center p-1"
            @click="toggleDropdownAnimation('People_six')"
          >
            <img
              src="@/assets/image/Ellipse 32.png"
              alt=""
              class="w-full box"
            />
            <h1 class="text-black text-xs" data-v-2a183b29="">
              Millie Bobby Brown Acting
            </h1>
            <div class="middle-fourth">
              <lottie
                :width="30"
                :height="30"
                :options="lottieOptions.heart"
                v-on:animCreated="
                  (a) => handleDropdownAnimation(a, 'People_six')
                "
              />
            </div>
          </div>
          <div
            class="w-1/4 profileAvatar text-center p-1"
            @click="toggleDropdownAnimation('People_seven')"
          >
            <img
              src="@/assets/image/Ellipse 32.png"
              alt=""
              class="w-full box"
            />
            <h1 class="text-black text-xs" data-v-2a183b29="">
              Millie Bobby Brown Acting
            </h1>
            <div class="middle-fourth">
              <lottie
                :width="30"
                :height="30"
                :options="lottieOptions.heart"
                v-on:animCreated="
                  (a) => handleDropdownAnimation(a, 'People_seven')
                "
              />
            </div>
          </div>
          <div
            class="w-1/4 profileAvatar text-center p-1"
            @click="toggleDropdownAnimation('People_eight')"
          >
            <img
              src="@/assets/image/Ellipse 32.png"
              alt=""
              class="w-full box"
            />
            <h1 class="text-black text-xs" data-v-2a183b29="">
              Millie Bobby Brown Acting
            </h1>
            <div class="middle-fourth">
              <lottie
                :width="30"
                :height="30"
                :options="lottieOptions.heart"
                v-on:animCreated="
                  (a) => handleDropdownAnimation(a, 'People_eight')
                "
              />
            </div>
          </div>
        </div>
        <load-more />
      </b-card>
    </b-collapse>
    <div class="flex my-2">
      <div class="flex-1">
        <div class="flex">
          <p>Choose Your Seen It Movies & TV-Shows</p>
        </div>
      </div>
      <div class="flex">
        <b-button
          v-b-toggle.accordion-7
          class="m-1"
          style="
            overflow-anchor: none;
            background: none;
            border: none;
            padding: 0;
          "
          ><font-awesome-icon
            :icon="['fas', 'chevron-down']"
            class="text-black"
        /></b-button>
      </div>
    </div>
    <b-collapse id="accordion-7" accordion="my-accordion">
      <b-card style="border: none; background: rgb(247, 247, 247)">
        <div class="flex">
          <div
            class="w-1/4 profileAvatar text-center"
            @click="toggleDropdownAnimation('Movies_one')"
          >
            <img
              src="@/assets/image/permovie-test-1.png"
              alt=""
              class="w-full box"
            />
            <h1 class="text-black text-xs" data-v-2a183b29="">
              Eternal Sunshine of the Spotless Mind(2014)
            </h1>
            <div class="middle-fifth">
              <lottie
                :width="30"
                :height="30"
                :options="lottieOptions.heart"
                v-on:animCreated="
                  (a) => handleDropdownAnimation(a, 'Movies_one')
                "
              />
            </div>
          </div>
          <div
            class="w-1/4 profileAvatar text-center"
            @click="toggleDropdownAnimation('Movies_two')"
          >
            <img
              src="@/assets/image/permovie-test-1.png"
              alt=""
              class="w-full box"
            />
            <h1 class="text-black text-xs" data-v-2a183b29="">
              Eternal Sunshine of the Spotless Mind(2014)
            </h1>
            <div class="middle-fifth">
              <lottie
                :width="30"
                :height="30"
                :options="lottieOptions.heart"
                v-on:animCreated="
                  (a) => handleDropdownAnimation(a, 'Movies_two')
                "
              />
            </div>
          </div>
          <div
            class="w-1/4 profileAvatar text-center"
            @click="toggleDropdownAnimation('Movies_three')"
          >
            <img
              src="@/assets/image/permovie-test-1.png"
              alt=""
              class="w-full box"
            />
            <h1 class="text-black text-xs" data-v-2a183b29="">
              Eternal Sunshine of the Spotless Mind(2014)
            </h1>
            <div class="middle-fifth">
              <lottie
                :width="30"
                :height="30"
                :options="lottieOptions.heart"
                v-on:animCreated="
                  (a) => handleDropdownAnimation(a, 'Movies_three')
                "
              />
            </div>
          </div>
          <div
            class="w-1/4 profileAvatar text-center"
            @click="toggleDropdownAnimation('Movies_four')"
          >
            <img
              src="@/assets/image/permovie-test-1.png"
              alt=""
              class="w-full box"
            />
            <h1 class="text-black text-xs" data-v-2a183b29="">
              Eternal Sunshine of the Spotless Mind(2014)
            </h1>
            <div class="middle-fifth">
              <lottie
                :width="30"
                :height="30"
                :options="lottieOptions.heart"
                v-on:animCreated="
                  (a) => handleDropdownAnimation(a, 'Movies_four')
                "
              />
            </div>
          </div>
        </div>
        <div class="flex">
          <div
            class="w-1/4 profileAvatar text-center"
            @click="toggleDropdownAnimation('Movies_five')"
          >
            <img
              src="@/assets/image/permovie-test-1.png"
              alt=""
              class="w-full box"
            />
            <h1 class="text-black text-xs" data-v-2a183b29="">
              Eternal Sunshine of the Spotless Mind(2014)
            </h1>
            <div class="middle-fifth">
              <lottie
                :width="30"
                :height="30"
                :options="lottieOptions.heart"
                v-on:animCreated="
                  (a) => handleDropdownAnimation(a, 'Movies_five')
                "
              />
            </div>
          </div>
          <div
            class="w-1/4 profileAvatar text-center"
            @click="toggleDropdownAnimation('Movies_six')"
          >
            <img
              src="@/assets/image/permovie-test-1.png"
              alt=""
              class="w-full box"
            />
            <h1 class="text-black text-xs" data-v-2a183b29="">
              Eternal Sunshine of the Spotless Mind(2014)
            </h1>
            <div class="middle-fifth">
              <lottie
                :width="30"
                :height="30"
                :options="lottieOptions.heart"
                v-on:animCreated="
                  (a) => handleDropdownAnimation(a, 'Movies_six')
                "
              />
            </div>
          </div>
          <div
            class="w-1/4 profileAvatar text-center"
            @click="toggleDropdownAnimation('Movies_seven')"
          >
            <img
              src="@/assets/image/permovie-test-1.png"
              alt=""
              class="w-full box"
            />
            <h1 class="text-black text-xs" data-v-2a183b29="">
              Eternal Sunshine of the Spotless Mind(2014)
            </h1>
            <div class="middle-fifth">
              <lottie
                :width="30"
                :height="30"
                :options="lottieOptions.heart"
                v-on:animCreated="
                  (a) => handleDropdownAnimation(a, 'Movies_seven')
                "
              />
            </div>
          </div>
          <div
            class="w-1/4 profileAvatar text-center"
            @click="toggleDropdownAnimation('Movies_eight')"
          >
            <img
              src="@/assets/image/permovie-test-1.png"
              alt=""
              class="w-full box"
            />
            <h1 class="text-black text-xs" data-v-2a183b29="">
              Eternal Sunshine of the Spotless Mind(2014)
            </h1>
            <div class="middle-fifth">
              <lottie
                :width="30"
                :height="30"
                :options="lottieOptions.heart"
                v-on:animCreated="
                  (a) => handleDropdownAnimation(a, 'Movies_eight')
                "
              />
            </div>
          </div>
        </div>
        <load-more />
      </b-card>
    </b-collapse>
    <div class="flex my-2">
      <div class="flex-1">
        <div class="flex">
          <p>Create Watchlist</p>
        </div>
      </div>
      <div class="flex">
        <b-button
          v-b-toggle.accordion-10
          class="m-1"
          style="
            overflow-anchor: none;
            background: none;
            border: none;
            padding: 0;
          "
          ><font-awesome-icon
            :icon="['fas', 'chevron-down']"
            class="text-black"
        /></b-button>
      </div>
    </div>
    <b-collapse id="accordion-10" accordion="my-accordion">
      <b-card style="border: none; background: rgb(247, 247, 247)">
        <img src="@/assets/image/image 30.png" alt="" class="logo" />
        <label for="fname" class="font-bold w-full">Name of list</label>
        <input type="text" id="fname" name="fname" class="in-thanks" />
        <label for="fname" class="font-bold mt-3">Watchlist description </label
        ><br />
        <textarea
          rows="3"
          cols="40"
          name="comment"
          form="usrform"
          class="in-thanks"
        ></textarea>
        <label for="fname" class="font-bold">Tags(optional)</label><br />
        <input type="text" id="fname" name="fname" class="in-thanks" />
        <button
          @click="hide"
          type="submit"
          value="Submit"
          class="create-btn"
          style=""
        >
          Create
        </button>
      </b-card>
    </b-collapse>
  </div>
</template>
<script>
import LoadMore from "@/components/buttons/loadmore";
import lottie from "vue-lottie/src/lottie.vue";
import * as logoData from "~/assets/lottie/logo.json";
import * as heartHover from "~/assets/lottie/heartHover.json";

export default {
  components: {
    LoadMore,
    lottie,
  },
  data() {
    return {
      toggle: false,
      dropdownAnimation: {},
      toggles: {
        one: false,
        two: false,
      },
      anim: {
        logoHov: null,
        heartHov: null,
      },
      lottieOptions: {
        logo: { animationData: logoData.default },
        heart: {
          animationData: heartHover.default,
          loop: false,
          autoplay: false,
        },
      },
    };
  },
  methods: {
    handleDropdownAnimation: function (anim, key) {
      if (!this.dropdownAnimation[key]) {
        this.dropdownAnimation[key] = {};
      }
      this.dropdownAnimation[key] = anim;
    },
    toggleDropdownAnimation: function (key) {
      this.dropdownAnimation[key].stop();
      this.dropdownAnimation[key].play();
    },
  },
};
</script>
<style>
.modal-body {
  background: #f7f7f7;
}
.static-logo {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 11em;
}
.logo {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.card-body {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 0rem;
}
.modal-footer {
  display: none;
}
.in-thanks {
  width: 100%;
  border: 1px solid;
  border-radius: 6px;
  padding: 4px;
}
.create-btn {
  background: #fee123;
  border-radius: 52px;

  outline: none !important;
  padding: 5px 15px 5px 15px;
  margin-top: 10px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.profileAvatar:hover .image {
  -webkit-filter: brightness(40%);
}
.box:hover {
  -webkit-filter: brightness(40%);
}
.middle {
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  margin-top: -7.5%;
  margin-left: 7.5%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}
.middle-third {
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  margin-top: -30%;
  margin-left: 12%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}
.middle-fourth {
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  margin-top: -18%;
  margin-left: 11.5%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}
.middle-fifth {
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  margin-top: -29%;
  margin-left: 12%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}
.heart {
  color: white;
  border-radius: 13px;
  display: flex;
  font-size: 9px;
}
.profileAvatar:hover .middle {
  opacity: 1;
}
.profileAvatar:hover .middle-third {
  opacity: 1;
}
.profileAvatar:hover .middle-fourth {
  opacity: 1;
}
.profileAvatar:hover .middle-fifth {
  opacity: 1;
}

@media only screen and (max-width: 506px) {
  .font10 {
    font-size: 12px;
    padding: 12px 9px 17px 7px !important;
  }
}
</style>