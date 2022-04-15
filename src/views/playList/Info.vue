<template>
    <div class="info">
        <div class="info-left">
            <img v-if="playlist.coverImgUrl" :src="playlist.coverImgUrl" alt="" class="avatar">
        </div>
        <div class="info-right">
            <div class="title">{{ playlist.name }}</div>
            <div class="tag">
                <img class="tag-img" v-if="playlist.creator?.avatarUrl" :src="playlist.creator?.avatarUrl" alt="">
                <span class="tag-name">{{playlist.creator?.nickname}}</span>
                <span 
                    v-for="item in playlist.tags"
                    :key="item" 
                    class="tag-item hover-text">
                    #{{item}}
                </span>
            </div>
            <MoreText :text='playlist.description' :end='90'/>
            <div class="btn-box">
                <div class="btn play" @click="playAll">
                    <IconPark class="icon" :icon='PlayOne' size="22"/>
                    <span>播放全部</span>
                </div>
                <div class="btn collect">
                    <IconPark class="icon" :icon='Like' size="18"/>
                    <span>收藏</span>
                </div>
                <div class="expand hover-text">
                    <IconPark class="icon" :icon='More'/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import {PlayOne, Like, More} from '@icon-park/vue-next'
    import IconPark from '@/components/common/IconPark.vue'
    import MoreText from '@/components/common/MoreText.vue'
    import type { PlayListDetail } from '@/models/playlist';

    defineProps<{
        playAll?: () => void,
        playlist: PlayListDetail
    }>()

</script>

<style lang="less" scoped>
    .info{
        display: flex;
        
        &-left{
            width: 176px;
            height: 176px;
            flex-shrink: 0;
            .avatar{
                width: 100%;
                height: 100%;
                border-radius: 10px;
            }
        }
        &-right{
            flex: 1;
            padding-left: 20px;
            .title{
                font-size: 24px;
                padding: 0;
                font-weight: bold;
            }
            .tag{
                display: flex;
                align-items: center;
                font-size: 12px;
                color: @text;
                padding: 12px 0 8px;
                &-img{
                    width: 24px;
                    height: 24px;
                    border-radius: 50%;
                    margin-right: 8px;     
                }
                &-name{
                    margin-right: 20px;
                }
                &-item{
                    margin-right: 8px;
                }
            }
            .btn-box{
                display: flex;
                align-items: center;
                margin-top: 20px;
                .btn{
                    width: 128px;
                    height: 32px;
                    border-radius: 16px;
                    line-height: 30px;
                    box-sizing: border-box;
                    font-size: 14px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-right: 8px;
                    &.play{
                        background-color: @theme;
                        .icon{
                            height: 22px;
                        
                        }
                    }
                    &.collect{
                        border: 1px solid #fff;
                        &:hover{
                            border-color: @theme;
                            color: @theme;
                        }
                        .icon{
                            width: 22px;
                            height: 22px;
                        }
                    }
                }
                .expand{
                    width: 31px;
                    height: 31px;
                    border-radius: 50%;
                    border: 1px solid #fff;
                    text-align: center;
                    line-height: 31px;
                    &:hover{
                        border-color: @theme;
                    }
                    .icon{
                        height: 16px;
                        /deep/svg{
                            vertical-align: middle;
                        }
                    }
                }
            }
        }
    }
</style>