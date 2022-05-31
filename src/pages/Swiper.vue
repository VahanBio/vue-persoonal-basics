<template>
	<section>
		<div class="swiper-slider-1">
			<div class="swiper" ref="slider1">
				<!-- Additional required wrapper -->
				<div class="swiper-wrapper">
					<!-- Slides -->
					<div class="swiper-slide d-flex flex-column align-items-center justify-content-center"
						 v-for="(slide, index) in carouselItems" :key="index">
						<img alt="Vue logo" :src="require(`../assets/images/${slide.imgSrc}`)">
						<p>{{ slide.text }}</p>
					</div>
				</div>
				<!-- If we need navigation buttons -->
				<div class="swiper-button-prev"></div>
				<div class="swiper-button-next"></div>
			</div>
			<div class="swiper-scrollbar" ref="sliderScrollbar"></div>
			<div class="swiper-custom-scrollbar" ref="sliderPagination"></div>
		</div>
		<div class="swiper-slider-2">
			<div class="swiper" ref="slider2">
				<div class="swiper-wrapper">
					<div class="swiper-slide d-flex flex-column align-items-center justify-content-center"
						 v-for="(slide, index) in carouselItems" :key="index">
						<img alt="Vue logo" :src="require(`../assets/images/${slide.imgSrc}`)">
						<p>{{ slide.text }}</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>

import Swiper, {Controller, Navigation, Pagination, Scrollbar} from 'swiper'

export default {
	data() {
		return {
			carouselItems: [
				{
					text: 'Slide 1',
					imgSrc: 'img1.jpg'
				},
				{
					text: 'Slide 2',
					imgSrc: 'logo.png'
				},
				{
					text: 'Slide 3',
					imgSrc: 'img3.jpg'
				}
			]
		}
	},
	mounted() {
		this.testSlide()
	},
	methods: {
		testSlide() {
			const slider1 = new Swiper(this.$refs.slider1, {
				modules: [Controller, Navigation, Pagination, Scrollbar],
				slidePerView: 1,
				spaceBetween: 10,
				loop: true,
				observe: true,
				observeParents: true,
				scrollbar: {
					el: this.$refs.sliderScrollbar,
					hide: false,
					draggable: true,
				},
				pagination: {
					el: this.$refs.sliderPagination,
					type: 'progressbar'
				},
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
					disabledClass: 'swiper-button-disabled'
				},
				breakpoints: {
					992: {
						slidesPerView: 2
					}
				}
			})
			const slider2 = new Swiper(this.$refs.slider2, {
				slidesPerView: 3,
				loop: true,
				spaceBetween: 15,
				allowSlideNext: false,
				allowSlidePrev: false
			})
			slider1.controller.control = slider2
		}
	}
}
</script>