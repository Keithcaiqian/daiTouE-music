<template>
    <div class="search-box">
        <IconPark class="search-icon" :icon="Search" :size="18" :stroke-width="2"/>
        <input class="search-inp" type="text" placeholder="搜索音乐、MV、歌单">
    </div>
</template>

<script setup lang="ts">
    import { Search } from '@icon-park/vue-next'
    import IconPark from '@/components/common/IconPark.vue';
</script>

<style lang="less" scoped>
    .search-box{
        position: relative;
        .search-icon{
            position: absolute;
            left: 0;
            top: 0;
            padding: 7px 6px;
        }
        .search-inp{
            padding: 0 30px;
            width: 206px;
            height: 30px;
            border-radius: 16px;
            border: 1px solid #44403c;
            box-sizing: border-box;
            transition: all .5s;
            &:hover{
                border-color: #fff;
            }
            &:focus{
                border-color: @theme;
            }
        }
    }
</style>