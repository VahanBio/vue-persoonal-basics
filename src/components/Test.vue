<template>
    <tab-component :tab-head="tabs" tab-type="features" :tab-body="tabs" />
</template>

<script>
import TabComponent from "@/components/UI/Tab";

export default {
    components: {
        TabComponent,
    },
    data() {
        return {
            tabs: [
                {
                    type: 'features',
                    name: 'Features',
                    questions: [
                        {
                            question: 'How is SmartWords able to paraphrase and summarise text documents?',
                            answer: 'Top of time-tested and deeply trained machine learning models. These are able to process large amounts of text at once and come-up with clever text modifications.'
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
    }
}
</script>