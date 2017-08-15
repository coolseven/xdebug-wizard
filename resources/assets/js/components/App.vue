<template>
    <div class="app">
        <app-header></app-header>
        <app-body></app-body>
    </div>
</template>

<script>

    import AppHeader from './layout/Header.vue';
    import AppBody   from './layout/Body.vue';

    export default {
        data(){
            return {

            }
        },
        components:{
            AppHeader,AppBody
        }
    }
</script>