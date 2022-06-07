<template>
	<div class="form-wrapper">
		<marquee-text :repeat="500" :duration="3" :paused="stop" @mouseover="stopAnim" @mouseleave="stopAnim">
			asfj haoh asidfasid asogouig
		</marquee-text>
		<Input type="password" label="Password" id="pass" :in-viewport-once='true'/>
		<Button design="test" :click="working" :disabled="false">Hello</Button>
		<vue-load-image>
			<img slot="image"
				 src="https://github.com/gcw07.png">
			<img slot="preloader" src="../assets/images/preload.gif"/>
		</vue-load-image>
		<LazyImage
				class="loading-img"
				src="https://github.com/gcw07.png"
				mobile-src="github.io/gcw07.png"
		/>
	</div>
</template>

<script>
import Button from "../components/UI/Button";
import Input from "../components/UI/Input";
import MarqueeText from 'vue-marquee-text-component';
import LazyImage from "@/components/UI/LazyImage";

export default {
	data() {
		return {
			stop: false,
		}
	},
	components: {
		Button,
		Input,
		MarqueeText,
		LazyImage
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
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column-reverse;
	font-size: 1.2rem;
	background-color: #060b23;
	overflow: hidden;

	picture {
		width: 200px;
		height: 200px;
	}
}
</style>