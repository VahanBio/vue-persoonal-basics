<template>
	<picture>
		<source media="(min-width: 992px)" :data-srcset="src">
		<source media="(min-width: 320px)" :data-srcset="mobileSrc ? mobileSrc : src">
		<img :class="`lazy ${imgClass ? imgClass : ''}`" :data-src="src" :width="width" :height="height"
			 :alt="alt">
	</picture>
</template>

<script>
import LazyLoad from "vanilla-lazyload";

export default {
	name: "LazyImage",
	props: [
		'src',
		'mobileSrc',
		'alt',
		'imgClass',
		'width',
		'height'
	],
	mounted() {
		new LazyLoad()
	},
	data() {
		return {}
	}
}
</script>