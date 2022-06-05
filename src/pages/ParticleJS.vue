<template>
	<div class="particle-container">
		<Particles
				id="tsparticles"
				:particlesInit="particlesInit"
				:particlesLoaded="particlesLoaded"
				:options="testConfig"
		/>
	</div>
</template>

<script>
import {loadFull} from "tsparticles";
import {testConfig} from '@/components/particles-config'

export default {
	name: "ParticleJS",
	data(){
		return{
			testConfig
		}
	},
	methods: {
		async particlesInit(engine) {
			await loadFull(engine);
		},
		async particlesLoaded(container) {
			console.log("Particles container loaded", container);
		}
	}
}
</script>