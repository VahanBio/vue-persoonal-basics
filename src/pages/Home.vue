<template>
	<section>
		<div class="home">
			<div class="rotate-wrapper">
				<router-link to="/swiper">Swiper</router-link>
				<router-link :to="{name: 'Parallax'}">ParallaxJS</router-link>
				<router-link :to="{name: 'Select'}">Vue Select & Date</router-link>
				<router-link :to="{name: 'Particles'}">ParticleJS</router-link>
				<router-link :to="{name: 'TabNavigation'}">Tab Navigation</router-link>
				<router-link :to="{name: 'Components'}">Mini Components</router-link>
				<router-link :to="{name: 'Lazy Load'}">Lazy Load</router-link>
			</div>
		</div>
	</section>
</template>

<script>
import $ from 'jquery'

export default {
	name: 'Home',
	mounted() {
		this.imageRotation()
	},
	methods: {
		imageRotation() {
			let container = $(".home");
			let XAngle = 0;
			let YAngle = 0;
			let Z = 15;

			container
					.on("mousemove", function (e) {
						let
								_this = $(this),
								XRel = e.pageX - _this.offset().left,
								YRel = e.pageY - _this.offset().top,
								width = _this.width()

						YAngle = -(0.5 - (XRel / width)) * 40;
						XAngle = (0.5 - (YRel / width)) * 40;
						updateView(_this.children(".rotate-wrapper"));
					})
					.on("mouseleave", function () {
						let oLayer = $(this).children(".rotate-wrapper");
						oLayer.css({
							"transform": "perspective(1000px) translateZ(0) rotateX(0deg) rotateY(0deg)",
							"transition": "all .5s linear 0s",
							"-webkit-transition": "all .5s linear 0s"
						});
					});

			function updateView(oLayer) {
				oLayer.css({
					"transform": "perspective(1000px) translateZ(" + Z + "px) rotateX(" + XAngle + "deg) rotateY(" + YAngle + "deg)",
					"transition": "all .5s linear 0s",
					"-webkit-transition": "all .5s linear 0s"
				});
			}
		},
	}
}
</script>
