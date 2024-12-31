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
        @dblclick="removeCurrentTemplate(item)"
      >
        <img v-if="item.img" :src="item.img" alt="" />
        <span v-else> {{ item.tip }}</span>
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
      <div class="smallChart fsc g10">
        <img
          v-for="(item, index) in systemChartConfigurationInfo.small"
          :key="index"
          :src="item.img"
          alt=""
          class="smallChartItem ChartItemHover"
          @click="clickCurrentChart(item)"
          :class="item.component == currentChart.component ? 'active' : ''"
        />
      </div>
      <div class="miniChart fss g10">
        <div class="w100 miniChartItemWrap">
          <img
            v-for="(item, index) in evenIndexItems"
            :key="index"
            :src="item.img"
            alt=""
            class="miniChartItem ChartItemHover"
            @click="clickCurrentChart(item)"
            :class="item.component == currentChart.component ? 'active' : ''"
          />
        </div>

        <div class="w100 miniChartItemWrap">
          <img
            v-for="(item, index) in oddIndexItems"
            :src="item.img"
            :key="index"
            alt=""
            class="miniChartItem ChartItemHover"
            @click="clickCurrentChart(item)"
            :class="item.component == currentChart.component ? 'active' : ''"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ElMessage } from "element-plus";
import { ref, reactive, toRefs, onMounted, nextTick } from "vue";
import { charts, systemChartConfiguration } from "@/common/charts.js";
import layout from "@/common/template.js";

import manager from "@/store/modules/manager";
import user from "@/store/modules/user";

import { clearObjectValues } from "@/utils/customFunctions";

//let const
// 获取平台值
const managerStore = manager();
const userStore = user();

//let const

//computed
//系统平台值
let platformDictValue = computed(() => managerStore.platformDictValue);
let userId = computed(() => userStore.id);

//计算偶数项
let evenIndexItems = computed(() => {
  return systemChartConfigurationInfo.mini.filter((item, index) => {
    return index % 2 == 0;
  });
});

//计算奇数项
let oddIndexItems = computed(() => {
  return systemChartConfigurationInfo.mini.filter((item, index) => {
    return index % 2 == 1;
  });
});

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

//当前模板
let currentTemplate = ref(1);

//当前点击的图表
let currentChart = ref({
  component: undefined,
  img: undefined,
  name: undefined,
  size: undefined,
});

//说明
let tip = ref("选择下方图表后,在点击上方选择(可替换模块)即可设置图表位置");

// ref reactive

// function
//设置当前模板
const setCurrentTemplate = (Template) => {
  currentTemplate.value = Template.value;
};
//删除当前模板
const removeCurrentTemplate = (item) => {
  item.component = undefined;
  item.img = undefined;
};
//点击当前模板
const clickCurrentTemplate = (item) => {
  //去除不可编辑区域
  if (item.disabled) {
    return;
  }
  //检查点击的图表是否被应用
  if (
    currentChart.value.component &&
    currentChart.value.img &&
    !checkCurrentChartInt() &&
    checkSize(item)
  ) {
    item.component = currentChart.value.component;
    item.img = currentChart.value.img;
    //清空当前图表
    clearCurrentChart();
  } else {
    return;
  }
};

const checkSize = (item) => {
  let is = false;
  is = item.size == currentChart.value.size ? true : false;
  if (!is) {
    ElMessage({
      message: "图表尺寸不匹配",
      type: "warning",
    });
  }

  return is;
};

//检查当前图表有没有被应用
const checkCurrentChartInt = () => {
  let is = false;
  layoutInfo[currentTemplate.value].data.forEach((element) => {
    if (element.component && element.component == currentChart.value.component) {
      ElMessage({
        message: "该图表已被应用",
        type: "warning",
      });
      is = true;
    }
  });
  return is;
};
//清空当前选择的图表
const clearCurrentChart = () => {
  //清除当前图表
  currentChart.value = clearObjectValues(currentChart.value);
};
//点击当前图表
const clickCurrentChart = (item) => {
  currentChart.value = item;
};

//保存当前模板
const saveSetting = () => {
  let arr = [];
  layoutInfo[currentTemplate.value].data.forEach((element) => {
    arr.push({
      userId: userId.value,
      layoutInfoId: currentTemplate.value,
      chartOrder: element.value,
      chartsKey: element.component,
      systemId: platformDictValue.value,
    });
  });
};
//根据平台值获取当前可用的模板
const getCurrentTemplate = () => {
  for (const key in systemChartConfigurationInfo) {
    if (Object.prototype.hasOwnProperty.call(systemChartConfigurationInfo, key)) {
      systemChartConfigurationInfo[key] = systemChartConfigurationInfo[key].map(
        (item) => {
          return {
            ...chartInfo[item],
          };
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
  gap: 8px;
  grid-template-columns: repeat(4, calc(25% - 8px));
  grid-template-rows: repeat(3, calc(33.33% - 8px));
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
  img {
    height: 100%;
    width: 100%;
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
}

.smallChart {
  width: 270px;
  height: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
}

.smallChartItem {
  width: 270px !important;
  height: 100%;
  flex-shrink: 0; /* 防止元素缩小 */
}

.miniChart {
  width: calc(100% - 280px);
  height: 100%;
  overflow-y: hidden;
  overflow-x: scroll;
  display: flex;
  flex-direction: column;
}

.miniChartItemWrap {
  display: flex;
  gap: 10px;
  height: calc(50% - 10px);
}

.miniChartItem {
  width: 270px !important;
  height: 100%;
  flex-shrink: 0; /* 防止元素缩小 */
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

.ChartItemHover {
  &:hover {
    border: 2px solid var(--el-color-info-light-3);
    border-radius: 4px;
    cursor: pointer;
    opacity: 0.7;
    background-color: var(--el-color-info-light-3);
  }

  &.active {
    border: 2px solid var(--el-color-info-light-3);
    border-radius: 4px;
    cursor: pointer;
    opacity: 0.7;
    background-color: var(--el-color-info-light-3);
  }
}
</style>
