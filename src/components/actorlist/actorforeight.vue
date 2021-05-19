<template>
	<div class="flex flex-wrap overflow-hidden">
		<div class="w-1/4">
			<per-actor />
		</div>
		<div class="w-1/4">
			<per-actor />
		</div>
		<div class="w-1/4">
			<per-actor />
		</div>
		<div class="w-1/4">
			<per-actor />
		</div>
	</div>
</template>
<script>
	import PerActor from '@/components/actorlist/actor';
	export default {
		components: {
			PerActor
		}
	}
</script>