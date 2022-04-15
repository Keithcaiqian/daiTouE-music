<template>
    <div class="text">
        <template v-if="show">
            <span v-if="!isShow">{{ text.substring(0, end) }}...</span>
            <span  v-else>{{ text }}...</span>
            <span class="hover-text" @click="isShow=!isShow">[{{ isShow ? '收起' : '详情' }}]</span>
        </template>  
        <template v-else><span>{{text}}</span></template>
    </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

const props = defineProps<{ text: string, end: number }>()

const show = ref(false); //是否显示详情dom
const isShow = ref(false); //切换详情doom

if (props.text && props.text.length  > props.end) {
  show.value = true
}

</script>

<style lang="less" scoped>
    .text{
        color: @textDarken;
        font-size: 12px;
        .hover-text{
            margin-left: 20px;
        }
    }
</style>