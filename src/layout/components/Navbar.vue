<template>
  <div class="navbar fbc">
    <!-- <div class="customTitle fs20">智能融合平台</div> -->

    <!-- <div class="fs1 menuWrap"> -->
    <!-- <div v-for="(route, index) in sidebarRouters" :key="route.path + index">
        {{ route.path }}
      </div> -->

    <!-- </div> -->

    <div class="right-menu fcc g10">
      <!-- <div class="theme-switch h100 fcc" v-if="appStore.device !== 'mobile'">
        <screenfull />
      </div> -->
      <div class="theme-switch h100 fcc g10">
        <screenfull />
        <el-icon class="theme-icon" @click="switchTheme">
          <Moon v-if="isDark" />
          <Sunny v-else />
        </el-icon>
      </div>

      <div class="avatar-container h100 fcc">
        <el-dropdown @command="handleCommand" trigger="click" class="h100">
          <div class="avatar-wrapper h100 fcc">
            <img :src="userStore.avatar" class="user-avatar" />
            <!-- <el-icon class="el-icon-caret-bottom"><ArrowDownBold /></el-icon> -->
          </div>

          <template #dropdown>
            <el-dropdown-menu>
              <router-link to="/user/profile">
                <el-dropdown-item>个人中心</el-dropdown-item>
              </router-link>
              <!-- <el-dropdown-item
                command="setLayout"
                v-if="settingsStore.showSettings"
              >
                <span>布局设置</span>
              </el-dropdown-item> -->
              <el-dropdown-item divided command="logout">
                <span>退出登录</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ElMessageBox } from "element-plus";
import Breadcrumb from "@/components/Breadcrumb";
import TopNav from "@/components/TopNav";
import Hamburger from "@/components/Hamburger";
import Screenfull from "@/components/Screenfull";
import SizeSelect from "@/components/SizeSelect";
import HeaderSearch from "@/components/HeaderSearch";
import RuoYiGit from "@/components/RuoYi/Git";
import RuoYiDoc from "@/components/RuoYi/Doc";
import useAppStore from "@/store/modules/app";
import useUserStore from "@/store/modules/user";
import useSettingsStore from "@/store/modules/settings";





const appStore = useAppStore();
const userStore = useUserStore();

const settingsStore = useSettingsStore();

import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
//切换主题色
function switchTheme() {
  toggleDark();
}

function toggleSideBar() {
  appStore.toggleSideBar();
}

function handleCommand(command) {
  switch (command) {
    case "setLayout":
      setLayout();
      break;
    case "logout":
      logout();
      break;
    default:
      break;
  }
}

function logout() {
  ElMessageBox.confirm("确定注销并退出系统吗？", "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  })
    .then(() => {
      userStore.logOut().then(() => {
        location.href = "/index";
      });
    })
    .catch(() => {});
}

const emits = defineEmits(["setLayout"]);
function setLayout() {
  emits("setLayout");
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 100%;
  width: 100%;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  // .hamburger-container {
  //   line-height: 46px;
  //   height: 100%;
  //   float: left;
  //   cursor: pointer;
  //   transition: background 0.3s;
  //   -webkit-tap-highlight-color: transparent;

  //   &:hover {
  //     background: rgba(0, 0, 0, 0.025);
  //   }
  // }

  // .breadcrumb-container {
  //   float: left;
  // }

  // .topmenu-container {
  //   position: absolute;
  //   left: 50px;
  // }

  // .errLog-container {
  //   display: inline-block;
  //   vertical-align: top;
  // }
}
.right-menu {
  height: 100%;
  display: flex;
}

.avatar-container {
  height: 40px;
}

.avatar-wrapper {
  height: 40px;
}
i {
  cursor: pointer;
  font-size: 12px;
}
.user-avatar {
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  position: relative;
}
.el-icon-caret-bottom {
}

.theme-switch {
  cursor: pointer;
}

.theme-icon {
  font-size: 24px;
}
</style>
