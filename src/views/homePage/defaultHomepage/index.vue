<template>
  <div class="w100 h100 pageWrap">
    <div
      class="fcc templateItem"
      v-for="(item, index) in layoutInfo[currentTemplate].data"
      :key="index"
      :style="{ gridArea: item.grid }"
      @dblclick="removeCurrentTemplate(item)"
    >
      {{ item.component }}
    </div>
  </div>
</template>

<script setup>
import request from "@/utils/request";
import { ref, reactive, toRefs, onMounted, nextTick } from "vue";
import layout from "@/common/template.js";

import manager from "@/store/modules/manager";
import user from "@/store/modules/user";

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

//计算奇数项

//computed

// ref reactive
//所有排版
let layoutInfo = reactive({
  ...layout,
});

//当前模板
let currentTemplate = ref(1);

// ref reactive

// function
// 根据用户和当前系统获取布局
const getNowTemplate = async () => {
  let res = await request({
    url: `/viscenter/layout/current/user/${userId.value}/${platformDictValue.value}`,
    method: "get",
  });
  currentTemplate.value = res.data;
};

//根据布局获取布局详情
const getLayoutDetail = async () => {
  let res = await request({
    url: `/viscenter/layout/detail/query?userId=${userId.value}&layoutInfoId=${currentTemplate.value}&systemId=${platformDictValue.value}`,
    method: "get",
  });
  //处理当前布局
  handlelayoutDetail(res.data);
};

//处理当前布局
const handlelayoutDetail = async (data) => {
  layoutInfo[currentTemplate.value].data.forEach((element) => {
    data.forEach((item) => {
      if (`chart${element.value}` == item.chartsKey) {
        element.component = `charts${item.chartOrder}`;
      }
    });
  });
};

// function

//watch
//监听平台值的变化
watch(
  () => managerStore.platformDictValue,
  async () => {
    //获取当前模板
    await getNowTemplate();
    //获取布局详情
    await getLayoutDetail();
  }
);
//watch

// onMounted
onMounted(async () => {
  //获取当前模板
  await getNowTemplate();
  //获取布局详情
  await getLayoutDetail();
});
// onMounted
</script>

<style scoped lang="scss">
.pageWrap {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(4, calc(25% - 8px));
  grid-template-rows: repeat(3, calc(33.33% - 8px));
}
</style>
