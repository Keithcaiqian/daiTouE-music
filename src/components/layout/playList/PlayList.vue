<template>
    <div class="playList-modal" v-show="showPlayList">
        <div class="list-left" @click="showPlayList = false"></div>
        <div class="list-right">
            <div class="head">
                <div class="title">播放列表</div>
                <div class="list-detail-box">
                    <div class="list-num">共{{ playListCount }}首歌曲</div>
                    <div class="clear" @click="clearPlayList">
                        <IconPark :icon="Delete"/>
                        <span>清空</span>
                    </div>
                </div>
            </div>
            
            <div class="list-box scrollbar">
                <template v-for="(song,index) in playList" :key="song.id">
                    <PlayListItem @click="playById(song.id,song)" :active='index === curSongIndex' :song='song'/>
                </template>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { Delete } from "@icon-park/vue-next";
    import IconPark from "@/components/common/IconPark.vue";
    import PlayListItem from './PlayListItem.vue'
    import { usePlayerStore } from "@/store/player";
    import { toRefs } from 'vue';

    const { playListCount, curSongIndex, playList, showPlayList } = toRefs(usePlayerStore());
    const { playById, clearPlayList } = usePlayerStore(); 
</script>


<style lang="less" scoped>
    .playList-modal{
        position: fixed;
        left: 0;
        top: 0;
        z-index: 9999;
        display: flex;
        width: 100%;
        height: 100%;
        .list-left{
            flex: 1;
            background: rgba(0 , 0, 0, .5);
            height: 100%;
        }
        .list-right{
            flex-shrink: 0;
            width: 320px;
            height: 100%;
            overflow: hidden;
            background-color: @bgLighten;
            display: flex;
            flex-direction: column;
            .head{
                padding: 10px;
                .title{
                    font-size: 20px;
                }
                .list-detail-box{
                    margin-top: 4px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    font-size: 12px;
                    .clear{
                        color: @textDarken;
                        :deep(svg){
                            vertical-align: text-top;
                            margin-right: 2px;
                        }
                        &:hover{
                            color: @theme;
                        }
                    }
                }
            }
            .list-box{
                overflow-y: auto;
                overflow-x: hidden;
                flex: 1;
            }
        }
    }
</style>