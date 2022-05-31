<template>
	<div class="home">
		<div>
			<router-link to="/swiper">Swiper</router-link>
			<router-link :to="{name: 'Parallax'}">ParallaxJS</router-link>
			<router-link :to="{name: 'Select'}">Vue Select & Date</router-link>
			<router-link :to="{name: 'TabNavigation'}">Tab Navigation</router-link>
			<router-link :to="{name: 'Components'}">Mini Components</router-link>
			<router-link :to="{name: 'Lazy Load'}">Lazy Load</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Home'
}
</script>
