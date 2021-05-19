<template>
	<div class="flex flex-wrap overflow-hidden" style="height: 421px; overflow: auto !important;">
			
			<div class="w-1/4 p-1 morecontent">
				<tv-show-movie />	
			</div>
			<div class="w-1/4 p-1 morecontent">
				<tv-show-movie />	
			</div>
			<div class="w-1/4 p-1 morecontent">
				<tv-show-movie />	
			</div>
			<div class="w-1/4 p-1 morecontent">
				<tv-show-movie />	
			</div>
			<div class="w-1/4 p-1 morecontent">
				<tv-show-movie />	
			</div>
			<div class="w-1/4 p-1 morecontent">
				<tv-show-movie />	
			</div>
			<div class="w-1/4 p-1 morecontent">
				<tv-show-movie />	
			</div>
			<div class="w-1/4 p-1 morecontent">
				<tv-show-movie />	
			</div>
			<div class="w-1/4 p-1 morecontent">
				<tv-show-movie />	
			</div>
			<div class="w-1/4 p-1 morecontent">
				<tv-show-movie />	
			</div>
			<div class="w-1/4 p-1 morecontent">
				<tv-show-movie />	
			</div>
			<div class="w-1/4 p-1 morecontent">
				<tv-show-movie />	
			</div>


			<a href="#" id="loadMore" style="
				font-size: 11px; 
				padding-top: 6px;
				margin: 10px auto;
			    width: 92px;
			    color: #fff;
			    display: block;
			    text-align: center;
			    border-radius: 100px;
			    border: 1px solid transparent;
			    background-color: #1a202c;
			    transition: .3s;
			    height: 29px;">...Load More</a>

	</div>
</template>
<script>
	import TvShowMovie from '@/components/user/tvshow/tvshow-movie';
	export default {
		components: {
			TvShowMovie
		},
		mounted(){
		}
	}
</script>
<style scoped>
    @import '~/assets/css/styles.css';
</style>