<template>
  <div class="w100 h100 fsc">
    <el-menu mode="horizontal" class="fsc menuWrap">
      <sidebar-item
        v-for="(route, index) in sidebarRouters"
        :key="route.path + index"
        :item="route"
        :base-path="route.path"
      />
    </el-menu>
  </div>
</template>

<script setup>
import SidebarItem from "../Sidebar/SidebarItem.vue";
import { ref, reactive, toRefs, onMounted } from "vue";
//导入路由
import usePermissionStore from "@/store/modules/permission";
const permissionStore = usePermissionStore();

const sidebarRouters = computed(() => permissionStore.sidebarRouters);
</script>

<style scoped lang="scss">
.menuWrap{
  width: 100%;
}
</style>
