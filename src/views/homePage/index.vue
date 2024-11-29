<template>
  <div class="h100 w100">
    <!-- 动态渲染当前组件 -->
    <template v-if="asyncComponents[platformIndex[platformDictValue]]">
      <component
        :is="asyncComponents[platformIndex[platformDictValue]]"
      ></component>
    </template>
  </div>
</template>

<script setup>
import { shallowRef, defineAsyncComponent, onMounted } from "vue";
import manager from "@/store/modules/manager";
// 获取平台值
const managerStore = manager();
// 获取所有平台配置
let platformIndex = computed(() => managerStore.platformIndex);
// 获取平台值
let platformDictValue = computed(() => managerStore.platformDictValue);
// 导入所有组件
const components = import.meta.glob("./*/*.vue");
// 创建一个对象来存储异步组件
const asyncComponents = {};
// 异步加载组件
for (const path in components) {
  const name = path.split("/")[1];
  asyncComponents[name] = defineAsyncComponent(components[path]);
}

// 在组件挂载后动态设置要渲染的组件名称
onMounted(() => {});
</script>

<style scoped lang="scss"></style>
