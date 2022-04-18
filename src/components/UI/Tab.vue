<template>
    <section>
        <div class="tab--buttons">
            <a href="#"
               v-for="(tab, key) in tabHead"
               :key="'tab-' + key"
               @click.prevent="setActive(tab.type)"
               :class="`tab--title ${active.type === tab.type ? 'active' : ''}`"
            >
                {{ tab.name }}
            </a>
        </div>
        <div
            v-for="(tab, key) in tabBody"
            :key="'tab--content-' + key"
            class="tab--content"
            v-if="active.type === tab.type && $mq === 'lg'"
        >
            <slot/>
        </div>
    </section>
</template>

<script>
export default {
    props: [
        'tabHead',
        'tabBody',
        'tabType'
    ],
    data() {
        return {
            active: {
                type: this.tabType,
                opened: false
            }
        }
    },
    methods: {
        setActive(type) {
            this.active = {
                type: type,
                opened: false
            };
            window.history.pushState(null, null, `#${type}`)
        }
    }
}
</script>