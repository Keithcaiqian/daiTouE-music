<template>
    <div class="header">
        <div class="header-left">
            <div class="btn-box">
                <IconPark class="btn hover-text" :icon="Left" :size="size" :stroke-width="strokeWidth"/>
                <IconPark class="btn hover-text" :icon="Right" :size="size" :stroke-width="strokeWidth"/>
            </div>
            <Search class="search"/>
        </div>
        <div class="header-right">
            <UserInfo class="user" />
            <IconPark class="btn hover-text" :icon="Mail" :size="size" :stroke-width="strokeWidth"/>
            <IconPark class="btn hover-text" :icon="Platte" :size="size" :stroke-width="strokeWidth"/>
            <IconPark class="btn hover-text" :icon="HamburgerButton" :size="size" :stroke-width="strokeWidth"/>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { Left, Right, Mail, Platte, HamburgerButton } from '@icon-park/vue-next'

    import IconPark from '@/components/common/IconPark.vue';
    import Search from './Search.vue';
    import UserInfo from './UserInfo.vue';

    const strokeWidth = 2;
    const size = 18;
</script>

<style lang="less" scoped>
    .header{
        width: 100%;
        height: 56px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .btn{
            display: inline-block;
            width: 36px;
            height: 36px;
            padding: 9px 7px;
            box-sizing: border-box;
        }
        &-left{
            padding-left: 20px;
            display: flex;
            align-items: center;
            .btn-box{
                display: flex;
                align-items: center;
            }
            .search{
                margin-left: 8px;
            }
        }
        &-right{
            padding-right: 20px;
            display: flex;
            align-items: center;
            .user{
                margin-right: 8px;
            }
        }
    }
</style>