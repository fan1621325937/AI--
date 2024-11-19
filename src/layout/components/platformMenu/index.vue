<template>
  <div class="h100 w100 fec">
    <el-popover
      popper-class="popperStyle"
      placement="bottom"
      trigger="click"
      :show-arrow="false"
    >
      <template #reference>
        <div class="menuIcon">
          <img src="@/assets/images/platMenu.png" alt="Platform Menu" />
        </div>
      </template>
      <div class="platformMenuWrap">
        <template v-for="(item, index) in platformRouters">
          <section v-if="item.children && item.children.length">
            <h4 class="metaTitle">{{ item.meta.title }}</h4>
            <nav class="menuNav">
              <div
                v-for="(it, i) in item.children"
                :key="i"
                class="navItem fcc"
                @click="getPlatform(it)"
                :class="{ clickStyle: it.name == platformDictValue }"
              >
                <span class="imgWrap">
                  <svg-icon
                    :icon-class="it.meta.icon"
                    class-name="system-icon"
                  />
                </span>
                <span :class="it.hidden ? 'menuItem2' : 'menuItem'">{{
                  it.meta.title
                }}</span>
              </div>
            </nav>
          </section>
        </template>
      </div>
    </el-popover>
  </div>
</template>

<script setup>
import { ref, reactive, toRefs, onMounted } from "vue";
import router from "@/router";
//导入路由
import usePermissionStore from "@/store/modules/permission";
import manager from "@/store/modules/manager";
import { setType } from "@/api/overallApi"; //设置当前平台
const { proxy } = getCurrentInstance(); //获取当前实例

//获取平台路由
const permissionStore = usePermissionStore();
const platformRouters = computed(() => permissionStore.platformRouters);
// 获取平台值
const managerStore = manager();
let platformDictValue = computed(() => managerStore.platformDictValue);

//设置平台字典值
const getPlatform = async (item) => {
  if (item.hidden) {
    return;
  }
  proxy.$modal.loading("正在切换平台请稍等...");
  managerStore.setPlatformDictValue(item.path);
  //设置当前平台
  let res = await setType(item.path);
  if (res.code === 200) {
    console.log(res);
    let accessRoutes = permissionStore.generateRoutes();
    // 根据roles权限生成可访问的路由表
    router.addRoute(accessRoutes); // 动态添加可访问路由表
    proxy.$router.push({ name: "Index" }); // 跳转
  }
  setTimeout(() => {
    proxy.$modal.closeLoading();
  }, 400);
};
</script>

<style scoped lang="scss">
.menuIcon {
  cursor: pointer;
  width: 80%;
  height: 80%;
  border-left: 1px solid var(--el-text-color-regular);
  img {
    width: 100%;
    height: 100%;
  }
}

.platformMenuWrap {
  height: 100%;
  width: 100%;
  overflow: auto;
}

.menuNav {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.navItem {

  display: flex;
  flex-direction: column;
  width: calc(50% - 5px);
  height: 65px;
  border-radius: 8px;
  background: var(--el-bg-color-customize-1);
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  gap: 10px;
  text-align: center;

  &.clickStyle {
    background: var(--el-bg-color-customize-2);
  }

  .imgWrap {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.menuItem2 {
  color: var(--el-text-color-regular);
}

.system-icon {
  font-size: 30px;
  color: var(--el-color-primary);
}

.metaTitle {
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 10px;
}
</style>

<style lang="scss">
.popperStyle {
  width: 462px !important;
  height: 400px;
  opacity: 0.9;
  border-radius: 16px;
  background: var(--el-card-bg-color);
  border: 1px solid rgba(255, 255, 255, 0.2) !important;
  box-shadow: inset -1px -1px 4px rgba(255, 255, 255, 0.4),
    0px 20px 40px rgba(85, 134, 173, 0.1) !important;
  backdrop-filter: blur(25px) !important;
}
</style>
