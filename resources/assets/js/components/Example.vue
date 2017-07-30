<template>
    <div>
        <el-row>
            <el-col :span="12" :offset="6">
                <h1>This is the Example Component</h1>
                <el-card v-loading="cardLoading" class="box-card">
                    <h3>{{ reply }}</h3>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        data(){
            return {
                reply:'ping...',
                cardLoading: false,
            }
        },
        methods:{
            apiTest(){
                this.cardLoading = true;
                axios.get('/api/ping').then((res) => {
                    this.reply = res.data; // expect 'pong'
                    this.cardLoading = false;
                }).catch(() => {
                    this.cardLoading = false;
                    console.error('ajax request by axios failed!');
                })
            }
        },
        mounted() {
            this.apiTest();
        }
    }
</script>

