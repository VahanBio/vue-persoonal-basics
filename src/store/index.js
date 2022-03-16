import Vue from 'vue'
import Vuex from 'vuex'

//Modules
import components from "./components";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        components
    }
})
