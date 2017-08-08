<template>
    <div class="app">
        <app-header :appName="appName"></app-header>
        <app-body></app-body>
    </div>
</template>

<script>

    import AppHeader from './layout/Header.vue';
    import AppBody   from './layout/Body.vue';

    export default {
        data(){
            return {
                appName: 'Xdebug-Wizard'
            }
        },
        components:{
            AppHeader,AppBody
        }
    }
</script>

<style>
    @import "../../css/app.css";
</style>