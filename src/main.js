import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLoadImage from 'vue-load-image';
import VueMq from 'vue-mq';
import 'bootstrap';
import './scss/index.scss';

Vue.use(VueMq, {
    breakpoints:{
        xs: 0,
        sm: 576,
        md: 992,
        lg: Infinity,
    }
})

Vue.component('vue-load-image', VueLoadImage);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
