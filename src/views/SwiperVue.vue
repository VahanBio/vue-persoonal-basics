<template>
	<div v-swiper:mySwiper="swiperOption">
		<div class="swiper-wrapper">
			<div class="swiper-slide" :key="banner" v-for="banner in banners">
				<p>{{ banner }}</p>
			</div>
		</div>
		<div class="swiper-scrollbar"></div>
		<div class="swiper-button-prev"></div>
		<div class="swiper-button-next"></div>
		<!--<div class="swiper-custom-scrollbar"></div>-->
	</div>
</template>

<script>
import {Swiper, SwiperSlide, directive} from 'vue-awesome-swiper'

export default {
	components: {
		Swiper,
		SwiperSlide
	},
	directives: {
		swiper: directive
	},
	data() {
		return {
			banners: ['/1.jpg', '/2.jpg', '/3.jpg'],
			swiperOption: {
				grabCursor: true,
				scrollbar: {
					el: '.swiper-scrollbar',
					hide: false,
					draggable: true,
				},
				pagination: {
					el: '.swiper-custom-scrollbar',
					type: 'progressbar'
				},
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
					disabledClass: 'swiper-button-disabled'
				}
			}
		}
	}
}
</script>
