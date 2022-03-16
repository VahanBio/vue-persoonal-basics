<template>
	<div @click="close($event)">
		<p v-if="popups.login">Popup</p>
	</div>
</template>

<script>
import helper from "../mixins/helper";
import $ from 'jquery'

export default {
	mixins: [helper],
	methods: {
		close(event) {
			if ($(event.target).parents('.selector').length === 0) {
				this.$TogglePopup(undefined)
			}
		}
	},
	computed: {
		popups: function () {
			return this.$store.getters.getPopup
		}
	}
}
</script>