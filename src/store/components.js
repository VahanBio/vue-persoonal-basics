export default {
    state: {
        preloader: false,
        popups: {
            login: false
        },
        sidebar: false
    },
    mutations: {
        setPreloader(state, payload) {
            state.preloader = payload
        },
        setPopups(state, payload) {
            state.popups = payload
        },
        setSidebar(state, payload) {
            state.sidebar = payload
        }
    },
    getters: {
        getPreloader(state) {
            return state.preloader
        },
        getPopup(state) {
            return state.popups
        },
        getSidebar(state) {
            return state.sidebar
        }
    }
}