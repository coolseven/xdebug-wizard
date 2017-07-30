
/**
 * load all of this project's JavaScript dependencies which
 * includes Vue and other libraries.
 */

require('./bootstrap');

// Register VueRouter
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// Register ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
Vue.use(ElementUI);

// The App Component Will be Served as the top-level router-view container
// by now only the wizard module will fit into App component 
// in the future, we may have admin module or more.
import App from './App.vue';

// Setup application routes
import routes from './routes';
const router = new VueRouter({
    mode: 'history',
    routes
});


/**
 * Create a Vue Instance With VueRouter and an App Component
 * Mount the Vue Instance to the <div id="app"> element
 */
const app = new Vue({
    el:'#app',
    components:{App},
    router,
    render: h => h(App)
});
