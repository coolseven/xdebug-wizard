/**
 * Created by Administrator on 2017/7/2 0002.
 */
import Home     from './components/Home.vue';
import Example  from './components/Example.vue';
import Introduction from './components/introduction/introduction.vue';

export default [

    { path: '/', name:'Home' , component:  Home , children:
        [
            { path: '/introduction', name:'Introduction', component:  Introduction  },
            { path: '/example', name:'Example', component:  Example  }
        ]
    }

]
