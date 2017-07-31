<template>
    <div>
        <h1>404</h1>
        <h2>Oops,The Page you are Looking for Does not exist!</h2>
        <h2><el-button type="text" @click="goBack()">返回</el-button></h2>
    </div>
</template>

<script>
    export default {
        methods:{
            goBack(){
                this.$router.back();
            }
        },
        created() {
            if (this.$route.query) {
                this.$router.replace({name:'404'});
            }
        }
    }
</script>

