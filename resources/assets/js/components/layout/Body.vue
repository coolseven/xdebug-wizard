<template>
    <div class="body">

        <app-side-menu></app-side-menu>

        <section class="workspace">
            <router-view></router-view>
        </section>

    </div>
</template>
<script>
    import AppSideMenu from './body/SideMenu.vue';
    export default {
        components:{
            AppSideMenu
        }
    }
</script>