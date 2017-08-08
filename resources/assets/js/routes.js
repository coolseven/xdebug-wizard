/**
 * Created by Administrator on 2017/7/2 0002.
 */

// App component and 404 component are page-level components
import App     from './components/App.vue';
import NotFound from './components/404.vue';

// segment components inside App Component's workspace section
import Example  from './components/example/Example.vue';
import Introduction from './components/introduction/Introduction.vue';

export default [

    {
        path: '/',  component: App, children: [
            {
                path: '', component: Introduction
            },
            {
                path: 'introduction', name: 'Introduction', component: Introduction
            },
            {
                path: 'example', name: 'Example', component: Example
            }
        ]
    },


    {
        path: '/404', name: '404', component: NotFound
    },
    {
        path: '*', redirect: '404'
    }

]
