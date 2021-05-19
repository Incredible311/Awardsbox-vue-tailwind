<template>
  <div>
    <div class="topNav flex justify-center" style="width: 100%">
      <nav class="tabs flex">
        <button
          data-target="panel-1"
          class="tab text-xl text-center hover:text-yellow bg-black text-white rounded-full px-2 py-1 ml-2 mr-2 mt-2 movie"
        >
          <font-awesome-icon data-target="panel-1" :icon="['fas', 'film']" />
          Movies
        </button>
        <button
          data-target="panel-2"
          class="tab text-xl text-center bg-black text-white rounded-full px-2 py-1 ml-2 mr-2 mt-2 Tv-Shows"
        >
          <font-awesome-icon data-target="panel-2" :icon="['fas', 'video']" />
          Tv-Shows
        </button>
      </nav>
    </div>

    <div id="panels">
      <div class="panel-1 tab-content active py-5">
        <div class="flex flex-wrap mx-3 justify-center">
          <div class="sm:w-1/5 p-2 w-1100-30 width100Panel">
            <filter-all-case />
          </div>
          <div class="sm:w-4/5 w-1100-70">
            <per-movie />
            <load-more />
          </div>
        </div>
      </div>
      <div class="panel-2 tab-content py-5">
        <div class="flex flex-wrap mx-3 justify-center">
          <div class="md:w-1/5 p-2">
            <filter-all-case />
          </div>
          <div class="md:w-4/5">There will be Tv-show</div>
        </div>
      </div>
    </div>
  </div>
</template>	
<script>
import FilterAllCase from "@/components/searchfilter/FilterAll";
import TvShow from "@/components/searchfilter/movie/TvShow";
import PerMovie from "@/components/searchfilter/movie/per-movie";
import LoadMore from "@/components/buttons/loadmore";

export default {
  components: {
    FilterAllCase,
    TvShow,
    PerMovie,
    LoadMore,
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
/* @import "~/assets/css/styles.css"; */
.tab-content {
  display: none;
}

.tab-content.active {
  display: block;
}
.topNav {
  float: none;
  position: absolute;
  /* top: 4%;
  left: 50%;
  transform: translate(-50%, -50%); */
}

@media only screen and (max-width: 1100px) {
  .w-1100-30 {
    width: 30%;
  }
  .w-1100-70 {
    width: 70%;
  }
}
@media only screen and (max-width: 700px) {
  .width90 {
    width: 90%;
  }
  .width100Panel {
    width: 100%;
  }
}
</style>
