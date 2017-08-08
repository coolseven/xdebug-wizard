<template>
        <aside class="side-menu">
            <el-menu mode="vertical" default-active="introduction" theme="dark" @select="sideMenuSelected" :collapse="isSideMenuCollapsed">
                <el-menu-item index="introduction">
                    <i class="fa fa-home"></i>
                    <span slot="title">Introduction</span>
                </el-menu-item>
                <el-submenu index="setup">
                    <template slot="title">
                        <i class="fa fa-gear"></i>
                        <span slot="title">Setup</span>
                    </template>
                    <el-menu-item index="xdebug.so">xdebug.so</el-menu-item>
                    <el-menu-item index="xdebug.ini">xdebug.ini</el-menu-item>
                    <el-menu-item index="xdebug-clients">xdebug client</el-menu-item>
                </el-submenu>
                <el-menu-item index="advanced">
                    <i class="fa fa-terminal fa-bold"></i>
                    <span slot="title">Advanced</span>
                </el-menu-item>
                <el-menu-item index="more">
                    <i class="fa fa-question"></i>
                    <span slot="title">More</span>
                </el-menu-item>
            </el-menu>
        </aside>
</template>
<script>
    export default{
        data(){
            return {
                isSideMenuCollapsed : false
            }
        },
        methods:{
            sideMenuSelected(menuName,menuNames){
                this.isSideMenuCollapsed = !this.isSideMenuCollapsed;
                this.$router.push({name:'Introduction'})
            }
        }
    }
</script>