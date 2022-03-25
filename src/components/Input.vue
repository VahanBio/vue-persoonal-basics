<template>
    <div class="inp-wrapper">
        <input :type="type" :id="id" autocomplete="off" placeholder=" " class="input">
        <label :for="id" class="label">{{ label }}</label>
    </div>
</template>

<script>
export default {
    name: "Input",
    props: ['label', 'id', 'type']
}
</script>
