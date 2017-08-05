<template>
    <div>
        <app-header :appName="appName"></app-header>
        <app-main></app-main>
    </div>
</template>

<script>

    import AppHeader from './layout/Header.vue';
    import AppMain   from './layout/Main.vue';

    export default {
        data(){
            return {
                appName: 'Xdebug-Wizard'
            }
        },
        components:{
            AppHeader,AppMain
        }
    }
</script>

<style>
    @import "../../css/app.css";
</style>