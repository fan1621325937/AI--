import { getRefresh } from "@/api/overallApi";
const manager = defineStore("manager", {
  state: () => {
    return {
      platformDictValue: 0, //平台字典值
      //每个平台的可视化调度主页
      platformIndex: {
        // defaultHomepage默认首页
        0: "defaultHomepage", //融合平台总平台
        1: "defaultHomepage", //电子封条
        2: "defaultHomepage", //打钻
        3: "defaultHomepage", //人员防冲
        4: "defaultHomepage", //可视测温
        5: "defaultHomepage", //煤矿流量
        6: "coalFace", //采煤工作面
      },
    };
  },
  actions: {
    //设置平台字典
    setPlatformDictValue(platformDictValue) {
      this.platformDictValue = platformDictValue;
    },
    //每次刷新获取新数据
    async refreshPage(res) {
      let id = res.user.userId;
      if (id) {
        let dicValue = await getRefresh(id);
        if (dicValue) {
          this.setPlatformDictValue(dicValue.type);
        }
      }
    },
  },
});

export default manager;
