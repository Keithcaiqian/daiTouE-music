import { ref } from 'vue'
import { defineStore } from 'pinia';
import type { Banner } from '@/models/banner';
import { bannerApi } from '@/request/api';

export const useBannerStore = defineStore('banner',()=>{
    const banners = ref<Banner[]>([]); //轮播图

    const getBanners = async () => {
        if(banners.value.length > 0){
            return;
        }
        banners.value = await bannerApi();
    }

    return {
        banners,
        getBanners
    }
})

