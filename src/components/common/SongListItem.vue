<template>
    <div class="songItem">
        <div class="w-30 song item">
            <div class="song-left ellipsis">
                <IconPark :icon="Like" size="16" class="mr like"/>
                <span class="songName mr">{{ song.name }}</span>
                <IconPark 
                    v-if="song.mv>0" 
                    size="16"
                    class="mv"
                    :icon="PlayTwo" 
                    @click="router.push({name:routerName.mvPlay,query:{id:song.mv}})"
                />
            </div>
            <div class="song-right">
                <IconPark @click="playById(song.id)" title="播放" :icon="PlayOne" size="20" class="hover-text mr"/>
                <IconPark title="添加到" :icon="Add" size="16" class="hover-text mr"/>
                <IconPark title="下载" :icon="DownTwo" size="16" class="hover-text mr"/>
                <IconPark title="更多操作" :icon="MoreTwo" size="16" class="hover-text mr"/>
            </div>
        </div>
        <div class="w-1/4 item">{{ song.ar[0].name }}</div>
        <div class="w-1/4 item">{{  song.al.name }}</div>
        <div class="w-1/5 item">{{ useFormatDuring(song.dt / 1000) }}</div>
    </div>
</template>

<script setup lang="ts">
    import IconPark from '@/components/common/IconPark.vue'
    import { Song } from '@/models/song';
    import {Add, DownTwo, Like, MoreTwo, PlayOne, PlayTwo} from '@icon-park/vue-next'
    import { useFormatDuring } from '@/utils/number'
    import { usePlayerStore } from '@/store/player';
    import { useRouter } from 'vue-router';
    import { routerName } from '@/router/routerName'

    const { playById } = usePlayerStore();
    const router = useRouter();

    defineProps<{
        song:Song
    }>()
</script>


<style lang="less" scoped>
    .songItem{
        width: 100%;
        overflow: hidden;
        display: flex;
        padding: 8px 0;
        font-size: 12px;
        color: @text;
        &:hover{
            background-color: @hover;
            .song{
                &-right{
                    display: block;
                }
            }
        }
        .w-30{
            width: 30%;
        }
        .w-1\/4{
            width: 25%;
        }
        .w-1\/5{
            width: 20%;
        }
        .song{
            display: flex;
            align-items: center;
            justify-content: space-between;
            &-left{
                .like{
                    &:hover{
                        color: #f40;
                    }
                }
                .mv{
                    color: orange;
                }
                
            }
            &-right{
                display: none;
            }
        }
        .item{
            padding-right: 10px;
            line-height: 20px;
            box-sizing: border-box;
            &:last-of-type{
                padding-right: 0;
            }
            /deep/svg{
                vertical-align: middle;
            }
        }
        .mr{
            margin-right: 6px;
        }
    }
</style>