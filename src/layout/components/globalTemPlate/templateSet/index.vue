<template>
  <div class="w100 templateSet g20">
    <!-- //大屏布局 -->
    <div class="visualization g10">
      <div
        class="fcc templateItem"
        v-for="(item, index) in layoutInfo[currentTemplate].data"
        :key="index"
        :style="{ gridArea: item.grid }"
        @click="clickCurrentTemplate(item)"
      >
        {{ item.tip }}
      </div>
    </div>
    <!-- 大屏选择 -->
    <div class="visualizationsSelect g10">
      <h4 class="fs14-500 fsc none">布局选择</h4>
      <ul class="none templateList">
        <li
          class="none fsc g10"
          v-for="(item, index) in layoutInfo"
          :key="index"
          @click="setCurrentTemplate(item)"
        >
          <img :src="item.icon" alt="" />
          <div
            class="fs14-400 templateName fsc"
            :class="item.value == currentTemplate ? 'active' : ''"
          >
            {{ item.name }}
          </div>
        </li>
      </ul>
      <h4 class="fs14-500 fsc none mt20">说明</h4>
      <el-input v-model="tip" :rows="2" type="textarea" disabled />
      <el-button type="primary" @click="saveSetting">保存布局</el-button>
    </div>
    <!-- 图表选择 -->
    <div class="chartsSelect fsc g10">
      <div class="smallChart"></div> 
      <div class="miniChart"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, toRefs, onMounted, nextTick } from "vue";
import { charts, systemChartConfiguration } from "@/common/charts.js";
import layout from "@/common/template.js";

import manager from "@/store/modules/manager";

//let const
// 获取平台值
const managerStore = manager();
//let const

//computed
//系统平台值
let platformDictValue = computed(() => managerStore.platformDictValue);
//computed

// ref reactive
// 所有图表
let chartInfo = reactive({
  ...charts,
});
//所有排版
let layoutInfo = reactive({
  ...layout,
});
//当前系统可以配置的图表
const systemChartConfigurationInfo = reactive({
  ...systemChartConfiguration[managerStore.platformDictValue],
});
console.log(systemChartConfigurationInfo, "getCurrentTemplate");

//当前模板
let currentTemplate = ref(1);
//说明
let tip = ref("选择下方图表后,在点击上方选择(可替换模块)即可设置图表位置");
// ref reactive

// function
//设置当前模板
const setCurrentTemplate = (Template) => {
  currentTemplate.value = Template.value;
};
//点击当前模板
const clickCurrentTemplate = (item) => {
  console.log(item);
};
//保存当前模板
const saveSetting = () => {};
//根据平台值获取当前可用的模板
const getCurrentTemplate = () => {
  for (const key in systemChartConfigurationInfo) {
    if (
      Object.prototype.hasOwnProperty.call(systemChartConfigurationInfo, key)
    ) {
      systemChartConfigurationInfo[key] = systemChartConfigurationInfo[key].map(
        (item) => {
          return chartInfo[item];
        }
      );
    }
  }
};

// function

// onMounted
onMounted(() => {
  getCurrentTemplate();
});
// onMounted
</script>

<style scoped lang="scss">
.templateSet {
  height: calc(100vh - 100px);
  width: 100%;
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
  padding-top: 10px;
}
.visualization {
  width: calc(75% - 10px);
  height: calc(62% - 10px);
  display: grid;
}

.templateItem {
  opacity: 1;
  border-radius: 4.13px;
  background: var(--el-color-primary-light-7);
  border: 1px solid var(--el-color-primary-light-5);

  &:hover {
    background-color: var(--el-color-info-light-3);
  }

  &.active {
    background-color: var(--el-color-info-light-3);
  }
}

.visualizationsSelect {
  width: calc(25% - 10px);
  height: calc(62% - 10px);
  display: flex;
  flex-direction: column;

  img {
    width: 59px;
    height: 33px;
    background: var(--el-color-info-light-3);
  }
}

.chartsSelect {
  width: 100%;
  height: calc(38% - 10px);
  background-color: red;
}

.smallChart{
  
}
 .miniChart{

 }

.templateList {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.templateName {
  width: 233px;
  height: 32px;
  border-radius: 4px;
  background: var(--el-color-primary-light-7);
  padding-left: 10px;
  cursor: pointer;

  &:hover {
    background-color: var(--el-color-info-light-3);
  }

  &.active {
    background: var(--el-color-info-light-3);
  }
}
</style>
