<template>
  <div class="templateWrapper fcc" @click="handleTemplate">
    <el-tooltip class="box-item" content="模块布局排版设置" placement="bottom">
      <svg-icon icon-class="template" class-name="size-icon" />
    </el-tooltip>

    <!-- //排版布局弹窗 -->
    <el-dialog v-model="dialogVisible" title="排版布局" width="80%" top="4vh">
      <div class="w100 h100">
        <templateSet></templateSet>
      </div>
    </el-dialog>
  </div>
</template>

<script setup>
import templateSet from "./templateSet/index.vue";
import { ref, reactive, toRefs, onMounted } from "vue";

let dialogVisible = ref(false);

const handleTemplate = () => {
  dialogVisible.value = true;
};
</script>

<style scoped lang="scss">
.templateWrapper {
  height: 100%;
  width: 18px;
}
.size-icon {
  font-size: 18px;
  fill: var(--el-color-info-dark-2);
}

:deep(.el-dialog) {
  margin: 40px auto 0px auto !important;
}
:deep(.el-dialog__header){
    padding: 0px;
}
//样式穿透
</style>
