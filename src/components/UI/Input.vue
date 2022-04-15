<template>
	<div class="inp-wrapper">
		<input :type="type"
			   :id="id"
			   :autocomplete="autocomplete"
			   :value="value"
			   :required="required"
			   :disabled="disabled"
			   :placeholder="`${placeholder ? placeholder : ' '}`"
			   :class="`input ${inputClass ? inputClass : ''}`">
		<label :for="id" :class="`label ${labelClass ? labelClass : ''}`">{{ placeholder ? '' : label }}</label>
	</div>
</template>

<script>
export default {
	props: [
		'id',
		'type',
		'placeholder',
		'value',
		'autocomplete',
		'required',
		'disabled',
		'label',
		'inputClass',
		'labelClass'
	]
}
</script>
