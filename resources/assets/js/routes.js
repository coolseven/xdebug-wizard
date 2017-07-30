/**
 * Created by Administrator on 2017/7/2 0002.
 */

import App     from './App.vue';
import NotFound from './404.vue';

import Example  from './components/Example.vue';
import Introduction from './components/introduction/introduction.vue';



export default [

    { path: '/', name:'Home', component:  Introduction  },
    { path: '/introduction', name:'Introduction', component:  Introduction  },
    { path: '/example', name:'Example', component:  Example  },
    { path:'*' ,name:'404' ,component: NotFound }

]
