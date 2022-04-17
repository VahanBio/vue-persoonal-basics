<template>
	<section>
		<div class="tab--buttons">
			<a  href="#"
					v-for="(tab, key) in tabs"
					:key="'tab-' + key"
					@click.prevent="setActive(tab.type)"
					:class="`tab--title ${active.type === tab.type ? 'active' : ''}`"
			>{{ tab.name }}
			</a>
		</div>
		<div
			v-for="(tab, key) in tabs"
			:key="'tab--content-' + key"
			class="tab--content"
			v-if="active.type === tab.type"
		>
			<Accordion v-for="(item, index) in tab.questions" :key="'faq-' + tab.type + '-question-' + index"
					   :title="item.question">
				{{ item.answer }}
			</Accordion>
<!--			<Accordion v-for="(item, index) in tab.questions" :key="'faq-' + tab.type + '-question-' + index"-->
<!--					   :body-class="`works`"-->
<!--					   :img-icon="true">-->
<!--				<template v-slot:accordion-title>-->
<!--					{{item.question}}-->
<!--				</template>-->
<!--				<template v-slot:accordion&#45;&#45;body>-->
<!--					{{ item.answer }}-->
<!--				</template>-->
<!--			</Accordion>-->
		</div>
	</section>
</template>

<script>
import Accordion from "@/components/UI/Accordion";

export default {
	components: {
		Accordion
	},
	data() {
		return {
			active: {
				type: 'features',
				opened: false
			},
			tabs: [
				{
					type: 'features',
					name: 'Features',
					questions: [
						{
							question: 'How is SmartWords able to paraphrase and summarise text documents?',
							answer: 'SmartWords is built on top of time-tested and deeply trained machine learning models. These are able to process large amounts of text at once and come-up with clever text modifications.'
						},
					]
				},
				{
					type: 'account',
					name: 'Account',
					questions: [
						{
							question: 'Do you offer discounts for students, researchers and non-profits and NGOs?',
							answer: 'Yes! If you are a student or researcher, you are entitled to a 25% discount on any plan. Sign up with your .edu mail address and you’ll be all set. If you are a non-profit or a NGO, please contact us.'
						}
					]
				},
				{
					type: 'billing',
					name: 'Billing',
					questions: [
						{
							question: 'Is there a free trial?',
							answer: 'Yes, users can try SmartWords for one month before the first charge occurs.'
						}
					]
				},
			]
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