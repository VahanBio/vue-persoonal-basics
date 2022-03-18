<template>
	<button :class="`btn-${design}`">
		<slot/>
	</button>
</template>

<script>
export default {
	name: "CustomBtn",
	props: ['design']
}
</script>