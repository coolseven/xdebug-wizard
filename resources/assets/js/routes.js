/**
 * Created by Administrator on 2017/7/2 0002.
 */

// Home component and 404 component are on the top-level of routing
// which means that they represent the whole page ,not segments
import Home     from './components/Home.vue';
import NotFound from './components/404.vue';

// page-segments inside Home Component
import Example  from './components/example/Example.vue';
import Introduction from './components/introduction/Introduction.vue';

export default [

    {
        path: '/', name: 'Home', component: Home, children: [
            {
                path: '/introduction', name: 'Introduction', component: Introduction
            },
            {
                path: '/example', name: 'Example', component: Example
            },
        ]
    },


    {
        path: '/404', name: '404', component: NotFound
    },
    {
        path: '*', redirect: '404'
    },

]
