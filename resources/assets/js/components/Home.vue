<template>
    <div>
        <el-row>
            <el-col :span="3">
                <span class="logo">Xdebug-Wizard</span>
            </el-col>
            <el-col :span="21">
                <el-menu theme="dark" mode="horizontal" class="top-nav-menus">
                    <el-menu-item index="1"><i class="el-icon-menu"></i>导航二</el-menu-item>
                    <el-menu-item index="2"><i class="el-icon-setting"></i>导航三</el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
        <el-row>
            <aside>
                <el-col :span="3">
                    <el-menu theme="dark" :default-active="activeIndex" class="sidebar-menus" @select="handleSelect">
                        <el-menu-item index="1" class="top-nav-utem">
                            Xdebug-Wizard
                        </el-menu-item>
                        <el-menu-item index="2">
                            GitHub
                        </el-menu-item>
                    </el-menu>
                </el-col>
            </aside>
            <section>
                <el-col :span="21">
                    Content
                </el-col>
            </section>
        </el-row>
    </div>
</template>

<script>

    export default {
        data(){
            return {
                activeIndex: '1',
            }
        },
        methods:{
            handleSelect(key,keyPath){
                console.log(key, keyPath);
            }
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
    }
    .logo{
        background-color: #324157;
        height: 60px;
    }
    .top-nav{
        float: right;
        right: 40px;
    }
</style>