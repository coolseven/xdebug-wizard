<template>
    <el-row class="main">

        <el-col :span="2">
            <app-side-menu></app-side-menu>
        </el-col>

        <el-col :span="22" class="workspace">
            <section>
                <router-view></router-view>
            </section>
        </el-col>

    </el-row>
</template>
<script>
    import AppSideMenu from './SideMenu.vue';
    export default {
        components:{
            AppSideMenu
        }
    }
</script>