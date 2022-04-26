//Routes
const
    Home = () => import("../views/Home"),
    Swiper = () => import("../views/Swiper"),
    SwiperVue = () => import("../views/SwiperVue"),
    Parallax = () => import("../views/Parallax"),
    Select = () => import("../components/VueSelectDate"),
    TabNavigation = () => import("../components/Test"),
    LazyLoad = () => import("../views/LazyLoad"),
    MiniComponents = () => import('../views/MiniComponents')

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {title: 'Home'}
    },
    {
        path: '/swiper',
        name: 'Swiper',
        component: Swiper,
        meta: {title: 'Swiper'}
    },
    {
        path: '/swiper-vue',
        name: 'SwiperVue',
        component: SwiperVue,
        meta: {title: 'Swiper Vue'}
    },
    {
        path: '/parallax',
        name: 'Parallax',
        component: Parallax,
        meta: {title: 'Parallax JS'}
    },
    {
        path: '/select',
        name: 'Select',
        component: Select,
        meta: {title: 'Vue Select'}
    },
    {
        path: '/tab-navigation',
        name: 'TabNavigation',
        component: TabNavigation,
        meta: {title: 'Tab Navigation'}
    },
    {
        path: '/mini-components',
        name: 'Components',
        component: MiniComponents,
        meta: {title: 'Mini Components'}
    },
    {
        path: '/lazy-load',
        name: 'Lazy Load',
        component: LazyLoad,
        meta: {title: 'Lazy Load'}
    },
]

export default routes