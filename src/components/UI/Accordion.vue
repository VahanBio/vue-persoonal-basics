<template>
	<div :class="`accordion ${active ? 'accordion--open' : ''}`">
		<div class="accordion--head" @click="toggleAccordions">
			<h5 class="accordion--title">{{ title }}</h5>
			<button class="accordion--trigger">
				<img :src='icon' class="accordion--icon" alt="accordion-icon">
			</button>
		</div>
		<transition name="accordion">
			<div :class="`accordion--body ${bodyClass ? bodyClass : ''}`" v-if="active">
				<slot/>
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	props: ['title', 'icon', 'bodyClass'],
	data() {
		return {
			active: false,
		}
	},
	methods: {
		toggleAccordions() {
			this.active = !this.active
		}
	}
}
</script>