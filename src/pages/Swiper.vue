<template>
  <div>
    <div class="swiper" ref="slider">
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

</template>

<script>
// Import Swiper Vue.js components
import Swiper from '../plugins/swiper.bundle'

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
    const swiper = new Swiper(this.$refs.slider, {
      // Optional parameters
      slidePerView: 3,
      spaceBetween: 10,
      effect: 'slide',
      speed: 3000,
      loop: true,
      freeMode: true,
      observe: true,
      observeParents: true,
      autoplay: {
        delay: 0,
        disableOnInteraction: false
      },
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
        320: {
          slidesPerView: 1
        },
        640: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 3
        }
      }
    });
  },
  methods: {
    stopCar() {
      alert('works fine')
    }
  }
}
</script>