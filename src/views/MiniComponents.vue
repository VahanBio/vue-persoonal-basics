<template>
	<div class="form-wrapper">
		<marquee-text :repeat="500" :duration="3" :paused="stop" @mouseover="stopAnim" @mouseleave="stopAnim">
			asfj haoh asidfasid asogouig
		</marquee-text>
		<Input type="password" label="Password" id="pass"/>
		<btn name="This" design="test" @click.native="working"/>
		<v-lazy-image
				srcset="../assets/images/logo.png"
				alt="Fallback"
				use-picture
		>
			<source srcset="../assets/images/logo.png"/>
		</v-lazy-image>
		<vue-load-image>
			<img slot="image"
				 src="https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg">
			<img slot="preloader" src="../assets/images/preload.gif"/>
		</vue-load-image>
	</div>
</template>

<script>
import Btn from "../components/Btn";
import Input from "../components/Input";
import MarqueeText from 'vue-marquee-text-component';

export default {
	data() {
		return {
			stop: false
		}
	},
	components: {
		Btn,
		Input,
		MarqueeText
	},
	methods: {
		stopAnim() {
			this.stop = !this.stop
		},
		working() {
			alert('try to work')
		}
	}
}
</script>

<style lang="scss">
.form-wrapper {
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column-reverse;
	font-size: 1.2rem;
	background-color: #060b23;

	picture {
		width: 200px;
		height: 200px;
	}
}
</style>