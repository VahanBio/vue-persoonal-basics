<template>
    <div>
        <div v-swiper:mySwiper="swiperSlider2" ref="SwiperOne">
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

        <swiper
            :options="swiperOption"
            ref="SwiperTwo"
        >
            <div class="parallax-bg" slot="parallax-bg" data-swiper-parallax="-23%"></div>
            <swiper-slide :key="banner" v-for="banner in banners">
                <p>{{ banner }}</p>
                <img src="../assets/images/img1.jpg" alt="" class="swiper-lazy">
                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            </swiper-slide>
        </swiper>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-scrollbar"></div>
        <div class="swiper-custom-scrollbar"></div>
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
        swiper: directive,
        note: directive
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
                lazy: true,
                pagination: {
                    el: '.swiper-custom-scrollbar',
                    type: 'progressbar'
                },
                slideToClickedSlide: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    disabledClass: 'swiper-button-disabled'
                }
            },

            swiperSlider2: {
                grabCursor: true,
                slidesPerView: 2,
                slideToClickedSlide: true,
            },
        }
    },
}
</script>
