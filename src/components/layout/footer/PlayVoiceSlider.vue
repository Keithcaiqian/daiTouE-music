<template>
    <div class="voice-box">
        <div class="sliderBox">
            <div class="slider">
                <div class="slider-dot-box">
                    <div class="dot" :style="{height:useVoice}"></div>
                </div>
            </div>
        </div>
        <div class="num">{{useVoice}}</div>
        <IconPark class="voice hover-text" :icon="useMuted?VolumeMute:VolumeSmall" size="16" theme="filled" @click="toggleMuted"/>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    import IconPark from '@/components/common/IconPark.vue'

    import {VolumeSmall,VolumeMute} from "@icon-park/vue-next";

    const useVoice = ref(40);//音量
    const useMuted = ref(false); //是否静音

    const toggleMuted = () => {
        useMuted.value = !useMuted.value;
    }

</script>

<style lang="less" scoped>
    .voice-box{
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 40px;
        background-color: @bg;
        border-radius: 6px;
        box-sizing: border-box;
        border: 1px solid #444;
        padding: 15px;
        &::after{
            content: '';
            position: absolute;
            left: 50%;
            top: 152px;
            width: 8px;
            height: 8px;
            background: @bg;
            transform-origin: center center;
            transform: translateX(-50%) rotate(45deg);
            border-right: 1px solid #444;
            border-bottom: 1px solid #444;
        }
        .sliderBox{
            position: relative;
            width: 6px;
            height: 80px;
            background-color: #999;
            border-radius: 2px;
            margin-bottom: 8px;
            .slider{
                position: absolute;
                left: 0;
                bottom: 0;
                width: 6px;
                border-radius: 2px;
                background-color: @theme;
                height: 30px;
                &-dot-box{
                    position: absolute;
                    right: 50%;
                    top: 0;
                    transform: translate(50%,-50%);
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    background-color: @bg;
                    border: 2px solid @theme;
                    box-sizing: border-box;
                    cursor: pointer;
                }
            }
        }
        .num{
            font-size: 12px;
            margin-bottom: 8px;
        }
        .voice{
            height: 16px;
            margin-left: 4px;
        }
    }
</style>