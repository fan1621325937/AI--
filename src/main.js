import { createApp } from "vue";

import Cookies from "js-cookie";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/src/index.scss";
import locale from "element-plus/es/locale/lang/zh-cn";
import "@/assets/styles/index.scss"; // global css
import "./styles/index.scss";
import App from "./App";
import store from "./store";
import router from "./router";

import globalComponent from "@/components/index.js"; //引入需要注册的全部组件

// 自适应
import "amfe-flexible";

import directive from "./directive"; // directive

// 注册指令
import plugins from "./plugins"; // plugins
import { download } from "@/utils/request";

// svg图标
import "virtual:svg-icons-register";
import SvgIcon from "@/components/SvgIcon";
import elementIcons from "@/components/SvgIcon/svgicon";

import "./permission"; // permission control

import { useDict } from "@/utils/dict";

import globalProperties from "@/utils/globalProperties";

const app = createApp(App);

// 全局方法挂载
app.config.globalProperties.download = download; //下载文件
app.config.globalProperties.useDict = useDict; //字典数据方法挂载
for (const componentItme in globalProperties) {
  app.config.globalProperties[componentItme] = globalProperties[componentItme];
}




// 注册全局的组件 （对所有需要注册的组件进行遍历并注册）
for (const componentItme in globalComponent) {
  app.component(componentItme, globalComponent[componentItme]);
}

app.use(router);
app.use(store);
app.use(plugins);
app.use(elementIcons);
app.component("svg-icon", SvgIcon);

directive(app);

// 使用element-plus 并且设置全局的大小
app.use(ElementPlus, {
  locale: locale,
  // 支持 large、default、small
  size: Cookies.get("size") || "default",
});

app.mount("#app");
