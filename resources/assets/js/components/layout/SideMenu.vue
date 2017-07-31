<template>
    <el-col :span="2">
        <aside>
            <el-menu default-active="introduction" theme="dark" @select="sideMenuSelected">
                <el-menu-item index="introduction">Introduction</el-menu-item>
                <el-submenu index="setup">
                    <template slot="title">Setup</template>
                    <el-menu-item index="xdebug.so">xdebug.so</el-menu-item>
                    <el-menu-item index="xdebug.ini">xdebug.ini</el-menu-item>
                    <el-menu-item index="xdebug-clients">xdebug client</el-menu-item>
                </el-submenu>
                <el-menu-item index="advanced-options">Advanced Options</el-menu-item>
                <el-menu-item index="more">More</el-menu-item>
            </el-menu>
        </aside>
    </el-col>
</template>
<script>
    export default{
        methods:{
            sideMenuSelected(menuName,menuNames){
                this.$router.push({name:'Introduction'})
            }
        }
    }
</script>