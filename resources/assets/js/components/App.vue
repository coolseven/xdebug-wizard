<template>
    <div class="app">
        <app-header></app-header>
        <app-body></app-body>
    </div>
</template>

<script>

    import AppHeader from './layout/Header.vue';
    import AppBody   from './layout/Body.vue';
    import {mapState} from "vuex"

    export default {
        data(){
            return {

            }
        },
        computed:{
            ...mapState({'title' : state => state.app.title})
        },
        components:{
            AppHeader,AppBody
        },
        mounted(){
            document.title = this.title;
        }
    }
</script>