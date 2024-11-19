<template>
  <el-icon @click="toggle" class="screenfull-svg"><FullScreen /></el-icon>
</template>

<script setup>
import { useFullscreen } from "@vueuse/core";

const { isFullscreen, enter, exit, toggle } = useFullscreen();
</script>

<style lang="scss" scoped>
.screenfull-svg {
  // display: inline-block;
  // cursor: pointer;
  // fill: var(--el-text-color-primary);
  // width: 20px;
  // height: 20px;
  // vertical-align: 10px;
  font-size: 24px;
}
</style>
