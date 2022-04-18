<template>
	<div :class="`accordion ${active ? 'accordion--open' : ''}`">
		<div class="accordion--head" @click="toggleAccordions">
			<h5 class="accordion--title">{{ title }}</h5>
			<i class="fas fa-chevron-down"></i>
		</div>
		<transition name="accordion">
			<div :class="`accordion--body ${bodyClass ? bodyClass : ''}`" v-if="active">
				<slot/>
			</div>
		</transition>
<!--		<div class="accordion&#45;&#45;head" @click="toggleAccordions">-->
<!--			<h5 class="accordion&#45;&#45;title">-->
<!--				<slot name="accordion-title"></slot>-->
<!--			</h5>-->
<!--			<i class="fas fa-chevron-down"></i>-->
<!--		</div>-->
<!--		<transition name="accordion">-->
<!--			<div-->
<!--					:class="`accordion&#45;&#45;body ${bodyClass ? bodyClass : ''}`"-->
<!--					v-if="active"-->
<!--			>-->
<!--				<slot name="accordion-body"></slot>-->
<!--			</div>-->
<!--		</transition>-->
	</div>
</template>

<script>
export default {
	name: "Accordion",
	props: ["title", "icon", "bodyClass"],
	data() {
		return {
			active: false,
		};
	},
	methods: {
		toggleAccordions() {
			this.active = !this.active;
		},
	},
};
</script>