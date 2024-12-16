<template>
  <!-- <div :class="classObj" class="app-wrapper" :style="{ '--current-color': theme }">
    <div v-if="device === 'mobile' && sidebar.opened" class="drawer-bg" @click="handleClickOutside"/>
    <sidebar v-if="!sidebar.hide" class="sidebar-container" />
    <div :class="{ hasTagsView: needTagsView, sidebarHide: sidebar.hide }" class="main-container">
      <div :class="{ 'fixed-header': fixedHeader }">
        <navbar @setLayout="setLayout" />
        <tags-view v-if="needTagsView" />
      </div>
      <app-main />
      <settings ref="settingRef" />
    </div>
  </div> -->

  <!-- <tags-view /> -->
  <div class="fdc wrap">
    <!-- 顶部 -->
    <div class="navbar-Wrapper">
      <!-- 平台标题 -->
      <div class="platformTitle-Wrapper h100 fsc">
        <platformTitle />
      </div>
      <!-- 平台路由 -->
      <div class="route-Wrapper h100 fsc">
        <topSidebar />
      </div>
      <!-- 平台布局按钮 -->
      <!-- <div class="h100 fcc">
        <globalTemPlate />
      </div> -->
      <!-- 个人中心 -->
      <div class="navbar-item h100 fsc">
        <navbar />
      </div>
      <!-- 时间显示 -->
      <div class="timeBox-Wrapper h100 fsc">
        <timeBox />
      </div>
      <!-- 平台选择组件 -->
      <div class="paltformMenu-Wrapper h100 fsc">
        <platformMenu />
      </div>
    </div>

    <div class="main-Wrapper">
      <app-main />
    </div>

    <div class="footer-Wrapper">
      <company />
    </div>
  </div>
</template>

<script setup>
import { useWindowSize } from "@vueuse/core";
import globalTemPlate from "./components/globalTemPlate/index.vue";
import Sidebar from "./components/Sidebar/index.vue";
import {
  AppMain,
  Navbar,
  Settings,
  TagsView,
  Company,
  platformMenu,
  platformTitle,
  topSidebar,
} from "./components";
import defaultSettings from "@/settings";

import useAppStore from "@/store/modules/app";
import useSettingsStore from "@/store/modules/settings";

const settingsStore = useSettingsStore();
const theme = computed(() => settingsStore.theme);
const sideTheme = computed(() => settingsStore.sideTheme);
const sidebar = computed(() => useAppStore().sidebar);
const device = computed(() => useAppStore().device);
const needTagsView = computed(() => settingsStore.tagsView);
const fixedHeader = computed(() => settingsStore.fixedHeader);

const classObj = computed(() => ({
  hideSidebar: !sidebar.value.opened,
  openSidebar: sidebar.value.opened,
  withoutAnimation: sidebar.value.withoutAnimation,
  mobile: device.value === "mobile",
}));

const { width, height } = useWindowSize();
const WIDTH = 992; // refer to Bootstrap's responsive design

watch(
  () => device.value,
  () => {
    if (device.value === "mobile" && sidebar.value.opened) {
      useAppStore().closeSideBar({ withoutAnimation: false });
    }
  }
);

watchEffect(() => {
  if (width.value - 1 < WIDTH) {
    useAppStore().toggleDevice("mobile");
    useAppStore().closeSideBar({ withoutAnimation: true });
  } else {
    useAppStore().toggleDevice("desktop");
  }
});

function handleClickOutside() {
  useAppStore().closeSideBar({ withoutAnimation: false });
}

const settingRef = ref(null);
function setLayout() {
  settingRef.value.openSetting();
}
</script>

<style lang="scss" scoped>
// @import "@/assets/styles/mixin.scss";
// @import "@/assets/styles/variables.module.scss";

// .app-wrapper {
//   @include clearfix;
//   position: relative;
//   height: 100%;
//   width: 100%;

//   &.mobile.openSidebar {
//     position: fixed;
//     top: 0;
//   }
// }

// .drawer-bg {
//   background: #000;
//   opacity: 0.3;
//   width: 100%;
//   top: 0;
//   height: 100%;
//   position: absolute;
//   z-index: 999;
// }

// .fixed-header {
//   position: fixed;
//   top: 0;
//   right: 0;
//   z-index: 9;
//   width: calc(100% - #{$base-sidebar-width});
//   transition: width 0.28s;
// }

// .hideSidebar .fixed-header {
//   width: calc(100% - 54px);
// }

// .sidebarHide .fixed-header {
//   width: 100%;
// }

// .mobile .fixed-header {
//   width: 100%;
// }
.wrap {
  width: 100vw;
  height: 100vh;
  padding: 0px 20px 0px 20px;
}

// 顶部
.navbar-Wrapper {
  height: 56px;
  width: calc(100vw - 40px);
  display: flex;
  gap: 20px;
}
// 平台标题
.platformTitle-Wrapper {
  max-width: 350px;
}

.route-Wrapper {
  flex: 1;
}

// .navbar-item {
//   width: 110px;
// }
// .timeBox-Wrapper {
//   width: 200px;
// }

.paltformMenu-Wrapper {
  height: 100%;
  width: 65px;
}

.footer-Wrapper {
  height: 36px;
  width: calc(100vw - 40px);
}

.main-Wrapper {
  height: calc(100vh - 56px - 36px);
}
</style>
