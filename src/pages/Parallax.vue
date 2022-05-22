<template>
	<section class="reading-material-wrapper">
		<div class="parallax-wrapper">
			<div class="parallax-section" data-pointer-events="true">
				<div data-depth-x="0.15" data-depth-y="0.35" class="img-wrapper-1 parallax-section">
					<img src="../assets/images/img3.jpg" alt="" class="par-img-1">
				</div>
				<div data-depth-x="-0.15" data-depth-y="-0.30" class="img-wrapper-2 show-desk">
					<img src="../assets/images/img2.jpg" alt="" class="par-img-2 show-desk">
				</div>
				<div data-depth-x="0.30" data-depth-y="0.30" class="img-wrapper-3">
					<img src="../assets/images/img1.jpg" alt="" class="par-img-3">
				</div>
				<div data-depth-x="0.10" data-depth-y="0.15" class="img-wrapper-4">
					<img src="../assets/images/img4.jpg" alt="" class="par-img-4">
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import Parallax from '../plugins/parallax.min'

export default {
	name: "Parallax",
	mounted(){
		let scene = document.querySelector('.parallax-section')
		let parallaxInstance = new Parallax (scene, {
			relativeInput: true,
			hoverOnly: true
		});
	}
}
</script>