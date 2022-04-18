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
        <div class="tab--content">
            <Accordion v-for="(item, index) in questions" :key="index"
                       :title="item.question">
                {{ item.answer }}
            </Accordion>
        </div>
<!--        <div-->
<!--            v-for="(tab, key) in tabHead"-->
<!--            :key="'tab&#45;&#45;content-' + key"-->
<!--            class="tab&#45;&#45;content"-->
<!--            v-if="active.type === tab.type && $mq === 'lg'"-->
<!--        >-->
<!--            <Accordion v-for="(item, index) in tab.questions" :key="'faq-' + item.type + '-question-' + index"-->
<!--                       :title="item.question">-->
<!--                {{ item.answer }}-->
<!--            </Accordion>-->
<!--        </div>-->
    </section>
</template>

<script>
import Accordion from "@/components/UI/Accordion";

export default {
    components: {
        Accordion,
    },
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
    computed: {
        questions () {
            let questions = []
            if (this.active.type) {
                questions = this.tabHead.find(({type}) => type === this.active.type).questions
            }
            return questions
        },
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