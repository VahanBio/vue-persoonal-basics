import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes';
import NProgress from 'nprogress';
import store from '../store/index';

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    store.commit('setPreloader', true)
    store.commit('setPopups', false)
    NProgress.start()

    // Simulate request
    setTimeout(() => {
        next();
    }, 1000)
});

router.afterEach(() => {
    store.commit('setPreloader', false)
    NProgress.done()
});
// router.beforeEach((to, from, next) => {
//     NProgress.start()
//     next()
// });
//
// router.afterEach(() => {
//     NProgress.done()
// });

NProgress.configure({
    easing: 'ease',
    speed: 900,
    // showSpinner: false
});

export default router
