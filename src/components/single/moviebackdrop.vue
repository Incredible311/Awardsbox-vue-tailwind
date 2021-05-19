<template>
  <div class="flex flex-wrap overflow-hidden content-center mx-3">
    <div class="overflow-hidden pr-1 width100_paddingNone" style="width: 27.3%">
      <div class="py-3">
        <img
          class="object-contain w-full rounded-3xl"
          src="~/assets/image/jlJ8nDhMhCYJuzOw3f52CP1W8MW 1.png"
        />
      </div>
    </div>
    <div class="overflow-hidden relative pl-1 width100_paddingNone" style="width: 72.7%">
      <div class="py-3 flex justify-center paddingTopNone">
        <img v-if="imgView"
          class="object-contain w-full rounded-3xl"
          src="~/assets/images/Homepage/bt4xA9WZE9P1wiRILRFt0Zh2wmV.jpg"
        />
        <video v-else muted autoplay @ended = "videoEnd" class="videoTag">
          <source src="@/assets/image/4k.mp4" type="video/mp4" />
        </video>
        <button v-if="trailerView" @click="trailerPlay" class="trailerBtn">
          <font-awesome-icon
            :icon="['fas', 'play-circle']"
            class="text-White dark:text-white"
            />
            Play Trailer</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgView : true,
      trailerView: false
    }
  },
  mounted(){
    this.timer()
 },
 methods: {
   timer: function() {
      console.log("timer:::");
       setTimeout(() => { this.imgView = false; this.trailerView = false; }, 10000);
       console.log("imgView: ", this.imgView)
   },

    videoEnd: function() {
      this.imgView = true;
      this.trailerView = true;
    },

    trailerPlay: function() {
      this.imgView = false;
      this.trailerView = false;
    }
  }
}

</script>


<style scoped>
*:focus{
  border: none;
  outline: none;
}

.trailerBtn{
    position: absolute;
    right: 50px;
    bottom: 30px;
    color: white;
    background-color: #000;
    width: 150px;
    padding: 10px;
    border-radius: 50px;
}
.trailerBtn:hover{
  background-color: #111
}

.videoTag{
  border-radius: 30px 25px 25px 30px;
  }

@media only screen and (max-width: 560px) {
  .width100_paddingNone {
    width: 100%!important;
    padding-right: 0!important;
    padding-left: 0!important;
  }

  .paddingTopNone{
    padding-top: 0!important;
  }

}
</style>