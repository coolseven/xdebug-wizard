<template>
    <div class="app">
        <app-header :logoText="appName"></app-header>
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
        computed:{
            appName(){
                return this.$store.state.app.name;
            },
            title(){
                return this.$store.state.app.title;
            }
        },
        components:{
            AppHeader,AppBody
        },
        mounted(){
            document.title = this.title;
        }
    }
</script>