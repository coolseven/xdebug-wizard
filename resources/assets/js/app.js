
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// Register VueRouter
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// Register ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
Vue.use(ElementUI);

// App Component Served as a top level router-view container
import App from './App.vue';

// Setup application routes
import routes from './routes';
const router = new VueRouter({
    mode: 'history',
    routes
});


/**
 * Create a Vue Instance With VueRouter and an App Component(container for the matched route)
 * Mount the Vue Instance to the <div id="app"> element
 */
const app = new Vue({
    el:'#app',
    components:{App},
    router,
    render: h => h(App)
});
