<template>
	<div v-if="display">
		<p>Loading</p>
	</div>
</template>

<script>
export default {
	computed: {
		display: function () {
			return this.$store.getters.getPreloader;
		}
	}
}
</script>
