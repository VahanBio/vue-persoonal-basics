<template>
	<button
			:class="`btn btn-${design}`"
			:disabled="disabled"
			@click="click"
			:type="type">
		<slot/>
	</button>
</template>

<script>
export default {
	name: "Button",
	props: ['design', 'disabled', 'type', 'click']
}
</script>