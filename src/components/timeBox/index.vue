<template>
  <div class="time_box fcc">
    <span class="time">{{ state.time }}</span>
    <div class="box">
      <span>{{ state.week }}</span>
      <span>{{ state.date }}</span>
    </div>
  </div>
</template>

<script setup>
import moment from "moment";

import { ref, reactive, toRefs, onMounted } from "vue";

const state = reactive({
  time: "",
  week: "",
  date: "",
});

const time = ref(null);

const getTime = () => {
  state.date = moment(new Date()).format("YYYY年MM月DD日");
  var now = new Date();
  var day = now.getDay();
  var weeks = [
    "星期日",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六",
  ];
  state.week = weeks[day];
  state.time = moment(new Date()).format("HH:mm");
};

onMounted(() => {
  time.value = setInterval(() => {
    getTime();
  }, 1000);
});

onBeforeUnmount(() => {
  clearInterval(time.value);
});
</script>

<style scoped lang="scss">
.time_box {
  width: 100%;
  height: 100%;
  span {
    white-space: nowrap;
    display: block;
    font-size: 12px;
  }

  .time {
    font-size: 32px;
    font-weight: bold;
    margin-right: 10px;
  }
}
</style>
