<template>
	<section>
		<div class="tab-links">
			<button
				v-for="(tab, key) in tabs"
				:key="'tab-' + key"
				@click="setActive(tab.type)"
				:class="`tab-title ${active.type === tab.type ? 'active' : ''}`"
			>{{ tab.name }}
			</button>
		</div>
		<div
			v-for="(tab, key) in tabs"
			:key="'tab-content-' + key"
			class="tab-content"
			v-if="active.type === tab.type"
		>
			<div v-for="(item, index) in tab.questions" :key="'faq-' + tab.type + '-question-' + index">
				<button class="button" @click="open(index)">
					{{ item.question }}
					<i :class="`fas fa-chevron-down ${active.opened === index ? 'active' : ''}`"></i>
				</button>
				<div :class="`collapsed ${active.opened === index ? 'open' : ''}`">
					<p class="faq-answer">{{ item.answer }}</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
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
						}
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
				{
					type: 'privacy',
					name: 'Terms & Privacy',
					questions: [
						{
							question: 'Does SmartWords collect the text I submit?',
							answer: 'SmartWords is built on top of powerful models. We seek to improve these by feeding them with fresh data from time to time. However, you can be assured that no human directly interacts with your input text. If this does happen, you can be re-assured that the data has been anonymzed beforehand. You can find supplementary information on our privacy policy page.'
						}
					]
				}
			]
		}
	},
	methods: {
		setActive(type) {
			this.active = {
				type: type,
				opened: false
			};
		},
		open(value) {
			this.active.opened = this.active.opened === value ? false : value;
		}
	}
}
</script>