<template>
	<div :threshold="threshold" :class="`${intersected ? 'entered' : ''}`" ref="el">
		<slot/>
	</div>
</template>

<script>
export default {
	name: "Observe",
	props: ['threshold'],
	data() {
		return {
			intersected: false
		}
	},
	mounted() {
		const element = this.$refs.el
		const threshold = props.threshold || 0.01
		const observer = new IntersectionObserver(
				([entry]) => {
					if (entry.intersectionRatio > threshold) {
						this.intersected = true
					}
				}, {
					root: null,
					rootMargin: "0px",
					threshold,
				}
		)
		observer.observe(element)
	}
}
</script>