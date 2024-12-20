// 为了保证视频页面的不可改变统一设定第一个为中心区域

const layout = {
  1: {
    name: "默认布局1",
    value: 1,
    icon: new URL(
      "@/assets/images/templates/electronicSealTemplate1.png",
      import.meta.url
    ).href,
    data: [
      {
        value: 1, //插槽值
        grid: "1/ 1 / 3 / 4", //布局位置
        Component: "charts1", //表单名称
        note: "中心区域", //备注
        size: "large", //大小
        disabled: true, //是否禁用
        tip: "中心区域不可编辑", //提示信息
      },
      {
        value: 2,
        grid: "1/4/2/5",
        Component: undefined,
        note: "右1",
        size: "mini",
        disabled: false,
        tip: "可替换模块",
      },
      {
        value: 3,
        grid: "2/4/3/5",
        Component: undefined,
        note: "右2",
        size: "mini",
        disabled: false,
        tip: "可替换模块",
      },
      {
        value: 4,
        grid: "3/4/4/5",
        Component: undefined,
        note: "右3",
        size: "mini",
        disabled: false,
        tip: "可替换模块",
      },
      {
        value: 5,
        grid: "3/1/4/2",
        Component: undefined,
        note: "下1",
        size: "mini",
        disabled: false,
        tip: "可替换模块",
      },
      {
        value: 6,
        grid: "3/2/4/3",
        Component: undefined,
        note: "下2",
        size: "mini",
        disabled: false,
        tip: "可替换模块",
      },
      {
        value: 7,
        grid: "3/3/4/4",
        Component: undefined,
        note: "下3",
        size: "mini",
        disabled: false,
        tip: "可替换模块",
      },
    ],
  },

  2: {
    name: "默认布局2",
    value: 2,
    icon: new URL(
      "@/assets/images/templates/electronicSealTemplate2.png",
      import.meta.url
    ).href,
    data: [
      {
        value: 1,
        grid: "1/ 2 / 3 / 4",
        Component: "charts1",
        note: "中心区域",
        size: "large",
        disabled: true,
        tip: "中心区域不可编辑",
      },
      {
        value: 2,
        grid: "1/1/4/2",
        Component: undefined,
        note: "左侧区域",
        size: "small",
        disabled: false,
        tip: "可替换模块",
      },
      {
        value: 3,
        grid: "1/4/2/5",
        Component: undefined,
        note: "右1",
        size: "mini",
        disabled: false,
        tip: "可替换模块",
      },
      {
        value: 4,
        grid: "3/4/4/5",
        Component: undefined,
        note: "右2",
        size: "mini",
        disabled: false,
        tip: "可替换模块",
      },
      {
        value: 5,
        grid: "2/4/3/5",
        Component: undefined,
        note: "右3",
        size: "mini",
        disabled: false,
        tip: "可替换模块",
      },
      {
        value: 6,
        grid: "3/2/4/3",
        Component: undefined,
        note: "下1",
        size: "mini",
        disabled: false,
        tip: "可替换模块",
      },
      {
        value: 7,
        grid: "3/3/4/4",
        Component: undefined,
        note: "下2",
        size: "mini",
        disabled: false,
        tip: "可替换模块",
      },
    ],
  },

  3: {
    name: "默认布局3",
    value: 3,
    icon: new URL(
      "@/assets/images/templates/electronicSealTemplate3.png",
      import.meta.url
    ).href,
    data: [
      {
        value: 1,
        grid: "1/ 2 / 3 / 4",
        Component: "charts1",
        note: "中心区域",
        size: "large",
        disabled: true,
        tip: "中心区域不可编辑",
      },
      {
        value: 2,
        grid: "1/1/2/2",
        Component: undefined,
        note: "左1",
        size: "small",
        disabled: false,
        tip: "可替换模块",
      },
      {
        value: 3,
        grid: "2/1/3/2",
        Component: undefined,
        note: "左2",
        size: "mini",
        disabled: false,
        tip: "可替换模块",
      },
      {
        value: 4,
        grid: "3/1/4/2",
        Component: undefined,
        note: "左3",
        size: "mini",
        disabled: false,
        tip: "可替换模块",
      },
      {
        value: 5,
        grid: "1/4/4/5",
        Component: undefined,
        note: "右侧区域",
        size: "mini",
        disabled: false,
        tip: "可替换模块",
      },
      {
        value: 6,
        grid: "3/2/4/3",
        Component: undefined,
        note: "下1",
        size: "mini",
        disabled: false,
        tip: "可替换模块",
      },
      {
        value: 7,
        grid: "3/3/4/4",
        Component: undefined,
        note: "下2",
        size: "mini",
        disabled: false,
        tip: "可替换模块",
      },
    ],
  },

  4: {
    name: "默认布局4",
    value: 4,
    icon: new URL(
      "@/assets/images/templates/electronicSealTemplate4.png",
      import.meta.url
    ).href,
    data: [
      {
        value: 1,
        grid: "1/ 2 / 4 / 4",
        Component: "charts1",
        note: "中心区域",
        size: "large",
        disabled: true,
        tip: "中心区域不可编辑",
      },
      {
        value: 2,
        grid: "1/1/2/2",
        Component: undefined,
        note: "左1",
        size: "small",
        disabled: false,
        tip: "可替换模块",
      },
      {
        value: 3,
        grid: "2/1/3/2",
        Component: undefined,
        note: "左2",
        size: "mini",
        disabled: false,
        tip: "可替换模块",
      },
      {
        value: 4,
        grid: "3/1/4/2",
        Component: undefined,
        note: "左3",
        size: "mini",
        disabled: false,
        tip: "可替换模块",
      },
      {
        value: 5,
        grid: "1/4/2/5",
        Component: undefined,
        note: "右1",
        size: "mini",
        disabled: false,
        tip: "可替换模块",
      },
      {
        value: 6,
        grid: "2/4/3/5",
        Component: undefined,
        note: "右2",
        size: "mini",
        disabled: false,
        tip: "可替换模块",
      },
      {
        value: 7,
        grid: "3/4/4/5",
        Component: undefined,
        note: "右3",
        size: "mini",
        disabled: false,
        tip: "可替换模块",
      },
    ],
  },

  5: {
    name: "默认布局5",
    value: 5,
    icon: new URL(
      "@/assets/images/templates/electronicSealTemplate5.png",
      import.meta.url
    ).href,
    data: [
      {
        value: 1,
        grid: "1/ 2 / 3 / 4",
        Component: "charts1",
        note: "中心区域",
        size: "large",
        disabled: true,
        tip: "中心区域不可编辑",
      },
      {
        value: 2,
        grid: "1/1/2/2",
        Component: undefined,
        note: "左1",
        size: "small",
        disabled: false,
        tip: "可替换模块",
      },
      {
        value: 3,
        grid: "2/1/3/2",
        Component: undefined,
        note: "左2",
        size: "mini",
        disabled: false,
        tip: "可替换模块",
      },
      {
        value: 4,
        grid: "3/1/4/2",
        Component: undefined,
        note: "左3",
        size: "mini",
        disabled: false,
        tip: "可替换模块",
      },
      {
        value: 5,
        grid: "1/4/2/5",
        Component: undefined,
        note: "右1",
        size: "mini",
        disabled: false,
        tip: "可替换模块",
      },
      {
        value: 6,
        grid: "2/4/3/5",
        Component: undefined,
        note: "右2",
        size: "mini",
        disabled: false,
        tip: "可替换模块",
      },
      {
        value: 7,
        grid: "3/4/4/5",
        Component: undefined,
        note: "右3",
        size: "mini",
        disabled: false,
        tip: "可替换模块",
      },
      {
        value: 8,
        grid: "3/2/4/3",
        Component: undefined,
        note: "下1",
        size: "mini",
        disabled: false,
        tip: "可替换模块",
      },
      {
        value: 9,
        grid: "3/3/4/4",
        Component: undefined,
        note: "下2",
        size: "mini",
        disabled: false,
        tip: "可替换模块",
      },
    ],
  },

  6: {
    name: "默认布局1",
    value: 6,
    icon: new URL(
      "@/assets/images/templates/electronicSealTemplate1.png",
      import.meta.url
    ).href,
    data: [
      {
        value: 1, //插槽值
        grid: "1/ 1 / 3 / 4", //布局位置
        Component: "charts1", //表单名称
        note: "中心区域", //备注
        size: "large", //大小
        disabled: true, //是否禁用
        tip: "中心区域不可编辑", //提示信息
      },
      {
        value: 2,
        grid: "1/4/4/5",
        Component: undefined,
        note: "右1",
        size: "mini",
        disabled: false,
        tip: "可替换模块",
      },
      {
        value: 4,
        grid: "3/1/4/2",
        Component: undefined,
        note: "下1",
        size: "mini",
        disabled: false,
        tip: "可替换模块",
      },
      {
        value: 5,
        grid: "3/2/4/3",
        Component: undefined,
        note: "下2",
        size: "mini",
        disabled: false,
        tip: "可替换模块",
      },
      {
        value: 6,
        grid: "3/3/4/4",
        Component: undefined,
        note: "下3",
        size: "mini",
        disabled: false,
        tip: "可替换模块",
      },
    ],
  },
};

export default layout;
