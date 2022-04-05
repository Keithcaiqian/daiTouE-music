// 发现页
<template>
    <div class="discover scrollbar">
        <h1 class="discover-title">推荐</h1>
        <Banner :per-page="3"/>
        <Personalized />
        <PersonalizedNewSong />
        <Mv />
    </div>
</template>

<script setup lang="ts">
    import Banner from '@/components/Banner.vue'
    import Personalized from './Personalized.vue'
    import PersonalizedNewSong from './PersonalizedNewSong.vue'
    import Mv from './Mv.vue'
</script>

<style lang="less" scoped>
    .discover{
        width: 100%;
        height: 100%;
        overflow-y: auto;
        padding: 0 20px;
        box-sizing: border-box;
        &-title{
            padding: 32px 0 16px;
            font-size: 30px;
        }
    }
</style>
