//charts1:视频页

const charts = {
  1001: {
    name: "摄像头控制",
    size: "small",
    component: "charts1001",
    img: new URL("@/assets/images/charts/charts1001.png", import.meta.url).href,
  },
  1002: {
    name: "异常报警",
    size: "small",
    component: "charts1001",
    img: new URL("@/assets/images/charts/charts1001.png", import.meta.url).href,
  },
  1: {
    name: "视频页",
    size: "large",
    component: "charts1",
    img: new URL("@/assets/images/charts/charts1.png", import.meta.url).href,
  },
  2: {
    name: "摄像头信息",
    size: "mini",
    component: "charts2",
    img: new URL("@/assets/images/charts/charts2.png", import.meta.url).href,
  },
  3: {
    name: "当天人员行为管理",
    size: "mini",
    component: "charts3",
    img: new URL("@/assets/images/charts/charts3.png", import.meta.url).href,
  },
  4: {
    name: "最近报警抓拍",
    size: "mini",
    component: "charts4",
    img: new URL("@/assets/images/charts/charts4.png", import.meta.url).href,
  },
  5: {
    name: "报警类型分布",
    size: "mini",
    component: "charts5",
    img: new URL("@/assets/images/charts/charts5.png", import.meta.url).href,
  },
  6: {
    name: "皮带宽度变化趋势",
    size: "mini",
    component: "charts6",
    img: new URL("@/assets/images/charts/charts6.png", import.meta.url).href,
  },
  7: {
    name: "煤流量趋势监测",
    size: "mini",
    component: "charts7",
    img: new URL("@/assets/images/charts/charts7.png", import.meta.url).href,
  },
  8: {
    name: "摄像头类型统计",
    size: "mini",
    component: "charts8",
    img: new URL("@/assets/images/charts/charts8.png", import.meta.url).href,
  },
  9: {
    name: "报警处置",
    size: "mini",
    component: "charts9",
    img: new URL("@/assets/images/charts/charts9.png", import.meta.url).href,
  },
  10: {
    name: "入井车辆统计",
    size: "mini",
    component: "charts10",
    img: new URL("@/assets/images/charts/charts10.png", import.meta.url).href,
  },
  11: {
    name: "货运车辆出矿统计",
    size: "mini",
    component: "charts11",
    img: new URL("@/assets/images/charts/charts11.png", import.meta.url).href,
  },
  12: {
    name: "出矿车辆统计",
    size: "mini",
    component: "charts12",
    img: new URL("@/assets/images/charts/charts12.png", import.meta.url).href,
  },
  13: {
    name: "电子封条摄像头",
    size: "mini",
    component: "charts13",
    img: new URL("@/assets/images/charts/charts13.png", import.meta.url).href,
  },
  14: {
    name: "入井人数统计",
    size: "mini",
    component: "charts14",
    img: new URL("@/assets/images/charts/charts14.png", import.meta.url).href,
  },
  15: {
    name: "运输设备状态实时监测",
    size: "mini",
    component: "charts15",
    img: new URL("@/assets/images/charts/charts15.png", import.meta.url).href,
  },
  16: {
    name: "传感器异物",
    size: "mini",
    component: "charts16",
    img: new URL("@/assets/images/charts/charts16.png", import.meta.url).href,
  },
  17: {
    name: "调度室空岗统计",
    size: "mini",
    component: "charts17",
    img: new URL("@/assets/images/charts/charts17.png", import.meta.url).href,
  },
  18: {
    name: "调度室睡岗统计",
    size: "mini",
    component: "charts18",
    img: new URL("@/assets/images/charts/charts18.png", import.meta.url).href,
  },
  19: {
    name: "长时间停车监控",
    size: "mini",
    component: "charts19",
    img: new URL("@/assets/images/charts/charts19.png", import.meta.url).href,
  },
  20: {
    name: "皮带状态监控",
    size: "mini",
    component: "charts20",
    img: new URL("@/assets/images/charts/charts20.png", import.meta.url).href,
  },
  21: {
    name: "煤流分析管控摄像头",
    size: "mini",
    component: "charts21",
    img: new URL("@/assets/images/charts/charts21.png", import.meta.url).href,
  },
  22: {
    name: "皮带速度变化趋势",
    size: "mini",
    component: "charts22",
    img: new URL("@/assets/images/charts/charts22.png", import.meta.url).href,
  },
  23: {
    name: "工作面摄像头",
    size: "mini",
    component: "charts23",
    img: new URL("@/assets/images/charts/charts23.png", import.meta.url).href,
  },
  24: {
    name: "工作面环境",
    size: "mini",
    component: "charts24",
    img: new URL("@/assets/images/charts/charts24.png", import.meta.url).href,
  },
  25: {
    name: "工作面大型设备状态",
    size: "mini",
    component: "charts25",
    img: new URL("@/assets/images/charts/charts25.png", import.meta.url).href,
  },
  26: {
    name: "报警处置",
    size: "mini",
    component: "charts26",
    img: new URL("@/assets/images/charts/charts26.png", import.meta.url).href,
  },
  27: {
    name: "异常报警",
    size: "mini",
    component: "charts26",
    img: new URL("@/assets/images/charts/charts26.png", import.meta.url).href,
  },
  28: {
    name: "液压支架状态",
    size: "mini",
    component: "charts26",
    img: new URL("@/assets/images/charts/charts26.png", import.meta.url).href,
  },
  29: {
    name: "工作面限员监测",
    size: "mini",
    component: "charts26",
    img: new URL("@/assets/images/charts/charts26.png", import.meta.url).href,
  },
  30: {
    name: "液压支架状态",
    size: "mini",
    component: "charts26",
    img: new URL("@/assets/images/charts/charts26.png", import.meta.url).href,
  },
};

let systemChartConfiguration = {
  0: {
    mini: [2, 3, 4, 5, 6, 7, 8, 9],
    small: [1001, 1002],
  },
};

export { charts, systemChartConfiguration };
