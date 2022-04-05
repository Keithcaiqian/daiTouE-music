<template>
    <div class="controll-box">
        <PlayMode class="btn hover-text"/>
        <IconPark :icon="GoStart" size="28" class="btn hover-text" />
        <IconPark :icon="isPause?PauseOne:Play" size="45" theme="filled" class="btn play-btn"
              @click="togglePlay"/>
        <IconPark :icon="GoEnd" size="28" class="btn hover-text" />
        <div class="btn voice-box">
            <IconPark :icon="VolumeSmall" size="20" :stroke-width="3" class="hover-text" />
            <PlayVoiceSlider class="voice-slider"/>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'

    import IconPark from '@/components/common/IconPark.vue'
    import PlayMode from './PlayMode.vue'
    import PlayVoiceSlider from './PlayVoiceSlider.vue'

    import {Play, PauseOne, GoEnd, GoStart, VolumeSmall} from "@icon-park/vue-next";

    const isPause = ref(true);

    const togglePlay = () => {
        isPause.value = !isPause.value;
    }

</script>


<style lang="less" scoped>
    .controll-box{
        display: flex;
        align-items: center;
        justify-content: center;
        .btn{
            margin: 0 6px;
        }
        .play-btn{
            color: @theme;
            cursor: pointer;
        }
        .voice-box{
            position: relative;
            .voice-slider{
                position: absolute;
                left: 50%;
                bottom: 34px;
                transform: translateX(-50%);
                display: none;
            }
        }
    }
</style>