<template>
    <div class="progress">
        <Slider class="sliderBox" 
            :direct="Direction.Left" 
            :modelValue="percent"
            @update:modelValue="changeTime"
        />
    </div>
</template>

<script setup lang="ts">
    import { usePlayerStore } from "@/store/player";
    import { ref, toRefs, watch, watchEffect } from "vue";
    import Slider from '@/components/common/slider/Slider.vue'
    import { Direction } from '@/components/common/slider/Slider'

    const { currentTime, duration } = toRefs(usePlayerStore());
    const { setCurrentTime } = usePlayerStore();

    const percent = ref<number>(currentTime.value / duration.value);

    watchEffect(() => {
        percent.value = Math.round(currentTime.value / duration.value * 100);
    })

    const changeTime = (time:number) => {
        setCurrentTime(time / 100 * duration.value)
    }

</script>

<style lang="less">
    .progress{
        width: 100%;
        position: relative;
        height: 10px;
        padding: 4px;
        .sliderBox{
            width: 100%;
            height: 2px;
            position: relative;
            background-color: #999;
            .slider{
                position: absolute;
                left: 0;
                top: 0;
                height: 2px;
                background-color: @theme;
                width: 0;
                &-dot-box{
                    position: absolute;
                    right: 0;
                    top: 50%;
                    transform: translate(50%,-50%);
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    background-color: @theme;
                    background-image: radial-gradient(@theme,#fff);
                    cursor: grab;
                    transition: all .3s;
                    opacity: 0;
                    &:hover{
                        opacity: 1;
                    }
                }
            }
        }
    }
</style>