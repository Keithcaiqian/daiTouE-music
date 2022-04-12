<template>
    <div class="personalized">
        <Title title='你的专属歌单'/>
        <div class="list">
            <div class="list-item sm-3 md-4 lg-5" v-for="item in randomPersonalized" :key="item.id">
                <CoverPlay class="song"  :img="item.picUrl" :count="item.playCount"/>
                <div class="name">{{ item.name }}</div>
            </div>
        </div>    
    </div>
</template>

<script setup lang="ts">
    import Title from '@/components/common/Title.vue'
    import CoverPlay from '@/components/common/CoverPlay.vue'

    import { computed, onMounted, toRefs } from 'vue';
    import { useMusicStore } from '@/store/music'
    import { sampleSize } from 'lodash'

    const { personalized } = toRefs(useMusicStore());
    const { getPersonalized } = useMusicStore();

    const randomPersonalized = computed(() => sampleSize(personalized.value,10));

    onMounted(async () => {
        await getPersonalized();
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
            .song{
                aspect-ratio: 1 / 1;
            }
            .name{
                font-size: 12px;
                color: @textDarken;
                width: 100%;
                margin-top: 8px;
                overflow: hidden;
            }
        }
    }
</style>
