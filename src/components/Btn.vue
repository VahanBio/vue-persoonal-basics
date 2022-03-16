<template>
	<button :class="`btn-${design}`">{{name}}</button>
</template>

<script>
export default {
	name: "CustomBtn",
	props: ['name', 'design']
}
</script>