<template>
  <div>
    <div class="flex flex-wrap overflow-hidden mx-3 mt-4">
      <div class="bg-black w-full rounded-xl" style="height: 24em">
        <div class="flex flex-wrap overflow-hidden">
          <div class="md:w-1/2" style="padding: 6%">
            <!-- <p class="text-white text-xl">Discover Awards in the World!</p> -->
            <p class="text-white text-xl mt-4">
              Default User Profile & Notification Settings Read our terms below
              to learn more about your rights and responsibilities as a Awards
              Box user.
            </p>
          </div>
          <div class="md:w-1/2 p-2">
            <lottie
              :width="350"
              :height="350"
              :options="lottieOptions.awards"
              v-on:animCreated="handleAnimation($event, 'awardsAnim')"
              class="w-full displayNone"
            />
          </div>
        </div>
      </div>
    </div>
    <div
      class="rounded-lg shadow-md dark:bg-black bg-back-white dark:text-white mx-3 my-4 p-3"
    >
      <h1 class="text-xl py-2">Default User Profile & Notification Settings</h1>
      <p class="text-md py-2">
        By default we subscribe you to the following announcement and activity
        email notifications. You can change your notification settings at any
        time in your account settings.
      </p>
      <p class="text-md py-2">
        Courtside: The latest stories from our blog
        <br />
        Overtime Podcast: Get notified when new Overtime podcast episodes are
        live
        <br />
        New for You: Weekly email with recently posted Shots from designers you
        follow
        <br />
        Dribbble Communication: News, announcements, and product updates
        <br />
        Account Activity: Important notifications about you or activity you've
        missed
        <br />
        Draftees: Weekly email of Prospects looking to be drafted
        <br />
        Meetups Near You: Meetups posted close to my location
        <br />
        Comments: Notifications about comments received on your shots
        <br />
        Mentions: Notifications when someone mentions me
        <br />
        Invitation Allotments: Notifications when you receive new invitations
        <br />
        Invitations Expiring: Notifications when your invitations are expiring
        <br />
        Accepted Invitations: Notifications when someone accepts your invitation
        <br />
        Follow: Notifications when someone follows you
        <br />
        Players Follows: Notifications when another Player follows me
        <br />
        No spam ever. Unsubscribe any time.
      </p>
    </div>
  </div>
</template>
<script>
import lottie from "vue-lottie/src/lottie.vue";
import * as awardsAnimationData from "~/assets/lottie/Awards.json";

export default {
  components: {
    lottie,
  },
  data() {
    return {
      anim: {
        awardsAnim: null,
      },
      lottieOptions: {
        awards: { animationData: awardsAnimationData.default },
      },
    };
  },
  methods: {
    handleAnimation: function (anim, type) {
      this.anim[type] = anim;
    },
  },

  mounted() {},
};
</script>
<style scoped>
@media only screen and (max-width: 770px) {
  .displayNone {
    display: none;
  }
}
</style>