<template>
  <div
    ref="chartRef"
    class="chart-container"
    :style="{ width: Props.width, height: Props.height }"
  >
    <!-- 当加载状态为 true 且图表尚未初始化时，显示 Loading 文本 -->
    <div v-if="loading && !chartInstance.value" class="loading">Loading...</div>
  </div>
</template>

<script setup>
import {
  ref,
  watch,
  onMounted,
  onUnmounted,
  defineProps,
  nextTick,
  markRaw,
} from "vue";
import * as echarts from "echarts";

// 定义组件的 Props
let Props = defineProps({
  // 图表的配置选项
  option: {
    type: Object,
    default: () => {
      return {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: "line",
          },
        ],
      };
    },
  },
  // 图表的宽度
  width: { type: String, default: "100%" },
  // 图表的高度
  height: { type: String, default: "100%" },
});

// 引用 DOM 容器
const chartRef = ref(null);
// 保存 ECharts 图表实例
const chartInstance = ref(null);

// 初始化图表
const initChart = async () => {
  // 如果 chartRef 不存在或图表已经初始化，直接返回
  if (!chartRef.value || chartInstance.value) return;

  // 获取 DOM 容器的宽高
  const { offsetWidth, offsetHeight } = chartRef.value;
  if (offsetWidth === 0 || offsetHeight === 0) {
    console.warn(
      "chartRef.offsetWidth 或 chartRef.offsetHeight 为 0，等待 100ms 后重试"
    );
    setTimeout(initChart, 100); // 等待 100ms 后重新尝试初始化
    return;
  }

  await nextTick(); // 确保 DOM 渲染完成
  chartInstance.value = markRaw(echarts.init(chartRef.value)); // 初始化 ECharts 图表实例

  // 如果有配置选项，设置图表
  if (Props.option) {
    chartInstance.value.setOption(Props.option);
  }
};

// 监听 Props.option 的变化，并更新图表
watch(
  () => Props.option,
  (newOption) => {
    if (newOption && chartInstance.value) {
      chartInstance.value.setOption(newOption); // 更新图表配置
    }
  },
  { deep: true } // 深度监听对象内部的变化
);

// 处理窗口大小变化，重新调整图表大小
const handleResize = () => {
  chartInstance.value?.resize(); // 调整图表大小
  chartInstance.value.setOption(Props.option); // 更新图表配置，确保展示正常
};

let observer; // 定义 ResizeObserver 实例
onMounted(() => {
  initChart(); // 组件挂载时初始化图表
  observer = new ResizeObserver(() => {
    handleResize(); // 当容器大小变化时调整图表
  });
  observer.observe(chartRef.value); // 监听 chartRef 的尺寸变化
});

onUnmounted(() => {
  observer?.disconnect(); // 解除 ResizeObserver 的监听
  chartInstance.value?.dispose(); // 销毁图表实例
});
</script>

<style scoped>
/* 容器样式 */
.chart-container {
  position: relative;
  width: 100%;
  height: 400px;
  min-height: 200px; /* 设置最小高度，确保内容可见 */
}

/* 加载提示样式 */
.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* 居中显示 */
  font-size: 16px;
  color: #999; /* 提示文字颜色 */
}
</style>
