<template>
    <div class="sideMenuToggler">
        <span @click="handleClick">
            <i :isSideMenuCollapsed="isSideMenuCollapsed"
               :class="[ isSideMenuCollapsed ? 'el-icon-arrow-right' : 'el-icon-arrow-left']">
            </i>
        </span>
    </div>
</template>
<script>
    export default{
        props:[
            'isSideMenuCollapsed'
        ],
        methods:{
            handleClick(evt){
                this.$emit('click', evt);
            }
        }
    }
</script>
