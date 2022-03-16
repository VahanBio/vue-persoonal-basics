<template>
	<div id="nav" :class="`${sidebar ? 'open' : ''}`">
		<router-link to="/">Components/Code Examples</router-link>
		<p @click="$TogglePopup('login')">Open Popup</p>
	</div>
</template>

<script>
import helper from "../mixins/helper";

export default {
	mixins: [helper],
	beforeMount() {
		this.$store.commit('setSidebar', this.sidebar)
	},
	methods: {
		toggleSidebar() {
			this.$store.commit('setSidebar', !this.sidebar)
		}
	},
	computed: {
		sidebar: function () {
			return this.$store.getters.getSidebar
		}
	}
}
</script>