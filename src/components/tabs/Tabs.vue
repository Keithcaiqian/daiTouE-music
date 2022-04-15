<template>
    <ul class="tab">
        <li class="slide" 
            :style="{
                width: useWidth + 'px',
                transform: `translateX(${useLeft}px)`
            }"
        >
        </li>
        <li @click="itemClick" class="tab-item hover-text">歌曲361</li>
        <li @click="itemClick" class="tab-item hover-text">评论</li>
    </ul>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    defineProps<{
        tabs:
    }>()

    const useWidth = ref(0);
    const useLeft = ref(0);

    const itemClick = (e:any) => {
        useWidth.value = e.target.offsetWidth;
        useLeft.value = e.target.offsetLeft;
    }
</script>

<style lang="less" scoped>
    .tab{
        display: flex;
        position: relative;
        .slide{
            position: absolute;
            left: 0;
            bottom: 0;
            height: 2px;
            background-color: @theme;
            transition: all .3s;
            border: 1px;
            width: 40px;
        }
        &-item{
            line-height: 40px;
            font-size: 14px;
            margin-right: 28px;
            &:last-of-type{
                margin-right: 0;
            }
            &.active{
                color: @theme;
            }
        }
    }
</style>