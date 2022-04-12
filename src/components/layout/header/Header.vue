<template>
    <div class="header">
        <div class="header-left">
            <div class="btn-box">
                <IconPark class="btn hover-text" @click="$router.back()" :icon="Left" :size="size" :stroke-width="strokeWidth"/>
                <IconPark class="btn hover-text" @click="$router.go(1)" :icon="Right" :size="size" :stroke-width="strokeWidth"/>
            </div>
            <Search class="search"/>
        </div>
        <div class="header-right">
            <UserInfo class="user" />
            <IconPark class="btn hover-text" :icon="Mail" :size="size" :stroke-width="strokeWidth"/>
            <IconPark class="btn hover-text" @click.stop="themeModalShow" :icon="Platte" :size="size" :stroke-width="strokeWidth"/>
            <IconPark class="btn hover-text" :icon="HamburgerButton" :size="size" :stroke-width="strokeWidth"/>
        </div>
        <div v-if="useThemeModal" @click.stop class="theme-modal">
            <Theme />
        </div>
    </div>
</template>

<script setup lang="ts">
    import { Left, Right, Mail, Platte, HamburgerButton } from '@icon-park/vue-next'

    import IconPark from '@/components/common/IconPark.vue';
    import Search from './Search.vue';
    import UserInfo from './UserInfo.vue';
    import Theme from './Theme.vue'
    import { onMounted, onUnmounted, ref } from 'vue';

    const strokeWidth = 2;
    const size = 18;

    const useThemeModal = ref<boolean>(false);

    const themeModalShow = () => {
        useThemeModal.value = true;
    }
    const themeModalHide = () => {
        useThemeModal.value = false;
    }

    onMounted(() => {
        document.addEventListener('click',themeModalHide,false);
    })
    onUnmounted(() => {
         document.removeEventListener('click',themeModalHide,true);
    })
</script>

<style lang="less" scoped>
    .header{
        position: relative;
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
        .theme-modal{
            width: 300px;
            height: 200px;
            position: absolute;
            right: 50px;
            top: 50px;
            background-color: @bgLighten;
            z-index: 9999;
            border-radius: 10px;
            border: 1px solid @theme;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
    }
</style>