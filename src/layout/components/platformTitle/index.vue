<template>
  <div class="fsc g10">
    <span v-if="getInfo('icon')">
      <svg-icon class-name="system-icon" :icon-class="getInfo('icon') || ''"
    /></span>

    <span class="fs30"> {{ getInfo("title") }}</span>
  </div>
</template>

<script setup>
import { ref, reactive, toRefs, onMounted } from "vue";
//获取平台路由
import usePermissionStore from "@/store/modules/permission";
import manager from "@/store/modules/manager";
const permissionStore = usePermissionStore();
const platformRouters = computed(() => permissionStore.platformRouters);

// 获取平台值
const managerStore = manager();

let titles = ref([]);

// 获取平台值
const handleRouter = () => {
  let children = [];
  platformRouters.value.forEach((element) => {
    if (element?.children && element?.children?.length) {
      children = [...children, ...element?.children];
    }
  });

  titles.value = children;
};

//获取平台名称
const getInfo = (key) => {
  let data;
  titles.value?.forEach((item) => {
    if (item.path == managerStore.platformDictValue) {
      data = item.meta;
    }
  });
  if (data) {
    return data[key];
  } else {
    return "";
  }
};

onMounted(() => {
  if (platformRouters.value) {
    handleRouter();
  }
});
</script>

<style scoped lang="scss">
.system-icon {
  font-size: 40px;
  color: var(--el-color-primary);
}

.fs30 {
  font-size: 26px;
  font-weight: 600;
  letter-spacing: 0px;
  color: var(--el-text-color-regular);
  // 设置宋体
  //font-family: SimSun;
}
</style>
