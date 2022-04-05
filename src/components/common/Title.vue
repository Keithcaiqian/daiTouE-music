<template>
  <div class="title">
    <span>{{ title }}</span>
    <IconPark class="icon" :icon="Right" size="25" :stroke-width="2"/>
  </div>
</template>

<script setup lang="ts">
import {Right} from '@icon-park/vue-next'
import IconPark from "@/components/common/IconPark.vue";

defineProps<{
  title: string
}>()
</script>

<style lang="less">
  .title{
    padding: 16px 0 12px;
    font-size: 20px;
    svg{
      vertical-align: bottom;
    }
  }
</style>
