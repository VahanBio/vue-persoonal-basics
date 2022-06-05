//Routes
const
    Home = () => import("../pages/Home"),
    Swiper = () => import("../pages/Swiper"),
    Parallax = () => import("../pages/Parallax"),
    Select = () => import("../components/VueSelectDate"),
    TabNavigation = () => import("../components/Test"),
    LazyLoad = () => import("../pages/LazyLoad"),
    MiniComponents = () => import('../pages/MiniComponents'),
    Particles = () => import('../pages/ParticleJS')

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
    {
        path: '/particles',
        name: 'Particles',
        component: Particles,
        meta: {title: 'Particle JS'}
    },
]

export default routes