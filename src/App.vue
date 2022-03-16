<template>
	<div id="app">
		<header2/>
		<router-view/>
		<PreLoader/>
		<popups/>
	</div>
</template>
<script>
import Header2 from "./layouts/Header";
import PreLoader from "./components/PreLoader";
import Popups from "./components/Popups";

export default {
	components: {
		Header2,
		PreLoader,
		Popups
	},
	watch: {
		'$route': {
			handler: (to, from) => {
				document.title = to.meta.title || 'Test'
				this.$store.commit('setPopups', false)
			},
			immediate: true,
		}
	}
}
</script>

