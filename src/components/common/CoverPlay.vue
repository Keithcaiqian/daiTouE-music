<template>
    <div class="cover-box">
        <img :src="img" alt="" class="img">
        <div class="cover-modal">
            <IconPark 
                class="hover-text"
                :icon="PlayOne"
                theme="filled"
                :size="50"
            />
        </div>
        <div class="num-box">
            <IconPark class="icon" :icon="video?Play:Headset" :size="12"/>
            <span>{{ useNumberFormat(count || 0) }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
    import IconPark from '@/components/common/IconPark.vue';

    import {PlayOne, Play, Headset} from '@icon-park/vue-next'
    import {useNumberFormat} from "@/utils/number";

    defineProps<{
        video?: boolean, 
        img:string,
        count?:number
    }>();
</script>

<style>
    .icon svg{
        vertical-align: text-top;
    }
</style>

<style lang="less" scoped>
    .cover-box{
        position: relative;
        width: 100%;
        overflow: hidden;
        &:hover{
            top: -4px;
            .cover-modal{
                display: flex;
            }
            .num-box{
                display: none;
            }
        }
        .img{
            width: 100%;
            height: 100%;
            border-radius: 6px;
        }
        .cover-modal{
            position: absolute;
            border-radius: 6px;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, .5);
            display: none;
            align-items: center;
            justify-content: center;
            cursor: pointer;
        }
        .num-box{
            position: absolute;
            height: 18px;
            line-height: 18px;
            padding: 0 8px;
            background: @bg;
            border-radius: 20px;
            bottom: 8px;
            right: 8px;
            font-size: 12px;
            .icon{
                margin-right: 6px;
            }
        }
    }
</style>
