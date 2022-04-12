<template>
    <div class="voice-box">
        <Slider class="volumeBox" v-model="volume"/>
        <div class="num">{{volume}}</div>
        <IconPark 
            class="voice hover-text" 
            :icon="isMute?VolumeMute:VolumeSmall" 
            size="16" theme="filled" 
            @click="toggleMuted"
        />
    </div>
</template>

<script setup lang="ts">
    import { toRefs, watch } from 'vue'
    import IconPark from '@/components/common/IconPark.vue'
    import Slider from '@/components/common/slider/Slider.vue'

    import {VolumeSmall,VolumeMute} from "@icon-park/vue-next";
    import { usePlayerStore } from '@/store/player';

    const { volume, isMute } = toRefs(usePlayerStore());
    const { toggleMuted, setVolume } = usePlayerStore();
    watch(
        () => volume.value,
        (value:number) => {
            setVolume(value);
        }
    )
</script>

<style lang="less">
.volumeBox{
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
            cursor: grab;
            &.drag{
                cursor: grabbing;
            }
        }
    }
}
</style>

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