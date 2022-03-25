import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/index'
import VueLoadImage from 'vue-load-image';

Vue.component('vue-load-image', VueLoadImage);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
