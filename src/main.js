import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/index'
import VLazyImage from "v-lazy-image/v2/v-lazy-image.umd";
import VueLoadImage from 'vue-load-image';

Vue.component('v-lazy-image', VLazyImage)
Vue.component('vue-load-image', VueLoadImage);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
