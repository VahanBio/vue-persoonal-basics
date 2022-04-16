import Home from "../views/Home";
import Swiper from "../views/Swiper";
import SwiperVue from "../views/SwiperVue";
import Parallax from "../views/Parallax";
import Select from "../components/VueSelectDate";
import TabNavigation from "../components/UI/Tab";
import LazyLoad from "../views/LazyLoad";

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
        component: () => import('../views/MiniComponents'),
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