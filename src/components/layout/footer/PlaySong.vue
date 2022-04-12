<template>
    <div class="song-box">
        <img :src="song.al?.picUrl || avatar" alt="" class="song-picture">
        <div class="song-detail">
            <div class="song-top">
                <span class="song-name">{{ song.name || '还没选音乐哦'}}</span>
                <span class="song-singer">- {{ song.ar && song.ar[0] ?song.ar[0].name : '呆头鹅' }}</span>
            </div>
            <div class="song-opera">
                <IconPark class="hover-text" :icon='Like' :size="14"/>
                <IconPark class="hover-text" :icon='DownTwo' :size="14"/>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import {Like, DownTwo} from '@icon-park/vue-next'

    import { avatar } from '@/assets/img/index';
    import IconPark from '@/components/common/IconPark.vue'
    import { toRefs } from 'vue-demi';
    import { usePlayerStore } from '@/store/player';

    const { song } = toRefs(usePlayerStore());
</script>

<style lang="less" scoped>
    .song-box{
        display: flex;
        align-items: center;
        .song-picture{
            flex-shrink: 0;
            width: 44px;
            height: 44px;
            border-radius: 4px;
        }
        .song-detail{
            flex: 1;
            overflow: hidden;
            height: 44px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            font-size: 12px;
            margin-left: 8px;
            .song-top{
                white-space: nowrap;
                overflow: hidden;
                .song-singer{
                    margin-left: 8px;
                    color: @textDarken;
                }
            }
            .song-opera{
                .hover-text{
                    margin-right: 8px;
                    &:not(:hover){
                        color: @textDarken;
                    } 
                }
            }
        }
    }
</style>