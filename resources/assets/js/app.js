
require('./bootstrap');

// Register ElementUI
import Vue from 'vue';

// The App Component Will be Served as the top-level router-view container
import App from './App.vue';

// application routes
import router from './router';

// application store
import store from './store';

/**
 * Create a Vue Instance With VueRouter and App Component and
 * Mount the Vue Instance to the <div id="app"> element
 */
const app = new Vue({
    el:'#app',
    components:{App},
    router,
    store,
    render: h => h(App)
});
