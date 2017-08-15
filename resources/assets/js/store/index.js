import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        app:{
            name:'Xdebug-Wizard',
            title:'Xdebug Configuration Made Easy'
        },
        isSideMenuCollapsed: false,
    },
    actions: {
    },
    mutations: {
        toggleSideMenu(state){
            state.isSideMenuCollapsed = !state.isSideMenuCollapsed;
        }
    },
    getters: {
    },
    modules: {

    }
});
export default store
