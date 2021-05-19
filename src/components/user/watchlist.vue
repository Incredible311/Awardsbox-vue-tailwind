<template>
	<div class="flex flex-wrap overflow-hidden">
        <div class="w-1/2 zhuan">
      		<per-watchlist />  
        </div>
        <div class="w-1/2 zhuan">
      		<per-watchlist />  
        </div>
    </div>
</template>
<script>
	import PerWatchlist from '@/components/user/perwatchlist';
	export default {
		components: {
			PerWatchlist,
		}
	}
</script>