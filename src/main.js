window._ = require('lodash');
window.axios = require('axios');

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import './scss/index.scss'
import store from './store'
import VueMq from 'vue-mq'
import VueLoadImage from 'vue-load-image'
import VueProgressBar from 'vue-progressbar'
import moment from 'moment';
import ElementUI from 'element-ui';
import Particles from "particles.vue";

Vue.use(Particles);

Vue.use(ElementUI);
Vue.use(VueMq, {
    breakpoints: {
        xs: 0,
        sm: 576,
        md: 992,
        lg: Infinity,
    }
})

const options = {
    color: '#2980ff',
    failedColor: '#ce3c20'
}

Vue.component('vue-load-image', VueLoadImage);
Vue.use(VueProgressBar, options)

Vue.config.productionTip = false;
Vue.prototype.moment = moment
window.moment = moment

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')