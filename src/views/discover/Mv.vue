<template>
    <Title title="推荐MV"/>
    <div class="list">
        <div class="list-item sm-2 md-4" 
            v-for="item in personalizedMv" 
            :key="item.id"
            @click="$router.push({name: routerName.mvPlay,query:{id: item.id}})"
        >
            <CoverPlay class="mv"  :img="item.picUrl" :count="item.playCount" :video='true'/>
            <div class="mv-name ellipsis">{{ item.name }}</div>
            <div class="singer">{{ item.artists[0].name }}</div>
        </div>
    </div> 
</template>

<script setup lang="ts">
    import Title from '@/components/common/Title.vue'
    import CoverPlay from '@/components/common/CoverPlay.vue'
    import { routerName } from '@/router/routerName'
    import { useVedioStore } from '@/store/vedio';
    import { onMounted, toRefs } from 'vue-demi'

    const { personalizedMv } = toRefs(useVedioStore());
    const { getPersonalizedMvApi } = useVedioStore();

    onMounted(async () => {
        await getPersonalizedMvApi();
    })

</script>

<style lang="less" scoped>
    .list{
        display: flex;
        flex-wrap: wrap;
        margin: 0 -8px;
        .list-item{
            padding: 8px;
            box-sizing: border-box;
            .mv{
                aspect-ratio: 17 / 10;
            }
            .mv-name{
                margin: 8px 0;
                font-size: 12px;
            }
            .singer{
                color: @textDarken;
                font-size: 10px;
            }
        }
    }
</style>
