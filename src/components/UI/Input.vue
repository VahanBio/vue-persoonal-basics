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
import inViewport from 'vue-in-viewport-mixin'

export default {
    data() {
        return {
            once: true
        }
    },
    mixins: [inViewport],
    watch: {
        'inViewport.now'(visible) {
            if (this.once && visible) {
                console.log('This component is ' + (visible ? 'in-viewport' : 'hidden'));
                this.once = false
            }
        }
    },
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
