/**
 * Created by Administrator on 2017/7/2 0002.
 */
import Example  from './components/Example.vue';
import Home     from './components/Home.vue';

export default [

    { path: '/example', component:  Example , name:'Example'},


    { path: '*', component:  Home , name:'Home'},
]
