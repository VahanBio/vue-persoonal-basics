<template>
	<section class="reading-material-wrapper">
		<div class="parallax-wrapper">
			<div class="parallax-section" ref="materialWrapper">
				<div class="img-wrapper-1 parallax-section">
					<img src="../assets/images/img3.jpg" alt="" class="par-img-1">
				</div>
				<div class="img-wrapper-2 show-desk">
					<img src="../assets/images/img2.jpg" alt="" class="par-img-2 show-desk">
				</div>
				<div class="img-wrapper-3">
					<img src="../assets/images/img1.jpg" alt="" class="par-img-3">
				</div>
				<div class="img-wrapper-4">
					<img src="../assets/images/img4.jpg" alt="" class="par-img-4">
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import {gsap} from 'gsap/all'

export default {
	name: "Parallax",
	mounted() {
		if(window.innerWidth >= 992){
			this.parallaxGsap()
		}
	},
	methods: {
		parallaxGsap() {
			const container = this.$refs.materialWrapper
			if (container) {
				let rect = container.getBoundingClientRect()
				let mouse = {
					x: 0,
					y: 0,
					moved: false,
				};

				container.addEventListener('mousemove', function (e) {
					mouse.moved = true;
					mouse.x = e.clientX - rect.left;
					mouse.y = e.clientY - rect.top;
				});

				gsap.ticker.add(function () {
					if (mouse.moved) {
						parallaxIt('.img-wrapper-1', -100);
						parallaxIt('.img-wrapper-2', 50);
						parallaxIt('.img-wrapper-3', -70);
						parallaxIt('.img-wrapper-4', -30);
					}
					mouse.moved = false;
				});

				function parallaxIt(target, movement) {
					gsap.to(target, 0.5, {
						x: ((mouse.x - rect.width / 2) / rect.width) * movement,
						y: ((mouse.y - rect.height / 2) / rect.height) * movement,
					});
				}

				window.addEventListener('resize', () => {
					rect = container.getBoundingClientRect();
				});

				window.addEventListener('scroll', () => {
					rect = container.getBoundingClientRect();
				});
			}
		}
	}
}
</script>