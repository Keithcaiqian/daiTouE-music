import {Planet, Music, VideoOne, Fm, Like, Computer, DownloadThree, PlayTwo} from '@icon-park/vue-next'
import { ref, watch } from 'vue';
import {useRoute, useRouter} from "vue-router";

interface IMenu {
    key: string,
    name: string,
    icon: any,
    theme: 'outline' | 'filled' | 'two-tone' | 'multi-color',
}

interface IMenus {
    title: string,
    list: IMenu[]
}

export default function useMenu () {
    const menus:IMenus[] = [
        {
            title: '呆头鹅-OnlineMusic',
            list:[
                {
                    key: 'discover',
                    name: '推荐',
                    icon: Planet,
                    theme: 'outline',
                },
                {
                    key: 'music',
                    name: '音乐馆',
                    icon: Music,
                    theme: 'outline',
                },
                {
                    key: 'video',
                    name: '视频',
                    icon: VideoOne,
                    theme: 'outline',
                },
                {
                    key: 'radio',
                    name: '电台',
                    icon: Fm,
                    theme: 'outline',
                },
            ]
        },
        {
            title: '我的音乐',
            list:[
                {
                    key: 'like',
                    name: '我喜欢',
                    icon: Like,
                    theme: 'outline',
                },
                {
                    key: 'local',
                    name: '本地歌曲',
                    icon: Computer,
                    theme: 'outline',
                },
                {
                    key: 'download',
                    name: '下载歌曲',
                    icon: DownloadThree,
                    theme: 'outline',
                },
                {
                    key: 'recently',
                    name: '最近播放',
                    icon: PlayTwo,
                    theme: 'outline',
                },
            ]
        },
    ];

    const route = useRoute();
    const router = useRouter();

    const useCurrentPage = ref(route.meta.menu); //当前路由的menu

    watch(
        () => route.meta.menu,
        page => {
            useCurrentPage.value = page;
        }
    )

    // 左侧导航点击事件
    const click = async (menu: IMenu) => {
        await router.push({name: menu.key,})
    };

    return {
        menus,
        click,
        useCurrentPage,
    }
}