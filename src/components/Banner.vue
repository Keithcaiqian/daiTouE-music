<template>
    <swiper
        slides-per-group-auto 
        slides-per-view="auto" 
        :navigation="true" 
        :grab-cursor="true"
    >
        <swiper-slide class="slide sm-3 md-2 lg-1" v-for="item in banners" :key="item.bannerId">
            <img :src="item.pic" alt="">
        </swiper-slide>
    </swiper>
</template>

<script setup lang="ts">
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/css';
    import { onMounted, toRefs, ref } from 'vue';

    import { useBannerStore } from '@/store/banner'

    const { banners } = toRefs(useBannerStore())
    const { getBanners } = useBannerStore()

    onMounted(async () => {
       await getBanners()
    })
</script>

<style lang="less" scoped>
    .slide{
        padding: 0 4px;
        box-sizing: border-box;
        img{
            width: 100%;
            border-radius: 10px;
        }
    }
</style>
