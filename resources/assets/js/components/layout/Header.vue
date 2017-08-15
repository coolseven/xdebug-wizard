<template>
    <el-row class="header">
        <el-col :span="2" class="logo">
            <span class="text">{{appName}}</span>
        </el-col>
        <el-col :span="22">
            <el-menu theme="dark" mode="horizontal">
                <el-menu-item index="about"  class="header-nav-menu-item"><i class="fa fa-user-circle"></i>About</el-menu-item>
                <el-menu-item index="github" class="header-nav-menu-item"><i class="fa fa-github"></i>Github</el-menu-item>
            </el-menu>
        </el-col>
    </el-row>
</template>
<script>
    export default{
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
        methods:{

        },
        mounted(){
            document.title = this.title;
        }
    }
</script>