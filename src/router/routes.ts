import { getAsyncPage } from "@/utils/index";

const Discover = getAsyncPage("../views/discover/Discover.vue");
const Music = getAsyncPage("../views/music/Music.vue");
const Video = getAsyncPage("../views/video/Video.vue");
const Radio = getAsyncPage("../views/radio/Radio.vue");
const Like = getAsyncPage("../views/like/Like.vue");
const Local = getAsyncPage("../views/local/Local.vue");
const Download = getAsyncPage("../views/download/Download.vue");
const Recently = getAsyncPage("../views/recently/Recently.vue");

export default [
  {
    path:'/',
    redirect: {name: 'discover'},
  },
  { 
    path: "/discover",
    name: 'discover',
    component: Discover,
    meta:{
      menu: 'discover'
    } 
  },
  { 
    path: "/music",
    name: 'music',
    component: Music,
    meta:{
      menu: 'music'
    } 
  },
  { 
    path: "/video",
    name: 'video',
    component: Video,
    meta:{
      menu: 'video'
    } 
  },
  { 
    path: "/radio",
    name: 'radio',
    component: Radio,
    meta:{
      menu: 'radio'
    } 
  },
  { 
    path: "/like",
    name: 'like',
    component: Like,
    meta:{
      menu: 'like'
    } 
  },
  { 
    path: "/local",
    name: 'local',
    component: Local,
    meta:{
      menu: 'local'
    } 
  },
  { 
    path: "/download",
    name: 'download',
    component: Download,
    meta:{
      menu: 'download'
    } 
  },
  { 
    path: "/recently",
    name: 'recently',
    component: Recently,
    meta:{
      menu: 'recently'
    } 
  },
];