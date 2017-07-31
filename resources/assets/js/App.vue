<template>
    <div>
        <app-header :appName="appName"></app-header>
        <app-main></app-main>
    </div>
</template>

<script>
    require('../css/app.css');

    import AppHeader from './components/Header.vue';
    import AppMain   from './components/Main.vue';

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

</style>