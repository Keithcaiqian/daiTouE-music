<template>
    <div class="menu">
        <div class="menu-group" v-for="menu in menus" :key="menu.title">
            <div class="title">{{ menu.title }}</div>
            <ul class="menu-list">
                <li 
                    class="menu-item" 
                    v-for="item in menu.list" 
                    :key="item.key"
                    :class="{active: useCurrentPage === item.key}"
                    @click="click(item)"
                >
                    <IconPark class="icon" :icon="item.icon" size="18" :theme="item.theme"/>
                    <span class="name">{{ item.name }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
    import useMenu from './useMenu';
    import IconPark from "@/components/common/IconPark.vue";

    const { menus, click, useCurrentPage } = useMenu();

</script>

<style lang="less" scoped>
    .menu{
        width: 176px;
        overflow: hidden;
        font-size: 14px;
        margin: 0 auto;
        &-group{
            margin-top: 40px;
            .title{
                font-size: 12px;
                padding: 0 16px 8px;
            }
            .menu-list{
                .menu-item{
                    margin-top: 6px;
                    width: 176px;
                    height: 32px;
                    box-sizing: border-box;
                    padding: 0 16px;
                    overflow: hidden;
                    border-radius: 4px;

                    display: flex;
                    align-items: center;
                    &:not(.active){
                        cursor: pointer;
                        &:hover{
                            background-color: @hover;
                        }
                    }
                    .icon{
                        margin-right: 4px;
                        height: 18px;
                    }
                    &.active{
                        cursor: default;
                        background-image: linear-gradient(to right,@themeLighten,@theme);
                    }
                }
            }
        }
    }
</style>
