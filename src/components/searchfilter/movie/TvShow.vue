<template>
        <div class="flex flex-wrap overflow-hidden">
                <div class="md:w-1/2">
                        <div class="flex flex-wrap overflow-hidden">
                               
                                <div class="w-1/4 p-2">
                                         <each-tv />
                                </div>
                                <div class="w-1/4 p-2">
                                        <each-tv />
                                </div>
                                <div class="w-1/4 p-2">
                                        <each-tv />
                                </div>
                                <div class="w-1/4 p-2">
                                        <each-tv />
                                </div>
                        </div>
                </div>
                <div class="md:w-1/2">
                        <div class="flex flex-wrap overflow-hidden">
                               
                                <div class="w-1/4 p-2">
                                         <each-tv />
                                </div>
                                <div class="w-1/4 p-2">
                                        <each-tv />
                                </div>
                                <div class="w-1/4 p-2">
                                        <each-tv />
                                </div>
                                <div class="w-1/4 p-2">
                                        <each-tv />
                                </div>
                        </div>
                </div>
        </div>
</template>
<script>
   import EachTv from '@/components/searchfilter/movie/eachtv';
   export default {
        components: {
                EachTv,
        }
   }
</script>