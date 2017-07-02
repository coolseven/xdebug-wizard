<template>
    <div>
        <h1>This is the Example Component</h1>
        <h3>{{ reply }}</h3>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        data(){
            return {
                reply:'ping...'
            }
        },
        methods:{
            testApi(){
                axios.get('/api/ping').then(res => {
                    this.reply = res.data; // expect 'pong'
                }).catch(()=>{
                    console.error('ajax request by axios failed!');
                })
            }
        },
        mounted() {
            console.log(this.$route);
            this.testApi();
        }
    }
</script>

<style scoped="scoped">
    div{
        width: 1200px;
        margin-left:auto;
    }
</style>
