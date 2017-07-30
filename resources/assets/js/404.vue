<template>
    <div>
        <h1>404</h1>
        <h2>Oops,The Page you are Looking for Does not exist!</h2>
        <h2><router-link to="/">返回首页</router-link></h2>
    </div>
</template>

<script>

    export default {
        created() {
            console.log(this.$route);
        }
    }
</script>

