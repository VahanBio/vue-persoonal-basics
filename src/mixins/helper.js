import $ from 'jquery';
import store from '../store'

export default {
    methods: {
        $TogglePopup(name) {
            let popups = store.getters.getPopup;
            for (let key in popups) {
                if (popups.hasOwnProperty(key)) {
                    popups[key] = key === name ? !popups[key] : false;
                }
            }
            store.commit('setPopups', popups)
        }
    }
}