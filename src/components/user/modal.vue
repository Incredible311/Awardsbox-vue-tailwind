<template>
  <div v-if="showModal" class="" style="">
    <div id="modal">
      <div class="modal-wrapper">
        <div class="modal-container">
          <img src="~/assets/images/pig.png" class="px-20">
          <label for="fname" class="font-bold">Name of list</label><br>
          <input type="text" id="fname" name="fname">
          <label for="fname" class="font-bold mt-3">Name of list</label><br>
          <textarea rows="3" cols="40" name="comment" form="usrform"></textarea>
          <label for="fname" class="font-bold">Tags(optional)</label><br>
          <input type="text" id="fname" name="fname">
          <button @click="hide"  type="submit" value="Submit" class="create-btn" style="">Create</button>
              <!-- <input type="submit" value="Submit"> -->
        </div>
      </div>
    </div> 
  </div>
</template>

<script>
 export default {   
   data() {
     return {
      showModal: false
     }
   },
   methods: {
     show() {
      this.showModal = true
     },
     hide(){
      this.showModal = false
     }
   }
 }
</script>
<style scoped>
    @import '~/assets/css/styles.css';
</style>