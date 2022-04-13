<template>
    <div v-for="(item,key) in themes" 
        :key="key" 
        class="theme" 
        :style="{backgroundColor: item.bgColor}"
        @click="setTheme(key)"
    >
    </div>
</template>

<script setup lang="ts">
    import { themes } from '@/theme/model'
    import { setTheme } from '@/theme/index'
</script>


<style lang="less" scoped>
    .theme{
        width: 50px;
        height: 50px;
        margin: 0 20px;
        border-radius: 8px;
    }
</style>