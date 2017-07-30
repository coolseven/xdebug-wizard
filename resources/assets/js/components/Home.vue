<template>
    <div>
        <el-row class="header">
            <el-col :span="2" class="logo">
                <span class="logo-text">Xdebug-Wizard</span>
            </el-col>
            <el-col :span="22">
                <el-menu theme="dark" mode="horizontal">
                    <el-menu-item index="about"  class="header-nav-menu-item"><i class="el-icon-setting"></i>About</el-menu-item>
                    <el-menu-item index="github" class="header-nav-menu-item"><i class="el-icon-menu"></i>Github</el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
        <el-row class="main">
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
            <el-col :span="22" class="workspace">
                <section>
                    <router-view></router-view>
                </section>
            </el-col>

        </el-row>
    </div>
</template>

<script>

    export default {
        data(){
            return {
                activeIndex : '1',
                defaultRoutePath : '/example'
            }
        },
        methods:{
            sideMenuSelected(menuName,menuNames){
                this.$router.push({name:'Introduction'})
            }
        },
        created(){

        }
    }
</script>

<style>
    html{
        font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    }
    body {
        margin: 0;
        padding: 0;
        font-weight: 400;
        -webkit-font-smoothing: antialiased;
        height: 100%;
    }
    .header{
        line-height:60px;
        background-color:#324157;
    }
    .header .logo{
        text-align: center;
    }
    .header .logo-text{
        color: #bfcbd9;
    }
    .header .header-nav-menu-item{
        float: right !important;
    }
    .header .header-nav-menu-item:first-child {
        margin-right: 50px;
    }
    .main{
        width: 100%;
        background-color: #324157;
        position: absolute;
        top: 60px;
        bottom: 0px;
    }
    .main .workspace{
        height:100%;
        background-color: white;
    }
</style>