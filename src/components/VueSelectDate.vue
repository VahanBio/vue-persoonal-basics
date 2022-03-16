<template>
	<section class="vue-select">
		<div>
			<!--Stylized dropdwon-->
			<div>
				<v-select :options="iconOptions" label="title">
					<div slot="option" slot-scope="iconOptions">
						<span class="fa" :class="iconOptions.icon"></span>
						{{ iconOptions.title }}
					</div>
				</v-select>
			</div>

			<!--Single options with customized buttons-->
			<div>
				<v-select
						placeholder="choose country"
						:options="singleOptions"
						multiple
						:components="{Deselect, OpenIndicator}"></v-select>
			</div>

			<!--Smart Search Dropdown-->
			<div>
				<v-select>
					<template v-slot:no-options="{ search, searching }">
						<template v-if="searching">
							No results found for <em>{{ search }}</em
						>.
						</template>
						<em v-else style="opacity: 0.5">Start typing to search for a country.</em>
					</template>
				</v-select>
			</div>
		</div>
		<div class="datepicker">
			<date-picker v-model="time1" valueType="format"></date-picker>
			<date-picker v-model="time2" type="datetime"></date-picker>
			<date-picker v-model="time3" range></date-picker>
		</div>
	</section>
</template>

<script>
import vSelect from "vue-select";
import DatePicker from 'vue2-datepicker';

export default {
	components:{
		vSelect,
		DatePicker
	},
	data() {
		return {
			time1: null,
			time2: null,
			time3: null,
			iconOptions: [
				{
					title: 'Read the Docs',
					icon: 'fa-book',
					url: 'https://codeclimate.com/github/sagalbot/vue-select'
				},
				{
					title: 'View on GitHub',
					icon: 'fa-github',
					url: 'https://codeclimate.com/github/sagalbot/vue-select'
				},
				{
					title: 'View on NPM',
					icon: 'fa-database',
					url: 'https://codeclimate.com/github/sagalbot/vue-select'
				},
				{
					title: 'View Codepen Examples',
					icon: 'fa-pencil',
					url: 'https://codeclimate.com/github/sagalbot/vue-select'
				}
			],
			singleOptions: [
				'USA',
				'ARMENIA',
				'RUSSIA'
			],
			Deselect: {
				render: createElement => createElement('span', '❌'), //to disable certain button, just leave ''
			},
			OpenIndicator: {
				render: createElement => createElement('span', '🔽'),
			}
		}
	}
}
</script>