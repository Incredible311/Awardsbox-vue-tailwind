<template>
  <div class="flex flex-wrap overflow-hidden mx-2 mt-4">
    <div
      class="bg-black w-full rounded-xl mx-2 text-center font"
      style="height: 24em"
    >
      <p class="text-white text-4xl" style="margin-top: 12%">
        Metro-Goldwyn-Mayer
      </p>
    </div>
    <img
      src="~/assets/images/mgm-logo-e1551810978728.jpg"
      class="rounded-full w-32 h-32 -mt-20 ml-20 person-img"
      style="border: solid white 1px"
    />
    <div class="mx-2 my-1">
      <h1 class="dark:text-white text-lg font-bold">
        Beverly Hills, California, United States
      </h1>
      <div class="flex">
        <font-awesome-icon
          :icon="['fas', 'link']"
          style="margin-top: 3px; margin-right: 6px"
          class="dark:text-white"
        />
        <h1 class="dark:text-white">Home Page</h1>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import "~/assets/css/styles.css";
</style>
