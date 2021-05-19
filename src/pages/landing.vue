<template>
  <div class="">
    <div class="landingfirst bg-black rounded-xl m-2 mx-3">
      <div class="flex flex-wrap overflow-hidden px-3 py-3">
        <div class="w-full md:w-3/5 px-4">
          <h1 class="text-white text-sm mb-3">
            Movies, TV-Shows, Actors, Actress, Directors, Writers, Editors...
          </h1>
          <p class="text-xl text-white my-2">
            Discover Awards & Nominations around the World!
          </p>
          <div class="bg-white p-2 rounded-xl my-3">
            <h1 class="mt-4 mb-2">18th Academy Award Winning Movies</h1>
            <swiper :options="swiperOption">
              <swiper-slide
                ><img src="@/assets/image/Rectangle 10.png" alt="" />
                <h1 class="text-xs" data-v-2a183b29="">
                  Eternal Sunshine of the Spotless Mind(2014)
                </h1></swiper-slide
              >
              <swiper-slide
                ><img src="@/assets/image/Rectangle 11.png" alt="" />
                <h1 class="text-xs" data-v-2a183b29="">
                  Eternal Sunshine of the Spotless Mind(2014)
                </h1></swiper-slide
              >
              <swiper-slide
                ><img src="@/assets/image/Rectangle 12 (3).png" alt="" />
                <h1 class="text-xs" data-v-2a183b29="">
                  Eternal Sunshine of the Spotless Mind(2014)
                </h1></swiper-slide
              >
              <swiper-slide
                ><img src="@/assets/image/Rectangle 13 (1).png" alt="" />
                <h1 class="text-xs" data-v-2a183b29="">
                  Eternal Sunshine of the Spotless Mind(2014)
                </h1></swiper-slide
              >
              <swiper-slide
                ><img src="@/assets/image/permovie-test.png" alt="" />
                <h1 class="text-xs" data-v-2a183b29="">
                  Eternal Sunshine of the Spotless Mind(2014)
                </h1></swiper-slide
              >
            </swiper>
            <load-more />
          </div>
        </div>
        <div class="md:w-2/5 p-2">
          <div class="sign px-2">
            <div class="">
              <img src="@/assets/image/logo.png" alt="" style="width: 115px" />
              <p class="text-xl mt-3 text-white">Sign in to your account</p>
              <p class="text-white text-sm">Continue with</p>
            </div>
            <div class="flex flex-wrap overflow-hidden">
              <div class="w-1/4">
                <div class="bg-white text-center m-1 p-1 rounded-full">
                  <font-awesome-icon
                    :icon="['fab', 'facebook']"
                    class="bg-white rounded-full"
                    style="width: 20px; height: 20px; padding: 1px"
                  />
                </div>
              </div>
              <div class="w-1/4">
                <div class="bg-white text-center m-1 p-1 rounded-full">
                  <font-awesome-icon
                    :icon="['fab', 'google']"
                    class="bg-white rounded-full"
                    style="width: 20px; height: 20px; padding: 1px"
                  />
                </div>
              </div>
              <div class="w-1/4">
                <div class="bg-white text-center m-1 p-1 rounded-full">
                  <font-awesome-icon
                    :icon="['fab', 'twitter']"
                    class="bg-white rounded-full"
                    style="width: 20px; height: 20px; padding: 1px"
                  />
                </div>
              </div>
              <div class="w-1/4">
                <div class="bg-white text-center m-1 p-1 rounded-full">
                  <font-awesome-icon
                    :icon="['fab', 'apple']"
                    class="bg-white rounded-full"
                    style="width: 20px; height: 20px; padding: 1px"
                  />
                </div>
              </div>
            </div>
            <form action="/action_page.php">
              <label for="fname" class="text-white text-sm"
                >Email address</label
              >
              <input
                type="email"
                id="fname"
                name="fname"
                class="inputs"
              /><br /><br />
              <label for="lname" class="text-white text-sm">Username</label>
              <input
                type="text"
                id="lname"
                name="lname"
                class="inputs"
              /><br /><br />
              <label for="lname" class="text-white text-sm">Password</label>
              <input
                type="password"
                id="lname"
                name="lname"
                class="inputs"
              /><br /><br />
              <label class="container text-white text-sm"
                >Creating an account means you’re okay with our Terms of
                Service, Privacy Policy, and our default Notification Settings.
                <!-- <input type="checkbox" checked="checked" />
                <span class="checkmark"></span> -->
              </label>
              <button class="w-full bg-white text-white py-1 rounded-full my-1">
                <font-awesome-icon
                  :icon="['fas', 'user-plus']"
                  class="text-black rounded-full"
                  style="width: 20px; height: 20px; padding: 1px margin-top:2px;"
                />
                <span class="text-black">Sign Up</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="landingfirst bg-black rounded-xl m-2 mx-3">
      <div class="flex flex-wrap overflow-hidden px-8 py-3">
        <div class="md:w-3/5">
          <h1 class="mb-3 everyWhere" style="font-size: 47px; color: #ffdd22">
            Everywhere at anytime you like
          </h1>
          <p
            class="text-xl text-white"
            style="font-size: 35px; line-height: 42px"
          >
            Awards Box available on smart TV, Apple TV, Android TV, mobile
            phone, tablet, internet browser and PWA for free.
          </p>
          <!-- md:flex-row flex-col -->
          <div class="flex flex-wrap overflow-hidden">
            <img
              src="@/assets/image/webapp.png"
              class="h-10 mx-2 justify-center my-1"
              alt=""
            />
            <img
              src="@/assets/image/google-play.png"
              class="h-10 mx-2 justify-center my-1"
              alt=""
            />
            <img
              src="@/assets/image/app-store.png"
              class="h-10 mx-2 justify-center my-1"
              alt=""
            />
          </div>
          <div class="flex flex-wrap overflow-hidden">
            <img
              src="@/assets/image/mac-app-store.png"
              class="h-10 mx-2 my-1"
              alt=""
            />
            <img
              src="@/assets/image/apple-tv.png"
              class="h-10 mx-2 my-1"
              alt=""
            />
            <img
              src="@/assets/image/amazon-appstore.png"
              class="h-10 mx-2 my-1"
              alt=""
            />
          </div>
          <div class="flex flex-wrap overflow-hidden">
            <img
              src="@/assets/image/microsoft.png"
              class="h-10 mx-2 my-1"
              alt=""
            />
          </div>
        </div>
        <div class="md:w-2/5 p-2 my-1">
          <img src="@/assets/image/image 32.png" alt="" />
        </div>
      </div>
    </div>
    <div
      class="flex flex-wrap overflow-hidden m-2 mx-3 bg-black rounded-xl p-5"
    >
      <award-box class="p-1" />
      <award-box class="p-1" />
      <award-box class="p-1" />
      <award-box class="p-1" />
    </div>
    <footer-side />
  </div>
</template>
<script>
import LoadMore from "@/components/buttons/loadmore";
import FooterSide from "@/components/footer";
import AwardBox from "@/components/single/person/award";
export default {
  layout: "signin",
  components: {
    LoadMore,
    FooterSide,
    AwardBox,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 9,
        spaceBetween: 30,
        breakpoints: {
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          618: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1400: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        },
      },
    };
  },
};
</script>
<style scoped>
.landingfirst {
}
.inputs {
  width: 100%;
  border: 1px solid;
  border-radius: 7px;
  height: 33px;
}

.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
.sign {
  /* width: 400px; */
  /* display: block; */
  margin-left: auto;
  margin-right: auto;
}

@media only screen and (max-width: 600px) {
  .everyWhere {
    font-size: 35px !important;
  }
}
</style>
